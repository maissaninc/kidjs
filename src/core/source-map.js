/**
 * Mapping collector compatible with astring's `sourceMap` option.
 * Stores generated → original positions without VLQ encoding.
 */
export class SourceMap {

  constructor() {
    this.file = 'kidjs';
    this._file = 'kidjs';
    this.mappings = [];
  }

  /**
   * Record a mapping from astring. Values are copied because astring
   * reuses the same `generated` state object across writes.
   *
   * @param {Object} mapping
   */
  addMapping(mapping) {
    if (!mapping || !mapping.original || !mapping.generated) {
      return;
    }
    this.mappings.push({
      generatedLine: mapping.generated.line,
      generatedColumn: mapping.generated.column,
      originalLine: mapping.original.line,
      originalColumn: mapping.original.column
    });
  }

  /**
   * Find the original position for a generated line/column.
   * Uses the last mapping at or before the query (source-map consumer rule).
   * Lines are 1-based; columns are 0-based (ESTree).
   *
   * @param {Number} line - Generated line
   * @param {Number} column - Generated column
   * @return {?{line: Number, column: Number}}
   */
  originalPositionFor(line, column) {
    let mappings = this.mappings;
    if (mappings.length === 0) {
      return null;
    }

    let lo = 0;
    let hi = mappings.length - 1;
    let found = -1;

    while (lo <= hi) {
      let mid = (lo + hi) >> 1;
      let mapping = mappings[mid];
      if (
        mapping.generatedLine < line ||
        (mapping.generatedLine === line && mapping.generatedColumn <= column)
      ) {
        found = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    // If the closest earlier mapping is on a previous generated line, prefer
    // the next mapping when it sits on the query line (e.g. a leading `await`).
    if (found !== -1 && mappings[found].generatedLine !== line) {
      let next = mappings[found + 1];
      if (next && next.generatedLine === line) {
        found = found + 1;
      }
    }

    if (found === -1) {
      let first = mappings[0];
      if (first.generatedLine === line) {
        found = 0;
      } else {
        return null;
      }
    }

    let mapping = mappings[found];
    let originalColumn = mapping.originalColumn;
    if (mapping.generatedLine === line && column >= mapping.generatedColumn) {
      originalColumn = mapping.originalColumn + (column - mapping.generatedColumn);
    }

    return {
      line: mapping.originalLine,
      column: originalColumn
    };
  }
}

/**
 * Extract the generated line/column of the eval'd user program from a stack.
 * Stack coordinates are 1-based (V8 / SpiderMonkey).
 *
 * @param {String} stack
 * @return {?{line: Number, column: Number}}
 */
export function parseEvalStackFrame(stack) {
  if (!stack) {
    return null;
  }

  let lines = String(stack).split('\n');

  for (let i = 0; i < lines.length; i = i + 1) {
    let match = lines[i].match(/kidjs:\/\/index\.js:(\d+):(\d+)/);
    if (match) {
      return {
        line: parseInt(match[1], 10),
        column: parseInt(match[2], 10)
      };
    }
  }

  for (let i = 0; i < lines.length; i = i + 1) {
    let line = lines[i];

    // Chrome/V8: eval at run (...), <anonymous>:LINE:COL
    let match = line.match(/<anonymous>:(\d+):(\d+)/);
    if (match && /eval/i.test(line)) {
      return {
        line: parseInt(match[1], 10),
        column: parseInt(match[2], 10)
      };
    }

    // Firefox / Safari eval
    match = line.match(/(?:debugger eval code|eval code):(\d+):(\d+)/);
    if (match) {
      return {
        line: parseInt(match[1], 10),
        column: parseInt(match[2], 10)
      };
    }
  }

  return null;
}
