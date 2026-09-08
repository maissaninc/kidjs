(function(factory) {
	typeof define === "function" && define.amd ? define([], factory) : factory();
})(function() {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	//#region node_modules/acorn/dist/acorn.mjs
	var acorn_exports = /* @__PURE__ */ __exportAll({
		Node: () => Node,
		Parser: () => Parser,
		Position: () => Position,
		SourceLocation: () => SourceLocation,
		TokContext: () => TokContext,
		Token: () => Token,
		TokenType: () => TokenType,
		defaultOptions: () => defaultOptions,
		getLineInfo: () => getLineInfo,
		isIdentifierChar: () => isIdentifierChar,
		isIdentifierStart: () => isIdentifierStart,
		isNewLine: () => isNewLine,
		keywordTypes: () => keywords,
		lineBreak: () => lineBreak,
		lineBreakG: () => lineBreakG,
		nonASCIIwhitespace: () => nonASCIIwhitespace,
		parse: () => parse,
		parseExpressionAt: () => parseExpressionAt,
		tokContexts: () => types,
		tokTypes: () => types$1,
		tokenizer: () => tokenizer,
		version: () => version
	});
	var astralIdentifierCodes = [
		509,
		0,
		227,
		0,
		150,
		4,
		294,
		9,
		1368,
		2,
		2,
		1,
		6,
		3,
		41,
		2,
		5,
		0,
		166,
		1,
		574,
		3,
		9,
		9,
		7,
		9,
		32,
		4,
		318,
		1,
		78,
		5,
		71,
		10,
		50,
		3,
		123,
		2,
		54,
		14,
		32,
		10,
		3,
		1,
		11,
		3,
		46,
		10,
		8,
		0,
		46,
		9,
		7,
		2,
		37,
		13,
		2,
		9,
		6,
		1,
		45,
		0,
		13,
		2,
		49,
		13,
		9,
		3,
		2,
		11,
		83,
		11,
		7,
		0,
		3,
		0,
		158,
		11,
		6,
		9,
		7,
		3,
		56,
		1,
		2,
		6,
		3,
		1,
		3,
		2,
		10,
		0,
		11,
		1,
		3,
		6,
		4,
		4,
		68,
		8,
		2,
		0,
		3,
		0,
		2,
		3,
		2,
		4,
		2,
		0,
		15,
		1,
		83,
		17,
		10,
		9,
		5,
		0,
		82,
		19,
		13,
		9,
		214,
		6,
		3,
		8,
		28,
		1,
		83,
		16,
		16,
		9,
		82,
		12,
		9,
		9,
		7,
		19,
		58,
		14,
		5,
		9,
		243,
		14,
		166,
		9,
		71,
		5,
		2,
		1,
		3,
		3,
		2,
		0,
		2,
		1,
		13,
		9,
		120,
		6,
		3,
		6,
		4,
		0,
		29,
		9,
		41,
		6,
		2,
		3,
		9,
		0,
		10,
		10,
		47,
		15,
		199,
		7,
		137,
		9,
		54,
		7,
		2,
		7,
		17,
		9,
		57,
		21,
		2,
		13,
		123,
		5,
		4,
		0,
		2,
		1,
		2,
		6,
		2,
		0,
		9,
		9,
		49,
		4,
		2,
		1,
		2,
		4,
		9,
		9,
		55,
		9,
		266,
		3,
		10,
		1,
		2,
		0,
		49,
		6,
		4,
		4,
		14,
		10,
		5350,
		0,
		7,
		14,
		11465,
		27,
		2343,
		9,
		87,
		9,
		39,
		4,
		60,
		6,
		26,
		9,
		535,
		9,
		470,
		0,
		2,
		54,
		8,
		3,
		82,
		0,
		12,
		1,
		19628,
		1,
		4178,
		9,
		519,
		45,
		3,
		22,
		543,
		4,
		4,
		5,
		9,
		7,
		3,
		6,
		31,
		3,
		149,
		2,
		1418,
		49,
		513,
		54,
		5,
		49,
		9,
		0,
		15,
		0,
		23,
		4,
		2,
		14,
		1361,
		6,
		2,
		16,
		3,
		6,
		2,
		1,
		2,
		4,
		101,
		0,
		161,
		6,
		10,
		9,
		357,
		0,
		62,
		13,
		499,
		13,
		245,
		1,
		2,
		9,
		233,
		0,
		3,
		0,
		8,
		1,
		6,
		0,
		475,
		6,
		110,
		6,
		6,
		9,
		4759,
		9,
		787719,
		239
	];
	var astralIdentifierStartCodes = [
		0,
		11,
		2,
		25,
		2,
		18,
		2,
		1,
		2,
		14,
		3,
		13,
		35,
		122,
		70,
		52,
		268,
		28,
		4,
		48,
		48,
		31,
		14,
		29,
		6,
		37,
		11,
		29,
		3,
		35,
		5,
		7,
		2,
		4,
		43,
		157,
		19,
		35,
		5,
		35,
		5,
		39,
		9,
		51,
		13,
		10,
		2,
		14,
		2,
		6,
		2,
		1,
		2,
		10,
		2,
		14,
		2,
		6,
		2,
		1,
		4,
		51,
		13,
		310,
		10,
		21,
		11,
		7,
		25,
		5,
		2,
		41,
		2,
		8,
		70,
		5,
		3,
		0,
		2,
		43,
		2,
		1,
		4,
		0,
		3,
		22,
		11,
		22,
		10,
		30,
		66,
		18,
		2,
		1,
		11,
		21,
		11,
		25,
		7,
		25,
		39,
		55,
		7,
		1,
		65,
		0,
		16,
		3,
		2,
		2,
		2,
		28,
		43,
		28,
		4,
		28,
		36,
		7,
		2,
		27,
		28,
		53,
		11,
		21,
		11,
		18,
		14,
		17,
		111,
		72,
		56,
		50,
		14,
		50,
		14,
		35,
		39,
		27,
		10,
		22,
		251,
		41,
		7,
		1,
		17,
		5,
		57,
		28,
		11,
		0,
		9,
		21,
		43,
		17,
		47,
		20,
		28,
		22,
		13,
		52,
		58,
		1,
		3,
		0,
		14,
		44,
		33,
		24,
		27,
		35,
		30,
		0,
		3,
		0,
		9,
		34,
		4,
		0,
		13,
		47,
		15,
		3,
		22,
		0,
		2,
		0,
		36,
		17,
		2,
		24,
		20,
		1,
		64,
		6,
		2,
		0,
		2,
		3,
		2,
		14,
		2,
		9,
		8,
		46,
		39,
		7,
		3,
		1,
		3,
		21,
		2,
		6,
		2,
		1,
		2,
		4,
		4,
		0,
		19,
		0,
		13,
		4,
		31,
		9,
		2,
		0,
		3,
		0,
		2,
		37,
		2,
		0,
		26,
		0,
		2,
		0,
		45,
		52,
		19,
		3,
		21,
		2,
		31,
		47,
		21,
		1,
		2,
		0,
		185,
		46,
		42,
		3,
		37,
		47,
		21,
		0,
		60,
		42,
		14,
		0,
		72,
		26,
		38,
		6,
		186,
		43,
		117,
		63,
		32,
		7,
		3,
		0,
		3,
		7,
		2,
		1,
		2,
		23,
		16,
		0,
		2,
		0,
		95,
		7,
		3,
		38,
		17,
		0,
		2,
		0,
		29,
		0,
		11,
		39,
		8,
		0,
		22,
		0,
		12,
		45,
		20,
		0,
		19,
		72,
		200,
		32,
		32,
		8,
		2,
		36,
		18,
		0,
		50,
		29,
		113,
		6,
		2,
		1,
		2,
		37,
		22,
		0,
		26,
		5,
		2,
		1,
		2,
		31,
		15,
		0,
		24,
		43,
		261,
		18,
		16,
		0,
		2,
		12,
		2,
		33,
		125,
		0,
		80,
		921,
		103,
		110,
		18,
		195,
		2637,
		96,
		16,
		1071,
		18,
		5,
		26,
		3994,
		6,
		582,
		6842,
		29,
		1763,
		568,
		8,
		30,
		18,
		78,
		18,
		29,
		19,
		47,
		17,
		3,
		32,
		20,
		6,
		18,
		433,
		44,
		212,
		63,
		33,
		24,
		3,
		24,
		45,
		74,
		6,
		0,
		67,
		12,
		65,
		1,
		2,
		0,
		15,
		4,
		10,
		7381,
		42,
		31,
		98,
		114,
		8702,
		3,
		2,
		6,
		2,
		1,
		2,
		290,
		16,
		0,
		30,
		2,
		3,
		0,
		15,
		3,
		9,
		395,
		2309,
		106,
		6,
		12,
		4,
		8,
		8,
		9,
		5991,
		84,
		2,
		70,
		2,
		1,
		3,
		0,
		3,
		1,
		3,
		3,
		2,
		11,
		2,
		0,
		2,
		6,
		2,
		64,
		2,
		3,
		3,
		7,
		2,
		6,
		2,
		27,
		2,
		3,
		2,
		4,
		2,
		0,
		4,
		6,
		2,
		339,
		3,
		24,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		30,
		2,
		24,
		2,
		7,
		1845,
		30,
		7,
		5,
		262,
		61,
		147,
		44,
		11,
		6,
		17,
		0,
		322,
		29,
		19,
		43,
		485,
		27,
		229,
		29,
		3,
		0,
		208,
		30,
		2,
		2,
		2,
		1,
		2,
		6,
		3,
		4,
		10,
		1,
		225,
		6,
		2,
		3,
		2,
		1,
		2,
		14,
		2,
		196,
		60,
		67,
		8,
		0,
		1205,
		3,
		2,
		26,
		2,
		1,
		2,
		0,
		3,
		0,
		2,
		9,
		2,
		3,
		2,
		0,
		2,
		0,
		7,
		0,
		5,
		0,
		2,
		0,
		2,
		0,
		2,
		2,
		2,
		1,
		2,
		0,
		3,
		0,
		2,
		0,
		2,
		0,
		2,
		0,
		2,
		0,
		2,
		1,
		2,
		0,
		3,
		3,
		2,
		6,
		2,
		3,
		2,
		3,
		2,
		0,
		2,
		9,
		2,
		16,
		6,
		2,
		2,
		4,
		2,
		16,
		4421,
		42719,
		33,
		4381,
		3,
		5773,
		3,
		7472,
		16,
		621,
		2467,
		541,
		1507,
		4938,
		6,
		8489
	];
	var nonASCIIidentifierChars = "\u200C\u200D\u00B7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
	var nonASCIIidentifierStartChars = "\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
	var reservedWords = {
		3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
		5: "class enum extends super const export import",
		6: "enum",
		strict: "implements interface let package private protected public static yield",
		strictBind: "eval arguments"
	};
	var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
	var keywords$1 = {
		5: ecma5AndLessKeywords,
		"5module": ecma5AndLessKeywords + " export import",
		6: ecma5AndLessKeywords + " const class extends export import super"
	};
	var keywordRelationalOperator = /^in(stanceof)?$/;
	var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
	function isInAstralSet(code, set) {
		var pos = 65536;
		for (var i = 0; i < set.length; i += 2) {
			pos += set[i];
			if (pos > code) return false;
			pos += set[i + 1];
			if (pos >= code) return true;
		}
		return false;
	}
	function isIdentifierStart(code, astral) {
		if (code < 65) return code === 36;
		if (code < 91) return true;
		if (code < 97) return code === 95;
		if (code < 123) return true;
		if (code <= 65535) return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
		if (astral === false) return false;
		return isInAstralSet(code, astralIdentifierStartCodes);
	}
	function isIdentifierChar(code, astral) {
		if (code < 48) return code === 36;
		if (code < 58) return true;
		if (code < 65) return false;
		if (code < 91) return true;
		if (code < 97) return code === 95;
		if (code < 123) return true;
		if (code <= 65535) return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
		if (astral === false) return false;
		return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
	}
	var TokenType = function TokenType(label, conf) {
		if (conf === void 0) conf = {};
		this.label = label;
		this.keyword = conf.keyword;
		this.beforeExpr = !!conf.beforeExpr;
		this.startsExpr = !!conf.startsExpr;
		this.isLoop = !!conf.isLoop;
		this.isAssign = !!conf.isAssign;
		this.prefix = !!conf.prefix;
		this.postfix = !!conf.postfix;
		this.binop = conf.binop || null;
		this.updateContext = null;
	};
	function binop(name, prec) {
		return new TokenType(name, {
			beforeExpr: true,
			binop: prec
		});
	}
	var beforeExpr = { beforeExpr: true };
	var startsExpr = { startsExpr: true };
	var keywords = {};
	function kw(name, options) {
		if (options === void 0) options = {};
		options.keyword = name;
		return keywords[name] = new TokenType(name, options);
	}
	var types$1 = {
		num: new TokenType("num", startsExpr),
		regexp: new TokenType("regexp", startsExpr),
		string: new TokenType("string", startsExpr),
		name: new TokenType("name", startsExpr),
		privateId: new TokenType("privateId", startsExpr),
		eof: new TokenType("eof"),
		bracketL: new TokenType("[", {
			beforeExpr: true,
			startsExpr: true
		}),
		bracketR: new TokenType("]"),
		braceL: new TokenType("{", {
			beforeExpr: true,
			startsExpr: true
		}),
		braceR: new TokenType("}"),
		parenL: new TokenType("(", {
			beforeExpr: true,
			startsExpr: true
		}),
		parenR: new TokenType(")"),
		comma: new TokenType(",", beforeExpr),
		semi: new TokenType(";", beforeExpr),
		colon: new TokenType(":", beforeExpr),
		dot: new TokenType("."),
		question: new TokenType("?", beforeExpr),
		questionDot: new TokenType("?."),
		arrow: new TokenType("=>", beforeExpr),
		template: new TokenType("template"),
		invalidTemplate: new TokenType("invalidTemplate"),
		ellipsis: new TokenType("...", beforeExpr),
		backQuote: new TokenType("`", startsExpr),
		dollarBraceL: new TokenType("${", {
			beforeExpr: true,
			startsExpr: true
		}),
		eq: new TokenType("=", {
			beforeExpr: true,
			isAssign: true
		}),
		assign: new TokenType("_=", {
			beforeExpr: true,
			isAssign: true
		}),
		incDec: new TokenType("++/--", {
			prefix: true,
			postfix: true,
			startsExpr: true
		}),
		prefix: new TokenType("!/~", {
			beforeExpr: true,
			prefix: true,
			startsExpr: true
		}),
		logicalOR: binop("||", 1),
		logicalAND: binop("&&", 2),
		bitwiseOR: binop("|", 3),
		bitwiseXOR: binop("^", 4),
		bitwiseAND: binop("&", 5),
		equality: binop("==/!=/===/!==", 6),
		relational: binop("</>/<=/>=", 7),
		bitShift: binop("<</>>/>>>", 8),
		plusMin: new TokenType("+/-", {
			beforeExpr: true,
			binop: 9,
			prefix: true,
			startsExpr: true
		}),
		modulo: binop("%", 10),
		star: binop("*", 10),
		slash: binop("/", 10),
		starstar: new TokenType("**", { beforeExpr: true }),
		coalesce: binop("??", 1),
		_break: kw("break"),
		_case: kw("case", beforeExpr),
		_catch: kw("catch"),
		_continue: kw("continue"),
		_debugger: kw("debugger"),
		_default: kw("default", beforeExpr),
		_do: kw("do", {
			isLoop: true,
			beforeExpr: true
		}),
		_else: kw("else", beforeExpr),
		_finally: kw("finally"),
		_for: kw("for", { isLoop: true }),
		_function: kw("function", startsExpr),
		_if: kw("if"),
		_return: kw("return", beforeExpr),
		_switch: kw("switch"),
		_throw: kw("throw", beforeExpr),
		_try: kw("try"),
		_var: kw("var"),
		_const: kw("const"),
		_while: kw("while", { isLoop: true }),
		_with: kw("with"),
		_new: kw("new", {
			beforeExpr: true,
			startsExpr: true
		}),
		_this: kw("this", startsExpr),
		_super: kw("super", startsExpr),
		_class: kw("class", startsExpr),
		_extends: kw("extends", beforeExpr),
		_export: kw("export"),
		_import: kw("import", startsExpr),
		_null: kw("null", startsExpr),
		_true: kw("true", startsExpr),
		_false: kw("false", startsExpr),
		_in: kw("in", {
			beforeExpr: true,
			binop: 7
		}),
		_instanceof: kw("instanceof", {
			beforeExpr: true,
			binop: 7
		}),
		_typeof: kw("typeof", {
			beforeExpr: true,
			prefix: true,
			startsExpr: true
		}),
		_void: kw("void", {
			beforeExpr: true,
			prefix: true,
			startsExpr: true
		}),
		_delete: kw("delete", {
			beforeExpr: true,
			prefix: true,
			startsExpr: true
		})
	};
	var lineBreak = /\r\n?|\n|\u2028|\u2029/;
	var lineBreakG = new RegExp(lineBreak.source, "g");
	function isNewLine(code) {
		return code === 10 || code === 13 || code === 8232 || code === 8233;
	}
	function nextLineBreak(code, from, end) {
		if (end === void 0) end = code.length;
		for (var i = from; i < end; i++) {
			var next = code.charCodeAt(i);
			if (isNewLine(next)) return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
		}
		return -1;
	}
	var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
	var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
	var ref = Object.prototype;
	var hasOwnProperty = ref.hasOwnProperty;
	var toString$1 = ref.toString;
	var hasOwn = Object.hasOwn || (function(obj, propName) {
		return hasOwnProperty.call(obj, propName);
	});
	var isArray = Array.isArray || (function(obj) {
		return toString$1.call(obj) === "[object Array]";
	});
	var regexpCache = Object.create(null);
	function wordsRegexp(words) {
		return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"));
	}
	function codePointToString(code) {
		if (code <= 65535) return String.fromCharCode(code);
		code -= 65536;
		return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
	}
	var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
	var Position = function Position(line, col) {
		this.line = line;
		this.column = col;
	};
	Position.prototype.offset = function offset(n) {
		return new Position(this.line, this.column + n);
	};
	var SourceLocation = function SourceLocation(p, start, end) {
		this.start = start;
		this.end = end;
		if (p.sourceFile !== null) this.source = p.sourceFile;
	};
	function getLineInfo(input, offset) {
		for (var line = 1, cur = 0;;) {
			var nextBreak = nextLineBreak(input, cur, offset);
			if (nextBreak < 0) return new Position(line, offset - cur);
			++line;
			cur = nextBreak;
		}
	}
	var defaultOptions = {
		ecmaVersion: null,
		sourceType: "script",
		strict: false,
		onInsertedSemicolon: null,
		onTrailingComma: null,
		allowReserved: null,
		allowReturnOutsideFunction: false,
		allowImportExportEverywhere: false,
		allowAwaitOutsideFunction: null,
		allowSuperOutsideMethod: null,
		allowHashBang: false,
		checkPrivateFields: true,
		locations: false,
		startLocation: null,
		onToken: null,
		onComment: null,
		ranges: false,
		program: null,
		sourceFile: null,
		directSourceFile: null,
		preserveParens: false
	};
	var warnedAboutEcmaVersion = false;
	function getOptions(opts) {
		var options = {};
		for (var opt in defaultOptions) options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
		if (options.ecmaVersion === "latest") options.ecmaVersion = 1e8;
		else if (options.ecmaVersion == null) {
			if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
				warnedAboutEcmaVersion = true;
				console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
			}
			options.ecmaVersion = 11;
		} else if (options.ecmaVersion >= 2015) options.ecmaVersion -= 2009;
		if (options.allowReserved == null) options.allowReserved = options.ecmaVersion < 5;
		if (!opts || opts.allowHashBang == null) options.allowHashBang = options.ecmaVersion >= 14;
		if (isArray(options.onToken)) {
			var tokens = options.onToken;
			options.onToken = function(token) {
				return tokens.push(token);
			};
		}
		if (isArray(options.onComment)) options.onComment = pushComment(options, options.onComment);
		if (options.sourceType === "commonjs" && options.allowAwaitOutsideFunction) throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
		return options;
	}
	function pushComment(options, array) {
		return function(block, text, start, end, startLoc, endLoc) {
			var comment = {
				type: block ? "Block" : "Line",
				value: text,
				start,
				end
			};
			if (options.locations) comment.loc = new SourceLocation(this, startLoc, endLoc);
			if (options.ranges) comment.range = [start, end];
			array.push(comment);
		};
	}
	var SCOPE_TOP = 1;
	var SCOPE_FUNCTION = 2;
	var SCOPE_ASYNC = 4;
	var SCOPE_GENERATOR = 8;
	var SCOPE_ARROW = 16;
	var SCOPE_SIMPLE_CATCH = 32;
	var SCOPE_SUPER = 64;
	var SCOPE_DIRECT_SUPER = 128;
	var SCOPE_CLASS_STATIC_BLOCK = 256;
	var SCOPE_CLASS_FIELD_INIT = 512;
	var SCOPE_SWITCH = 1024;
	var SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
	function functionFlags(async, generator) {
		return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
	}
	var BIND_NONE = 0;
	var BIND_VAR = 1;
	var BIND_LEXICAL = 2;
	var BIND_FUNCTION = 3;
	var BIND_SIMPLE_CATCH = 4;
	var BIND_OUTSIDE = 5;
	var Parser = function Parser(options, input, startPos) {
		this.options = options = getOptions(options);
		this.sourceFile = options.sourceFile;
		this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
		var reserved = "";
		if (options.allowReserved !== true) {
			reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
			if (options.sourceType === "module") reserved += " await";
		}
		this.reservedWords = wordsRegexp(reserved);
		var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
		this.reservedWordsStrict = wordsRegexp(reservedStrict);
		this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
		this.input = String(input);
		this.containsEsc = false;
		this.pos = startPos || 0;
		this.curLine = 1;
		if (options.startLocation) {
			this.lineStart = this.pos - options.startLocation.column;
			this.curLine = options.startLocation.line;
		} else if (startPos) {
			this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
			if (this.options.locations) this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
		} else this.lineStart = 0;
		this.type = types$1.eof;
		this.value = null;
		this.start = this.end = this.pos;
		this.startLoc = this.endLoc = this.curPosition();
		this.lastTokEndLoc = this.lastTokStartLoc = null;
		this.lastTokStart = this.lastTokEnd = this.pos;
		this.context = this.initialContext();
		this.exprAllowed = true;
		this.inModule = options.sourceType === "module";
		this.strict = this.inModule || options.strict === true || this.strictDirective(this.pos);
		this.potentialArrowAt = -1;
		this.potentialArrowInForAwait = false;
		this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
		this.labels = [];
		this.undefinedExports = Object.create(null);
		if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") this.skipLineComment(2);
		this.scopeStack = [];
		this.enterScope(this.options.sourceType === "commonjs" ? SCOPE_FUNCTION : SCOPE_TOP);
		this.regexpState = null;
		this.privateNameStack = [];
	};
	var prototypeAccessors = {
		inFunction: { configurable: true },
		inGenerator: { configurable: true },
		inAsync: { configurable: true },
		canAwait: { configurable: true },
		allowReturn: { configurable: true },
		allowSuper: { configurable: true },
		allowDirectSuper: { configurable: true },
		treatFunctionsAsVar: { configurable: true },
		allowNewDotTarget: { configurable: true },
		allowUsing: { configurable: true },
		inClassStaticBlock: { configurable: true }
	};
	Parser.prototype.parse = function parse() {
		var this$1$1 = this;
		var node = this.options.program || this.startNode();
		this.nextToken();
		return this.catchStackOverflow(function() {
			return this$1$1.parseTopLevel(node);
		});
	};
	prototypeAccessors.inFunction.get = function() {
		return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
	};
	prototypeAccessors.inGenerator.get = function() {
		return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
	};
	prototypeAccessors.inAsync.get = function() {
		return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
	};
	prototypeAccessors.canAwait.get = function() {
		for (var i = this.scopeStack.length - 1; i >= 0; i--) {
			var flags = this.scopeStack[i].flags;
			if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT)) return false;
			if (flags & SCOPE_FUNCTION) return (flags & SCOPE_ASYNC) > 0;
		}
		return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
	};
	prototypeAccessors.allowReturn.get = function() {
		if (this.inFunction) return true;
		if (this.options.allowReturnOutsideFunction && this.currentVarScope().flags & SCOPE_TOP) return true;
		return false;
	};
	prototypeAccessors.allowSuper.get = function() {
		return (this.currentThisScope().flags & SCOPE_SUPER) > 0 || this.options.allowSuperOutsideMethod;
	};
	prototypeAccessors.allowDirectSuper.get = function() {
		return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
	};
	prototypeAccessors.treatFunctionsAsVar.get = function() {
		return this.treatFunctionsAsVarInScope(this.currentScope());
	};
	prototypeAccessors.allowNewDotTarget.get = function() {
		for (var i = this.scopeStack.length - 1; i >= 0; i--) {
			var flags = this.scopeStack[i].flags;
			if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT) || flags & SCOPE_FUNCTION && !(flags & SCOPE_ARROW)) return true;
		}
		return false;
	};
	prototypeAccessors.allowUsing.get = function() {
		var flags = this.currentScope().flags;
		if (flags & SCOPE_SWITCH) return false;
		if (!this.inModule && flags & SCOPE_TOP) return false;
		return true;
	};
	prototypeAccessors.inClassStaticBlock.get = function() {
		return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
	};
	Parser.extend = function extend() {
		var plugins = [], len = arguments.length;
		while (len--) plugins[len] = arguments[len];
		var cls = this;
		for (var i = 0; i < plugins.length; i++) cls = plugins[i](cls);
		return cls;
	};
	Parser.parse = function parse(input, options) {
		return new this(options, input).parse();
	};
	Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
		var parser = new this(options, input, pos);
		parser.nextToken();
		return parser.parseExpression();
	};
	Parser.tokenizer = function tokenizer(input, options) {
		return new this(options, input);
	};
	Object.defineProperties(Parser.prototype, prototypeAccessors);
	var pp$9 = Parser.prototype;
	var literal = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
	pp$9.strictDirective = function(start) {
		if (this.options.ecmaVersion < 5) return false;
		for (;;) {
			skipWhiteSpace.lastIndex = start;
			start += skipWhiteSpace.exec(this.input)[0].length;
			var match = literal.exec(this.input.slice(start));
			if (!match) return false;
			if ((match[1] || match[2]) === "use strict") {
				skipWhiteSpace.lastIndex = start + match[0].length;
				var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
				var next = this.input.charAt(end);
				return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
			}
			start += match[0].length;
			skipWhiteSpace.lastIndex = start;
			start += skipWhiteSpace.exec(this.input)[0].length;
			if (this.input[start] === ";") start++;
		}
	};
	pp$9.eat = function(type) {
		if (this.type === type) {
			this.next();
			return true;
		} else return false;
	};
	pp$9.isContextual = function(name) {
		return this.type === types$1.name && this.value === name && !this.containsEsc;
	};
	pp$9.eatContextual = function(name) {
		if (!this.isContextual(name)) return false;
		this.next();
		return true;
	};
	pp$9.catchStackOverflow = function(f) {
		try {
			return f();
		} catch (e) {
			if (e instanceof Error && (/\bstack\b.*\b(exceeded|overflow)\b/i.test(e.message) || /\btoo much recursion\b/i.test(e.message))) this.raise(this.start, "Not enough stack space to parse input");
			else throw e;
		}
	};
	pp$9.expectContextual = function(name) {
		if (!this.eatContextual(name)) this.unexpected();
	};
	pp$9.canInsertSemicolon = function() {
		return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
	};
	pp$9.insertSemicolon = function() {
		if (this.canInsertSemicolon()) {
			if (this.options.onInsertedSemicolon) this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
			return true;
		}
	};
	pp$9.semicolon = function() {
		if (!this.eat(types$1.semi) && !this.insertSemicolon()) this.unexpected();
	};
	pp$9.afterTrailingComma = function(tokType, notNext) {
		if (this.type === tokType) {
			if (this.options.onTrailingComma) this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
			if (!notNext) this.next();
			return true;
		}
	};
	pp$9.expect = function(type) {
		this.eat(type) || this.unexpected();
	};
	pp$9.unexpected = function(pos) {
		this.raise(pos != null ? pos : this.start, "Unexpected token");
	};
	var DestructuringErrors = function DestructuringErrors() {
		this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
	};
	pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
		if (!refDestructuringErrors) return;
		if (refDestructuringErrors.trailingComma > -1) this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
		var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
		if (parens > -1) this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
	};
	pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
		if (!refDestructuringErrors) return false;
		var shorthandAssign = refDestructuringErrors.shorthandAssign;
		var doubleProto = refDestructuringErrors.doubleProto;
		if (!andThrow) return shorthandAssign >= 0 || doubleProto >= 0;
		if (shorthandAssign >= 0) this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
		if (doubleProto >= 0) this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
	};
	pp$9.checkYieldAwaitInDefaultParams = function() {
		if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) this.raise(this.yieldPos, "Yield expression cannot be a default value");
		if (this.awaitPos) this.raise(this.awaitPos, "Await expression cannot be a default value");
	};
	pp$9.isSimpleAssignTarget = function(expr) {
		if (expr.type === "ParenthesizedExpression") return this.isSimpleAssignTarget(expr.expression);
		return expr.type === "Identifier" || expr.type === "MemberExpression";
	};
	var pp$8 = Parser.prototype;
	pp$8.parseTopLevel = function(node) {
		var exports$1 = Object.create(null);
		if (!node.body) node.body = [];
		while (this.type !== types$1.eof) {
			var stmt = this.parseStatement(null, true, exports$1);
			node.body.push(stmt);
		}
		if (this.inModule) for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
			var name = list[i];
			this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
		}
		this.adaptDirectivePrologue(node.body);
		this.next();
		node.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType;
		return this.finishNode(node, "Program");
	};
	var loopLabel = { kind: "loop" };
	var switchLabel = { kind: "switch" };
	pp$8.isLet = function(context) {
		if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return false;
		skipWhiteSpace.lastIndex = this.pos;
		var skip = skipWhiteSpace.exec(this.input);
		var next = this.pos + skip[0].length, nextCh = this.fullCharCodeAt(next);
		if (nextCh === 91 || nextCh === 92) return true;
		if (context) return false;
		if (nextCh === 123) return true;
		if (isIdentifierStart(nextCh)) {
			var start = next;
			do
				next += nextCh <= 65535 ? 1 : 2;
			while (isIdentifierChar(nextCh = this.fullCharCodeAt(next)));
			if (nextCh === 92) return true;
			var ident = this.input.slice(start, next);
			if (!keywordRelationalOperator.test(ident)) return true;
		}
		return false;
	};
	pp$8.isAsyncFunction = function() {
		if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return false;
		skipWhiteSpace.lastIndex = this.pos;
		var skip = skipWhiteSpace.exec(this.input);
		var next = this.pos + skip[0].length, after;
		return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.fullCharCodeAt(next + 8)) || after === 92));
	};
	pp$8.isUsingKeyword = function(isAwaitUsing, isFor) {
		if (this.options.ecmaVersion < 17 || !this.isContextual(isAwaitUsing ? "await" : "using")) return false;
		skipWhiteSpace.lastIndex = this.pos;
		var skip = skipWhiteSpace.exec(this.input);
		var next = this.pos + skip[0].length;
		if (lineBreak.test(this.input.slice(this.pos, next))) return false;
		if (isAwaitUsing) {
			var usingEndPos = next + 5, after;
			if (this.input.slice(next, usingEndPos) !== "using" || usingEndPos === this.input.length || isIdentifierChar(after = this.fullCharCodeAt(usingEndPos)) || after === 92) return false;
			skipWhiteSpace.lastIndex = usingEndPos;
			var skipAfterUsing = skipWhiteSpace.exec(this.input);
			next = usingEndPos + skipAfterUsing[0].length;
			if (skipAfterUsing && lineBreak.test(this.input.slice(usingEndPos, next))) return false;
		}
		var ch = this.fullCharCodeAt(next);
		if (!isIdentifierStart(ch) && ch !== 92) return false;
		var idStart = next;
		do
			next += ch <= 65535 ? 1 : 2;
		while (isIdentifierChar(ch = this.fullCharCodeAt(next)));
		if (ch === 92) return true;
		var id = this.input.slice(idStart, next);
		if (keywordRelationalOperator.test(id)) return false;
		if (isFor && !isAwaitUsing && id === "of") {
			skipWhiteSpace.lastIndex = next;
			var skipAfterOf = skipWhiteSpace.exec(this.input);
			next = next + skipAfterOf[0].length;
			if (this.input.charCodeAt(next) !== 61 || (ch = this.input.charCodeAt(next + 1)) === 61 || ch === 62) return false;
		}
		return true;
	};
	pp$8.isAwaitUsing = function(isFor) {
		return this.isUsingKeyword(true, isFor);
	};
	pp$8.isUsing = function(isFor) {
		return this.isUsingKeyword(false, isFor);
	};
	pp$8.parseStatement = function(context, topLevel, exports$1) {
		var starttype = this.type, node = this.startNode(), kind;
		if (this.isLet(context)) {
			starttype = types$1._var;
			kind = "let";
		}
		switch (starttype) {
			case types$1._break:
			case types$1._continue: return this.parseBreakContinueStatement(node, starttype.keyword);
			case types$1._debugger: return this.parseDebuggerStatement(node);
			case types$1._do: return this.parseDoStatement(node);
			case types$1._for: return this.parseForStatement(node);
			case types$1._function:
				if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) this.unexpected();
				return this.parseFunctionStatement(node, false, !context);
			case types$1._class:
				if (context) this.unexpected();
				return this.parseClass(node, true);
			case types$1._if: return this.parseIfStatement(node);
			case types$1._return: return this.parseReturnStatement(node);
			case types$1._switch: return this.parseSwitchStatement(node);
			case types$1._throw: return this.parseThrowStatement(node);
			case types$1._try: return this.parseTryStatement(node);
			case types$1._const:
			case types$1._var:
				kind = kind || this.value;
				if (context && kind !== "var") this.unexpected();
				return this.parseVarStatement(node, kind);
			case types$1._while: return this.parseWhileStatement(node);
			case types$1._with: return this.parseWithStatement(node);
			case types$1.braceL: return this.parseBlock(true, node);
			case types$1.semi: return this.parseEmptyStatement(node);
			case types$1._export:
			case types$1._import:
				if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
					skipWhiteSpace.lastIndex = this.pos;
					var skip = skipWhiteSpace.exec(this.input);
					var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
					if (nextCh === 40 || nextCh === 46) return this.parseExpressionStatement(node, this.parseExpression());
				}
				if (!this.options.allowImportExportEverywhere) {
					if (!topLevel) this.raise(this.start, "'import' and 'export' may only appear at the top level");
					if (!this.inModule) this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
				}
				return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports$1);
			default:
				if (this.isAsyncFunction()) {
					if (context) this.unexpected();
					this.next();
					return this.parseFunctionStatement(node, true, !context);
				}
				var usingKind = this.isAwaitUsing(false) ? "await using" : this.isUsing(false) ? "using" : null;
				if (usingKind) {
					if (!this.allowUsing) this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement");
					if (context) this.raise(this.start, "Using declaration is not allowed in single-statement positions");
					if (usingKind === "await using") {
						if (!this.canAwait) this.raise(this.start, "Await using cannot appear outside of async function");
						this.next();
					}
					this.next();
					this.parseVar(node, false, usingKind);
					this.semicolon();
					return this.finishNode(node, "VariableDeclaration");
				}
				var maybeName = this.value, expr = this.parseExpression();
				if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) return this.parseLabeledStatement(node, maybeName, expr, context);
				else return this.parseExpressionStatement(node, expr);
		}
	};
	pp$8.parseBreakContinueStatement = function(node, keyword) {
		var isBreak = keyword === "break";
		this.next();
		if (this.eat(types$1.semi) || this.insertSemicolon()) node.label = null;
		else if (this.type !== types$1.name) this.unexpected();
		else {
			node.label = this.parseIdent();
			this.semicolon();
		}
		var i = 0;
		for (; i < this.labels.length; ++i) {
			var lab = this.labels[i];
			if (node.label == null || lab.name === node.label.name) {
				if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
				if (node.label && isBreak) break;
			}
		}
		if (i === this.labels.length) this.raise(node.start, "Unsyntactic " + keyword);
		return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
	};
	pp$8.parseDebuggerStatement = function(node) {
		this.next();
		this.semicolon();
		return this.finishNode(node, "DebuggerStatement");
	};
	pp$8.parseDoStatement = function(node) {
		this.next();
		this.labels.push(loopLabel);
		node.body = this.parseStatement("do");
		this.labels.pop();
		this.expect(types$1._while);
		node.test = this.parseParenExpression();
		if (this.options.ecmaVersion >= 6) this.eat(types$1.semi);
		else this.semicolon();
		return this.finishNode(node, "DoWhileStatement");
	};
	pp$8.parseForStatement = function(node) {
		this.next();
		var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
		this.labels.push(loopLabel);
		this.enterScope(0);
		this.expect(types$1.parenL);
		if (this.type === types$1.semi) {
			if (awaitAt > -1) this.unexpected(awaitAt);
			return this.parseFor(node, null);
		}
		var isLet = this.isLet();
		if (this.type === types$1._var || this.type === types$1._const || isLet) {
			var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
			this.next();
			this.parseVar(init$1, true, kind);
			this.finishNode(init$1, "VariableDeclaration");
			return this.parseForAfterInit(node, init$1, awaitAt);
		}
		var startsWithLet = this.isContextual("let"), isForOf = false;
		var usingKind = this.isUsing(true) ? "using" : this.isAwaitUsing(true) ? "await using" : null;
		if (usingKind) {
			var init$2 = this.startNode();
			this.next();
			if (usingKind === "await using") {
				if (!this.canAwait) this.raise(this.start, "Await using cannot appear outside of async function");
				this.next();
			}
			this.parseVar(init$2, true, usingKind);
			this.finishNode(init$2, "VariableDeclaration");
			return this.parseForAfterInit(node, init$2, awaitAt);
		}
		var containsEsc = this.containsEsc;
		var refDestructuringErrors = new DestructuringErrors();
		var initPos = this.start;
		var init = awaitAt > -1 ? this.parseExprSubscripts(refDestructuringErrors, "await") : this.parseExpression(true, refDestructuringErrors);
		if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
			if (awaitAt > -1) {
				if (this.type === types$1._in) this.unexpected(awaitAt);
				node.await = true;
			} else if (isForOf && this.options.ecmaVersion >= 8) {
				if (init.start === initPos && !containsEsc && init.type === "Identifier" && init.name === "async") this.unexpected();
				else if (this.options.ecmaVersion >= 9) node.await = false;
			}
			if (startsWithLet && isForOf) this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
			this.toAssignable(init, false, refDestructuringErrors);
			this.checkLValPattern(init);
			return this.parseForIn(node, init);
		} else this.checkExpressionErrors(refDestructuringErrors, true);
		if (awaitAt > -1) this.unexpected(awaitAt);
		return this.parseFor(node, init);
	};
	pp$8.parseForAfterInit = function(node, init, awaitAt) {
		if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init.declarations.length === 1) {
			if (this.type === types$1._in) {
				if ((init.kind === "using" || init.kind === "await using") && !init.declarations[0].init) this.raise(this.start, "Using declaration is not allowed in for-in loops");
				if (this.options.ecmaVersion >= 9 && awaitAt > -1) this.unexpected(awaitAt);
			} else if (this.options.ecmaVersion >= 9) node.await = awaitAt > -1;
			return this.parseForIn(node, init);
		}
		if (awaitAt > -1) this.unexpected(awaitAt);
		return this.parseFor(node, init);
	};
	pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
		this.next();
		return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
	};
	pp$8.parseIfStatement = function(node) {
		this.next();
		node.test = this.parseParenExpression();
		node.consequent = this.parseStatement("if");
		node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
		return this.finishNode(node, "IfStatement");
	};
	pp$8.parseReturnStatement = function(node) {
		if (!this.allowReturn) this.raise(this.start, "'return' outside of function");
		this.next();
		if (this.eat(types$1.semi) || this.insertSemicolon()) node.argument = null;
		else {
			node.argument = this.parseExpression();
			this.semicolon();
		}
		return this.finishNode(node, "ReturnStatement");
	};
	pp$8.parseSwitchStatement = function(node) {
		this.next();
		node.discriminant = this.parseParenExpression();
		node.cases = [];
		this.expect(types$1.braceL);
		this.labels.push(switchLabel);
		this.enterScope(SCOPE_SWITCH);
		var cur;
		for (var sawDefault = false; this.type !== types$1.braceR;) if (this.type === types$1._case || this.type === types$1._default) {
			var isCase = this.type === types$1._case;
			if (cur) this.finishNode(cur, "SwitchCase");
			node.cases.push(cur = this.startNode());
			cur.consequent = [];
			this.next();
			if (isCase) cur.test = this.parseExpression();
			else {
				if (sawDefault) this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
				sawDefault = true;
				cur.test = null;
			}
			this.expect(types$1.colon);
		} else {
			if (!cur) this.unexpected();
			cur.consequent.push(this.parseStatement(null));
		}
		this.exitScope();
		if (cur) this.finishNode(cur, "SwitchCase");
		this.next();
		this.labels.pop();
		return this.finishNode(node, "SwitchStatement");
	};
	pp$8.parseThrowStatement = function(node) {
		this.next();
		if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) this.raise(this.lastTokEnd, "Illegal newline after throw");
		node.argument = this.parseExpression();
		this.semicolon();
		return this.finishNode(node, "ThrowStatement");
	};
	var empty$1 = [];
	pp$8.parseCatchClauseParam = function() {
		var param = this.parseBindingAtom();
		var simple = param.type === "Identifier";
		this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
		this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
		this.expect(types$1.parenR);
		return param;
	};
	pp$8.parseTryStatement = function(node) {
		this.next();
		node.block = this.parseBlock();
		node.handler = null;
		if (this.type === types$1._catch) {
			var clause = this.startNode();
			this.next();
			if (this.eat(types$1.parenL)) clause.param = this.parseCatchClauseParam();
			else {
				if (this.options.ecmaVersion < 10) this.unexpected();
				clause.param = null;
				this.enterScope(0);
			}
			clause.body = this.parseBlock(false);
			this.exitScope();
			node.handler = this.finishNode(clause, "CatchClause");
		}
		node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
		if (!node.handler && !node.finalizer) this.raise(node.start, "Missing catch or finally clause");
		return this.finishNode(node, "TryStatement");
	};
	pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
		this.next();
		this.parseVar(node, false, kind, allowMissingInitializer);
		this.semicolon();
		return this.finishNode(node, "VariableDeclaration");
	};
	pp$8.parseWhileStatement = function(node) {
		this.next();
		node.test = this.parseParenExpression();
		this.labels.push(loopLabel);
		node.body = this.parseStatement("while");
		this.labels.pop();
		return this.finishNode(node, "WhileStatement");
	};
	pp$8.parseWithStatement = function(node) {
		if (this.strict) this.raise(this.start, "'with' in strict mode");
		this.next();
		node.object = this.parseParenExpression();
		node.body = this.parseStatement("with");
		return this.finishNode(node, "WithStatement");
	};
	pp$8.parseEmptyStatement = function(node) {
		this.next();
		return this.finishNode(node, "EmptyStatement");
	};
	pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
		for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) if (list[i$1].name === maybeName) this.raise(expr.start, "Label '" + maybeName + "' is already declared");
		var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
		for (var i = this.labels.length - 1; i >= 0; i--) {
			var label$1 = this.labels[i];
			if (label$1.statementStart === node.start) {
				label$1.statementStart = this.start;
				label$1.kind = kind;
			} else break;
		}
		this.labels.push({
			name: maybeName,
			kind,
			statementStart: this.start
		});
		node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
		this.labels.pop();
		node.label = expr;
		return this.finishNode(node, "LabeledStatement");
	};
	pp$8.parseExpressionStatement = function(node, expr) {
		node.expression = expr;
		this.semicolon();
		return this.finishNode(node, "ExpressionStatement");
	};
	pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
		if (createNewLexicalScope === void 0) createNewLexicalScope = true;
		if (node === void 0) node = this.startNode();
		node.body = [];
		this.expect(types$1.braceL);
		if (createNewLexicalScope) this.enterScope(0);
		while (this.type !== types$1.braceR) {
			var stmt = this.parseStatement(null);
			node.body.push(stmt);
		}
		if (exitStrict) this.strict = false;
		this.next();
		if (createNewLexicalScope) this.exitScope();
		return this.finishNode(node, "BlockStatement");
	};
	pp$8.parseFor = function(node, init) {
		node.init = init;
		this.expect(types$1.semi);
		node.test = this.type === types$1.semi ? null : this.parseExpression();
		this.expect(types$1.semi);
		node.update = this.type === types$1.parenR ? null : this.parseExpression();
		this.expect(types$1.parenR);
		node.body = this.parseStatement("for");
		this.exitScope();
		this.labels.pop();
		return this.finishNode(node, "ForStatement");
	};
	pp$8.parseForIn = function(node, init) {
		var isForIn = this.type === types$1._in;
		this.next();
		if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) this.raise(init.start, (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
		node.left = init;
		node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
		this.expect(types$1.parenR);
		node.body = this.parseStatement("for");
		this.exitScope();
		this.labels.pop();
		return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
	};
	pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
		node.declarations = [];
		node.kind = kind;
		for (;;) {
			var decl = this.startNode();
			this.parseVarId(decl, kind);
			if (this.eat(types$1.eq)) decl.init = this.parseMaybeAssign(isFor);
			else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) this.unexpected();
			else if (!allowMissingInitializer && (kind === "using" || kind === "await using") && this.options.ecmaVersion >= 17 && this.type !== types$1._in && !this.isContextual("of")) this.raise(this.lastTokEnd, "Missing initializer in " + kind + " declaration");
			else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
			else decl.init = null;
			node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
			if (!this.eat(types$1.comma)) break;
		}
		return node;
	};
	pp$8.parseVarId = function(decl, kind) {
		decl.id = kind === "using" || kind === "await using" ? this.parseIdent() : this.parseBindingAtom();
		this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
	};
	var FUNC_STATEMENT = 1;
	var FUNC_HANGING_STATEMENT = 2;
	var FUNC_NULLABLE_ID = 4;
	pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
		this.initFunction(node);
		if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
			if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) this.unexpected();
			node.generator = this.eat(types$1.star);
		}
		if (this.options.ecmaVersion >= 8) node.async = !!isAsync;
		if (statement & FUNC_STATEMENT) {
			node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
			if (node.id && !(statement & FUNC_HANGING_STATEMENT)) this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
		}
		var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
		this.yieldPos = 0;
		this.awaitPos = 0;
		this.awaitIdentPos = 0;
		this.enterScope(functionFlags(node.async, node.generator));
		if (!(statement & FUNC_STATEMENT)) node.id = this.type === types$1.name ? this.parseIdent() : null;
		this.parseFunctionParams(node);
		this.parseFunctionBody(node, allowExpressionBody, false, forInit);
		this.yieldPos = oldYieldPos;
		this.awaitPos = oldAwaitPos;
		this.awaitIdentPos = oldAwaitIdentPos;
		return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
	};
	pp$8.parseFunctionParams = function(node) {
		this.expect(types$1.parenL);
		node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
		this.checkYieldAwaitInDefaultParams();
	};
	pp$8.parseClass = function(node, isStatement) {
		this.next();
		var oldStrict = this.strict;
		this.strict = true;
		this.parseClassId(node, isStatement);
		this.parseClassSuper(node);
		var privateNameMap = this.enterClassBody();
		var classBody = this.startNode();
		var hadConstructor = false;
		classBody.body = [];
		this.expect(types$1.braceL);
		while (this.type !== types$1.braceR) {
			var element = this.parseClassElement(node.superClass !== null);
			if (element) {
				classBody.body.push(element);
				if (element.type === "MethodDefinition" && element.kind === "constructor") {
					if (hadConstructor) this.raiseRecoverable(element.start, "Duplicate constructor in the same class");
					hadConstructor = true;
				} else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
			}
		}
		this.strict = oldStrict;
		this.next();
		node.body = this.finishNode(classBody, "ClassBody");
		this.exitClassBody();
		return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
	};
	pp$8.parseClassElement = function(constructorAllowsSuper) {
		if (this.eat(types$1.semi)) return null;
		var ecmaVersion = this.options.ecmaVersion;
		var node = this.startNode();
		var keyName = "";
		var isGenerator = false;
		var isAsync = false;
		var kind = "method";
		var isStatic = false;
		if (this.eatContextual("static")) {
			if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
				this.parseClassStaticBlock(node);
				return node;
			}
			if (this.isClassElementNameStart() || this.type === types$1.star) isStatic = true;
			else keyName = "static";
		}
		node.static = isStatic;
		if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
			if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) isAsync = true;
			else keyName = "async";
		}
		if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) isGenerator = true;
		if (!keyName && !isAsync && !isGenerator) {
			var lastValue = this.value;
			if (this.eatContextual("get") || this.eatContextual("set")) {
				if (this.isClassElementNameStart()) kind = lastValue;
				else keyName = lastValue;
			}
		}
		if (keyName) {
			node.computed = false;
			node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
			node.key.name = keyName;
			this.finishNode(node.key, "Identifier");
		} else this.parseClassElementName(node);
		if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
			var isConstructor = !node.static && checkKeyName(node, "constructor");
			var allowsDirectSuper = isConstructor && constructorAllowsSuper;
			if (isConstructor && kind !== "method") this.raise(node.key.start, "Constructor can't have get/set modifier");
			node.kind = isConstructor ? "constructor" : kind;
			this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
		} else this.parseClassField(node);
		return node;
	};
	pp$8.isClassElementNameStart = function() {
		return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
	};
	pp$8.parseClassElementName = function(element) {
		if (this.type === types$1.privateId) {
			if (this.value === "constructor") this.raise(this.start, "Classes can't have an element named '#constructor'");
			element.computed = false;
			element.key = this.parsePrivateIdent();
		} else this.parsePropertyName(element);
	};
	pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
		var key = method.key;
		if (method.kind === "constructor") {
			if (isGenerator) this.raise(key.start, "Constructor can't be a generator");
			if (isAsync) this.raise(key.start, "Constructor can't be an async method");
		} else if (method.static && checkKeyName(method, "prototype")) this.raise(key.start, "Classes may not have a static property named prototype");
		var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
		if (method.kind === "get" && value.params.length !== 0) this.raiseRecoverable(value.start, "getter should have no params");
		if (method.kind === "set" && value.params.length !== 1) this.raiseRecoverable(value.start, "setter should have exactly one param");
		if (method.kind === "set" && value.params[0].type === "RestElement") this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
		return this.finishNode(method, "MethodDefinition");
	};
	pp$8.parseClassField = function(field) {
		if (checkKeyName(field, "constructor")) this.raise(field.key.start, "Classes can't have a field named 'constructor'");
		else if (field.static && checkKeyName(field, "prototype")) this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
		if (this.eat(types$1.eq)) {
			this.enterScope(SCOPE_CLASS_FIELD_INIT | SCOPE_SUPER);
			field.value = this.parseMaybeAssign();
			this.exitScope();
		} else field.value = null;
		this.semicolon();
		return this.finishNode(field, "PropertyDefinition");
	};
	pp$8.parseClassStaticBlock = function(node) {
		node.body = [];
		var oldLabels = this.labels;
		this.labels = [];
		this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
		while (this.type !== types$1.braceR) {
			var stmt = this.parseStatement(null);
			node.body.push(stmt);
		}
		this.next();
		this.exitScope();
		this.labels = oldLabels;
		return this.finishNode(node, "StaticBlock");
	};
	pp$8.parseClassId = function(node, isStatement) {
		if (this.type === types$1.name) {
			node.id = this.parseIdent();
			if (isStatement) this.checkLValSimple(node.id, BIND_LEXICAL, false);
		} else {
			if (isStatement === true) this.unexpected();
			node.id = null;
		}
	};
	pp$8.parseClassSuper = function(node) {
		node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
	};
	pp$8.enterClassBody = function() {
		var element = {
			declared: Object.create(null),
			used: []
		};
		this.privateNameStack.push(element);
		return element.declared;
	};
	pp$8.exitClassBody = function() {
		var ref = this.privateNameStack.pop();
		var declared = ref.declared;
		var used = ref.used;
		if (!this.options.checkPrivateFields) return;
		var len = this.privateNameStack.length;
		var parent = len === 0 ? null : this.privateNameStack[len - 1];
		for (var i = 0; i < used.length; ++i) {
			var id = used[i];
			if (!hasOwn(declared, id.name)) {
				if (parent) parent.used.push(id);
				else this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
			}
		}
	};
	function isPrivateNameConflicted(privateNameMap, element) {
		var name = element.key.name;
		var curr = privateNameMap[name];
		var next = "true";
		if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) next = (element.static ? "s" : "i") + element.kind;
		if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
			privateNameMap[name] = "true";
			return false;
		} else if (!curr) {
			privateNameMap[name] = next;
			return false;
		} else return true;
	}
	function checkKeyName(node, name) {
		var computed = node.computed;
		var key = node.key;
		return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
	}
	pp$8.parseExportAllDeclaration = function(node, exports$1) {
		if (this.options.ecmaVersion >= 11) {
			if (this.eatContextual("as")) {
				node.exported = this.parseModuleExportName();
				this.checkExport(exports$1, node.exported, this.lastTokStart);
			} else node.exported = null;
		}
		this.expectContextual("from");
		if (this.type !== types$1.string) this.unexpected();
		node.source = this.parseExprAtom();
		if (this.options.ecmaVersion >= 16) node.attributes = this.parseWithClause();
		this.semicolon();
		return this.finishNode(node, "ExportAllDeclaration");
	};
	pp$8.parseExport = function(node, exports$1) {
		this.next();
		if (this.eat(types$1.star)) return this.parseExportAllDeclaration(node, exports$1);
		if (this.eat(types$1._default)) {
			this.checkExport(exports$1, "default", this.lastTokStart);
			node.declaration = this.parseExportDefaultDeclaration();
			return this.finishNode(node, "ExportDefaultDeclaration");
		}
		if (this.shouldParseExportStatement()) {
			node.declaration = this.parseExportDeclaration(node);
			if (node.declaration.type === "VariableDeclaration") this.checkVariableExport(exports$1, node.declaration.declarations);
			else this.checkExport(exports$1, node.declaration.id, node.declaration.id.start);
			node.specifiers = [];
			node.source = null;
			if (this.options.ecmaVersion >= 16) node.attributes = [];
		} else {
			node.declaration = null;
			node.specifiers = this.parseExportSpecifiers(exports$1);
			if (this.eatContextual("from")) {
				if (this.type !== types$1.string) this.unexpected();
				node.source = this.parseExprAtom();
				if (this.options.ecmaVersion >= 16) node.attributes = this.parseWithClause();
			} else {
				for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
					var spec = list[i];
					this.checkUnreserved(spec.local);
					this.checkLocalExport(spec.local);
					if (spec.local.type === "Literal") this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
				}
				node.source = null;
				if (this.options.ecmaVersion >= 16) node.attributes = [];
			}
			this.semicolon();
		}
		return this.finishNode(node, "ExportNamedDeclaration");
	};
	pp$8.parseExportDeclaration = function(node) {
		return this.parseStatement(null);
	};
	pp$8.parseExportDefaultDeclaration = function() {
		var isAsync;
		if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
			var fNode = this.startNode();
			this.next();
			if (isAsync) this.next();
			return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
		} else if (this.type === types$1._class) {
			var cNode = this.startNode();
			return this.parseClass(cNode, "nullableID");
		} else {
			var declaration = this.parseMaybeAssign();
			this.semicolon();
			return declaration;
		}
	};
	pp$8.checkExport = function(exports$1, name, pos) {
		if (!exports$1) return;
		if (typeof name !== "string") name = name.type === "Identifier" ? name.name : name.value;
		if (hasOwn(exports$1, name)) this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
		exports$1[name] = true;
	};
	pp$8.checkPatternExport = function(exports$1, pat) {
		var type = pat.type;
		if (type === "Identifier") this.checkExport(exports$1, pat, pat.start);
		else if (type === "ObjectPattern") for (var i = 0, list = pat.properties; i < list.length; i += 1) {
			var prop = list[i];
			this.checkPatternExport(exports$1, prop);
		}
		else if (type === "ArrayPattern") for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
			var elt = list$1[i$1];
			if (elt) this.checkPatternExport(exports$1, elt);
		}
		else if (type === "Property") this.checkPatternExport(exports$1, pat.value);
		else if (type === "AssignmentPattern") this.checkPatternExport(exports$1, pat.left);
		else if (type === "RestElement") this.checkPatternExport(exports$1, pat.argument);
	};
	pp$8.checkVariableExport = function(exports$1, decls) {
		if (!exports$1) return;
		for (var i = 0, list = decls; i < list.length; i += 1) {
			var decl = list[i];
			this.checkPatternExport(exports$1, decl.id);
		}
	};
	pp$8.shouldParseExportStatement = function() {
		return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
	};
	pp$8.parseExportSpecifier = function(exports$1) {
		var node = this.startNode();
		node.local = this.parseModuleExportName();
		node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
		this.checkExport(exports$1, node.exported, node.exported.start);
		return this.finishNode(node, "ExportSpecifier");
	};
	pp$8.parseExportSpecifiers = function(exports$1) {
		var nodes = [], first = true;
		this.expect(types$1.braceL);
		while (!this.eat(types$1.braceR)) {
			if (!first) {
				this.expect(types$1.comma);
				if (this.afterTrailingComma(types$1.braceR)) break;
			} else first = false;
			nodes.push(this.parseExportSpecifier(exports$1));
		}
		return nodes;
	};
	pp$8.parseImport = function(node) {
		this.next();
		if (this.type === types$1.string) {
			node.specifiers = empty$1;
			node.source = this.parseExprAtom();
		} else {
			node.specifiers = this.parseImportSpecifiers();
			this.expectContextual("from");
			node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
		}
		if (this.options.ecmaVersion >= 16) node.attributes = this.parseWithClause();
		this.semicolon();
		return this.finishNode(node, "ImportDeclaration");
	};
	pp$8.parseImportSpecifier = function() {
		var node = this.startNode();
		node.imported = this.parseModuleExportName();
		if (this.eatContextual("as")) node.local = this.parseIdent();
		else {
			this.checkUnreserved(node.imported);
			node.local = node.imported;
		}
		this.checkLValSimple(node.local, BIND_LEXICAL);
		return this.finishNode(node, "ImportSpecifier");
	};
	pp$8.parseImportDefaultSpecifier = function() {
		var node = this.startNode();
		node.local = this.parseIdent();
		this.checkLValSimple(node.local, BIND_LEXICAL);
		return this.finishNode(node, "ImportDefaultSpecifier");
	};
	pp$8.parseImportNamespaceSpecifier = function() {
		var node = this.startNode();
		this.next();
		this.expectContextual("as");
		node.local = this.parseIdent();
		this.checkLValSimple(node.local, BIND_LEXICAL);
		return this.finishNode(node, "ImportNamespaceSpecifier");
	};
	pp$8.parseImportSpecifiers = function() {
		var nodes = [], first = true;
		if (this.type === types$1.name) {
			nodes.push(this.parseImportDefaultSpecifier());
			if (!this.eat(types$1.comma)) return nodes;
		}
		if (this.type === types$1.star) {
			nodes.push(this.parseImportNamespaceSpecifier());
			return nodes;
		}
		this.expect(types$1.braceL);
		while (!this.eat(types$1.braceR)) {
			if (!first) {
				this.expect(types$1.comma);
				if (this.afterTrailingComma(types$1.braceR)) break;
			} else first = false;
			nodes.push(this.parseImportSpecifier());
		}
		return nodes;
	};
	pp$8.parseWithClause = function() {
		var nodes = [];
		if (!this.eat(types$1._with)) return nodes;
		this.expect(types$1.braceL);
		var attributeKeys = {};
		var first = true;
		while (!this.eat(types$1.braceR)) {
			if (!first) {
				this.expect(types$1.comma);
				if (this.afterTrailingComma(types$1.braceR)) break;
			} else first = false;
			var attr = this.parseImportAttribute();
			var keyName = attr.key.type === "Identifier" ? attr.key.name : attr.key.value;
			if (hasOwn(attributeKeys, keyName)) this.raiseRecoverable(attr.key.start, "Duplicate attribute key '" + keyName + "'");
			attributeKeys[keyName] = true;
			nodes.push(attr);
		}
		return nodes;
	};
	pp$8.parseImportAttribute = function() {
		var node = this.startNode();
		node.key = this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
		this.expect(types$1.colon);
		if (this.type !== types$1.string) this.unexpected();
		node.value = this.parseExprAtom();
		return this.finishNode(node, "ImportAttribute");
	};
	pp$8.parseModuleExportName = function() {
		if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
			var stringLiteral = this.parseLiteral(this.value);
			if (loneSurrogate.test(stringLiteral.value)) this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
			return stringLiteral;
		}
		return this.parseIdent(true);
	};
	pp$8.adaptDirectivePrologue = function(statements) {
		for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) statements[i].directive = statements[i].expression.raw.slice(1, -1);
	};
	pp$8.isDirectiveCandidate = function(statement) {
		return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === "\"" || this.input[statement.start] === "'");
	};
	var pp$7 = Parser.prototype;
	pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
		if (this.options.ecmaVersion >= 6 && node) switch (node.type) {
			case "Identifier":
				if (this.inAsync && node.name === "await") this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
				break;
			case "ObjectPattern":
			case "ArrayPattern":
			case "AssignmentPattern":
			case "RestElement": break;
			case "ObjectExpression":
				node.type = "ObjectPattern";
				if (refDestructuringErrors) this.checkPatternErrors(refDestructuringErrors, true);
				for (var i = 0, list = node.properties; i < list.length; i += 1) {
					var prop = list[i];
					this.toAssignable(prop, isBinding);
					if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) this.raise(prop.argument.start, "Unexpected token");
				}
				break;
			case "Property":
				if (node.kind !== "init") this.raise(node.key.start, "Object pattern can't contain getter or setter");
				this.toAssignable(node.value, isBinding);
				break;
			case "ArrayExpression":
				node.type = "ArrayPattern";
				if (refDestructuringErrors) this.checkPatternErrors(refDestructuringErrors, true);
				this.toAssignableList(node.elements, isBinding);
				break;
			case "SpreadElement":
				node.type = "RestElement";
				this.toAssignable(node.argument, isBinding);
				if (node.argument.type === "AssignmentPattern") this.raise(node.argument.start, "Rest elements cannot have a default value");
				break;
			case "AssignmentExpression":
				if (node.operator !== "=") this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
				node.type = "AssignmentPattern";
				delete node.operator;
				this.toAssignable(node.left, isBinding);
				break;
			case "ParenthesizedExpression":
				this.toAssignable(node.expression, isBinding, refDestructuringErrors);
				break;
			case "ChainExpression":
				this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
				break;
			case "MemberExpression": if (!isBinding) break;
			default: this.raise(node.start, "Assigning to rvalue");
		}
		else if (refDestructuringErrors) this.checkPatternErrors(refDestructuringErrors, true);
		return node;
	};
	pp$7.toAssignableList = function(exprList, isBinding) {
		var end = exprList.length;
		for (var i = 0; i < end; i++) {
			var elt = exprList[i];
			if (elt) this.toAssignable(elt, isBinding);
		}
		if (end) {
			var last = exprList[end - 1];
			if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") this.unexpected(last.argument.start);
		}
		return exprList;
	};
	pp$7.parseSpread = function(refDestructuringErrors) {
		var node = this.startNode();
		this.next();
		node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
		return this.finishNode(node, "SpreadElement");
	};
	pp$7.parseRestBinding = function() {
		var node = this.startNode();
		this.next();
		if (this.options.ecmaVersion === 6 && this.type !== types$1.name) this.unexpected();
		node.argument = this.parseBindingAtom();
		return this.finishNode(node, "RestElement");
	};
	pp$7.parseBindingAtom = function() {
		if (this.options.ecmaVersion >= 6) switch (this.type) {
			case types$1.bracketL:
				var node = this.startNode();
				this.next();
				node.elements = this.parseBindingList(types$1.bracketR, true, true);
				return this.finishNode(node, "ArrayPattern");
			case types$1.braceL: return this.parseObj(true);
		}
		return this.parseIdent();
	};
	pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
		var elts = [], first = true;
		while (!this.eat(close)) {
			if (first) first = false;
			else this.expect(types$1.comma);
			if (allowEmpty && this.type === types$1.comma) elts.push(null);
			else if (allowTrailingComma && this.afterTrailingComma(close)) break;
			else if (this.type === types$1.ellipsis) {
				var rest = this.parseRestBinding();
				this.parseBindingListItem(rest);
				elts.push(rest);
				if (this.type === types$1.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
				this.expect(close);
				break;
			} else elts.push(this.parseAssignableListItem(allowModifiers));
		}
		return elts;
	};
	pp$7.parseAssignableListItem = function(allowModifiers) {
		var elem = this.parseMaybeDefault(this.start, this.startLoc);
		this.parseBindingListItem(elem);
		return elem;
	};
	pp$7.parseBindingListItem = function(param) {
		return param;
	};
	pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
		left = left || this.parseBindingAtom();
		if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) return left;
		var node = this.startNodeAt(startPos, startLoc);
		node.left = left;
		node.right = this.parseMaybeAssign();
		return this.finishNode(node, "AssignmentPattern");
	};
	pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
		if (bindingType === void 0) bindingType = BIND_NONE;
		var isBind = bindingType !== BIND_NONE;
		switch (expr.type) {
			case "Identifier":
				if (this.strict && this.reservedWordsStrictBind.test(expr.name)) this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
				if (isBind) {
					if (bindingType === BIND_LEXICAL && expr.name === "let") this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
					if (checkClashes) {
						if (hasOwn(checkClashes, expr.name)) this.raiseRecoverable(expr.start, "Argument name clash");
						checkClashes[expr.name] = true;
					}
					if (bindingType !== BIND_OUTSIDE) this.declareName(expr.name, bindingType, expr.start);
				}
				break;
			case "ChainExpression":
				this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
				break;
			case "MemberExpression":
				if (isBind) this.raiseRecoverable(expr.start, "Binding member expression");
				break;
			case "ParenthesizedExpression":
				if (isBind) this.raiseRecoverable(expr.start, "Binding parenthesized expression");
				return this.checkLValSimple(expr.expression, bindingType, checkClashes);
			default: this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
		}
	};
	pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
		if (bindingType === void 0) bindingType = BIND_NONE;
		switch (expr.type) {
			case "ObjectPattern":
				for (var i = 0, list = expr.properties; i < list.length; i += 1) {
					var prop = list[i];
					this.checkLValInnerPattern(prop, bindingType, checkClashes);
				}
				break;
			case "ArrayPattern":
				for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
					var elem = list$1[i$1];
					if (elem) this.checkLValInnerPattern(elem, bindingType, checkClashes);
				}
				break;
			default: this.checkLValSimple(expr, bindingType, checkClashes);
		}
	};
	pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
		if (bindingType === void 0) bindingType = BIND_NONE;
		switch (expr.type) {
			case "Property":
				this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
				break;
			case "AssignmentPattern":
				this.checkLValPattern(expr.left, bindingType, checkClashes);
				break;
			case "RestElement":
				this.checkLValPattern(expr.argument, bindingType, checkClashes);
				break;
			default: this.checkLValPattern(expr, bindingType, checkClashes);
		}
	};
	var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
		this.token = token;
		this.isExpr = !!isExpr;
		this.preserveSpace = !!preserveSpace;
		this.override = override;
		this.generator = !!generator;
	};
	var types = {
		b_stat: new TokContext("{", false),
		b_expr: new TokContext("{", true),
		b_tmpl: new TokContext("${", false),
		p_stat: new TokContext("(", false),
		p_expr: new TokContext("(", true),
		q_tmpl: new TokContext("`", true, true, function(p) {
			return p.tryReadTemplateToken();
		}),
		f_stat: new TokContext("function", false),
		f_expr: new TokContext("function", true),
		f_expr_gen: new TokContext("function", true, false, null, true),
		f_gen: new TokContext("function", false, false, null, true)
	};
	var pp$6 = Parser.prototype;
	pp$6.initialContext = function() {
		return [types.b_stat];
	};
	pp$6.curContext = function() {
		return this.context[this.context.length - 1];
	};
	pp$6.braceIsBlock = function(prevType) {
		var parent = this.curContext();
		if (parent === types.f_expr || parent === types.f_stat) return true;
		if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) return !parent.isExpr;
		if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
		if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) return true;
		if (prevType === types$1.braceL) return parent === types.b_stat;
		if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) return false;
		return !this.exprAllowed;
	};
	pp$6.inGeneratorContext = function() {
		for (var i = this.context.length - 1; i >= 1; i--) {
			var context = this.context[i];
			if (context.token === "function") return context.generator;
		}
		return false;
	};
	pp$6.updateContext = function(prevType) {
		var update, type = this.type;
		if (type.keyword && prevType === types$1.dot) this.exprAllowed = false;
		else if (update = type.updateContext) update.call(this, prevType);
		else this.exprAllowed = type.beforeExpr;
	};
	pp$6.overrideContext = function(tokenCtx) {
		if (this.curContext() !== tokenCtx) this.context[this.context.length - 1] = tokenCtx;
	};
	types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
		if (this.context.length === 1) {
			this.exprAllowed = true;
			return;
		}
		var out = this.context.pop();
		if (out === types.b_stat && this.curContext().token === "function") out = this.context.pop();
		this.exprAllowed = !out.isExpr;
	};
	types$1.braceL.updateContext = function(prevType) {
		this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
		this.exprAllowed = true;
	};
	types$1.dollarBraceL.updateContext = function() {
		this.context.push(types.b_tmpl);
		this.exprAllowed = true;
	};
	types$1.parenL.updateContext = function(prevType) {
		var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
		this.context.push(statementParens ? types.p_stat : types.p_expr);
		this.exprAllowed = true;
	};
	types$1.incDec.updateContext = function() {};
	types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
		if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) this.context.push(types.f_expr);
		else this.context.push(types.f_stat);
		this.exprAllowed = false;
	};
	types$1.colon.updateContext = function() {
		if (this.curContext().token === "function") this.context.pop();
		this.exprAllowed = true;
	};
	types$1.backQuote.updateContext = function() {
		if (this.curContext() === types.q_tmpl) this.context.pop();
		else this.context.push(types.q_tmpl);
		this.exprAllowed = false;
	};
	types$1.star.updateContext = function(prevType) {
		if (prevType === types$1._function) {
			var index = this.context.length - 1;
			if (this.context[index] === types.f_expr) this.context[index] = types.f_expr_gen;
			else this.context[index] = types.f_gen;
		}
		this.exprAllowed = true;
	};
	types$1.name.updateContext = function(prevType) {
		var allowed = false;
		if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
			if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) allowed = true;
		}
		this.exprAllowed = allowed;
	};
	var pp$5 = Parser.prototype;
	pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
		if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") return;
		if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) return;
		var key = prop.key;
		var name;
		switch (key.type) {
			case "Identifier":
				name = key.name;
				break;
			case "Literal":
				name = String(key.value);
				break;
			default: return;
		}
		var kind = prop.kind;
		if (this.options.ecmaVersion >= 6) {
			if (name === "__proto__" && kind === "init") {
				if (propHash.proto) {
					if (refDestructuringErrors) {
						if (refDestructuringErrors.doubleProto < 0) refDestructuringErrors.doubleProto = key.start;
					} else this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
				}
				propHash.proto = true;
			}
			return;
		}
		name = "$" + name;
		var other = propHash[name];
		if (other) {
			var redefinition;
			if (kind === "init") redefinition = this.strict && other.init || other.get || other.set;
			else redefinition = other.init || other[kind];
			if (redefinition) this.raiseRecoverable(key.start, "Redefinition of property");
		} else other = propHash[name] = {
			init: false,
			get: false,
			set: false
		};
		other[kind] = true;
	};
	pp$5.parseExpression = function(forInit, refDestructuringErrors) {
		var this$1$1 = this;
		return this.catchStackOverflow(function() {
			var startPos = this$1$1.start, startLoc = this$1$1.startLoc;
			var expr = this$1$1.parseMaybeAssign(forInit, refDestructuringErrors);
			if (this$1$1.type === types$1.comma) {
				var node = this$1$1.startNodeAt(startPos, startLoc);
				node.expressions = [expr];
				while (this$1$1.eat(types$1.comma)) node.expressions.push(this$1$1.parseMaybeAssign(forInit, refDestructuringErrors));
				return this$1$1.finishNode(node, "SequenceExpression");
			}
			return expr;
		});
	};
	pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
		if (this.isContextual("yield")) {
			if (this.inGenerator) return this.parseYield(forInit);
			else this.exprAllowed = false;
		}
		var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
		if (refDestructuringErrors) {
			oldParenAssign = refDestructuringErrors.parenthesizedAssign;
			oldTrailingComma = refDestructuringErrors.trailingComma;
			oldDoubleProto = refDestructuringErrors.doubleProto;
			refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
		} else {
			refDestructuringErrors = new DestructuringErrors();
			ownDestructuringErrors = true;
		}
		var startPos = this.start, startLoc = this.startLoc;
		if (this.type === types$1.parenL || this.type === types$1.name) {
			this.potentialArrowAt = this.start;
			this.potentialArrowInForAwait = forInit === "await";
		}
		var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
		if (afterLeftParse) left = afterLeftParse.call(this, left, startPos, startLoc);
		if (this.type.isAssign) {
			var node = this.startNodeAt(startPos, startLoc);
			node.operator = this.value;
			if (this.type === types$1.eq) left = this.toAssignable(left, false, refDestructuringErrors);
			if (!ownDestructuringErrors) refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
			if (refDestructuringErrors.shorthandAssign >= left.start) refDestructuringErrors.shorthandAssign = -1;
			if (this.type === types$1.eq) this.checkLValPattern(left);
			else this.checkLValSimple(left);
			node.left = left;
			this.next();
			node.right = this.parseMaybeAssign(forInit);
			if (oldDoubleProto > -1) refDestructuringErrors.doubleProto = oldDoubleProto;
			return this.finishNode(node, "AssignmentExpression");
		} else if (ownDestructuringErrors) this.checkExpressionErrors(refDestructuringErrors, true);
		if (oldParenAssign > -1) refDestructuringErrors.parenthesizedAssign = oldParenAssign;
		if (oldTrailingComma > -1) refDestructuringErrors.trailingComma = oldTrailingComma;
		return left;
	};
	pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
		var startPos = this.start, startLoc = this.startLoc;
		var expr = this.parseExprOps(forInit, refDestructuringErrors);
		if (this.checkExpressionErrors(refDestructuringErrors)) return expr;
		if (!(expr.type === "ArrowFunctionExpression" && expr.start === startPos) && this.eat(types$1.question)) {
			var node = this.startNodeAt(startPos, startLoc);
			node.test = expr;
			node.consequent = this.parseMaybeAssign();
			this.expect(types$1.colon);
			node.alternate = this.parseMaybeAssign(forInit);
			return this.finishNode(node, "ConditionalExpression");
		}
		return expr;
	};
	pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
		var startPos = this.start, startLoc = this.startLoc;
		var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
		if (this.checkExpressionErrors(refDestructuringErrors)) return expr;
		return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
	};
	pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
		var prec = this.type.binop;
		if (prec != null && (!forInit || this.type !== types$1._in)) {
			if (prec > minPrec) {
				var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
				var coalesce = this.type === types$1.coalesce;
				if (coalesce) prec = types$1.logicalAND.binop;
				var op = this.value;
				this.next();
				var startPos = this.start, startLoc = this.startLoc;
				var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
				var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
				if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
				return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
			}
		}
		return left;
	};
	pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
		if (right.type === "PrivateIdentifier") this.raise(right.start, "Private identifier can only be left side of binary expression");
		var node = this.startNodeAt(startPos, startLoc);
		node.left = left;
		node.operator = op;
		node.right = right;
		return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
	};
	pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
		var startPos = this.start, startLoc = this.startLoc, expr;
		if (this.isContextual("await") && this.canAwait) {
			expr = this.parseAwait(forInit);
			sawUnary = true;
		} else if (this.type.prefix) {
			var node = this.startNode(), update = this.type === types$1.incDec;
			node.operator = this.value;
			node.prefix = true;
			this.next();
			node.argument = this.parseMaybeUnary(null, true, update, forInit);
			this.checkExpressionErrors(refDestructuringErrors, true);
			if (update) this.checkLValSimple(node.argument);
			else if (this.strict && node.operator === "delete" && isLocalVariableAccess(node.argument)) this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
			else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) this.raiseRecoverable(node.start, "Private fields can not be deleted");
			else sawUnary = true;
			expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
		} else if (!sawUnary && this.type === types$1.privateId) {
			if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) this.unexpected();
			expr = this.parsePrivateIdent();
			if (this.type !== types$1._in) this.unexpected();
		} else {
			expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
			if (this.checkExpressionErrors(refDestructuringErrors)) return expr;
			while (this.type.postfix && !this.canInsertSemicolon()) {
				var node$1 = this.startNodeAt(startPos, startLoc);
				node$1.operator = this.value;
				node$1.prefix = false;
				node$1.argument = expr;
				this.checkLValSimple(expr);
				this.next();
				expr = this.finishNode(node$1, "UpdateExpression");
			}
		}
		if (!incDec && !(expr.type === "ArrowFunctionExpression" && expr.start === startPos) && this.eat(types$1.starstar)) {
			if (sawUnary) this.unexpected(this.lastTokStart);
			else return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
		} else return expr;
	};
	function isLocalVariableAccess(node) {
		return node.type === "Identifier" || node.type === "ParenthesizedExpression" && isLocalVariableAccess(node.expression);
	}
	function isPrivateFieldAccess(node) {
		return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression) || node.type === "ParenthesizedExpression" && isPrivateFieldAccess(node.expression);
	}
	pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
		var startPos = this.start, startLoc = this.startLoc;
		var expr = this.parseExprAtom(refDestructuringErrors, forInit);
		if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return expr;
		var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
		if (refDestructuringErrors && result.type === "MemberExpression") {
			if (refDestructuringErrors.parenthesizedAssign >= result.start) refDestructuringErrors.parenthesizedAssign = -1;
			if (refDestructuringErrors.parenthesizedBind >= result.start) refDestructuringErrors.parenthesizedBind = -1;
			if (refDestructuringErrors.trailingComma >= result.start) refDestructuringErrors.trailingComma = -1;
		}
		return result;
	};
	pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
		var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
		var optionalChained = false;
		while (true) {
			var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
			if (element.optional) optionalChained = true;
			if (element === base || element.type === "ArrowFunctionExpression") {
				if (optionalChained) {
					var chainNode = this.startNodeAt(startPos, startLoc);
					chainNode.expression = element;
					element = this.finishNode(chainNode, "ChainExpression");
				}
				return element;
			}
			base = element;
		}
	};
	pp$5.shouldParseAsyncArrow = function() {
		return !this.canInsertSemicolon() && this.eat(types$1.arrow);
	};
	pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
		return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
	};
	pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
		var optionalSupported = this.options.ecmaVersion >= 11;
		var optional = optionalSupported && this.eat(types$1.questionDot);
		if (noCalls && optional) this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
		var computed = this.eat(types$1.bracketL);
		if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
			var node = this.startNodeAt(startPos, startLoc);
			node.object = base;
			if (computed) {
				node.property = this.parseExpression();
				this.expect(types$1.bracketR);
			} else if (this.type === types$1.privateId && base.type !== "Super") node.property = this.parsePrivateIdent();
			else node.property = this.parseIdent(this.options.allowReserved !== "never");
			node.computed = !!computed;
			if (optionalSupported) node.optional = optional;
			base = this.finishNode(node, "MemberExpression");
		} else if (!noCalls && this.eat(types$1.parenL)) {
			var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
			this.yieldPos = 0;
			this.awaitPos = 0;
			this.awaitIdentPos = 0;
			var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
			if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
				this.checkPatternErrors(refDestructuringErrors, false);
				this.checkYieldAwaitInDefaultParams();
				if (this.awaitIdentPos > 0) this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
				this.yieldPos = oldYieldPos;
				this.awaitPos = oldAwaitPos;
				this.awaitIdentPos = oldAwaitIdentPos;
				return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
			}
			this.checkExpressionErrors(refDestructuringErrors, true);
			this.yieldPos = oldYieldPos || this.yieldPos;
			this.awaitPos = oldAwaitPos || this.awaitPos;
			this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
			var node$1 = this.startNodeAt(startPos, startLoc);
			node$1.callee = base;
			node$1.arguments = exprList;
			if (optionalSupported) node$1.optional = optional;
			base = this.finishNode(node$1, "CallExpression");
		} else if (this.type === types$1.backQuote) {
			if (optional || optionalChained) this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
			var node$2 = this.startNodeAt(startPos, startLoc);
			node$2.tag = base;
			node$2.quasi = this.parseTemplate({ isTagged: true });
			base = this.finishNode(node$2, "TaggedTemplateExpression");
		}
		return base;
	};
	pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
		if (this.type === types$1.slash) this.readRegexp();
		var node, canBeArrow = this.potentialArrowAt === this.start;
		switch (this.type) {
			case types$1._super:
				if (!this.allowSuper) this.raise(this.start, "'super' keyword outside a method");
				node = this.startNode();
				this.next();
				if (this.type === types$1.parenL && !this.allowDirectSuper) this.raise(node.start, "super() call outside constructor of a subclass");
				if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) this.unexpected();
				return this.finishNode(node, "Super");
			case types$1._this:
				node = this.startNode();
				this.next();
				return this.finishNode(node, "ThisExpression");
			case types$1.name:
				var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
				var id = this.parseIdent(false);
				if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
					this.overrideContext(types.f_expr);
					return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
				}
				if (canBeArrow && !this.canInsertSemicolon()) {
					if (this.eat(types$1.arrow)) return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
					if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
						id = this.parseIdent(false);
						if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) this.unexpected();
						return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
					}
				}
				return id;
			case types$1.regexp:
				var value = this.value;
				node = this.parseLiteral(value.value);
				node.regex = {
					pattern: value.pattern,
					flags: value.flags
				};
				return node;
			case types$1.num:
			case types$1.string: return this.parseLiteral(this.value);
			case types$1._null:
			case types$1._true:
			case types$1._false:
				node = this.startNode();
				node.value = this.type === types$1._null ? null : this.type === types$1._true;
				node.raw = this.type.keyword;
				this.next();
				return this.finishNode(node, "Literal");
			case types$1.parenL:
				var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
				if (refDestructuringErrors) {
					if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) refDestructuringErrors.parenthesizedAssign = start;
					if (refDestructuringErrors.parenthesizedBind < 0) refDestructuringErrors.parenthesizedBind = start;
				}
				return expr;
			case types$1.bracketL:
				node = this.startNode();
				this.next();
				node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
				return this.finishNode(node, "ArrayExpression");
			case types$1.braceL:
				this.overrideContext(types.b_expr);
				return this.parseObj(false, refDestructuringErrors);
			case types$1._function:
				node = this.startNode();
				this.next();
				return this.parseFunction(node, 0);
			case types$1._class: return this.parseClass(this.startNode(), false);
			case types$1._new: return this.parseNew();
			case types$1.backQuote: return this.parseTemplate();
			case types$1._import: if (this.options.ecmaVersion >= 11) return this.parseExprImport(forNew);
			else return this.unexpected();
			default: return this.parseExprAtomDefault();
		}
	};
	pp$5.parseExprAtomDefault = function() {
		this.unexpected();
	};
	pp$5.parseExprImport = function(forNew) {
		var node = this.startNode();
		if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword import");
		this.next();
		if (this.type === types$1.parenL && !forNew) return this.parseDynamicImport(node);
		else if (this.type === types$1.dot) {
			var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
			meta.name = "import";
			node.meta = this.finishNode(meta, "Identifier");
			return this.parseImportMeta(node);
		} else this.unexpected();
	};
	pp$5.parseDynamicImport = function(node) {
		this.next();
		node.source = this.parseMaybeAssign();
		if (this.options.ecmaVersion >= 16) {
			if (!this.eat(types$1.parenR)) {
				this.expect(types$1.comma);
				if (!this.afterTrailingComma(types$1.parenR)) {
					node.options = this.parseMaybeAssign();
					if (!this.eat(types$1.parenR)) {
						this.expect(types$1.comma);
						if (!this.afterTrailingComma(types$1.parenR)) this.unexpected();
					}
				} else node.options = null;
			} else node.options = null;
		} else if (!this.eat(types$1.parenR)) {
			var errorPos = this.start;
			if (this.eat(types$1.comma) && this.eat(types$1.parenR)) this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
			else this.unexpected(errorPos);
		}
		return this.finishNode(node, "ImportExpression");
	};
	pp$5.parseImportMeta = function(node) {
		this.next();
		var containsEsc = this.containsEsc;
		node.property = this.parseIdent(true);
		if (node.property.name !== "meta") this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
		if (containsEsc) this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
		if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
		return this.finishNode(node, "MetaProperty");
	};
	pp$5.parseLiteral = function(value) {
		var node = this.startNode();
		node.value = value;
		node.raw = this.input.slice(this.start, this.end);
		if (node.raw.charCodeAt(node.raw.length - 1) === 110) node.bigint = node.value != null ? node.value.toString() : node.raw.slice(0, -1).replace(/_/g, "");
		this.next();
		return this.finishNode(node, "Literal");
	};
	pp$5.parseParenExpression = function() {
		this.expect(types$1.parenL);
		var val = this.parseExpression();
		this.expect(types$1.parenR);
		return val;
	};
	pp$5.shouldParseArrow = function(exprList) {
		return !this.canInsertSemicolon();
	};
	pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
		var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
		if (this.options.ecmaVersion >= 6) {
			this.next();
			var innerStartPos = this.start, innerStartLoc = this.startLoc;
			var exprList = [], first = true, lastIsComma = false;
			var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
			this.yieldPos = 0;
			this.awaitPos = 0;
			while (this.type !== types$1.parenR) {
				first ? first = false : this.expect(types$1.comma);
				if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
					lastIsComma = true;
					break;
				} else if (this.type === types$1.ellipsis) {
					spreadStart = this.start;
					exprList.push(this.parseParenItem(this.parseRestBinding()));
					if (this.type === types$1.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
					break;
				} else exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
			}
			var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
			this.expect(types$1.parenR);
			if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
				this.checkPatternErrors(refDestructuringErrors, false);
				this.checkYieldAwaitInDefaultParams();
				this.yieldPos = oldYieldPos;
				this.awaitPos = oldAwaitPos;
				return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
			}
			if (!exprList.length || lastIsComma) this.unexpected(this.lastTokStart);
			if (spreadStart) this.unexpected(spreadStart);
			this.checkExpressionErrors(refDestructuringErrors, true);
			this.yieldPos = oldYieldPos || this.yieldPos;
			this.awaitPos = oldAwaitPos || this.awaitPos;
			if (exprList.length > 1) {
				val = this.startNodeAt(innerStartPos, innerStartLoc);
				val.expressions = exprList;
				this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
			} else val = exprList[0];
		} else val = this.parseParenExpression();
		if (this.options.preserveParens) {
			var par = this.startNodeAt(startPos, startLoc);
			par.expression = val;
			return this.finishNode(par, "ParenthesizedExpression");
		} else return val;
	};
	pp$5.parseParenItem = function(item) {
		return item;
	};
	pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
		return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
	};
	var empty = [];
	pp$5.parseNew = function() {
		if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword new");
		var node = this.startNode();
		this.next();
		if (this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
			var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
			meta.name = "new";
			node.meta = this.finishNode(meta, "Identifier");
			this.next();
			var containsEsc = this.containsEsc;
			node.property = this.parseIdent(true);
			if (node.property.name !== "target") this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
			if (containsEsc) this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
			if (!this.allowNewDotTarget) this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
			return this.finishNode(node, "MetaProperty");
		}
		var startPos = this.start, startLoc = this.startLoc;
		node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
		if (node.callee.type === "Super") this.raiseRecoverable(startPos, "Invalid use of 'super'");
		if (this.eat(types$1.parenL)) node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
		else node.arguments = empty;
		return this.finishNode(node, "NewExpression");
	};
	pp$5.parseTemplateElement = function(ref) {
		var isTagged = ref.isTagged;
		var elem = this.startNode();
		if (this.type === types$1.invalidTemplate) {
			if (!isTagged) this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
			elem.value = {
				raw: this.value.replace(/\r\n?/g, "\n"),
				cooked: null
			};
		} else elem.value = {
			raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
			cooked: this.value
		};
		this.next();
		elem.tail = this.type === types$1.backQuote;
		return this.finishNode(elem, "TemplateElement");
	};
	pp$5.parseTemplate = function(ref) {
		if (ref === void 0) ref = {};
		var isTagged = ref.isTagged;
		if (isTagged === void 0) isTagged = false;
		var node = this.startNode();
		this.next();
		node.expressions = [];
		var curElt = this.parseTemplateElement({ isTagged });
		node.quasis = [curElt];
		while (!curElt.tail) {
			if (this.type === types$1.eof) this.raise(this.pos, "Unterminated template literal");
			this.expect(types$1.dollarBraceL);
			node.expressions.push(this.parseExpression());
			this.expect(types$1.braceR);
			node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
		}
		this.next();
		return this.finishNode(node, "TemplateLiteral");
	};
	pp$5.isAsyncProp = function(prop) {
		return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
	};
	pp$5.parseObj = function(isPattern, refDestructuringErrors) {
		var node = this.startNode(), first = true, propHash = {};
		node.properties = [];
		this.next();
		while (!this.eat(types$1.braceR)) {
			if (!first) {
				this.expect(types$1.comma);
				if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) break;
			} else first = false;
			var prop = this.parseProperty(isPattern, refDestructuringErrors);
			if (!isPattern) this.checkPropClash(prop, propHash, refDestructuringErrors);
			node.properties.push(prop);
		}
		return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
	};
	pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
		var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
		if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
			if (isPattern) {
				prop.argument = this.parseIdent(false);
				if (this.type === types$1.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
				return this.finishNode(prop, "RestElement");
			}
			prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
			if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) refDestructuringErrors.trailingComma = this.start;
			return this.finishNode(prop, "SpreadElement");
		}
		if (this.options.ecmaVersion >= 6) {
			prop.method = false;
			prop.shorthand = false;
			if (isPattern || refDestructuringErrors) {
				startPos = this.start;
				startLoc = this.startLoc;
			}
			if (!isPattern) isGenerator = this.eat(types$1.star);
		}
		var containsEsc = this.containsEsc;
		this.parsePropertyName(prop);
		if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
			isAsync = true;
			isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
			this.parsePropertyName(prop);
		} else isAsync = false;
		this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
		return this.finishNode(prop, "Property");
	};
	pp$5.parseGetterSetter = function(prop) {
		var kind = prop.key.name;
		this.parsePropertyName(prop);
		prop.value = this.parseMethod(false);
		prop.kind = kind;
		var paramCount = prop.kind === "get" ? 0 : 1;
		if (prop.value.params.length !== paramCount) {
			var start = prop.value.start;
			if (prop.kind === "get") this.raiseRecoverable(start, "getter should have no params");
			else this.raiseRecoverable(start, "setter should have exactly one param");
		} else if (prop.kind === "set" && prop.value.params[0].type === "RestElement") this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
	};
	pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
		if ((isGenerator || isAsync) && this.type === types$1.colon) this.unexpected();
		if (this.eat(types$1.colon)) {
			prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
			prop.kind = "init";
		} else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
			if (isPattern) this.unexpected();
			prop.method = true;
			prop.value = this.parseMethod(isGenerator, isAsync);
			prop.kind = "init";
		} else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq) {
			if (isGenerator || isAsync) this.unexpected();
			this.parseGetterSetter(prop);
		} else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
			if (isGenerator || isAsync) this.unexpected();
			this.checkUnreserved(prop.key);
			if (prop.key.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = startPos;
			if (isPattern) prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
			else if (this.type === types$1.eq && refDestructuringErrors) {
				if (refDestructuringErrors.shorthandAssign < 0) refDestructuringErrors.shorthandAssign = this.start;
				prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
			} else prop.value = this.copyNode(prop.key);
			prop.kind = "init";
			prop.shorthand = true;
		} else this.unexpected();
	};
	pp$5.parsePropertyName = function(prop) {
		if (this.options.ecmaVersion >= 6) {
			if (this.eat(types$1.bracketL)) {
				prop.computed = true;
				prop.key = this.parseMaybeAssign();
				this.expect(types$1.bracketR);
				return prop.key;
			} else prop.computed = false;
		}
		return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
	};
	pp$5.initFunction = function(node) {
		node.id = null;
		if (this.options.ecmaVersion >= 6) node.generator = node.expression = false;
		if (this.options.ecmaVersion >= 8) node.async = false;
	};
	pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
		var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
		this.initFunction(node);
		if (this.options.ecmaVersion >= 6) node.generator = isGenerator;
		if (this.options.ecmaVersion >= 8) node.async = !!isAsync;
		this.yieldPos = 0;
		this.awaitPos = 0;
		this.awaitIdentPos = 0;
		this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
		this.expect(types$1.parenL);
		node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
		this.checkYieldAwaitInDefaultParams();
		this.parseFunctionBody(node, false, true, false);
		this.yieldPos = oldYieldPos;
		this.awaitPos = oldAwaitPos;
		this.awaitIdentPos = oldAwaitIdentPos;
		return this.finishNode(node, "FunctionExpression");
	};
	pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
		var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
		this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
		this.initFunction(node);
		if (this.options.ecmaVersion >= 8) node.async = !!isAsync;
		this.yieldPos = 0;
		this.awaitPos = 0;
		this.awaitIdentPos = 0;
		node.params = this.toAssignableList(params, true);
		this.parseFunctionBody(node, true, false, forInit);
		this.yieldPos = oldYieldPos;
		this.awaitPos = oldAwaitPos;
		this.awaitIdentPos = oldAwaitIdentPos;
		return this.finishNode(node, "ArrowFunctionExpression");
	};
	pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
		var isExpression = isArrowFunction && this.type !== types$1.braceL;
		var oldStrict = this.strict, useStrict = false;
		if (isExpression) {
			node.body = this.parseMaybeAssign(forInit);
			node.expression = true;
			this.checkParams(node, false);
		} else {
			var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
			if (!oldStrict || nonSimple) {
				useStrict = this.strictDirective(this.end);
				if (useStrict && nonSimple) this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
			}
			var oldLabels = this.labels;
			this.labels = [];
			if (useStrict) this.strict = true;
			this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
			if (this.strict && node.id) this.checkLValSimple(node.id, BIND_OUTSIDE);
			node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
			node.expression = false;
			this.adaptDirectivePrologue(node.body.body);
			this.labels = oldLabels;
		}
		this.exitScope();
	};
	pp$5.isSimpleParamList = function(params) {
		for (var i = 0, list = params; i < list.length; i += 1) if (list[i].type !== "Identifier") return false;
		return true;
	};
	pp$5.checkParams = function(node, allowDuplicates) {
		var nameHash = Object.create(null);
		for (var i = 0, list = node.params; i < list.length; i += 1) {
			var param = list[i];
			this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
		}
	};
	pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
		var elts = [], first = true;
		while (!this.eat(close)) {
			if (!first) {
				this.expect(types$1.comma);
				if (allowTrailingComma && this.afterTrailingComma(close)) break;
			} else first = false;
			var elt = void 0;
			if (allowEmpty && this.type === types$1.comma) elt = null;
			else if (this.type === types$1.ellipsis) {
				elt = this.parseSpread(refDestructuringErrors);
				if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) refDestructuringErrors.trailingComma = this.start;
			} else elt = this.parseMaybeAssign(false, refDestructuringErrors);
			elts.push(elt);
		}
		return elts;
	};
	pp$5.checkUnreserved = function(ref) {
		var start = ref.start;
		var end = ref.end;
		var name = ref.name;
		if (this.inGenerator && name === "yield") this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
		if (this.inAsync && name === "await") this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
		if (!(this.currentThisScope().flags & SCOPE_VAR) && name === "arguments") this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
		if (this.inClassStaticBlock && (name === "arguments" || name === "await")) this.raise(start, "Cannot use " + name + " in class static initialization block");
		if (this.keywords.test(name)) this.raise(start, "Unexpected keyword '" + name + "'");
		if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) return;
		if ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(name)) {
			if (!this.inAsync && name === "await") this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
			this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
		}
	};
	pp$5.parseIdent = function(liberal) {
		var node = this.parseIdentNode();
		this.next(!!liberal);
		this.finishNode(node, "Identifier");
		if (!liberal) {
			this.checkUnreserved(node);
			if (node.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = node.start;
		}
		return node;
	};
	pp$5.parseIdentNode = function() {
		var node = this.startNode();
		if (this.type === types$1.name) node.name = this.value;
		else if (this.type.keyword) {
			node.name = this.type.keyword;
			if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) this.context.pop();
			this.type = types$1.name;
		} else this.unexpected();
		return node;
	};
	pp$5.parsePrivateIdent = function() {
		var node = this.startNode();
		if (this.type === types$1.privateId) node.name = this.value;
		else this.unexpected();
		this.next();
		this.finishNode(node, "PrivateIdentifier");
		if (this.options.checkPrivateFields) {
			if (this.privateNameStack.length === 0) this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
			else this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
		}
		return node;
	};
	pp$5.parseYield = function(forInit) {
		if (!this.yieldPos) this.yieldPos = this.start;
		var node = this.startNode();
		this.next();
		if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
			node.delegate = false;
			node.argument = null;
		} else {
			node.delegate = this.eat(types$1.star);
			node.argument = this.parseMaybeAssign(forInit);
		}
		return this.finishNode(node, "YieldExpression");
	};
	pp$5.parseAwait = function(forInit) {
		if (!this.awaitPos) this.awaitPos = this.start;
		var node = this.startNode();
		this.next();
		node.argument = this.parseMaybeUnary(null, true, false, forInit);
		return this.finishNode(node, "AwaitExpression");
	};
	var pp$4 = Parser.prototype;
	pp$4.raise = function(pos, message) {
		var loc = getLineInfo(this.input, pos);
		message += " (" + loc.line + ":" + loc.column + ")";
		if (this.sourceFile) message += " in " + this.sourceFile;
		var err = new SyntaxError(message);
		err.pos = pos;
		err.loc = loc;
		err.raisedAt = this.pos;
		throw err;
	};
	pp$4.raiseRecoverable = pp$4.raise;
	pp$4.curPosition = function() {
		if (this.options.locations) return new Position(this.curLine, this.pos - this.lineStart);
	};
	var pp$3 = Parser.prototype;
	var Scope = function Scope(flags) {
		this.flags = flags;
		this.var = [];
		this.lexical = [];
		this.functions = [];
	};
	pp$3.enterScope = function(flags) {
		this.scopeStack.push(new Scope(flags));
	};
	pp$3.exitScope = function() {
		this.scopeStack.pop();
	};
	pp$3.treatFunctionsAsVarInScope = function(scope) {
		return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
	};
	pp$3.declareName = function(name, bindingType, pos) {
		var redeclared = false;
		if (bindingType === BIND_LEXICAL) {
			var scope = this.currentScope();
			redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
			scope.lexical.push(name);
			if (this.inModule && scope.flags & SCOPE_TOP) delete this.undefinedExports[name];
		} else if (bindingType === BIND_SIMPLE_CATCH) this.currentScope().lexical.push(name);
		else if (bindingType === BIND_FUNCTION) {
			var scope$2 = this.currentScope();
			if (this.treatFunctionsAsVar) redeclared = scope$2.lexical.indexOf(name) > -1;
			else redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
			scope$2.functions.push(name);
		} else for (var i = this.scopeStack.length - 1; i >= 0; --i) {
			var scope$3 = this.scopeStack[i];
			if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
				redeclared = true;
				break;
			}
			scope$3.var.push(name);
			if (this.inModule && scope$3.flags & SCOPE_TOP) delete this.undefinedExports[name];
			if (scope$3.flags & SCOPE_VAR) break;
		}
		if (redeclared) this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
	};
	pp$3.checkLocalExport = function(id) {
		if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) this.undefinedExports[id.name] = id;
	};
	pp$3.currentScope = function() {
		return this.scopeStack[this.scopeStack.length - 1];
	};
	pp$3.currentVarScope = function() {
		for (var i = this.scopeStack.length - 1;; i--) {
			var scope = this.scopeStack[i];
			if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK)) return scope;
		}
	};
	pp$3.currentThisScope = function() {
		for (var i = this.scopeStack.length - 1;; i--) {
			var scope = this.scopeStack[i];
			if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK) && !(scope.flags & SCOPE_ARROW)) return scope;
		}
	};
	var Node = function Node(parser, pos, loc) {
		this.type = "";
		this.start = pos;
		this.end = 0;
		if (parser.options.locations) this.loc = new SourceLocation(parser, loc);
		if (parser.options.directSourceFile) this.sourceFile = parser.options.directSourceFile;
		if (parser.options.ranges) this.range = [pos, 0];
	};
	var pp$2 = Parser.prototype;
	pp$2.startNode = function() {
		return new Node(this, this.start, this.startLoc);
	};
	pp$2.startNodeAt = function(pos, loc) {
		return new Node(this, pos, loc);
	};
	function finishNodeAt(node, type, pos, loc) {
		node.type = type;
		node.end = pos;
		if (this.options.locations) node.loc.end = loc;
		if (this.options.ranges) node.range[1] = pos;
		return node;
	}
	pp$2.finishNode = function(node, type) {
		return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
	};
	pp$2.finishNodeAt = function(node, type, pos, loc) {
		return finishNodeAt.call(this, node, type, pos, loc);
	};
	pp$2.copyNode = function(node) {
		var newNode = new Node(this, node.start, this.startLoc);
		for (var prop in node) newNode[prop] = node[prop];
		return newNode;
	};
	var scriptValuesAddedInUnicode = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz";
	var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
	var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
	var ecma11BinaryProperties = ecma10BinaryProperties;
	var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
	var ecma13BinaryProperties = ecma12BinaryProperties;
	var unicodeBinaryProperties = {
		9: ecma9BinaryProperties,
		10: ecma10BinaryProperties,
		11: ecma11BinaryProperties,
		12: ecma12BinaryProperties,
		13: ecma13BinaryProperties,
		14: ecma13BinaryProperties
	};
	var unicodeBinaryPropertiesOfStrings = {
		9: "",
		10: "",
		11: "",
		12: "",
		13: "",
		14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
	};
	var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
	var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
	var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
	var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
	var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
	var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
	var unicodeScriptValues = {
		9: ecma9ScriptValues,
		10: ecma10ScriptValues,
		11: ecma11ScriptValues,
		12: ecma12ScriptValues,
		13: ecma13ScriptValues,
		14: ecma13ScriptValues + " " + scriptValuesAddedInUnicode
	};
	var data = {};
	function buildUnicodeData(ecmaVersion) {
		var d = data[ecmaVersion] = {
			binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
			binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
			nonBinary: {
				General_Category: wordsRegexp(unicodeGeneralCategoryValues),
				Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
			}
		};
		d.nonBinary.Script_Extensions = d.nonBinary.Script;
		d.nonBinary.gc = d.nonBinary.General_Category;
		d.nonBinary.sc = d.nonBinary.Script;
		d.nonBinary.scx = d.nonBinary.Script_Extensions;
	}
	for (var i = 0, list = [
		9,
		10,
		11,
		12,
		13,
		14
	]; i < list.length; i += 1) {
		var ecmaVersion = list[i];
		buildUnicodeData(ecmaVersion);
	}
	var pp$1 = Parser.prototype;
	var BranchID = function BranchID(parent, base) {
		this.parent = parent;
		this.base = base || this;
	};
	BranchID.prototype.separatedFrom = function separatedFrom(alt) {
		for (var self = this; self; self = self.parent) for (var other = alt; other; other = other.parent) if (self.base === other.base && self !== other) return true;
		return false;
	};
	BranchID.prototype.sibling = function sibling() {
		return new BranchID(this.parent, this.base);
	};
	var RegExpValidationState = function RegExpValidationState(parser) {
		this.parser = parser;
		this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
		this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
		this.source = "";
		this.flags = "";
		this.start = 0;
		this.switchU = false;
		this.switchV = false;
		this.switchN = false;
		this.pos = 0;
		this.lastIntValue = 0;
		this.lastStringValue = "";
		this.lastAssertionIsQuantifiable = false;
		this.numCapturingParens = 0;
		this.maxBackReference = 0;
		this.groupNames = Object.create(null);
		this.backReferenceNames = [];
		this.branchID = null;
	};
	RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
		var unicodeSets = flags.indexOf("v") !== -1;
		var unicode = flags.indexOf("u") !== -1;
		this.start = start | 0;
		this.source = pattern + "";
		this.flags = flags;
		if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
			this.switchU = true;
			this.switchV = true;
			this.switchN = true;
		} else {
			this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
			this.switchV = false;
			this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
		}
	};
	RegExpValidationState.prototype.raise = function raise(message) {
		this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
	};
	RegExpValidationState.prototype.at = function at(i, forceU) {
		if (forceU === void 0) forceU = false;
		var s = this.source;
		var l = s.length;
		if (i >= l) return -1;
		var c = s.charCodeAt(i);
		if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) return c;
		var next = s.charCodeAt(i + 1);
		return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
	};
	RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
		if (forceU === void 0) forceU = false;
		var s = this.source;
		var l = s.length;
		if (i >= l) return l;
		var c = s.charCodeAt(i), next;
		if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) return i + 1;
		return i + 2;
	};
	RegExpValidationState.prototype.current = function current(forceU) {
		if (forceU === void 0) forceU = false;
		return this.at(this.pos, forceU);
	};
	RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
		if (forceU === void 0) forceU = false;
		return this.at(this.nextIndex(this.pos, forceU), forceU);
	};
	RegExpValidationState.prototype.advance = function advance(forceU) {
		if (forceU === void 0) forceU = false;
		this.pos = this.nextIndex(this.pos, forceU);
	};
	RegExpValidationState.prototype.eat = function eat(ch, forceU) {
		if (forceU === void 0) forceU = false;
		if (this.current(forceU) === ch) {
			this.advance(forceU);
			return true;
		}
		return false;
	};
	RegExpValidationState.prototype.eatChars = function eatChars(chs, forceU) {
		if (forceU === void 0) forceU = false;
		var pos = this.pos;
		for (var i = 0, list = chs; i < list.length; i += 1) {
			var ch = list[i];
			var current = this.at(pos, forceU);
			if (current === -1 || current !== ch) return false;
			pos = this.nextIndex(pos, forceU);
		}
		this.pos = pos;
		return true;
	};
	/**
	* Validate the flags part of a given RegExpLiteral.
	*
	* @param {RegExpValidationState} state The state to validate RegExp.
	* @returns {void}
	*/
	pp$1.validateRegExpFlags = function(state) {
		var validFlags = state.validFlags;
		var flags = state.flags;
		var u = false;
		var v = false;
		for (var i = 0; i < flags.length; i++) {
			var flag = flags.charAt(i);
			if (validFlags.indexOf(flag) === -1) this.raise(state.start, "Invalid regular expression flag");
			if (flags.indexOf(flag, i + 1) > -1) this.raise(state.start, "Duplicate regular expression flag");
			if (flag === "u") u = true;
			if (flag === "v") v = true;
		}
		if (this.options.ecmaVersion >= 15 && u && v) this.raise(state.start, "Invalid regular expression flag");
	};
	function hasProp(obj) {
		for (var _ in obj) return true;
		return false;
	}
	/**
	* Validate the pattern part of a given RegExpLiteral.
	*
	* @param {RegExpValidationState} state The state to validate RegExp.
	* @returns {void}
	*/
	pp$1.validateRegExpPattern = function(state) {
		this.regexp_pattern(state);
		if (!state.switchN && this.options.ecmaVersion >= 9 && hasProp(state.groupNames)) {
			state.switchN = true;
			this.regexp_pattern(state);
		}
	};
	pp$1.regexp_pattern = function(state) {
		state.pos = 0;
		state.lastIntValue = 0;
		state.lastStringValue = "";
		state.lastAssertionIsQuantifiable = false;
		state.numCapturingParens = 0;
		state.maxBackReference = 0;
		state.groupNames = Object.create(null);
		state.backReferenceNames.length = 0;
		state.branchID = null;
		this.regexp_disjunction(state);
		if (state.pos !== state.source.length) {
			if (state.eat(41)) state.raise("Unmatched ')'");
			if (state.eat(93) || state.eat(125)) state.raise("Lone quantifier brackets");
		}
		if (state.maxBackReference > state.numCapturingParens) state.raise("Invalid escape");
		for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
			var name = list[i];
			if (!state.groupNames[name]) state.raise("Invalid named capture referenced");
		}
	};
	pp$1.regexp_disjunction = function(state) {
		var trackDisjunction = this.options.ecmaVersion >= 16;
		if (trackDisjunction) state.branchID = new BranchID(state.branchID, null);
		this.regexp_alternative(state);
		while (state.eat(124)) {
			if (trackDisjunction) state.branchID = state.branchID.sibling();
			this.regexp_alternative(state);
		}
		if (trackDisjunction) state.branchID = state.branchID.parent;
		if (this.regexp_eatQuantifier(state, true)) state.raise("Nothing to repeat");
		if (state.eat(123)) state.raise("Lone quantifier brackets");
	};
	pp$1.regexp_alternative = function(state) {
		while (state.pos < state.source.length && this.regexp_eatTerm(state));
	};
	pp$1.regexp_eatTerm = function(state) {
		if (this.regexp_eatAssertion(state)) {
			if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
				if (state.switchU) state.raise("Invalid quantifier");
			}
			return true;
		}
		if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
			this.regexp_eatQuantifier(state);
			return true;
		}
		return false;
	};
	pp$1.regexp_eatAssertion = function(state) {
		var start = state.pos;
		state.lastAssertionIsQuantifiable = false;
		if (state.eat(94) || state.eat(36)) return true;
		if (state.eat(92)) {
			if (state.eat(66) || state.eat(98)) return true;
			state.pos = start;
		}
		if (state.eat(40) && state.eat(63)) {
			var lookbehind = false;
			if (this.options.ecmaVersion >= 9) lookbehind = state.eat(60);
			if (state.eat(61) || state.eat(33)) {
				this.regexp_disjunction(state);
				if (!state.eat(41)) state.raise("Unterminated group");
				state.lastAssertionIsQuantifiable = !lookbehind;
				return true;
			}
		}
		state.pos = start;
		return false;
	};
	pp$1.regexp_eatQuantifier = function(state, noError) {
		if (noError === void 0) noError = false;
		if (this.regexp_eatQuantifierPrefix(state, noError)) {
			state.eat(63);
			return true;
		}
		return false;
	};
	pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
		return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
	};
	pp$1.regexp_eatBracedQuantifier = function(state, noError) {
		var start = state.pos;
		if (state.eat(123)) {
			var min = 0, max = -1;
			if (this.regexp_eatDecimalDigits(state)) {
				min = state.lastIntValue;
				if (state.eat(44) && this.regexp_eatDecimalDigits(state)) max = state.lastIntValue;
				if (state.eat(125)) {
					if (max !== -1 && max < min && !noError) state.raise("numbers out of order in {} quantifier");
					return true;
				}
			}
			if (state.switchU && !noError) state.raise("Incomplete quantifier");
			state.pos = start;
		}
		return false;
	};
	pp$1.regexp_eatAtom = function(state) {
		return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
	};
	pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
		var start = state.pos;
		if (state.eat(92)) {
			if (this.regexp_eatAtomEscape(state)) return true;
			state.pos = start;
		}
		return false;
	};
	pp$1.regexp_eatUncapturingGroup = function(state) {
		var start = state.pos;
		if (state.eat(40)) {
			if (state.eat(63)) {
				if (this.options.ecmaVersion >= 16) {
					var addModifiers = this.regexp_eatModifiers(state);
					var hasHyphen = state.eat(45);
					if (addModifiers || hasHyphen) {
						for (var i = 0; i < addModifiers.length; i++) {
							var modifier = addModifiers.charAt(i);
							if (addModifiers.indexOf(modifier, i + 1) > -1) state.raise("Duplicate regular expression modifiers");
						}
						if (hasHyphen) {
							var removeModifiers = this.regexp_eatModifiers(state);
							if (!addModifiers && !removeModifiers && state.current() === 58) state.raise("Invalid regular expression modifiers");
							for (var i$1 = 0; i$1 < removeModifiers.length; i$1++) {
								var modifier$1 = removeModifiers.charAt(i$1);
								if (removeModifiers.indexOf(modifier$1, i$1 + 1) > -1 || addModifiers.indexOf(modifier$1) > -1) state.raise("Duplicate regular expression modifiers");
							}
						}
					}
				}
				if (state.eat(58)) {
					this.regexp_disjunction(state);
					if (state.eat(41)) return true;
					state.raise("Unterminated group");
				}
			}
			state.pos = start;
		}
		return false;
	};
	pp$1.regexp_eatCapturingGroup = function(state) {
		if (state.eat(40)) {
			if (this.options.ecmaVersion >= 9) this.regexp_groupSpecifier(state);
			else if (state.current() === 63) state.raise("Invalid group");
			this.regexp_disjunction(state);
			if (state.eat(41)) {
				state.numCapturingParens += 1;
				return true;
			}
			state.raise("Unterminated group");
		}
		return false;
	};
	pp$1.regexp_eatModifiers = function(state) {
		var modifiers = "";
		var ch = 0;
		while ((ch = state.current()) !== -1 && isRegularExpressionModifier(ch)) {
			modifiers += codePointToString(ch);
			state.advance();
		}
		return modifiers;
	};
	function isRegularExpressionModifier(ch) {
		return ch === 105 || ch === 109 || ch === 115;
	}
	pp$1.regexp_eatExtendedAtom = function(state) {
		return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
	};
	pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
		if (this.regexp_eatBracedQuantifier(state, true)) state.raise("Nothing to repeat");
		return false;
	};
	pp$1.regexp_eatSyntaxCharacter = function(state) {
		var ch = state.current();
		if (isSyntaxCharacter(ch)) {
			state.lastIntValue = ch;
			state.advance();
			return true;
		}
		return false;
	};
	function isSyntaxCharacter(ch) {
		return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
	}
	pp$1.regexp_eatPatternCharacters = function(state) {
		var start = state.pos;
		var ch = 0;
		while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) state.advance();
		return state.pos !== start;
	};
	pp$1.regexp_eatExtendedPatternCharacter = function(state) {
		var ch = state.current();
		if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
			state.advance();
			return true;
		}
		return false;
	};
	pp$1.regexp_groupSpecifier = function(state) {
		if (state.eat(63)) {
			if (!this.regexp_eatGroupName(state)) state.raise("Invalid group");
			var trackDisjunction = this.options.ecmaVersion >= 16;
			var known = state.groupNames[state.lastStringValue];
			if (known) {
				if (trackDisjunction) {
					for (var i = 0, list = known; i < list.length; i += 1) if (!list[i].separatedFrom(state.branchID)) state.raise("Duplicate capture group name");
				} else state.raise("Duplicate capture group name");
			}
			if (trackDisjunction) (known || (state.groupNames[state.lastStringValue] = [])).push(state.branchID);
			else state.groupNames[state.lastStringValue] = true;
		}
	};
	pp$1.regexp_eatGroupName = function(state) {
		state.lastStringValue = "";
		if (state.eat(60)) {
			if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) return true;
			state.raise("Invalid capture group name");
		}
		return false;
	};
	pp$1.regexp_eatRegExpIdentifierName = function(state) {
		state.lastStringValue = "";
		if (this.regexp_eatRegExpIdentifierStart(state)) {
			state.lastStringValue += codePointToString(state.lastIntValue);
			while (this.regexp_eatRegExpIdentifierPart(state)) state.lastStringValue += codePointToString(state.lastIntValue);
			return true;
		}
		return false;
	};
	pp$1.regexp_eatRegExpIdentifierStart = function(state) {
		var start = state.pos;
		var forceU = this.options.ecmaVersion >= 11;
		var ch = state.current(forceU);
		state.advance(forceU);
		if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) ch = state.lastIntValue;
		if (isRegExpIdentifierStart(ch)) {
			state.lastIntValue = ch;
			return true;
		}
		state.pos = start;
		return false;
	};
	function isRegExpIdentifierStart(ch) {
		return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
	}
	pp$1.regexp_eatRegExpIdentifierPart = function(state) {
		var start = state.pos;
		var forceU = this.options.ecmaVersion >= 11;
		var ch = state.current(forceU);
		state.advance(forceU);
		if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) ch = state.lastIntValue;
		if (isRegExpIdentifierPart(ch)) {
			state.lastIntValue = ch;
			return true;
		}
		state.pos = start;
		return false;
	};
	function isRegExpIdentifierPart(ch) {
		return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
	}
	pp$1.regexp_eatAtomEscape = function(state) {
		if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) return true;
		if (state.switchU) {
			if (state.current() === 99) state.raise("Invalid unicode escape");
			state.raise("Invalid escape");
		}
		return false;
	};
	pp$1.regexp_eatBackReference = function(state) {
		var start = state.pos;
		if (this.regexp_eatDecimalEscape(state)) {
			var n = state.lastIntValue;
			if (state.switchU) {
				if (n > state.maxBackReference) state.maxBackReference = n;
				return true;
			}
			if (n <= state.numCapturingParens) return true;
			state.pos = start;
		}
		return false;
	};
	pp$1.regexp_eatKGroupName = function(state) {
		if (state.eat(107)) {
			if (this.regexp_eatGroupName(state)) {
				state.backReferenceNames.push(state.lastStringValue);
				return true;
			}
			state.raise("Invalid named reference");
		}
		return false;
	};
	pp$1.regexp_eatCharacterEscape = function(state) {
		return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
	};
	pp$1.regexp_eatCControlLetter = function(state) {
		var start = state.pos;
		if (state.eat(99)) {
			if (this.regexp_eatControlLetter(state)) return true;
			state.pos = start;
		}
		return false;
	};
	pp$1.regexp_eatZero = function(state) {
		if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
			state.lastIntValue = 0;
			state.advance();
			return true;
		}
		return false;
	};
	pp$1.regexp_eatControlEscape = function(state) {
		var ch = state.current();
		if (ch === 116) {
			state.lastIntValue = 9;
			state.advance();
			return true;
		}
		if (ch === 110) {
			state.lastIntValue = 10;
			state.advance();
			return true;
		}
		if (ch === 118) {
			state.lastIntValue = 11;
			state.advance();
			return true;
		}
		if (ch === 102) {
			state.lastIntValue = 12;
			state.advance();
			return true;
		}
		if (ch === 114) {
			state.lastIntValue = 13;
			state.advance();
			return true;
		}
		return false;
	};
	pp$1.regexp_eatControlLetter = function(state) {
		var ch = state.current();
		if (isControlLetter(ch)) {
			state.lastIntValue = ch % 32;
			state.advance();
			return true;
		}
		return false;
	};
	function isControlLetter(ch) {
		return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
	}
	pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
		if (forceU === void 0) forceU = false;
		var start = state.pos;
		var switchU = forceU || state.switchU;
		if (state.eat(117)) {
			if (this.regexp_eatFixedHexDigits(state, 4)) {
				var lead = state.lastIntValue;
				if (switchU && lead >= 55296 && lead <= 56319) {
					var leadSurrogateEnd = state.pos;
					if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
						var trail = state.lastIntValue;
						if (trail >= 56320 && trail <= 57343) {
							state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
							return true;
						}
					}
					state.pos = leadSurrogateEnd;
					state.lastIntValue = lead;
				}
				return true;
			}
			if (switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) return true;
			if (switchU) state.raise("Invalid unicode escape");
			state.pos = start;
		}
		return false;
	};
	function isValidUnicode(ch) {
		return ch >= 0 && ch <= 1114111;
	}
	pp$1.regexp_eatIdentityEscape = function(state) {
		if (state.switchU) {
			if (this.regexp_eatSyntaxCharacter(state)) return true;
			if (state.eat(47)) {
				state.lastIntValue = 47;
				return true;
			}
			return false;
		}
		var ch = state.current();
		if (ch !== 99 && (!state.switchN || ch !== 107)) {
			state.lastIntValue = ch;
			state.advance();
			return true;
		}
		return false;
	};
	pp$1.regexp_eatDecimalEscape = function(state) {
		state.lastIntValue = 0;
		var ch = state.current();
		if (ch >= 49 && ch <= 57) {
			do {
				state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
				state.advance();
			} while ((ch = state.current()) >= 48 && ch <= 57);
			return true;
		}
		return false;
	};
	var CharSetNone = 0;
	var CharSetOk = 1;
	var CharSetString = 2;
	pp$1.regexp_eatCharacterClassEscape = function(state) {
		var ch = state.current();
		if (isCharacterClassEscape(ch)) {
			state.lastIntValue = -1;
			state.advance();
			return CharSetOk;
		}
		var negate = false;
		if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = ch === 80) || ch === 112)) {
			state.lastIntValue = -1;
			state.advance();
			var result;
			if (state.eat(123) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(125)) {
				if (negate && result === CharSetString) state.raise("Invalid property name");
				return result;
			}
			state.raise("Invalid property name");
		}
		return CharSetNone;
	};
	function isCharacterClassEscape(ch) {
		return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
	}
	pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
		var start = state.pos;
		if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
			var name = state.lastStringValue;
			if (this.regexp_eatUnicodePropertyValue(state)) {
				var value = state.lastStringValue;
				this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
				return CharSetOk;
			}
		}
		state.pos = start;
		if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
			var nameOrValue = state.lastStringValue;
			return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
		}
		return CharSetNone;
	};
	pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
		if (!hasOwn(state.unicodeProperties.nonBinary, name)) state.raise("Invalid property name");
		if (!state.unicodeProperties.nonBinary[name].test(value)) state.raise("Invalid property value");
	};
	pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
		if (state.unicodeProperties.binary.test(nameOrValue)) return CharSetOk;
		if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) return CharSetString;
		state.raise("Invalid property name");
	};
	pp$1.regexp_eatUnicodePropertyName = function(state) {
		var ch = 0;
		state.lastStringValue = "";
		while (isUnicodePropertyNameCharacter(ch = state.current())) {
			state.lastStringValue += codePointToString(ch);
			state.advance();
		}
		return state.lastStringValue !== "";
	};
	function isUnicodePropertyNameCharacter(ch) {
		return isControlLetter(ch) || ch === 95;
	}
	pp$1.regexp_eatUnicodePropertyValue = function(state) {
		var ch = 0;
		state.lastStringValue = "";
		while (isUnicodePropertyValueCharacter(ch = state.current())) {
			state.lastStringValue += codePointToString(ch);
			state.advance();
		}
		return state.lastStringValue !== "";
	};
	function isUnicodePropertyValueCharacter(ch) {
		return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
	}
	pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
		return this.regexp_eatUnicodePropertyValue(state);
	};
	pp$1.regexp_eatCharacterClass = function(state) {
		if (state.eat(91)) {
			var negate = state.eat(94);
			var result = this.regexp_classContents(state);
			if (!state.eat(93)) state.raise("Unterminated character class");
			if (negate && result === CharSetString) state.raise("Negated character class may contain strings");
			return true;
		}
		return false;
	};
	pp$1.regexp_classContents = function(state) {
		if (state.current() === 93) return CharSetOk;
		if (state.switchV) return this.regexp_classSetExpression(state);
		this.regexp_nonEmptyClassRanges(state);
		return CharSetOk;
	};
	pp$1.regexp_nonEmptyClassRanges = function(state) {
		while (this.regexp_eatClassAtom(state)) {
			var left = state.lastIntValue;
			if (state.eat(45) && this.regexp_eatClassAtom(state)) {
				var right = state.lastIntValue;
				if (state.switchU && (left === -1 || right === -1)) state.raise("Invalid character class");
				if (left !== -1 && right !== -1 && left > right) state.raise("Range out of order in character class");
			}
		}
	};
	pp$1.regexp_eatClassAtom = function(state) {
		var start = state.pos;
		if (state.eat(92)) {
			if (this.regexp_eatClassEscape(state)) return true;
			if (state.switchU) {
				var ch$1 = state.current();
				if (ch$1 === 99 || isOctalDigit(ch$1)) state.raise("Invalid class escape");
				state.raise("Invalid escape");
			}
			state.pos = start;
		}
		var ch = state.current();
		if (ch !== 93) {
			state.lastIntValue = ch;
			state.advance();
			return true;
		}
		return false;
	};
	pp$1.regexp_eatClassEscape = function(state) {
		var start = state.pos;
		if (state.eat(98)) {
			state.lastIntValue = 8;
			return true;
		}
		if (state.switchU && state.eat(45)) {
			state.lastIntValue = 45;
			return true;
		}
		if (!state.switchU && state.eat(99)) {
			if (this.regexp_eatClassControlLetter(state)) return true;
			state.pos = start;
		}
		return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
	};
	pp$1.regexp_classSetExpression = function(state) {
		var result = CharSetOk, subResult;
		if (this.regexp_eatClassSetRange(state));
		else if (subResult = this.regexp_eatClassSetOperand(state)) {
			if (subResult === CharSetString) result = CharSetString;
			var start = state.pos;
			while (state.eatChars([38, 38])) {
				if (state.current() !== 38 && (subResult = this.regexp_eatClassSetOperand(state))) {
					if (subResult !== CharSetString) result = CharSetOk;
					continue;
				}
				state.raise("Invalid character in character class");
			}
			if (start !== state.pos) return result;
			while (state.eatChars([45, 45])) {
				if (this.regexp_eatClassSetOperand(state)) continue;
				state.raise("Invalid character in character class");
			}
			if (start !== state.pos) return result;
		} else state.raise("Invalid character in character class");
		for (;;) {
			if (this.regexp_eatClassSetRange(state)) continue;
			subResult = this.regexp_eatClassSetOperand(state);
			if (!subResult) return result;
			if (subResult === CharSetString) result = CharSetString;
		}
	};
	pp$1.regexp_eatClassSetRange = function(state) {
		var start = state.pos;
		if (this.regexp_eatClassSetCharacter(state)) {
			var left = state.lastIntValue;
			if (state.eat(45) && this.regexp_eatClassSetCharacter(state)) {
				var right = state.lastIntValue;
				if (left !== -1 && right !== -1 && left > right) state.raise("Range out of order in character class");
				return true;
			}
			state.pos = start;
		}
		return false;
	};
	pp$1.regexp_eatClassSetOperand = function(state) {
		if (this.regexp_eatClassSetCharacter(state)) return CharSetOk;
		return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
	};
	pp$1.regexp_eatNestedClass = function(state) {
		var start = state.pos;
		if (state.eat(91)) {
			var negate = state.eat(94);
			var result = this.regexp_classContents(state);
			if (state.eat(93)) {
				if (negate && result === CharSetString) state.raise("Negated character class may contain strings");
				return result;
			}
			state.pos = start;
		}
		if (state.eat(92)) {
			var result$1 = this.regexp_eatCharacterClassEscape(state);
			if (result$1) return result$1;
			state.pos = start;
		}
		return null;
	};
	pp$1.regexp_eatClassStringDisjunction = function(state) {
		var start = state.pos;
		if (state.eatChars([92, 113])) {
			if (state.eat(123)) {
				var result = this.regexp_classStringDisjunctionContents(state);
				if (state.eat(125)) return result;
			} else state.raise("Invalid escape");
			state.pos = start;
		}
		return null;
	};
	pp$1.regexp_classStringDisjunctionContents = function(state) {
		var result = this.regexp_classString(state);
		while (state.eat(124)) if (this.regexp_classString(state) === CharSetString) result = CharSetString;
		return result;
	};
	pp$1.regexp_classString = function(state) {
		var count = 0;
		while (this.regexp_eatClassSetCharacter(state)) count++;
		return count === 1 ? CharSetOk : CharSetString;
	};
	pp$1.regexp_eatClassSetCharacter = function(state) {
		var start = state.pos;
		if (state.eat(92)) {
			if (this.regexp_eatCharacterEscape(state) || this.regexp_eatClassSetReservedPunctuator(state)) return true;
			if (state.eat(98)) {
				state.lastIntValue = 8;
				return true;
			}
			state.pos = start;
			return false;
		}
		var ch = state.current();
		if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) return false;
		if (isClassSetSyntaxCharacter(ch)) return false;
		state.advance();
		state.lastIntValue = ch;
		return true;
	};
	function isClassSetReservedDoublePunctuatorCharacter(ch) {
		return ch === 33 || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || ch === 46 || ch >= 58 && ch <= 64 || ch === 94 || ch === 96 || ch === 126;
	}
	function isClassSetSyntaxCharacter(ch) {
		return ch === 40 || ch === 41 || ch === 45 || ch === 47 || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
	}
	pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
		var ch = state.current();
		if (isClassSetReservedPunctuator(ch)) {
			state.lastIntValue = ch;
			state.advance();
			return true;
		}
		return false;
	};
	function isClassSetReservedPunctuator(ch) {
		return ch === 33 || ch === 35 || ch === 37 || ch === 38 || ch === 44 || ch === 45 || ch >= 58 && ch <= 62 || ch === 64 || ch === 96 || ch === 126;
	}
	pp$1.regexp_eatClassControlLetter = function(state) {
		var ch = state.current();
		if (isDecimalDigit(ch) || ch === 95) {
			state.lastIntValue = ch % 32;
			state.advance();
			return true;
		}
		return false;
	};
	pp$1.regexp_eatHexEscapeSequence = function(state) {
		var start = state.pos;
		if (state.eat(120)) {
			if (this.regexp_eatFixedHexDigits(state, 2)) return true;
			if (state.switchU) state.raise("Invalid escape");
			state.pos = start;
		}
		return false;
	};
	pp$1.regexp_eatDecimalDigits = function(state) {
		var start = state.pos;
		var ch = 0;
		state.lastIntValue = 0;
		while (isDecimalDigit(ch = state.current())) {
			state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
			state.advance();
		}
		return state.pos !== start;
	};
	function isDecimalDigit(ch) {
		return ch >= 48 && ch <= 57;
	}
	pp$1.regexp_eatHexDigits = function(state) {
		var start = state.pos;
		var ch = 0;
		state.lastIntValue = 0;
		while (isHexDigit(ch = state.current())) {
			state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
			state.advance();
		}
		return state.pos !== start;
	};
	function isHexDigit(ch) {
		return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
	}
	function hexToInt(ch) {
		if (ch >= 65 && ch <= 70) return 10 + (ch - 65);
		if (ch >= 97 && ch <= 102) return 10 + (ch - 97);
		return ch - 48;
	}
	pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
		if (this.regexp_eatOctalDigit(state)) {
			var n1 = state.lastIntValue;
			if (this.regexp_eatOctalDigit(state)) {
				var n2 = state.lastIntValue;
				if (n1 <= 3 && this.regexp_eatOctalDigit(state)) state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
				else state.lastIntValue = n1 * 8 + n2;
			} else state.lastIntValue = n1;
			return true;
		}
		return false;
	};
	pp$1.regexp_eatOctalDigit = function(state) {
		var ch = state.current();
		if (isOctalDigit(ch)) {
			state.lastIntValue = ch - 48;
			state.advance();
			return true;
		}
		state.lastIntValue = 0;
		return false;
	};
	function isOctalDigit(ch) {
		return ch >= 48 && ch <= 55;
	}
	pp$1.regexp_eatFixedHexDigits = function(state, length) {
		var start = state.pos;
		state.lastIntValue = 0;
		for (var i = 0; i < length; ++i) {
			var ch = state.current();
			if (!isHexDigit(ch)) {
				state.pos = start;
				return false;
			}
			state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
			state.advance();
		}
		return true;
	};
	var Token = function Token(p) {
		this.type = p.type;
		this.value = p.value;
		this.start = p.start;
		this.end = p.end;
		if (p.options.locations) this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
		if (p.options.ranges) this.range = [p.start, p.end];
	};
	var pp = Parser.prototype;
	pp.next = function(ignoreEscapeSequenceInKeyword) {
		if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
		if (this.options.onToken) this.options.onToken(new Token(this));
		this.lastTokEnd = this.end;
		this.lastTokStart = this.start;
		this.lastTokEndLoc = this.endLoc;
		this.lastTokStartLoc = this.startLoc;
		this.nextToken();
	};
	pp.getToken = function() {
		this.next();
		return new Token(this);
	};
	if (typeof Symbol !== "undefined") pp[Symbol.iterator] = function() {
		var this$1$1 = this;
		return { next: function() {
			var token = this$1$1.getToken();
			return {
				done: token.type === types$1.eof,
				value: token
			};
		} };
	};
	pp.nextToken = function() {
		var curContext = this.curContext();
		if (!curContext || !curContext.preserveSpace) this.skipSpace();
		this.start = this.pos;
		if (this.options.locations) this.startLoc = this.curPosition();
		if (this.pos >= this.input.length) return this.finishToken(types$1.eof);
		if (curContext.override) return curContext.override(this);
		else this.readToken(this.fullCharCodeAtPos());
	};
	pp.readToken = function(code) {
		if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) return this.readWord();
		return this.getTokenFromCode(code);
	};
	pp.fullCharCodeAt = function(pos) {
		var code = this.input.charCodeAt(pos);
		if (code <= 55295 || code >= 56320) return code;
		var next = this.input.charCodeAt(pos + 1);
		return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
	};
	pp.fullCharCodeAtPos = function() {
		return this.fullCharCodeAt(this.pos);
	};
	pp.skipBlockComment = function() {
		var startLoc = this.options.onComment && this.curPosition();
		var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
		if (end === -1) this.raise(this.pos - 2, "Unterminated comment");
		this.pos = end + 2;
		if (this.options.locations) for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1;) {
			++this.curLine;
			pos = this.lineStart = nextBreak;
		}
		if (this.options.onComment) this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
	};
	pp.skipLineComment = function(startSkip) {
		var start = this.pos;
		var startLoc = this.options.onComment && this.curPosition();
		var ch = this.input.charCodeAt(this.pos += startSkip);
		while (this.pos < this.input.length && !isNewLine(ch)) ch = this.input.charCodeAt(++this.pos);
		if (this.options.onComment) this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
	};
	pp.skipSpace = function() {
		loop: while (this.pos < this.input.length) {
			var ch = this.input.charCodeAt(this.pos);
			switch (ch) {
				case 32:
				case 160:
					++this.pos;
					break;
				case 13: if (this.input.charCodeAt(this.pos + 1) === 10) ++this.pos;
				case 10:
				case 8232:
				case 8233:
					++this.pos;
					if (this.options.locations) {
						++this.curLine;
						this.lineStart = this.pos;
					}
					break;
				case 47:
					switch (this.input.charCodeAt(this.pos + 1)) {
						case 42:
							this.skipBlockComment();
							break;
						case 47:
							this.skipLineComment(2);
							break;
						default: break loop;
					}
					break;
				default: if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) ++this.pos;
				else break loop;
			}
		}
	};
	pp.finishToken = function(type, val) {
		this.end = this.pos;
		if (this.options.locations) this.endLoc = this.curPosition();
		var prevType = this.type;
		this.type = type;
		this.value = val;
		this.updateContext(prevType);
	};
	pp.readToken_dot = function() {
		var next = this.input.charCodeAt(this.pos + 1);
		if (next >= 48 && next <= 57) return this.readNumber(true);
		var next2 = this.input.charCodeAt(this.pos + 2);
		if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
			this.pos += 3;
			return this.finishToken(types$1.ellipsis);
		} else {
			++this.pos;
			return this.finishToken(types$1.dot);
		}
	};
	pp.readToken_slash = function() {
		var next = this.input.charCodeAt(this.pos + 1);
		if (this.exprAllowed) {
			++this.pos;
			return this.readRegexp();
		}
		if (next === 61) return this.finishOp(types$1.assign, 2);
		return this.finishOp(types$1.slash, 1);
	};
	pp.readToken_mult_modulo_exp = function(code) {
		var next = this.input.charCodeAt(this.pos + 1);
		var size = 1;
		var tokentype = code === 42 ? types$1.star : types$1.modulo;
		if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
			++size;
			tokentype = types$1.starstar;
			next = this.input.charCodeAt(this.pos + 2);
		}
		if (next === 61) return this.finishOp(types$1.assign, size + 1);
		return this.finishOp(tokentype, size);
	};
	pp.readToken_pipe_amp = function(code) {
		var next = this.input.charCodeAt(this.pos + 1);
		if (next === code) {
			if (this.options.ecmaVersion >= 12) {
				if (this.input.charCodeAt(this.pos + 2) === 61) return this.finishOp(types$1.assign, 3);
			}
			return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
		}
		if (next === 61) return this.finishOp(types$1.assign, 2);
		return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
	};
	pp.readToken_caret = function() {
		if (this.input.charCodeAt(this.pos + 1) === 61) return this.finishOp(types$1.assign, 2);
		return this.finishOp(types$1.bitwiseXOR, 1);
	};
	pp.readToken_plus_min = function(code) {
		var next = this.input.charCodeAt(this.pos + 1);
		if (next === code) {
			if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
				this.skipLineComment(3);
				this.skipSpace();
				return this.nextToken();
			}
			return this.finishOp(types$1.incDec, 2);
		}
		if (next === 61) return this.finishOp(types$1.assign, 2);
		return this.finishOp(types$1.plusMin, 1);
	};
	pp.readToken_lt_gt = function(code) {
		var next = this.input.charCodeAt(this.pos + 1);
		var size = 1;
		if (next === code) {
			size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
			if (this.input.charCodeAt(this.pos + size) === 61) return this.finishOp(types$1.assign, size + 1);
			return this.finishOp(types$1.bitShift, size);
		}
		if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
			this.skipLineComment(4);
			this.skipSpace();
			return this.nextToken();
		}
		if (next === 61) size = 2;
		return this.finishOp(types$1.relational, size);
	};
	pp.readToken_eq_excl = function(code) {
		var next = this.input.charCodeAt(this.pos + 1);
		if (next === 61) return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
		if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
			this.pos += 2;
			return this.finishToken(types$1.arrow);
		}
		return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
	};
	pp.readToken_question = function() {
		var ecmaVersion = this.options.ecmaVersion;
		if (ecmaVersion >= 11) {
			var next = this.input.charCodeAt(this.pos + 1);
			if (next === 46) {
				var next2 = this.input.charCodeAt(this.pos + 2);
				if (next2 < 48 || next2 > 57) return this.finishOp(types$1.questionDot, 2);
			}
			if (next === 63) {
				if (ecmaVersion >= 12) {
					if (this.input.charCodeAt(this.pos + 2) === 61) return this.finishOp(types$1.assign, 3);
				}
				return this.finishOp(types$1.coalesce, 2);
			}
		}
		return this.finishOp(types$1.question, 1);
	};
	pp.readToken_numberSign = function() {
		var ecmaVersion = this.options.ecmaVersion;
		var code = 35;
		if (ecmaVersion >= 13) {
			++this.pos;
			code = this.fullCharCodeAtPos();
			if (isIdentifierStart(code, true) || code === 92) return this.finishToken(types$1.privateId, this.readWord1());
		}
		this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
	};
	pp.getTokenFromCode = function(code) {
		switch (code) {
			case 46: return this.readToken_dot();
			case 40:
				++this.pos;
				return this.finishToken(types$1.parenL);
			case 41:
				++this.pos;
				return this.finishToken(types$1.parenR);
			case 59:
				++this.pos;
				return this.finishToken(types$1.semi);
			case 44:
				++this.pos;
				return this.finishToken(types$1.comma);
			case 91:
				++this.pos;
				return this.finishToken(types$1.bracketL);
			case 93:
				++this.pos;
				return this.finishToken(types$1.bracketR);
			case 123:
				++this.pos;
				return this.finishToken(types$1.braceL);
			case 125:
				++this.pos;
				return this.finishToken(types$1.braceR);
			case 58:
				++this.pos;
				return this.finishToken(types$1.colon);
			case 96:
				if (this.options.ecmaVersion < 6) break;
				++this.pos;
				return this.finishToken(types$1.backQuote);
			case 48:
				var next = this.input.charCodeAt(this.pos + 1);
				if (next === 120 || next === 88) return this.readRadixNumber(16);
				if (this.options.ecmaVersion >= 6) {
					if (next === 111 || next === 79) return this.readRadixNumber(8);
					if (next === 98 || next === 66) return this.readRadixNumber(2);
				}
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return this.readNumber(false);
			case 34:
			case 39: return this.readString(code);
			case 47: return this.readToken_slash();
			case 37:
			case 42: return this.readToken_mult_modulo_exp(code);
			case 124:
			case 38: return this.readToken_pipe_amp(code);
			case 94: return this.readToken_caret();
			case 43:
			case 45: return this.readToken_plus_min(code);
			case 60:
			case 62: return this.readToken_lt_gt(code);
			case 61:
			case 33: return this.readToken_eq_excl(code);
			case 63: return this.readToken_question();
			case 126: return this.finishOp(types$1.prefix, 1);
			case 35: return this.readToken_numberSign();
		}
		this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
	};
	pp.finishOp = function(type, size) {
		var str = this.input.slice(this.pos, this.pos + size);
		this.pos += size;
		return this.finishToken(type, str);
	};
	pp.readRegexp = function() {
		var escaped, inClass, start = this.pos;
		for (;;) {
			if (this.pos >= this.input.length) this.raise(start, "Unterminated regular expression");
			var ch = this.input.charAt(this.pos);
			if (lineBreak.test(ch)) this.raise(start, "Unterminated regular expression");
			if (!escaped) {
				if (ch === "[") inClass = true;
				else if (ch === "]" && inClass) inClass = false;
				else if (ch === "/" && !inClass) break;
				escaped = ch === "\\";
			} else escaped = false;
			++this.pos;
		}
		var pattern = this.input.slice(start, this.pos);
		++this.pos;
		var flagsStart = this.pos;
		var flags = this.readWord1();
		if (this.containsEsc) this.unexpected(flagsStart);
		var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
		state.reset(start, pattern, flags);
		this.validateRegExpFlags(state);
		this.validateRegExpPattern(state);
		var value = null;
		try {
			value = new RegExp(pattern, flags);
		} catch (e) {}
		return this.finishToken(types$1.regexp, {
			pattern,
			flags,
			value
		});
	};
	pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
		var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
		var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
		var start = this.pos, total = 0, lastCode = 0;
		for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
			var code = this.input.charCodeAt(this.pos), val = void 0;
			if (allowSeparators && code === 95) {
				if (isLegacyOctalNumericLiteral) this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
				if (lastCode === 95) this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
				if (i === 0) this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
				lastCode = code;
				continue;
			}
			if (code >= 97) val = code - 97 + 10;
			else if (code >= 65) val = code - 65 + 10;
			else if (code >= 48 && code <= 57) val = code - 48;
			else val = Infinity;
			if (val >= radix) break;
			lastCode = code;
			total = total * radix + val;
		}
		if (allowSeparators && lastCode === 95) this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
		if (this.pos === start || len != null && this.pos - start !== len) return null;
		return total;
	};
	function stringToNumber(str, isLegacyOctalNumericLiteral) {
		if (isLegacyOctalNumericLiteral) return parseInt(str, 8);
		return parseFloat(str.replace(/_/g, ""));
	}
	function stringToBigInt(str) {
		if (typeof BigInt !== "function") return null;
		return BigInt(str.replace(/_/g, ""));
	}
	pp.readRadixNumber = function(radix) {
		var start = this.pos;
		this.pos += 2;
		var val = this.readInt(radix);
		if (val == null) this.raise(this.start + 2, "Expected number in radix " + radix);
		if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
			val = stringToBigInt(this.input.slice(start, this.pos));
			++this.pos;
		} else if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
		return this.finishToken(types$1.num, val);
	};
	pp.readNumber = function(startsWithDot) {
		var start = this.pos;
		if (!startsWithDot && this.readInt(10, void 0, true) === null) this.raise(start, "Invalid number");
		var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
		if (octal && this.strict) this.raise(start, "Invalid number");
		var next = this.input.charCodeAt(this.pos);
		if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
			var val$1 = stringToBigInt(this.input.slice(start, this.pos));
			++this.pos;
			if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
			return this.finishToken(types$1.num, val$1);
		}
		if (octal && /[89]/.test(this.input.slice(start, this.pos))) octal = false;
		if (next === 46 && !octal) {
			++this.pos;
			this.readInt(10);
			next = this.input.charCodeAt(this.pos);
		}
		if ((next === 69 || next === 101) && !octal) {
			next = this.input.charCodeAt(++this.pos);
			if (next === 43 || next === 45) ++this.pos;
			if (this.readInt(10) === null) this.raise(start, "Invalid number");
		}
		if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
		var val = stringToNumber(this.input.slice(start, this.pos), octal);
		return this.finishToken(types$1.num, val);
	};
	pp.readCodePoint = function() {
		var ch = this.input.charCodeAt(this.pos), code;
		if (ch === 123) {
			if (this.options.ecmaVersion < 6) this.unexpected();
			var codePos = ++this.pos;
			code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
			++this.pos;
			if (code > 1114111) this.invalidStringToken(codePos, "Code point out of bounds");
		} else code = this.readHexChar(4);
		return code;
	};
	pp.readString = function(quote) {
		var out = "", chunkStart = ++this.pos;
		for (;;) {
			if (this.pos >= this.input.length) this.raise(this.start, "Unterminated string constant");
			var ch = this.input.charCodeAt(this.pos);
			if (ch === quote) break;
			if (ch === 92) {
				out += this.input.slice(chunkStart, this.pos);
				out += this.readEscapedChar(false);
				chunkStart = this.pos;
			} else if (ch === 8232 || ch === 8233) {
				if (this.options.ecmaVersion < 10) this.raise(this.start, "Unterminated string constant");
				++this.pos;
				if (this.options.locations) {
					this.curLine++;
					this.lineStart = this.pos;
				}
			} else {
				if (isNewLine(ch)) this.raise(this.start, "Unterminated string constant");
				++this.pos;
			}
		}
		out += this.input.slice(chunkStart, this.pos++);
		return this.finishToken(types$1.string, out);
	};
	var INVALID_TEMPLATE_ESCAPE_ERROR = {};
	pp.tryReadTemplateToken = function() {
		this.inTemplateElement = true;
		try {
			this.readTmplToken();
		} catch (err) {
			if (err === INVALID_TEMPLATE_ESCAPE_ERROR) this.readInvalidTemplateToken();
			else throw err;
		}
		this.inTemplateElement = false;
	};
	pp.invalidStringToken = function(position, message) {
		if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw INVALID_TEMPLATE_ESCAPE_ERROR;
		else this.raise(position, message);
	};
	pp.readTmplToken = function() {
		var out = "", chunkStart = this.pos;
		for (;;) {
			if (this.pos >= this.input.length) this.raise(this.start, "Unterminated template");
			var ch = this.input.charCodeAt(this.pos);
			if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
				if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
					if (ch === 36) {
						this.pos += 2;
						return this.finishToken(types$1.dollarBraceL);
					} else {
						++this.pos;
						return this.finishToken(types$1.backQuote);
					}
				}
				out += this.input.slice(chunkStart, this.pos);
				return this.finishToken(types$1.template, out);
			}
			if (ch === 92) {
				out += this.input.slice(chunkStart, this.pos);
				out += this.readEscapedChar(true);
				chunkStart = this.pos;
			} else if (isNewLine(ch)) {
				out += this.input.slice(chunkStart, this.pos);
				++this.pos;
				switch (ch) {
					case 13: if (this.input.charCodeAt(this.pos) === 10) ++this.pos;
					case 10:
						out += "\n";
						break;
					default: out += String.fromCharCode(ch);
				}
				if (this.options.locations) {
					++this.curLine;
					this.lineStart = this.pos;
				}
				chunkStart = this.pos;
			} else ++this.pos;
		}
	};
	pp.readInvalidTemplateToken = function() {
		for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
			case "\\":
				++this.pos;
				break;
			case "$": if (this.input[this.pos + 1] !== "{") break;
			case "`": return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
			case "\r": if (this.input[this.pos + 1] === "\n") ++this.pos;
			case "\n":
			case "\u2028":
			case "\u2029":
				++this.curLine;
				this.lineStart = this.pos + 1;
		}
		this.raise(this.start, "Unterminated template");
	};
	pp.readEscapedChar = function(inTemplate) {
		var ch = this.input.charCodeAt(++this.pos);
		++this.pos;
		switch (ch) {
			case 110: return "\n";
			case 114: return "\r";
			case 120: return String.fromCharCode(this.readHexChar(2));
			case 117: return codePointToString(this.readCodePoint());
			case 116: return "	";
			case 98: return "\b";
			case 118: return "\v";
			case 102: return "\f";
			case 13: if (this.input.charCodeAt(this.pos) === 10) ++this.pos;
			case 10:
				if (this.options.locations) {
					this.lineStart = this.pos;
					++this.curLine;
				}
				return "";
			case 56:
			case 57:
				if (this.strict) this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
				if (inTemplate) {
					var codePos = this.pos - 1;
					this.invalidStringToken(codePos, "Invalid escape sequence in template string");
				}
			default:
				if (ch >= 48 && ch <= 55) {
					var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
					var octal = parseInt(octalStr, 8);
					if (octal > 255) {
						octalStr = octalStr.slice(0, -1);
						octal = parseInt(octalStr, 8);
					}
					this.pos += octalStr.length - 1;
					ch = this.input.charCodeAt(this.pos);
					if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode");
					return String.fromCharCode(octal);
				}
				if (isNewLine(ch)) {
					if (this.options.locations) {
						this.lineStart = this.pos;
						++this.curLine;
					}
					return "";
				}
				return String.fromCharCode(ch);
		}
	};
	pp.readHexChar = function(len) {
		var codePos = this.pos;
		var n = this.readInt(16, len);
		if (n === null) this.invalidStringToken(codePos, "Bad character escape sequence");
		return n;
	};
	pp.readWord1 = function() {
		this.containsEsc = false;
		var word = "", first = true, chunkStart = this.pos;
		var astral = this.options.ecmaVersion >= 6;
		while (this.pos < this.input.length) {
			var ch = this.fullCharCodeAtPos();
			if (isIdentifierChar(ch, astral)) this.pos += ch <= 65535 ? 1 : 2;
			else if (ch === 92) {
				this.containsEsc = true;
				word += this.input.slice(chunkStart, this.pos);
				var escStart = this.pos;
				if (this.input.charCodeAt(++this.pos) !== 117) this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
				++this.pos;
				var esc = this.readCodePoint();
				if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) this.invalidStringToken(escStart, "Invalid Unicode escape");
				word += codePointToString(esc);
				chunkStart = this.pos;
			} else break;
			first = false;
		}
		return word + this.input.slice(chunkStart, this.pos);
	};
	pp.readWord = function() {
		var word = this.readWord1();
		var type = types$1.name;
		if (this.keywords.test(word)) type = keywords[word];
		return this.finishToken(type, word);
	};
	var version = "8.18.0";
	Parser.acorn = {
		Parser,
		version,
		defaultOptions,
		Position,
		SourceLocation,
		getLineInfo,
		Node,
		TokenType,
		tokTypes: types$1,
		keywordTypes: keywords,
		TokContext,
		tokContexts: types,
		isIdentifierChar,
		isIdentifierStart,
		Token,
		isNewLine,
		lineBreak,
		lineBreakG,
		nonASCIIwhitespace
	};
	function parse(input, options) {
		return Parser.parse(input, options);
	}
	function parseExpressionAt(input, pos, options) {
		return Parser.parseExpressionAt(input, pos, options);
	}
	function tokenizer(input, options) {
		return Parser.tokenizer(input, options);
	}
	//#endregion
	//#region node_modules/acorn-walk/dist/walk.mjs
	var walk_exports = /* @__PURE__ */ __exportAll({
		ancestor: () => ancestor,
		base: () => base,
		findNodeAfter: () => findNodeAfter,
		findNodeAround: () => findNodeAround,
		findNodeAt: () => findNodeAt,
		findNodeBefore: () => findNodeBefore,
		full: () => full,
		fullAncestor: () => fullAncestor,
		make: () => make,
		recursive: () => recursive,
		simple: () => simple
	});
	function simple(node, visitors, baseVisitor, state, override) {
		if (!baseVisitor) baseVisitor = base;
		(function c(node, st, override) {
			var type = override || node.type;
			visitNode(baseVisitor, type, node, st, c);
			if (visitors[type]) visitors[type](node, st);
		})(node, state, override);
	}
	function ancestor(node, visitors, baseVisitor, state, override) {
		var ancestors = [];
		if (!baseVisitor) baseVisitor = base;
		(function c(node, st, override) {
			var type = override || node.type;
			var isNew = node !== ancestors[ancestors.length - 1];
			if (isNew) ancestors.push(node);
			visitNode(baseVisitor, type, node, st, c);
			if (visitors[type]) visitors[type](node, st || ancestors, ancestors);
			if (isNew) ancestors.pop();
		})(node, state, override);
	}
	function recursive(node, state, funcs, baseVisitor, override) {
		var visitor = funcs ? make(funcs, baseVisitor || void 0) : baseVisitor;
		(function c(node, st, override) {
			visitor[override || node.type](node, st, c);
		})(node, state, override);
	}
	function makeTest(test) {
		if (typeof test === "string") return function(type) {
			return type === test;
		};
		else if (!test) return function() {
			return true;
		};
		else return test;
	}
	var Found$1 = function Found(node, state) {
		this.node = node;
		this.state = state;
	};
	function full(node, callback, baseVisitor, state, override) {
		if (!baseVisitor) baseVisitor = base;
		var last;
		(function c(node, st, override) {
			var type = override || node.type;
			visitNode(baseVisitor, type, node, st, c);
			if (last !== node) {
				callback(node, st, type);
				last = node;
			}
		})(node, state, override);
	}
	function fullAncestor(node, callback, baseVisitor, state) {
		if (!baseVisitor) baseVisitor = base;
		var ancestors = [], last;
		(function c(node, st, override) {
			var type = override || node.type;
			var isNew = node !== ancestors[ancestors.length - 1];
			if (isNew) ancestors.push(node);
			visitNode(baseVisitor, type, node, st, c);
			if (last !== node) {
				callback(node, st || ancestors, ancestors, type);
				last = node;
			}
			if (isNew) ancestors.pop();
		})(node, state);
	}
	function findNodeAt(node, start, end, test, baseVisitor, state) {
		if (!baseVisitor) baseVisitor = base;
		test = makeTest(test);
		try {
			(function c(node, st, override) {
				var type = override || node.type;
				if ((start == null || node.start <= start) && (end == null || node.end >= end)) visitNode(baseVisitor, type, node, st, c);
				if ((start == null || node.start === start) && (end == null || node.end === end) && test(type, node)) throw new Found$1(node, st);
			})(node, state);
		} catch (e) {
			if (e instanceof Found$1) return e;
			throw e;
		}
	}
	function findNodeAround(node, pos, test, baseVisitor, state) {
		test = makeTest(test);
		if (!baseVisitor) baseVisitor = base;
		try {
			(function c(node, st, override) {
				var type = override || node.type;
				if (node.start > pos || node.end < pos) return;
				visitNode(baseVisitor, type, node, st, c);
				if (test(type, node)) throw new Found$1(node, st);
			})(node, state);
		} catch (e) {
			if (e instanceof Found$1) return e;
			throw e;
		}
	}
	function findNodeAfter(node, pos, test, baseVisitor, state) {
		test = makeTest(test);
		if (!baseVisitor) baseVisitor = base;
		try {
			(function c(node, st, override) {
				if (node.end < pos) return;
				var type = override || node.type;
				if (node.start >= pos && test(type, node)) throw new Found$1(node, st);
				visitNode(baseVisitor, type, node, st, c);
			})(node, state);
		} catch (e) {
			if (e instanceof Found$1) return e;
			throw e;
		}
	}
	function findNodeBefore(node, pos, test, baseVisitor, state) {
		test = makeTest(test);
		if (!baseVisitor) baseVisitor = base;
		var max;
		(function c(node, st, override) {
			if (node.start > pos) return;
			var type = override || node.type;
			if (node.end <= pos && (!max || max.node.end < node.end) && test(type, node)) max = new Found$1(node, st);
			visitNode(baseVisitor, type, node, st, c);
		})(node, state);
		return max;
	}
	function make(funcs, baseVisitor) {
		var visitor = Object.create(baseVisitor || base);
		for (var type in funcs) visitor[type] = funcs[type];
		return visitor;
	}
	function skipThrough(node, st, c) {
		c(node, st);
	}
	function ignore$1(_node, _st, _c) {}
	function visitNode(baseVisitor, type, node, st, c) {
		if (baseVisitor[type] == null) throw new Error("No walker function defined for node type " + type);
		baseVisitor[type](node, st, c);
	}
	var base = {};
	base.Program = base.BlockStatement = base.StaticBlock = function(node, st, c) {
		for (var i = 0, list = node.body; i < list.length; i += 1) {
			var stmt = list[i];
			c(stmt, st, "Statement");
		}
	};
	base.Statement = skipThrough;
	base.EmptyStatement = ignore$1;
	base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression = function(node, st, c) {
		return c(node.expression, st, "Expression");
	};
	base.IfStatement = function(node, st, c) {
		c(node.test, st, "Expression");
		c(node.consequent, st, "Statement");
		if (node.alternate) c(node.alternate, st, "Statement");
	};
	base.LabeledStatement = function(node, st, c) {
		return c(node.body, st, "Statement");
	};
	base.BreakStatement = base.ContinueStatement = ignore$1;
	base.WithStatement = function(node, st, c) {
		c(node.object, st, "Expression");
		c(node.body, st, "Statement");
	};
	base.SwitchStatement = function(node, st, c) {
		c(node.discriminant, st, "Expression");
		for (var i = 0, list = node.cases; i < list.length; i += 1) {
			var cs = list[i];
			c(cs, st);
		}
	};
	base.SwitchCase = function(node, st, c) {
		if (node.test) c(node.test, st, "Expression");
		for (var i = 0, list = node.consequent; i < list.length; i += 1) {
			var cons = list[i];
			c(cons, st, "Statement");
		}
	};
	base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function(node, st, c) {
		if (node.argument) c(node.argument, st, "Expression");
	};
	base.ThrowStatement = base.SpreadElement = function(node, st, c) {
		return c(node.argument, st, "Expression");
	};
	base.TryStatement = function(node, st, c) {
		c(node.block, st, "Statement");
		if (node.handler) c(node.handler, st);
		if (node.finalizer) c(node.finalizer, st, "Statement");
	};
	base.CatchClause = function(node, st, c) {
		if (node.param) c(node.param, st, "Pattern");
		c(node.body, st, "Statement");
	};
	base.WhileStatement = base.DoWhileStatement = function(node, st, c) {
		c(node.test, st, "Expression");
		c(node.body, st, "Statement");
	};
	base.ForStatement = function(node, st, c) {
		if (node.init) c(node.init, st, "ForInit");
		if (node.test) c(node.test, st, "Expression");
		if (node.update) c(node.update, st, "Expression");
		c(node.body, st, "Statement");
	};
	base.ForInStatement = base.ForOfStatement = function(node, st, c) {
		c(node.left, st, "ForInit");
		c(node.right, st, "Expression");
		c(node.body, st, "Statement");
	};
	base.ForInit = function(node, st, c) {
		if (node.type === "VariableDeclaration") c(node, st);
		else c(node, st, "Expression");
	};
	base.DebuggerStatement = ignore$1;
	base.FunctionDeclaration = function(node, st, c) {
		return c(node, st, "Function");
	};
	base.VariableDeclaration = function(node, st, c) {
		for (var i = 0, list = node.declarations; i < list.length; i += 1) {
			var decl = list[i];
			c(decl, st);
		}
	};
	base.VariableDeclarator = function(node, st, c) {
		c(node.id, st, "Pattern");
		if (node.init) c(node.init, st, "Expression");
	};
	base.Function = function(node, st, c) {
		if (node.id) c(node.id, st, "Pattern");
		for (var i = 0, list = node.params; i < list.length; i += 1) {
			var param = list[i];
			c(param, st, "Pattern");
		}
		c(node.body, st, node.expression ? "Expression" : "Statement");
	};
	base.Pattern = function(node, st, c) {
		if (node.type === "Identifier") c(node, st, "VariablePattern");
		else if (node.type === "MemberExpression") c(node, st, "MemberPattern");
		else c(node, st);
	};
	base.VariablePattern = ignore$1;
	base.MemberPattern = skipThrough;
	base.RestElement = function(node, st, c) {
		return c(node.argument, st, "Pattern");
	};
	base.ArrayPattern = function(node, st, c) {
		for (var i = 0, list = node.elements; i < list.length; i += 1) {
			var elt = list[i];
			if (elt) c(elt, st, "Pattern");
		}
	};
	base.ObjectPattern = function(node, st, c) {
		for (var i = 0, list = node.properties; i < list.length; i += 1) {
			var prop = list[i];
			if (prop.type === "Property") {
				if (prop.computed) c(prop.key, st, "Expression");
				c(prop.value, st, "Pattern");
			} else if (prop.type === "RestElement") c(prop.argument, st, "Pattern");
		}
	};
	base.Expression = skipThrough;
	base.ThisExpression = base.Super = base.MetaProperty = ignore$1;
	base.ArrayExpression = function(node, st, c) {
		for (var i = 0, list = node.elements; i < list.length; i += 1) {
			var elt = list[i];
			if (elt) c(elt, st, "Expression");
		}
	};
	base.ObjectExpression = function(node, st, c) {
		for (var i = 0, list = node.properties; i < list.length; i += 1) {
			var prop = list[i];
			c(prop, st);
		}
	};
	base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
	base.SequenceExpression = function(node, st, c) {
		for (var i = 0, list = node.expressions; i < list.length; i += 1) {
			var expr = list[i];
			c(expr, st, "Expression");
		}
	};
	base.TemplateLiteral = function(node, st, c) {
		for (var i = 0, list = node.quasis; i < list.length; i += 1) {
			var quasi = list[i];
			c(quasi, st);
		}
		for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1) {
			var expr = list$1[i$1];
			c(expr, st, "Expression");
		}
	};
	base.TemplateElement = ignore$1;
	base.UnaryExpression = base.UpdateExpression = function(node, st, c) {
		c(node.argument, st, "Expression");
	};
	base.BinaryExpression = base.LogicalExpression = function(node, st, c) {
		c(node.left, st, "Expression");
		c(node.right, st, "Expression");
	};
	base.AssignmentExpression = base.AssignmentPattern = function(node, st, c) {
		c(node.left, st, "Pattern");
		c(node.right, st, "Expression");
	};
	base.ConditionalExpression = function(node, st, c) {
		c(node.test, st, "Expression");
		c(node.consequent, st, "Expression");
		c(node.alternate, st, "Expression");
	};
	base.NewExpression = base.CallExpression = function(node, st, c) {
		c(node.callee, st, "Expression");
		if (node.arguments) for (var i = 0, list = node.arguments; i < list.length; i += 1) {
			var arg = list[i];
			c(arg, st, "Expression");
		}
	};
	base.MemberExpression = function(node, st, c) {
		c(node.object, st, "Expression");
		if (node.computed) c(node.property, st, "Expression");
	};
	base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function(node, st, c) {
		if (node.declaration) c(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression");
		if (node.source) c(node.source, st, "Expression");
		if (node.attributes) for (var i = 0, list = node.attributes; i < list.length; i += 1) {
			var attr = list[i];
			c(attr, st);
		}
	};
	base.ExportAllDeclaration = function(node, st, c) {
		if (node.exported) c(node.exported, st);
		c(node.source, st, "Expression");
		if (node.attributes) for (var i = 0, list = node.attributes; i < list.length; i += 1) {
			var attr = list[i];
			c(attr, st);
		}
	};
	base.ImportAttribute = function(node, st, c) {
		c(node.value, st, "Expression");
	};
	base.ImportDeclaration = function(node, st, c) {
		for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
			var spec = list[i];
			c(spec, st);
		}
		c(node.source, st, "Expression");
		if (node.attributes) for (var i$1 = 0, list$1 = node.attributes; i$1 < list$1.length; i$1 += 1) {
			var attr = list$1[i$1];
			c(attr, st);
		}
	};
	base.ImportExpression = function(node, st, c) {
		c(node.source, st, "Expression");
		if (node.options) c(node.options, st, "Expression");
	};
	base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.PrivateIdentifier = base.Literal = ignore$1;
	base.TaggedTemplateExpression = function(node, st, c) {
		c(node.tag, st, "Expression");
		c(node.quasi, st, "Expression");
	};
	base.ClassDeclaration = base.ClassExpression = function(node, st, c) {
		return c(node, st, "Class");
	};
	base.Class = function(node, st, c) {
		if (node.id) c(node.id, st, "Pattern");
		if (node.superClass) c(node.superClass, st, "Expression");
		c(node.body, st);
	};
	base.ClassBody = function(node, st, c) {
		for (var i = 0, list = node.body; i < list.length; i += 1) {
			var elt = list[i];
			c(elt, st);
		}
	};
	base.MethodDefinition = base.PropertyDefinition = base.Property = function(node, st, c) {
		if (node.computed) c(node.key, st, "Expression");
		if (node.value) c(node.value, st, "Expression");
	};
	//#endregion
	//#region node_modules/astring/dist/astring.mjs
	var astring_exports = /* @__PURE__ */ __exportAll({
		EXPRESSIONS_PRECEDENCE: () => EXPRESSIONS_PRECEDENCE,
		GENERATOR: () => GENERATOR,
		NEEDS_PARENTHESES: () => 17,
		baseGenerator: () => baseGenerator,
		generate: () => generate
	});
	var { stringify } = JSON;
	/* c8 ignore if */
	if (!String.prototype.repeat)
 /* c8 ignore next */
	throw new Error("String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation");
	/* c8 ignore if */
	if (!String.prototype.endsWith)
 /* c8 ignore next */
	throw new Error("String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation");
	var OPERATOR_PRECEDENCE = {
		"||": 2,
		"??": 3,
		"&&": 4,
		"|": 5,
		"^": 6,
		"&": 7,
		"==": 8,
		"!=": 8,
		"===": 8,
		"!==": 8,
		"<": 9,
		">": 9,
		"<=": 9,
		">=": 9,
		in: 9,
		instanceof: 9,
		"<<": 10,
		">>": 10,
		">>>": 10,
		"+": 11,
		"-": 11,
		"*": 12,
		"%": 12,
		"/": 12,
		"**": 13
	};
	var NEEDS_PARENTHESES = 17;
	var EXPRESSIONS_PRECEDENCE = {
		ArrayExpression: 20,
		TaggedTemplateExpression: 20,
		ThisExpression: 20,
		Identifier: 20,
		PrivateIdentifier: 20,
		Literal: 18,
		TemplateLiteral: 20,
		Super: 20,
		SequenceExpression: 20,
		MemberExpression: 19,
		ChainExpression: 19,
		CallExpression: 19,
		NewExpression: 19,
		ArrowFunctionExpression: 17,
		ClassExpression: 17,
		FunctionExpression: 17,
		ObjectExpression: 17,
		UpdateExpression: 16,
		UnaryExpression: 15,
		AwaitExpression: 15,
		BinaryExpression: 14,
		LogicalExpression: 13,
		ConditionalExpression: 4,
		AssignmentExpression: 3,
		YieldExpression: 2,
		RestElement: 1
	};
	function formatSequence(state, nodes) {
		const { generator } = state;
		state.write("(");
		if (nodes != null && nodes.length > 0) {
			generator[nodes[0].type](nodes[0], state);
			const { length } = nodes;
			for (let i = 1; i < length; i++) {
				const param = nodes[i];
				state.write(", ");
				generator[param.type](param, state);
			}
		}
		state.write(")");
	}
	function expressionNeedsParenthesis(state, node, parentNode, isRightHand) {
		const nodePrecedence = state.expressionsPrecedence[node.type];
		if (nodePrecedence === 17) return true;
		const parentNodePrecedence = state.expressionsPrecedence[parentNode.type];
		if (nodePrecedence !== parentNodePrecedence) return !isRightHand && nodePrecedence === 15 && parentNodePrecedence === 14 && parentNode.operator === "**" || nodePrecedence < parentNodePrecedence;
		if (nodePrecedence !== 13 && nodePrecedence !== 14) return false;
		if (node.operator === "**" && parentNode.operator === "**") return !isRightHand;
		if (nodePrecedence === 13 && parentNodePrecedence === 13 && (node.operator === "??" || parentNode.operator === "??")) return true;
		if (isRightHand) return OPERATOR_PRECEDENCE[node.operator] <= OPERATOR_PRECEDENCE[parentNode.operator];
		return OPERATOR_PRECEDENCE[node.operator] < OPERATOR_PRECEDENCE[parentNode.operator];
	}
	function formatExpression(state, node, parentNode, isRightHand) {
		const { generator } = state;
		if (expressionNeedsParenthesis(state, node, parentNode, isRightHand)) {
			state.write("(");
			generator[node.type](node, state);
			state.write(")");
		} else generator[node.type](node, state);
	}
	function reindent(state, text, indent, lineEnd) {
		const lines = text.split("\n");
		const end = lines.length - 1;
		state.write(lines[0].trim());
		if (end > 0) {
			state.write(lineEnd);
			for (let i = 1; i < end; i++) state.write(indent + lines[i].trim() + lineEnd);
			state.write(indent + lines[end].trim());
		}
	}
	function formatComments(state, comments, indent, lineEnd) {
		const { length } = comments;
		for (let i = 0; i < length; i++) {
			const comment = comments[i];
			state.write(indent);
			if (comment.type[0] === "L") state.write("// " + comment.value.trim() + "\n", comment);
			else {
				state.write("/*");
				reindent(state, comment.value, indent, lineEnd);
				state.write("*/" + lineEnd);
			}
		}
	}
	function hasCallExpression(node) {
		let currentNode = node;
		while (currentNode != null) {
			const { type } = currentNode;
			if (type[0] === "C" && type[1] === "a") return true;
			else if (type[0] === "M" && type[1] === "e" && type[2] === "m") currentNode = currentNode.object;
			else return false;
		}
	}
	function formatVariableDeclaration(state, node) {
		const { generator } = state;
		const { declarations } = node;
		state.write(node.kind + " ");
		const { length } = declarations;
		if (length > 0) {
			generator.VariableDeclarator(declarations[0], state);
			for (let i = 1; i < length; i++) {
				state.write(", ");
				generator.VariableDeclarator(declarations[i], state);
			}
		}
	}
	var ForInStatement$1;
	var FunctionDeclaration$1;
	var RestElement$1;
	var BinaryExpression$1;
	var ArrayExpression$1;
	var BlockStatement;
	var GENERATOR = {
		Program(node, state) {
			const indent = state.indent.repeat(state.indentLevel);
			const { lineEnd, writeComments } = state;
			if (writeComments && node.comments != null) formatComments(state, node.comments, indent, lineEnd);
			const statements = node.body;
			const { length } = statements;
			for (let i = 0; i < length; i++) {
				const statement = statements[i];
				if (writeComments && statement.comments != null) formatComments(state, statement.comments, indent, lineEnd);
				state.write(indent);
				this[statement.type](statement, state);
				state.write(lineEnd);
			}
			if (writeComments && node.trailingComments != null) formatComments(state, node.trailingComments, indent, lineEnd);
		},
		BlockStatement: BlockStatement = function(node, state) {
			const indent = state.indent.repeat(state.indentLevel++);
			const { lineEnd, writeComments } = state;
			const statementIndent = indent + state.indent;
			state.write("{");
			const statements = node.body;
			if (statements != null && statements.length > 0) {
				state.write(lineEnd);
				if (writeComments && node.comments != null) formatComments(state, node.comments, statementIndent, lineEnd);
				const { length } = statements;
				for (let i = 0; i < length; i++) {
					const statement = statements[i];
					if (writeComments && statement.comments != null) formatComments(state, statement.comments, statementIndent, lineEnd);
					state.write(statementIndent);
					this[statement.type](statement, state);
					state.write(lineEnd);
				}
				state.write(indent);
			} else if (writeComments && node.comments != null) {
				state.write(lineEnd);
				formatComments(state, node.comments, statementIndent, lineEnd);
				state.write(indent);
			}
			if (writeComments && node.trailingComments != null) formatComments(state, node.trailingComments, statementIndent, lineEnd);
			state.write("}");
			state.indentLevel--;
		},
		ClassBody: BlockStatement,
		StaticBlock(node, state) {
			state.write("static ");
			this.BlockStatement(node, state);
		},
		EmptyStatement(node, state) {
			state.write(";");
		},
		ExpressionStatement(node, state) {
			const precedence = state.expressionsPrecedence[node.expression.type];
			if (precedence === 17 || precedence === 3 && node.expression.left.type[0] === "O") {
				state.write("(");
				this[node.expression.type](node.expression, state);
				state.write(")");
			} else this[node.expression.type](node.expression, state);
			state.write(";");
		},
		IfStatement(node, state) {
			state.write("if (");
			this[node.test.type](node.test, state);
			state.write(") ");
			this[node.consequent.type](node.consequent, state);
			if (node.alternate != null) {
				state.write(" else ");
				this[node.alternate.type](node.alternate, state);
			}
		},
		LabeledStatement(node, state) {
			this[node.label.type](node.label, state);
			state.write(": ");
			this[node.body.type](node.body, state);
		},
		BreakStatement(node, state) {
			state.write("break");
			if (node.label != null) {
				state.write(" ");
				this[node.label.type](node.label, state);
			}
			state.write(";");
		},
		ContinueStatement(node, state) {
			state.write("continue");
			if (node.label != null) {
				state.write(" ");
				this[node.label.type](node.label, state);
			}
			state.write(";");
		},
		WithStatement(node, state) {
			state.write("with (");
			this[node.object.type](node.object, state);
			state.write(") ");
			this[node.body.type](node.body, state);
		},
		SwitchStatement(node, state) {
			const indent = state.indent.repeat(state.indentLevel++);
			const { lineEnd, writeComments } = state;
			state.indentLevel++;
			const caseIndent = indent + state.indent;
			const statementIndent = caseIndent + state.indent;
			state.write("switch (");
			this[node.discriminant.type](node.discriminant, state);
			state.write(") {" + lineEnd);
			const { cases: occurences } = node;
			const { length: occurencesCount } = occurences;
			for (let i = 0; i < occurencesCount; i++) {
				const occurence = occurences[i];
				if (writeComments && occurence.comments != null) formatComments(state, occurence.comments, caseIndent, lineEnd);
				if (occurence.test) {
					state.write(caseIndent + "case ");
					this[occurence.test.type](occurence.test, state);
					state.write(":" + lineEnd);
				} else state.write(caseIndent + "default:" + lineEnd);
				const { consequent } = occurence;
				const { length: consequentCount } = consequent;
				for (let i = 0; i < consequentCount; i++) {
					const statement = consequent[i];
					if (writeComments && statement.comments != null) formatComments(state, statement.comments, statementIndent, lineEnd);
					state.write(statementIndent);
					this[statement.type](statement, state);
					state.write(lineEnd);
				}
			}
			state.indentLevel -= 2;
			state.write(indent + "}");
		},
		ReturnStatement(node, state) {
			state.write("return");
			if (node.argument) {
				state.write(" ");
				this[node.argument.type](node.argument, state);
			}
			state.write(";");
		},
		ThrowStatement(node, state) {
			state.write("throw ");
			this[node.argument.type](node.argument, state);
			state.write(";");
		},
		TryStatement(node, state) {
			state.write("try ");
			this[node.block.type](node.block, state);
			if (node.handler) {
				const { handler } = node;
				if (handler.param == null) state.write(" catch ");
				else {
					state.write(" catch (");
					this[handler.param.type](handler.param, state);
					state.write(") ");
				}
				this[handler.body.type](handler.body, state);
			}
			if (node.finalizer) {
				state.write(" finally ");
				this[node.finalizer.type](node.finalizer, state);
			}
		},
		WhileStatement(node, state) {
			state.write("while (");
			this[node.test.type](node.test, state);
			state.write(") ");
			this[node.body.type](node.body, state);
		},
		DoWhileStatement(node, state) {
			state.write("do ");
			this[node.body.type](node.body, state);
			state.write(" while (");
			this[node.test.type](node.test, state);
			state.write(");");
		},
		ForStatement(node, state) {
			state.write("for (");
			if (node.init != null) {
				const { init } = node;
				if (init.type[0] === "V") formatVariableDeclaration(state, init);
				else this[init.type](init, state);
			}
			state.write("; ");
			if (node.test) this[node.test.type](node.test, state);
			state.write("; ");
			if (node.update) this[node.update.type](node.update, state);
			state.write(") ");
			this[node.body.type](node.body, state);
		},
		ForInStatement: ForInStatement$1 = function(node, state) {
			state.write(`for ${node.await ? "await " : ""}(`);
			const { left } = node;
			if (left.type[0] === "V") formatVariableDeclaration(state, left);
			else this[left.type](left, state);
			state.write(node.type[3] === "I" ? " in " : " of ");
			this[node.right.type](node.right, state);
			state.write(") ");
			this[node.body.type](node.body, state);
		},
		ForOfStatement: ForInStatement$1,
		DebuggerStatement(node, state) {
			state.write("debugger;", node);
		},
		FunctionDeclaration: FunctionDeclaration$1 = function(node, state) {
			state.write((node.async ? "async " : "") + (node.generator ? "function* " : "function ") + (node.id ? node.id.name : ""), node);
			formatSequence(state, node.params);
			state.write(" ");
			this[node.body.type](node.body, state);
		},
		FunctionExpression: FunctionDeclaration$1,
		VariableDeclaration(node, state) {
			formatVariableDeclaration(state, node);
			state.write(";");
		},
		VariableDeclarator(node, state) {
			this[node.id.type](node.id, state);
			if (node.init != null) {
				state.write(" = ");
				this[node.init.type](node.init, state);
			}
		},
		ClassDeclaration(node, state) {
			state.write("class " + (node.id ? `${node.id.name} ` : ""), node);
			if (node.superClass) {
				state.write("extends ");
				const { superClass } = node;
				const { type } = superClass;
				const precedence = state.expressionsPrecedence[type];
				if ((type[0] !== "C" || type[1] !== "l" || type[5] !== "E") && (precedence === 17 || precedence < state.expressionsPrecedence.ClassExpression)) {
					state.write("(");
					this[node.superClass.type](superClass, state);
					state.write(")");
				} else this[superClass.type](superClass, state);
				state.write(" ");
			}
			this.ClassBody(node.body, state);
		},
		ImportDeclaration(node, state) {
			state.write("import ");
			const { specifiers, attributes } = node;
			const { length } = specifiers;
			let i = 0;
			if (length > 0) {
				for (; i < length;) {
					if (i > 0) state.write(", ");
					const specifier = specifiers[i];
					const type = specifier.type[6];
					if (type === "D") {
						state.write(specifier.local.name, specifier);
						i++;
					} else if (type === "N") {
						state.write("* as " + specifier.local.name, specifier);
						i++;
					} else break;
				}
				if (i < length) {
					state.write("{");
					for (;;) {
						const specifier = specifiers[i];
						const { name } = specifier.imported;
						state.write(name, specifier);
						if (name !== specifier.local.name) state.write(" as " + specifier.local.name);
						if (++i < length) state.write(", ");
						else break;
					}
					state.write("}");
				}
				state.write(" from ");
			}
			this.Literal(node.source, state);
			if (attributes && attributes.length > 0) {
				state.write(" with { ");
				for (let i = 0; i < attributes.length; i++) {
					this.ImportAttribute(attributes[i], state);
					if (i < attributes.length - 1) state.write(", ");
				}
				state.write(" }");
			}
			state.write(";");
		},
		ImportAttribute(node, state) {
			this.Identifier(node.key, state);
			state.write(": ");
			this.Literal(node.value, state);
		},
		ImportExpression(node, state) {
			state.write("import(");
			this[node.source.type](node.source, state);
			state.write(")");
		},
		ExportDefaultDeclaration(node, state) {
			state.write("export default ");
			this[node.declaration.type](node.declaration, state);
			if (state.expressionsPrecedence[node.declaration.type] != null && node.declaration.type[0] !== "F") state.write(";");
		},
		ExportNamedDeclaration(node, state) {
			state.write("export ");
			if (node.declaration) this[node.declaration.type](node.declaration, state);
			else {
				state.write("{");
				const { specifiers } = node, { length } = specifiers;
				if (length > 0) for (let i = 0;;) {
					const specifier = specifiers[i];
					const { name } = specifier.local;
					state.write(name, specifier);
					if (name !== specifier.exported.name) state.write(" as " + specifier.exported.name);
					if (++i < length) state.write(", ");
					else break;
				}
				state.write("}");
				if (node.source) {
					state.write(" from ");
					this.Literal(node.source, state);
				}
				if (node.attributes && node.attributes.length > 0) {
					state.write(" with { ");
					for (let i = 0; i < node.attributes.length; i++) {
						this.ImportAttribute(node.attributes[i], state);
						if (i < node.attributes.length - 1) state.write(", ");
					}
					state.write(" }");
				}
				state.write(";");
			}
		},
		ExportAllDeclaration(node, state) {
			if (node.exported != null) state.write("export * as " + node.exported.name + " from ");
			else state.write("export * from ");
			this.Literal(node.source, state);
			if (node.attributes && node.attributes.length > 0) {
				state.write(" with { ");
				for (let i = 0; i < node.attributes.length; i++) {
					this.ImportAttribute(node.attributes[i], state);
					if (i < node.attributes.length - 1) state.write(", ");
				}
				state.write(" }");
			}
			state.write(";");
		},
		MethodDefinition(node, state) {
			if (node.static) state.write("static ");
			const kind = node.kind[0];
			if (kind === "g" || kind === "s") state.write(node.kind + " ");
			if (node.value.async) state.write("async ");
			if (node.value.generator) state.write("*");
			if (node.computed) {
				state.write("[");
				this[node.key.type](node.key, state);
				state.write("]");
			} else this[node.key.type](node.key, state);
			formatSequence(state, node.value.params);
			state.write(" ");
			this[node.value.body.type](node.value.body, state);
		},
		ClassExpression(node, state) {
			this.ClassDeclaration(node, state);
		},
		ArrowFunctionExpression(node, state) {
			state.write(node.async ? "async " : "", node);
			const { params } = node;
			if (params != null) {
				if (params.length === 1 && params[0].type[0] === "I") state.write(params[0].name, params[0]);
				else formatSequence(state, node.params);
			}
			state.write(" => ");
			if (node.body.type[0] === "O") {
				state.write("(");
				this.ObjectExpression(node.body, state);
				state.write(")");
			} else this[node.body.type](node.body, state);
		},
		ThisExpression(node, state) {
			state.write("this", node);
		},
		Super(node, state) {
			state.write("super", node);
		},
		RestElement: RestElement$1 = function(node, state) {
			state.write("...");
			this[node.argument.type](node.argument, state);
		},
		SpreadElement: RestElement$1,
		YieldExpression(node, state) {
			state.write(node.delegate ? "yield*" : "yield");
			if (node.argument) {
				state.write(" ");
				this[node.argument.type](node.argument, state);
			}
		},
		AwaitExpression(node, state) {
			state.write("await ", node);
			formatExpression(state, node.argument, node);
		},
		TemplateLiteral(node, state) {
			const { quasis, expressions } = node;
			state.write("`");
			const { length } = expressions;
			for (let i = 0; i < length; i++) {
				const expression = expressions[i];
				const quasi = quasis[i];
				state.write(quasi.value.raw, quasi);
				state.write("${");
				this[expression.type](expression, state);
				state.write("}");
			}
			const quasi = quasis[quasis.length - 1];
			state.write(quasi.value.raw, quasi);
			state.write("`");
		},
		TemplateElement(node, state) {
			state.write(node.value.raw, node);
		},
		TaggedTemplateExpression(node, state) {
			formatExpression(state, node.tag, node);
			this[node.quasi.type](node.quasi, state);
		},
		ArrayExpression: ArrayExpression$1 = function(node, state) {
			state.write("[");
			if (node.elements.length > 0) {
				const { elements } = node, { length } = elements;
				for (let i = 0;;) {
					const element = elements[i];
					if (element != null) this[element.type](element, state);
					if (++i < length) state.write(", ");
					else {
						if (element == null) state.write(", ");
						break;
					}
				}
			}
			state.write("]");
		},
		ArrayPattern: ArrayExpression$1,
		ObjectExpression(node, state) {
			const indent = state.indent.repeat(state.indentLevel++);
			const { lineEnd, writeComments } = state;
			const propertyIndent = indent + state.indent;
			state.write("{");
			if (node.properties.length > 0) {
				state.write(lineEnd);
				if (writeComments && node.comments != null) formatComments(state, node.comments, propertyIndent, lineEnd);
				const comma = "," + lineEnd;
				const { properties } = node, { length } = properties;
				for (let i = 0;;) {
					const property = properties[i];
					if (writeComments && property.comments != null) formatComments(state, property.comments, propertyIndent, lineEnd);
					state.write(propertyIndent);
					this[property.type](property, state);
					if (++i < length) state.write(comma);
					else break;
				}
				state.write(lineEnd);
				if (writeComments && node.trailingComments != null) formatComments(state, node.trailingComments, propertyIndent, lineEnd);
				state.write(indent + "}");
			} else if (writeComments) {
				if (node.comments != null) {
					state.write(lineEnd);
					formatComments(state, node.comments, propertyIndent, lineEnd);
					if (node.trailingComments != null) formatComments(state, node.trailingComments, propertyIndent, lineEnd);
					state.write(indent + "}");
				} else if (node.trailingComments != null) {
					state.write(lineEnd);
					formatComments(state, node.trailingComments, propertyIndent, lineEnd);
					state.write(indent + "}");
				} else state.write("}");
			} else state.write("}");
			state.indentLevel--;
		},
		Property(node, state) {
			if (node.method || node.kind[0] !== "i") this.MethodDefinition(node, state);
			else {
				if (!node.shorthand) {
					if (node.computed) {
						state.write("[");
						this[node.key.type](node.key, state);
						state.write("]");
					} else this[node.key.type](node.key, state);
					state.write(": ");
				}
				this[node.value.type](node.value, state);
			}
		},
		PropertyDefinition(node, state) {
			if (node.static) state.write("static ");
			if (node.computed) state.write("[");
			this[node.key.type](node.key, state);
			if (node.computed) state.write("]");
			if (node.value == null) {
				if (node.key.type[0] !== "F") state.write(";");
				return;
			}
			state.write(" = ");
			this[node.value.type](node.value, state);
			state.write(";");
		},
		ObjectPattern(node, state) {
			state.write("{");
			if (node.properties.length > 0) {
				const { properties } = node, { length } = properties;
				for (let i = 0;;) {
					this[properties[i].type](properties[i], state);
					if (++i < length) state.write(", ");
					else break;
				}
			}
			state.write("}");
		},
		SequenceExpression(node, state) {
			formatSequence(state, node.expressions);
		},
		UnaryExpression(node, state) {
			if (node.prefix) {
				const { operator, argument, argument: { type } } = node;
				state.write(operator);
				const needsParentheses = expressionNeedsParenthesis(state, argument, node);
				if (!needsParentheses && (operator.length > 1 || type[0] === "U" && (type[1] === "n" || type[1] === "p") && argument.prefix && argument.operator[0] === operator && (operator === "+" || operator === "-"))) state.write(" ");
				if (needsParentheses) {
					state.write(operator.length > 1 ? " (" : "(");
					this[type](argument, state);
					state.write(")");
				} else this[type](argument, state);
			} else {
				this[node.argument.type](node.argument, state);
				state.write(node.operator);
			}
		},
		UpdateExpression(node, state) {
			if (node.prefix) {
				state.write(node.operator);
				this[node.argument.type](node.argument, state);
			} else {
				this[node.argument.type](node.argument, state);
				state.write(node.operator);
			}
		},
		AssignmentExpression(node, state) {
			this[node.left.type](node.left, state);
			state.write(" " + node.operator + " ");
			this[node.right.type](node.right, state);
		},
		AssignmentPattern(node, state) {
			this[node.left.type](node.left, state);
			state.write(" = ");
			this[node.right.type](node.right, state);
		},
		BinaryExpression: BinaryExpression$1 = function(node, state) {
			const isIn = node.operator === "in";
			if (isIn) state.write("(");
			formatExpression(state, node.left, node, false);
			state.write(" " + node.operator + " ");
			formatExpression(state, node.right, node, true);
			if (isIn) state.write(")");
		},
		LogicalExpression: BinaryExpression$1,
		ConditionalExpression(node, state) {
			const { test } = node;
			const precedence = state.expressionsPrecedence[test.type];
			if (precedence === 17 || precedence <= state.expressionsPrecedence.ConditionalExpression) {
				state.write("(");
				this[test.type](test, state);
				state.write(")");
			} else this[test.type](test, state);
			state.write(" ? ");
			this[node.consequent.type](node.consequent, state);
			state.write(" : ");
			this[node.alternate.type](node.alternate, state);
		},
		NewExpression(node, state) {
			state.write("new ");
			const precedence = state.expressionsPrecedence[node.callee.type];
			if (precedence === 17 || precedence < state.expressionsPrecedence.CallExpression || hasCallExpression(node.callee)) {
				state.write("(");
				this[node.callee.type](node.callee, state);
				state.write(")");
			} else this[node.callee.type](node.callee, state);
			formatSequence(state, node["arguments"]);
		},
		CallExpression(node, state) {
			const precedence = state.expressionsPrecedence[node.callee.type];
			if (precedence === 17 || precedence < state.expressionsPrecedence.CallExpression) {
				state.write("(");
				this[node.callee.type](node.callee, state);
				state.write(")");
			} else this[node.callee.type](node.callee, state);
			if (node.optional) state.write("?.");
			formatSequence(state, node["arguments"]);
		},
		ChainExpression(node, state) {
			this[node.expression.type](node.expression, state);
		},
		MemberExpression(node, state) {
			const precedence = state.expressionsPrecedence[node.object.type];
			if (precedence === 17 || precedence < state.expressionsPrecedence.MemberExpression) {
				state.write("(");
				this[node.object.type](node.object, state);
				state.write(")");
			} else this[node.object.type](node.object, state);
			if (node.computed) {
				if (node.optional) state.write("?.");
				state.write("[");
				this[node.property.type](node.property, state);
				state.write("]");
			} else {
				if (node.optional) state.write("?.");
				else state.write(".");
				this[node.property.type](node.property, state);
			}
		},
		MetaProperty(node, state) {
			state.write(node.meta.name + "." + node.property.name, node);
		},
		Identifier(node, state) {
			state.write(node.name, node);
		},
		PrivateIdentifier(node, state) {
			state.write(`#${node.name}`, node);
		},
		Literal(node, state) {
			if (node.raw != null) state.write(node.raw, node);
			else if (node.regex != null) this.RegExpLiteral(node, state);
			else if (node.bigint != null) state.write(node.bigint + "n", node);
			else state.write(stringify(node.value), node);
		},
		RegExpLiteral(node, state) {
			const { regex } = node;
			state.write(`/${regex.pattern}/${regex.flags}`, node);
		}
	};
	var EMPTY_OBJECT = {};
	var baseGenerator = GENERATOR;
	var State = class {
		constructor(options) {
			const setup = options == null ? EMPTY_OBJECT : options;
			this.output = "";
			if (setup.output != null) {
				this.output = setup.output;
				this.write = this.writeToStream;
			} else this.output = "";
			this.generator = setup.generator != null ? setup.generator : GENERATOR;
			this.expressionsPrecedence = setup.expressionsPrecedence != null ? setup.expressionsPrecedence : EXPRESSIONS_PRECEDENCE;
			this.indent = setup.indent != null ? setup.indent : "  ";
			this.lineEnd = setup.lineEnd != null ? setup.lineEnd : "\n";
			this.indentLevel = setup.startingIndentLevel != null ? setup.startingIndentLevel : 0;
			this.writeComments = setup.comments ? setup.comments : false;
			if (setup.sourceMap != null) {
				this.write = setup.output == null ? this.writeAndMap : this.writeToStreamAndMap;
				this.sourceMap = setup.sourceMap;
				this.line = 1;
				this.column = 0;
				this.lineEndSize = this.lineEnd.split("\n").length - 1;
				this.mapping = {
					original: null,
					generated: this,
					name: void 0,
					source: setup.sourceMap.file || setup.sourceMap._file
				};
			}
		}
		write(code) {
			this.output += code;
		}
		writeToStream(code) {
			this.output.write(code);
		}
		writeAndMap(code, node) {
			this.output += code;
			this.map(code, node);
		}
		writeToStreamAndMap(code, node) {
			this.output.write(code);
			this.map(code, node);
		}
		map(code, node) {
			if (node != null) {
				const { type } = node;
				if (type[0] === "L" && type[2] === "n") {
					this.column = 0;
					this.line++;
					return;
				}
				if (node.loc != null) {
					const { mapping } = this;
					mapping.original = node.loc.start;
					mapping.name = node.name;
					this.sourceMap.addMapping(mapping);
				}
				if (type[0] === "T" && type[8] === "E" || type[0] === "L" && type[1] === "i" && typeof node.value === "string") {
					const { length } = code;
					let { column, line } = this;
					for (let i = 0; i < length; i++) if (code[i] === "\n") {
						column = 0;
						line++;
					} else column++;
					this.column = column;
					this.line = line;
					return;
				}
			}
			const { length } = code;
			const { lineEnd } = this;
			if (length > 0) {
				if (this.lineEndSize > 0 && (lineEnd.length === 1 ? code[length - 1] === lineEnd : code.endsWith(lineEnd))) {
					this.line += this.lineEndSize;
					this.column = 0;
				} else this.column += length;
			}
		}
		toString() {
			return this.output;
		}
	};
	function generate(node, options) {
		const state = new State(options);
		state.generator[node.type](node, state);
		return state.output;
	}
	//#endregion
	//#region node_modules/astravel/dist/module/defaultTraveler.js
	var ForInStatement;
	var FunctionDeclaration;
	var RestElement;
	var BinaryExpression;
	var ArrayExpression;
	var Block$1;
	var MethodDefinition;
	var ignore = Function.prototype;
	var Found = class {
		constructor(node, state) {
			this.node = node;
			this.state = state;
		}
	};
	var defaultTraveler = {
		go(node, state) {
			if (this[node.type]) this[node.type](node, state);
		},
		find(predicate, node, state) {
			const finder = Object.create(this);
			finder.go = function(node, state) {
				if (predicate(node, state)) throw new Found(node, state);
				this[node.type](node, state);
			};
			try {
				finder.go(node, state);
			} catch (error) {
				if (error instanceof Found) return error;
				else throw error;
			}
		},
		makeChild(properties = {}) {
			const traveler = Object.create(this);
			traveler.super = this;
			for (let key in properties) traveler[key] = properties[key];
			return traveler;
		},
		Program: Block$1 = function(node, state) {
			const { body } = node;
			if (body != null) {
				const { length } = body;
				for (let i = 0; i < length; i++) this.go(body[i], state);
			}
		},
		BlockStatement: Block$1,
		StaticBlock: Block$1,
		EmptyStatement: ignore,
		ExpressionStatement(node, state) {
			this.go(node.expression, state);
		},
		IfStatement(node, state) {
			this.go(node.test, state);
			this.go(node.consequent, state);
			if (node.alternate != null) this.go(node.alternate, state);
		},
		LabeledStatement(node, state) {
			this.go(node.label, state);
			this.go(node.body, state);
		},
		BreakStatement(node, state) {
			if (node.label) this.go(node.label, state);
		},
		ContinueStatement(node, state) {
			if (node.label) this.go(node.label, state);
		},
		WithStatement(node, state) {
			this.go(node.object, state);
			this.go(node.body, state);
		},
		SwitchStatement(node, state) {
			this.go(node.discriminant, state);
			const { cases } = node, { length } = cases;
			for (let i = 0; i < length; i++) this.go(cases[i], state);
		},
		SwitchCase(node, state) {
			if (node.test != null) this.go(node.test, state);
			const statements = node.consequent, { length } = statements;
			for (let i = 0; i < length; i++) this.go(statements[i], state);
		},
		ReturnStatement(node, state) {
			if (node.argument) this.go(node.argument, state);
		},
		ThrowStatement(node, state) {
			this.go(node.argument, state);
		},
		TryStatement(node, state) {
			this.go(node.block, state);
			if (node.handler != null) this.go(node.handler, state);
			if (node.finalizer != null) this.go(node.finalizer, state);
		},
		CatchClause(node, state) {
			if (node.param != null) this.go(node.param, state);
			this.go(node.body, state);
		},
		WhileStatement(node, state) {
			this.go(node.test, state);
			this.go(node.body, state);
		},
		DoWhileStatement(node, state) {
			this.go(node.body, state);
			this.go(node.test, state);
		},
		ForStatement(node, state) {
			if (node.init != null) this.go(node.init, state);
			if (node.test != null) this.go(node.test, state);
			if (node.update != null) this.go(node.update, state);
			this.go(node.body, state);
		},
		ForInStatement: ForInStatement = function(node, state) {
			this.go(node.left, state);
			this.go(node.right, state);
			this.go(node.body, state);
		},
		DebuggerStatement: ignore,
		FunctionDeclaration: FunctionDeclaration = function(node, state) {
			if (node.id != null) this.go(node.id, state);
			const { params } = node;
			if (params != null) for (let i = 0, { length } = params; i < length; i++) this.go(params[i], state);
			this.go(node.body, state);
		},
		VariableDeclaration(node, state) {
			const { declarations } = node, { length } = declarations;
			for (let i = 0; i < length; i++) this.go(declarations[i], state);
		},
		VariableDeclarator(node, state) {
			this.go(node.id, state);
			if (node.init != null) this.go(node.init, state);
		},
		ArrowFunctionExpression(node, state) {
			const { params } = node;
			if (params != null) for (let i = 0, { length } = params; i < length; i++) this.go(params[i], state);
			this.go(node.body, state);
		},
		ThisExpression: ignore,
		ArrayExpression: ArrayExpression = function(node, state) {
			const { elements } = node, { length } = elements;
			for (let i = 0; i < length; i++) if (elements[i] != null) this.go(elements[i], state);
		},
		ObjectExpression(node, state) {
			const { properties } = node, { length } = properties;
			for (let i = 0; i < length; i++) this.go(properties[i], state);
		},
		Property(node, state) {
			this.go(node.key, state);
			if (node.value != null) this.go(node.value, state);
		},
		FunctionExpression: FunctionDeclaration,
		SequenceExpression(node, state) {
			const { expressions } = node, { length } = expressions;
			for (let i = 0; i < length; i++) this.go(expressions[i], state);
		},
		UnaryExpression(node, state) {
			this.go(node.argument, state);
		},
		UpdateExpression(node, state) {
			this.go(node.argument, state);
		},
		AssignmentExpression(node, state) {
			this.go(node.left, state);
			this.go(node.right, state);
		},
		BinaryExpression: BinaryExpression = function(node, state) {
			this.go(node.left, state);
			this.go(node.right, state);
		},
		LogicalExpression: BinaryExpression,
		ConditionalExpression(node, state) {
			this.go(node.test, state);
			this.go(node.consequent, state);
			this.go(node.alternate, state);
		},
		NewExpression(node, state) {
			this.CallExpression(node, state);
		},
		CallExpression(node, state) {
			this.go(node.callee, state);
			const args = node["arguments"], { length } = args;
			for (let i = 0; i < length; i++) this.go(args[i], state);
		},
		MemberExpression(node, state) {
			this.go(node.object, state);
			this.go(node.property, state);
		},
		Identifier: ignore,
		PrivateIdentifier: ignore,
		Literal: ignore,
		ForOfStatement: ForInStatement,
		ClassDeclaration(node, state) {
			if (node.id) this.go(node.id, state);
			if (node.superClass) this.go(node.superClass, state);
			this.go(node.body, state);
		},
		ClassBody: Block$1,
		ImportDeclaration(node, state) {
			const { specifiers } = node, { length } = specifiers;
			for (let i = 0; i < length; i++) this.go(specifiers[i], state);
			this.go(node.source, state);
		},
		ImportNamespaceSpecifier(node, state) {
			this.go(node.local, state);
		},
		ImportDefaultSpecifier(node, state) {
			this.go(node.local, state);
		},
		ImportSpecifier(node, state) {
			this.go(node.imported, state);
			this.go(node.local, state);
		},
		ExportDefaultDeclaration(node, state) {
			this.go(node.declaration, state);
		},
		ExportNamedDeclaration(node, state) {
			if (node.declaration) this.go(node.declaration, state);
			const { specifiers } = node, { length } = specifiers;
			for (let i = 0; i < length; i++) this.go(specifiers[i], state);
			if (node.source) this.go(node.source, state);
		},
		ExportSpecifier(node, state) {
			this.go(node.local, state);
			this.go(node.exported, state);
		},
		ExportAllDeclaration(node, state) {
			this.go(node.source, state);
		},
		MethodDefinition: MethodDefinition = function(node, state) {
			this.go(node.key, state);
			this.go(node.value, state);
		},
		PropertyDefinition: MethodDefinition,
		ClassExpression(node, state) {
			this.ClassDeclaration(node, state);
		},
		Super: ignore,
		RestElement: RestElement = function(node, state) {
			this.go(node.argument, state);
		},
		SpreadElement: RestElement,
		YieldExpression(node, state) {
			if (node.argument) this.go(node.argument, state);
		},
		TaggedTemplateExpression(node, state) {
			this.go(node.tag, state);
			this.go(node.quasi, state);
		},
		TemplateLiteral(node, state) {
			const { quasis, expressions } = node;
			for (let i = 0, { length } = expressions; i < length; i++) this.go(expressions[i], state);
			for (let i = 0, { length } = quasis; i < length; i++) this.go(quasis[i], state);
		},
		TemplateElement: ignore,
		ObjectPattern(node, state) {
			const { properties } = node, { length } = properties;
			for (let i = 0; i < length; i++) this.go(properties[i], state);
		},
		ArrayPattern: ArrayExpression,
		AssignmentPattern(node, state) {
			this.go(node.left, state);
			this.go(node.right, state);
		},
		MetaProperty(node, state) {
			this.go(node.meta, state);
			this.go(node.property, state);
		},
		AwaitExpression(node, state) {
			this.go(node.argument, state);
		}
	};
	//#endregion
	//#region node_modules/astravel/dist/module/attachComments.js
	function attachCommentsToNode(traveler, state, parent, children, findHeadingComments) {
		let { index } = state;
		const { comments } = state;
		let comment = comments[index];
		let boundComments, trailingComments;
		if (comment == null) return;
		if (children == null || children.length === 0) {
			boundComments = parent.comments != null ? parent.comments : [];
			while (comment != null && comment.end <= parent.end) {
				boundComments.push(comment);
				comment = comments[++index];
			}
			state.index = index;
			if (boundComments.length !== 0 && parent.comments == null) parent.comments = boundComments;
			return;
		}
		if (findHeadingComments) {
			boundComments = parent.comments != null ? parent.comments : [];
			const { start } = children[0];
			while (comment != null && (comment.type[0] === "B" || comment.type[0] === "M") && comment.end <= start) {
				boundComments.push(comment);
				comment = comments[++index];
			}
			if (boundComments.length !== 0 && parent.comments == null) parent.comments = boundComments;
		}
		for (let i = 0, { length } = children; comment != null && i < length; i++) {
			const child = children[i];
			boundComments = [];
			while (comment != null && comment.end <= child.start) {
				boundComments.push(comment);
				comment = comments[++index];
			}
			if (comment != null && comment.loc != null && (comment.type[0] === "L" || comment.type[0] === "S")) {
				if (comment.loc.start.line === child.loc.end.line) {
					boundComments.push(comment);
					comment = comments[++index];
				}
			}
			if (boundComments.length !== 0) child.comments = boundComments;
			state.index = index;
			traveler[child.type](child, state);
			index = state.index;
			comment = comments[index];
		}
		trailingComments = [];
		while (comment != null && comment.end <= parent.end) {
			trailingComments.push(comment);
			comment = comments[++index];
		}
		if (trailingComments.length !== 0) parent.trailingComments = trailingComments;
		state.index = index;
	}
	function Block(node, state) {
		attachCommentsToNode(this, state, node, node.body, true);
	}
	var traveler = defaultTraveler.makeChild({
		Program: Block,
		BlockStatement: Block,
		ClassBody: Block,
		ObjectExpression(node, state) {
			attachCommentsToNode(this, state, node, node.properties, true);
		},
		ArrayExpression(node, state) {
			attachCommentsToNode(this, state, node, node.elements, true);
		},
		SwitchStatement(node, state) {
			attachCommentsToNode(this, state, node, node.cases, false);
		},
		SwitchCase(node, state) {
			attachCommentsToNode(this, state, node, node.consequent, false);
		}
	});
	function attachComments(node, comments) {
		traveler[node.type](node, {
			comments,
			index: 0
		});
		return node;
	}
	//#endregion
	//#region src/events/keyboard.js
	var keysDown = [];
	function onKeyDown(e) {
		if (!keysDown.includes(e.key)) keysDown.push(e.key);
	}
	function onKeyUp(e) {
		keysDown = keysDown.filter((item) => item != e.key);
		window.stage.dispatchEvent(new KeyboardEvent("keyup", { key: e.key }));
		let event = e.key.toLowerCase();
		if (event == " ") event = "space";
		window.stage.dispatchEvent(new KeyboardEvent(event, { key: e.key }));
	}
	function onAnimationFrame() {
		for (let key of keysDown) window.stage.dispatchEvent(new KeyboardEvent("keydown", { key }));
	}
	function keyboard_default() {
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		window.addEventListener("animationframe", onAnimationFrame);
	}
	//#endregion
	//#region src/events/mouse.js
	var SWIPE_MIN_DISTANCE = 150;
	var SWIPE_CROSS_MAX_DISTANCE = 100;
	var SWIPE_MAX_TIME = 200;
	var DBL_CLICK_MAX_TIME = 1e3;
	var x = false;
	var y = false;
	var t = false;
	var previous = false;
	function onMouseDown(e) {
		let position = window.stage.toStageCoordinates(e.pageX, e.pageY);
		x = position.x;
		y = position.y;
		t = Date.now();
		window.mouseButton = e.button == 2 ? "right" : "left";
		let mouseDownEvent = new MouseEvent("mousedown", e);
		window.stage.dispatchEvent(mouseDownEvent);
	}
	function onMouseUp(e) {
		window.mouseButton = false;
		let position = window.stage.toStageCoordinates(e.pageX, e.pageY);
		if (x !== false && y !== false && t !== false) {
			let deltaX = position.x - x;
			let deltaY = position.y - y;
			if (Date.now() - t < SWIPE_MAX_TIME) {
				if (deltaX > SWIPE_MIN_DISTANCE && Math.abs(deltaY) < SWIPE_CROSS_MAX_DISTANCE) window.dispatchEvent(new CustomEvent("swiperight"));
				if (deltaX < -150 && Math.abs(deltaY) < SWIPE_CROSS_MAX_DISTANCE) window.dispatchEvent(new CustomEvent("swipeleft"));
				if (deltaY > SWIPE_MIN_DISTANCE && Math.abs(deltaX) < SWIPE_CROSS_MAX_DISTANCE) window.dispatchEvent(new CustomEvent("swipedown"));
				if (deltaY < -150 && Math.abs(deltaX) < SWIPE_CROSS_MAX_DISTANCE) window.dispatchEvent(new CustomEvent("swipeup"));
			}
			if (previous) {
				let secondClickDeltaX = position.x - previous.x;
				let secondClickDeltaY = position.y - previous.y;
				let secondClickDeltaT = Date.now() - previous.t;
				if (secondClickDeltaX < 10 && secondClickDeltaY < 10 && secondClickDeltaT < DBL_CLICK_MAX_TIME) {
					let dblClickEvent = new MouseEvent("dblclick", e);
					for (let i = window.stage.actors.length - 1; i >= 0; i--) if (window.stage.actors[i].containsPoint(position.x, position.y)) window.stage.actors[i].dispatchEvent(dblClickEvent);
					window.stage.dispatchEvent(dblClickEvent);
				}
			}
			if (deltaX < 10 && deltaY < 10) {
				let clickEvent = new MouseEvent("click", e);
				for (let i = window.stage.actors.length - 1; i >= 0; i--) if (window.stage.actors[i].containsPoint(position.x, position.y)) window.stage.actors[i].dispatchEvent(clickEvent);
				window.stage.dispatchEvent(clickEvent);
				previous = {
					x,
					y,
					t: Date.now()
				};
			}
		}
		t = false;
		let mouseUpEvent = new MouseEvent("mouseup", e);
		window.stage.dispatchEvent(mouseUpEvent);
	}
	function onMouseMove(e) {
		let position = window.stage.toStageCoordinates(e.pageX, e.pageY);
		window.mouseX = position.x;
		window.mouseY = position.y;
		let mouseMoveEvent = new MouseEvent("mousemove", e);
		window.stage.dispatchEvent(mouseMoveEvent);
	}
	function mouse_default() {
		window.mouseX = 0;
		window.mouseY = 0;
		window.mouseButton = 0;
		if ("ontouchstart" in document) {
			document.addEventListener("touchstart", onMouseDown);
			document.addEventListener("touchend", onMouseUp);
			document.addEventListener("touchmove", onMouseMove);
		} else {
			document.addEventListener("mousedown", onMouseDown);
			document.addEventListener("mouseup", onMouseUp);
			document.addEventListener("mousemove", onMouseMove);
		}
	}
	//#endregion
	//#region src/core/vector.js
	var Vector = class Vector {
		constructor(x, y) {
			this._x = x;
			this._y = y;
		}
		get x() {
			return this._x;
		}
		get y() {
			return this._y;
		}
		set x(value) {
			this._x = value;
			if (typeof this.onchange == "function") this.onchange();
		}
		set y(value) {
			this._y = value;
			if (typeof this.onchange == "function") this.onchange();
		}
		get length() {
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		}
		set length(value) {
			let u = this.normalize().scale(value);
			this.x = u.x;
			this.y = u.y;
		}
		add(v) {
			return new Vector(this.x + v.x, this.y + v.y);
		}
		subtract(v) {
			return new Vector(this.x - v.x, this.y - v.y);
		}
		scale(s) {
			return new Vector(this.x * s, this.y * s);
		}
		normalize() {
			let l = this.length;
			return l > 0 ? new Vector(this.x / l, this.y / l) : new Vector(0, 0);
		}
		dot(v) {
			return this.x * v.x + this.y * v.y;
		}
		cross(v) {
			return this.x * v.y - this.y * v.x;
		}
		rotate(deg) {
			let angle = deg * (Math.PI / 180);
			return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
		}
		distance(v) {
			return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
		}
		static average(set) {
			let v = new Vector(0, 0);
			for (let i = 0; i < set.length; i = i + 1) {
				v.x = v.x + set[i].x;
				v.y = v.y + set[i].y;
			}
			v.x = v.x / set.length;
			v.y = v.y / set.length;
			return v;
		}
	};
	//#endregion
	//#region src/events/device-orientation.js
	var threshold = 10;
	function getHorizontalTilt(e) {
		switch (screen.orientation.type) {
			case "landscape-primary":
			case "landscape": return e.beta;
			case "landscape-secondary": return -e.beta;
			case "portrait-secondary": return -e.gamma;
			default: return e.gamma;
		}
	}
	function getVerticalTilt(e) {
		switch (screen.orientation.type) {
			case "landscape-primary":
			case "landscape": return -e.gamma;
			case "landscape-secondary": return e.gamma;
			case "portrait-secondary": return -e.beta;
			default: return e.beta;
		}
	}
	function onDeviceOrientation(e) {
		if (e.alpha !== null) {
			window.orientationAlpha = e.alpha;
			window.orientationBeta = e.beta;
			window.orientationGamma = e.gamma;
			window.tiltX = e.tiltX = getHorizontalTilt(e);
			window.tiltY = e.tiltY = getVerticalTilt(e);
		}
		window.tilt = new Vector(window.tiltX, window.tiltY);
		if (window.tiltX < -10) {
			let event = new CustomEvent("tiltleft");
			window.stage.dispatchEvent(event);
		}
		if (window.tiltX > threshold) {
			let event = new CustomEvent("tiltright");
			window.stage.dispatchEvent(event);
		}
		if (window.tiltY < -10) {
			let event = new CustomEvent("tiltup");
			window.stage.dispatchEvent(event);
		}
		if (window.tiltY > threshold) {
			let event = new CustomEvent("tiltdown");
			window.stage.dispatchEvent(event);
		}
		window.stage.dispatchEvent(e);
	}
	function device_orientation_default() {
		window.addEventListener("animationframe", () => {
			let event = new CustomEvent("tilt");
			window.stage.dispatchEvent(event);
		});
		if (window._kidjs_.settings.getDeviceOrientationFromParent) window.addEventListener("message", (event) => {
			if (event.data.type == "deviceorientation") onDeviceOrientation(event.data);
		});
		else if (window.DeviceOrientationEvent) window.addEventListener("deviceorientation", onDeviceOrientation);
	}
	//#endregion
	//#region src/events/index.js
	var parentAddEventListener;
	var listeners = [];
	function events_default() {
		window.tiltX = 0;
		window.tiltY = 0;
		keyboard_default();
		mouse_default();
		device_orientation_default();
		parentAddEventListener = window.addEventListener;
		window.addEventListener = function(type, listener, capture) {
			listeners.push({
				type,
				listener
			});
			parentAddEventListener(type, listener, capture);
		};
	}
	/**
	* Clear all event listeners
	*/
	function removeAllEventListeners() {
		for (let listener of listeners) window.removeEventListener(listener.type, listener.listener);
	}
	/**
	* Add event listener to stage.
	*
	* @param {string} [event] - Name of event.
	* @param {function} [handler] - Event handler to execute when event occurs.
	*/
	function on(event, handler) {
		if (typeof event === "string") window.stage.addEventListener(event, handler);
	}
	//#endregion
	//#region src/audio/index.js
	var context;
	function getContext() {
		if (!context) context = new (window.AudioContext || window.webkitAudioContext)();
		if (context.state === "suspended") context.resume();
		return context;
	}
	/**
	* Play a specific frequency for a given duration
	* 
	* @param {number} frequency - Frequency in Hz
	* @param {number} duration - Duration in seconds
	*/
	async function frequency(frequency, duration = 1) {
		let context = getContext();
		return new Promise((resolve) => {
			let start = context.currentTime;
			duration = Math.max(duration, .05);
			let attack = Math.min(.012, duration * .15);
			let release = Math.min(.14, duration * .3);
			let peak = .2;
			let filter = context.createBiquadFilter();
			filter.type = "lowpass";
			filter.Q.value = .9;
			filter.frequency.setValueAtTime(Math.min(frequency * 8, 4200), start);
			filter.frequency.exponentialRampToValueAtTime(Math.max(frequency * 2.2, 180), start + duration);
			let amp = context.createGain();
			amp.gain.setValueAtTime(1e-4, start);
			amp.gain.exponentialRampToValueAtTime(peak, start + attack);
			amp.gain.exponentialRampToValueAtTime(peak * .55, start + duration - release);
			amp.gain.exponentialRampToValueAtTime(1e-4, start + duration);
			filter.connect(amp);
			amp.connect(context.destination);
			let pending = 3;
			function startOscillator(type, freq, volume, detune = 0) {
				let oscillator = context.createOscillator();
				let gain = context.createGain();
				oscillator.type = type;
				oscillator.frequency.setValueAtTime(freq, start);
				oscillator.detune.setValueAtTime(detune, start);
				gain.gain.value = volume;
				oscillator.connect(gain);
				gain.connect(filter);
				oscillator.start(start);
				oscillator.stop(start + duration + .02);
				oscillator.onended = () => {
					oscillator.disconnect();
					gain.disconnect();
					pending -= 1;
					if (pending === 0) {
						filter.disconnect();
						amp.disconnect();
						resolve();
					}
				};
			}
			startOscillator("sine", frequency, .7);
			startOscillator("triangle", frequency, .25, 4);
			startOscillator("sine", frequency * 2, .1);
		});
	}
	/**
	* Play a specific note for a given duration
	* 
	* @param {string} note - Note name (e.g. 'c4')
	* @param {number} beats - Duration in beats
	*/
	async function note(note, beats = 1) {
		let frequencies = {
			"c0": 16.35,
			"c0#": 17.32,
			"d0": 18.35,
			"d0#": 19.45,
			"e0": 20.6,
			"f0": 21.83,
			"f0#": 23.12,
			"g0": 24.5,
			"g0#": 25.96,
			"a0": 27.5,
			"a0#": 29.14,
			"b0": 30.87,
			"c1": 32.7,
			"c1#": 34.65,
			"d1": 36.71,
			"d1#": 38.89,
			"e1": 41.2,
			"f1": 43.65,
			"f1#": 46.25,
			"g1": 49,
			"g1#": 51.91,
			"a1": 55,
			"a1#": 58.27,
			"b1": 61.74,
			"c2": 65.41,
			"c2#": 69.3,
			"d2": 73.42,
			"d2#": 77.78,
			"e2": 82.41,
			"f2": 87.31,
			"f2#": 92.5,
			"g2": 98,
			"g2#": 103.83,
			"a2": 110,
			"a2#": 116.54,
			"b2": 123.47,
			"c3": 130.81,
			"c3#": 138.59,
			"d3": 146.83,
			"d3#": 155.56,
			"e3": 164.81,
			"f3": 174.61,
			"f3#": 185,
			"g3": 196,
			"g3#": 207.65,
			"a3": 220,
			"a3#": 233.08,
			"b3": 246.94,
			"c4": 261.63,
			"c4#": 277.18,
			"d4": 293.66,
			"d4#": 311.13,
			"e4": 329.63,
			"f4": 349.23,
			"f4#": 369.99,
			"g4": 392,
			"g4#": 415.3,
			"a4": 440,
			"a4#": 466.16,
			"b4": 493.88,
			"c": 261.63,
			"c#": 277.18,
			"d": 293.66,
			"d#": 311.13,
			"e": 329.63,
			"f": 349.23,
			"f#": 369.99,
			"g": 392,
			"g#": 415.3,
			"a": 440,
			"a#": 466.16,
			"b": 493.88,
			"c5": 523.25,
			"c5#": 554.37,
			"d5": 587.33,
			"d5#": 622.25,
			"e5": 659.25,
			"f5": 698.46,
			"f5#": 739.99,
			"g5": 783.99,
			"g5#": 830.61,
			"a5": 880,
			"a5#": 932.33,
			"b5": 987.77,
			"c6": 1046.5,
			"c6#": 1108.73,
			"d6": 1174.66,
			"d6#": 1244.51,
			"e6": 1318.51,
			"f6": 1396.91,
			"f6#": 1479.98,
			"g6": 1567.98,
			"g6#": 1661.22,
			"a6": 1760,
			"a6#": 1864.66,
			"b6": 1975.53,
			"c7": 2093,
			"c7#": 2217.46,
			"d7": 2349.32,
			"d7#": 2489.02,
			"e7": 2637.02,
			"f7": 2793.83,
			"f7#": 2959.96,
			"g7": 3135.96,
			"g7#": 3322.44,
			"a7": 3520,
			"a7#": 3729.31,
			"b7": 3951.07,
			"c8": 4186.01,
			"c8#": 4434.92,
			"d8": 4698.63,
			"d8#": 4978.03,
			"e8": 5274.04,
			"f8": 5587.65,
			"f8#": 5919.91,
			"g8": 6271.93,
			"g8#": 6644.88,
			"a8": 7040,
			"a8#": 7458.62,
			"b8": 7902.13
		};
		note = note.toLowerCase();
		let duration = 60 / (window.tempo || 60) * beats;
		if (typeof frequencies[note] !== "undefined") await frequency(frequencies[note], duration);
	}
	/**
	* Play a number of notes in a sequence
	* 
	* @param  {...any} notes - Notes to play
	*/
	async function song(...notes) {
		for (let i = 0; i < notes.length; i++) if (i < notes.length - 1) {
			if (typeof notes[i] === "string" && typeof notes[i + 1] === "number") {
				await note(notes[i], notes[i + 1]);
				i++;
			} else if (typeof notes[i] === "string") await note(notes[i], 1);
			else if (typeof notes[i] === "array" && notes[i].length === 2) await note(notes[i][0], notes[i][1]);
		} else await note(notes[i], 1);
	}
	/**
	* Make a beep sound
	*/
	async function beep() {
		let context = getContext();
		return new Promise((resolve) => {
			let start = context.currentTime;
			function chirp(freqStart, freqEnd, when, length, volume, done) {
				let osc = context.createOscillator();
				let sparkle = context.createOscillator();
				let filter = context.createBiquadFilter();
				let amp = context.createGain();
				let sparkleGain = context.createGain();
				osc.type = "square";
				osc.frequency.setValueAtTime(freqStart, when);
				osc.frequency.exponentialRampToValueAtTime(freqEnd, when + length);
				sparkle.type = "sine";
				sparkle.frequency.setValueAtTime(freqStart * 2, when);
				sparkle.frequency.exponentialRampToValueAtTime(freqEnd * 2, when + length);
				sparkleGain.gain.value = .35;
				filter.type = "lowpass";
				filter.frequency.setValueAtTime(4200, when);
				filter.frequency.exponentialRampToValueAtTime(2200, when + length);
				filter.Q.value = 1.2;
				amp.gain.setValueAtTime(1e-4, when);
				amp.gain.exponentialRampToValueAtTime(volume, when + .004);
				amp.gain.setValueAtTime(volume, when + length * .45);
				amp.gain.exponentialRampToValueAtTime(1e-4, when + length);
				osc.connect(filter);
				sparkle.connect(sparkleGain);
				sparkleGain.connect(filter);
				filter.connect(amp);
				amp.connect(context.destination);
				osc.start(when);
				sparkle.start(when);
				osc.stop(when + length + .02);
				sparkle.stop(when + length + .02);
				osc.onended = () => {
					osc.disconnect();
					sparkle.disconnect();
					sparkleGain.disconnect();
					filter.disconnect();
					amp.disconnect();
					if (done) resolve();
				};
			}
			chirp(660, 880, start, .07, .22, false);
			chirp(880, 1320, start + .075, .12, .26, true);
		});
	}
	//#endregion
	//#region src/audio/sound.js
	var Sound = class {
		/**
		* Create a new sound object.
		*
		* @constructor
		* @param {string} url - Path to sound file
		* @param {boolean} autoplay - Play sound automatically once loaded
		*/
		constructor(url, autoplay = true) {
			this.sound = new Audio();
			this.sound.autoplay = autoplay;
			this.sound.src = url;
			this.sound.load();
		}
		/**
		* Play sound.
		*/
		play() {
			this.sound.play();
		}
		/**
		* Pause sound.
		*/
		pause() {
			this.sound.pause();
		}
		/**
		* Stop and rewind sound.
		*/
		stop() {
			this.sound.pause();
			this.sound.currentTime = 0;
		}
	};
	/**
	* Create and play a new sound.
	*
	* @constructor
	* @param {string} url - Path to sound file
	* @param {boolean} autoplay - Play sound automatically once loaded
	*/
	function sound(url, autoplay) {
		return new Sound(url, autoplay);
	}
	/**
	* Play a "ta-da" sound.
	*/
	function tada() {
		sound(window._kidjs_.scriptPath + "/assets/tada.mp3", true);
	}
	//#endregion
	//#region src/audio/speech.js
	function speak(text) {
		let utterance = new SpeechSynthesisUtterance(text);
		speechSynthesis.speak(utterance);
	}
	//#endregion
	//#region src/socket/index.js
	var rooms = {};
	var Socket = class {
		constructor(room = "") {
			this.room = room;
			this.eventListeners = {};
		}
		send(message) {
			if (typeof window._kidjs_.socketSend === "function") window._kidjs_.socketSend({
				room: this.room,
				message
			});
		}
		emit(event, message) {
			if (typeof window._kidjs_.socketSend === "function") window._kidjs_.socketSend({
				room: this.room,
				event,
				message
			});
		}
		receive(message, event = "message") {
			if (this.eventListeners[event] !== void 0) {
				for (let listener of this.eventListeners[event]) if (typeof listener === "function") listener(message);
			}
		}
		addEventListener(event, callback) {
			if (this.eventListeners[event] == void 0) this.eventListeners[event] = [];
			this.eventListeners[event].push(callback);
		}
		on(event, callback) {
			this.addEventListener(event, callback);
		}
	};
	function initSockets() {
		window._kidjs_.socketReceive = function(parameters) {
			console.debug("Socket receive", parameters);
			window._kidjs_.stats.lastFrame = Date.now();
			if (!parameters.message) return;
			if (!parameters.room) {
				window.stage.dispatchEvent(new CustomEvent("message", { detail: { message: parameters.message } }));
				return;
			}
			if (rooms[parameters.room]) rooms[parameters.room].receive(parameters.message, parameters.event ? parameters.event : "message");
		};
	}
	function join(room) {
		rooms[room] = new Socket(room);
		if (typeof window._kidjs_.socketJoin === "function") window._kidjs_.socketJoin(room);
		return rooms[room];
	}
	function send(message) {
		if (typeof window._kidjs_.socketSend === "function") window._kidjs_.socketSend({
			room: null,
			message
		});
	}
	window.addEventListener("KID.reset", function() {
		rooms = {};
	});
	//#endregion
	//#region src/animation/color.js
	var Color = class {
		constructor(color) {
			let rgb = this.toRGB(color);
			this.r = rgb.r;
			this.g = rgb.g;
			this.b = rgb.b;
		}
		toRGB(color) {
			let context = document.createElement("canvas").getContext("2d");
			context.fillStyle = color;
			let hex = context.fillStyle;
			let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : {
				r: 0,
				g: 0,
				b: 0
			};
		}
	};
	//#endregion
	//#region src/animation/tween.js
	var Tween = class {
		static linear(t, b, _c, d) {
			return (_c - b) * t / d + b;
		}
		static easeInQuad(t, b, _c, d) {
			return (_c - b) * (t /= d) * t + b;
		}
		static easeOutQuad(t, b, _c, d) {
			return -(_c - b) * (t /= d) * (t - 2) + b;
		}
		static easeInOutQuad(t, b, _c, d) {
			let c = _c - b;
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			else return -c / 2 * (--t * (t - 2) - 1) + b;
		}
		static easeInCubic(t, b, _c, d) {
			return (_c - b) * (t /= d) * t * t + b;
		}
		static easeOutCubic(t, b, _c, d) {
			return (_c - b) * ((t = t / d - 1) * t * t + 1) + b;
		}
		static easeInOutCubic(t, b, _c, d) {
			let c = _c - b;
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			else return c / 2 * ((t -= 2) * t * t + 2) + b;
		}
		static easeInQuart(t, b, _c, d) {
			return (_c - b) * (t /= d) * t * t * t + b;
		}
		static easeOutQuart(t, b, _c, d) {
			return -(_c - b) * ((t = t / d - 1) * t * t * t - 1) + b;
		}
		static easeInOutQuart(t, b, _c, d) {
			let c = _c - b;
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			else return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		}
		static easeInQuint(t, b, _c, d) {
			return (_c - b) * (t /= d) * t * t * t * t + b;
		}
		static easeOutQuint(t, b, _c, d) {
			return (_c - b) * ((t = t / d - 1) * t * t * t * t + 1) + b;
		}
		static easeInOutQuint(t, b, _c, d) {
			let c = _c - b;
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			else return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		}
		static easeInSine(t, b, _c, d) {
			let c = _c - b;
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		}
		static easeOutSine(t, b, _c, d) {
			return (_c - b) * Math.sin(t / d * (Math.PI / 2)) + b;
		}
		static easeInOutSine(t, b, _c, d) {
			return -(_c - b) / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		}
		static easeInExpo(t, b, _c, d) {
			let c = _c - b;
			return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		}
		static easeOutExpo(t, b, _c, d) {
			let c = _c - b;
			return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		}
		static easeInOutExpo(t, b, _c, d) {
			let c = _c - b;
			if (t === 0) return b;
			if (t === d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			else return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
		static easeInCirc(t, b, _c, d) {
			return -(_c - b) * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		}
		static easeOutCirc(t, b, _c, d) {
			return (_c - b) * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		}
		static easeInOutCirc(t, b, _c, d) {
			let c = _c - b;
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			else return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		}
		static easeInElastic(t, b, _c, d) {
			let c = _c - b;
			let a, p, s = 1.70158;
			p = 0;
			a = c;
			if (t === 0) return b;
			else if ((t /= d) === 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		}
		static easeOutElastic(t, b, _c, d) {
			let c = _c - b;
			let a, p, s = 1.70158;
			p = 0;
			a = c;
			if (t === 0) return b;
			else if ((t /= d) === 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		}
		static easeInOutElastic(t, b, _c, d) {
			let c = _c - b;
			let a, p, s = 1.70158;
			p = 0;
			a = c;
			if (t === 0) return b;
			else if ((t /= d / 2) === 2) return b + c;
			if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			else return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		}
		static easeInBack(t, b, _c, d, s) {
			let c = _c - b;
			if (s === void 0) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		}
		static easeOutBack(t, b, _c, d, s) {
			let c = _c - b;
			if (s === void 0) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		}
		static easeInOutBack(t, b, _c, d, s) {
			let c = _c - b;
			if (s === void 0) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
			else return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
		}
		static easeInBounce(t, b, _c, d) {
			let c = _c - b;
			let v;
			v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
			return c - v + b;
		}
		static easeOutBounce(t, b, _c, d) {
			let c = _c - b;
			if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;
			else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
			else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
			else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
		}
		static easeInOutBounce(t, b, _c, d) {
			let c = _c - b;
			let v;
			if (t < d / 2) {
				v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
				return v * .5 + b;
			} else {
				v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
				return v * .5 + c * .5 + b;
			}
		}
	};
	//#endregion
	//#region src/animation/index.js
	var Animation = class {
		constructor(actor, properties, duration, tween = false, queue = false) {
			this.actor = actor;
			this.status = queue ? "queued" : "ready";
			this.queue = queue;
			this.duration = duration * 1e3;
			this.to = properties;
			this.tween = tween ? tween : window.easing;
			this.from = {};
		}
		/**
		* Advance animation a single frame
		*/
		update() {
			if (this.status == "ready") {
				this.from = {};
				for (const property in this.to) {
					if (typeof this.actor[property] == "number") {
						if (this.actor[property] != this.to[property]) this.from[property] = this.actor[property];
					}
					if (property == "fill" || property == "stroke") {
						this.from[property] = new Color(this.actor[property]);
						this.to[property] = new Color(this.to[property]);
					}
				}
				this.status = "running";
				this.start = Date.now();
			}
			if (this.status == "running") {
				let t = Date.now() - this.start;
				for (const property in this.from) {
					let value;
					if (typeof this.from[property] == "number") {
						if (t >= this.duration) value = this.to[property];
						else switch (this.tween.toLowerCase()) {
							case "linear":
								value = Tween.linear(t, this.from[property], this.to[property], this.duration);
								break;
							case "easein":
								value = Tween.easeInQuad(t, this.from[property], this.to[property], this.duration);
								break;
							case "easeout":
								value = Tween.easeOutQuad(t, this.from[property], this.to[property], this.duration);
								break;
							case "easeinout":
								value = Tween.easeInOutQuad(t, this.from[property], this.to[property], this.duration);
								break;
							case "easeinelastic":
								value = Tween.easeInElastic(t, this.from[property], this.to[property], this.duration);
								break;
							case "easeoutelastic":
								value = Tween.easeOutElastic(t, this.from[property], this.to[property], this.duration);
								break;
							default: value = Tween.easeInOutElastic(t, this.from[property], this.to[property], this.duration);
						}
						if (typeof this.actor["_set" + property] == "function") this.actor["_set" + property](value);
						else this.actor[property] = value;
					} else {
						let r, g, b;
						if (t >= this.duration) {
							r = this.to[property].r;
							g = this.to[property].g;
							b = this.to[property].b;
						} else switch (this.tween.toLowerCase()) {
							case "linear":
								r = Tween.linear(t, this.from[property].r, this.to[property].r, this.duration);
								g = Tween.linear(t, this.from[property].g, this.to[property].g, this.duration);
								b = Tween.linear(t, this.from[property].b, this.to[property].b, this.duration);
								break;
							case "easein":
								r = Tween.easeInQuad(t, this.from[property].r, this.to[property].r, this.duration);
								g = Tween.easeInQuad(t, this.from[property].g, this.to[property].g, this.duration);
								b = Tween.easeInQuad(t, this.from[property].b, this.to[property].b, this.duration);
								break;
							case "easeout":
								r = Tween.easeOutQuad(t, this.from[property].r, this.to[property].r, this.duration);
								g = Tween.easeOutQuad(t, this.from[property].g, this.to[property].g, this.duration);
								b = Tween.easeOutQuad(t, this.from[property].b, this.to[property].b, this.duration);
								break;
							case "easeinout":
								r = Tween.easeInOutQuad(t, this.from[property].r, this.to[property].r, this.duration);
								g = Tween.easeInOutQuad(t, this.from[property].g, this.to[property].g, this.duration);
								b = Tween.easeInOutQuad(t, this.from[property].b, this.to[property].b, this.duration);
								break;
							case "easeinelastic":
								r = Tween.easeInElastic(t, this.from[property].r, this.to[property].r, this.duration);
								g = Tween.easeInElastic(t, this.from[property].g, this.to[property].g, this.duration);
								b = Tween.easeInElastic(t, this.from[property].b, this.to[property].b, this.duration);
								break;
							case "easeoutelastic":
								r = Tween.easeOutElastic(t, this.from[property].r, this.to[property].r, this.duration);
								g = Tween.easeOutElastic(t, this.from[property].g, this.to[property].g, this.duration);
								b = Tween.easeOutElastic(t, this.from[property].b, this.to[property].b, this.duration);
								break;
							default:
								r = Tween.easeInOutElastic(t, this.from[property].r, this.to[property].r, this.duration);
								g = Tween.easeInOutElastic(t, this.from[property].g, this.to[property].g, this.duration);
								b = Tween.easeInOutElastic(t, this.from[property].b, this.to[property].b, this.duration);
						}
						if (Number.isNaN(r)) r = 0;
						if (Number.isNaN(g)) g = 0;
						if (Number.isNaN(b)) b = 0;
						this.actor[property] = `rgb(${r}, ${g}, ${b})`;
					}
				}
				if (t >= this.duration) this.status = "complete";
			}
		}
		animate(properties, duration = 1, tween = false) {
			return this.actor.animate(properties, duration, tween, true);
		}
		grow(amount, duration = 1, tween = false) {
			return this.actor.grow(amount, duration, tween, true);
		}
		shrink(amount, duration = 1, tween = false) {
			return this.actor.shrink(amount, duration, tween, true);
		}
		moveTo(x, y, duration = 1, tween = false) {
			return this.actor.moveTo(x, y, duration, tween, true);
		}
		move(x, y, duration = 1, tween = false) {
			return this.actor.move(x, y, duration, tween, true);
		}
		fade(opacity, duration = 1, tween = "easeinout") {
			return this.actor.fade(opacity, duration, tween, true);
		}
		fadeIn(duration = 1, tween = "easeinout") {
			return this.actor.fadeIn(duration, tween, true);
		}
		fadeOut(duration = 1, tween = "easeinout") {
			return this.actor.fadeOut(duration, tween, true);
		}
		repeat(count = -1) {
			this.actor.animationRepeat = count;
		}
		async wait() {
			await new Promise((resolve) => {
				this.actor.onAnimationsComplete = resolve;
			});
		}
	};
	//#endregion
	//#region src/core/math.js
	/**
	* Return a random number.
	*
	* @constructor
	* @param {int} a - Minimum value
	* @param {int} b - Maximum value
	*/
	function random(a, b) {
		if (typeof a == "undefined" && typeof b == "undefined") return Math.random();
		if (typeof b == "undefined") return Math.round(Math.random() * a);
		return Math.round(Math.random() * (b - a) + a);
	}
	/**
	* Sine function
	* 
	* @param {Number} angle - Angle in degrees
	* @return {Number} Sine of the angle
	*/
	function sin(angle) {
		return Math.sin(degreesToRadians(angle));
	}
	/**
	* Cosine function
	* 
	* @param {Number} angle - Angle in degrees
	* @return {Number} Cosine of the angle
	*/
	function cos(angle) {
		return Math.cos(degreesToRadians(angle));
	}
	/**
	* Tangent function
	* 
	* @param {Number} angle - Angle in degrees
	* @return {Number} Tangent of the angle
	*/
	function tan(angle) {
		return Math.tan(degreesToRadians(angle));
	}
	/**
	* Arc sine function
	* 
	* @param {Number} value - Value
	* @return {Number} Angle in radians
	*/
	function asin(value) {
		return radiansToDegrees(Math.asin(value));
	}
	/**
	* Arc cosine function
	* 
	* @param {Number} value - Value
	* @return {Number} Angle in radians
	*/
	function acos(value) {
		return radiansToDegrees(Math.acos(value));
	}
	/**
	* Arc tangent function
	* 
	* @param {Number} value - Slope
	* @return {Number} Angle in degrees
	*/
	function atan(value) {
		if (Number.isNaN(value)) return 0;
		return radiansToDegrees(Math.atan(value));
	}
	/**
	* Convert degrees to radians
	*
	* @param {Number} deg - Angle in degrees
	* @return {Number} Angle in radians
	*/
	function degreesToRadians(deg) {
		return deg * (Math.PI / 180);
	}
	/**
	* Convert degrees to radians
	*
	* @param {Number} rad - Angle in radians
	* @return {Number} Angle in degrees
	*/
	function radiansToDegrees(rad) {
		return rad * (180 / Math.PI);
	}
	//#endregion
	//#region node_modules/matter-js/build/matter.js
	var require_matter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/*!
		* matter-js 0.19.0 by @liabru
		* http://brm.io/matter-js/
		* License MIT
		* 
		* The MIT License (MIT)
		* 
		* Copyright (c) Liam Brummitt and contributors.
		* 
		* Permission is hereby granted, free of charge, to any person obtaining a copy
		* of this software and associated documentation files (the "Software"), to deal
		* in the Software without restriction, including without limitation the rights
		* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		* copies of the Software, and to permit persons to whom the Software is
		* furnished to do so, subject to the following conditions:
		* 
		* The above copyright notice and this permission notice shall be included in
		* all copies or substantial portions of the Software.
		* 
		* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		* THE SOFTWARE.
		*/
		(function webpackUniversalModuleDefinition(root, factory) {
			if (typeof exports === "object" && typeof module === "object") module.exports = factory();
			else if (typeof define === "function" && define.amd) define("Matter", [], factory);
			else if (typeof exports === "object") exports["Matter"] = factory();
			else root["Matter"] = factory();
		})(exports, function() {
			return (function(modules) {
				var installedModules = {};
				function __webpack_require__(moduleId) {
					if (installedModules[moduleId]) return installedModules[moduleId].exports;
					var module$7 = installedModules[moduleId] = {
						i: moduleId,
						l: false,
						exports: {}
					};
					modules[moduleId].call(module$7.exports, module$7, module$7.exports, __webpack_require__);
					module$7.l = true;
					return module$7.exports;
				}
				__webpack_require__.m = modules;
				__webpack_require__.c = installedModules;
				__webpack_require__.d = function(exports$1, name, getter) {
					if (!__webpack_require__.o(exports$1, name)) Object.defineProperty(exports$1, name, {
						enumerable: true,
						get: getter
					});
				};
				__webpack_require__.r = function(exports$2) {
					if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports$2, Symbol.toStringTag, { value: "Module" });
					Object.defineProperty(exports$2, "__esModule", { value: true });
				};
				__webpack_require__.t = function(value, mode) {
					if (mode & 1) value = __webpack_require__(value);
					if (mode & 8) return value;
					if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
					var ns = Object.create(null);
					__webpack_require__.r(ns);
					Object.defineProperty(ns, "default", {
						enumerable: true,
						value
					});
					if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
						return value[key];
					}.bind(null, key));
					return ns;
				};
				__webpack_require__.n = function(module$8) {
					var getter = module$8 && module$8.__esModule ? function getDefault() {
						return module$8["default"];
					} : function getModuleExports() {
						return module$8;
					};
					__webpack_require__.d(getter, "a", getter);
					return getter;
				};
				__webpack_require__.o = function(object, property) {
					return Object.prototype.hasOwnProperty.call(object, property);
				};
				__webpack_require__.p = "";
				return __webpack_require__(__webpack_require__.s = 20);
			})([
				(function(module$9, exports$3) {
					/**
					* The `Matter.Common` module contains utility functions that are common to all modules.
					*
					* @class Common
					*/
					var Common = {};
					module$9.exports = Common;
					(function() {
						Common._baseDelta = 1e3 / 60;
						Common._nextId = 0;
						Common._seed = 0;
						Common._nowStartTime = +/* @__PURE__ */ new Date();
						Common._warnedOnce = {};
						Common._decomp = null;
						/**
						* Extends the object in the first argument using the object in the second argument.
						* @method extend
						* @param {} obj
						* @param {boolean} deep
						* @return {} obj extended
						*/
						Common.extend = function(obj, deep) {
							var argsStart, deepClone;
							if (typeof deep === "boolean") {
								argsStart = 2;
								deepClone = deep;
							} else {
								argsStart = 1;
								deepClone = true;
							}
							for (var i = argsStart; i < arguments.length; i++) {
								var source = arguments[i];
								if (source) for (var prop in source) if (deepClone && source[prop] && source[prop].constructor === Object) {
									if (!obj[prop] || obj[prop].constructor === Object) {
										obj[prop] = obj[prop] || {};
										Common.extend(obj[prop], deepClone, source[prop]);
									} else obj[prop] = source[prop];
								} else obj[prop] = source[prop];
							}
							return obj;
						};
						/**
						* Creates a new clone of the object, if deep is true references will also be cloned.
						* @method clone
						* @param {} obj
						* @param {bool} deep
						* @return {} obj cloned
						*/
						Common.clone = function(obj, deep) {
							return Common.extend({}, deep, obj);
						};
						/**
						* Returns the list of keys for the given object.
						* @method keys
						* @param {} obj
						* @return {string[]} keys
						*/
						Common.keys = function(obj) {
							if (Object.keys) return Object.keys(obj);
							var keys = [];
							for (var key in obj) keys.push(key);
							return keys;
						};
						/**
						* Returns the list of values for the given object.
						* @method values
						* @param {} obj
						* @return {array} Array of the objects property values
						*/
						Common.values = function(obj) {
							var values = [];
							if (Object.keys) {
								var keys = Object.keys(obj);
								for (var i = 0; i < keys.length; i++) values.push(obj[keys[i]]);
								return values;
							}
							for (var key in obj) values.push(obj[key]);
							return values;
						};
						/**
						* Gets a value from `base` relative to the `path` string.
						* @method get
						* @param {} obj The base object
						* @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
						* @param {number} [begin] Path slice begin
						* @param {number} [end] Path slice end
						* @return {} The object at the given path
						*/
						Common.get = function(obj, path, begin, end) {
							path = path.split(".").slice(begin, end);
							for (var i = 0; i < path.length; i += 1) obj = obj[path[i]];
							return obj;
						};
						/**
						* Sets a value on `base` relative to the given `path` string.
						* @method set
						* @param {} obj The base object
						* @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
						* @param {} val The value to set
						* @param {number} [begin] Path slice begin
						* @param {number} [end] Path slice end
						* @return {} Pass through `val` for chaining
						*/
						Common.set = function(obj, path, val, begin, end) {
							var parts = path.split(".").slice(begin, end);
							Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
							return val;
						};
						/**
						* Shuffles the given array in-place.
						* The function uses a seeded random generator.
						* @method shuffle
						* @param {array} array
						* @return {array} array shuffled randomly
						*/
						Common.shuffle = function(array) {
							for (var i = array.length - 1; i > 0; i--) {
								var j = Math.floor(Common.random() * (i + 1));
								var temp = array[i];
								array[i] = array[j];
								array[j] = temp;
							}
							return array;
						};
						/**
						* Randomly chooses a value from a list with equal probability.
						* The function uses a seeded random generator.
						* @method choose
						* @param {array} choices
						* @return {object} A random choice object from the array
						*/
						Common.choose = function(choices) {
							return choices[Math.floor(Common.random() * choices.length)];
						};
						/**
						* Returns true if the object is a HTMLElement, otherwise false.
						* @method isElement
						* @param {object} obj
						* @return {boolean} True if the object is a HTMLElement, otherwise false
						*/
						Common.isElement = function(obj) {
							if (typeof HTMLElement !== "undefined") return obj instanceof HTMLElement;
							return !!(obj && obj.nodeType && obj.nodeName);
						};
						/**
						* Returns true if the object is an array.
						* @method isArray
						* @param {object} obj
						* @return {boolean} True if the object is an array, otherwise false
						*/
						Common.isArray = function(obj) {
							return Object.prototype.toString.call(obj) === "[object Array]";
						};
						/**
						* Returns true if the object is a function.
						* @method isFunction
						* @param {object} obj
						* @return {boolean} True if the object is a function, otherwise false
						*/
						Common.isFunction = function(obj) {
							return typeof obj === "function";
						};
						/**
						* Returns true if the object is a plain object.
						* @method isPlainObject
						* @param {object} obj
						* @return {boolean} True if the object is a plain object, otherwise false
						*/
						Common.isPlainObject = function(obj) {
							return typeof obj === "object" && obj.constructor === Object;
						};
						/**
						* Returns true if the object is a string.
						* @method isString
						* @param {object} obj
						* @return {boolean} True if the object is a string, otherwise false
						*/
						Common.isString = function(obj) {
							return toString.call(obj) === "[object String]";
						};
						/**
						* Returns the given value clamped between a minimum and maximum value.
						* @method clamp
						* @param {number} value
						* @param {number} min
						* @param {number} max
						* @return {number} The value clamped between min and max inclusive
						*/
						Common.clamp = function(value, min, max) {
							if (value < min) return min;
							if (value > max) return max;
							return value;
						};
						/**
						* Returns the sign of the given value.
						* @method sign
						* @param {number} value
						* @return {number} -1 if negative, +1 if 0 or positive
						*/
						Common.sign = function(value) {
							return value < 0 ? -1 : 1;
						};
						/**
						* Returns the current timestamp since the time origin (e.g. from page load).
						* The result is in milliseconds and will use high-resolution timing if available.
						* @method now
						* @return {number} the current timestamp in milliseconds
						*/
						Common.now = function() {
							if (typeof window !== "undefined" && window.performance) {
								if (window.performance.now) return window.performance.now();
								else if (window.performance.webkitNow) return window.performance.webkitNow();
							}
							if (Date.now) return Date.now();
							return /* @__PURE__ */ new Date() - Common._nowStartTime;
						};
						/**
						* Returns a random value between a minimum and a maximum value inclusive.
						* The function uses a seeded random generator.
						* @method random
						* @param {number} min
						* @param {number} max
						* @return {number} A random number between min and max inclusive
						*/
						Common.random = function(min, max) {
							min = typeof min !== "undefined" ? min : 0;
							max = typeof max !== "undefined" ? max : 1;
							return min + _seededRandom() * (max - min);
						};
						var _seededRandom = function() {
							Common._seed = (Common._seed * 9301 + 49297) % 233280;
							return Common._seed / 233280;
						};
						/**
						* Converts a CSS hex colour string into an integer.
						* @method colorToNumber
						* @param {string} colorString
						* @return {number} An integer representing the CSS hex string
						*/
						Common.colorToNumber = function(colorString) {
							colorString = colorString.replace("#", "");
							if (colorString.length == 3) colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
							return parseInt(colorString, 16);
						};
						/**
						* The console logging level to use, where each level includes all levels above and excludes the levels below.
						* The default level is 'debug' which shows all console messages.  
						*
						* Possible level values are:
						* - 0 = None
						* - 1 = Debug
						* - 2 = Info
						* - 3 = Warn
						* - 4 = Error
						* @static
						* @property logLevel
						* @type {Number}
						* @default 1
						*/
						Common.logLevel = 1;
						/**
						* Shows a `console.log` message only if the current `Common.logLevel` allows it.
						* The message will be prefixed with 'matter-js' to make it easily identifiable.
						* @method log
						* @param ...objs {} The objects to log.
						*/
						Common.log = function() {
							if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
						};
						/**
						* Shows a `console.info` message only if the current `Common.logLevel` allows it.
						* The message will be prefixed with 'matter-js' to make it easily identifiable.
						* @method info
						* @param ...objs {} The objects to log.
						*/
						Common.info = function() {
							if (console && Common.logLevel > 0 && Common.logLevel <= 2) console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
						};
						/**
						* Shows a `console.warn` message only if the current `Common.logLevel` allows it.
						* The message will be prefixed with 'matter-js' to make it easily identifiable.
						* @method warn
						* @param ...objs {} The objects to log.
						*/
						Common.warn = function() {
							if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
						};
						/**
						* Uses `Common.warn` to log the given message one time only.
						* @method warnOnce
						* @param ...objs {} The objects to log.
						*/
						Common.warnOnce = function() {
							var message = Array.prototype.slice.call(arguments).join(" ");
							if (!Common._warnedOnce[message]) {
								Common.warn(message);
								Common._warnedOnce[message] = true;
							}
						};
						/**
						* Shows a deprecated console warning when the function on the given object is called.
						* The target function will be replaced with a new function that first shows the warning
						* and then calls the original function.
						* @method deprecated
						* @param {object} obj The object or module
						* @param {string} name The property name of the function on obj
						* @param {string} warning The one-time message to show if the function is called
						*/
						Common.deprecated = function(obj, prop, warning) {
							obj[prop] = Common.chain(function() {
								Common.warnOnce("\uD83D\uDD05 deprecated \uD83D\uDD05", warning);
							}, obj[prop]);
						};
						/**
						* Returns the next unique sequential ID.
						* @method nextId
						* @return {Number} Unique sequential ID
						*/
						Common.nextId = function() {
							return Common._nextId++;
						};
						/**
						* A cross browser compatible indexOf implementation.
						* @method indexOf
						* @param {array} haystack
						* @param {object} needle
						* @return {number} The position of needle in haystack, otherwise -1.
						*/
						Common.indexOf = function(haystack, needle) {
							if (haystack.indexOf) return haystack.indexOf(needle);
							for (var i = 0; i < haystack.length; i++) if (haystack[i] === needle) return i;
							return -1;
						};
						/**
						* A cross browser compatible array map implementation.
						* @method map
						* @param {array} list
						* @param {function} func
						* @return {array} Values from list transformed by func.
						*/
						Common.map = function(list, func) {
							if (list.map) return list.map(func);
							var mapped = [];
							for (var i = 0; i < list.length; i += 1) mapped.push(func(list[i]));
							return mapped;
						};
						/**
						* Takes a directed graph and returns the partially ordered set of vertices in topological order.
						* Circular dependencies are allowed.
						* @method topologicalSort
						* @param {object} graph
						* @return {array} Partially ordered set of vertices in topological order.
						*/
						Common.topologicalSort = function(graph) {
							var result = [], visited = [], temp = [];
							for (var node in graph) if (!visited[node] && !temp[node]) Common._topologicalSort(node, visited, temp, graph, result);
							return result;
						};
						Common._topologicalSort = function(node, visited, temp, graph, result) {
							var neighbors = graph[node] || [];
							temp[node] = true;
							for (var i = 0; i < neighbors.length; i += 1) {
								var neighbor = neighbors[i];
								if (temp[neighbor]) continue;
								if (!visited[neighbor]) Common._topologicalSort(neighbor, visited, temp, graph, result);
							}
							temp[node] = false;
							visited[node] = true;
							result.push(node);
						};
						/**
						* Takes _n_ functions as arguments and returns a new function that calls them in order.
						* The arguments applied when calling the new function will also be applied to every function passed.
						* The value of `this` refers to the last value returned in the chain that was not `undefined`.
						* Therefore if a passed function does not return a value, the previously returned value is maintained.
						* After all passed functions have been called the new function returns the last returned value (if any).
						* If any of the passed functions are a chain, then the chain will be flattened.
						* @method chain
						* @param ...funcs {function} The functions to chain.
						* @return {function} A new function that calls the passed functions in order.
						*/
						Common.chain = function() {
							var funcs = [];
							for (var i = 0; i < arguments.length; i += 1) {
								var func = arguments[i];
								if (func._chained) funcs.push.apply(funcs, func._chained);
								else funcs.push(func);
							}
							var chain = function() {
								var lastResult, args = new Array(arguments.length);
								for (var i = 0, l = arguments.length; i < l; i++) args[i] = arguments[i];
								for (i = 0; i < funcs.length; i += 1) {
									var result = funcs[i].apply(lastResult, args);
									if (typeof result !== "undefined") lastResult = result;
								}
								return lastResult;
							};
							chain._chained = funcs;
							return chain;
						};
						/**
						* Chains a function to excute before the original function on the given `path` relative to `base`.
						* See also docs for `Common.chain`.
						* @method chainPathBefore
						* @param {} base The base object
						* @param {string} path The path relative to `base`
						* @param {function} func The function to chain before the original
						* @return {function} The chained function that replaced the original
						*/
						Common.chainPathBefore = function(base, path, func) {
							return Common.set(base, path, Common.chain(func, Common.get(base, path)));
						};
						/**
						* Chains a function to excute after the original function on the given `path` relative to `base`.
						* See also docs for `Common.chain`.
						* @method chainPathAfter
						* @param {} base The base object
						* @param {string} path The path relative to `base`
						* @param {function} func The function to chain after the original
						* @return {function} The chained function that replaced the original
						*/
						Common.chainPathAfter = function(base, path, func) {
							return Common.set(base, path, Common.chain(Common.get(base, path), func));
						};
						/**
						* Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
						* concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
						* @method setDecomp
						* @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
						*/
						Common.setDecomp = function(decomp) {
							Common._decomp = decomp;
						};
						/**
						* Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
						* otherwise returns the global `decomp` if set.
						* @method getDecomp
						* @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
						*/
						Common.getDecomp = function() {
							var decomp = Common._decomp;
							try {
								if (!decomp && typeof window !== "undefined") decomp = window.decomp;
								if (!decomp && typeof global !== "undefined") decomp = global.decomp;
							} catch (e) {
								decomp = null;
							}
							return decomp;
						};
					})();
				}),
				(function(module$10, exports$4) {
					/**
					* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
					*
					* @class Bounds
					*/
					var Bounds = {};
					module$10.exports = Bounds;
					(function() {
						/**
						* Creates a new axis-aligned bounding box (AABB) for the given vertices.
						* @method create
						* @param {vertices} vertices
						* @return {bounds} A new bounds object
						*/
						Bounds.create = function(vertices) {
							var bounds = {
								min: {
									x: 0,
									y: 0
								},
								max: {
									x: 0,
									y: 0
								}
							};
							if (vertices) Bounds.update(bounds, vertices);
							return bounds;
						};
						/**
						* Updates bounds using the given vertices and extends the bounds given a velocity.
						* @method update
						* @param {bounds} bounds
						* @param {vertices} vertices
						* @param {vector} velocity
						*/
						Bounds.update = function(bounds, vertices, velocity) {
							bounds.min.x = Infinity;
							bounds.max.x = -Infinity;
							bounds.min.y = Infinity;
							bounds.max.y = -Infinity;
							for (var i = 0; i < vertices.length; i++) {
								var vertex = vertices[i];
								if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
								if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
								if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
								if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
							}
							if (velocity) {
								if (velocity.x > 0) bounds.max.x += velocity.x;
								else bounds.min.x += velocity.x;
								if (velocity.y > 0) bounds.max.y += velocity.y;
								else bounds.min.y += velocity.y;
							}
						};
						/**
						* Returns true if the bounds contains the given point.
						* @method contains
						* @param {bounds} bounds
						* @param {vector} point
						* @return {boolean} True if the bounds contain the point, otherwise false
						*/
						Bounds.contains = function(bounds, point) {
							return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
						};
						/**
						* Returns true if the two bounds intersect.
						* @method overlaps
						* @param {bounds} boundsA
						* @param {bounds} boundsB
						* @return {boolean} True if the bounds overlap, otherwise false
						*/
						Bounds.overlaps = function(boundsA, boundsB) {
							return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
						};
						/**
						* Translates the bounds by the given vector.
						* @method translate
						* @param {bounds} bounds
						* @param {vector} vector
						*/
						Bounds.translate = function(bounds, vector) {
							bounds.min.x += vector.x;
							bounds.max.x += vector.x;
							bounds.min.y += vector.y;
							bounds.max.y += vector.y;
						};
						/**
						* Shifts the bounds to the given position.
						* @method shift
						* @param {bounds} bounds
						* @param {vector} position
						*/
						Bounds.shift = function(bounds, position) {
							var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
							bounds.min.x = position.x;
							bounds.max.x = position.x + deltaX;
							bounds.min.y = position.y;
							bounds.max.y = position.y + deltaY;
						};
					})();
				}),
				(function(module$11, exports$5) {
					/**
					* The `Matter.Vector` module contains methods for creating and manipulating vectors.
					* Vectors are the basis of all the geometry related operations in the engine.
					* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Vector
					*/
					var Vector = {};
					module$11.exports = Vector;
					(function() {
						/**
						* Creates a new vector.
						* @method create
						* @param {number} x
						* @param {number} y
						* @return {vector} A new vector
						*/
						Vector.create = function(x, y) {
							return {
								x: x || 0,
								y: y || 0
							};
						};
						/**
						* Returns a new vector with `x` and `y` copied from the given `vector`.
						* @method clone
						* @param {vector} vector
						* @return {vector} A new cloned vector
						*/
						Vector.clone = function(vector) {
							return {
								x: vector.x,
								y: vector.y
							};
						};
						/**
						* Returns the magnitude (length) of a vector.
						* @method magnitude
						* @param {vector} vector
						* @return {number} The magnitude of the vector
						*/
						Vector.magnitude = function(vector) {
							return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
						};
						/**
						* Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
						* @method magnitudeSquared
						* @param {vector} vector
						* @return {number} The squared magnitude of the vector
						*/
						Vector.magnitudeSquared = function(vector) {
							return vector.x * vector.x + vector.y * vector.y;
						};
						/**
						* Rotates the vector about (0, 0) by specified angle.
						* @method rotate
						* @param {vector} vector
						* @param {number} angle
						* @param {vector} [output]
						* @return {vector} The vector rotated about (0, 0)
						*/
						Vector.rotate = function(vector, angle, output) {
							var cos = Math.cos(angle), sin = Math.sin(angle);
							if (!output) output = {};
							var x = vector.x * cos - vector.y * sin;
							output.y = vector.x * sin + vector.y * cos;
							output.x = x;
							return output;
						};
						/**
						* Rotates the vector about a specified point by specified angle.
						* @method rotateAbout
						* @param {vector} vector
						* @param {number} angle
						* @param {vector} point
						* @param {vector} [output]
						* @return {vector} A new vector rotated about the point
						*/
						Vector.rotateAbout = function(vector, angle, point, output) {
							var cos = Math.cos(angle), sin = Math.sin(angle);
							if (!output) output = {};
							var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
							output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
							output.x = x;
							return output;
						};
						/**
						* Normalises a vector (such that its magnitude is `1`).
						* @method normalise
						* @param {vector} vector
						* @return {vector} A new vector normalised
						*/
						Vector.normalise = function(vector) {
							var magnitude = Vector.magnitude(vector);
							if (magnitude === 0) return {
								x: 0,
								y: 0
							};
							return {
								x: vector.x / magnitude,
								y: vector.y / magnitude
							};
						};
						/**
						* Returns the dot-product of two vectors.
						* @method dot
						* @param {vector} vectorA
						* @param {vector} vectorB
						* @return {number} The dot product of the two vectors
						*/
						Vector.dot = function(vectorA, vectorB) {
							return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
						};
						/**
						* Returns the cross-product of two vectors.
						* @method cross
						* @param {vector} vectorA
						* @param {vector} vectorB
						* @return {number} The cross product of the two vectors
						*/
						Vector.cross = function(vectorA, vectorB) {
							return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
						};
						/**
						* Returns the cross-product of three vectors.
						* @method cross3
						* @param {vector} vectorA
						* @param {vector} vectorB
						* @param {vector} vectorC
						* @return {number} The cross product of the three vectors
						*/
						Vector.cross3 = function(vectorA, vectorB, vectorC) {
							return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
						};
						/**
						* Adds the two vectors.
						* @method add
						* @param {vector} vectorA
						* @param {vector} vectorB
						* @param {vector} [output]
						* @return {vector} A new vector of vectorA and vectorB added
						*/
						Vector.add = function(vectorA, vectorB, output) {
							if (!output) output = {};
							output.x = vectorA.x + vectorB.x;
							output.y = vectorA.y + vectorB.y;
							return output;
						};
						/**
						* Subtracts the two vectors.
						* @method sub
						* @param {vector} vectorA
						* @param {vector} vectorB
						* @param {vector} [output]
						* @return {vector} A new vector of vectorA and vectorB subtracted
						*/
						Vector.sub = function(vectorA, vectorB, output) {
							if (!output) output = {};
							output.x = vectorA.x - vectorB.x;
							output.y = vectorA.y - vectorB.y;
							return output;
						};
						/**
						* Multiplies a vector and a scalar.
						* @method mult
						* @param {vector} vector
						* @param {number} scalar
						* @return {vector} A new vector multiplied by scalar
						*/
						Vector.mult = function(vector, scalar) {
							return {
								x: vector.x * scalar,
								y: vector.y * scalar
							};
						};
						/**
						* Divides a vector and a scalar.
						* @method div
						* @param {vector} vector
						* @param {number} scalar
						* @return {vector} A new vector divided by scalar
						*/
						Vector.div = function(vector, scalar) {
							return {
								x: vector.x / scalar,
								y: vector.y / scalar
							};
						};
						/**
						* Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
						* @method perp
						* @param {vector} vector
						* @param {bool} [negate=false]
						* @return {vector} The perpendicular vector
						*/
						Vector.perp = function(vector, negate) {
							negate = negate === true ? -1 : 1;
							return {
								x: negate * -vector.y,
								y: negate * vector.x
							};
						};
						/**
						* Negates both components of a vector such that it points in the opposite direction.
						* @method neg
						* @param {vector} vector
						* @return {vector} The negated vector
						*/
						Vector.neg = function(vector) {
							return {
								x: -vector.x,
								y: -vector.y
							};
						};
						/**
						* Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
						* @method angle
						* @param {vector} vectorA
						* @param {vector} vectorB
						* @return {number} The angle in radians
						*/
						Vector.angle = function(vectorA, vectorB) {
							return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
						};
						/**
						* Temporary vector pool (not thread-safe).
						* @property _temp
						* @type {vector[]}
						* @private
						*/
						Vector._temp = [
							Vector.create(),
							Vector.create(),
							Vector.create(),
							Vector.create(),
							Vector.create(),
							Vector.create()
						];
					})();
				}),
				(function(module$12, exports$6, __webpack_require__) {
					/**
					* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
					* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
					* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Vertices
					*/
					var Vertices = {};
					module$12.exports = Vertices;
					var Vector = __webpack_require__(2);
					var Common = __webpack_require__(0);
					(function() {
						/**
						* Creates a new set of `Matter.Body` compatible vertices.
						* The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
						*
						*     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
						*
						* The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
						* but with some additional references required for efficient collision detection routines.
						*
						* Vertices must be specified in clockwise order.
						*
						* Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
						*
						* @method create
						* @param {vector[]} points
						* @param {body} body
						*/
						Vertices.create = function(points, body) {
							var vertices = [];
							for (var i = 0; i < points.length; i++) {
								var point = points[i], vertex = {
									x: point.x,
									y: point.y,
									index: i,
									body,
									isInternal: false
								};
								vertices.push(vertex);
							}
							return vertices;
						};
						/**
						* Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
						* into a `Matter.Vertices` object for the given `Matter.Body`.
						* For parsing SVG paths, see `Svg.pathToVertices`.
						* @method fromPath
						* @param {string} path
						* @param {body} body
						* @return {vertices} vertices
						*/
						Vertices.fromPath = function(path, body) {
							var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, points = [];
							path.replace(pathPattern, function(match, x, y) {
								points.push({
									x: parseFloat(x),
									y: parseFloat(y)
								});
							});
							return Vertices.create(points, body);
						};
						/**
						* Returns the centre (centroid) of the set of vertices.
						* @method centre
						* @param {vertices} vertices
						* @return {vector} The centre point
						*/
						Vertices.centre = function(vertices) {
							var area = Vertices.area(vertices, true), centre = {
								x: 0,
								y: 0
							}, cross, temp, j;
							for (var i = 0; i < vertices.length; i++) {
								j = (i + 1) % vertices.length;
								cross = Vector.cross(vertices[i], vertices[j]);
								temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
								centre = Vector.add(centre, temp);
							}
							return Vector.div(centre, 6 * area);
						};
						/**
						* Returns the average (mean) of the set of vertices.
						* @method mean
						* @param {vertices} vertices
						* @return {vector} The average point
						*/
						Vertices.mean = function(vertices) {
							var average = {
								x: 0,
								y: 0
							};
							for (var i = 0; i < vertices.length; i++) {
								average.x += vertices[i].x;
								average.y += vertices[i].y;
							}
							return Vector.div(average, vertices.length);
						};
						/**
						* Returns the area of the set of vertices.
						* @method area
						* @param {vertices} vertices
						* @param {bool} signed
						* @return {number} The area
						*/
						Vertices.area = function(vertices, signed) {
							var area = 0, j = vertices.length - 1;
							for (var i = 0; i < vertices.length; i++) {
								area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
								j = i;
							}
							if (signed) return area / 2;
							return Math.abs(area) / 2;
						};
						/**
						* Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
						* @method inertia
						* @param {vertices} vertices
						* @param {number} mass
						* @return {number} The polygon's moment of inertia
						*/
						Vertices.inertia = function(vertices, mass) {
							var numerator = 0, denominator = 0, v = vertices, cross, j;
							for (var n = 0; n < v.length; n++) {
								j = (n + 1) % v.length;
								cross = Math.abs(Vector.cross(v[j], v[n]));
								numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
								denominator += cross;
							}
							return mass / 6 * (numerator / denominator);
						};
						/**
						* Translates the set of vertices in-place.
						* @method translate
						* @param {vertices} vertices
						* @param {vector} vector
						* @param {number} scalar
						*/
						Vertices.translate = function(vertices, vector, scalar) {
							scalar = typeof scalar !== "undefined" ? scalar : 1;
							var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
							for (i = 0; i < verticesLength; i++) {
								vertices[i].x += translateX;
								vertices[i].y += translateY;
							}
							return vertices;
						};
						/**
						* Rotates the set of vertices in-place.
						* @method rotate
						* @param {vertices} vertices
						* @param {number} angle
						* @param {vector} point
						*/
						Vertices.rotate = function(vertices, angle, point) {
							if (angle === 0) return;
							var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
							for (i = 0; i < verticesLength; i++) {
								vertex = vertices[i];
								dx = vertex.x - pointX;
								dy = vertex.y - pointY;
								vertex.x = pointX + (dx * cos - dy * sin);
								vertex.y = pointY + (dx * sin + dy * cos);
							}
							return vertices;
						};
						/**
						* Returns `true` if the `point` is inside the set of `vertices`.
						* @method contains
						* @param {vertices} vertices
						* @param {vector} point
						* @return {boolean} True if the vertices contains point, otherwise false
						*/
						Vertices.contains = function(vertices, point) {
							var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
							for (var i = 0; i < verticesLength; i++) {
								nextVertex = vertices[i];
								if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) return false;
								vertex = nextVertex;
							}
							return true;
						};
						/**
						* Scales the vertices from a point (default is centre) in-place.
						* @method scale
						* @param {vertices} vertices
						* @param {number} scaleX
						* @param {number} scaleY
						* @param {vector} point
						*/
						Vertices.scale = function(vertices, scaleX, scaleY, point) {
							if (scaleX === 1 && scaleY === 1) return vertices;
							point = point || Vertices.centre(vertices);
							var vertex, delta;
							for (var i = 0; i < vertices.length; i++) {
								vertex = vertices[i];
								delta = Vector.sub(vertex, point);
								vertices[i].x = point.x + delta.x * scaleX;
								vertices[i].y = point.y + delta.y * scaleY;
							}
							return vertices;
						};
						/**
						* Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
						* The radius parameter is a single number or an array to specify the radius for each vertex.
						* @method chamfer
						* @param {vertices} vertices
						* @param {number[]} radius
						* @param {number} quality
						* @param {number} qualityMin
						* @param {number} qualityMax
						*/
						Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
							if (typeof radius === "number") radius = [radius];
							else radius = radius || [8];
							quality = typeof quality !== "undefined" ? quality : -1;
							qualityMin = qualityMin || 2;
							qualityMax = qualityMax || 14;
							var newVertices = [];
							for (var i = 0; i < vertices.length; i++) {
								var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
								if (currentRadius === 0) {
									newVertices.push(vertex);
									continue;
								}
								var prevNormal = Vector.normalise({
									x: vertex.y - prevVertex.y,
									y: prevVertex.x - vertex.x
								});
								var nextNormal = Vector.normalise({
									x: nextVertex.y - vertex.y,
									y: vertex.x - nextVertex.x
								});
								var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), .5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
								var precision = quality;
								if (quality === -1) precision = Math.pow(currentRadius, .32) * 1.75;
								precision = Common.clamp(precision, qualityMin, qualityMax);
								if (precision % 2 === 1) precision += 1;
								var theta = Math.acos(Vector.dot(prevNormal, nextNormal)) / precision;
								for (var j = 0; j < precision; j++) newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
							}
							return newVertices;
						};
						/**
						* Sorts the input vertices into clockwise order in place.
						* @method clockwiseSort
						* @param {vertices} vertices
						* @return {vertices} vertices
						*/
						Vertices.clockwiseSort = function(vertices) {
							var centre = Vertices.mean(vertices);
							vertices.sort(function(vertexA, vertexB) {
								return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
							});
							return vertices;
						};
						/**
						* Returns true if the vertices form a convex shape (vertices must be in clockwise order).
						* @method isConvex
						* @param {vertices} vertices
						* @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
						*/
						Vertices.isConvex = function(vertices) {
							var flag = 0, n = vertices.length, i, j, k, z;
							if (n < 3) return null;
							for (i = 0; i < n; i++) {
								j = (i + 1) % n;
								k = (i + 2) % n;
								z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
								z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
								if (z < 0) flag |= 1;
								else if (z > 0) flag |= 2;
								if (flag === 3) return false;
							}
							if (flag !== 0) return true;
							else return null;
						};
						/**
						* Returns the convex hull of the input vertices as a new array of points.
						* @method hull
						* @param {vertices} vertices
						* @return [vertex] vertices
						*/
						Vertices.hull = function(vertices) {
							var upper = [], lower = [], vertex, i;
							vertices = vertices.slice(0);
							vertices.sort(function(vertexA, vertexB) {
								var dx = vertexA.x - vertexB.x;
								return dx !== 0 ? dx : vertexA.y - vertexB.y;
							});
							for (i = 0; i < vertices.length; i += 1) {
								vertex = vertices[i];
								while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) lower.pop();
								lower.push(vertex);
							}
							for (i = vertices.length - 1; i >= 0; i -= 1) {
								vertex = vertices[i];
								while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) upper.pop();
								upper.push(vertex);
							}
							upper.pop();
							lower.pop();
							return upper.concat(lower);
						};
					})();
				}),
				(function(module$13, exports$7, __webpack_require__) {
					/**
					* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
					* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					
					* @class Body
					*/
					var Body = {};
					module$13.exports = Body;
					var Vertices = __webpack_require__(3);
					var Vector = __webpack_require__(2);
					var Sleeping = __webpack_require__(7);
					var Common = __webpack_require__(0);
					var Bounds = __webpack_require__(1);
					var Axes = __webpack_require__(11);
					(function() {
						Body._timeCorrection = true;
						Body._inertiaScale = 4;
						Body._nextCollidingGroupId = 1;
						Body._nextNonCollidingGroupId = -1;
						Body._nextCategory = 1;
						Body._baseDelta = 1e3 / 60;
						/**
						* Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
						* All properties have default values, and many are pre-calculated automatically based on other properties.
						* Vertices must be specified in clockwise order.
						* See the properties section below for detailed information on what you can pass via the `options` object.
						* @method create
						* @param {} options
						* @return {body} body
						*/
						Body.create = function(options) {
							var defaults = {
								id: Common.nextId(),
								type: "body",
								label: "Body",
								parts: [],
								plugin: {},
								angle: 0,
								vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
								position: {
									x: 0,
									y: 0
								},
								force: {
									x: 0,
									y: 0
								},
								torque: 0,
								positionImpulse: {
									x: 0,
									y: 0
								},
								constraintImpulse: {
									x: 0,
									y: 0,
									angle: 0
								},
								totalContacts: 0,
								speed: 0,
								angularSpeed: 0,
								velocity: {
									x: 0,
									y: 0
								},
								angularVelocity: 0,
								isSensor: false,
								isStatic: false,
								isSleeping: false,
								motion: 0,
								sleepThreshold: 60,
								density: .001,
								restitution: 0,
								friction: .1,
								frictionStatic: .5,
								frictionAir: .01,
								collisionFilter: {
									category: 1,
									mask: 4294967295,
									group: 0
								},
								slop: .05,
								timeScale: 1,
								render: {
									visible: true,
									opacity: 1,
									strokeStyle: null,
									fillStyle: null,
									lineWidth: null,
									sprite: {
										xScale: 1,
										yScale: 1,
										xOffset: 0,
										yOffset: 0
									}
								},
								events: null,
								bounds: null,
								chamfer: null,
								circleRadius: 0,
								positionPrev: null,
								anglePrev: 0,
								parent: null,
								axes: null,
								area: 0,
								mass: 0,
								inertia: 0,
								deltaTime: 1e3 / 60,
								_original: null
							};
							var body = Common.extend(defaults, options);
							_initProperties(body, options);
							return body;
						};
						/**
						* Returns the next unique group index for which bodies will collide.
						* If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
						* See `body.collisionFilter` for more information.
						* @method nextGroup
						* @param {bool} [isNonColliding=false]
						* @return {Number} Unique group index
						*/
						Body.nextGroup = function(isNonColliding) {
							if (isNonColliding) return Body._nextNonCollidingGroupId--;
							return Body._nextCollidingGroupId++;
						};
						/**
						* Returns the next unique category bitfield (starting after the initial default category `0x0001`).
						* There are 32 available. See `body.collisionFilter` for more information.
						* @method nextCategory
						* @return {Number} Unique category bitfield
						*/
						Body.nextCategory = function() {
							Body._nextCategory = Body._nextCategory << 1;
							return Body._nextCategory;
						};
						/**
						* Initialises body properties.
						* @method _initProperties
						* @private
						* @param {body} body
						* @param {} [options]
						*/
						var _initProperties = function(body, options) {
							options = options || {};
							Body.set(body, {
								bounds: body.bounds || Bounds.create(body.vertices),
								positionPrev: body.positionPrev || Vector.clone(body.position),
								anglePrev: body.anglePrev || body.angle,
								vertices: body.vertices,
								parts: body.parts || [body],
								isStatic: body.isStatic,
								isSleeping: body.isSleeping,
								parent: body.parent || body
							});
							Vertices.rotate(body.vertices, body.angle, body.position);
							Axes.rotate(body.axes, body.angle);
							Bounds.update(body.bounds, body.vertices, body.velocity);
							Body.set(body, {
								axes: options.axes || body.axes,
								area: options.area || body.area,
								mass: options.mass || body.mass,
								inertia: options.inertia || body.inertia
							});
							var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose([
								"#f19648",
								"#f5d259",
								"#f55a3c",
								"#063e7b",
								"#ececd1"
							]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
							body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
							body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
							body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
							body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
							body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
						};
						/**
						* Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
						* Prefer to use the actual setter functions in performance critical situations.
						* @method set
						* @param {body} body
						* @param {} settings A property name (or map of properties and values) to set on the body.
						* @param {} value The value to set if `settings` is a single property name.
						*/
						Body.set = function(body, settings, value) {
							var property;
							if (typeof settings === "string") {
								property = settings;
								settings = {};
								settings[property] = value;
							}
							for (property in settings) {
								if (!Object.prototype.hasOwnProperty.call(settings, property)) continue;
								value = settings[property];
								switch (property) {
									case "isStatic":
										Body.setStatic(body, value);
										break;
									case "isSleeping":
										Sleeping.set(body, value);
										break;
									case "mass":
										Body.setMass(body, value);
										break;
									case "density":
										Body.setDensity(body, value);
										break;
									case "inertia":
										Body.setInertia(body, value);
										break;
									case "vertices":
										Body.setVertices(body, value);
										break;
									case "position":
										Body.setPosition(body, value);
										break;
									case "angle":
										Body.setAngle(body, value);
										break;
									case "velocity":
										Body.setVelocity(body, value);
										break;
									case "angularVelocity":
										Body.setAngularVelocity(body, value);
										break;
									case "speed":
										Body.setSpeed(body, value);
										break;
									case "angularSpeed":
										Body.setAngularSpeed(body, value);
										break;
									case "parts":
										Body.setParts(body, value);
										break;
									case "centre":
										Body.setCentre(body, value);
										break;
									default: body[property] = value;
								}
							}
						};
						/**
						* Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
						* @method setStatic
						* @param {body} body
						* @param {bool} isStatic
						*/
						Body.setStatic = function(body, isStatic) {
							for (var i = 0; i < body.parts.length; i++) {
								var part = body.parts[i];
								part.isStatic = isStatic;
								if (isStatic) {
									part._original = {
										restitution: part.restitution,
										friction: part.friction,
										mass: part.mass,
										inertia: part.inertia,
										density: part.density,
										inverseMass: part.inverseMass,
										inverseInertia: part.inverseInertia
									};
									part.restitution = 0;
									part.friction = 1;
									part.mass = part.inertia = part.density = Infinity;
									part.inverseMass = part.inverseInertia = 0;
									part.positionPrev.x = part.position.x;
									part.positionPrev.y = part.position.y;
									part.anglePrev = part.angle;
									part.angularVelocity = 0;
									part.speed = 0;
									part.angularSpeed = 0;
									part.motion = 0;
								} else if (part._original) {
									part.restitution = part._original.restitution;
									part.friction = part._original.friction;
									part.mass = part._original.mass;
									part.inertia = part._original.inertia;
									part.density = part._original.density;
									part.inverseMass = part._original.inverseMass;
									part.inverseInertia = part._original.inverseInertia;
									part._original = null;
								}
							}
						};
						/**
						* Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
						* @method setMass
						* @param {body} body
						* @param {number} mass
						*/
						Body.setMass = function(body, mass) {
							body.inertia = body.inertia / (body.mass / 6) * (mass / 6);
							body.inverseInertia = 1 / body.inertia;
							body.mass = mass;
							body.inverseMass = 1 / body.mass;
							body.density = body.mass / body.area;
						};
						/**
						* Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
						* @method setDensity
						* @param {body} body
						* @param {number} density
						*/
						Body.setDensity = function(body, density) {
							Body.setMass(body, density * body.area);
							body.density = density;
						};
						/**
						* Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
						* Inverse inertia is automatically updated to reflect the change. Mass is not changed.
						* @method setInertia
						* @param {body} body
						* @param {number} inertia
						*/
						Body.setInertia = function(body, inertia) {
							body.inertia = inertia;
							body.inverseInertia = 1 / body.inertia;
						};
						/**
						* Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
						* Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
						* They are then automatically translated to world space based on `body.position`.
						*
						* The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
						* Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
						* 
						* @method setVertices
						* @param {body} body
						* @param {vector[]} vertices
						*/
						Body.setVertices = function(body, vertices) {
							if (vertices[0].body === body) body.vertices = vertices;
							else body.vertices = Vertices.create(vertices, body);
							body.axes = Axes.fromVertices(body.vertices);
							body.area = Vertices.area(body.vertices);
							Body.setMass(body, body.density * body.area);
							var centre = Vertices.centre(body.vertices);
							Vertices.translate(body.vertices, centre, -1);
							Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
							Vertices.translate(body.vertices, body.position);
							Bounds.update(body.bounds, body.vertices, body.velocity);
						};
						/**
						* Sets the parts of the `body` and updates mass, inertia and centroid.
						* Each part will have its parent set to `body`.
						* By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
						* Note that this method will ensure that the first part in `body.parts` will always be the `body`.
						* @method setParts
						* @param {body} body
						* @param {body[]} parts
						* @param {bool} [autoHull=true]
						*/
						Body.setParts = function(body, parts, autoHull) {
							var i;
							parts = parts.slice(0);
							body.parts.length = 0;
							body.parts.push(body);
							body.parent = body;
							for (i = 0; i < parts.length; i++) {
								var part = parts[i];
								if (part !== body) {
									part.parent = body;
									body.parts.push(part);
								}
							}
							if (body.parts.length === 1) return;
							autoHull = typeof autoHull !== "undefined" ? autoHull : true;
							if (autoHull) {
								var vertices = [];
								for (i = 0; i < parts.length; i++) vertices = vertices.concat(parts[i].vertices);
								Vertices.clockwiseSort(vertices);
								var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
								Body.setVertices(body, hull);
								Vertices.translate(body.vertices, hullCentre);
							}
							var total = Body._totalProperties(body);
							body.area = total.area;
							body.parent = body;
							body.position.x = total.centre.x;
							body.position.y = total.centre.y;
							body.positionPrev.x = total.centre.x;
							body.positionPrev.y = total.centre.y;
							Body.setMass(body, total.mass);
							Body.setInertia(body, total.inertia);
							Body.setPosition(body, total.centre);
						};
						/**
						* Set the centre of mass of the body. 
						* The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
						* The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
						* This is equal to moving `body.position` but not the `body.vertices`.
						* Invalid if the `centre` falls outside the body's convex hull.
						* @method setCentre
						* @param {body} body
						* @param {vector} centre
						* @param {bool} relative
						*/
						Body.setCentre = function(body, centre, relative) {
							if (!relative) {
								body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
								body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
								body.position.x = centre.x;
								body.position.y = centre.y;
							} else {
								body.positionPrev.x += centre.x;
								body.positionPrev.y += centre.y;
								body.position.x += centre.x;
								body.position.y += centre.y;
							}
						};
						/**
						* Sets the position of the body. By default velocity is unchanged.
						* If `updateVelocity` is `true` then velocity is inferred from the change in position.
						* @method setPosition
						* @param {body} body
						* @param {vector} position
						* @param {boolean} [updateVelocity=false]
						*/
						Body.setPosition = function(body, position, updateVelocity) {
							var delta = Vector.sub(position, body.position);
							if (updateVelocity) {
								body.positionPrev.x = body.position.x;
								body.positionPrev.y = body.position.y;
								body.velocity.x = delta.x;
								body.velocity.y = delta.y;
								body.speed = Vector.magnitude(delta);
							} else {
								body.positionPrev.x += delta.x;
								body.positionPrev.y += delta.y;
							}
							for (var i = 0; i < body.parts.length; i++) {
								var part = body.parts[i];
								part.position.x += delta.x;
								part.position.y += delta.y;
								Vertices.translate(part.vertices, delta);
								Bounds.update(part.bounds, part.vertices, body.velocity);
							}
						};
						/**
						* Sets the angle of the body. By default angular velocity is unchanged.
						* If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
						* @method setAngle
						* @param {body} body
						* @param {number} angle
						* @param {boolean} [updateVelocity=false]
						*/
						Body.setAngle = function(body, angle, updateVelocity) {
							var delta = angle - body.angle;
							if (updateVelocity) {
								body.anglePrev = body.angle;
								body.angularVelocity = delta;
								body.angularSpeed = Math.abs(delta);
							} else body.anglePrev += delta;
							for (var i = 0; i < body.parts.length; i++) {
								var part = body.parts[i];
								part.angle += delta;
								Vertices.rotate(part.vertices, delta, body.position);
								Axes.rotate(part.axes, delta);
								Bounds.update(part.bounds, part.vertices, body.velocity);
								if (i > 0) Vector.rotateAbout(part.position, delta, body.position, part.position);
							}
						};
						/**
						* Sets the current linear velocity of the body.  
						* Affects body speed.
						* @method setVelocity
						* @param {body} body
						* @param {vector} velocity
						*/
						Body.setVelocity = function(body, velocity) {
							var timeScale = body.deltaTime / Body._baseDelta;
							body.positionPrev.x = body.position.x - velocity.x * timeScale;
							body.positionPrev.y = body.position.y - velocity.y * timeScale;
							body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
							body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
							body.speed = Vector.magnitude(body.velocity);
						};
						/**
						* Gets the current linear velocity of the body.
						* @method getVelocity
						* @param {body} body
						* @return {vector} velocity
						*/
						Body.getVelocity = function(body) {
							var timeScale = Body._baseDelta / body.deltaTime;
							return {
								x: (body.position.x - body.positionPrev.x) * timeScale,
								y: (body.position.y - body.positionPrev.y) * timeScale
							};
						};
						/**
						* Gets the current linear speed of the body.  
						* Equivalent to the magnitude of its velocity.
						* @method getSpeed
						* @param {body} body
						* @return {number} speed
						*/
						Body.getSpeed = function(body) {
							return Vector.magnitude(Body.getVelocity(body));
						};
						/**
						* Sets the current linear speed of the body.  
						* Direction is maintained. Affects body velocity.
						* @method setSpeed
						* @param {body} body
						* @param {number} speed
						*/
						Body.setSpeed = function(body, speed) {
							Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
						};
						/**
						* Sets the current rotational velocity of the body.  
						* Affects body angular speed.
						* @method setAngularVelocity
						* @param {body} body
						* @param {number} velocity
						*/
						Body.setAngularVelocity = function(body, velocity) {
							var timeScale = body.deltaTime / Body._baseDelta;
							body.anglePrev = body.angle - velocity * timeScale;
							body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
							body.angularSpeed = Math.abs(body.angularVelocity);
						};
						/**
						* Gets the current rotational velocity of the body.
						* @method getAngularVelocity
						* @param {body} body
						* @return {number} angular velocity
						*/
						Body.getAngularVelocity = function(body) {
							return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
						};
						/**
						* Gets the current rotational speed of the body.  
						* Equivalent to the magnitude of its angular velocity.
						* @method getAngularSpeed
						* @param {body} body
						* @return {number} angular speed
						*/
						Body.getAngularSpeed = function(body) {
							return Math.abs(Body.getAngularVelocity(body));
						};
						/**
						* Sets the current rotational speed of the body.  
						* Direction is maintained. Affects body angular velocity.
						* @method setAngularSpeed
						* @param {body} body
						* @param {number} speed
						*/
						Body.setAngularSpeed = function(body, speed) {
							Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
						};
						/**
						* Moves a body by a given vector relative to its current position. By default velocity is unchanged.
						* If `updateVelocity` is `true` then velocity is inferred from the change in position.
						* @method translate
						* @param {body} body
						* @param {vector} translation
						* @param {boolean} [updateVelocity=false]
						*/
						Body.translate = function(body, translation, updateVelocity) {
							Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
						};
						/**
						* Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
						* If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
						* @method rotate
						* @param {body} body
						* @param {number} rotation
						* @param {vector} [point]
						* @param {boolean} [updateVelocity=false]
						*/
						Body.rotate = function(body, rotation, point, updateVelocity) {
							if (!point) Body.setAngle(body, body.angle + rotation, updateVelocity);
							else {
								var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
								Body.setPosition(body, {
									x: point.x + (dx * cos - dy * sin),
									y: point.y + (dx * sin + dy * cos)
								}, updateVelocity);
								Body.setAngle(body, body.angle + rotation, updateVelocity);
							}
						};
						/**
						* Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
						* @method scale
						* @param {body} body
						* @param {number} scaleX
						* @param {number} scaleY
						* @param {vector} [point]
						*/
						Body.scale = function(body, scaleX, scaleY, point) {
							var totalArea = 0, totalInertia = 0;
							point = point || body.position;
							for (var i = 0; i < body.parts.length; i++) {
								var part = body.parts[i];
								Vertices.scale(part.vertices, scaleX, scaleY, point);
								part.axes = Axes.fromVertices(part.vertices);
								part.area = Vertices.area(part.vertices);
								Body.setMass(part, body.density * part.area);
								Vertices.translate(part.vertices, {
									x: -part.position.x,
									y: -part.position.y
								});
								Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
								Vertices.translate(part.vertices, {
									x: part.position.x,
									y: part.position.y
								});
								if (i > 0) {
									totalArea += part.area;
									totalInertia += part.inertia;
								}
								part.position.x = point.x + (part.position.x - point.x) * scaleX;
								part.position.y = point.y + (part.position.y - point.y) * scaleY;
								Bounds.update(part.bounds, part.vertices, body.velocity);
							}
							if (body.parts.length > 1) {
								body.area = totalArea;
								if (!body.isStatic) {
									Body.setMass(body, body.density * totalArea);
									Body.setInertia(body, totalInertia);
								}
							}
							if (body.circleRadius) {
								if (scaleX === scaleY) body.circleRadius *= scaleX;
								else body.circleRadius = null;
							}
						};
						/**
						* Performs an update by integrating the equations of motion on the `body`.
						* This is applied every update by `Matter.Engine` automatically.
						* @method update
						* @param {body} body
						* @param {number} [deltaTime=16.666]
						*/
						Body.update = function(body, deltaTime) {
							deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1e3 / 60) * body.timeScale;
							var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
							var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
							body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
							body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
							body.positionPrev.x = body.position.x;
							body.positionPrev.y = body.position.y;
							body.position.x += body.velocity.x;
							body.position.y += body.velocity.y;
							body.deltaTime = deltaTime;
							body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
							body.anglePrev = body.angle;
							body.angle += body.angularVelocity;
							for (var i = 0; i < body.parts.length; i++) {
								var part = body.parts[i];
								Vertices.translate(part.vertices, body.velocity);
								if (i > 0) {
									part.position.x += body.velocity.x;
									part.position.y += body.velocity.y;
								}
								if (body.angularVelocity !== 0) {
									Vertices.rotate(part.vertices, body.angularVelocity, body.position);
									Axes.rotate(part.axes, body.angularVelocity);
									if (i > 0) Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
								}
								Bounds.update(part.bounds, part.vertices, body.velocity);
							}
						};
						/**
						* Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
						* @method updateVelocities
						* @param {body} body
						*/
						Body.updateVelocities = function(body) {
							var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
							bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
							bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
							body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
							body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
							body.angularSpeed = Math.abs(body.angularVelocity);
						};
						/**
						* Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
						* 
						* Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
						* 
						* The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
						* 
						* Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
						* 
						* If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
						* 
						* The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
						* 
						* The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
						* @method applyForce
						* @param {body} body
						* @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
						* @param {vector} force
						*/
						Body.applyForce = function(body, position, force) {
							var offset = {
								x: position.x - body.position.x,
								y: position.y - body.position.y
							};
							body.force.x += force.x;
							body.force.y += force.y;
							body.torque += offset.x * force.y - offset.y * force.x;
						};
						/**
						* Returns the sums of the properties of all compound parts of the parent body.
						* @method _totalProperties
						* @private
						* @param {body} body
						* @return {}
						*/
						Body._totalProperties = function(body) {
							var properties = {
								mass: 0,
								area: 0,
								inertia: 0,
								centre: {
									x: 0,
									y: 0
								}
							};
							for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
								var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
								properties.mass += mass;
								properties.area += part.area;
								properties.inertia += part.inertia;
								properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
							}
							properties.centre = Vector.div(properties.centre, properties.mass);
							return properties;
						};
						/**
						* Fired when a body starts sleeping (where `this` is the body).
						*
						* @event sleepStart
						* @this {body} The body that has started sleeping
						* @param {} event An event object
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when a body ends sleeping (where `this` is the body).
						*
						* @event sleepEnd
						* @this {body} The body that has ended sleeping
						* @param {} event An event object
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
						*
						* @property id
						* @type number
						*/
						/**
						* _Read only_. Set by `Body.create`.
						* 
						* A `String` denoting the type of object.
						*
						* @readOnly
						* @property type
						* @type string
						* @default "body"
						*/
						/**
						* An arbitrary `String` name to help the user identify and manage bodies.
						*
						* @property label
						* @type string
						* @default "Body"
						*/
						/**
						* _Read only_. Use `Body.setParts` to set. 
						* 
						* An array of bodies that make up this body. 
						* The first body in the array must always be a self reference to the current body instance.
						* All bodies in the `parts` array together form a single rigid compound body.
						* Parts are allowed to overlap, have gaps or holes or even form concave bodies.
						* Parts themselves should never be added to a `World`, only the parent body should be.
						* Use `Body.setParts` when setting parts to ensure correct updates of all properties.
						*
						* @readOnly
						* @property parts
						* @type body[]
						*/
						/**
						* An object reserved for storing plugin-specific properties.
						*
						* @property plugin
						* @type {}
						*/
						/**
						* _Read only_. Updated by `Body.setParts`.
						* 
						* A reference to the body that this is a part of. See `body.parts`.
						* This is a self reference if the body is not a part of another body.
						*
						* @readOnly
						* @property parent
						* @type body
						*/
						/**
						* A `Number` specifying the angle of the body, in radians.
						*
						* @property angle
						* @type number
						* @default 0
						*/
						/**
						* _Read only_. Use `Body.setVertices` or `Body.setParts` to set. See also `Bodies.fromVertices`.
						* 
						* An array of `Vector` objects that specify the convex hull of the rigid body.
						* These should be provided about the origin `(0, 0)`. E.g.
						*
						* `[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]`
						* 
						* Vertices must always be convex, in clockwise order and must not contain any duplicate points.
						* 
						* Concave vertices should be decomposed into convex `parts`, see `Bodies.fromVertices` and `Body.setParts`.
						*
						* When set the vertices are translated such that `body.position` is at the centre of mass.
						* Many other body properties are automatically calculated from these vertices when set including `density`, `area` and `inertia`.
						* 
						* The module `Matter.Vertices` contains useful methods for working with vertices.
						*
						* @readOnly
						* @property vertices
						* @type vector[]
						*/
						/**
						* _Read only_. Use `Body.setPosition` to set. 
						* 
						* A `Vector` that specifies the current world-space position of the body.
						* 
						* @readOnly
						* @property position
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* A `Vector` that accumulates the total force applied to the body for a single update.
						* Force is zeroed after every `Engine.update`, so constant forces should be applied for every update they are needed. See also `Body.applyForce`.
						* 
						* @property force
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* A `Number` that accumulates the total torque (turning force) applied to the body for a single update. See also `Body.applyForce`.
						* Torque is zeroed after every `Engine.update`, so constant torques should be applied for every update they are needed.
						*
						* Torques result in angular acceleration on every update, which depends on body inertia and the engine update delta.
						* 
						* @property torque
						* @type number
						* @default 0
						*/
						/**
						* _Read only_. Use `Body.setSpeed` to set. 
						* 
						* See `Body.getSpeed` for details.
						* 
						* Equivalent to the magnitude of `body.velocity` (always positive).
						* 
						* @readOnly
						* @property speed
						* @type number
						* @default 0
						*/
						/**
						* _Read only_. Use `Body.setVelocity` to set. 
						* 
						* See `Body.getVelocity` for details.
						* 
						* Equivalent to the magnitude of `body.angularVelocity` (always positive).
						* 
						* @readOnly
						* @property velocity
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* _Read only_. Use `Body.setAngularSpeed` to set. 
						* 
						* See `Body.getAngularSpeed` for details.
						* 
						* 
						* @readOnly
						* @property angularSpeed
						* @type number
						* @default 0
						*/
						/**
						* _Read only_. Use `Body.setAngularVelocity` to set. 
						* 
						* See `Body.getAngularVelocity` for details.
						* 
						*
						* @readOnly
						* @property angularVelocity
						* @type number
						* @default 0
						*/
						/**
						* _Read only_. Use `Body.setStatic` to set. 
						* 
						* A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
						*
						* @readOnly
						* @property isStatic
						* @type boolean
						* @default false
						*/
						/**
						* A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
						*
						* @property isSensor
						* @type boolean
						* @default false
						*/
						/**
						* _Read only_. Use `Sleeping.set` to set. 
						* 
						* A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
						*
						* @readOnly
						* @property isSleeping
						* @type boolean
						* @default false
						*/
						/**
						* _Read only_. Calculated during engine update only when sleeping is enabled.
						* 
						* A `Number` that loosely measures the amount of movement a body currently has.
						*
						* Derived from `body.speed^2 + body.angularSpeed^2`. See `Sleeping.update`.
						* 
						* @readOnly
						* @property motion
						* @type number
						* @default 0
						*/
						/**
						* A `Number` that defines the length of time during which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
						* 
						* @property sleepThreshold
						* @type number
						* @default 60
						*/
						/**
						* _Read only_. Use `Body.setDensity` to set. 
						* 
						* A `Number` that defines the density of the body (mass per unit area).
						* 
						* Mass will also be updated when set.
						*
						* @readOnly
						* @property density
						* @type number
						* @default 0.001
						*/
						/**
						* _Read only_. Use `Body.setMass` to set. 
						* 
						* A `Number` that defines the mass of the body.
						* 
						* Density will also be updated when set.
						* 
						* @readOnly
						* @property mass
						* @type number
						*/
						/**
						* _Read only_. Use `Body.setMass` to set. 
						* 
						* A `Number` that defines the inverse mass of the body (`1 / mass`).
						*
						* @readOnly
						* @property inverseMass
						* @type number
						*/
						/**
						* _Read only_. Automatically calculated when vertices, mass or density are set or set through `Body.setInertia`.
						* 
						* A `Number` that defines the moment of inertia of the body. This is the second moment of area in two dimensions.
						* 
						* Can be manually set to `Infinity` to prevent rotation of the body. See `Body.setInertia`.
						* 
						* @readOnly
						* @property inertia
						* @type number
						*/
						/**
						* _Read only_. Automatically calculated when vertices, mass or density are set or calculated by `Body.setInertia`.
						* 
						* A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
						* 
						* @readOnly
						* @property inverseInertia
						* @type number
						*/
						/**
						* A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
						* A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
						* A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
						* Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
						*
						* `Math.max(bodyA.restitution, bodyB.restitution)`
						*
						* @property restitution
						* @type number
						* @default 0
						*/
						/**
						* A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
						* A value of `0` means that the body may slide indefinitely.
						* A value of `1` means the body may come to a stop almost instantly after a force is applied.
						*
						* The effects of the value may be non-linear. 
						* High values may be unstable depending on the body.
						* The engine uses a Coulomb friction model including static and kinetic friction.
						* Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
						*
						* `Math.min(bodyA.friction, bodyB.friction)`
						*
						* @property friction
						* @type number
						* @default 0.1
						*/
						/**
						* A `Number` that defines the static friction of the body (in the Coulomb friction model). 
						* A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
						* The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
						* This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
						*
						* @property frictionStatic
						* @type number
						* @default 0.5
						*/
						/**
						* A `Number` that defines the air friction of the body (air resistance). 
						* A value of `0` means the body will never slow as it moves through space.
						* The higher the value, the faster a body slows when moving through space.
						* The effects of the value are non-linear. 
						*
						* @property frictionAir
						* @type number
						* @default 0.01
						*/
						/**
						* An `Object` that specifies the collision filtering properties of this body.
						*
						* Collisions between two bodies will obey the following rules:
						* - If the two bodies have the same non-zero value of `collisionFilter.group`,
						*   they will always collide if the value is positive, and they will never collide
						*   if the value is negative.
						* - If the two bodies have different values of `collisionFilter.group` or if one
						*   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
						*
						* Each body belongs to a collision category, given by `collisionFilter.category`. This
						* value is used as a bit field and the category should have only one bit set, meaning that
						* the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
						* different collision categories available.
						*
						* Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
						* the categories it collides with (the value is the bitwise AND value of all these categories).
						*
						* Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
						* category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
						* are both true.
						*
						* @property collisionFilter
						* @type object
						*/
						/**
						* An Integer `Number`, that specifies the collision group this body belongs to.
						* See `body.collisionFilter` for more information.
						*
						* @property collisionFilter.group
						* @type object
						* @default 0
						*/
						/**
						* A bit field that specifies the collision category this body belongs to.
						* The category value should have only one bit set, for example `0x0001`.
						* This means there are up to 32 unique collision categories available.
						* See `body.collisionFilter` for more information.
						*
						* @property collisionFilter.category
						* @type object
						* @default 1
						*/
						/**
						* A bit mask that specifies the collision categories this body may collide with.
						* See `body.collisionFilter` for more information.
						*
						* @property collisionFilter.mask
						* @type object
						* @default -1
						*/
						/**
						* A `Number` that specifies a thin boundary around the body where it is allowed to slightly sink into other bodies.
						* 
						* This is required for proper collision response, including friction and restitution effects.
						* 
						* The default should generally suffice in most cases. You may need to decrease this value for very small bodies that are nearing the default value in scale.
						*
						* @property slop
						* @type number
						* @default 0.05
						*/
						/**
						* A `Number` that specifies per-body time scaling.
						*
						* @property timeScale
						* @type number
						* @default 1
						*/
						/**
						* _Read only_. Updated during engine update.
						* 
						* A `Number` that records the last delta time value used to update this body.
						* Used to calculate speed and velocity.
						*
						* @readOnly
						* @property deltaTime
						* @type number
						* @default 1000 / 60
						*/
						/**
						* An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
						*
						* @property render
						* @type object
						*/
						/**
						* A flag that indicates if the body should be rendered.
						*
						* @property render.visible
						* @type boolean
						* @default true
						*/
						/**
						* Sets the opacity to use when rendering.
						*
						* @property render.opacity
						* @type number
						* @default 1
						*/
						/**
						* An `Object` that defines the sprite properties to use when rendering, if any.
						*
						* @property render.sprite
						* @type object
						*/
						/**
						* An `String` that defines the path to the image to use as the sprite texture, if any.
						*
						* @property render.sprite.texture
						* @type string
						*/
						/**
						* A `Number` that defines the scaling in the x-axis for the sprite, if any.
						*
						* @property render.sprite.xScale
						* @type number
						* @default 1
						*/
						/**
						* A `Number` that defines the scaling in the y-axis for the sprite, if any.
						*
						* @property render.sprite.yScale
						* @type number
						* @default 1
						*/
						/**
						* A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
						*
						* @property render.sprite.xOffset
						* @type number
						* @default 0
						*/
						/**
						* A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
						*
						* @property render.sprite.yOffset
						* @type number
						* @default 0
						*/
						/**
						* A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
						* A value of `0` means no outline will be rendered.
						*
						* @property render.lineWidth
						* @type number
						* @default 0
						*/
						/**
						* A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
						* It is the same as when using a canvas, so it accepts CSS style property values.
						*
						* @property render.fillStyle
						* @type string
						* @default a random colour
						*/
						/**
						* A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
						* It is the same as when using a canvas, so it accepts CSS style property values.
						*
						* @property render.strokeStyle
						* @type string
						* @default a random colour
						*/
						/**
						* _Read only_. Calculated automatically when vertices are set.
						* 
						* An array of unique axis vectors (edge normals) used for collision detection.
						* These are automatically calculated when vertices are set.
						* They are constantly updated by `Body.update` during the simulation.
						*
						* @readOnly
						* @property axes
						* @type vector[]
						*/
						/**
						* _Read only_. Calculated automatically when vertices are set.
						* 
						* A `Number` that measures the area of the body's convex hull.
						* 
						* @readOnly
						* @property area
						* @type string
						* @default 
						*/
						/**
						* A `Bounds` object that defines the AABB region for the body.
						* It is automatically calculated when vertices are set and constantly updated by `Body.update` during simulation.
						* 
						* @property bounds
						* @type bounds
						*/
					})();
				}),
				(function(module$14, exports$8, __webpack_require__) {
					/**
					* The `Matter.Events` module contains methods to fire and listen to events on other objects.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Events
					*/
					var Events = {};
					module$14.exports = Events;
					var Common = __webpack_require__(0);
					(function() {
						/**
						* Subscribes a callback function to the given object's `eventName`.
						* @method on
						* @param {} object
						* @param {string} eventNames
						* @param {function} callback
						*/
						Events.on = function(object, eventNames, callback) {
							var names = eventNames.split(" "), name;
							for (var i = 0; i < names.length; i++) {
								name = names[i];
								object.events = object.events || {};
								object.events[name] = object.events[name] || [];
								object.events[name].push(callback);
							}
							return callback;
						};
						/**
						* Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
						* @method off
						* @param {} object
						* @param {string} eventNames
						* @param {function} callback
						*/
						Events.off = function(object, eventNames, callback) {
							if (!eventNames) {
								object.events = {};
								return;
							}
							if (typeof eventNames === "function") {
								callback = eventNames;
								eventNames = Common.keys(object.events).join(" ");
							}
							var names = eventNames.split(" ");
							for (var i = 0; i < names.length; i++) {
								var callbacks = object.events[names[i]], newCallbacks = [];
								if (callback && callbacks) {
									for (var j = 0; j < callbacks.length; j++) if (callbacks[j] !== callback) newCallbacks.push(callbacks[j]);
								}
								object.events[names[i]] = newCallbacks;
							}
						};
						/**
						* Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
						* @method trigger
						* @param {} object
						* @param {string} eventNames
						* @param {} event
						*/
						Events.trigger = function(object, eventNames, event) {
							var names, name, callbacks, eventClone;
							var events = object.events;
							if (events && Common.keys(events).length > 0) {
								if (!event) event = {};
								names = eventNames.split(" ");
								for (var i = 0; i < names.length; i++) {
									name = names[i];
									callbacks = events[name];
									if (callbacks) {
										eventClone = Common.clone(event, false);
										eventClone.name = name;
										eventClone.source = object;
										for (var j = 0; j < callbacks.length; j++) callbacks[j].apply(object, [eventClone]);
									}
								}
							}
						};
					})();
				}),
				(function(module$15, exports$9, __webpack_require__) {
					/**
					* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
					*
					* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
					* A composite could contain anything from a single body all the way up to a whole world.
					* 
					* When making any changes to composites, use the included functions rather than changing their properties directly.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Composite
					*/
					var Composite = {};
					module$15.exports = Composite;
					var Events = __webpack_require__(5);
					var Common = __webpack_require__(0);
					var Bounds = __webpack_require__(1);
					var Body = __webpack_require__(4);
					(function() {
						/**
						* Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
						* See the properites section below for detailed information on what you can pass via the `options` object.
						* @method create
						* @param {} [options]
						* @return {composite} A new composite
						*/
						Composite.create = function(options) {
							return Common.extend({
								id: Common.nextId(),
								type: "composite",
								parent: null,
								isModified: false,
								bodies: [],
								constraints: [],
								composites: [],
								label: "Composite",
								plugin: {},
								cache: {
									allBodies: null,
									allConstraints: null,
									allComposites: null
								}
							}, options);
						};
						/**
						* Sets the composite's `isModified` flag. 
						* If `updateParents` is true, all parents will be set (default: false).
						* If `updateChildren` is true, all children will be set (default: false).
						* @private
						* @method setModified
						* @param {composite} composite
						* @param {boolean} isModified
						* @param {boolean} [updateParents=false]
						* @param {boolean} [updateChildren=false]
						*/
						Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
							composite.isModified = isModified;
							if (isModified && composite.cache) {
								composite.cache.allBodies = null;
								composite.cache.allConstraints = null;
								composite.cache.allComposites = null;
							}
							if (updateParents && composite.parent) Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
							if (updateChildren) for (var i = 0; i < composite.composites.length; i++) {
								var childComposite = composite.composites[i];
								Composite.setModified(childComposite, isModified, updateParents, updateChildren);
							}
						};
						/**
						* Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
						* Triggers `beforeAdd` and `afterAdd` events on the `composite`.
						* @method add
						* @param {composite} composite
						* @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
						* @return {composite} The original composite with the objects added
						*/
						Composite.add = function(composite, object) {
							var objects = [].concat(object);
							Events.trigger(composite, "beforeAdd", { object });
							for (var i = 0; i < objects.length; i++) {
								var obj = objects[i];
								switch (obj.type) {
									case "body":
										if (obj.parent !== obj) {
											Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
											break;
										}
										Composite.addBody(composite, obj);
										break;
									case "constraint":
										Composite.addConstraint(composite, obj);
										break;
									case "composite":
										Composite.addComposite(composite, obj);
										break;
									case "mouseConstraint": Composite.addConstraint(composite, obj.constraint);
								}
							}
							Events.trigger(composite, "afterAdd", { object });
							return composite;
						};
						/**
						* Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
						* Optionally searching its children recursively.
						* Triggers `beforeRemove` and `afterRemove` events on the `composite`.
						* @method remove
						* @param {composite} composite
						* @param {object|array} object
						* @param {boolean} [deep=false]
						* @return {composite} The original composite with the objects removed
						*/
						Composite.remove = function(composite, object, deep) {
							var objects = [].concat(object);
							Events.trigger(composite, "beforeRemove", { object });
							for (var i = 0; i < objects.length; i++) {
								var obj = objects[i];
								switch (obj.type) {
									case "body":
										Composite.removeBody(composite, obj, deep);
										break;
									case "constraint":
										Composite.removeConstraint(composite, obj, deep);
										break;
									case "composite":
										Composite.removeComposite(composite, obj, deep);
										break;
									case "mouseConstraint": Composite.removeConstraint(composite, obj.constraint);
								}
							}
							Events.trigger(composite, "afterRemove", { object });
							return composite;
						};
						/**
						* Adds a composite to the given composite.
						* @private
						* @method addComposite
						* @param {composite} compositeA
						* @param {composite} compositeB
						* @return {composite} The original compositeA with the objects from compositeB added
						*/
						Composite.addComposite = function(compositeA, compositeB) {
							compositeA.composites.push(compositeB);
							compositeB.parent = compositeA;
							Composite.setModified(compositeA, true, true, false);
							return compositeA;
						};
						/**
						* Removes a composite from the given composite, and optionally searching its children recursively.
						* @private
						* @method removeComposite
						* @param {composite} compositeA
						* @param {composite} compositeB
						* @param {boolean} [deep=false]
						* @return {composite} The original compositeA with the composite removed
						*/
						Composite.removeComposite = function(compositeA, compositeB, deep) {
							var position = Common.indexOf(compositeA.composites, compositeB);
							if (position !== -1) Composite.removeCompositeAt(compositeA, position);
							if (deep) for (var i = 0; i < compositeA.composites.length; i++) Composite.removeComposite(compositeA.composites[i], compositeB, true);
							return compositeA;
						};
						/**
						* Removes a composite from the given composite.
						* @private
						* @method removeCompositeAt
						* @param {composite} composite
						* @param {number} position
						* @return {composite} The original composite with the composite removed
						*/
						Composite.removeCompositeAt = function(composite, position) {
							composite.composites.splice(position, 1);
							Composite.setModified(composite, true, true, false);
							return composite;
						};
						/**
						* Adds a body to the given composite.
						* @private
						* @method addBody
						* @param {composite} composite
						* @param {body} body
						* @return {composite} The original composite with the body added
						*/
						Composite.addBody = function(composite, body) {
							composite.bodies.push(body);
							Composite.setModified(composite, true, true, false);
							return composite;
						};
						/**
						* Removes a body from the given composite, and optionally searching its children recursively.
						* @private
						* @method removeBody
						* @param {composite} composite
						* @param {body} body
						* @param {boolean} [deep=false]
						* @return {composite} The original composite with the body removed
						*/
						Composite.removeBody = function(composite, body, deep) {
							var position = Common.indexOf(composite.bodies, body);
							if (position !== -1) Composite.removeBodyAt(composite, position);
							if (deep) for (var i = 0; i < composite.composites.length; i++) Composite.removeBody(composite.composites[i], body, true);
							return composite;
						};
						/**
						* Removes a body from the given composite.
						* @private
						* @method removeBodyAt
						* @param {composite} composite
						* @param {number} position
						* @return {composite} The original composite with the body removed
						*/
						Composite.removeBodyAt = function(composite, position) {
							composite.bodies.splice(position, 1);
							Composite.setModified(composite, true, true, false);
							return composite;
						};
						/**
						* Adds a constraint to the given composite.
						* @private
						* @method addConstraint
						* @param {composite} composite
						* @param {constraint} constraint
						* @return {composite} The original composite with the constraint added
						*/
						Composite.addConstraint = function(composite, constraint) {
							composite.constraints.push(constraint);
							Composite.setModified(composite, true, true, false);
							return composite;
						};
						/**
						* Removes a constraint from the given composite, and optionally searching its children recursively.
						* @private
						* @method removeConstraint
						* @param {composite} composite
						* @param {constraint} constraint
						* @param {boolean} [deep=false]
						* @return {composite} The original composite with the constraint removed
						*/
						Composite.removeConstraint = function(composite, constraint, deep) {
							var position = Common.indexOf(composite.constraints, constraint);
							if (position !== -1) Composite.removeConstraintAt(composite, position);
							if (deep) for (var i = 0; i < composite.composites.length; i++) Composite.removeConstraint(composite.composites[i], constraint, true);
							return composite;
						};
						/**
						* Removes a body from the given composite.
						* @private
						* @method removeConstraintAt
						* @param {composite} composite
						* @param {number} position
						* @return {composite} The original composite with the constraint removed
						*/
						Composite.removeConstraintAt = function(composite, position) {
							composite.constraints.splice(position, 1);
							Composite.setModified(composite, true, true, false);
							return composite;
						};
						/**
						* Removes all bodies, constraints and composites from the given composite.
						* Optionally clearing its children recursively.
						* @method clear
						* @param {composite} composite
						* @param {boolean} keepStatic
						* @param {boolean} [deep=false]
						*/
						Composite.clear = function(composite, keepStatic, deep) {
							if (deep) for (var i = 0; i < composite.composites.length; i++) Composite.clear(composite.composites[i], keepStatic, true);
							if (keepStatic) composite.bodies = composite.bodies.filter(function(body) {
								return body.isStatic;
							});
							else composite.bodies.length = 0;
							composite.constraints.length = 0;
							composite.composites.length = 0;
							Composite.setModified(composite, true, true, false);
							return composite;
						};
						/**
						* Returns all bodies in the given composite, including all bodies in its children, recursively.
						* @method allBodies
						* @param {composite} composite
						* @return {body[]} All the bodies
						*/
						Composite.allBodies = function(composite) {
							if (composite.cache && composite.cache.allBodies) return composite.cache.allBodies;
							var bodies = [].concat(composite.bodies);
							for (var i = 0; i < composite.composites.length; i++) bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
							if (composite.cache) composite.cache.allBodies = bodies;
							return bodies;
						};
						/**
						* Returns all constraints in the given composite, including all constraints in its children, recursively.
						* @method allConstraints
						* @param {composite} composite
						* @return {constraint[]} All the constraints
						*/
						Composite.allConstraints = function(composite) {
							if (composite.cache && composite.cache.allConstraints) return composite.cache.allConstraints;
							var constraints = [].concat(composite.constraints);
							for (var i = 0; i < composite.composites.length; i++) constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
							if (composite.cache) composite.cache.allConstraints = constraints;
							return constraints;
						};
						/**
						* Returns all composites in the given composite, including all composites in its children, recursively.
						* @method allComposites
						* @param {composite} composite
						* @return {composite[]} All the composites
						*/
						Composite.allComposites = function(composite) {
							if (composite.cache && composite.cache.allComposites) return composite.cache.allComposites;
							var composites = [].concat(composite.composites);
							for (var i = 0; i < composite.composites.length; i++) composites = composites.concat(Composite.allComposites(composite.composites[i]));
							if (composite.cache) composite.cache.allComposites = composites;
							return composites;
						};
						/**
						* Searches the composite recursively for an object matching the type and id supplied, null if not found.
						* @method get
						* @param {composite} composite
						* @param {number} id
						* @param {string} type
						* @return {object} The requested object, if found
						*/
						Composite.get = function(composite, id, type) {
							var objects, object;
							switch (type) {
								case "body":
									objects = Composite.allBodies(composite);
									break;
								case "constraint":
									objects = Composite.allConstraints(composite);
									break;
								case "composite": objects = Composite.allComposites(composite).concat(composite);
							}
							if (!objects) return null;
							object = objects.filter(function(object) {
								return object.id.toString() === id.toString();
							});
							return object.length === 0 ? null : object[0];
						};
						/**
						* Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
						* @method move
						* @param {compositeA} compositeA
						* @param {object[]} objects
						* @param {compositeB} compositeB
						* @return {composite} Returns compositeA
						*/
						Composite.move = function(compositeA, objects, compositeB) {
							Composite.remove(compositeA, objects);
							Composite.add(compositeB, objects);
							return compositeA;
						};
						/**
						* Assigns new ids for all objects in the composite, recursively.
						* @method rebase
						* @param {composite} composite
						* @return {composite} Returns composite
						*/
						Composite.rebase = function(composite) {
							var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
							for (var i = 0; i < objects.length; i++) objects[i].id = Common.nextId();
							return composite;
						};
						/**
						* Translates all children in the composite by a given vector relative to their current positions, 
						* without imparting any velocity.
						* @method translate
						* @param {composite} composite
						* @param {vector} translation
						* @param {bool} [recursive=true]
						*/
						Composite.translate = function(composite, translation, recursive) {
							var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
							for (var i = 0; i < bodies.length; i++) Body.translate(bodies[i], translation);
							return composite;
						};
						/**
						* Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
						* @method rotate
						* @param {composite} composite
						* @param {number} rotation
						* @param {vector} point
						* @param {bool} [recursive=true]
						*/
						Composite.rotate = function(composite, rotation, point, recursive) {
							var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
							for (var i = 0; i < bodies.length; i++) {
								var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
								Body.setPosition(body, {
									x: point.x + (dx * cos - dy * sin),
									y: point.y + (dx * sin + dy * cos)
								});
								Body.rotate(body, rotation);
							}
							return composite;
						};
						/**
						* Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
						* @method scale
						* @param {composite} composite
						* @param {number} scaleX
						* @param {number} scaleY
						* @param {vector} point
						* @param {bool} [recursive=true]
						*/
						Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
							var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
							for (var i = 0; i < bodies.length; i++) {
								var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
								Body.setPosition(body, {
									x: point.x + dx * scaleX,
									y: point.y + dy * scaleY
								});
								Body.scale(body, scaleX, scaleY);
							}
							return composite;
						};
						/**
						* Returns the union of the bounds of all of the composite's bodies.
						* @method bounds
						* @param {composite} composite The composite.
						* @returns {bounds} The composite bounds.
						*/
						Composite.bounds = function(composite) {
							var bodies = Composite.allBodies(composite), vertices = [];
							for (var i = 0; i < bodies.length; i += 1) {
								var body = bodies[i];
								vertices.push(body.bounds.min, body.bounds.max);
							}
							return Bounds.create(vertices);
						};
						/**
						* Fired when a call to `Composite.add` is made, before objects have been added.
						*
						* @event beforeAdd
						* @param {} event An event object
						* @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when a call to `Composite.add` is made, after objects have been added.
						*
						* @event afterAdd
						* @param {} event An event object
						* @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when a call to `Composite.remove` is made, before objects have been removed.
						*
						* @event beforeRemove
						* @param {} event An event object
						* @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when a call to `Composite.remove` is made, after objects have been removed.
						*
						* @event afterRemove
						* @param {} event An event object
						* @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
						*
						* @property id
						* @type number
						*/
						/**
						* A `String` denoting the type of object.
						*
						* @property type
						* @type string
						* @default "composite"
						* @readOnly
						*/
						/**
						* An arbitrary `String` name to help the user identify and manage composites.
						*
						* @property label
						* @type string
						* @default "Composite"
						*/
						/**
						* A flag that specifies whether the composite has been modified during the current step.
						* This is automatically managed when bodies, constraints or composites are added or removed.
						*
						* @property isModified
						* @type boolean
						* @default false
						*/
						/**
						* The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
						*
						* @property parent
						* @type composite
						* @default null
						*/
						/**
						* An array of `Body` that are _direct_ children of this composite.
						* To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
						* If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
						*
						* @property bodies
						* @type body[]
						* @default []
						*/
						/**
						* An array of `Constraint` that are _direct_ children of this composite.
						* To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
						* If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
						*
						* @property constraints
						* @type constraint[]
						* @default []
						*/
						/**
						* An array of `Composite` that are _direct_ children of this composite.
						* To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
						* If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
						*
						* @property composites
						* @type composite[]
						* @default []
						*/
						/**
						* An object reserved for storing plugin-specific properties.
						*
						* @property plugin
						* @type {}
						*/
						/**
						* An object used for storing cached results for performance reasons.
						* This is used internally only and is automatically managed.
						*
						* @private
						* @property cache
						* @type {}
						*/
					})();
				}),
				(function(module$16, exports$10, __webpack_require__) {
					/**
					* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
					*
					* @class Sleeping
					*/
					var Sleeping = {};
					module$16.exports = Sleeping;
					var Body = __webpack_require__(4);
					var Events = __webpack_require__(5);
					var Common = __webpack_require__(0);
					(function() {
						Sleeping._motionWakeThreshold = .18;
						Sleeping._motionSleepThreshold = .08;
						Sleeping._minBias = .9;
						/**
						* Puts bodies to sleep or wakes them up depending on their motion.
						* @method update
						* @param {body[]} bodies
						* @param {number} delta
						*/
						Sleeping.update = function(bodies, delta) {
							var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
							for (var i = 0; i < bodies.length; i++) {
								var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
								if (body.force.x !== 0 || body.force.y !== 0) {
									Sleeping.set(body, false);
									continue;
								}
								var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
								body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
								if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
									body.sleepCounter += 1;
									if (body.sleepCounter >= body.sleepThreshold / timeScale) Sleeping.set(body, true);
								} else if (body.sleepCounter > 0) body.sleepCounter -= 1;
							}
						};
						/**
						* Given a set of colliding pairs, wakes the sleeping bodies involved.
						* @method afterCollisions
						* @param {pair[]} pairs
						*/
						Sleeping.afterCollisions = function(pairs) {
							var motionSleepThreshold = Sleeping._motionSleepThreshold;
							for (var i = 0; i < pairs.length; i++) {
								var pair = pairs[i];
								if (!pair.isActive) continue;
								var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
								if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic) continue;
								if (bodyA.isSleeping || bodyB.isSleeping) {
									var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
									if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) Sleeping.set(sleepingBody, false);
								}
							}
						};
						/**
						* Set a body as sleeping or awake.
						* @method set
						* @param {body} body
						* @param {boolean} isSleeping
						*/
						Sleeping.set = function(body, isSleeping) {
							var wasSleeping = body.isSleeping;
							if (isSleeping) {
								body.isSleeping = true;
								body.sleepCounter = body.sleepThreshold;
								body.positionImpulse.x = 0;
								body.positionImpulse.y = 0;
								body.positionPrev.x = body.position.x;
								body.positionPrev.y = body.position.y;
								body.anglePrev = body.angle;
								body.speed = 0;
								body.angularSpeed = 0;
								body.motion = 0;
								if (!wasSleeping) Events.trigger(body, "sleepStart");
							} else {
								body.isSleeping = false;
								body.sleepCounter = 0;
								if (wasSleeping) Events.trigger(body, "sleepEnd");
							}
						};
					})();
				}),
				(function(module$17, exports$11, __webpack_require__) {
					/**
					* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
					*
					* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
					*
					* See `Matter.Engine` for collision events.
					*
					* @class Collision
					*/
					var Collision = {};
					module$17.exports = Collision;
					var Vertices = __webpack_require__(3);
					var Pair = __webpack_require__(9);
					(function() {
						var _supports = [];
						var _overlapAB = {
							overlap: 0,
							axis: null
						};
						var _overlapBA = {
							overlap: 0,
							axis: null
						};
						/**
						* Creates a new collision record.
						* @method create
						* @param {body} bodyA The first body part represented by the collision record
						* @param {body} bodyB The second body part represented by the collision record
						* @return {collision} A new collision record
						*/
						Collision.create = function(bodyA, bodyB) {
							return {
								pair: null,
								collided: false,
								bodyA,
								bodyB,
								parentA: bodyA.parent,
								parentB: bodyB.parent,
								depth: 0,
								normal: {
									x: 0,
									y: 0
								},
								tangent: {
									x: 0,
									y: 0
								},
								penetration: {
									x: 0,
									y: 0
								},
								supports: []
							};
						};
						/**
						* Detect collision between two bodies.
						* @method collides
						* @param {body} bodyA
						* @param {body} bodyB
						* @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
						* @return {collision|null} A collision record if detected, otherwise null
						*/
						Collision.collides = function(bodyA, bodyB, pairs) {
							Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
							if (_overlapAB.overlap <= 0) return null;
							Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
							if (_overlapBA.overlap <= 0) return null;
							var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
							if (!pair) {
								collision = Collision.create(bodyA, bodyB);
								collision.collided = true;
								collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
								collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
								collision.parentA = collision.bodyA.parent;
								collision.parentB = collision.bodyB.parent;
							} else collision = pair.collision;
							bodyA = collision.bodyA;
							bodyB = collision.bodyB;
							var minOverlap;
							if (_overlapAB.overlap < _overlapBA.overlap) minOverlap = _overlapAB;
							else minOverlap = _overlapBA;
							var normal = collision.normal, supports = collision.supports, minAxis = minOverlap.axis, minAxisX = minAxis.x, minAxisY = minAxis.y;
							if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
								normal.x = minAxisX;
								normal.y = minAxisY;
							} else {
								normal.x = -minAxisX;
								normal.y = -minAxisY;
							}
							collision.tangent.x = -normal.y;
							collision.tangent.y = normal.x;
							collision.depth = minOverlap.overlap;
							collision.penetration.x = normal.x * collision.depth;
							collision.penetration.y = normal.y * collision.depth;
							var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
							if (Vertices.contains(bodyA.vertices, supportsB[0])) supports[supportCount++] = supportsB[0];
							if (Vertices.contains(bodyA.vertices, supportsB[1])) supports[supportCount++] = supportsB[1];
							if (supportCount < 2) {
								var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
								if (Vertices.contains(bodyB.vertices, supportsA[0])) supports[supportCount++] = supportsA[0];
								if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) supports[supportCount++] = supportsA[1];
							}
							if (supportCount === 0) supports[supportCount++] = supportsB[0];
							supports.length = supportCount;
							return collision;
						};
						/**
						* Find the overlap between two sets of vertices.
						* @method _overlapAxes
						* @private
						* @param {object} result
						* @param {vertices} verticesA
						* @param {vertices} verticesB
						* @param {axes} axes
						*/
						Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
							var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
							for (i = 0; i < axesLength; i++) {
								var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
								for (j = 1; j < verticesALength; j += 1) {
									dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
									if (dot > maxA) maxA = dot;
									else if (dot < minA) minA = dot;
								}
								for (j = 1; j < verticesBLength; j += 1) {
									dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
									if (dot > maxB) maxB = dot;
									else if (dot < minB) minB = dot;
								}
								overlapAB = maxA - minB;
								overlapBA = maxB - minA;
								overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
								if (overlap < overlapMin) {
									overlapMin = overlap;
									overlapAxisNumber = i;
									if (overlap <= 0) break;
								}
							}
							result.axis = axes[overlapAxisNumber];
							result.overlap = overlapMin;
						};
						/**
						* Projects vertices on an axis and returns an interval.
						* @method _projectToAxis
						* @private
						* @param {} projection
						* @param {} vertices
						* @param {} axis
						*/
						Collision._projectToAxis = function(projection, vertices, axis) {
							var min = vertices[0].x * axis.x + vertices[0].y * axis.y, max = min;
							for (var i = 1; i < vertices.length; i += 1) {
								var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;
								if (dot > max) max = dot;
								else if (dot < min) min = dot;
							}
							projection.min = min;
							projection.max = max;
						};
						/**
						* Finds supporting vertices given two bodies along a given direction using hill-climbing.
						* @method _findSupports
						* @private
						* @param {body} bodyA
						* @param {body} bodyB
						* @param {vector} normal
						* @param {number} direction
						* @return [vector]
						*/
						Collision._findSupports = function(bodyA, bodyB, normal, direction) {
							var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, nearestDistance = Number.MAX_VALUE, vertexA, vertexB, vertexC, distance, j;
							for (j = 0; j < verticesLength; j += 1) {
								vertexB = vertices[j];
								distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
								if (distance < nearestDistance) {
									nearestDistance = distance;
									vertexA = vertexB;
								}
							}
							vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
							nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
							vertexB = vertices[(vertexA.index + 1) % verticesLength];
							if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
								_supports[0] = vertexA;
								_supports[1] = vertexB;
								return _supports;
							}
							_supports[0] = vertexA;
							_supports[1] = vertexC;
							return _supports;
						};
						/**
						* A reference to the pair using this collision record, if there is one.
						*
						* @property pair
						* @type {pair|null}
						* @default null
						*/
						/**
						* A flag that indicates if the bodies were colliding when the collision was last updated.
						* 
						* @property collided
						* @type boolean
						* @default false
						*/
						/**
						* The first body part represented by the collision (see also `collision.parentA`).
						* 
						* @property bodyA
						* @type body
						*/
						/**
						* The second body part represented by the collision (see also `collision.parentB`).
						* 
						* @property bodyB
						* @type body
						*/
						/**
						* The first body represented by the collision (i.e. `collision.bodyA.parent`).
						* 
						* @property parentA
						* @type body
						*/
						/**
						* The second body represented by the collision (i.e. `collision.bodyB.parent`).
						* 
						* @property parentB
						* @type body
						*/
						/**
						* A `Number` that represents the minimum separating distance between the bodies along the collision normal.
						*
						* @readOnly
						* @property depth
						* @type number
						* @default 0
						*/
						/**
						* A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
						*
						* @property normal
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* A normalised `Vector` that is the tangent direction to the collision normal.
						*
						* @property tangent
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* A `Vector` that represents the direction and depth of the collision.
						*
						* @property penetration
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* An array of body vertices that represent the support points in the collision.
						* These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
						*
						* @property supports
						* @type vector[]
						* @default []
						*/
					})();
				}),
				(function(module$18, exports$12, __webpack_require__) {
					/**
					* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
					*
					* @class Pair
					*/
					var Pair = {};
					module$18.exports = Pair;
					var Contact = __webpack_require__(16);
					(function() {
						/**
						* Creates a pair.
						* @method create
						* @param {collision} collision
						* @param {number} timestamp
						* @return {pair} A new pair
						*/
						Pair.create = function(collision, timestamp) {
							var bodyA = collision.bodyA, bodyB = collision.bodyB;
							var pair = {
								id: Pair.id(bodyA, bodyB),
								bodyA,
								bodyB,
								collision,
								contacts: [],
								activeContacts: [],
								separation: 0,
								isActive: true,
								confirmedActive: true,
								isSensor: bodyA.isSensor || bodyB.isSensor,
								timeCreated: timestamp,
								timeUpdated: timestamp,
								inverseMass: 0,
								friction: 0,
								frictionStatic: 0,
								restitution: 0,
								slop: 0
							};
							Pair.update(pair, collision, timestamp);
							return pair;
						};
						/**
						* Updates a pair given a collision.
						* @method update
						* @param {pair} pair
						* @param {collision} collision
						* @param {number} timestamp
						*/
						Pair.update = function(pair, collision, timestamp) {
							var contacts = pair.contacts, supports = collision.supports, activeContacts = pair.activeContacts, parentA = collision.parentA, parentB = collision.parentB, parentAVerticesLength = parentA.vertices.length;
							pair.isActive = true;
							pair.timeUpdated = timestamp;
							pair.collision = collision;
							pair.separation = collision.depth;
							pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
							pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
							pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
							pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
							pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
							collision.pair = pair;
							activeContacts.length = 0;
							for (var i = 0; i < supports.length; i++) {
								var support = supports[i], contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index, contact = contacts[contactId];
								if (contact) activeContacts.push(contact);
								else activeContacts.push(contacts[contactId] = Contact.create(support));
							}
						};
						/**
						* Set a pair as active or inactive.
						* @method setActive
						* @param {pair} pair
						* @param {bool} isActive
						* @param {number} timestamp
						*/
						Pair.setActive = function(pair, isActive, timestamp) {
							if (isActive) {
								pair.isActive = true;
								pair.timeUpdated = timestamp;
							} else {
								pair.isActive = false;
								pair.activeContacts.length = 0;
							}
						};
						/**
						* Get the id for the given pair.
						* @method id
						* @param {body} bodyA
						* @param {body} bodyB
						* @return {string} Unique pairId
						*/
						Pair.id = function(bodyA, bodyB) {
							if (bodyA.id < bodyB.id) return "A" + bodyA.id + "B" + bodyB.id;
							else return "A" + bodyB.id + "B" + bodyA.id;
						};
					})();
				}),
				(function(module$19, exports$13, __webpack_require__) {
					/**
					* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
					* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
					* The stiffness of constraints can be modified to create springs or elastic.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Constraint
					*/
					var Constraint = {};
					module$19.exports = Constraint;
					var Vertices = __webpack_require__(3);
					var Vector = __webpack_require__(2);
					var Sleeping = __webpack_require__(7);
					var Bounds = __webpack_require__(1);
					var Axes = __webpack_require__(11);
					var Common = __webpack_require__(0);
					(function() {
						Constraint._warming = .4;
						Constraint._torqueDampen = 1;
						Constraint._minLength = 1e-6;
						/**
						* Creates a new constraint.
						* All properties have default values, and many are pre-calculated automatically based on other properties.
						* To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
						* If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
						* For compound bodies, constraints must be applied to the parent body (not one of its parts).
						* See the properties section below for detailed information on what you can pass via the `options` object.
						* @method create
						* @param {} options
						* @return {constraint} constraint
						*/
						Constraint.create = function(options) {
							var constraint = options;
							if (constraint.bodyA && !constraint.pointA) constraint.pointA = {
								x: 0,
								y: 0
							};
							if (constraint.bodyB && !constraint.pointB) constraint.pointB = {
								x: 0,
								y: 0
							};
							var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
							constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
							constraint.id = constraint.id || Common.nextId();
							constraint.label = constraint.label || "Constraint";
							constraint.type = "constraint";
							constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : .7);
							constraint.damping = constraint.damping || 0;
							constraint.angularStiffness = constraint.angularStiffness || 0;
							constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
							constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
							constraint.plugin = {};
							var render = {
								visible: true,
								lineWidth: 2,
								strokeStyle: "#ffffff",
								type: "line",
								anchors: true
							};
							if (constraint.length === 0 && constraint.stiffness > .1) {
								render.type = "pin";
								render.anchors = false;
							} else if (constraint.stiffness < .9) render.type = "spring";
							constraint.render = Common.extend(render, constraint.render);
							return constraint;
						};
						/**
						* Prepares for solving by constraint warming.
						* @private
						* @method preSolveAll
						* @param {body[]} bodies
						*/
						Constraint.preSolveAll = function(bodies) {
							for (var i = 0; i < bodies.length; i += 1) {
								var body = bodies[i], impulse = body.constraintImpulse;
								if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
								body.position.x += impulse.x;
								body.position.y += impulse.y;
								body.angle += impulse.angle;
							}
						};
						/**
						* Solves all constraints in a list of collisions.
						* @private
						* @method solveAll
						* @param {constraint[]} constraints
						* @param {number} delta
						*/
						Constraint.solveAll = function(constraints, delta) {
							var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
							for (var i = 0; i < constraints.length; i += 1) {
								var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
								if (fixedA || fixedB) Constraint.solve(constraints[i], timeScale);
							}
							for (i = 0; i < constraints.length; i += 1) {
								constraint = constraints[i];
								fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
								fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
								if (!fixedA && !fixedB) Constraint.solve(constraints[i], timeScale);
							}
						};
						/**
						* Solves a distance constraint with Gauss-Siedel method.
						* @private
						* @method solve
						* @param {constraint} constraint
						* @param {number} timeScale
						*/
						Constraint.solve = function(constraint, timeScale) {
							var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
							if (!bodyA && !bodyB) return;
							if (bodyA && !bodyA.isStatic) {
								Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
								constraint.angleA = bodyA.angle;
							}
							if (bodyB && !bodyB.isStatic) {
								Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
								constraint.angleB = bodyB.angle;
							}
							var pointAWorld = pointA, pointBWorld = pointB;
							if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
							if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);
							if (!pointAWorld || !pointBWorld) return;
							var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
							if (currentLength < Constraint._minLength) currentLength = Constraint._minLength;
							var difference = (currentLength - constraint.length) / currentLength, stiffness = constraint.stiffness >= 1 || constraint.length === 0 ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), resistanceTotal = massTotal + ((bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0)), torque, share, normal, normalVelocity, relativeVelocity;
							if (damping > 0) {
								var zero = Vector.create();
								normal = Vector.div(delta, currentLength);
								relativeVelocity = Vector.sub(bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero, bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero);
								normalVelocity = Vector.dot(normal, relativeVelocity);
							}
							if (bodyA && !bodyA.isStatic) {
								share = bodyA.inverseMass / massTotal;
								bodyA.constraintImpulse.x -= force.x * share;
								bodyA.constraintImpulse.y -= force.y * share;
								bodyA.position.x -= force.x * share;
								bodyA.position.y -= force.y * share;
								if (damping > 0) {
									bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
									bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
								}
								torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
								bodyA.constraintImpulse.angle -= torque;
								bodyA.angle -= torque;
							}
							if (bodyB && !bodyB.isStatic) {
								share = bodyB.inverseMass / massTotal;
								bodyB.constraintImpulse.x += force.x * share;
								bodyB.constraintImpulse.y += force.y * share;
								bodyB.position.x += force.x * share;
								bodyB.position.y += force.y * share;
								if (damping > 0) {
									bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
									bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
								}
								torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
								bodyB.constraintImpulse.angle += torque;
								bodyB.angle += torque;
							}
						};
						/**
						* Performs body updates required after solving constraints.
						* @private
						* @method postSolveAll
						* @param {body[]} bodies
						*/
						Constraint.postSolveAll = function(bodies) {
							for (var i = 0; i < bodies.length; i++) {
								var body = bodies[i], impulse = body.constraintImpulse;
								if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
								Sleeping.set(body, false);
								for (var j = 0; j < body.parts.length; j++) {
									var part = body.parts[j];
									Vertices.translate(part.vertices, impulse);
									if (j > 0) {
										part.position.x += impulse.x;
										part.position.y += impulse.y;
									}
									if (impulse.angle !== 0) {
										Vertices.rotate(part.vertices, impulse.angle, body.position);
										Axes.rotate(part.axes, impulse.angle);
										if (j > 0) Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
									}
									Bounds.update(part.bounds, part.vertices, body.velocity);
								}
								impulse.angle *= Constraint._warming;
								impulse.x *= Constraint._warming;
								impulse.y *= Constraint._warming;
							}
						};
						/**
						* Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
						* @method pointAWorld
						* @param {constraint} constraint
						* @returns {vector} the world-space position
						*/
						Constraint.pointAWorld = function(constraint) {
							return {
								x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
								y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
							};
						};
						/**
						* Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
						* @method pointBWorld
						* @param {constraint} constraint
						* @returns {vector} the world-space position
						*/
						Constraint.pointBWorld = function(constraint) {
							return {
								x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
								y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
							};
						};
						/**
						* An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
						*
						* @property id
						* @type number
						*/
						/**
						* A `String` denoting the type of object.
						*
						* @property type
						* @type string
						* @default "constraint"
						* @readOnly
						*/
						/**
						* An arbitrary `String` name to help the user identify and manage bodies.
						*
						* @property label
						* @type string
						* @default "Constraint"
						*/
						/**
						* An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
						*
						* @property render
						* @type object
						*/
						/**
						* A flag that indicates if the constraint should be rendered.
						*
						* @property render.visible
						* @type boolean
						* @default true
						*/
						/**
						* A `Number` that defines the line width to use when rendering the constraint outline.
						* A value of `0` means no outline will be rendered.
						*
						* @property render.lineWidth
						* @type number
						* @default 2
						*/
						/**
						* A `String` that defines the stroke style to use when rendering the constraint outline.
						* It is the same as when using a canvas, so it accepts CSS style property values.
						*
						* @property render.strokeStyle
						* @type string
						* @default a random colour
						*/
						/**
						* A `String` that defines the constraint rendering type. 
						* The possible values are 'line', 'pin', 'spring'.
						* An appropriate render type will be automatically chosen unless one is given in options.
						*
						* @property render.type
						* @type string
						* @default 'line'
						*/
						/**
						* A `Boolean` that defines if the constraint's anchor points should be rendered.
						*
						* @property render.anchors
						* @type boolean
						* @default true
						*/
						/**
						* The first possible `Body` that this constraint is attached to.
						*
						* @property bodyA
						* @type body
						* @default null
						*/
						/**
						* The second possible `Body` that this constraint is attached to.
						*
						* @property bodyB
						* @type body
						* @default null
						*/
						/**
						* A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
						*
						* @property pointA
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
						*
						* @property pointB
						* @type vector
						* @default { x: 0, y: 0 }
						*/
						/**
						* A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
						* A value of `1` means the constraint should be very stiff.
						* A value of `0.2` means the constraint acts like a soft spring.
						*
						* @property stiffness
						* @type number
						* @default 1
						*/
						/**
						* A `Number` that specifies the damping of the constraint, 
						* i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
						* Damping will only be apparent when the constraint also has a very low `stiffness`.
						* A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
						* A value of `0` means the constraint will apply no damping.
						*
						* @property damping
						* @type number
						* @default 0
						*/
						/**
						* A `Number` that specifies the target resting length of the constraint. 
						* It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
						*
						* @property length
						* @type number
						*/
						/**
						* An object reserved for storing plugin-specific properties.
						*
						* @property plugin
						* @type {}
						*/
					})();
				}),
				(function(module$20, exports$14, __webpack_require__) {
					/**
					* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
					*
					* @class Axes
					*/
					var Axes = {};
					module$20.exports = Axes;
					var Vector = __webpack_require__(2);
					var Common = __webpack_require__(0);
					(function() {
						/**
						* Creates a new set of axes from the given vertices.
						* @method fromVertices
						* @param {vertices} vertices
						* @return {axes} A new axes from the given vertices
						*/
						Axes.fromVertices = function(vertices) {
							var axes = {};
							for (var i = 0; i < vertices.length; i++) {
								var j = (i + 1) % vertices.length, normal = Vector.normalise({
									x: vertices[j].y - vertices[i].y,
									y: vertices[i].x - vertices[j].x
								}), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
								gradient = gradient.toFixed(3).toString();
								axes[gradient] = normal;
							}
							return Common.values(axes);
						};
						/**
						* Rotates a set of axes by the given angle.
						* @method rotate
						* @param {axes} axes
						* @param {number} angle
						*/
						Axes.rotate = function(axes, angle) {
							if (angle === 0) return;
							var cos = Math.cos(angle), sin = Math.sin(angle);
							for (var i = 0; i < axes.length; i++) {
								var axis = axes[i], xx = axis.x * cos - axis.y * sin;
								axis.y = axis.x * sin + axis.y * cos;
								axis.x = xx;
							}
						};
					})();
				}),
				(function(module$21, exports$15, __webpack_require__) {
					/**
					* The `Matter.Bodies` module contains factory methods for creating rigid body models 
					* with commonly used body configurations (such as rectangles, circles and other polygons).
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Bodies
					*/
					var Bodies = {};
					module$21.exports = Bodies;
					var Vertices = __webpack_require__(3);
					var Common = __webpack_require__(0);
					var Body = __webpack_require__(4);
					var Bounds = __webpack_require__(1);
					var Vector = __webpack_require__(2);
					(function() {
						/**
						* Creates a new rigid body model with a rectangle hull. 
						* The options parameter is an object that specifies any properties you wish to override the defaults.
						* See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
						* @method rectangle
						* @param {number} x
						* @param {number} y
						* @param {number} width
						* @param {number} height
						* @param {object} [options]
						* @return {body} A new rectangle body
						*/
						Bodies.rectangle = function(x, y, width, height, options) {
							options = options || {};
							var rectangle = {
								label: "Rectangle Body",
								position: {
									x,
									y
								},
								vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
							};
							if (options.chamfer) {
								var chamfer = options.chamfer;
								rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
								delete options.chamfer;
							}
							return Body.create(Common.extend({}, rectangle, options));
						};
						/**
						* Creates a new rigid body model with a trapezoid hull. 
						* The options parameter is an object that specifies any properties you wish to override the defaults.
						* See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
						* @method trapezoid
						* @param {number} x
						* @param {number} y
						* @param {number} width
						* @param {number} height
						* @param {number} slope
						* @param {object} [options]
						* @return {body} A new trapezoid body
						*/
						Bodies.trapezoid = function(x, y, width, height, slope, options) {
							options = options || {};
							slope *= .5;
							var roof = (1 - slope * 2) * width;
							var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
							if (slope < .5) verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
							else verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
							var trapezoid = {
								label: "Trapezoid Body",
								position: {
									x,
									y
								},
								vertices: Vertices.fromPath(verticesPath)
							};
							if (options.chamfer) {
								var chamfer = options.chamfer;
								trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
								delete options.chamfer;
							}
							return Body.create(Common.extend({}, trapezoid, options));
						};
						/**
						* Creates a new rigid body model with a circle hull. 
						* The options parameter is an object that specifies any properties you wish to override the defaults.
						* See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
						* @method circle
						* @param {number} x
						* @param {number} y
						* @param {number} radius
						* @param {object} [options]
						* @param {number} [maxSides]
						* @return {body} A new circle body
						*/
						Bodies.circle = function(x, y, radius, options, maxSides) {
							options = options || {};
							var circle = {
								label: "Circle Body",
								circleRadius: radius
							};
							maxSides = maxSides || 25;
							var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
							if (sides % 2 === 1) sides += 1;
							return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
						};
						/**
						* Creates a new rigid body model with a regular polygon hull with the given number of sides. 
						* The options parameter is an object that specifies any properties you wish to override the defaults.
						* See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
						* @method polygon
						* @param {number} x
						* @param {number} y
						* @param {number} sides
						* @param {number} radius
						* @param {object} [options]
						* @return {body} A new regular polygon body
						*/
						Bodies.polygon = function(x, y, sides, radius, options) {
							options = options || {};
							if (sides < 3) return Bodies.circle(x, y, radius, options);
							var theta = 2 * Math.PI / sides, path = "", offset = theta * .5;
							for (var i = 0; i < sides; i += 1) {
								var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
								path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
							}
							var polygon = {
								label: "Polygon Body",
								position: {
									x,
									y
								},
								vertices: Vertices.fromPath(path)
							};
							if (options.chamfer) {
								var chamfer = options.chamfer;
								polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
								delete options.chamfer;
							}
							return Body.create(Common.extend({}, polygon, options));
						};
						/**
						* Utility to create a compound body based on set(s) of vertices.
						* 
						* _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
						* package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
						* 
						* The resulting vertices are reorientated about their centre of mass,
						* and offset such that `body.position` corresponds to this point.
						* 
						* The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
						* To later move the centre of mass see `Body.setCentre`.
						* 
						* Note that automatic conconcave decomposition results are not always optimal. 
						* For best results, simplify the input vertices as much as possible first.
						* By default this function applies some addtional simplification to help.
						* 
						* Some outputs may also require further manual processing afterwards to be robust.
						* In particular some parts may need to be overlapped to avoid collision gaps.
						* Thin parts and sharp points should be avoided or removed where possible.
						*
						* The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
						* 
						* See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
						* @method fromVertices
						* @param {number} x
						* @param {number} y
						* @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
						* @param {object} [options] The body options.
						* @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
						* @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
						* @param {number} [minimumArea=10] Threshold when removing small parts.
						* @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
						* @return {body}
						*/
						Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
							var decomp = Common.getDecomp(), canDecomp = Boolean(decomp && decomp.quickDecomp), body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
							options = options || {};
							parts = [];
							flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
							removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : .01;
							minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
							removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : .01;
							if (!Common.isArray(vertexSets[0])) vertexSets = [vertexSets];
							for (v = 0; v < vertexSets.length; v += 1) {
								vertices = vertexSets[v];
								isConvex = Vertices.isConvex(vertices);
								isConcave = !isConvex;
								if (isConcave && !canDecomp) Common.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.");
								if (isConvex || !canDecomp) {
									if (isConvex) vertices = Vertices.clockwiseSort(vertices);
									else vertices = Vertices.hull(vertices);
									parts.push({
										position: {
											x,
											y
										},
										vertices
									});
								} else {
									var concave = vertices.map(function(vertex) {
										return [vertex.x, vertex.y];
									});
									decomp.makeCCW(concave);
									if (removeCollinear !== false) decomp.removeCollinearPoints(concave, removeCollinear);
									if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints) decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
									var decomposed = decomp.quickDecomp(concave);
									for (i = 0; i < decomposed.length; i++) {
										var chunkVertices = decomposed[i].map(function(vertices) {
											return {
												x: vertices[0],
												y: vertices[1]
											};
										});
										if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea) continue;
										parts.push({
											position: Vertices.centre(chunkVertices),
											vertices: chunkVertices
										});
									}
								}
							}
							for (i = 0; i < parts.length; i++) parts[i] = Body.create(Common.extend(parts[i], options));
							if (flagInternal) {
								var coincident_max_dist = 5;
								for (i = 0; i < parts.length; i++) {
									var partA = parts[i];
									for (j = i + 1; j < parts.length; j++) {
										var partB = parts[j];
										if (Bounds.overlaps(partA.bounds, partB.bounds)) {
											var pav = partA.vertices, pbv = partB.vertices;
											for (k = 0; k < partA.vertices.length; k++) for (z = 0; z < partB.vertices.length; z++) {
												var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
												if (da < coincident_max_dist && db < coincident_max_dist) {
													pav[k].isInternal = true;
													pbv[z].isInternal = true;
												}
											}
										}
									}
								}
							}
							if (parts.length > 1) {
								body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
								Body.setPosition(body, {
									x,
									y
								});
								return body;
							} else return parts[0];
						};
					})();
				}),
				(function(module$22, exports$16, __webpack_require__) {
					/**
					* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
					*
					* @class Detector
					*/
					var Detector = {};
					module$22.exports = Detector;
					var Common = __webpack_require__(0);
					var Collision = __webpack_require__(8);
					(function() {
						/**
						* Creates a new collision detector.
						* @method create
						* @param {} options
						* @return {detector} A new collision detector
						*/
						Detector.create = function(options) {
							return Common.extend({
								bodies: [],
								pairs: null
							}, options);
						};
						/**
						* Sets the list of bodies in the detector.
						* @method setBodies
						* @param {detector} detector
						* @param {body[]} bodies
						*/
						Detector.setBodies = function(detector, bodies) {
							detector.bodies = bodies.slice(0);
						};
						/**
						* Clears the detector including its list of bodies.
						* @method clear
						* @param {detector} detector
						*/
						Detector.clear = function(detector) {
							detector.bodies = [];
						};
						/**
						* Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
						* 
						* _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
						* If a specific ordering is required then apply a sort to the resulting array.
						* @method collisions
						* @param {detector} detector
						* @return {collision[]} collisions
						*/
						Detector.collisions = function(detector) {
							var collisions = [], pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, i, j;
							bodies.sort(Detector._compareBoundsX);
							for (i = 0; i < bodiesLength; i++) {
								var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
								for (j = i + 1; j < bodiesLength; j++) {
									var bodyB = bodies[j], boundsB = bodyB.bounds;
									if (boundsB.min.x > boundXMax) break;
									if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) continue;
									if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) continue;
									if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) continue;
									var partsBLength = bodyB.parts.length;
									if (partsASingle && partsBLength === 1) {
										var collision = collides(bodyA, bodyB, pairs);
										if (collision) collisions.push(collision);
									} else {
										var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
										for (var k = partsAStart; k < partsALength; k++) {
											var partA = bodyA.parts[k], boundsA = partA.bounds;
											for (var z = partsBStart; z < partsBLength; z++) {
												var partB = bodyB.parts[z], boundsB = partB.bounds;
												if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) continue;
												var collision = collides(partA, partB, pairs);
												if (collision) collisions.push(collision);
											}
										}
									}
								}
							}
							return collisions;
						};
						/**
						* Returns `true` if both supplied collision filters will allow a collision to occur.
						* See `body.collisionFilter` for more information.
						* @method canCollide
						* @param {} filterA
						* @param {} filterB
						* @return {bool} `true` if collision can occur
						*/
						Detector.canCollide = function(filterA, filterB) {
							if (filterA.group === filterB.group && filterA.group !== 0) return filterA.group > 0;
							return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
						};
						/**
						* The comparison function used in the broadphase algorithm.
						* Returns the signed delta of the bodies bounds on the x-axis.
						* @private
						* @method _sortCompare
						* @param {body} bodyA
						* @param {body} bodyB
						* @return {number} The signed delta used for sorting
						*/
						Detector._compareBoundsX = function(bodyA, bodyB) {
							return bodyA.bounds.min.x - bodyB.bounds.min.x;
						};
						/**
						* The array of `Matter.Body` between which the detector finds collisions.
						* 
						* _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
						* @property bodies
						* @type body[]
						* @default []
						*/
						/**
						* Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
						* @property pairs
						* @type {pairs|null}
						* @default null
						*/
					})();
				}),
				(function(module$23, exports$17, __webpack_require__) {
					/**
					* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
					*
					* @class Mouse
					*/
					var Mouse = {};
					module$23.exports = Mouse;
					var Common = __webpack_require__(0);
					(function() {
						/**
						* Creates a mouse input.
						* @method create
						* @param {HTMLElement} element
						* @return {mouse} A new mouse
						*/
						Mouse.create = function(element) {
							var mouse = {};
							if (!element) Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
							mouse.element = element || document.body;
							mouse.absolute = {
								x: 0,
								y: 0
							};
							mouse.position = {
								x: 0,
								y: 0
							};
							mouse.mousedownPosition = {
								x: 0,
								y: 0
							};
							mouse.mouseupPosition = {
								x: 0,
								y: 0
							};
							mouse.offset = {
								x: 0,
								y: 0
							};
							mouse.scale = {
								x: 1,
								y: 1
							};
							mouse.wheelDelta = 0;
							mouse.button = -1;
							mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
							mouse.sourceEvents = {
								mousemove: null,
								mousedown: null,
								mouseup: null,
								mousewheel: null
							};
							mouse.mousemove = function(event) {
								var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio);
								if (event.changedTouches) {
									mouse.button = 0;
									event.preventDefault();
								}
								mouse.absolute.x = position.x;
								mouse.absolute.y = position.y;
								mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
								mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
								mouse.sourceEvents.mousemove = event;
							};
							mouse.mousedown = function(event) {
								var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio);
								if (event.changedTouches) {
									mouse.button = 0;
									event.preventDefault();
								} else mouse.button = event.button;
								mouse.absolute.x = position.x;
								mouse.absolute.y = position.y;
								mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
								mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
								mouse.mousedownPosition.x = mouse.position.x;
								mouse.mousedownPosition.y = mouse.position.y;
								mouse.sourceEvents.mousedown = event;
							};
							mouse.mouseup = function(event) {
								var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio);
								if (event.changedTouches) event.preventDefault();
								mouse.button = -1;
								mouse.absolute.x = position.x;
								mouse.absolute.y = position.y;
								mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
								mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
								mouse.mouseupPosition.x = mouse.position.x;
								mouse.mouseupPosition.y = mouse.position.y;
								mouse.sourceEvents.mouseup = event;
							};
							mouse.mousewheel = function(event) {
								mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
								event.preventDefault();
							};
							Mouse.setElement(mouse, mouse.element);
							return mouse;
						};
						/**
						* Sets the element the mouse is bound to (and relative to).
						* @method setElement
						* @param {mouse} mouse
						* @param {HTMLElement} element
						*/
						Mouse.setElement = function(mouse, element) {
							mouse.element = element;
							element.addEventListener("mousemove", mouse.mousemove);
							element.addEventListener("mousedown", mouse.mousedown);
							element.addEventListener("mouseup", mouse.mouseup);
							element.addEventListener("mousewheel", mouse.mousewheel);
							element.addEventListener("DOMMouseScroll", mouse.mousewheel);
							element.addEventListener("touchmove", mouse.mousemove);
							element.addEventListener("touchstart", mouse.mousedown);
							element.addEventListener("touchend", mouse.mouseup);
						};
						/**
						* Clears all captured source events.
						* @method clearSourceEvents
						* @param {mouse} mouse
						*/
						Mouse.clearSourceEvents = function(mouse) {
							mouse.sourceEvents.mousemove = null;
							mouse.sourceEvents.mousedown = null;
							mouse.sourceEvents.mouseup = null;
							mouse.sourceEvents.mousewheel = null;
							mouse.wheelDelta = 0;
						};
						/**
						* Sets the mouse position offset.
						* @method setOffset
						* @param {mouse} mouse
						* @param {vector} offset
						*/
						Mouse.setOffset = function(mouse, offset) {
							mouse.offset.x = offset.x;
							mouse.offset.y = offset.y;
							mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
							mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
						};
						/**
						* Sets the mouse position scale.
						* @method setScale
						* @param {mouse} mouse
						* @param {vector} scale
						*/
						Mouse.setScale = function(mouse, scale) {
							mouse.scale.x = scale.x;
							mouse.scale.y = scale.y;
							mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
							mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
						};
						/**
						* Gets the mouse position relative to an element given a screen pixel ratio.
						* @method _getRelativeMousePosition
						* @private
						* @param {} event
						* @param {} element
						* @param {number} pixelRatio
						* @return {}
						*/
						Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
							var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== void 0 ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== void 0 ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
							if (touches) {
								x = touches[0].pageX - elementBounds.left - scrollX;
								y = touches[0].pageY - elementBounds.top - scrollY;
							} else {
								x = event.pageX - elementBounds.left - scrollX;
								y = event.pageY - elementBounds.top - scrollY;
							}
							return {
								x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
								y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
							};
						};
					})();
				}),
				(function(module$24, exports$18, __webpack_require__) {
					/**
					* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
					*
					* @class Plugin
					*/
					var Plugin = {};
					module$24.exports = Plugin;
					var Common = __webpack_require__(0);
					(function() {
						Plugin._registry = {};
						/**
						* Registers a plugin object so it can be resolved later by name.
						* @method register
						* @param plugin {} The plugin to register.
						* @return {object} The plugin.
						*/
						Plugin.register = function(plugin) {
							if (!Plugin.isPlugin(plugin)) Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
							if (plugin.name in Plugin._registry) {
								var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
								if (pluginVersion > registeredVersion) {
									Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
									Plugin._registry[plugin.name] = plugin;
								} else if (pluginVersion < registeredVersion) Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
								else if (plugin !== registered) Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
							} else Plugin._registry[plugin.name] = plugin;
							return plugin;
						};
						/**
						* Resolves a dependency to a plugin object from the registry if it exists. 
						* The `dependency` may contain a version, but only the name matters when resolving.
						* @method resolve
						* @param dependency {string} The dependency.
						* @return {object} The plugin if resolved, otherwise `undefined`.
						*/
						Plugin.resolve = function(dependency) {
							return Plugin._registry[Plugin.dependencyParse(dependency).name];
						};
						/**
						* Returns a pretty printed plugin name and version.
						* @method toString
						* @param plugin {} The plugin.
						* @return {string} Pretty printed plugin name and version.
						*/
						Plugin.toString = function(plugin) {
							return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
						};
						/**
						* Returns `true` if the object meets the minimum standard to be considered a plugin.
						* This means it must define the following properties:
						* - `name`
						* - `version`
						* - `install`
						* @method isPlugin
						* @param obj {} The obj to test.
						* @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
						*/
						Plugin.isPlugin = function(obj) {
							return obj && obj.name && obj.version && obj.install;
						};
						/**
						* Returns `true` if a plugin with the given `name` been installed on `module`.
						* @method isUsed
						* @param module {} The module.
						* @param name {string} The plugin name.
						* @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
						*/
						Plugin.isUsed = function(module$25, name) {
							return module$25.used.indexOf(name) > -1;
						};
						/**
						* Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
						* If `plugin.for` is not specified then it is assumed to be applicable.
						* The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
						* @method isFor
						* @param plugin {} The plugin.
						* @param module {} The module.
						* @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
						*/
						Plugin.isFor = function(plugin, module$26) {
							var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
							return !plugin.for || module$26.name === parsed.name && Plugin.versionSatisfies(module$26.version, parsed.range);
						};
						/**
						* Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
						* For installing plugins on `Matter` see the convenience function `Matter.use`.
						* Plugins may be specified either by their name or a reference to the plugin object.
						* Plugins themselves may specify further dependencies, but each plugin is installed only once.
						* Order is important, a topological sort is performed to find the best resulting order of installation.
						* This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
						* This function logs the resulting status of each dependency in the console, along with any warnings.
						* - A green tick \u2705 indicates a dependency was resolved and installed.
						* - An orange diamond \uD83D\uDD36 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
						* - A red cross \u274C indicates a dependency could not be resolved.
						* Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
						* @method use
						* @param module {} The module install plugins on.
						* @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
						*/
						Plugin.use = function(module$27, plugins) {
							module$27.uses = (module$27.uses || []).concat(plugins || []);
							if (module$27.uses.length === 0) {
								Common.warn("Plugin.use:", Plugin.toString(module$27), "does not specify any dependencies to install.");
								return;
							}
							var dependencies = Plugin.dependencies(module$27), sortedDependencies = Common.topologicalSort(dependencies), status = [];
							for (var i = 0; i < sortedDependencies.length; i += 1) {
								if (sortedDependencies[i] === module$27.name) continue;
								var plugin = Plugin.resolve(sortedDependencies[i]);
								if (!plugin) {
									status.push("\u274C " + sortedDependencies[i]);
									continue;
								}
								if (Plugin.isUsed(module$27, plugin.name)) continue;
								if (!Plugin.isFor(plugin, module$27)) {
									Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module$27) + ".");
									plugin._warned = true;
								}
								if (plugin.install) plugin.install(module$27);
								else {
									Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
									plugin._warned = true;
								}
								if (plugin._warned) {
									status.push("\uD83D\uDD36 " + Plugin.toString(plugin));
									delete plugin._warned;
								} else status.push("\u2705 " + Plugin.toString(plugin));
								module$27.used.push(plugin.name);
							}
							if (status.length > 0) Common.info(status.join("  "));
						};
						/**
						* Recursively finds all of a module's dependencies and returns a flat dependency graph.
						* @method dependencies
						* @param module {} The module.
						* @return {object} A dependency graph.
						*/
						Plugin.dependencies = function(module$28, tracked) {
							var parsedBase = Plugin.dependencyParse(module$28), name = parsedBase.name;
							tracked = tracked || {};
							if (name in tracked) return;
							module$28 = Plugin.resolve(module$28) || module$28;
							tracked[name] = Common.map(module$28.uses || [], function(dependency) {
								if (Plugin.isPlugin(dependency)) Plugin.register(dependency);
								var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
								if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
									Common.warn("Plugin.dependencies:", Plugin.toString(resolved), "does not satisfy", Plugin.toString(parsed), "used by", Plugin.toString(parsedBase) + ".");
									resolved._warned = true;
									module$28._warned = true;
								} else if (!resolved) {
									Common.warn("Plugin.dependencies:", Plugin.toString(dependency), "used by", Plugin.toString(parsedBase), "could not be resolved.");
									module$28._warned = true;
								}
								return parsed.name;
							});
							for (var i = 0; i < tracked[name].length; i += 1) Plugin.dependencies(tracked[name][i], tracked);
							return tracked;
						};
						/**
						* Parses a dependency string into its components.
						* The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
						* See documentation for `Plugin.versionParse` for a description of the format.
						* This function can also handle dependencies that are already resolved (e.g. a module object).
						* @method dependencyParse
						* @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
						* @return {object} The dependency parsed into its components.
						*/
						Plugin.dependencyParse = function(dependency) {
							if (Common.isString(dependency)) {
								if (!/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(dependency)) Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
								return {
									name: dependency.split("@")[0],
									range: dependency.split("@")[1] || "*"
								};
							}
							return {
								name: dependency.name,
								range: dependency.range || dependency.version
							};
						};
						/**
						* Parses a version string into its components.  
						* Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
						* Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
						* Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
						* Only the following range types are supported:
						* - Tilde ranges e.g. `~1.2.3`
						* - Caret ranges e.g. `^1.2.3`
						* - Greater than ranges e.g. `>1.2.3`
						* - Greater than or equal ranges e.g. `>=1.2.3`
						* - Exact version e.g. `1.2.3`
						* - Any version `*`
						* @method versionParse
						* @param range {string} The version string.
						* @return {object} The version range parsed into its components.
						*/
						Plugin.versionParse = function(range) {
							var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
							if (!pattern.test(range)) Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
							var parts = pattern.exec(range);
							var major = Number(parts[4]);
							var minor = Number(parts[5]);
							var patch = Number(parts[6]);
							return {
								isRange: Boolean(parts[1] || parts[2]),
								version: parts[3],
								range,
								operator: parts[1] || parts[2] || "",
								major,
								minor,
								patch,
								parts: [
									major,
									minor,
									patch
								],
								prerelease: parts[7],
								number: major * 1e8 + minor * 1e4 + patch
							};
						};
						/**
						* Returns `true` if `version` satisfies the given `range`.
						* See documentation for `Plugin.versionParse` for a description of the format.
						* If a version or range is not specified, then any version (`*`) is assumed to satisfy.
						* @method versionSatisfies
						* @param version {string} The version string.
						* @param range {string} The range string.
						* @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
						*/
						Plugin.versionSatisfies = function(version, range) {
							range = range || "*";
							var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
							if (r.isRange) {
								if (r.operator === "*" || version === "*") return true;
								if (r.operator === ">") return v.number > r.number;
								if (r.operator === ">=") return v.number >= r.number;
								if (r.operator === "~") return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
								if (r.operator === "^") {
									if (r.major > 0) return v.major === r.major && v.number >= r.number;
									if (r.minor > 0) return v.minor === r.minor && v.patch >= r.patch;
									return v.patch === r.patch;
								}
							}
							return version === range || version === "*";
						};
					})();
				}),
				(function(module$29, exports$19) {
					/**
					* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
					*
					* @class Contact
					*/
					var Contact = {};
					module$29.exports = Contact;
					(function() {
						/**
						* Creates a new contact.
						* @method create
						* @param {vertex} vertex
						* @return {contact} A new contact
						*/
						Contact.create = function(vertex) {
							return {
								vertex,
								normalImpulse: 0,
								tangentImpulse: 0
							};
						};
					})();
				}),
				(function(module$30, exports$20, __webpack_require__) {
					/**
					* The `Matter.Engine` module contains methods for creating and manipulating engines.
					* An engine is a controller that manages updating the simulation of the world.
					* See `Matter.Runner` for an optional game loop utility.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Engine
					*/
					var Engine = {};
					module$30.exports = Engine;
					var Sleeping = __webpack_require__(7);
					var Resolver = __webpack_require__(18);
					var Detector = __webpack_require__(13);
					var Pairs = __webpack_require__(19);
					var Events = __webpack_require__(5);
					var Composite = __webpack_require__(6);
					var Constraint = __webpack_require__(10);
					var Common = __webpack_require__(0);
					var Body = __webpack_require__(4);
					(function() {
						/**
						* Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
						* All properties have default values, and many are pre-calculated automatically based on other properties.
						* See the properties section below for detailed information on what you can pass via the `options` object.
						* @method create
						* @param {object} [options]
						* @return {engine} engine
						*/
						Engine.create = function(options) {
							options = options || {};
							var engine = Common.extend({
								positionIterations: 6,
								velocityIterations: 4,
								constraintIterations: 2,
								enableSleeping: false,
								events: [],
								plugin: {},
								gravity: {
									x: 0,
									y: 1,
									scale: .001
								},
								timing: {
									timestamp: 0,
									timeScale: 1,
									lastDelta: 0,
									lastElapsed: 0
								}
							}, options);
							engine.world = options.world || Composite.create({ label: "World" });
							engine.pairs = options.pairs || Pairs.create();
							engine.detector = options.detector || Detector.create();
							engine.grid = { buckets: [] };
							engine.world.gravity = engine.gravity;
							engine.broadphase = engine.grid;
							engine.metrics = {};
							return engine;
						};
						/**
						* Moves the simulation forward in time by `delta` milliseconds.
						* Triggers `beforeUpdate` and `afterUpdate` events.
						* Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
						* @method update
						* @param {engine} engine
						* @param {number} [delta=16.666]
						*/
						Engine.update = function(engine, delta) {
							var startTime = Common.now();
							var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
							delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
							delta *= timing.timeScale;
							timing.timestamp += delta;
							timing.lastDelta = delta;
							var event = {
								timestamp: timing.timestamp,
								delta
							};
							Events.trigger(engine, "beforeUpdate", event);
							var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
							if (world.isModified) {
								Detector.setBodies(detector, allBodies);
								Composite.setModified(world, false, false, true);
							}
							if (engine.enableSleeping) Sleeping.update(allBodies, delta);
							Engine._bodiesApplyGravity(allBodies, engine.gravity);
							if (delta > 0) Engine._bodiesUpdate(allBodies, delta);
							Constraint.preSolveAll(allBodies);
							for (i = 0; i < engine.constraintIterations; i++) Constraint.solveAll(allConstraints, delta);
							Constraint.postSolveAll(allBodies);
							detector.pairs = engine.pairs;
							var collisions = Detector.collisions(detector);
							Pairs.update(pairs, collisions, timestamp);
							if (engine.enableSleeping) Sleeping.afterCollisions(pairs.list);
							if (pairs.collisionStart.length > 0) Events.trigger(engine, "collisionStart", { pairs: pairs.collisionStart });
							var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
							Resolver.preSolvePosition(pairs.list);
							for (i = 0; i < engine.positionIterations; i++) Resolver.solvePosition(pairs.list, delta, positionDamping);
							Resolver.postSolvePosition(allBodies);
							Constraint.preSolveAll(allBodies);
							for (i = 0; i < engine.constraintIterations; i++) Constraint.solveAll(allConstraints, delta);
							Constraint.postSolveAll(allBodies);
							Resolver.preSolveVelocity(pairs.list);
							for (i = 0; i < engine.velocityIterations; i++) Resolver.solveVelocity(pairs.list, delta);
							Engine._bodiesUpdateVelocities(allBodies);
							if (pairs.collisionActive.length > 0) Events.trigger(engine, "collisionActive", { pairs: pairs.collisionActive });
							if (pairs.collisionEnd.length > 0) Events.trigger(engine, "collisionEnd", { pairs: pairs.collisionEnd });
							Engine._bodiesClearForces(allBodies);
							Events.trigger(engine, "afterUpdate", event);
							engine.timing.lastElapsed = Common.now() - startTime;
							return engine;
						};
						/**
						* Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
						* @method merge
						* @param {engine} engineA
						* @param {engine} engineB
						*/
						Engine.merge = function(engineA, engineB) {
							Common.extend(engineA, engineB);
							if (engineB.world) {
								engineA.world = engineB.world;
								Engine.clear(engineA);
								var bodies = Composite.allBodies(engineA.world);
								for (var i = 0; i < bodies.length; i++) {
									var body = bodies[i];
									Sleeping.set(body, false);
									body.id = Common.nextId();
								}
							}
						};
						/**
						* Clears the engine pairs and detector.
						* @method clear
						* @param {engine} engine
						*/
						Engine.clear = function(engine) {
							Pairs.clear(engine.pairs);
							Detector.clear(engine.detector);
						};
						/**
						* Zeroes the `body.force` and `body.torque` force buffers.
						* @method _bodiesClearForces
						* @private
						* @param {body[]} bodies
						*/
						Engine._bodiesClearForces = function(bodies) {
							var bodiesLength = bodies.length;
							for (var i = 0; i < bodiesLength; i++) {
								var body = bodies[i];
								body.force.x = 0;
								body.force.y = 0;
								body.torque = 0;
							}
						};
						/**
						* Applies gravitational acceleration to all `bodies`.
						* This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
						* 
						* @method _bodiesApplyGravity
						* @private
						* @param {body[]} bodies
						* @param {vector} gravity
						*/
						Engine._bodiesApplyGravity = function(bodies, gravity) {
							var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : .001, bodiesLength = bodies.length;
							if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) return;
							for (var i = 0; i < bodiesLength; i++) {
								var body = bodies[i];
								if (body.isStatic || body.isSleeping) continue;
								body.force.y += body.mass * gravity.y * gravityScale;
								body.force.x += body.mass * gravity.x * gravityScale;
							}
						};
						/**
						* Applies `Body.update` to all given `bodies`.
						* @method _bodiesUpdate
						* @private
						* @param {body[]} bodies
						* @param {number} delta The amount of time elapsed between updates
						*/
						Engine._bodiesUpdate = function(bodies, delta) {
							var bodiesLength = bodies.length;
							for (var i = 0; i < bodiesLength; i++) {
								var body = bodies[i];
								if (body.isStatic || body.isSleeping) continue;
								Body.update(body, delta);
							}
						};
						/**
						* Applies `Body.updateVelocities` to all given `bodies`.
						* @method _bodiesUpdateVelocities
						* @private
						* @param {body[]} bodies
						*/
						Engine._bodiesUpdateVelocities = function(bodies) {
							var bodiesLength = bodies.length;
							for (var i = 0; i < bodiesLength; i++) Body.updateVelocities(bodies[i]);
						};
						/**
						* A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
						* @deprecated use Matter.Runner.run(engine) instead
						* @method run
						* @param {engine} engine
						*/
						/**
						* Fired just before an update
						*
						* @event beforeUpdate
						* @param {object} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {number} event.delta The delta time in milliseconds value used in the update
						* @param {engine} event.source The source object of the event
						* @param {string} event.name The name of the event
						*/
						/**
						* Fired after engine update and all collision events
						*
						* @event afterUpdate
						* @param {object} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {number} event.delta The delta time in milliseconds value used in the update
						* @param {engine} event.source The source object of the event
						* @param {string} event.name The name of the event
						*/
						/**
						* Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
						*
						* @event collisionStart
						* @param {object} event An event object
						* @param {pair[]} event.pairs List of affected pairs
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {number} event.delta The delta time in milliseconds value used in the update
						* @param {engine} event.source The source object of the event
						* @param {string} event.name The name of the event
						*/
						/**
						* Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
						*
						* @event collisionActive
						* @param {object} event An event object
						* @param {pair[]} event.pairs List of affected pairs
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {number} event.delta The delta time in milliseconds value used in the update
						* @param {engine} event.source The source object of the event
						* @param {string} event.name The name of the event
						*/
						/**
						* Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
						*
						* @event collisionEnd
						* @param {object} event An event object
						* @param {pair[]} event.pairs List of affected pairs
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {number} event.delta The delta time in milliseconds value used in the update
						* @param {engine} event.source The source object of the event
						* @param {string} event.name The name of the event
						*/
						/**
						* An integer `Number` that specifies the number of position iterations to perform each update.
						* The higher the value, the higher quality the simulation will be at the expense of performance.
						*
						* @property positionIterations
						* @type number
						* @default 6
						*/
						/**
						* An integer `Number` that specifies the number of velocity iterations to perform each update.
						* The higher the value, the higher quality the simulation will be at the expense of performance.
						*
						* @property velocityIterations
						* @type number
						* @default 4
						*/
						/**
						* An integer `Number` that specifies the number of constraint iterations to perform each update.
						* The higher the value, the higher quality the simulation will be at the expense of performance.
						* The default value of `2` is usually very adequate.
						*
						* @property constraintIterations
						* @type number
						* @default 2
						*/
						/**
						* A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
						* Sleeping can improve stability and performance, but often at the expense of accuracy.
						*
						* @property enableSleeping
						* @type boolean
						* @default false
						*/
						/**
						* An `Object` containing properties regarding the timing systems of the engine. 
						*
						* @property timing
						* @type object
						*/
						/**
						* A `Number` that specifies the global scaling factor of time for all bodies.
						* A value of `0` freezes the simulation.
						* A value of `0.1` gives a slow-motion effect.
						* A value of `1.2` gives a speed-up effect.
						*
						* @property timing.timeScale
						* @type number
						* @default 1
						*/
						/**
						* A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
						* It is incremented on every `Engine.update` by the given `delta` argument. 
						* 
						* @property timing.timestamp
						* @type number
						* @default 0
						*/
						/**
						* A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
						* It is updated by timing from the start of the last `Engine.update` call until it ends.
						*
						* This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
						* 
						* @property timing.lastElapsed
						* @type number
						* @default 0
						*/
						/**
						* A `Number` that represents the `delta` value used in the last engine update.
						* 
						* @property timing.lastDelta
						* @type number
						* @default 0
						*/
						/**
						* A `Matter.Detector` instance.
						*
						* @property detector
						* @type detector
						* @default a Matter.Detector instance
						*/
						/**
						* A `Matter.Grid` instance.
						*
						* @deprecated replaced by `engine.detector`
						* @property grid
						* @type grid
						* @default a Matter.Grid instance
						*/
						/**
						* Replaced by and now alias for `engine.grid`.
						*
						* @deprecated replaced by `engine.detector`
						* @property broadphase
						* @type grid
						* @default a Matter.Grid instance
						*/
						/**
						* The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
						*
						* @property world
						* @type composite
						* @default a Matter.Composite instance
						*/
						/**
						* An object reserved for storing plugin-specific properties.
						*
						* @property plugin
						* @type {}
						*/
						/**
						* An optional gravitational acceleration applied to all bodies in `engine.world` on every update.
						* 
						* This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet. For gravity in other contexts, disable this and apply forces as needed.
						* 
						* To disable set the `scale` component to `0`.
						* 
						* This is split into three components for ease of use:  
						* a normalised direction (`x` and `y`) and magnitude (`scale`).
						*
						* @property gravity
						* @type object
						*/
						/**
						* The gravitational direction normal `x` component, to be multiplied by `gravity.scale`.
						* 
						* @property gravity.x
						* @type object
						* @default 0
						*/
						/**
						* The gravitational direction normal `y` component, to be multiplied by `gravity.scale`.
						*
						* @property gravity.y
						* @type object
						* @default 1
						*/
						/**
						* The magnitude of the gravitational acceleration.
						* 
						* @property gravity.scale
						* @type object
						* @default 0.001
						*/
					})();
				}),
				(function(module$31, exports$21, __webpack_require__) {
					/**
					* The `Matter.Resolver` module contains methods for resolving collision pairs.
					*
					* @class Resolver
					*/
					var Resolver = {};
					module$31.exports = Resolver;
					var Vertices = __webpack_require__(3);
					var Common = __webpack_require__(0);
					var Bounds = __webpack_require__(1);
					(function() {
						Resolver._restingThresh = 2;
						Resolver._restingThreshTangent = Math.sqrt(6);
						Resolver._positionDampen = .9;
						Resolver._positionWarming = .8;
						Resolver._frictionNormalMultiplier = 5;
						Resolver._frictionMaxStatic = Number.MAX_VALUE;
						/**
						* Prepare pairs for position solving.
						* @method preSolvePosition
						* @param {pair[]} pairs
						*/
						Resolver.preSolvePosition = function(pairs) {
							var i, pair, activeCount, pairsLength = pairs.length;
							for (i = 0; i < pairsLength; i++) {
								pair = pairs[i];
								if (!pair.isActive) continue;
								activeCount = pair.activeContacts.length;
								pair.collision.parentA.totalContacts += activeCount;
								pair.collision.parentB.totalContacts += activeCount;
							}
						};
						/**
						* Find a solution for pair positions.
						* @method solvePosition
						* @param {pair[]} pairs
						* @param {number} delta
						* @param {number} [damping=1]
						*/
						Resolver.solvePosition = function(pairs, delta, damping) {
							var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
							for (i = 0; i < pairsLength; i++) {
								pair = pairs[i];
								if (!pair.isActive || pair.isSensor) continue;
								collision = pair.collision;
								bodyA = collision.parentA;
								bodyB = collision.parentB;
								normal = collision.normal;
								pair.separation = normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
							}
							for (i = 0; i < pairsLength; i++) {
								pair = pairs[i];
								if (!pair.isActive || pair.isSensor) continue;
								collision = pair.collision;
								bodyA = collision.parentA;
								bodyB = collision.parentB;
								normal = collision.normal;
								positionImpulse = pair.separation - pair.slop * slopDampen;
								if (bodyA.isStatic || bodyB.isStatic) positionImpulse *= 2;
								if (!(bodyA.isStatic || bodyA.isSleeping)) {
									contactShare = positionDampen / bodyA.totalContacts;
									bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
									bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
								}
								if (!(bodyB.isStatic || bodyB.isSleeping)) {
									contactShare = positionDampen / bodyB.totalContacts;
									bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
									bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
								}
							}
						};
						/**
						* Apply position resolution.
						* @method postSolvePosition
						* @param {body[]} bodies
						*/
						Resolver.postSolvePosition = function(bodies) {
							var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
							for (var i = 0; i < bodiesLength; i++) {
								var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
								body.totalContacts = 0;
								if (positionImpulseX !== 0 || positionImpulseY !== 0) {
									for (var j = 0; j < body.parts.length; j++) {
										var part = body.parts[j];
										verticesTranslate(part.vertices, positionImpulse);
										boundsUpdate(part.bounds, part.vertices, velocity);
										part.position.x += positionImpulseX;
										part.position.y += positionImpulseY;
									}
									body.positionPrev.x += positionImpulseX;
									body.positionPrev.y += positionImpulseY;
									if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
										positionImpulse.x = 0;
										positionImpulse.y = 0;
									} else {
										positionImpulse.x *= positionWarming;
										positionImpulse.y *= positionWarming;
									}
								}
							}
						};
						/**
						* Prepare pairs for velocity solving.
						* @method preSolveVelocity
						* @param {pair[]} pairs
						*/
						Resolver.preSolveVelocity = function(pairs) {
							var pairsLength = pairs.length, i, j;
							for (i = 0; i < pairsLength; i++) {
								var pair = pairs[i];
								if (!pair.isActive || pair.isSensor) continue;
								var contacts = pair.activeContacts, contactsLength = contacts.length, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
								for (j = 0; j < contactsLength; j++) {
									var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
									if (normalImpulse !== 0 || tangentImpulse !== 0) {
										var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
										if (!(bodyA.isStatic || bodyA.isSleeping)) {
											bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
											bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
											bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
										}
										if (!(bodyB.isStatic || bodyB.isSleeping)) {
											bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
											bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
											bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
										}
									}
								}
							}
						};
						/**
						* Find a solution for pair velocities.
						* @method solveVelocity
						* @param {pair[]} pairs
						* @param {number} delta
						*/
						Resolver.solveVelocity = function(pairs, delta) {
							var timeScale = delta / Common._baseDelta, timeScaleCubed = timeScale * timeScale * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
							for (i = 0; i < pairsLength; i++) {
								var pair = pairs[i];
								if (!pair.isActive || pair.isSensor) continue;
								var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, bodyAVelocity = bodyA.velocity, bodyBVelocity = bodyB.velocity, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, contacts = pair.activeContacts, contactsLength = contacts.length, contactShare = 1 / contactsLength, inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier;
								bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
								bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
								bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
								bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
								bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
								bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;
								for (j = 0; j < contactsLength; j++) {
									var contact = contacts[j], contactVertex = contact.vertex;
									var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
									var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity, velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity, velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity, velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;
									var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
									var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
									var normalOverlap = pair.separation + normalVelocity;
									var normalForce = Math.min(normalOverlap, 1);
									normalForce = normalOverlap < 0 ? 0 : normalForce;
									var frictionLimit = normalForce * friction;
									if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
										maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
										tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
										if (tangentImpulse < -maxFriction) tangentImpulse = -maxFriction;
										else if (tangentImpulse > maxFriction) tangentImpulse = maxFriction;
									} else {
										tangentImpulse = tangentVelocity;
										maxFriction = frictionMaxStatic;
									}
									var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
									var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
									tangentImpulse *= share;
									if (normalVelocity < restingThresh) contact.normalImpulse = 0;
									else {
										var contactNormalImpulse = contact.normalImpulse;
										contact.normalImpulse += normalImpulse;
										if (contact.normalImpulse > 0) contact.normalImpulse = 0;
										normalImpulse = contact.normalImpulse - contactNormalImpulse;
									}
									if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) contact.tangentImpulse = 0;
									else {
										var contactTangentImpulse = contact.tangentImpulse;
										contact.tangentImpulse += tangentImpulse;
										if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
										if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
										tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
									}
									var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
									if (!(bodyA.isStatic || bodyA.isSleeping)) {
										bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
										bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
										bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
									}
									if (!(bodyB.isStatic || bodyB.isSleeping)) {
										bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
										bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
										bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
									}
								}
							}
						};
					})();
				}),
				(function(module$32, exports$22, __webpack_require__) {
					/**
					* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
					*
					* @class Pairs
					*/
					var Pairs = {};
					module$32.exports = Pairs;
					var Pair = __webpack_require__(9);
					var Common = __webpack_require__(0);
					(function() {
						/**
						* Creates a new pairs structure.
						* @method create
						* @param {object} options
						* @return {pairs} A new pairs structure
						*/
						Pairs.create = function(options) {
							return Common.extend({
								table: {},
								list: [],
								collisionStart: [],
								collisionActive: [],
								collisionEnd: []
							}, options);
						};
						/**
						* Updates pairs given a list of collisions.
						* @method update
						* @param {object} pairs
						* @param {collision[]} collisions
						* @param {number} timestamp
						*/
						Pairs.update = function(pairs, collisions, timestamp) {
							var pairsList = pairs.list, pairsListLength = pairsList.length, pairsTable = pairs.table, collisionsLength = collisions.length, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collision, pairIndex, pair, i;
							collisionStart.length = 0;
							collisionEnd.length = 0;
							collisionActive.length = 0;
							for (i = 0; i < pairsListLength; i++) pairsList[i].confirmedActive = false;
							for (i = 0; i < collisionsLength; i++) {
								collision = collisions[i];
								pair = collision.pair;
								if (pair) {
									if (pair.isActive) collisionActive.push(pair);
									else collisionStart.push(pair);
									Pair.update(pair, collision, timestamp);
									pair.confirmedActive = true;
								} else {
									pair = Pair.create(collision, timestamp);
									pairsTable[pair.id] = pair;
									collisionStart.push(pair);
									pairsList.push(pair);
								}
							}
							var removePairIndex = [];
							pairsListLength = pairsList.length;
							for (i = 0; i < pairsListLength; i++) {
								pair = pairsList[i];
								if (!pair.confirmedActive) {
									Pair.setActive(pair, false, timestamp);
									collisionEnd.push(pair);
									if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) removePairIndex.push(i);
								}
							}
							for (i = 0; i < removePairIndex.length; i++) {
								pairIndex = removePairIndex[i] - i;
								pair = pairsList[pairIndex];
								pairsList.splice(pairIndex, 1);
								delete pairsTable[pair.id];
							}
						};
						/**
						* Clears the given pairs structure.
						* @method clear
						* @param {pairs} pairs
						* @return {pairs} pairs
						*/
						Pairs.clear = function(pairs) {
							pairs.table = {};
							pairs.list.length = 0;
							pairs.collisionStart.length = 0;
							pairs.collisionActive.length = 0;
							pairs.collisionEnd.length = 0;
							return pairs;
						};
					})();
				}),
				(function(module$33, exports$23, __webpack_require__) {
					var Matter = module$33.exports = __webpack_require__(21);
					Matter.Axes = __webpack_require__(11);
					Matter.Bodies = __webpack_require__(12);
					Matter.Body = __webpack_require__(4);
					Matter.Bounds = __webpack_require__(1);
					Matter.Collision = __webpack_require__(8);
					Matter.Common = __webpack_require__(0);
					Matter.Composite = __webpack_require__(6);
					Matter.Composites = __webpack_require__(22);
					Matter.Constraint = __webpack_require__(10);
					Matter.Contact = __webpack_require__(16);
					Matter.Detector = __webpack_require__(13);
					Matter.Engine = __webpack_require__(17);
					Matter.Events = __webpack_require__(5);
					Matter.Grid = __webpack_require__(23);
					Matter.Mouse = __webpack_require__(14);
					Matter.MouseConstraint = __webpack_require__(24);
					Matter.Pair = __webpack_require__(9);
					Matter.Pairs = __webpack_require__(19);
					Matter.Plugin = __webpack_require__(15);
					Matter.Query = __webpack_require__(25);
					Matter.Render = __webpack_require__(26);
					Matter.Resolver = __webpack_require__(18);
					Matter.Runner = __webpack_require__(27);
					Matter.SAT = __webpack_require__(28);
					Matter.Sleeping = __webpack_require__(7);
					Matter.Svg = __webpack_require__(29);
					Matter.Vector = __webpack_require__(2);
					Matter.Vertices = __webpack_require__(3);
					Matter.World = __webpack_require__(30);
					Matter.Engine.run = Matter.Runner.run;
					Matter.Common.deprecated(Matter.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
				}),
				(function(module$34, exports$24, __webpack_require__) {
					/**
					* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
					*
					* @class Matter
					*/
					var Matter = {};
					module$34.exports = Matter;
					var Plugin = __webpack_require__(15);
					var Common = __webpack_require__(0);
					(function() {
						/**
						* The library name.
						* @property name
						* @readOnly
						* @type {String}
						*/
						Matter.name = "matter-js";
						/**
						* The library version.
						* @property version
						* @readOnly
						* @type {String}
						*/
						Matter.version = "0.19.0";
						/**
						* A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
						* Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
						* @property uses
						* @type {Array}
						*/
						Matter.uses = [];
						/**
						* The plugins that have been installed through `Matter.Plugin.install`. Read only.
						* @property used
						* @readOnly
						* @type {Array}
						*/
						Matter.used = [];
						/**
						* Installs the given plugins on the `Matter` namespace.
						* This is a short-hand for `Plugin.use`, see it for more information.
						* Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
						* Avoid calling this function multiple times unless you intend to manually control installation order.
						* @method use
						* @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
						*/
						Matter.use = function() {
							Plugin.use(Matter, Array.prototype.slice.call(arguments));
						};
						/**
						* Chains a function to excute before the original function on the given `path` relative to `Matter`.
						* See also docs for `Common.chain`.
						* @method before
						* @param {string} path The path relative to `Matter`
						* @param {function} func The function to chain before the original
						* @return {function} The chained function that replaced the original
						*/
						Matter.before = function(path, func) {
							path = path.replace(/^Matter./, "");
							return Common.chainPathBefore(Matter, path, func);
						};
						/**
						* Chains a function to excute after the original function on the given `path` relative to `Matter`.
						* See also docs for `Common.chain`.
						* @method after
						* @param {string} path The path relative to `Matter`
						* @param {function} func The function to chain after the original
						* @return {function} The chained function that replaced the original
						*/
						Matter.after = function(path, func) {
							path = path.replace(/^Matter./, "");
							return Common.chainPathAfter(Matter, path, func);
						};
					})();
				}),
				(function(module$35, exports$25, __webpack_require__) {
					/**
					* The `Matter.Composites` module contains factory methods for creating composite bodies
					* with commonly used configurations (such as stacks and chains).
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Composites
					*/
					var Composites = {};
					module$35.exports = Composites;
					var Composite = __webpack_require__(6);
					var Constraint = __webpack_require__(10);
					var Common = __webpack_require__(0);
					var Body = __webpack_require__(4);
					var Bodies = __webpack_require__(12);
					var deprecated = Common.deprecated;
					(function() {
						/**
						* Create a new composite containing bodies created in the callback in a grid arrangement.
						* This function uses the body's bounds to prevent overlaps.
						* @method stack
						* @param {number} xx
						* @param {number} yy
						* @param {number} columns
						* @param {number} rows
						* @param {number} columnGap
						* @param {number} rowGap
						* @param {function} callback
						* @return {composite} A new composite containing objects created in the callback
						*/
						Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
							var stack = Composite.create({ label: "Stack" }), x = xx, y = yy, lastBody, i = 0;
							for (var row = 0; row < rows; row++) {
								var maxHeight = 0;
								for (var column = 0; column < columns; column++) {
									var body = callback(x, y, column, row, lastBody, i);
									if (body) {
										var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
										if (bodyHeight > maxHeight) maxHeight = bodyHeight;
										Body.translate(body, {
											x: bodyWidth * .5,
											y: bodyHeight * .5
										});
										x = body.bounds.max.x + columnGap;
										Composite.addBody(stack, body);
										lastBody = body;
										i += 1;
									} else x += columnGap;
								}
								y += maxHeight + rowGap;
								x = xx;
							}
							return stack;
						};
						/**
						* Chains all bodies in the given composite together using constraints.
						* @method chain
						* @param {composite} composite
						* @param {number} xOffsetA
						* @param {number} yOffsetA
						* @param {number} xOffsetB
						* @param {number} yOffsetB
						* @param {object} options
						* @return {composite} A new composite containing objects chained together with constraints
						*/
						Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
							var bodies = composite.bodies;
							for (var i = 1; i < bodies.length; i++) {
								var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
								var defaults = {
									bodyA,
									pointA: {
										x: bodyAWidth * xOffsetA,
										y: bodyAHeight * yOffsetA
									},
									bodyB,
									pointB: {
										x: bodyBWidth * xOffsetB,
										y: bodyBHeight * yOffsetB
									}
								};
								var constraint = Common.extend(defaults, options);
								Composite.addConstraint(composite, Constraint.create(constraint));
							}
							composite.label += " Chain";
							return composite;
						};
						/**
						* Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
						* @method mesh
						* @param {composite} composite
						* @param {number} columns
						* @param {number} rows
						* @param {boolean} crossBrace
						* @param {object} options
						* @return {composite} The composite containing objects meshed together with constraints
						*/
						Composites.mesh = function(composite, columns, rows, crossBrace, options) {
							var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
							for (row = 0; row < rows; row++) {
								for (col = 1; col < columns; col++) {
									bodyA = bodies[col - 1 + row * columns];
									bodyB = bodies[col + row * columns];
									Composite.addConstraint(composite, Constraint.create(Common.extend({
										bodyA,
										bodyB
									}, options)));
								}
								if (row > 0) for (col = 0; col < columns; col++) {
									bodyA = bodies[col + (row - 1) * columns];
									bodyB = bodies[col + row * columns];
									Composite.addConstraint(composite, Constraint.create(Common.extend({
										bodyA,
										bodyB
									}, options)));
									if (crossBrace && col > 0) {
										bodyC = bodies[col - 1 + (row - 1) * columns];
										Composite.addConstraint(composite, Constraint.create(Common.extend({
											bodyA: bodyC,
											bodyB
										}, options)));
									}
									if (crossBrace && col < columns - 1) {
										bodyC = bodies[col + 1 + (row - 1) * columns];
										Composite.addConstraint(composite, Constraint.create(Common.extend({
											bodyA: bodyC,
											bodyB
										}, options)));
									}
								}
							}
							composite.label += " Mesh";
							return composite;
						};
						/**
						* Create a new composite containing bodies created in the callback in a pyramid arrangement.
						* This function uses the body's bounds to prevent overlaps.
						* @method pyramid
						* @param {number} xx
						* @param {number} yy
						* @param {number} columns
						* @param {number} rows
						* @param {number} columnGap
						* @param {number} rowGap
						* @param {function} callback
						* @return {composite} A new composite containing objects created in the callback
						*/
						Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
							return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
								var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
								if (row > actualRows) return;
								row = actualRows - row;
								var start = row, end = columns - 1 - row;
								if (column < start || column > end) return;
								if (i === 1) Body.translate(lastBody, {
									x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth,
									y: 0
								});
								return callback(xx + (lastBody ? column * lastBodyWidth : 0) + column * columnGap, y, column, row, lastBody, i);
							});
						};
						/**
						* This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
						* @deprecated moved to newtonsCradle example
						* @method newtonsCradle
						* @param {number} xx
						* @param {number} yy
						* @param {number} number
						* @param {number} size
						* @param {number} length
						* @return {composite} A new composite newtonsCradle body
						*/
						Composites.newtonsCradle = function(xx, yy, number, size, length) {
							var newtonsCradle = Composite.create({ label: "Newtons Cradle" });
							for (var i = 0; i < number; i++) {
								var separation = 1.9, circle = Bodies.circle(xx + i * (size * separation), yy + length, size, {
									inertia: Infinity,
									restitution: 1,
									friction: 0,
									frictionAir: 1e-4,
									slop: 1
								}), constraint = Constraint.create({
									pointA: {
										x: xx + i * (size * separation),
										y: yy
									},
									bodyB: circle
								});
								Composite.addBody(newtonsCradle, circle);
								Composite.addConstraint(newtonsCradle, constraint);
							}
							return newtonsCradle;
						};
						deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example");
						/**
						* This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
						* @deprecated moved to car example
						* @method car
						* @param {number} xx
						* @param {number} yy
						* @param {number} width
						* @param {number} height
						* @param {number} wheelSize
						* @return {composite} A new composite car body
						*/
						Composites.car = function(xx, yy, width, height, wheelSize) {
							var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * .5 + wheelBase, wheelBOffset = width * .5 - wheelBase, wheelYOffset = 0;
							var car = Composite.create({ label: "Car" }), body = Bodies.rectangle(xx, yy, width, height, {
								collisionFilter: { group },
								chamfer: { radius: height * .5 },
								density: 2e-4
							});
							var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
								collisionFilter: { group },
								friction: .8
							});
							var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
								collisionFilter: { group },
								friction: .8
							});
							var axelA = Constraint.create({
								bodyB: body,
								pointB: {
									x: wheelAOffset,
									y: wheelYOffset
								},
								bodyA: wheelA,
								stiffness: 1,
								length: 0
							});
							var axelB = Constraint.create({
								bodyB: body,
								pointB: {
									x: wheelBOffset,
									y: wheelYOffset
								},
								bodyA: wheelB,
								stiffness: 1,
								length: 0
							});
							Composite.addBody(car, body);
							Composite.addBody(car, wheelA);
							Composite.addBody(car, wheelB);
							Composite.addConstraint(car, axelA);
							Composite.addConstraint(car, axelB);
							return car;
						};
						deprecated(Composites, "car", "Composites.car \u27A4 moved to car example");
						/**
						* This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
						* and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
						* @deprecated moved to softBody and cloth examples
						* @method softBody
						* @param {number} xx
						* @param {number} yy
						* @param {number} columns
						* @param {number} rows
						* @param {number} columnGap
						* @param {number} rowGap
						* @param {boolean} crossBrace
						* @param {number} particleRadius
						* @param {} particleOptions
						* @param {} constraintOptions
						* @return {composite} A new composite softBody
						*/
						Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
							particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
							constraintOptions = Common.extend({
								stiffness: .2,
								render: {
									type: "line",
									anchors: false
								}
							}, constraintOptions);
							var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
								return Bodies.circle(x, y, particleRadius, particleOptions);
							});
							Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
							softBody.label = "Soft Body";
							return softBody;
						};
						deprecated(Composites, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
					})();
				}),
				(function(module$36, exports$26, __webpack_require__) {
					/**
					* This module has now been replaced by `Matter.Detector`.
					*
					* All usage should be migrated to `Matter.Detector` or another alternative.
					* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
					*
					* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
					*
					* @class Grid
					* @deprecated
					*/
					var Grid = {};
					module$36.exports = Grid;
					var Pair = __webpack_require__(9);
					var Common = __webpack_require__(0);
					var deprecated = Common.deprecated;
					(function() {
						/**
						* Creates a new grid.
						* @deprecated replaced by Matter.Detector
						* @method create
						* @param {} options
						* @return {grid} A new grid
						*/
						Grid.create = function(options) {
							return Common.extend({
								buckets: {},
								pairs: {},
								pairsList: [],
								bucketWidth: 48,
								bucketHeight: 48
							}, options);
						};
						/**
						* The width of a single grid bucket.
						*
						* @property bucketWidth
						* @type number
						* @default 48
						*/
						/**
						* The height of a single grid bucket.
						*
						* @property bucketHeight
						* @type number
						* @default 48
						*/
						/**
						* Updates the grid.
						* @deprecated replaced by Matter.Detector
						* @method update
						* @param {grid} grid
						* @param {body[]} bodies
						* @param {engine} engine
						* @param {boolean} forceUpdate
						*/
						Grid.update = function(grid, bodies, engine, forceUpdate) {
							var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
							for (i = 0; i < bodies.length; i++) {
								var body = bodies[i];
								if (body.isSleeping && !forceUpdate) continue;
								if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)) continue;
								var newRegion = Grid._getRegion(grid, body);
								if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
									if (!body.region || forceUpdate) body.region = newRegion;
									var union = Grid._regionUnion(newRegion, body.region);
									for (col = union.startCol; col <= union.endCol; col++) for (row = union.startRow; row <= union.endRow; row++) {
										bucketId = Grid._getBucketId(col, row);
										bucket = buckets[bucketId];
										var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
										var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
										if (!isInsideNewRegion && isInsideOldRegion) {
											if (isInsideOldRegion) {
												if (bucket) Grid._bucketRemoveBody(grid, bucket, body);
											}
										}
										if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
											if (!bucket) bucket = Grid._createBucket(buckets, bucketId);
											Grid._bucketAddBody(grid, bucket, body);
										}
									}
									body.region = newRegion;
									gridChanged = true;
								}
							}
							if (gridChanged) grid.pairsList = Grid._createActivePairsList(grid);
						};
						deprecated(Grid, "update", "Grid.update \u27A4 replaced by Matter.Detector");
						/**
						* Clears the grid.
						* @deprecated replaced by Matter.Detector
						* @method clear
						* @param {grid} grid
						*/
						Grid.clear = function(grid) {
							grid.buckets = {};
							grid.pairs = {};
							grid.pairsList = [];
						};
						deprecated(Grid, "clear", "Grid.clear \u27A4 replaced by Matter.Detector");
						/**
						* Finds the union of two regions.
						* @method _regionUnion
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} regionA
						* @param {} regionB
						* @return {} region
						*/
						Grid._regionUnion = function(regionA, regionB) {
							var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
							return Grid._createRegion(startCol, endCol, startRow, endRow);
						};
						/**
						* Gets the region a given body falls in for a given grid.
						* @method _getRegion
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} grid
						* @param {} body
						* @return {} region
						*/
						Grid._getRegion = function(grid, body) {
							var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
							return Grid._createRegion(startCol, endCol, startRow, endRow);
						};
						/**
						* Creates a region.
						* @method _createRegion
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} startCol
						* @param {} endCol
						* @param {} startRow
						* @param {} endRow
						* @return {} region
						*/
						Grid._createRegion = function(startCol, endCol, startRow, endRow) {
							return {
								id: startCol + "," + endCol + "," + startRow + "," + endRow,
								startCol,
								endCol,
								startRow,
								endRow
							};
						};
						/**
						* Gets the bucket id at the given position.
						* @method _getBucketId
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} column
						* @param {} row
						* @return {string} bucket id
						*/
						Grid._getBucketId = function(column, row) {
							return "C" + column + "R" + row;
						};
						/**
						* Creates a bucket.
						* @method _createBucket
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} buckets
						* @param {} bucketId
						* @return {} bucket
						*/
						Grid._createBucket = function(buckets, bucketId) {
							return buckets[bucketId] = [];
						};
						/**
						* Adds a body to a bucket.
						* @method _bucketAddBody
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} grid
						* @param {} bucket
						* @param {} body
						*/
						Grid._bucketAddBody = function(grid, bucket, body) {
							var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
							for (i = 0; i < bucketLength; i++) {
								var bodyB = bucket[i];
								if (body.id === bodyB.id || body.isStatic && bodyB.isStatic) continue;
								var id = pairId(body, bodyB), pair = gridPairs[id];
								if (pair) pair[2] += 1;
								else gridPairs[id] = [
									body,
									bodyB,
									1
								];
							}
							bucket.push(body);
						};
						/**
						* Removes a body from a bucket.
						* @method _bucketRemoveBody
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} grid
						* @param {} bucket
						* @param {} body
						*/
						Grid._bucketRemoveBody = function(grid, bucket, body) {
							var gridPairs = grid.pairs, pairId = Pair.id, i;
							bucket.splice(Common.indexOf(bucket, body), 1);
							var bucketLength = bucket.length;
							for (i = 0; i < bucketLength; i++) {
								var pair = gridPairs[pairId(body, bucket[i])];
								if (pair) pair[2] -= 1;
							}
						};
						/**
						* Generates a list of the active pairs in the grid.
						* @method _createActivePairsList
						* @deprecated replaced by Matter.Detector
						* @private
						* @param {} grid
						* @return [] pairs
						*/
						Grid._createActivePairsList = function(grid) {
							var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
							for (k = 0; k < pairKeysLength; k++) {
								pair = gridPairs[pairKeys[k]];
								if (pair[2] > 0) pairs.push(pair);
								else delete gridPairs[pairKeys[k]];
							}
							return pairs;
						};
					})();
				}),
				(function(module$37, exports$27, __webpack_require__) {
					/**
					* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
					* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class MouseConstraint
					*/
					var MouseConstraint = {};
					module$37.exports = MouseConstraint;
					var Vertices = __webpack_require__(3);
					var Sleeping = __webpack_require__(7);
					var Mouse = __webpack_require__(14);
					var Events = __webpack_require__(5);
					var Detector = __webpack_require__(13);
					var Constraint = __webpack_require__(10);
					var Composite = __webpack_require__(6);
					var Common = __webpack_require__(0);
					var Bounds = __webpack_require__(1);
					(function() {
						/**
						* Creates a new mouse constraint.
						* All properties have default values, and many are pre-calculated automatically based on other properties.
						* See the properties section below for detailed information on what you can pass via the `options` object.
						* @method create
						* @param {engine} engine
						* @param {} options
						* @return {MouseConstraint} A new MouseConstraint
						*/
						MouseConstraint.create = function(engine, options) {
							var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
							if (!mouse) {
								if (engine && engine.render && engine.render.canvas) mouse = Mouse.create(engine.render.canvas);
								else if (options && options.element) mouse = Mouse.create(options.element);
								else {
									mouse = Mouse.create();
									Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
								}
							}
							var constraint = Constraint.create({
								label: "Mouse Constraint",
								pointA: mouse.position,
								pointB: {
									x: 0,
									y: 0
								},
								length: .01,
								stiffness: .1,
								angularStiffness: 1,
								render: {
									strokeStyle: "#90EE90",
									lineWidth: 3
								}
							});
							var defaults = {
								type: "mouseConstraint",
								mouse,
								element: null,
								body: null,
								constraint,
								collisionFilter: {
									category: 1,
									mask: 4294967295,
									group: 0
								}
							};
							var mouseConstraint = Common.extend(defaults, options);
							Events.on(engine, "beforeUpdate", function() {
								var allBodies = Composite.allBodies(engine.world);
								MouseConstraint.update(mouseConstraint, allBodies);
								MouseConstraint._triggerEvents(mouseConstraint);
							});
							return mouseConstraint;
						};
						/**
						* Updates the given mouse constraint.
						* @private
						* @method update
						* @param {MouseConstraint} mouseConstraint
						* @param {body[]} bodies
						*/
						MouseConstraint.update = function(mouseConstraint, bodies) {
							var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
							if (mouse.button === 0) {
								if (!constraint.bodyB) for (var i = 0; i < bodies.length; i++) {
									body = bodies[i];
									if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
										var part = body.parts[j];
										if (Vertices.contains(part.vertices, mouse.position)) {
											constraint.pointA = mouse.position;
											constraint.bodyB = mouseConstraint.body = body;
											constraint.pointB = {
												x: mouse.position.x - body.position.x,
												y: mouse.position.y - body.position.y
											};
											constraint.angleB = body.angle;
											Sleeping.set(body, false);
											Events.trigger(mouseConstraint, "startdrag", {
												mouse,
												body
											});
											break;
										}
									}
								}
								else {
									Sleeping.set(constraint.bodyB, false);
									constraint.pointA = mouse.position;
								}
							} else {
								constraint.bodyB = mouseConstraint.body = null;
								constraint.pointB = null;
								if (body) Events.trigger(mouseConstraint, "enddrag", {
									mouse,
									body
								});
							}
						};
						/**
						* Triggers mouse constraint events.
						* @method _triggerEvents
						* @private
						* @param {mouse} mouseConstraint
						*/
						MouseConstraint._triggerEvents = function(mouseConstraint) {
							var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
							if (mouseEvents.mousemove) Events.trigger(mouseConstraint, "mousemove", { mouse });
							if (mouseEvents.mousedown) Events.trigger(mouseConstraint, "mousedown", { mouse });
							if (mouseEvents.mouseup) Events.trigger(mouseConstraint, "mouseup", { mouse });
							Mouse.clearSourceEvents(mouse);
						};
						/**
						* Fired when the mouse has moved (or a touch moves) during the last step
						*
						* @event mousemove
						* @param {} event An event object
						* @param {mouse} event.mouse The engine's mouse instance
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when the mouse is down (or a touch has started) during the last step
						*
						* @event mousedown
						* @param {} event An event object
						* @param {mouse} event.mouse The engine's mouse instance
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when the mouse is up (or a touch has ended) during the last step
						*
						* @event mouseup
						* @param {} event An event object
						* @param {mouse} event.mouse The engine's mouse instance
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when the user starts dragging a body
						*
						* @event startdrag
						* @param {} event An event object
						* @param {mouse} event.mouse The engine's mouse instance
						* @param {body} event.body The body being dragged
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired when the user ends dragging a body
						*
						* @event enddrag
						* @param {} event An event object
						* @param {mouse} event.mouse The engine's mouse instance
						* @param {body} event.body The body that has stopped being dragged
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* A `String` denoting the type of object.
						*
						* @property type
						* @type string
						* @default "constraint"
						* @readOnly
						*/
						/**
						* The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
						*
						* @property mouse
						* @type mouse
						* @default mouse
						*/
						/**
						* The `Body` that is currently being moved by the user, or `null` if no body.
						*
						* @property body
						* @type body
						* @default null
						*/
						/**
						* The `Constraint` object that is used to move the body during interaction.
						*
						* @property constraint
						* @type constraint
						*/
						/**
						* An `Object` that specifies the collision filter properties.
						* The collision filter allows the user to define which types of body this mouse constraint can interact with.
						* See `body.collisionFilter` for more information.
						*
						* @property collisionFilter
						* @type object
						*/
					})();
				}),
				(function(module$38, exports$28, __webpack_require__) {
					/**
					* The `Matter.Query` module contains methods for performing collision queries.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Query
					*/
					var Query = {};
					module$38.exports = Query;
					var Vector = __webpack_require__(2);
					var Collision = __webpack_require__(8);
					var Bounds = __webpack_require__(1);
					var Bodies = __webpack_require__(12);
					var Vertices = __webpack_require__(3);
					(function() {
						/**
						* Returns a list of collisions between `body` and `bodies`.
						* @method collides
						* @param {body} body
						* @param {body[]} bodies
						* @return {collision[]} Collisions
						*/
						Query.collides = function(body, bodies) {
							var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
							for (var i = 0; i < bodiesLength; i++) {
								var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
								if (overlaps(bodyA.bounds, bounds)) for (var j = partsAStart; j < partsALength; j++) {
									var part = bodyA.parts[j];
									if (overlaps(part.bounds, bounds)) {
										var collision = collides(part, body);
										if (collision) {
											collisions.push(collision);
											break;
										}
									}
								}
							}
							return collisions;
						};
						/**
						* Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
						* @method ray
						* @param {body[]} bodies
						* @param {vector} startPoint
						* @param {vector} endPoint
						* @param {number} [rayWidth]
						* @return {collision[]} Collisions
						*/
						Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
							rayWidth = rayWidth || 1e-100;
							var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * .5, rayY = (endPoint.y + startPoint.y) * .5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }), collisions = Query.collides(ray, bodies);
							for (var i = 0; i < collisions.length; i += 1) {
								var collision = collisions[i];
								collision.body = collision.bodyB = collision.bodyA;
							}
							return collisions;
						};
						/**
						* Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
						* @method region
						* @param {body[]} bodies
						* @param {bounds} bounds
						* @param {bool} [outside=false]
						* @return {body[]} The bodies matching the query
						*/
						Query.region = function(bodies, bounds, outside) {
							var result = [];
							for (var i = 0; i < bodies.length; i++) {
								var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
								if (overlaps && !outside || !overlaps && outside) result.push(body);
							}
							return result;
						};
						/**
						* Returns all bodies whose vertices contain the given point, from the given set of bodies.
						* @method point
						* @param {body[]} bodies
						* @param {vector} point
						* @return {body[]} The bodies matching the query
						*/
						Query.point = function(bodies, point) {
							var result = [];
							for (var i = 0; i < bodies.length; i++) {
								var body = bodies[i];
								if (Bounds.contains(body.bounds, point)) for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
									var part = body.parts[j];
									if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
										result.push(body);
										break;
									}
								}
							}
							return result;
						};
					})();
				}),
				(function(module$39, exports$29, __webpack_require__) {
					/**
					* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
					* It is intended for development and debugging purposes, but may also be suitable for simple games.
					* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
					*
					* @class Render
					*/
					var Render = {};
					module$39.exports = Render;
					var Body = __webpack_require__(4);
					var Common = __webpack_require__(0);
					var Composite = __webpack_require__(6);
					var Bounds = __webpack_require__(1);
					var Events = __webpack_require__(5);
					var Vector = __webpack_require__(2);
					var Mouse = __webpack_require__(14);
					(function() {
						var _requestAnimationFrame, _cancelAnimationFrame;
						if (typeof window !== "undefined") {
							_requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
								window.setTimeout(function() {
									callback(Common.now());
								}, 1e3 / 60);
							};
							_cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
						}
						Render._goodFps = 30;
						Render._goodDelta = 1e3 / 60;
						/**
						* Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
						* All properties have default values, and many are pre-calculated automatically based on other properties.
						* See the properties section below for detailed information on what you can pass via the `options` object.
						* @method create
						* @param {object} [options]
						* @return {render} A new renderer
						*/
						Render.create = function(options) {
							var defaults = {
								engine: null,
								element: null,
								canvas: null,
								mouse: null,
								frameRequestId: null,
								timing: {
									historySize: 60,
									delta: 0,
									deltaHistory: [],
									lastTime: 0,
									lastTimestamp: 0,
									lastElapsed: 0,
									timestampElapsed: 0,
									timestampElapsedHistory: [],
									engineDeltaHistory: [],
									engineElapsedHistory: [],
									elapsedHistory: []
								},
								options: {
									width: 800,
									height: 600,
									pixelRatio: 1,
									background: "#14151f",
									wireframeBackground: "#14151f",
									hasBounds: !!options.bounds,
									enabled: true,
									wireframes: true,
									showSleeping: true,
									showDebug: false,
									showStats: false,
									showPerformance: false,
									showBounds: false,
									showVelocity: false,
									showCollisions: false,
									showSeparations: false,
									showAxes: false,
									showPositions: false,
									showAngleIndicator: false,
									showIds: false,
									showVertexNumbers: false,
									showConvexHulls: false,
									showInternalEdges: false,
									showMousePosition: false
								}
							};
							var render = Common.extend(defaults, options);
							if (render.canvas) {
								render.canvas.width = render.options.width || render.canvas.width;
								render.canvas.height = render.options.height || render.canvas.height;
							}
							render.mouse = options.mouse;
							render.engine = options.engine;
							render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
							render.context = render.canvas.getContext("2d");
							render.textures = {};
							render.bounds = render.bounds || {
								min: {
									x: 0,
									y: 0
								},
								max: {
									x: render.canvas.width,
									y: render.canvas.height
								}
							};
							render.controller = Render;
							render.options.showBroadphase = false;
							if (render.options.pixelRatio !== 1) Render.setPixelRatio(render, render.options.pixelRatio);
							if (Common.isElement(render.element)) render.element.appendChild(render.canvas);
							return render;
						};
						/**
						* Continuously updates the render canvas on the `requestAnimationFrame` event.
						* @method run
						* @param {render} render
						*/
						Render.run = function(render) {
							(function loop(time) {
								render.frameRequestId = _requestAnimationFrame(loop);
								_updateTiming(render, time);
								Render.world(render, time);
								if (render.options.showStats || render.options.showDebug) Render.stats(render, render.context, time);
								if (render.options.showPerformance || render.options.showDebug) Render.performance(render, render.context, time);
							})();
						};
						/**
						* Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
						* @method stop
						* @param {render} render
						*/
						Render.stop = function(render) {
							_cancelAnimationFrame(render.frameRequestId);
						};
						/**
						* Sets the pixel ratio of the renderer and updates the canvas.
						* To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
						* @method setPixelRatio
						* @param {render} render
						* @param {number} pixelRatio
						*/
						Render.setPixelRatio = function(render, pixelRatio) {
							var options = render.options, canvas = render.canvas;
							if (pixelRatio === "auto") pixelRatio = _getPixelRatio(canvas);
							options.pixelRatio = pixelRatio;
							canvas.setAttribute("data-pixel-ratio", pixelRatio);
							canvas.width = options.width * pixelRatio;
							canvas.height = options.height * pixelRatio;
							canvas.style.width = options.width + "px";
							canvas.style.height = options.height + "px";
						};
						/**
						* Positions and sizes the viewport around the given object bounds.
						* Objects must have at least one of the following properties:
						* - `object.bounds`
						* - `object.position`
						* - `object.min` and `object.max`
						* - `object.x` and `object.y`
						* @method lookAt
						* @param {render} render
						* @param {object[]} objects
						* @param {vector} [padding]
						* @param {bool} [center=true]
						*/
						Render.lookAt = function(render, objects, padding, center) {
							center = typeof center !== "undefined" ? center : true;
							objects = Common.isArray(objects) ? objects : [objects];
							padding = padding || {
								x: 0,
								y: 0
							};
							var bounds = {
								min: {
									x: Infinity,
									y: Infinity
								},
								max: {
									x: -Infinity,
									y: -Infinity
								}
							};
							for (var i = 0; i < objects.length; i += 1) {
								var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
								if (min && max) {
									if (min.x < bounds.min.x) bounds.min.x = min.x;
									if (max.x > bounds.max.x) bounds.max.x = max.x;
									if (min.y < bounds.min.y) bounds.min.y = min.y;
									if (max.y > bounds.max.y) bounds.max.y = max.y;
								}
							}
							var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, outerRatio = render.canvas.width / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
							if (innerRatio > outerRatio) scaleY = innerRatio / outerRatio;
							else scaleX = outerRatio / innerRatio;
							render.options.hasBounds = true;
							render.bounds.min.x = bounds.min.x;
							render.bounds.max.x = bounds.min.x + width * scaleX;
							render.bounds.min.y = bounds.min.y;
							render.bounds.max.y = bounds.min.y + height * scaleY;
							if (center) {
								render.bounds.min.x += width * .5 - width * scaleX * .5;
								render.bounds.max.x += width * .5 - width * scaleX * .5;
								render.bounds.min.y += height * .5 - height * scaleY * .5;
								render.bounds.max.y += height * .5 - height * scaleY * .5;
							}
							render.bounds.min.x -= padding.x;
							render.bounds.max.x -= padding.x;
							render.bounds.min.y -= padding.y;
							render.bounds.max.y -= padding.y;
							if (render.mouse) {
								Mouse.setScale(render.mouse, {
									x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
									y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
								});
								Mouse.setOffset(render.mouse, render.bounds.min);
							}
						};
						/**
						* Applies viewport transforms based on `render.bounds` to a render context.
						* @method startViewTransform
						* @param {render} render
						*/
						Render.startViewTransform = function(render) {
							var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
							render.context.setTransform(render.options.pixelRatio / boundsScaleX, 0, 0, render.options.pixelRatio / boundsScaleY, 0, 0);
							render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
						};
						/**
						* Resets all transforms on the render context.
						* @method endViewTransform
						* @param {render} render
						*/
						Render.endViewTransform = function(render) {
							render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
						};
						/**
						* Renders the given `engine`'s `Matter.World` object.
						* This is the entry point for all rendering and should be called every time the scene changes.
						* @method world
						* @param {render} render
						*/
						Render.world = function(render, time) {
							var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
							var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
							var event = { timestamp: engine.timing.timestamp };
							Events.trigger(render, "beforeRender", event);
							if (render.currentBackground !== background) _applyBackground(render, background);
							context.globalCompositeOperation = "source-in";
							context.fillStyle = "transparent";
							context.fillRect(0, 0, canvas.width, canvas.height);
							context.globalCompositeOperation = "source-over";
							if (options.hasBounds) {
								for (i = 0; i < allBodies.length; i++) {
									var body = allBodies[i];
									if (Bounds.overlaps(body.bounds, render.bounds)) bodies.push(body);
								}
								for (i = 0; i < allConstraints.length; i++) {
									var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
									if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
									if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);
									if (!pointAWorld || !pointBWorld) continue;
									if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld)) constraints.push(constraint);
								}
								Render.startViewTransform(render);
								if (render.mouse) {
									Mouse.setScale(render.mouse, {
										x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
										y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
									});
									Mouse.setOffset(render.mouse, render.bounds.min);
								}
							} else {
								constraints = allConstraints;
								bodies = allBodies;
								if (render.options.pixelRatio !== 1) render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
							}
							if (!options.wireframes || engine.enableSleeping && options.showSleeping) Render.bodies(render, bodies, context);
							else {
								if (options.showConvexHulls) Render.bodyConvexHulls(render, bodies, context);
								Render.bodyWireframes(render, bodies, context);
							}
							if (options.showBounds) Render.bodyBounds(render, bodies, context);
							if (options.showAxes || options.showAngleIndicator) Render.bodyAxes(render, bodies, context);
							if (options.showPositions) Render.bodyPositions(render, bodies, context);
							if (options.showVelocity) Render.bodyVelocity(render, bodies, context);
							if (options.showIds) Render.bodyIds(render, bodies, context);
							if (options.showSeparations) Render.separations(render, engine.pairs.list, context);
							if (options.showCollisions) Render.collisions(render, engine.pairs.list, context);
							if (options.showVertexNumbers) Render.vertexNumbers(render, bodies, context);
							if (options.showMousePosition) Render.mousePosition(render, render.mouse, context);
							Render.constraints(constraints, context);
							if (options.hasBounds) Render.endViewTransform(render);
							Events.trigger(render, "afterRender", event);
							timing.lastElapsed = Common.now() - startTime;
						};
						/**
						* Renders statistics about the engine and world useful for debugging.
						* @private
						* @method stats
						* @param {render} render
						* @param {RenderingContext} context
						* @param {Number} time
						*/
						Render.stats = function(render, context, time) {
							var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
							for (var i = 0; i < bodies.length; i += 1) parts += bodies[i].parts.length;
							var sections = {
								"Part": parts,
								"Body": bodies.length,
								"Cons": Composite.allConstraints(world).length,
								"Comp": Composite.allComposites(world).length,
								"Pair": engine.pairs.list.length
							};
							context.fillStyle = "#0e0f19";
							context.fillRect(x, y, width * 5.5, height);
							context.font = "12px Arial";
							context.textBaseline = "top";
							context.textAlign = "right";
							for (var key in sections) {
								var section = sections[key];
								context.fillStyle = "#aaa";
								context.fillText(key, x + width, y + 8);
								context.fillStyle = "#eee";
								context.fillText(section, x + width, y + 26);
								x += width;
							}
						};
						/**
						* Renders engine and render performance information.
						* @private
						* @method performance
						* @param {render} render
						* @param {RenderingContext} context
						*/
						Render.performance = function(render, context) {
							var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineDelta = engine.timing.lastDelta;
							var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineElapsedMean = _mean(engineElapsedHistory), rateMean = _mean(timestampElapsedHistory) / deltaMean || 0, fps = 1e3 / deltaMean || 0;
							var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
							context.fillStyle = "#0e0f19";
							context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);
							Render.status(context, x, y, width, graphHeight, deltaHistory.length, Math.round(fps) + " fps", fps / Render._goodFps, function(i) {
								return deltaHistory[i] / deltaMean - 1;
							});
							Render.status(context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length, lastEngineDelta.toFixed(2) + " dt", Render._goodDelta / lastEngineDelta, function(i) {
								return engineDeltaHistory[i] / engineDeltaMean - 1;
							});
							Render.status(context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length, engineElapsedMean.toFixed(2) + " ut", 1 - engineElapsedMean / Render._goodFps, function(i) {
								return engineElapsedHistory[i] / engineElapsedMean - 1;
							});
							Render.status(context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length, elapsedMean.toFixed(2) + " rt", 1 - elapsedMean / Render._goodFps, function(i) {
								return elapsedHistory[i] / elapsedMean - 1;
							});
							Render.status(context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, rateMean.toFixed(2) + " x", rateMean * rateMean * rateMean, function(i) {
								return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
							});
						};
						/**
						* Renders a label, indicator and a chart.
						* @private
						* @method status
						* @param {RenderingContext} context
						* @param {number} x
						* @param {number} y
						* @param {number} width
						* @param {number} height
						* @param {number} count
						* @param {string} label
						* @param {string} indicator
						* @param {function} plotY
						*/
						Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
							context.strokeStyle = "#888";
							context.fillStyle = "#444";
							context.lineWidth = 1;
							context.fillRect(x, y + 7, width, 1);
							context.beginPath();
							context.moveTo(x, y + 7 - height * Common.clamp(.4 * plotY(0), -2, 2));
							for (var i = 0; i < width; i += 1) context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(.4 * plotY(i), -2, 2) : 0));
							context.stroke();
							context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
							context.fillRect(x, y - 7, 4, 4);
							context.font = "12px Arial";
							context.textBaseline = "middle";
							context.textAlign = "right";
							context.fillStyle = "#eee";
							context.fillText(label, x + width, y - 5);
						};
						/**
						* Description
						* @private
						* @method constraints
						* @param {constraint[]} constraints
						* @param {RenderingContext} context
						*/
						Render.constraints = function(constraints, context) {
							var c = context;
							for (var i = 0; i < constraints.length; i++) {
								var constraint = constraints[i];
								if (!constraint.render.visible || !constraint.pointA || !constraint.pointB) continue;
								var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
								if (bodyA) start = Vector.add(bodyA.position, constraint.pointA);
								else start = constraint.pointA;
								if (constraint.render.type === "pin") {
									c.beginPath();
									c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
									c.closePath();
								} else {
									if (bodyB) end = Vector.add(bodyB.position, constraint.pointB);
									else end = constraint.pointB;
									c.beginPath();
									c.moveTo(start.x, start.y);
									if (constraint.render.type === "spring") {
										var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
										for (var j = 1; j < coils; j += 1) {
											offset = j % 2 === 0 ? 1 : -1;
											c.lineTo(start.x + delta.x * (j / coils) + normal.x * offset * 4, start.y + delta.y * (j / coils) + normal.y * offset * 4);
										}
									}
									c.lineTo(end.x, end.y);
								}
								if (constraint.render.lineWidth) {
									c.lineWidth = constraint.render.lineWidth;
									c.strokeStyle = constraint.render.strokeStyle;
									c.stroke();
								}
								if (constraint.render.anchors) {
									c.fillStyle = constraint.render.strokeStyle;
									c.beginPath();
									c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
									c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
									c.closePath();
									c.fill();
								}
							}
						};
						/**
						* Description
						* @private
						* @method bodies
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodies = function(render, bodies, context) {
							var c = context;
							render.engine;
							var options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
							for (i = 0; i < bodies.length; i++) {
								body = bodies[i];
								if (!body.render.visible) continue;
								for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
									part = body.parts[k];
									if (!part.render.visible) continue;
									if (options.showSleeping && body.isSleeping) c.globalAlpha = .5 * part.render.opacity;
									else if (part.render.opacity !== 1) c.globalAlpha = part.render.opacity;
									if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
										var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
										c.translate(part.position.x, part.position.y);
										c.rotate(part.angle);
										c.drawImage(texture, texture.width * -sprite.xOffset * sprite.xScale, texture.height * -sprite.yOffset * sprite.yScale, texture.width * sprite.xScale, texture.height * sprite.yScale);
										c.rotate(-part.angle);
										c.translate(-part.position.x, -part.position.y);
									} else {
										if (part.circleRadius) {
											c.beginPath();
											c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
										} else {
											c.beginPath();
											c.moveTo(part.vertices[0].x, part.vertices[0].y);
											for (var j = 1; j < part.vertices.length; j++) {
												if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y);
												else c.moveTo(part.vertices[j].x, part.vertices[j].y);
												if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
											}
											c.lineTo(part.vertices[0].x, part.vertices[0].y);
											c.closePath();
										}
										if (!options.wireframes) {
											c.fillStyle = part.render.fillStyle;
											if (part.render.lineWidth) {
												c.lineWidth = part.render.lineWidth;
												c.strokeStyle = part.render.strokeStyle;
												c.stroke();
											}
											c.fill();
										} else {
											c.lineWidth = 1;
											c.strokeStyle = "#bbb";
											c.stroke();
										}
									}
									c.globalAlpha = 1;
								}
							}
						};
						/**
						* Optimised method for drawing body wireframes in one pass
						* @private
						* @method bodyWireframes
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodyWireframes = function(render, bodies, context) {
							var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
							c.beginPath();
							for (i = 0; i < bodies.length; i++) {
								body = bodies[i];
								if (!body.render.visible) continue;
								for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
									part = body.parts[k];
									c.moveTo(part.vertices[0].x, part.vertices[0].y);
									for (j = 1; j < part.vertices.length; j++) {
										if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y);
										else c.moveTo(part.vertices[j].x, part.vertices[j].y);
										if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
									}
									c.lineTo(part.vertices[0].x, part.vertices[0].y);
								}
							}
							c.lineWidth = 1;
							c.strokeStyle = "#bbb";
							c.stroke();
						};
						/**
						* Optimised method for drawing body convex hull wireframes in one pass
						* @private
						* @method bodyConvexHulls
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodyConvexHulls = function(render, bodies, context) {
							var c = context, body, i, j;
							c.beginPath();
							for (i = 0; i < bodies.length; i++) {
								body = bodies[i];
								if (!body.render.visible || body.parts.length === 1) continue;
								c.moveTo(body.vertices[0].x, body.vertices[0].y);
								for (j = 1; j < body.vertices.length; j++) c.lineTo(body.vertices[j].x, body.vertices[j].y);
								c.lineTo(body.vertices[0].x, body.vertices[0].y);
							}
							c.lineWidth = 1;
							c.strokeStyle = "rgba(255,255,255,0.2)";
							c.stroke();
						};
						/**
						* Renders body vertex numbers.
						* @private
						* @method vertexNumbers
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.vertexNumbers = function(render, bodies, context) {
							var c = context, i, j, k;
							for (i = 0; i < bodies.length; i++) {
								var parts = bodies[i].parts;
								for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
									var part = parts[k];
									for (j = 0; j < part.vertices.length; j++) {
										c.fillStyle = "rgba(255,255,255,0.2)";
										c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * .8, part.position.y + (part.vertices[j].y - part.position.y) * .8);
									}
								}
							}
						};
						/**
						* Renders mouse position.
						* @private
						* @method mousePosition
						* @param {render} render
						* @param {mouse} mouse
						* @param {RenderingContext} context
						*/
						Render.mousePosition = function(render, mouse, context) {
							var c = context;
							c.fillStyle = "rgba(255,255,255,0.8)";
							c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
						};
						/**
						* Draws body bounds
						* @private
						* @method bodyBounds
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodyBounds = function(render, bodies, context) {
							var c = context;
							render.engine;
							var options = render.options;
							c.beginPath();
							for (var i = 0; i < bodies.length; i++) if (bodies[i].render.visible) {
								var parts = bodies[i].parts;
								for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
									var part = parts[j];
									c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
								}
							}
							if (options.wireframes) c.strokeStyle = "rgba(255,255,255,0.08)";
							else c.strokeStyle = "rgba(0,0,0,0.1)";
							c.lineWidth = 1;
							c.stroke();
						};
						/**
						* Draws body angle indicators and axes
						* @private
						* @method bodyAxes
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodyAxes = function(render, bodies, context) {
							var c = context;
							render.engine;
							var options = render.options, part, i, j, k;
							c.beginPath();
							for (i = 0; i < bodies.length; i++) {
								var body = bodies[i], parts = body.parts;
								if (!body.render.visible) continue;
								if (options.showAxes) for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
									part = parts[j];
									for (k = 0; k < part.axes.length; k++) {
										var axis = part.axes[k];
										c.moveTo(part.position.x, part.position.y);
										c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
									}
								}
								else for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
									part = parts[j];
									for (k = 0; k < part.axes.length; k++) {
										c.moveTo(part.position.x, part.position.y);
										c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2, (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2);
									}
								}
							}
							if (options.wireframes) {
								c.strokeStyle = "indianred";
								c.lineWidth = 1;
							} else {
								c.strokeStyle = "rgba(255, 255, 255, 0.4)";
								c.globalCompositeOperation = "overlay";
								c.lineWidth = 2;
							}
							c.stroke();
							c.globalCompositeOperation = "source-over";
						};
						/**
						* Draws body positions
						* @private
						* @method bodyPositions
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodyPositions = function(render, bodies, context) {
							var c = context;
							render.engine;
							var options = render.options, body, part, i, k;
							c.beginPath();
							for (i = 0; i < bodies.length; i++) {
								body = bodies[i];
								if (!body.render.visible) continue;
								for (k = 0; k < body.parts.length; k++) {
									part = body.parts[k];
									c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
									c.closePath();
								}
							}
							if (options.wireframes) c.fillStyle = "indianred";
							else c.fillStyle = "rgba(0,0,0,0.5)";
							c.fill();
							c.beginPath();
							for (i = 0; i < bodies.length; i++) {
								body = bodies[i];
								if (body.render.visible) {
									c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
									c.closePath();
								}
							}
							c.fillStyle = "rgba(255,165,0,0.8)";
							c.fill();
						};
						/**
						* Draws body velocity
						* @private
						* @method bodyVelocity
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodyVelocity = function(render, bodies, context) {
							var c = context;
							c.beginPath();
							for (var i = 0; i < bodies.length; i++) {
								var body = bodies[i];
								if (!body.render.visible) continue;
								var velocity = Body.getVelocity(body);
								c.moveTo(body.position.x, body.position.y);
								c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
							}
							c.lineWidth = 3;
							c.strokeStyle = "cornflowerblue";
							c.stroke();
						};
						/**
						* Draws body ids
						* @private
						* @method bodyIds
						* @param {render} render
						* @param {body[]} bodies
						* @param {RenderingContext} context
						*/
						Render.bodyIds = function(render, bodies, context) {
							var c = context, i, j;
							for (i = 0; i < bodies.length; i++) {
								if (!bodies[i].render.visible) continue;
								var parts = bodies[i].parts;
								for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
									var part = parts[j];
									c.font = "12px Arial";
									c.fillStyle = "rgba(255,255,255,0.5)";
									c.fillText(part.id, part.position.x + 10, part.position.y - 10);
								}
							}
						};
						/**
						* Description
						* @private
						* @method collisions
						* @param {render} render
						* @param {pair[]} pairs
						* @param {RenderingContext} context
						*/
						Render.collisions = function(render, pairs, context) {
							var c = context, options = render.options, pair, collision, i, j;
							c.beginPath();
							for (i = 0; i < pairs.length; i++) {
								pair = pairs[i];
								if (!pair.isActive) continue;
								collision = pair.collision;
								for (j = 0; j < pair.activeContacts.length; j++) {
									var vertex = pair.activeContacts[j].vertex;
									c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
								}
							}
							if (options.wireframes) c.fillStyle = "rgba(255,255,255,0.7)";
							else c.fillStyle = "orange";
							c.fill();
							c.beginPath();
							for (i = 0; i < pairs.length; i++) {
								pair = pairs[i];
								if (!pair.isActive) continue;
								collision = pair.collision;
								if (pair.activeContacts.length > 0) {
									var normalPosX = pair.activeContacts[0].vertex.x, normalPosY = pair.activeContacts[0].vertex.y;
									if (pair.activeContacts.length === 2) {
										normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
										normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
									}
									if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
									else c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
									c.lineTo(normalPosX, normalPosY);
								}
							}
							if (options.wireframes) c.strokeStyle = "rgba(255,165,0,0.7)";
							else c.strokeStyle = "orange";
							c.lineWidth = 1;
							c.stroke();
						};
						/**
						* Description
						* @private
						* @method separations
						* @param {render} render
						* @param {pair[]} pairs
						* @param {RenderingContext} context
						*/
						Render.separations = function(render, pairs, context) {
							var c = context, options = render.options, pair, collision, bodyA, bodyB, i;
							c.beginPath();
							for (i = 0; i < pairs.length; i++) {
								pair = pairs[i];
								if (!pair.isActive) continue;
								collision = pair.collision;
								bodyA = collision.bodyA;
								bodyB = collision.bodyB;
								var k = 1;
								if (!bodyB.isStatic && !bodyA.isStatic) k = .5;
								if (bodyB.isStatic) k = 0;
								c.moveTo(bodyB.position.x, bodyB.position.y);
								c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
								k = 1;
								if (!bodyB.isStatic && !bodyA.isStatic) k = .5;
								if (bodyA.isStatic) k = 0;
								c.moveTo(bodyA.position.x, bodyA.position.y);
								c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
							}
							if (options.wireframes) c.strokeStyle = "rgba(255,165,0,0.5)";
							else c.strokeStyle = "orange";
							c.stroke();
						};
						/**
						* Description
						* @private
						* @method inspector
						* @param {inspector} inspector
						* @param {RenderingContext} context
						*/
						Render.inspector = function(inspector, context) {
							inspector.engine;
							var selected = inspector.selected, render = inspector.render, options = render.options, bounds;
							if (options.hasBounds) {
								var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
								context.scale(1 / boundsScaleX, 1 / boundsScaleY);
								context.translate(-render.bounds.min.x, -render.bounds.min.y);
							}
							for (var i = 0; i < selected.length; i++) {
								var item = selected[i].data;
								context.translate(.5, .5);
								context.lineWidth = 1;
								context.strokeStyle = "rgba(255,165,0,0.9)";
								context.setLineDash([1, 2]);
								switch (item.type) {
									case "body":
										bounds = item.bounds;
										context.beginPath();
										context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
										context.closePath();
										context.stroke();
										break;
									case "constraint":
										var point = item.pointA;
										if (item.bodyA) point = item.pointB;
										context.beginPath();
										context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
										context.closePath();
										context.stroke();
								}
								context.setLineDash([]);
								context.translate(-.5, -.5);
							}
							if (inspector.selectStart !== null) {
								context.translate(.5, .5);
								context.lineWidth = 1;
								context.strokeStyle = "rgba(255,165,0,0.6)";
								context.fillStyle = "rgba(255,165,0,0.1)";
								bounds = inspector.selectBounds;
								context.beginPath();
								context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
								context.closePath();
								context.stroke();
								context.fill();
								context.translate(-.5, -.5);
							}
							if (options.hasBounds) context.setTransform(1, 0, 0, 1, 0, 0);
						};
						/**
						* Updates render timing.
						* @method _updateTiming
						* @private
						* @param {render} render
						* @param {number} time
						*/
						var _updateTiming = function(render, time) {
							var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
							timing.delta = time - timing.lastTime || Render._goodDelta;
							timing.lastTime = time;
							timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
							timing.lastTimestamp = timestamp;
							timing.deltaHistory.unshift(timing.delta);
							timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
							timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
							timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
							timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
							timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
							timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
							timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
							timing.elapsedHistory.unshift(timing.lastElapsed);
							timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
						};
						/**
						* Returns the mean value of the given numbers.
						* @method _mean
						* @private
						* @param {Number[]} values
						* @return {Number} the mean of given values
						*/
						var _mean = function(values) {
							var result = 0;
							for (var i = 0; i < values.length; i += 1) result += values[i];
							return result / values.length || 0;
						};
						/**
						* @method _createCanvas
						* @private
						* @param {} width
						* @param {} height
						* @return canvas
						*/
						var _createCanvas = function(width, height) {
							var canvas = document.createElement("canvas");
							canvas.width = width;
							canvas.height = height;
							canvas.oncontextmenu = function() {
								return false;
							};
							canvas.onselectstart = function() {
								return false;
							};
							return canvas;
						};
						/**
						* Gets the pixel ratio of the canvas.
						* @method _getPixelRatio
						* @private
						* @param {HTMLElement} canvas
						* @return {Number} pixel ratio
						*/
						var _getPixelRatio = function(canvas) {
							var context = canvas.getContext("2d");
							return (window.devicePixelRatio || 1) / (context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1);
						};
						/**
						* Gets the requested texture (an Image) via its path
						* @method _getTexture
						* @private
						* @param {render} render
						* @param {string} imagePath
						* @return {Image} texture
						*/
						var _getTexture = function(render, imagePath) {
							var image = render.textures[imagePath];
							if (image) return image;
							image = render.textures[imagePath] = new Image();
							image.src = imagePath;
							return image;
						};
						/**
						* Applies the background to the canvas using CSS.
						* @method applyBackground
						* @private
						* @param {render} render
						* @param {string} background
						*/
						var _applyBackground = function(render, background) {
							var cssBackground = background;
							if (/(jpg|gif|png)$/.test(background)) cssBackground = "url(" + background + ")";
							render.canvas.style.background = cssBackground;
							render.canvas.style.backgroundSize = "contain";
							render.currentBackground = background;
						};
						/**
						* Fired before rendering
						*
						* @event beforeRender
						* @param {} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired after rendering
						*
						* @event afterRender
						* @param {} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* A back-reference to the `Matter.Render` module.
						*
						* @deprecated
						* @property controller
						* @type render
						*/
						/**
						* A reference to the `Matter.Engine` instance to be used.
						*
						* @property engine
						* @type engine
						*/
						/**
						* A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
						*
						* @property element
						* @type HTMLElement
						* @default null
						*/
						/**
						* The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
						*
						* @property canvas
						* @type HTMLCanvasElement
						* @default null
						*/
						/**
						* A `Bounds` object that specifies the drawing view region.
						* Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
						* This allows for creating views that can pan or zoom around the scene.
						* You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
						*
						* @property bounds
						* @type bounds
						*/
						/**
						* The 2d rendering context from the `render.canvas` element.
						*
						* @property context
						* @type CanvasRenderingContext2D
						*/
						/**
						* The sprite texture cache.
						*
						* @property textures
						* @type {}
						*/
						/**
						* The mouse to render if `render.options.showMousePosition` is enabled.
						*
						* @property mouse
						* @type mouse
						* @default null
						*/
						/**
						* The configuration options of the renderer.
						*
						* @property options
						* @type {}
						*/
						/**
						* The target width in pixels of the `render.canvas` to be created.
						* See also the `options.pixelRatio` property to change render quality.
						*
						* @property options.width
						* @type number
						* @default 800
						*/
						/**
						* The target height in pixels of the `render.canvas` to be created.
						* See also the `options.pixelRatio` property to change render quality.
						*
						* @property options.height
						* @type number
						* @default 600
						*/
						/**
						* The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
						*
						* @property options.pixelRatio
						* @type number
						* @default 1
						*/
						/**
						* A CSS background color string to use when `render.options.wireframes` is disabled.
						* This may be also set to `'transparent'` or equivalent.
						*
						* @property options.background
						* @type string
						* @default '#14151f'
						*/
						/**
						* A CSS background color string to use when `render.options.wireframes` is enabled.
						* This may be also set to `'transparent'` or equivalent.
						*
						* @property options.wireframeBackground
						* @type string
						* @default '#14151f'
						*/
						/**
						* A flag that specifies if `render.bounds` should be used when rendering.
						*
						* @property options.hasBounds
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable all debug information overlays together.  
						* This includes and has priority over the values of:
						*
						* - `render.options.showStats`
						* - `render.options.showPerformance`
						*
						* @property options.showDebug
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the engine stats info overlay.  
						* From left to right, the values shown are:
						*
						* - body parts total
						* - body total
						* - constraints total
						* - composites total
						* - collision pairs total
						*
						* @property options.showStats
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable performance charts.  
						* From left to right, the values shown are:
						*
						* - average render frequency (e.g. 60 fps)
						* - exact engine delta time used for last update (e.g. 16.66ms)
						* - average engine execution duration (e.g. 5.00ms)
						* - average render execution duration (e.g. 0.40ms)
						* - average effective play speed (e.g. '1.00x' is 'real-time')
						*
						* Each value is recorded over a fixed sample of past frames (60 frames).
						*
						* A chart shown below each value indicates the variance from the average over the sample.
						* The more stable or fixed the value is the flatter the chart will appear.
						*
						* @property options.showPerformance
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable rendering entirely.
						*
						* @property options.enabled
						* @type boolean
						* @default false
						*/
						/**
						* A flag to toggle wireframe rendering otherwise solid fill rendering is used.
						*
						* @property options.wireframes
						* @type boolean
						* @default true
						*/
						/**
						* A flag to enable or disable sleeping bodies indicators.
						*
						* @property options.showSleeping
						* @type boolean
						* @default true
						*/
						/**
						* A flag to enable or disable the debug information overlay.
						*
						* @property options.showDebug
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the collision broadphase debug overlay.
						*
						* @deprecated no longer implemented
						* @property options.showBroadphase
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body bounds debug overlay.
						*
						* @property options.showBounds
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body velocity debug overlay.
						*
						* @property options.showVelocity
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body collisions debug overlay.
						*
						* @property options.showCollisions
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the collision resolver separations debug overlay.
						*
						* @property options.showSeparations
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body axes debug overlay.
						*
						* @property options.showAxes
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body positions debug overlay.
						*
						* @property options.showPositions
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body angle debug overlay.
						*
						* @property options.showAngleIndicator
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body and part ids debug overlay.
						*
						* @property options.showIds
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body vertex numbers debug overlay.
						*
						* @property options.showVertexNumbers
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body convex hulls debug overlay.
						*
						* @property options.showConvexHulls
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the body internal edges debug overlay.
						*
						* @property options.showInternalEdges
						* @type boolean
						* @default false
						*/
						/**
						* A flag to enable or disable the mouse position debug overlay.
						*
						* @property options.showMousePosition
						* @type boolean
						* @default false
						*/
					})();
				}),
				(function(module$40, exports$30, __webpack_require__) {
					/**
					* The `Matter.Runner` module is an optional utility which provides a game loop, 
					* that handles continuously updating a `Matter.Engine` for you within a browser.
					* It is intended for development and debugging purposes, but may also be suitable for simple games.
					* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
					* Instead just call `Engine.update(engine, delta)` in your own loop.
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Runner
					*/
					var Runner = {};
					module$40.exports = Runner;
					var Events = __webpack_require__(5);
					var Engine = __webpack_require__(17);
					var Common = __webpack_require__(0);
					(function() {
						var _requestAnimationFrame, _cancelAnimationFrame;
						if (typeof window !== "undefined") {
							_requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
							_cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
						}
						if (!_requestAnimationFrame) {
							var _frameTimeout;
							_requestAnimationFrame = function(callback) {
								_frameTimeout = setTimeout(function() {
									callback(Common.now());
								}, 1e3 / 60);
							};
							_cancelAnimationFrame = function() {
								clearTimeout(_frameTimeout);
							};
						}
						/**
						* Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
						* @method create
						* @param {} options
						*/
						Runner.create = function(options) {
							var runner = Common.extend({
								fps: 60,
								deltaSampleSize: 60,
								counterTimestamp: 0,
								frameCounter: 0,
								deltaHistory: [],
								timePrev: null,
								frameRequestId: null,
								isFixed: false,
								enabled: true
							}, options);
							runner.delta = runner.delta || 1e3 / runner.fps;
							runner.deltaMin = runner.deltaMin || 1e3 / runner.fps;
							runner.deltaMax = runner.deltaMax || 1e3 / (runner.fps * .5);
							runner.fps = 1e3 / runner.delta;
							return runner;
						};
						/**
						* Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
						* @method run
						* @param {engine} engine
						*/
						Runner.run = function(runner, engine) {
							if (typeof runner.positionIterations !== "undefined") {
								engine = runner;
								runner = Runner.create();
							}
							(function run(time) {
								runner.frameRequestId = _requestAnimationFrame(run);
								if (time && runner.enabled) Runner.tick(runner, engine, time);
							})();
							return runner;
						};
						/**
						* A game loop utility that updates the engine and renderer by one step (a 'tick').
						* Features delta smoothing, time correction and fixed or dynamic timing.
						* Consider just `Engine.update(engine, delta)` if you're using your own loop.
						* @method tick
						* @param {runner} runner
						* @param {engine} engine
						* @param {number} time
						*/
						Runner.tick = function(runner, engine, time) {
							var timing = engine.timing, delta;
							if (runner.isFixed) delta = runner.delta;
							else {
								delta = time - runner.timePrev || runner.delta;
								runner.timePrev = time;
								runner.deltaHistory.push(delta);
								runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
								delta = Math.min.apply(null, runner.deltaHistory);
								delta = delta < runner.deltaMin ? runner.deltaMin : delta;
								delta = delta > runner.deltaMax ? runner.deltaMax : delta;
								runner.delta = delta;
							}
							var event = { timestamp: timing.timestamp };
							Events.trigger(runner, "beforeTick", event);
							runner.frameCounter += 1;
							if (time - runner.counterTimestamp >= 1e3) {
								runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1e3);
								runner.counterTimestamp = time;
								runner.frameCounter = 0;
							}
							Events.trigger(runner, "tick", event);
							Events.trigger(runner, "beforeUpdate", event);
							Engine.update(engine, delta);
							Events.trigger(runner, "afterUpdate", event);
							Events.trigger(runner, "afterTick", event);
						};
						/**
						* Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
						* If you wish to only temporarily pause the engine, see `engine.enabled` instead.
						* @method stop
						* @param {runner} runner
						*/
						Runner.stop = function(runner) {
							_cancelAnimationFrame(runner.frameRequestId);
						};
						/**
						* Alias for `Runner.run`.
						* @method start
						* @param {runner} runner
						* @param {engine} engine
						*/
						Runner.start = function(runner, engine) {
							Runner.run(runner, engine);
						};
						/**
						* Fired at the start of a tick, before any updates to the engine or timing
						*
						* @event beforeTick
						* @param {} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired after engine timing updated, but just before update
						*
						* @event tick
						* @param {} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired at the end of a tick, after engine update and after rendering
						*
						* @event afterTick
						* @param {} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired before update
						*
						* @event beforeUpdate
						* @param {} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* Fired after update
						*
						* @event afterUpdate
						* @param {} event An event object
						* @param {number} event.timestamp The engine.timing.timestamp of the event
						* @param {} event.source The source object of the event
						* @param {} event.name The name of the event
						*/
						/**
						* A flag that specifies whether the runner is running or not.
						*
						* @property enabled
						* @type boolean
						* @default true
						*/
						/**
						* A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
						* If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
						* If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
						*
						* @property isFixed
						* @type boolean
						* @default false
						*/
						/**
						* A `Number` that specifies the time step between updates in milliseconds.
						* If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
						* If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
						*
						* @property delta
						* @type number
						* @default 1000 / 60
						*/
					})();
				}),
				(function(module$41, exports$31, __webpack_require__) {
					/**
					* This module has now been replaced by `Matter.Collision`.
					*
					* All usage should be migrated to `Matter.Collision`.
					* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
					*
					* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
					*
					* @class SAT
					* @deprecated
					*/
					var SAT = {};
					module$41.exports = SAT;
					var Collision = __webpack_require__(8);
					var deprecated = __webpack_require__(0).deprecated;
					(function() {
						/**
						* Detect collision between two bodies using the Separating Axis Theorem.
						* @deprecated replaced by Collision.collides
						* @method collides
						* @param {body} bodyA
						* @param {body} bodyB
						* @return {collision} collision
						*/
						SAT.collides = function(bodyA, bodyB) {
							return Collision.collides(bodyA, bodyB);
						};
						deprecated(SAT, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
					})();
				}),
				(function(module$42, exports$32, __webpack_require__) {
					/**
					* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
					*
					* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
					*
					* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
					*
					* @class Svg
					*/
					var Svg = {};
					module$42.exports = Svg;
					__webpack_require__(1);
					var Common = __webpack_require__(0);
					(function() {
						/**
						* Converts an SVG path into an array of vector points.
						* If the input path forms a concave shape, you must decompose the result into convex parts before use.
						* See `Bodies.fromVertices` which provides support for this.
						* Note that this function is not guaranteed to support complex paths (such as those with holes).
						* You must load the `pathseg.js` polyfill on newer browsers.
						* @method pathToVertices
						* @param {SVGPathElement} path
						* @param {Number} [sampleLength=15]
						* @return {Vector[]} points
						*/
						Svg.pathToVertices = function(path, sampleLength) {
							if (typeof window !== "undefined" && !("SVGPathSeg" in window)) Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
							var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
							sampleLength = sampleLength || 15;
							var addPoint = function(px, py, pathSegType) {
								var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
								if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
									if (lastPoint && isRelative) {
										lx = lastPoint.x;
										ly = lastPoint.y;
									} else {
										lx = 0;
										ly = 0;
									}
									var point = {
										x: lx + px,
										y: ly + py
									};
									if (isRelative || !lastPoint) lastPoint = point;
									points.push(point);
									x = lx + px;
									y = ly + py;
								}
							};
							var addSegmentPoint = function(segment) {
								var segType = segment.pathSegTypeAsLetter.toUpperCase();
								if (segType === "Z") return;
								switch (segType) {
									case "M":
									case "L":
									case "T":
									case "C":
									case "S":
									case "Q":
										x = segment.x;
										y = segment.y;
										break;
									case "H":
										x = segment.x;
										break;
									case "V": y = segment.y;
								}
								addPoint(x, y, segment.pathSegType);
							};
							Svg._svgPathToAbsolute(path);
							total = path.getTotalLength();
							segments = [];
							for (i = 0; i < path.pathSegList.numberOfItems; i += 1) segments.push(path.pathSegList.getItem(i));
							segmentsQueue = segments.concat();
							while (length < total) {
								segmentIndex = path.getPathSegAtLength(length);
								segment = segments[segmentIndex];
								if (segment != lastSegment) {
									while (segmentsQueue.length && segmentsQueue[0] != segment) addSegmentPoint(segmentsQueue.shift());
									lastSegment = segment;
								}
								switch (segment.pathSegTypeAsLetter.toUpperCase()) {
									case "C":
									case "T":
									case "S":
									case "Q":
									case "A":
										point = path.getPointAtLength(length);
										addPoint(point.x, point.y, 0);
								}
								length += sampleLength;
							}
							for (i = 0, il = segmentsQueue.length; i < il; ++i) addSegmentPoint(segmentsQueue[i]);
							return points;
						};
						Svg._svgPathToAbsolute = function(path) {
							var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
							for (var i = 0; i < len; ++i) {
								var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
								if (/[MLHVCSQTA]/.test(segType)) {
									if ("x" in seg) x = seg.x;
									if ("y" in seg) y = seg.y;
								} else {
									if ("x1" in seg) x1 = x + seg.x1;
									if ("x2" in seg) x2 = x + seg.x2;
									if ("y1" in seg) y1 = y + seg.y1;
									if ("y2" in seg) y2 = y + seg.y2;
									if ("x" in seg) x += seg.x;
									if ("y" in seg) y += seg.y;
									switch (segType) {
										case "m":
											segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
											break;
										case "l":
											segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
											break;
										case "h":
											segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
											break;
										case "v":
											segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
											break;
										case "c":
											segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
											break;
										case "s":
											segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
											break;
										case "q":
											segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
											break;
										case "t":
											segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
											break;
										case "a":
											segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
											break;
										case "z":
										case "Z":
											x = x0;
											y = y0;
									}
								}
								if (segType == "M" || segType == "m") {
									x0 = x;
									y0 = y;
								}
							}
						};
					})();
				}),
				(function(module$43, exports$33, __webpack_require__) {
					/**
					* This module has now been replaced by `Matter.Composite`.
					*
					* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
					* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
					*
					* The property `world.gravity` has been moved to `engine.gravity`.
					*
					* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
					* Eventually this alias module will be marked as deprecated and then later removed in a future release.
					*
					* @class World
					*/
					var World = {};
					module$43.exports = World;
					var Composite = __webpack_require__(6);
					__webpack_require__(0);
					(function() {
						/**
						* See above, aliases for back compatibility only
						*/
						World.create = Composite.create;
						World.add = Composite.add;
						World.remove = Composite.remove;
						World.clear = Composite.clear;
						World.addComposite = Composite.addComposite;
						World.addBody = Composite.addBody;
						World.addConstraint = Composite.addConstraint;
					})();
				})
			]);
		});
	}));
	//#endregion
	//#region src/stage/actor.js
	var import_matter = /* @__PURE__ */ __toESM(require_matter(), 1);
	var Actor = class {
		/**
		* Create a new actor and add it to the stage.
		*
		* @constructor
		* @param {int} x - Initial x coordinate
		* @param {int} y - Initial y coordinate
		*/
		constructor(x, y) {
			this.frame = 0;
			this.state = "default";
			this.position = new Vector(x, y);
			this._angle = 0;
			this._angularVelocity = 0;
			this.spinnable = true;
			this._bounciness = .8;
			this._direction = 0;
			this._ghost = false;
			this._collides = true;
			this.locked = false;
			this._acceleration = new Vector(0, 0);
			this._acceleration.onchange = () => {
				this.anchored = false;
			};
			this._velocity = new Vector(0, 0);
			this._velocity.onchange = () => {
				this.anchored = false;
				if (this.body) import_matter.default.Body.setVelocity(this.body, this._velocity);
			};
			this.animations = [];
			this.animationActive = 0;
			this.animationRepeat = 0;
			this.eventListeners = {};
		}
		get x() {
			return this.body && !isNaN(this.body.position.x) ? this.body.position.x : this.position.x;
		}
		get y() {
			return this.body && !isNaN(this.body.position.y) ? this.body.position.y : this.position.y;
		}
		_setx(value) {
			if (!this.locked && !isNaN(value)) {
				this.position.x = value;
				if (this.body) import_matter.default.Body.setPosition(this.body, this.position);
				if (this.parent) this.parent.updateBody();
			}
		}
		set x(value) {
			if (!this.locked && !isNaN(value)) {
				this.cancelAnimations("x");
				this._setx(value);
			}
		}
		_sety(value) {
			if (!this.locked && !isNaN(value)) {
				this.position.y = value;
				if (this.body) import_matter.default.Body.setPosition(this.body, this.position);
				if (this.parent) this.parent.updateBody();
			}
		}
		set y(value) {
			if (!this.locked && !isNaN(value)) {
				this.cancelAnimations("y");
				this._sety(value);
			}
		}
		get acceleration() {
			return this._acceleration;
		}
		set acceleration(value) {
			if (value instanceof Vector) {
				this._acceleration.x = value.x;
				this._acceleration.y = value.y;
			} else {
				this._acceleration.x = Math.cos(degreesToRadians(this.direction)) * value;
				this._acceleration.y = Math.sin(degreesToRadians(this.direction)) * value;
			}
		}
		get angle() {
			if (this.body) {
				if (this.body.parent.id != this.body.id) return radiansToDegrees(this.body.parent.angle) + this._angle;
				else return radiansToDegrees(this.body.angle);
			}
			return this._angle;
		}
		set angle(value) {
			if (!this.locked) {
				this._angle = value;
				if (this.body) import_matter.default.Body.setAngle(this.body, degreesToRadians(this._angle));
			}
		}
		get angularVelocity() {
			if (this.body && !this.body.isStatic) return radiansToDegrees(this.body.angularVelocity);
			return this._angularVelocity;
		}
		set angularVelocity(value) {
			if (!this.locked) {
				this._angularVelocity = value;
				if (this.body) import_matter.default.Body.setAngularVelocity(this.body, degreesToRadians(this._angularVelocity));
			}
		}
		set anchored(value) {
			if (!this.locked) {
				if (this.body && value != this.anchored) {
					import_matter.default.Body.setStatic(this.body, value);
					this.body.restitution = this._bounciness;
				}
			}
		}
		get anchored() {
			if (this.body) return this.body.isStatic;
			else return true;
		}
		set bounciness(value) {
			if (!this.locked) {
				this._bounciness = value;
				if (this.body) this.body.restitution = value;
			}
		}
		get bounciness() {
			return this.body ? this.body.restitution : 0;
		}
		get bounds() {
			return this.body ? this.body.bounds : void 0;
		}
		set collides(value) {
			if (!this.locked) this._collides = value;
		}
		get collides() {
			return this._collides;
		}
		set direction(value) {
			if (!this.locked) {
				this._direction = value;
				if (this.body) import_matter.default.Body.setVelocity(this.body, new Vector(Math.cos(degreesToRadians(value)) * this.speed, Math.sin(degreesToRadians(value)) * this.speed));
			}
		}
		get direction() {
			if (this.body && (this.body.velocity.x > 0 || this.body.velocity.y > 0)) {
				let a = Math.atan2(this.body.velocity.y, this.body.velocity.x);
				if (a < 0) a = a + Math.PI * 2;
				return radiansToDegrees(a);
			} else return this._direction;
		}
		set friction(value) {
			if (!this.locked) {
				if (this.body) {
					this.body.friction = value;
					this.body.frictionStatic = value;
				}
			}
		}
		get friction() {
			return this.body ? this.body.friction : 0;
		}
		set ghost(value) {
			if (!this.locked) {
				if (value == this._ghost) return;
				this._ghost = value;
				if (this.body) {
					if (value) this.body.isSensor = true;
					else this.body.isSensor = false;
				}
			}
		}
		get ghost() {
			return this._ghost;
		}
		set inertia(value) {
			if (!this.locked) {
				if (this.body) import_matter.default.Body.setInertia(this.body, value);
			}
		}
		get inertia() {
			return this.body ? this.body.inertia : Infinity;
		}
		set mass(value) {
			if (!this.locked) {
				if (this.body) import_matter.default.Body.setMass(this.body, value);
			}
		}
		get mass() {
			return this.body ? this.body.mass : 0;
		}
		set speed(value) {
			if (!this.locked) {
				if (this.body) {
					this.anchored = false;
					import_matter.default.Body.setVelocity(this.body, new Vector(Math.cos(degreesToRadians(this.direction)) * value, Math.sin(degreesToRadians(this.direction)) * value));
				}
			}
		}
		get speed() {
			if (this.body) return new Vector(this.body.velocity.x, this.body.velocity.y).length;
			return 0;
		}
		get velocity() {
			return this._velocity;
		}
		set velocity(value) {
			if (value instanceof Vector) {
				this._velocity.x = value.x;
				this._velocity.y = value.y;
			} else {
				this._velocity.x = 0;
				this._velocity.y = 0;
			}
		}
		/**
		* Update the position of Actor on stage.
		* This is called each frame.
		*/
		update() {
			this.frame++;
			if (this.body) import_matter.default.Body.setVelocity(this.body, new Vector(this.body.velocity.x + this._acceleration.x, this.body.velocity.y + this._acceleration.y));
			if (!this.spinnable) this.angularVelocity = 0;
			else if (!this.body || this.body.isStatic) this.angle = this.angle + this.angularVelocity;
			if (this.body) {
				this.velocity._x = this.body.velocity.x;
				this.velocity._y = this.body.velocity.y;
			}
			if (this.body) this._direction = this.direction;
			if (this.animations.length > 0) {
				if (this.animations[this.animationActive].status == "queued") this.animations[this.animationActive].status = "ready";
				for (let i = this.animationActive; i < this.animations.length; i = i + 1) {
					if (this.animations[i].status == "queued") break;
					this.animations[i].update();
				}
				if (this.animations[this.animationActive].status == "complete") {
					this.animationActive = this.animationActive + 1;
					if (this.animationActive == this.animations.length) {
						if (this.animationRepeat != 0) {
							this.animationActive = 0;
							for (let i = 0; i < this.animations.length; i = i + 1) this.animations[i].status = this.animations[i].queue ? "queued" : "ready";
							if (this.animationRepeat > 0) this.animationRepeat = this.animationRepeat - 1;
						} else {
							if (typeof this.onAnimationsComplete == "function") {
								this.onAnimationsComplete();
								this.onAnimationsComplete = null;
							}
							this.animations = [];
							this.animationActive = 0;
							this.animationRepeat = 0;
						}
					}
				}
			}
		}
		/**
		* Rotate specified number of degrees.
		*
		* @param {float} angle - Number of degrees to rotate
		* @return {Actor} Reference to self
		*/
		rotate(degrees) {
			this.angle = this.angle + degrees;
			if (this.body) import_matter.default.Body.setAngle(this.body, degreesToRadians(this.angle));
			return this;
		}
		/**
		* Move forward in the direction of current rotation.
		*
		* @param {float} distance - Number of pixels to move
		* @return {Actor} Reference to self
		*/
		forward(distance) {
			this.position.x = this.x + Math.cos(degreesToRadians(this.angle)) * distance;
			this.position.y = this.y + Math.sin(degreesToRadians(this.angle)) * distance;
			if (this.body) import_matter.default.Body.setPosition(this.body, this.position);
			return this;
		}
		/**
		* Move backward in the direction of current rotation.
		*
		* @param {float} distance - Number of pixels to move
		* @param {float} axis - Angle of axis to move along
		* @return {Actor} Reference to self
		*/
		backward(distance) {
			let x = this.x - Math.cos(degreesToRadians(this.angle)) * distance;
			let y = this.y - Math.sin(degreesToRadians(this.angle)) * distance;
			this.x = x;
			this.y = y;
			return this;
		}
		/**
		* Add animation.
		*
		* @param {object} properties - Properties to animate
		* @param {int} duration - Duration to animation properties over
		* @param {string} tween - Easing function
		* @param {boolean} queue - Delay until active animations complete
		* @return void
		*/
		animate(properties, duration, tween = false, queue = false) {
			let animation = new Animation(this, properties, duration, tween, queue);
			this.animations.push(animation);
			return animation;
		}
		/**
		* Move to a new position.
		*
		* @param {int} x - Destination x coordinate
		* @param {int} y - Destination y coorindate
		* @param {int} duration - Length of animation in seconds
		* @param {string} tween - Easing function
		* @param {boolean} queue - Delay until active animations complete
		* @return {Animation} Animation object
		*/
		moveTo(x, y, duration = 1, tween = false, queue = false) {
			return this.animate({
				x,
				y
			}, duration, tween, queue);
		}
		/**
		* Move relative to current position.
		*
		* @param {int} x - Number of pixels to move along x axis
		* @param {int} y - Number of pixels to move along y axis
		* @param {int} duration - Length of animation in seconds
		* @param {string} tween - Easing function
		* @param {boolean} queue - Delay until active animations complete
		* @return {Animation} Animation object
		*/
		move(x = 0, y = 0, duration = 1, tween = false, queue = false) {
			return this.moveTo(this.x + x, this.y + y, duration, tween, queue);
		}
		/**
		* Shrink size.
		*
		* @param {int} amount - Number of pixels to shrink
		* @param {int} duration - Length of animation in seconds
		* @param {string} tween - Easing function
		* @param {boolean} queue - Delay until active animations complete
		* @return {Animation} Animation object
		*/
		shrink(amount, duration = 1, tween = false, queue = false) {
			return this.grow(-amount, duration, tween, queue);
		}
		/**
		* Fade opacity.
		*
		* @param {number} opacity - Target opacity
		* @param {int} duration - Length of animation in seconds
		* @param {string} tween - Easing function
		* @param {boolean} queue - Delay until active animations complete
		* @return {Animation} Animation object
		*/
		fade(opacity, duration = 1, tween = "easeinout", queue = false) {
			return this.animate({ opacity }, duration, tween, queue);
		}
		/**
		* Fade in.
		*
		* @param {number} duration - Length of animation in seconds
		* @param {string} tween - Easing function
		* @param {boolean} queue - Delay until active animations complete
		* @return {Animation} Animation object
		*/
		fadeIn(duration = 1, tween = "easeinout", queue = false) {
			return this.fade(1, duration, tween, queue);
		}
		/**
		* Fade out.
		*
		* @param {number} duration - Length of animation in seconds
		* @param {string} tween - Easing function
		* @param {boolean} queue - Delay until active animations complete
		* @return {Animation} Animation object
		*/
		fadeOut(duration = 1, tween = "easeinout", queue = false) {
			return this.fade(0, duration, tween, queue);
		}
		/**
		* Cancel animations
		* 
		* @param {string} property - Optional, cancel animations containing this property
		*/
		cancelAnimations(property = false) {
			for (let i = 0; i < this.animations.length; i = i + 1) if (property) {
				if (typeof this.animations[i].to[property] != "undefined") this.animations[i].status = "complete";
			} else this.animations[i].status = "complete";
		}
		/**
		* Apply directional force.
		*
		* @param {int} x - Horizontal force
		* @param {int} y - Vertical force
		* @return {Actor} Reference to self
		*/
		push(x = 0, y = 0) {
			if (this.body) {
				this.anchored = false;
				this.velocity._x = this.body.velocity.x + x;
				this.velocity._y = this.body.velocity.y + y;
				import_matter.default.Body.setVelocity(this.body, new Vector(this.body.velocity.x + x, this.body.velocity.y + y));
			}
			if (this.children) {
				this.anchored = false;
				for (let i = 0; i < this.children.length; i = i + 1) if (this.children[i].body) {
					this.children[i].velocity._x = this.children[i].body.velocity.x + x;
					this.children[i].velocity._y = this.children[i].body.velocity.y + y;
					import_matter.default.Body.setVelocity(this.children[i].body, new Vector(this.children[i].body.velocity.x + x, this.children[i].body.velocity.y + y));
				}
			}
		}
		/**
		* Start spinning motion.
		*
		* @param {float} speed - Angular velocity
		* @return {Actor} Reference to self
		*/
		spin(speed = 1) {
			this.angularVelocity = speed;
			return this;
		}
		/**
		* Explode object.
		*/
		explode() {}
		/**
		* Stop all motion.
		*/
		stop() {
			if (this.body) {
				import_matter.default.Body.setAngularVelocity(this.body, 0);
				import_matter.default.Body.setVelocity(this.body, new Vector(0, 0));
			}
			this.frame = 0;
			this.state = "default";
		}
		/**
		* Determine if this Actor is a polygon.
		*
		* @returns {boolean} True if Actor is a polygon.
		*/
		isPolygon() {
			if (this.boundingPolygon && this.boundingPolygon.length > 2) return true;
			else return false;
		}
		/**
		* Determine if Actor contains point.
		*
		* @param {int} x - Point X coordinate
		* @param {int} y - Point Y coordinate
		* @return {boolean}
		*/
		containsPoint(x, y) {
			if (this.body) return import_matter.default.Bounds.contains(this.body.bounds, new Vector(x, y));
		}
		/**
		* Add event listener to actor.
		*
		* @param {string} [event] - Name of event.
		* @param {function} [handler] - Event handler to execute when event occurs.
		* @param {object} [meta] - Additional details about event handler.
		*/
		addEventListener(event, handler, meta = {}) {
			if (event == "doubleclick") event = "dblclick";
			if (this.eventListeners[event] == void 0) this.eventListeners[event] = [];
			this.eventListeners[event].push({
				handler,
				...meta
			});
		}
		/**
		* Alias for add event listener.
		*
		* @param {string} [event] - Name of event.
		* @param {function} [handler] - Event handler to execute when event occurs.
		*/
		on(event, handler) {
			if (typeof event === "string") {
				if (typeof handler === "string") {
					if (typeof this[handler] == "function") handler = this[handler];
					else if (typeof window._kidjs_.get(handler) == "function") handler = window._kidjs_.get(handler);
				}
				this.addEventListener(event, handler);
			}
		}
		/**
		* Remove event listener from actor.
		*
		* @param {string} [event] - Name of event.
		* @param {function} [handler] - Event handler to remove.
		*/
		removeEventListener(event, handler) {
			if (this.eventListeners[event] !== void 0) this.eventListeners[event] = this.eventListeners[event].filter((item) => item.handler !== handler);
		}
		/**
		* Execute event handler.
		*
		* @param {Event} [event] - Event object.
		*/
		dispatchEvent(event, context = this) {
			if (this.eventListeners[event.type] !== void 0) for (let listener of this.eventListeners[event.type]) switch (event.type) {
				case "collision":
					listener.handler.call(context, event.detail);
					break;
				default: listener.handler.call(context);
			}
		}
		/**
		* Hide actor.
		*/
		hide() {
			this.invisible = true;
			if (this.body) {
				this.body.isSensor = true;
				this.collides = false;
			}
		}
		/**
		* Show actor.
		*/
		show() {
			this.invisible = false;
			if (this.body) {
				this.body.isSensor = this._ghost;
				this.collides = true;
			}
		}
		/**
		* Remove actor from stage.
		*/
		remove() {
			if (!this.locked) window.stage.removeChild(this);
		}
		/**
		* Assign properties of another actor to this one.
		*
		* @param {Actor} source
		*/
		assign(source) {
			this.x = source.x;
			this.y = source.y;
			this.angle = source.angle;
			this.anchored = source.anchored;
			for (let type in source.eventListeners) this.eventListeners[type] = source.eventListeners[type].filter((item) => !item.group);
		}
	};
	//#endregion
	//#region src/shape/index.js
	var Shape = class extends Actor {
		constructor(x, y) {
			super(x, y);
			this.fill = window.fill;
			this.stroke = window.stroke;
			this.lineWidth = window.lineWidth;
			this.opacity = 1;
			this.themeColor = false;
			this._fragments = [];
			if (!this.style) this.style = window._kidjs_.defaultStyle;
			if (this.fill == "random") {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				this.fill = `rgb(${r}, ${g}, ${b})`;
			}
			if (this.fill == "theme" || this.fill == "default") {
				if (!this.themeColor) this.themeColor = this.style.nextColor();
				this.fill = this.themeColor;
			}
		}
		_rgb() {
			window.stage.context.fillStyle = this.fill;
			let hex = window.stage.context.fillStyle;
			let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : {
				r: 0,
				g: 0,
				b: 0
			};
		}
		get r() {
			return this._rgb().r;
		}
		set r(value) {
			this.fill = `rgb(${value}, ${this.g}, ${this.b})`;
		}
		get g() {
			return this._rgb().g;
		}
		set g(value) {
			this.fill = `rgb(${this.r}, ${value}, ${this.b})`;
		}
		get b() {
			return this._rgb().b;
		}
		set b(value) {
			this.fill = `rgb(${this.r}, ${this.g}, ${value})`;
		}
		get color() {
			return this.fill;
		}
		set color(value) {
			this.fill = value;
		}
		prerender(context) {
			context.beginPath();
			context.globalAlpha = this.opacity;
		}
		postrender(context) {
			context.closePath();
			this.style.fill(context, this.fill);
			this.style.stroke(context, this.stroke, this.lineWidth);
			if (window.debug) {
				context.beginPath();
				context.rect(this.bounds.min.x, this.bounds.min.y, this.bounds.max.x - this.bounds.min.x, this.bounds.max.y - this.bounds.min.y);
				context.strokeStyle = "black";
				context.lineWidth = .5;
				context.stroke();
			}
		}
		/**
		* Remove shape (and any fragments) from stage.
		*/
		remove() {
			super.remove();
			for (let i = 0; i < this._fragments.length; i = i + 1) this._fragments[i].remove();
			this._fragments = [];
		}
		/**
		* Copy shape.
		*/
		copy() {
			let shape = new this.constructor(this.x, this.y);
			shape.assign(this);
			return shape;
		}
		/**
		* Assign properties of another shape to this one.
		*
		* @param {Shape} source
		*/
		assign(source) {
			super.assign(source);
			this.fill = source.fill;
			this.stroke = source.stroke;
			this.lineWidth = source.lineWidth;
			this.opacity = source.opacity;
		}
		/**
		* Clone shape.
		*
		* @param {int} x - Optional x coordinate
		* @param {int} y - Optional y coordinate
		*/
		clone(x = false, y = false) {
			if (this.body) {
				let width = this.body.bounds.max.x - this.body.bounds.min.x;
				let copy = this.copy();
				copy.assign(this);
				if (x !== false && y !== false) {
					copy.x = x;
					copy.y = y;
				} else copy.x = this.x + width + 5;
				copy.init();
				window.stage.addChild(copy);
				return copy;
			}
		}
	};
	//#endregion
	//#region src/core/units.js
	/**
	* Parse code for percent units.
	*
	* @param {string} code - Code to parse
	* @param {string} Modified code
	*/
	function replacePercentUnits(code) {
		let tokens = code.split(/("(?:[^"\\]*(?:\\.[^"\\]*)*)"|\'(?:[^\'\\]*(?:\\.[^\'\\]*)*)\')/);
		let result = "";
		for (let i = 0; i < tokens.length; i++) {
			if (tokens[i][0] != "\"" && tokens[i][0] != "'") tokens[i] = tokens[i].replace(/* @__PURE__ */ new RegExp("([^0-9])([0-9]{1,3})%", "g"), "$1'$2%'");
			result += tokens[i];
		}
		return result;
	}
	/**
	* Convert units to pixels
	*
	* @param {string} length - Length with units
	* @param {string} axis - X or Y axis
	* @return {Number} Length in pixels
	*/
	function parseLength(length, axis = "x") {
		if (typeof length === "number") return length;
		let match = /(\d+)(px|%)/i.exec(length);
		if (!match) throw new KidjsError("Invalid unit");
		if (match[2] == "px") return parseFloat(match[1]);
		if (match[2] == "%" && axis == "x") return parseFloat(match[1]) / 100 * window.innerWidth;
		if (match[2] == "%" && axis == "y") return parseFloat(match[1]) / 100 * window.innerHeight;
		if (match[2] == "%" && axis == "size") return parseFloat(match[1]) / 100 * Math.min(window.innerWidth, window.innerHeight);
	}
	//#endregion
	//#region src/shape/pie.js
	var Pie = class extends Shape {
		constructor(x, y, radius, startAngle, endAngle) {
			super(x, y);
			this.radius = radius;
			this.startAngle = startAngle;
			this.endAngle = endAngle;
		}
		init() {
			this._boundingPolygon = [];
			this._boundingPolygon.push(new Vector(0, 0));
			for (let theta = this.startAngle; theta <= this.endAngle; theta = theta + Math.PI / 20) this._boundingPolygon.push(new Vector(Math.cos(theta) * this.radius, Math.sin(theta) * this.radius));
			this._cp = Vector.average(this._boundingPolygon);
			this._boundingPolygon.push(new Vector(0, 0));
			for (let i = 0; i < this._boundingPolygon.length; i = i + 1) this._boundingPolygon[i] = this._boundingPolygon[i].subtract(this._cp);
			this.body = import_matter.default.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
				friction: window.friction,
				frictionStatic: window.friction,
				frictionAir: 0,
				isStatic: true
			});
		}
		render(context) {
			this.prerender(context);
			context.moveTo(this.body.vertices[0].x, this.body.vertices[0].y);
			for (let i = 0; i < this.body.vertices.length; i = i + 1) context.lineTo(this.body.vertices[i].x, this.body.vertices[i].y);
			context.lineTo(this.body.vertices[0].x, this.body.vertices[0].y);
			this.postrender(context);
		}
		/**
		* Copy shape.
		*/
		copy() {
			let shape = new this.constructor(this.x, this.y, this.radius, this.startAngle, this.endAngle);
			shape.assign(this);
			return shape;
		}
	};
	function pie(x, y, diameter, startAngle = 0, endAngle = 60) {
		if (x == null || y == null || diameter == null) return;
		const shape = new Pie(parseLength(x, "x"), parseLength(y, "y"), parseLength(diameter, "size") / 2, degreesToRadians(startAngle), degreesToRadians(endAngle));
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/circle.js
	var Circle = class extends Shape {
		constructor(x, y, radius) {
			super(x, y);
			this.radius = radius;
			this.boundingRadius = radius;
		}
		get size() {
			return this.radius * 2;
		}
		set size(value) {
			this.radius = value / 2;
		}
		init() {
			this.body = import_matter.default.Bodies.circle(this.position.x, this.position.y, this.radius, {
				friction: window.friction,
				frictionStatic: window.friction,
				frictionAir: 0,
				isStatic: true
			});
			this.bounciness = 1;
		}
		render(context) {
			this.prerender(context);
			context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			this.postrender(context);
		}
		grow(amount, duration = 1, tween = "easeInOut", queue = false) {
			return this.animate({ radius: this.radius + amount / 2 }, duration, tween);
		}
		explode() {
			if (this.locked) return;
			if (this.exploded) return;
			this.exploded = true;
			let previousFill = window.fill;
			window.fill = this.fill;
			let fragments = [];
			for (let angle = 0; angle < Math.PI * 5 / 3; angle = angle + Math.PI * 1 / 3) {
				let points = [
					new Vector(0, 0),
					new Vector(Math.cos(angle) * this.radius, Math.sin(angle) * this.radius),
					new Vector(Math.cos(angle + Math.PI * 1 / 3) * this.radius, Math.sin(angle + Math.PI * 1 / 3) * this.radius)
				];
				let cp = Vector.average(points);
				let fragment = new Pie(this.x + cp.x, this.y + cp.y, this.radius, angle, angle + Math.PI * 1 / 3);
				fragment.init();
				fragment.fill = this.fill;
				fragment.stroke = this.stroke;
				window.stage.addChild(fragment);
				let n = cp.normalize();
				fragment.push(n.x * 5, n.y * 5);
				fragment.angularVelocity = Math.random() * 5;
				fragments.push(fragment);
			}
			this.remove();
			this._fragments = fragments;
			window.fill = previousFill;
		}
		/**
		* Copy shape.
		*/
		copy() {
			let shape = new this.constructor(this.x, this.y, this.radius);
			shape.assign(this);
			return shape;
		}
	};
	function circle(x, y, diameter) {
		if (x == null || y == null || diameter == null) return;
		const shape = new Circle(parseLength(x, "x"), parseLength(y, "y"), parseLength(diameter, "size") / 2);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/curve.js
	var Curve = class extends Shape {
		constructor(args) {
			super();
			if (!this.stroke) this.stroke = "black";
			this.points = [];
			for (let i = 0; i < args.length - 1; i = i + 2) this.points.push(new Vector(args[i], args[i + 1]));
		}
		get color() {
			return this.stroke;
		}
		set color(value) {
			this.stroke = value;
		}
		drawSpline(context) {
			let points = [...this.points];
			points.unshift(points[0]);
			points.unshift(points[0]);
			points.push(points[points.length - 1]);
			points.push(points[points.length - 1]);
			context.moveTo(points[0].x, points[0].y);
			for (let i = 0; i < points.length - 3; i++) for (let t = 0; t <= 1; t += .01) {
				let ax = (-points[i].x + 3 * points[i + 1].x - 3 * points[i + 2].x + points[i + 3].x) / 6;
				let ay = (-points[i].y + 3 * points[i + 1].y - 3 * points[i + 2].y + points[i + 3].y) / 6;
				let bx = (points[i].x - 2 * points[i + 1].x + points[i + 2].x) / 2;
				let by = (points[i].y - 2 * points[i + 1].y + points[i + 2].y) / 2;
				let cx = (-points[i].x + points[i + 2].x) / 2;
				let cy = (-points[i].y + points[i + 2].y) / 2;
				let dx = (points[i].x + 4 * points[i + 1].x + points[i + 2].x) / 6;
				let dy = (points[i].y + 4 * points[i + 1].y + points[i + 2].y) / 6;
				context.lineTo(ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + dx, ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + dy);
			}
		}
		render(context) {
			this.prerender(context);
			this.drawSpline(context);
			this.postrender(context);
		}
		postrender(context) {
			this.style.stroke(context, this.stroke, this.lineWidth);
		}
	};
	function curve(...args) {
		for (let i = 0; i < args.length - 1; i = i + 2) {
			args[i] = parseLength(args[i], "x");
			args[i + 1] = parseLength(args[i + 1], "y");
		}
		let shape = new Curve(args);
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/line.js
	var Line = class extends Shape {
		constructor(x1, y1, x2, y2) {
			super(x1, y1);
			if (!this.stroke) this.stroke = "black";
			this.v = new Vector(x2 - x1, y2 - y1);
			this.u = this.v.normalize();
			this.dashed = false;
			this.cap = false;
		}
		get x1() {
			return this.x;
		}
		set x1(value) {
			let x2 = this.x + this.v.x;
			this.x = value;
			this.v.x = x2 - value;
		}
		get y1() {
			return this.y;
		}
		set y1(value) {
			let y2 = this.y + this.v.y;
			this.y = value;
			this.v.y = y2 - value;
		}
		get x2() {
			return this.x + this.v.x;
		}
		set x2(value) {
			this.v.x = value - this.x;
		}
		get y2() {
			return this.y + this.v.y;
		}
		set y2(value) {
			this.v.y = value - this.y;
		}
		get color() {
			return this.stroke;
		}
		set color(value) {
			this.stroke = value;
		}
		render(context) {
			this.prerender(context);
			if (this.dashed) context.setLineDash([5, 5]);
			switch (this.cap) {
				case "round":
					context.lineCap = "round";
					break;
				case "square":
					context.lineCap = "square";
					break;
				default: context.lineCap = "butt";
			}
			switch (this.state) {
				case "wiggle":
					context.moveTo(this.x, this.y);
					for (let i = 0; i < this.vectors.length - 1; i = i + 2) {
						let magnitude = Math.sin(this.frame / 5) * 10;
						context.bezierCurveTo(this.x + this.vectors[i].x - this.u.y * magnitude, this.y + this.vectors[i].y + this.u.x * magnitude, this.x + this.vectors[i].x + this.u.y * magnitude, this.y + this.vectors[i].y - this.u.x * magnitude, this.x + this.vectors[i + 1].x, this.y + this.vectors[i + 1].y);
					}
					if (this.frame > 300) {
						this.frame = 0;
						this.state = "default";
					}
					break;
				default:
					context.moveTo(this.x, this.y);
					context.lineTo(this.x + this.v.x, this.y + this.v.y);
			}
			this.postrender(context);
		}
		postrender(context) {
			this.style.stroke(context, this.stroke, this.lineWidth);
			context.setLineDash([]);
		}
		wiggle() {
			this.state = "wiggle";
			this.vectors = [];
			let segment = this.v.length / 10;
			for (let i = 1; i <= 10; i++) this.vectors.push(new Vector(this.u.x * segment * i, this.u.y * segment * i));
		}
	};
	function line(x1, y1, x2, y2) {
		if (x1 == null || y1 == null || x2 == null || y2 == null) return;
		let shape = new Line(parseLength(x1, "x"), parseLength(y1, "y"), parseLength(x2, "x"), parseLength(y2, "y"));
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/polygon.js
	var Polygon = class Polygon extends Shape {
		/**
		* Create a new polygon and add it to the stage.
		*
		* @constructor
		* @param {int} x - Initial x coordinate
		* @param {int} y - Initial y coordinate
		*/
		constructor(x, y) {
			super(x, y);
			this.points = [];
			this._boundingPolygon = [];
		}
		init() {
			this.body = import_matter.default.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
				friction: window.friction,
				frictionStatic: window.friction,
				frictionAir: 0,
				isStatic: true
			});
		}
		get boundingPolygon() {
			let points = [];
			for (let i = 0; i < this._boundingPolygon.length; i++) {
				let p = this._boundingPolygon[i].rotate(this.angle);
				p = p.add(this.position);
				points.push(p);
			}
			return points;
		}
		/**
		* Remove all points from the polygon.
		*/
		clearPoints() {
			this.points = [];
			this.updateBoundingPolygon();
		}
		/**
		* Add point to the polygon.
		*
		* @param {int} x - X coordinate
		* @param {int} y - Y coordinate
		*/
		addPoint(x, y) {
			let v = new Vector(x, -y);
			if (v.length > this.boundingRadius) this.boundingRadius = v.length;
			this.points.push(v);
			this.updateBoundingPolygon();
		}
		/**
		* Update point to the polygon.
		*
		* @param {int} index - Which point
		* @param {int} x - X coordinate
		* @param {int} y - Y coordinate
		*/
		updatePoint(index, x, y) {
			if (index < this.points.length) {
				if (typeof x == "number") this.points[index].x = x;
				if (typeof y == "number") this.points[index].y = y;
				this.updateBody();
			}
		}
		/**
		* Update physics body.
		*/
		updateBody() {
			this.updateBoundingPolygon();
			if (this.body) import_matter.default.Body.setVertices(this.body, this._boundingPolygon);
		}
		/**
		* Use gift wraping algorithm to determine convex hull.
		*/
		updateBoundingPolygon() {
			const orientation = function(p, q, r) {
				let a = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
				if (a == 0) return 0;
				return a > 0 ? 1 : 2;
			};
			this._boundingPolygon = [];
			if (this.points.length > 2) {
				let leftmost = 0;
				for (let i = 1; i < this.points.length; i++) if (this.points[i].x < leftmost.x) leftmost = i;
				let p = leftmost;
				let q = leftmost;
				do {
					this._boundingPolygon.push(this.points[p]);
					q = (p + 1) % this.points.length;
					for (let j = 0; j < this.points.length; j++) if (orientation(this.points[p], this.points[j], this.points[q]) == 2) q = j;
					p = q;
				} while (p != leftmost);
			}
		}
		/**
		* Render polygon.
		*
		* @param {CanvasRenderingContext2D} context - Canvas drawing context.
		*/
		render(context) {
			if (this.points.length < 2) return;
			this.prerender(context);
			let v = this.points[0].rotate(this.angle);
			context.moveTo(this.x + v.x, this.y + v.y);
			for (let point of this.points) {
				v = point.rotate(this.angle);
				context.lineTo(this.x + v.x, this.y + v.y);
			}
			this.postrender(context);
		}
		/**
		* Explode this polygon into sub-polygons
		*/
		explode() {
			if (this.locked) return;
			if (this.exploded) return;
			this.exploded = true;
			let previousFill = window.fill;
			window.fill = this.fill;
			let fragments = [];
			for (let i = 0; i < this.points.length; i = i + 1) {
				let points = [
					this.points[i],
					this.points[(i + 1) % this.points.length],
					new Vector(0, 0)
				];
				let cp = Vector.average(points);
				let fragment = new Polygon(this.x + cp.x, this.y + cp.y);
				for (let j = 0; j < points.length; j = j + 1) {
					let v = points[j].subtract(cp);
					fragment.addPoint(v.x, v.y);
				}
				fragment.fill = this.fill;
				fragment.stroke = this.stroke;
				fragment.init();
				window.stage.addChild(fragment);
				let n = cp.normalize();
				fragment.push(n.x * 5, n.y * 5);
				fragment.angularVelocity = Math.random() * 5;
				fragments.push(fragment);
			}
			this.remove();
			this._fragments = fragments;
			window.fill = previousFill;
		}
		/**
		* Assign properties of another polygon to this one.
		*
		* @param {Circle} source
		*/
		assign(source) {
			super.assign(source);
			for (let i = 0; i < source.points.length; i = i + 1) this.addPoint(source.points[i].x, -source.points[i].y);
		}
	};
	function polygon(...args) {
		for (let i = 0; i < args.length - 1; i = i + 2) {
			args[i] = parseLength(args[i], "x");
			args[i + 1] = parseLength(args[i + 1], "y");
		}
		if (args.length <= 5) return;
		let sumX = 0;
		let sumY = 0;
		for (let i = 0; i < args.length - 1; i = i + 2) {
			sumX = sumX + args[i];
			sumY = sumY + args[i + 1];
		}
		let cx = sumX / Math.floor(args.length / 2);
		let cy = sumY / Math.floor(args.length / 2);
		const shape = new Polygon(cx, cy);
		for (let i = 0; i < args.length - 1; i = i + 2) shape.addPoint(args[i] - cx, cy - args[i + 1]);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/oval.js
	var Oval = class extends Shape {
		constructor(x, y, radiusX, radiusY) {
			super(x, y);
			this.radiusX = radiusX;
			this.radiusY = radiusY;
		}
		init() {
			this._boundingPolygon = [];
			for (let theta = 0; theta <= Math.PI * 2; theta = theta + Math.PI / 20) this._boundingPolygon.push(new Vector(Math.cos(theta) * this.radiusX, Math.sin(theta) * this.radiusY));
			this.body = import_matter.default.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
				friction: window.friction,
				frictionStatic: window.friction,
				frictionAir: 0,
				isStatic: true
			});
		}
		render(context) {
			this.prerender(context);
			let angleRadians = this.angle * (Math.PI / 180);
			context.ellipse(this.x, this.y, this.radiusX, this.radiusY, angleRadians, 0, Math.PI * 2);
			this.postrender(context);
		}
		explode() {
			if (this.locked) return;
			if (this.exploded) return;
			this.exploded = true;
			let previousFill = window.fill;
			window.fill = this.fill;
			let fragments = [];
			for (let angle = 0; angle < Math.PI * 2; angle = angle + Math.PI * 1 / 2) {
				let points = [new Vector(0, 0)];
				for (let theta = angle; theta <= angle + Math.PI * 1 / 2; theta = theta + Math.PI / 20) points.push(new Vector(Math.cos(theta) * this.radiusX, Math.sin(theta) * this.radiusY));
				let cp = Vector.average(points);
				let fragment = new Polygon(this.x + cp.x, this.y + cp.y);
				for (let i = 0; i < points.length; i = i + 1) {
					let v = points[i].subtract(cp);
					fragment.addPoint(v.x, v.y);
				}
				fragment.init();
				fragment.fill = this.fill;
				fragment.stroke = this.stroke;
				window.stage.addChild(fragment);
				let n = cp.normalize();
				fragment.push(n.x * 5, n.y * 5);
				fragment.angularVelocity = Math.random() * 5;
				fragments.push(fragment);
			}
			this.remove();
			this._fragments = fragments;
			window.fill = previousFill;
		}
		/**
		* Copy shape.
		*/
		copy() {
			let shape = new this.constructor(this.x, this.y, this.radiusX, this.radiusY);
			shape.assign(this);
			return shape;
		}
	};
	function oval(x, y, width, height) {
		if (x == null || y == null || width == null || height == null) return;
		const shape = new Oval(parseLength(x, "x"), parseLength(y, "y"), parseLength(width, "x") / 2, parseLength(height, "y") / 2);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/path.js
	var Path = class extends Shape {
		constructor(x = 0, y = 0) {
			super(x, y);
			this._path = new Path2D();
			this.stroke = "black";
		}
		moveTo(x, y) {
			this._path.moveTo(x, y);
		}
		lineTo(x, y) {
			this._path.lineTo(x, y);
		}
		bezierCurveTo(x1, y1, x2, y2, x3, y3) {
			this._path.bezierCurveTo(x1, y1, x2, y2, x3, y3);
		}
		quadraticCurveTo(x1, y1, x2, y2) {
			this._path.quadraticCurveTo(x1, y1, x2, y2);
		}
		render(context) {
			context.strokeStyle = this.stroke;
			context.lineWidth = this.lineWidth;
			context.stroke(this._path);
		}
	};
	function path() {
		const shape = new Path();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/media/index.js
	var Recording = class {
		/**
		* Create a new video recording.
		*
		* @constructor
		*/
		constructor() {
			this.stream = window.stage.canvas.captureStream(60);
			this.recorder = new MediaRecorder(this.stream, {
				audioBitsPerSecond: 128e3,
				videoBitsPerSecond: 25e5,
				mimeType: "video/webm"
			});
			this.chunks = [];
			this.recorder.ondataavailable = function(e) {
				this.chunks.push(e.data);
			}.bind(this);
		}
		/**
		* Start recording video.
		*/
		start() {
			this.recorder.start();
		}
		/**
		* Stop recording video.
		*/
		stop() {
			this.recorder.stop();
		}
		/**
		* Download recorded video.
		*
		* @param {string} filename - Downloaded filename
		*/
		download(filename = "capture.webm") {
			if (this.chunks.length > 0) {
				let blob = new Blob(this.chunks, { "type": "video/webm" });
				let videoURL = URL.createObjectURL(blob);
				let a = document.createElement("a");
				document.body.appendChild(a);
				a.href = videoURL;
				a.download = filename;
				a.click();
			}
		}
	};
	/**
	* Create and start a new recording.
	*
	* @return {Recording} Video recording
	*/
	function record() {
		let recording = new Recording();
		recording.start();
		return recording;
	}
	//#endregion
	//#region src/shape/rect.js
	var Rect = class Rect extends Polygon {
		constructor(x, y, width, height) {
			super(x, y);
			this._width = width;
			this._height = height;
			this.addPoint(-width / 2, -height / 2);
			this.addPoint(width / 2, -height / 2);
			this.addPoint(width / 2, height / 2);
			this.addPoint(-width / 2, height / 2);
		}
		init() {
			this.body = import_matter.default.Bodies.rectangle(this.position.x, this.position.y, this._width, this._height, {
				friction: window.friction,
				frictionStatic: window.friction,
				frictionAir: 0,
				isStatic: true
			});
		}
		set width(value) {
			this._width = value;
			this.updatePoint(0, -value / 2);
			this.updatePoint(1, value / 2);
			this.updatePoint(2, value / 2);
			this.updatePoint(3, -value / 2);
		}
		get width() {
			return this._width;
		}
		set height(value) {
			this._height = value;
			this.updatePoint(0, null, -value / 2);
			this.updatePoint(1, null, -value / 2);
			this.updatePoint(2, null, value / 2);
			this.updatePoint(3, null, value / 2);
		}
		get height() {
			return this._height;
		}
		copy() {
			return new Rect(this.x, this.y, this.width, this.height);
		}
	};
	function rect$1(x, y, width, height) {
		if (x == null || y == null || width == null || height == null) return;
		const shape = new Rect(parseLength(x, "x"), parseLength(y, "y"), parseLength(width, "x"), parseLength(height, "y"));
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	function square(x, y, size) {
		if (x == null || y == null || size == null) return;
		let shape = new Rect(parseLength(x, "x"), parseLength(y, "y"), parseLength(size, "size"), parseLength(size, "size"));
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/regular.js
	var RegularPolygon = class extends Polygon {
		constructor(x, y, diameter, sides) {
			super(x, y);
			this.sides = sides;
			this.diameter = diameter;
			if (this.sides > 2) {
				let angle = 360 / this.sides;
				let v = new Vector(0, this.diameter / 2);
				for (let i = 0; i < this.sides; i++) {
					this.addPoint(v.x, v.y);
					v = v.rotate(angle);
				}
			}
		}
		grow(amount, duration = 1, tween = "easeInOut", queue = false) {
			return this.animate({ size: this.size + amount }, duration, tween);
		}
		/**
		* Get size (diameter) of the polygon.
		*/
		get size() {
			return this.diameter;
		}
		/**
		* Set size (diameter) of polygon and regenerate points.
		*
		* @param {int} value - Diameter of polygon
		*/
		set size(value) {
			this.diameter = parseLength(value, "size");
			for (let i = 0; i < this.points.length; i++) this.points[i].length = this.diameter / 2;
		}
	};
	/**
	* Create new pentagon and add it to the stage.
	*
	* @param {int} x - X coordinate
	* @param {int} y - Y coordinate
	* @param {int} diameter - Diameter of polygon
	*/
	function pentagon(x, y, diameter) {
		if (x == null || y == null || diameter == null) return;
		let shape = new RegularPolygon(parseLength(x, "x"), parseLength(y, "y"), parseLength(diameter, "size"), 5);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	/**
	* Create new hexagon and add it to the stage.
	*
	* @param {int} x - X coordinate
	* @param {int} y - Y coordinate
	* @param {int} diameter - Diameter of polygon
	*/
	function hexagon(x, y, diameter) {
		if (x == null || y == null || diameter == null) return;
		let shape = new RegularPolygon(parseLength(x, "x"), parseLength(y, "y"), parseLength(diameter, "size"), 6);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	/**
	* Create new heptagon and add it to the stage.
	*
	* @param {int} x - X coordinate
	* @param {int} y - Y coordinate
	* @param {int} diameter - Diameter of polygon
	*/
	function heptagon(x, y, diameter) {
		if (x == null || y == null || diameter == null) return;
		let shape = new RegularPolygon(parseLength(x, "x"), parseLength(y, "y"), parseLength(diameter, "size"), 7);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	/**
	* Create new octagon and add it to the stage.
	*
	* @param {int} x - X coordinate
	* @param {int} y - Y coordinate
	* @param {int} diameter - Diameter of polygon
	*/
	function octagon(x, y, diameter) {
		if (x == null || y == null || diameter == null) return;
		let shape = new RegularPolygon(parseLength(x, "x"), parseLength(y, "y"), parseLength(diameter, "size"), 8);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/semicircle.js
	var Semicircle = class extends Shape {
		constructor(x, y, radius) {
			super(x, y);
			this.radius = radius;
		}
		init() {
			this._boundingPolygon = [];
			for (let theta = 0; theta <= Math.PI; theta = theta + Math.PI / 20) this._boundingPolygon.push(new Vector(Math.cos(theta) * this.radius, Math.sin(theta) * this.radius));
			this.body = import_matter.default.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
				friction: window.friction,
				frictionStatic: window.friction,
				frictionAir: 0,
				isStatic: true
			});
		}
		render(context) {
			this.prerender(context);
			let angleRadians = this.angle * (Math.PI / 180);
			let offsetLength = 4 * this.radius / (3 * Math.PI);
			let offset = new Vector(Math.cos(angleRadians - Math.PI / 2) * offsetLength, Math.sin(angleRadians - Math.PI / 2) * offsetLength);
			context.arc(this.x + offset.x, this.y + offset.y, this.radius, angleRadians, angleRadians + Math.PI);
			this.postrender(context);
		}
		explode() {
			if (this.locked) return;
			if (this.exploded) return;
			this.exploded = true;
			let previousFill = window.fill;
			window.fill = this.fill;
			let fragments = [];
			for (let angle = this.angle; angle < this.angle + Math.PI; angle = angle + Math.PI * 1 / 3) {
				let points = [
					new Vector(0, 0),
					new Vector(Math.cos(angle) * this.radius, Math.sin(angle) * this.radius),
					new Vector(Math.cos(angle + Math.PI * 1 / 3) * this.radius, Math.sin(angle + Math.PI * 1 / 3) * this.radius)
				];
				let cp = Vector.average(points);
				let fragment = new Pie(this.x + cp.x, this.y + cp.y, this.radius, angle, angle + Math.PI * 1 / 3);
				fragment.init();
				fragment.fill = this.fill;
				fragment.stroke = this.stroke;
				window.stage.addChild(fragment);
				let n = cp.normalize();
				fragment.push(n.x * 5, n.y * 5);
				fragment.angularVelocity = Math.random() * 5;
				fragments.push(fragment);
			}
			this.remove();
			this._fragments = fragments;
			window.fill = previousFill;
		}
		/**
		* Copy shape.
		*/
		copy() {
			return new this.constructor(this.x, this.y, this.radius);
		}
	};
	function semicircle(x, y, diameter) {
		if (x == null || y == null || diameter == null) return;
		const shape = new Semicircle(parseLength(x, "x"), parseLength(y, "y"), parseLength(diameter, "size") / 2);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/shape/triangle.js
	var Triangle = class Triangle extends Polygon {
		constructor(x, y, width, height) {
			super(x, y);
			this.width = width;
			this.height = height;
			this.addPoint(-width / 2, -height * 1 / 3);
			this.addPoint(width / 2, -height * 1 / 3);
			this.addPoint(0, height * 2 / 3);
		}
		copy() {
			return new Triangle(this.x, this.y, this.width, this.height);
		}
	};
	function triangle(x, y, width, height) {
		if (x == null || y == null || width == null) return;
		let shape;
		if (height == null) shape = new RegularPolygon(parseLength(x, "x"), parseLength(y, "y"), parseLength(width, "size"), 3);
		else shape = new Triangle(parseLength(x, "x"), parseLength(y, "y"), parseLength(width, "x"), parseLength(height, "y"));
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/sprite/index.js
	var Sprite = class extends Actor {
		/**
		* Create a new image and add it to the stage.
		*
		* @constructor
		* @param {string} imageUrl - Path to image
		* @param {int} x - Initial x coordinate
		* @param {int} y - Initial y coordinate
		* @param {int}
		*/
		constructor(imageUrl, x, y, width, height) {
			super(x, y);
			this.width = width;
			this.height = height;
			this.image = new Image();
			this.image.onload = () => {
				this.loaded = true;
				if (this.width === false) this.width = this.image.width;
				if (this.height === false) this.height = this.image.height;
			};
			this.image.src = assetUrlFilter(imageUrl);
			this.scale = 1;
		}
		/**
		* Render image.
		*
		* @param {CanvasRenderingContext2D} context - Canvas drawing context.
		*/
		render(context) {
			if (this.loaded) {
				context.globalAlpha = this.opacity;
				context.drawImage(this.image, this.x - this.width * this.scale / 2, this.y - this.height * this.scale / 2, this.width * this.scale, this.height * this.scale);
				context.globalAlpha = 1;
			}
		}
	};
	function image(url, x, y, width = false, height = false) {
		const sprite = new Sprite(url, x, y, width, height);
		window.stage.addChild(sprite);
		return sprite;
	}
	//#endregion
	//#region src/shape/star.js
	var Star = class extends Polygon {
		constructor(x, y, outerRadius, innerRadius, points = 5) {
			super(x, y);
			let angle = 360 / points;
			let outerVector = new Vector(0, outerRadius);
			let innerVector = new Vector(0, innerRadius);
			innerVector = innerVector.rotate(angle / 2);
			for (let i = 0; i < points; i++) {
				this.addPoint(outerVector.x, outerVector.y);
				this.addPoint(innerVector.x, innerVector.y);
				outerVector = outerVector.rotate(angle);
				innerVector = innerVector.rotate(angle);
			}
		}
	};
	function star(x, y, outerDiameter, innerDiameter = false, points = 5) {
		if (x == null || y == null || outerDiameter == null) return;
		let goldenRatio = (1 + Math.sqrt(5)) / 2;
		let outerRadius = parseLength(outerDiameter, "size") / 2;
		let innerRadius = innerDiameter !== false ? parseLength(innerDiameter, "size") / 2 : parseLength(outerRadius, "size") * (1 / Math.pow(goldenRatio, 2));
		let shape = new Star(parseLength(x, "x"), parseLength(y, "y"), outerRadius, innerRadius, points);
		shape.init();
		window.stage.addChild(shape);
		return shape;
	}
	//#endregion
	//#region src/style/texture.js
	var Texture = class {
		constructor(context, imageUrl, opacity = .2) {
			let image = new Image();
			image.src = imageUrl;
			image.onload = () => {
				this.pattern = context.createPattern(image, "repeat");
			};
			this.opacity = opacity;
		}
	};
	//#endregion
	//#region src/style/textures/paint.jpg
	var paint_default = "data:image/jpeg;base64,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";
	//#endregion
	//#region node_modules/seedrandom/lib/alea.js
	var require_alea = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, module$6, define) {
			function Alea(seed) {
				var me = this, mash = Mash();
				me.next = function() {
					var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
					me.s0 = me.s1;
					me.s1 = me.s2;
					return me.s2 = t - (me.c = t | 0);
				};
				me.c = 1;
				me.s0 = mash(" ");
				me.s1 = mash(" ");
				me.s2 = mash(" ");
				me.s0 -= mash(seed);
				if (me.s0 < 0) me.s0 += 1;
				me.s1 -= mash(seed);
				if (me.s1 < 0) me.s1 += 1;
				me.s2 -= mash(seed);
				if (me.s2 < 0) me.s2 += 1;
				mash = null;
			}
			function copy(f, t) {
				t.c = f.c;
				t.s0 = f.s0;
				t.s1 = f.s1;
				t.s2 = f.s2;
				return t;
			}
			function impl(seed, opts) {
				var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
				prng.int32 = function() {
					return xg.next() * 4294967296 | 0;
				};
				prng.double = function() {
					return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
				};
				prng.quick = prng;
				if (state) {
					if (typeof state == "object") copy(state, xg);
					prng.state = function() {
						return copy(xg, {});
					};
				}
				return prng;
			}
			function Mash() {
				var n = 4022871197;
				var mash = function(data) {
					data = String(data);
					for (var i = 0; i < data.length; i++) {
						n += data.charCodeAt(i);
						var h = .02519603282416938 * n;
						n = h >>> 0;
						h -= n;
						h *= n;
						n = h >>> 0;
						h -= n;
						n += h * 4294967296;
					}
					return (n >>> 0) * 23283064365386963e-26;
				};
				return mash;
			}
			if (module$6 && module$6.exports) module$6.exports = impl;
			else if (define && define.amd) define(function() {
				return impl;
			});
			else this.alea = impl;
		})(exports, typeof module == "object" && module, typeof define == "function" && define);
	}));
	//#endregion
	//#region node_modules/seedrandom/lib/xor128.js
	var require_xor128 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, module$5, define) {
			function XorGen(seed) {
				var me = this, strseed = "";
				me.x = 0;
				me.y = 0;
				me.z = 0;
				me.w = 0;
				me.next = function() {
					var t = me.x ^ me.x << 11;
					me.x = me.y;
					me.y = me.z;
					me.z = me.w;
					return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
				};
				if (seed === (seed | 0)) me.x = seed;
				else strseed += seed;
				for (var k = 0; k < strseed.length + 64; k++) {
					me.x ^= strseed.charCodeAt(k) | 0;
					me.next();
				}
			}
			function copy(f, t) {
				t.x = f.x;
				t.y = f.y;
				t.z = f.z;
				t.w = f.w;
				return t;
			}
			function impl(seed, opts) {
				var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
					return (xg.next() >>> 0) / 4294967296;
				};
				prng.double = function() {
					do
						var result = ((xg.next() >>> 11) + (xg.next() >>> 0) / 4294967296) / (1 << 21);
					while (result === 0);
					return result;
				};
				prng.int32 = xg.next;
				prng.quick = prng;
				if (state) {
					if (typeof state == "object") copy(state, xg);
					prng.state = function() {
						return copy(xg, {});
					};
				}
				return prng;
			}
			if (module$5 && module$5.exports) module$5.exports = impl;
			else if (define && define.amd) define(function() {
				return impl;
			});
			else this.xor128 = impl;
		})(exports, typeof module == "object" && module, typeof define == "function" && define);
	}));
	//#endregion
	//#region node_modules/seedrandom/lib/xorwow.js
	var require_xorwow = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, module$4, define) {
			function XorGen(seed) {
				var me = this, strseed = "";
				me.next = function() {
					var t = me.x ^ me.x >>> 2;
					me.x = me.y;
					me.y = me.z;
					me.z = me.w;
					me.w = me.v;
					return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
				};
				me.x = 0;
				me.y = 0;
				me.z = 0;
				me.w = 0;
				me.v = 0;
				if (seed === (seed | 0)) me.x = seed;
				else strseed += seed;
				for (var k = 0; k < strseed.length + 64; k++) {
					me.x ^= strseed.charCodeAt(k) | 0;
					if (k == strseed.length) me.d = me.x << 10 ^ me.x >>> 4;
					me.next();
				}
			}
			function copy(f, t) {
				t.x = f.x;
				t.y = f.y;
				t.z = f.z;
				t.w = f.w;
				t.v = f.v;
				t.d = f.d;
				return t;
			}
			function impl(seed, opts) {
				var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
					return (xg.next() >>> 0) / 4294967296;
				};
				prng.double = function() {
					do
						var result = ((xg.next() >>> 11) + (xg.next() >>> 0) / 4294967296) / (1 << 21);
					while (result === 0);
					return result;
				};
				prng.int32 = xg.next;
				prng.quick = prng;
				if (state) {
					if (typeof state == "object") copy(state, xg);
					prng.state = function() {
						return copy(xg, {});
					};
				}
				return prng;
			}
			if (module$4 && module$4.exports) module$4.exports = impl;
			else if (define && define.amd) define(function() {
				return impl;
			});
			else this.xorwow = impl;
		})(exports, typeof module == "object" && module, typeof define == "function" && define);
	}));
	//#endregion
	//#region node_modules/seedrandom/lib/xorshift7.js
	var require_xorshift7 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, module$3, define) {
			function XorGen(seed) {
				var me = this;
				me.next = function() {
					var X = me.x, i = me.i, t = X[i], v;
					t ^= t >>> 7;
					v = t ^ t << 24;
					t = X[i + 1 & 7];
					v ^= t ^ t >>> 10;
					t = X[i + 3 & 7];
					v ^= t ^ t >>> 3;
					t = X[i + 4 & 7];
					v ^= t ^ t << 7;
					t = X[i + 7 & 7];
					t = t ^ t << 13;
					v ^= t ^ t << 9;
					X[i] = v;
					me.i = i + 1 & 7;
					return v;
				};
				function init(me, seed) {
					var j, X = [];
					if (seed === (seed | 0)) X[0] = seed;
					else {
						seed = "" + seed;
						for (j = 0; j < seed.length; ++j) X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
					}
					while (X.length < 8) X.push(0);
					for (j = 0; j < 8 && X[j] === 0; ++j);
					if (j == 8) X[7] = -1;
					else X[j];
					me.x = X;
					me.i = 0;
					for (j = 256; j > 0; --j) me.next();
				}
				init(me, seed);
			}
			function copy(f, t) {
				t.x = f.x.slice();
				t.i = f.i;
				return t;
			}
			function impl(seed, opts) {
				if (seed == null) seed = +/* @__PURE__ */ new Date();
				var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
					return (xg.next() >>> 0) / 4294967296;
				};
				prng.double = function() {
					do
						var result = ((xg.next() >>> 11) + (xg.next() >>> 0) / 4294967296) / (1 << 21);
					while (result === 0);
					return result;
				};
				prng.int32 = xg.next;
				prng.quick = prng;
				if (state) {
					if (state.x) copy(state, xg);
					prng.state = function() {
						return copy(xg, {});
					};
				}
				return prng;
			}
			if (module$3 && module$3.exports) module$3.exports = impl;
			else if (define && define.amd) define(function() {
				return impl;
			});
			else this.xorshift7 = impl;
		})(exports, typeof module == "object" && module, typeof define == "function" && define);
	}));
	//#endregion
	//#region node_modules/seedrandom/lib/xor4096.js
	var require_xor4096 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, module$2, define) {
			function XorGen(seed) {
				var me = this;
				me.next = function() {
					var w = me.w, X = me.X, i = me.i, t, v;
					me.w = w = w + 1640531527 | 0;
					v = X[i + 34 & 127];
					t = X[i = i + 1 & 127];
					v ^= v << 13;
					t ^= t << 17;
					v ^= v >>> 15;
					t ^= t >>> 12;
					v = X[i] = v ^ t;
					me.i = i;
					return v + (w ^ w >>> 16) | 0;
				};
				function init(me, seed) {
					var t, v, i, j, w, X = [], limit = 128;
					if (seed === (seed | 0)) {
						v = seed;
						seed = null;
					} else {
						seed = seed + "\0";
						v = 0;
						limit = Math.max(limit, seed.length);
					}
					for (i = 0, j = -32; j < limit; ++j) {
						if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
						if (j === 0) w = v;
						v ^= v << 10;
						v ^= v >>> 15;
						v ^= v << 4;
						v ^= v >>> 13;
						if (j >= 0) {
							w = w + 1640531527 | 0;
							t = X[j & 127] ^= v + w;
							i = 0 == t ? i + 1 : 0;
						}
					}
					if (i >= 128) X[(seed && seed.length || 0) & 127] = -1;
					i = 127;
					for (j = 512; j > 0; --j) {
						v = X[i + 34 & 127];
						t = X[i = i + 1 & 127];
						v ^= v << 13;
						t ^= t << 17;
						v ^= v >>> 15;
						t ^= t >>> 12;
						X[i] = v ^ t;
					}
					me.w = w;
					me.X = X;
					me.i = i;
				}
				init(me, seed);
			}
			function copy(f, t) {
				t.i = f.i;
				t.w = f.w;
				t.X = f.X.slice();
				return t;
			}
			function impl(seed, opts) {
				if (seed == null) seed = +/* @__PURE__ */ new Date();
				var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
					return (xg.next() >>> 0) / 4294967296;
				};
				prng.double = function() {
					do
						var result = ((xg.next() >>> 11) + (xg.next() >>> 0) / 4294967296) / (1 << 21);
					while (result === 0);
					return result;
				};
				prng.int32 = xg.next;
				prng.quick = prng;
				if (state) {
					if (state.X) copy(state, xg);
					prng.state = function() {
						return copy(xg, {});
					};
				}
				return prng;
			}
			if (module$2 && module$2.exports) module$2.exports = impl;
			else if (define && define.amd) define(function() {
				return impl;
			});
			else this.xor4096 = impl;
		})(exports, typeof module == "object" && module, typeof define == "function" && define);
	}));
	//#endregion
	//#region node_modules/seedrandom/lib/tychei.js
	var require_tychei = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, module$1, define) {
			function XorGen(seed) {
				var me = this, strseed = "";
				me.next = function() {
					var b = me.b, c = me.c, d = me.d, a = me.a;
					b = b << 25 ^ b >>> 7 ^ c;
					c = c - d | 0;
					d = d << 24 ^ d >>> 8 ^ a;
					a = a - b | 0;
					me.b = b = b << 20 ^ b >>> 12 ^ c;
					me.c = c = c - d | 0;
					me.d = d << 16 ^ c >>> 16 ^ a;
					return me.a = a - b | 0;
				};
				me.a = 0;
				me.b = 0;
				me.c = -1640531527;
				me.d = 1367130551;
				if (seed === Math.floor(seed)) {
					me.a = seed / 4294967296 | 0;
					me.b = seed | 0;
				} else strseed += seed;
				for (var k = 0; k < strseed.length + 20; k++) {
					me.b ^= strseed.charCodeAt(k) | 0;
					me.next();
				}
			}
			function copy(f, t) {
				t.a = f.a;
				t.b = f.b;
				t.c = f.c;
				t.d = f.d;
				return t;
			}
			function impl(seed, opts) {
				var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
					return (xg.next() >>> 0) / 4294967296;
				};
				prng.double = function() {
					do
						var result = ((xg.next() >>> 11) + (xg.next() >>> 0) / 4294967296) / (1 << 21);
					while (result === 0);
					return result;
				};
				prng.int32 = xg.next;
				prng.quick = prng;
				if (state) {
					if (typeof state == "object") copy(state, xg);
					prng.state = function() {
						return copy(xg, {});
					};
				}
				return prng;
			}
			if (module$1 && module$1.exports) module$1.exports = impl;
			else if (define && define.amd) define(function() {
				return impl;
			});
			else this.tychei = impl;
		})(exports, typeof module == "object" && module, typeof define == "function" && define);
	}));
	//#endregion
	//#region __vite-browser-external
	var require___vite_browser_external = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {};
	}));
	//#endregion
	//#region node_modules/seedrandom/seedrandom.js
	var require_seedrandom$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function(global, pool, math) {
			var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
			function seedrandom(seed, options, callback) {
				var key = [];
				options = options == true ? { entropy: true } : options || {};
				var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key);
				var arc4 = new ARC4(key);
				var prng = function() {
					var n = arc4.g(chunks), d = startdenom, x = 0;
					while (n < significance) {
						n = (n + x) * width;
						d *= width;
						x = arc4.g(1);
					}
					while (n >= overflow) {
						n /= 2;
						d /= 2;
						x >>>= 1;
					}
					return (n + x) / d;
				};
				prng.int32 = function() {
					return arc4.g(4) | 0;
				};
				prng.quick = function() {
					return arc4.g(4) / 4294967296;
				};
				prng.double = prng;
				mixkey(tostring(arc4.S), pool);
				return (options.pass || callback || function(prng, seed, is_math_call, state) {
					if (state) {
						if (state.S) copy(state, arc4);
						prng.state = function() {
							return copy(arc4, {});
						};
					}
					if (is_math_call) {
						math[rngname] = prng;
						return seed;
					} else return prng;
				})(prng, shortseed, "global" in options ? options.global : this == math, options.state);
			}
			function ARC4(key) {
				var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
				if (!keylen) key = [keylen++];
				while (i < width) s[i] = i++;
				for (i = 0; i < width; i++) {
					s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
					s[j] = t;
				}
				(me.g = function(count) {
					var t, r = 0, i = me.i, j = me.j, s = me.S;
					while (count--) {
						t = s[i = mask & i + 1];
						r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
					}
					me.i = i;
					me.j = j;
					return r;
				})(width);
			}
			function copy(f, t) {
				t.i = f.i;
				t.j = f.j;
				t.S = f.S.slice();
				return t;
			}
			function flatten(obj, depth) {
				var result = [], typ = typeof obj, prop;
				if (depth && typ == "object") for (prop in obj) try {
					result.push(flatten(obj[prop], depth - 1));
				} catch (e) {}
				return result.length ? result : typ == "string" ? obj : obj + "\0";
			}
			function mixkey(seed, key) {
				var stringseed = seed + "", smear, j = 0;
				while (j < stringseed.length) key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
				return tostring(key);
			}
			function autoseed() {
				try {
					var out;
					if (nodecrypto && (out = nodecrypto.randomBytes)) out = out(width);
					else {
						out = new Uint8Array(width);
						(global.crypto || global.msCrypto).getRandomValues(out);
					}
					return tostring(out);
				} catch (e) {
					var browser = global.navigator, plugins = browser && browser.plugins;
					return [
						+/* @__PURE__ */ new Date(),
						global,
						plugins,
						global.screen,
						tostring(pool)
					];
				}
			}
			function tostring(a) {
				return String.fromCharCode.apply(0, a);
			}
			mixkey(math.random(), pool);
			if (typeof module == "object" && module.exports) {
				module.exports = seedrandom;
				try {
					nodecrypto = require___vite_browser_external();
				} catch (ex) {}
			} else if (typeof define == "function" && define.amd) define(function() {
				return seedrandom;
			});
			else math["seed" + rngname] = seedrandom;
		})(typeof self !== "undefined" ? self : exports, [], Math);
	}));
	//#endregion
	//#region node_modules/seedrandom/index.js
	var require_seedrandom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var alea = require_alea();
		var xor128 = require_xor128();
		var xorwow = require_xorwow();
		var xorshift7 = require_xorshift7();
		var xor4096 = require_xor4096();
		var tychei = require_tychei();
		var sr = require_seedrandom$1();
		sr.alea = alea;
		sr.xor128 = xor128;
		sr.xorwow = xorwow;
		sr.xorshift7 = xorshift7;
		sr.xor4096 = xor4096;
		sr.tychei = tychei;
		module.exports = sr;
	}));
	//#endregion
	//#region src/style/index.js
	var import_seedrandom = /* @__PURE__ */ __toESM(require_seedrandom(), 1);
	var Style = class {
		constructor(context) {
			this.context = context;
			this.colors = [
				"#e15241",
				"#d63964",
				"#9036aa",
				"#6140b0",
				"#4253af",
				"#4896ec",
				"#4aa7ee",
				"#53b9d1",
				"#429488",
				"#67ac5b",
				"#97c05c",
				"#d0db59",
				"#fceb60",
				"#f6c244",
				"#f19c38",
				"#ec6237"
			];
			this.texture = new Texture(context, paint_default);
			this.reset();
		}
		reset() {
			let random = (0, import_seedrandom.default)(window._kidjs_.seed);
			this.colorIndex = Math.floor(random() * this.colors.length);
		}
		nextColor() {
			this.colorIndex = (this.colorIndex + 1) % this.colors.length;
			return this.colors[this.colorIndex];
		}
		fill(context, color) {
			context.fillStyle = color;
			context.fill();
			context.fillStyle = this.texture.pattern;
			context.globalAlpha = this.context.globalAlpha * this.texture.opacity;
			context.globalCompositeOperation = "overlay";
			context.fill();
			context.globalAlpha = 1;
			context.globalCompositeOperation = "source-over";
		}
		stroke(context, color, width) {
			if (!color) color = "transparent";
			context.strokeStyle = color;
			context.lineWidth = width;
			context.stroke();
		}
	};
	//#endregion
	//#region src/text/index.js
	var cursorX = 5;
	var cursorY = 5;
	var lineHeight = 1.1;
	var Text = class extends Actor {
		constructor(x, y, text, live) {
			super(x, y);
			this._text = text ? text : "";
			this.live = live;
			this.fill = window.fontColor;
			this.themeColor = false;
			this._font = window.font;
			this._fontSize = window.fontSize;
			this._fontWeight = window.fontWeight;
			this._textAlign = window.textAlign;
			this._textBaseline = window.textBaseline;
			this._ghost = true;
			this._collides = false;
			this._boundingPolygon = [];
			this.updateMetrics();
		}
		set text(value) {
			this._text = value;
			this.updateMetrics();
			this.updateBody();
		}
		get text() {
			return this._text;
		}
		get color() {
			return this.fill;
		}
		set color(value) {
			this.fill = value;
		}
		set font(value) {
			this._font = value;
			this.updateMetrics();
			this.updateBody();
		}
		get font() {
			return this._font;
		}
		set fontSize(value) {
			this._fontSize = value;
			this.updateMetrics();
			this.updateBody();
		}
		get fontSize() {
			return this._fontSize;
		}
		set fontWeight(value) {
			this._fontWeight = value;
			this.updateMetrics();
			this.updateBody();
		}
		get fontWeight() {
			return this._fontWeight;
		}
		set textAlign(value) {
			this._textAlign = value;
			this.updateMetrics();
			this.updateBody();
		}
		get textAlign() {
			return this._textAlign;
		}
		set textBaseline(value) {
			this._textBaseline = value;
			this.updateMetrics();
			this.updateBody();
		}
		get textBaseline() {
			return this._textBaseline;
		}
		/**
		* Update text metrics.
		*/
		updateMetrics() {
			window.stage.context.textBaseline = this.textBaseline;
			window.stage.context.font = this.fontWeight + " " + parseFontSize(this.fontSize) + " " + this.font;
			this._textMetrics = window.stage.context.measureText(this.text);
			this._width = this._textMetrics.width;
			this._height = this._textMetrics.actualBoundingBoxAscent + this._textMetrics.actualBoundingBoxDescent;
		}
		/**
		* Update physics body.
		*/
		updateBody() {
			this.updateBoundingPolygon();
			if (this.body && this._boundingPolygon.length > 0) import_matter.default.Body.setVertices(this.body, this._boundingPolygon);
		}
		/**
		* Create bounding polygon around text.
		*/
		updateBoundingPolygon() {
			this._boundingPolygon = [];
			let x;
			switch (this.textAlign) {
				case "center":
					x = -(this._width / 2);
					break;
				case "right":
					x = -this._width;
					break;
				default: x = 0;
			}
			for (let i = 0; i < this.text.length; i = i + 1) {
				let metrics = window.stage.context.measureText(this.text[i]);
				this._boundingPolygon.push(new Vector(x, -metrics.actualBoundingBoxAscent));
				x = x + metrics.width;
				this._boundingPolygon.push(new Vector(x, -metrics.actualBoundingBoxAscent));
			}
			for (let i = this.text.length - 1; i >= 0; i = i - 1) {
				let metrics = window.stage.context.measureText(this.text[i]);
				this._boundingPolygon.push(new Vector(x, metrics.actualBoundingBoxDescent));
				x = x - metrics.width;
				this._boundingPolygon.push(new Vector(x, metrics.actualBoundingBoxDescent));
			}
		}
		init() {
			this.updateBoundingPolygon();
			if (this._boundingPolygon.length > 0) this.body = import_matter.default.Bodies.fromVertices(this.position.x, this.position.y, this._boundingPolygon, {
				friction: window.friction,
				frictionAir: 0,
				isStatic: true,
				isSensor: this._ghost
			});
		}
		render(context) {
			if (!window._kidjs_.defaultStyle) window._kidjs_.defaultStyle = new Style(context);
			if (!this.style) this.style = window._kidjs_.defaultStyle;
			if (this.fill == "random") {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				this.fill = `rgb(${r}, ${g}, ${b})`;
			}
			if (this.fill == "theme" || this.fill == "default") {
				if (!this.themeColor) this.themeColor = this.style.nextColor();
				this.fill = this.themeColor;
			}
			context.fillStyle = this.fill;
			context.font = this.fontWeight + " " + parseFontSize(this.fontSize) + " " + this.font;
			context.textAlign = this.textAlign;
			context.textBaseline = this.textBaseline;
			const output = this.live ? window._kidjs_.eval(this.text) : this.text;
			context.save();
			context.translate(this.x, this.y);
			context.rotate(degreesToRadians(this.angle));
			context.translate(-this.x, -this.y);
			context.fillText(output, this.x, this.y);
			context.restore();
			if (window.debug && this._boundingPolygon.length > 0) {
				let v = this._boundingPolygon[0].rotate(this.angle);
				context.beginPath();
				context.moveTo(this.x + v.x, this.y + v.y);
				for (let point of this._boundingPolygon) {
					v = point.rotate(this.angle);
					context.lineTo(this.x + v.x, this.y + v.y);
				}
				context.stroke();
			}
		}
	};
	function parseFontSize(value) {
		if (typeof value === "number") return value + "px";
		var match = /(\d+)(px)/i.exec(value);
		if (!match) return "40px";
		if (match[2] == "px") return parseFloat(match[1]) + "px";
	}
	function display(x, y, text) {
		const actor = new Text(parseLength(x, "x"), parseLength(y, "y"), String(text), true);
		actor.init();
		window.stage.addChild(actor);
		return actor;
	}
	function write(x, y, text) {
		if (typeof y == "undefined" && typeof text == "undefined") return _write(x);
		else {
			const actor = new Text(parseLength(x, "x"), parseLength(y, "y"), String(text), false);
			actor.init();
			window.stage.addChild(actor);
			return actor;
		}
	}
	function writeln(text) {
		return _write(text, true);
	}
	function resetCursor() {
		cursorX = 5;
		cursorY = 5;
	}
	function _write(text, linebreak) {
		const actor = new Text(cursorX, cursorY, String(text), false);
		actor.textAlign = "left";
		actor.textBaseline = "top";
		actor.init();
		window.stage.addChild(actor);
		if (linebreak) {
			cursorX = 5;
			cursorY = cursorY + parseInt(parseFontSize(actor.fontSize)) * lineHeight;
		} else cursorX = cursorX + actor._width;
		return actor;
	}
	//#endregion
	//#region src/stage/group.js
	var counter = 0;
	var Group = class Group extends Actor {
		/**
		* Create a new group of actors.
		*
		* @constructor
		*/
		constructor() {
			super(0, 0);
			counter = counter + 1;
			this.id = counter;
			this.children = [];
			this.opacity = 1;
		}
		/**
		* Initialize physics body.
		*/
		init() {
			this.updateBody();
		}
		/**
		* Update physics body.
		*/
		updateBody() {
			let bodies = [];
			for (let i = 0; i < this.children.length; i = i + 1) if (this.children[i].body) {
				this.children[i].anchored = false;
				bodies.push(this.children[i].body);
			}
			this.body = import_matter.default.Body.create({
				friction: window.friction,
				frictionStatic: window.friction,
				frictionAir: 0,
				isStatic: true,
				parts: bodies
			});
			this.position.x = this.body.position.x;
			this.position.y = this.body.position.y;
		}
		/**
		* Render group.
		*
		* @param {CanvasRenderingContext2D} context - Context to render on.
		*/
		render(context) {
			if (window.debug) {
				context.beginPath();
				context.rect(this.bounds.min.x, this.bounds.min.y, this.bounds.max.x - this.bounds.min.x, this.bounds.max.y - this.bounds.min.y);
				context.strokeStyle = "red";
				context.lineWidth = .5;
				context.stroke();
				context.beginPath();
				context.moveTo(this.body.vertices[0].x, this.body.vertices[0].y);
				for (let i = 1; i < this.body.vertices.length; i = i + 1) context.lineTo(this.body.vertices[i].x, this.body.vertices[i].y);
				context.closePath();
				context.strokeStyle = "orange";
				context.stroke();
			}
			let scale = context.canvas.width / window.width;
			let tempCanvas = document.createElement("canvas");
			tempCanvas.width = context.canvas.width;
			tempCanvas.height = context.canvas.height;
			let tempContext = tempCanvas.getContext("2d");
			tempContext.scale(scale, scale);
			for (let i = 0; i < this.children.length; i = i + 1) this.children[i].render(tempContext);
			context.globalAlpha = this.opacity;
			context.save();
			context.resetTransform();
			context.drawImage(tempCanvas, 0, 0);
			context.restore();
			context.globalAlpha = 1;
		}
		/**
		* Explode group.
		*/
		explode() {
			if (this.exploded) return;
			this.exploded = true;
			window.stage.removeChild(this);
			for (let i = 0; i < this.children.length; i = i + 1) {
				window.stage.addChild(this.children[i]);
				if (typeof this.children[i].explode == "function") this.children[i].explode();
			}
		}
		/**
		* Add child to group.
		*/
		addChild(actor) {
			actor.parent = this;
			this.children.push(actor);
			window.stage.removeChild(actor);
		}
		/**
		* Alias for add child.
		*/
		add(actor) {
			this.addChild(actor);
		}
		/**
		* Remove child from group.
		*/
		removeChild(actor) {
			let index = this.children.indexOf(actor);
			if (index > -1) {
				actor.parent = null;
				this.children.splice(index, 1);
				this.updateBody();
				window.stage.addChild(actor);
			}
		}
		/**
		* Remove group.
		*/
		remove(actor = false) {
			if (actor) return this.removeChild(actor);
			window.stage.removeChild(this);
			this.children = [];
			this.updateBody();
		}
		/**
		* Clone group.
		*
		* @param {int} x - Optional x coordinate
		* @param {int} y - Optional y coordinate
		*/
		clone(x = false, y = false) {
			let width = this.bounds.max.x - this.bounds.min.x;
			let group = new Group();
			for (let i = 0; i < this.children.length; i = i + 1) {
				let copy = this.children[i].copy();
				copy.init();
				copy.assign(this.children[i]);
				group.children.push(copy);
			}
			group.init();
			if (x !== false && y !== false) {
				group.x = group.x - this.x + x;
				group.y = group.y - this.y + y;
			} else {
				group.x = this.x + width + 5;
				group.y = this.y;
			}
			window.stage.addChild(group);
			return group;
		}
	};
	function group(...actors) {
		let group = new Group();
		group.children = actors;
		for (let i = 0; i < actors.length; i = i + 1) {
			actors[i].parent = group;
			window.stage.removeChild(actors[i]);
		}
		group.init();
		window.stage.addChild(group);
		return group;
	}
	//#endregion
	//#region src/core/permissions.js
	var permissionsRequired = [];
	function requirePermission(permission) {
		if (permission == "deviceorientation" && typeof DeviceOrientationEvent.requestPermission != "function") return;
		permissionsRequired.push(permission);
	}
	function getPermissions() {
		if (permissionsRequired.length > 0) return new Promise((resolve, reject) => {
			let clickToStart = document.createElement("div");
			clickToStart.style.display = "flex";
			clickToStart.style.flexDirection = "row";
			clickToStart.style.alignItems = "center";
			clickToStart.style.justifyContent = "center";
			clickToStart.style.position = "fixed";
			clickToStart.style.top = "0px";
			clickToStart.style.left = "0px";
			clickToStart.style.width = "100%";
			clickToStart.style.height = "100%";
			clickToStart.style.zIndex = 100;
			clickToStart.style.cursor = "pointer";
			let label = document.createElement("div");
			label.innerHTML = "ontouchstart" in window ? "Tap to start" : "Click to start";
			label.style.backgroundColor = "#000";
			label.style.borderRadius = "100px";
			label.style.color = "#fff";
			label.style.fontFamily = "\"Public Sans\", Helvetica, sans-serif";
			label.style.fontSize = "24px";
			label.style.fontWeight = "bold";
			label.style.paddingLeft = "25px";
			label.style.paddingRight = "25px";
			label.style.paddingTop = "15px";
			label.style.paddingBottom = "15px";
			clickToStart.appendChild(label);
			clickToStart.addEventListener("click", async () => {
				for (let i = 0; i < permissionsRequired.length; i = i + 1) if (permissionsRequired[i] == "deviceorientation") {
					if (window._kidjs_.settings.getDeviceOrientationFromParent) window.parent.postMessage({ event: "request-deviceorientation-permission" }, "*");
					else await DeviceOrientationEvent.requestPermission();
				}
				document.body.removeChild(clickToStart);
				resolve();
			});
			document.body.appendChild(clickToStart);
		});
	}
	//#endregion
	//#region src/debug/index.js
	function log(message) {
		if (window.debug) console.log(message);
	}
	//#endregion
	//#region src/input/prompt.js
	async function prompt(text) {
		closeAllPrompts();
		return new Promise(function(resolve, reject) {
			let el = document.createElement("div");
			el.className = "kidjs-prompt";
			el.style.background = "#fff";
			el.style.borderRadius = "6px";
			el.style.boxShadow = "0 0 8px rgba(0, 0, 0, 0.2)";
			el.style.boxSizing = "border-box";
			el.style.padding = "20px";
			el.style.position = "fixed";
			el.style.bottom = "40px";
			el.style.left = "50%";
			el.style.right = "20px";
			el.style.transform = "translateX(-50%)";
			el.style.width = "calc(100% - 40px)";
			el.style.maxWidth = "600px";
			if (text) {
				let label = document.createElement("label");
				label.style.display = "block";
				label.style.fontFamily = "sans-serif";
				label.style.fontSize = "16px";
				label.style.marginBottom = "10px";
				label.innerText = text;
				el.appendChild(label);
			}
			let group = document.createElement("div");
			group.style.display = "flex";
			let input = document.createElement("input");
			input.style.border = "1px solid #efefef";
			input.style.borderRadius = "7px 0 0 7px";
			input.style.fontFamily = "sans-serif";
			input.style.fontSize = "16px";
			input.style.flexGrow = 1;
			input.style.outline = "none";
			input.style.paddingLeft = "10px";
			input.style.paddingRight = "10px";
			let button = document.createElement("button");
			button.style.background = "#000";
			button.style.border = "1px solid #000";
			button.style.borderRadius = "0 7px 7px 0";
			button.style.color = "#fff";
			button.style.cursor = "pointer";
			button.style.outline = "none";
			button.style.paddingLeft = "20px";
			button.style.paddingRight = "20px";
			button.style.height = "40px";
			button.innerText = "OK";
			group.appendChild(input);
			group.appendChild(button);
			el.appendChild(group);
			document.body.appendChild(el);
			input.focus();
			el.addEventListener("mousedown", function(e) {
				e.stopPropagation();
			});
			el.addEventListener("mouseup", function(e) {
				e.stopPropagation();
			});
			el.addEventListener("touchstart", function(e) {
				e.stopPropagation();
			});
			el.addEventListener("touchend", function(e) {
				e.stopPropagation();
			});
			button.addEventListener("click", function() {
				document.body.removeChild(el);
				resolve(input.value);
			});
			el.addEventListener("keyup", function(e) {
				if (e.key == "Enter") {
					document.body.removeChild(el);
					resolve(input.value);
				}
				if (e.key == "Escape") {
					document.body.removeChild(el);
					reject();
				}
			});
		});
	}
	function closeAllPrompts() {
		let els = document.querySelectorAll(".kidjs-prompt");
		for (let i = 0; i < els.length; i = i + 1) document.body.removeChild(els[i]);
	}
	//#endregion
	//#region src/core/error.js
	var KidjsError$1 = class extends Error {
		constructor(message, type, line = 0, column = 0) {
			super(message);
			this.name = "Kidjs";
			window.dispatchEvent(new CustomEvent("KID.error", { detail: {
				message,
				type,
				line,
				column
			} }));
		}
	};
	//#endregion
	//#region src/core/index.js
	var triggers = [];
	var parentSetTimeout;
	var timeouts = [];
	var parentSetInterval;
	var intervals = [];
	var urlFilter;
	var scripts = document.getElementsByTagName("script");
	var scriptSrc = scripts[scripts.length - 1].src;
	var scriptPath = scriptSrc.substring(0, scriptSrc.lastIndexOf("/"));
	function init() {
		window._kidjs_ = {
			settings: {
				backgroundColor: null,
				slowMotion: false,
				slowMotionDelay: 1,
				grid: false,
				pixelSize: 1,
				orientation: "auto"
			},
			scriptPath,
			stats: {
				lastFrame: Date.now(),
				fps: 0
			},
			setGlobals: function() {
				window.acos = acos;
				window.asin = asin;
				window.atan = atan;
				window.beep = beep;
				window.circle = circle;
				window.cos = cos;
				window.curve = curve;
				window.display = display;
				window.frequency = frequency;
				window.heptagon = heptagon;
				window.hexagon = hexagon;
				window.image = image;
				window.line = line;
				window.group = group;
				window.note = note;
				window.octagon = octagon;
				window.on = on;
				window.oval = oval;
				window.path = path;
				window.pentagon = pentagon;
				window.pie = pie;
				window.polygon = polygon;
				window.prompt = prompt;
				window.random = random;
				window.record = record;
				window.rect = rect$1;
				window.rectangle = rect$1;
				window.semicircle = semicircle;
				window.sin = sin;
				window.song = song;
				window.sound = sound;
				window.speak = speak;
				window.square = square;
				window.star = star;
				window.tada = tada;
				window.tan = tan;
				window.triangle = triangle;
				window.wait = wait;
				window.write = write;
				window.writeln = writeln;
				if (window._kidjs_.settings.sockets) {
					window.join = join;
					window.send = send;
				}
				for (let i = 0; i < window._kidjs_.hooks.setGlobals.length; i = i + 1) window._kidjs_.hooks.setGlobals[0]();
			},
			onframe: function() {
				window.dispatchEvent(new Event("animationframe"));
				for (let i = 0; i < triggers.length; i++) try {
					if (window._kidjs_.eval(triggers[i].condition)) window._kidjs_.eval(triggers[i].code);
				} catch (ex) {}
			},
			step: async function(line, column, info) {
				this.setGlobals();
				if (info.callee && ["alert", "prompt"].includes(info.callee)) window._kidjs_.stats.lastFrame = Date.now();
				let lapsed = Date.now() - window._kidjs_.stats.lastFrame;
				if (!document.hidden && lapsed > 1e3) {
					stop();
					throw new KidjsError$1("Freeze detected");
				}
				window.dispatchEvent(new CustomEvent("KID.step", { detail: {
					line,
					column
				} }));
				if (window._kidjs_.settings.slowMotion) await wait(window._kidjs_.settings.slowMotionDelay);
			},
			end: function() {
				window.dispatchEvent(new CustomEvent("KID.end"));
			},
			error: function(e, runtime) {
				let lineNumber = -1;
				let match = e.stack.match(/(\d+):(\d+)/);
				let type = "error";
				if (match) {
					if (runtime) {
						type = "runtime";
						lineNumber = parseInt(window._kidjs_.sourceMap[match[1]]) + 1;
					} else {
						if (e.message.includes("SyntaxError")) type = "syntax";
						lineNumber = parseInt(match[1]);
					}
				}
				console.error("Error: " + e.message + " at line " + lineNumber);
				console.error(e.stack);
				new KidjsError$1(e.message, type, lineNumber);
			},
			libraries: [],
			import: async function(library) {
				return new Promise(function(resolve, reject) {
					if (["hand-tracker", "neural-network"].includes(library) && !window._kidjs_.libraries.includes(library)) {
						let scriptEl = document.createElement("script");
						scriptEl.src = scriptPath + "/" + library + ".js";
						scriptEl.onload = resolve;
						document.body.appendChild(scriptEl);
						window._kidjs_.libraries.push(library);
					} else resolve();
				});
			},
			hooks: { setGlobals: [] },
			seed: Date.now(),
			sourceMap: []
		};
		parentSetTimeout = window.setTimeout;
		window.setTimeout = function(callback, duration) {
			let timeout = parentSetTimeout(() => {
				window._kidjs_.stats.lastFrame = Date.now();
				callback();
			}, duration);
			timeouts.push(timeout);
			return timeout;
		};
		parentSetInterval = window.setInterval;
		window.setInterval = function(callback, duration) {
			let interval = parentSetInterval(() => {
				window._kidjs_.stats.lastFrame = Date.now();
				callback();
			}, duration);
			intervals.push(interval);
			return interval;
		};
		initSockets();
		document.addEventListener("visibilitychange", function() {
			window._kidjs_.stats.lastFrame = Date.now();
		});
		window._kidjs_.setGlobals();
	}
	async function compile(code) {
		code = replacePercentUnits(code);
		code = insertLineMarkers(code);
		let comments = [];
		let ast;
		try {
			ast = parse(code, {
				locations: true,
				onComment: comments,
				sourceType: "module",
				ecmaVersion: 2020
			});
		} catch (e) {
			window._kidjs_.error(e);
			return "";
		}
		attachComments(ast, comments);
		let convertedFunctions = [];
		let libraries = [];
		full(ast, function(node) {
			checkForRequiredPermissions(node);
			if (node.body) for (let i = node.body.length - 1; i >= 0; i = i - 1) {
				if (node.body[i].type == "ImportDeclaration") {
					libraries.push(node.body[i].source.value);
					node.body.splice(i, 1);
					continue;
				}
				let target = isNodeMethod("on", node.body[i]);
				if (target) {
					if (["AssignmentExpression", "CallExpression"].includes(node.body[i].expression.arguments[1].type)) node.body[i].expression.arguments[1] = createInlineFunction(node.body[i].expression.arguments[1]);
					if (node.body[i].expression.arguments[0].type == "BinaryExpression") {
						if (node.body[i].expression.arguments[1].type == "Identifier") triggers.push({
							"condition": generate(node.body[i].expression.arguments[0]),
							"code": node.body[i].expression.arguments[1].name + "();",
							"target": target
						});
						if (node.body[i].expression.arguments[1].type == "FunctionExpression") triggers.push({
							"condition": generate(node.body[i].expression.arguments[0]),
							"code": "(" + generate(node.body[i].expression.arguments[1]) + ")();",
							"target": target
						});
					}
				}
				if (node.body[i].type == "ExpressionStatement" && typeof node.body[i].expression.callee !== "undefined" && node.body[i].expression.callee.name == "display" && node.body[i].expression.arguments.length == 3 && node.body[i].expression.arguments[2].type != "Literal") {
					let expression = generate(node.body[i].expression.arguments[2]);
					node.body[i].expression.arguments[2] = {
						type: "Literal",
						value: expression
					};
					node.body[i].expression.arguments[3] = {
						type: "Literal",
						value: true
					};
				}
				if (node.body[i].type == "VariableDeclaration" && typeof node.body[i].declarations != "undefined" && node.body[i].declarations.length > 0 && node.body[i].declarations[0].init && typeof node.body[i].declarations[0].init.callee !== "undefined" && node.body[i].declarations[0].init.callee.name == "display" && node.body[i].declarations[0].init.arguments.length == 3 && node.body[i].declarations[0].init.arguments[2].type != "Literal") {
					let expression = generate(node.body[i].declarations[0].init.arguments[2]);
					node.body[i].declarations[0].init.arguments[2] = {
						type: "Literal",
						value: expression
					};
					node.body[i].declarations[0].init.arguments[3] = {
						type: "Literal",
						value: true
					};
				}
				if (node.body[i].type == "ExpressionStatement" && typeof node.body[i].expression.right !== "undefined" && typeof node.body[i].expression.right.callee !== "undefined" && node.body[i].expression.right.callee.name == "display" && node.body[i].expression.right.arguments.length == 3 && node.body[i].expression.right.arguments[2].type != "Literal") {
					let expression = generate(node.body[i].expression.right.arguments[2]);
					node.body[i].expression.right.arguments[2] = {
						type: "Literal",
						value: expression
					};
					node.body[i].expression.right.arguments[3] = {
						type: "Literal",
						value: true
					};
				}
				if (node.body[i].type == "FunctionDeclaration") {
					if (node.body[i].async == false) {
						node.body[i].async = true;
						if (node.body[i].id && node.body[i].id.name) convertedFunctions.push(node.body[i].id.name);
					}
				}
				if (node.body[i].type == "ExpressionStatement" && node.body[i].expression.type == "CallExpression" && node.body[i].expression.callee.type == "Identifier" && node.body[i].expression.callee.name == "wait") node.body[i].expression = {
					type: "AwaitExpression",
					argument: Object.assign({}, node.body[i].expression)
				};
				if (node.body[i].type == "ExpressionStatement" && node.body[i].expression.type == "CallExpression" && node.body[i].expression.callee.type == "MemberExpression" && node.body[i].expression.callee.property.name == "wait") node.body[i].expression = {
					type: "AwaitExpression",
					argument: Object.assign({}, node.body[i].expression)
				};
				if (node.body[i].type == "VariableDeclaration" && node.body[i].declarations.length > 0 && node.body[i].declarations[0].init && node.body[i].declarations[0].init.type == "CallExpression" && node.body[i].declarations[0].init.callee.name == "prompt") node.body[i].declarations[0].init = {
					type: "AwaitExpression",
					argument: Object.assign({}, node.body[i].declarations[0].init)
				};
				if (node.body[i].type == "ExpressionStatement" && node.body[i].expression.type == "CallExpression" && node.body[i].expression.callee.name == "prompt") node.body[i].expression = {
					type: "AwaitExpression",
					argument: Object.assign({}, node.body[i].expression)
				};
			}
		});
		ancestor(ast, { CallExpression: function(node, ancestors) {
			if (convertedFunctions.includes(node.callee.name)) {
				let parent = ancestors[ancestors.length - 2];
				if (parent.type == "CallExpression" && parent.arguments) {
					for (let i = 0; i < parent.arguments.length; i = i + 1) if (parent.arguments[i] == node) parent.arguments[i] = {
						type: "AwaitExpression",
						argument: Object.assign({}, node)
					};
				}
				if (parent.type == "ExpressionStatement" && parent.expression == node) parent.expression = {
					type: "AwaitExpression",
					argument: Object.assign({}, node)
				};
				if (parent.type == "VariableDeclarator" && parent.init == node) parent.init = {
					type: "AwaitExpression",
					argument: Object.assign({}, node)
				};
				if (parent.type == "IfStatement" && parent.test == node) parent.test = {
					type: "AwaitExpression",
					argument: Object.assign({}, node)
				};
			}
		} });
		insertStepStatements(ast);
		let processed = generate(ast, { comments: true });
		window._kidjs_.sourceMap = generateSourceMap(processed, 15);
		for (let i = 0; i < libraries.length; i = i + 1) await window._kidjs_.import(libraries[i]);
		return `
    (async function() {
      try {
        window._kidjs_.eval = function(key) {
          try {
            return eval(key);
          } catch {
            // Don't die on me
          }
        };
        window._kidjs_.get = function(key) {
          if (eval('typeof ' + key) !== 'undefined') {
            return eval(key);
          }
        };
        ${processed}
      } catch(e) {
        window._kidjs_.error(e, true);
      }
      window._kidjs_.end();
    })();
  `;
	}
	/**
	* Determine if AST node represents a call to on() method.
	*
	* @param {String} name - Method name
	* @param {Object} node - AST node
	* @return {mixed} Object associated with "on" method, or false
	*/
	function isNodeMethod(name, node) {
		if (node.type == "ExpressionStatement" && node.expression.callee) {
			if (node.expression.callee.type == "Identifier" && node.expression.callee.name == name) return window;
			if (node.expression.callee.type == "MemberExpression" && node.expression.callee.property.name == name) return node.expression.callee.object;
		}
		return false;
	}
	/**
	* Determine if code would require special permissions (e.g. deviceorientation)
	*
	* @param {String} name - Method name
	* @param {Object} node - AST node
	* @return {mixed} Object associated with "on" method, or false
	*/
	function checkForRequiredPermissions(node) {
		let restrictedEvents = [
			"deviceorientation",
			"tiltleft",
			"tiltright",
			"tiltup",
			"tiltdown"
		];
		if (node.type == "Identifier" && ["tiltX", "tiltY"].includes(node.name)) requirePermission("deviceorientation");
		if (node.type == "ExpressionStatement" && node.expression.callee && node.expression.arguments) {
			if (node.expression.callee.type == "Identifier" && ["on", "addEventListener"].includes(node.expression.callee.name)) {
				if (node.expression.arguments[0].type == "Literal" && restrictedEvents.includes(node.expression.arguments[0].value.toLowerCase())) requirePermission("deviceorientation");
			}
		}
	}
	/**
	* Create AST node containing inline function.
	*
	* @param {Object} node - AST node containing code of function
	* @return {Object} AST node containing inline function
	*/
	function createInlineFunction(node) {
		return {
			type: "ArrowFunctionExpression",
			body: {
				type: "BlockStatement",
				body: [{
					type: "ExpressionStatement",
					expression: node
				}]
			},
			params: []
		};
	}
	/**
	* Create AST node to call step() method.
	*
	* @param {Object} location - Location in code
	* @return {Object} AST node containing call to step() method
	*/
	function createStepStatement(location, info) {
		return {
			type: "ExpressionStatement",
			expression: {
				type: "AwaitExpression",
				argument: {
					type: "CallExpression",
					callee: {
						type: "MemberExpression",
						object: {
							type: "Identifier",
							name: "window._kidjs_"
						},
						property: {
							type: "Identifier",
							name: "step"
						}
					},
					arguments: [
						{
							type: "Literal",
							value: location.start.line
						},
						{
							type: "Literal",
							value: location.start.column
						},
						{
							type: "Literal",
							value: info
						}
					]
				}
			}
		};
	}
	/**
	* Insert step statements.
	*
	* @param {Object} ast - Expression tree
	*/
	function insertStepStatements(ast) {
		if (ast.body) for (let i = ast.body.length - 1; i >= 0; i = i - 1) {
			if (["ExpressionStatement", "VariableDeclaration"].includes(ast.body[i].type)) {
				let info = {};
				if (ast.body[i].type == "ExpressionStatement" && ast.body[i].expression.callee) info.callee = ast.body[i].expression.callee.name;
				ast.body.splice(i + 1, 0, createStepStatement(ast.body[i].loc, info));
			}
			if ([
				"ForStatement",
				"WhileStatement",
				"DoWhileStatement",
				"FunctionDeclaration"
			].includes(ast.body[i].type)) {
				if (typeof ast.body[i].body != void 0) insertStepStatements(ast.body[i].body);
			}
			if (ast.body[i].type == "IfStatement") {
				if (ast.body[i].consequent) insertStepStatements(ast.body[i].consequent);
				if (ast.body[i].alternate) insertStepStatements(ast.body[i].alternate);
			}
		}
	}
	/**
	* Insert line markers as comments.
	*
	* @param {String} code - Source code
	* @return {String} Source code containling line markers
	*/
	function insertLineMarkers(code) {
		let lines = code.split(/\r?\n/);
		for (let i = 0; i < lines.length; i = i + 1) lines[i] = lines[i] + "//__kidjs__beginline__" + i + "__endline__";
		return lines.join("\n");
	}
	/**
	* Generate source map.
	*
	* @param {String} code - Source code with markers
	* @return {Array} Source map
	*/
	function generateSourceMap(code, offset) {
		let map = [];
		let lines = code.split(/\r?\n/);
		let lineNumber = 0;
		for (let i = 0; i < lines.length; i = i + 1) {
			let test = /__kidjs__beginline__(\d+)__endline__/.exec(lines[i]);
			if (test) lineNumber = test[1];
			map[i + offset] = lineNumber;
		}
		return map;
	}
	function reset() {
		log("Reset");
		window.dispatchEvent(new CustomEvent("KID.reset"));
		triggers = [];
		removeAllEventListeners();
		for (let i = 0; i < timeouts.length; i = i + 1) clearTimeout(timeouts[i]);
		timeouts = [];
		for (let i = 0; i < intervals.length; i = i + 1) clearInterval(intervals[i]);
		intervals = [];
		if (window._kidjs_.defaultStyle) window._kidjs_.defaultStyle.reset();
		closeAllPrompts();
		window.stage.reset();
	}
	async function run(code) {
		log("Running");
		reset();
		window.stage.run();
		log("Compilation started");
		let processed = await compile(code);
		log("Compilation complete");
		await getPermissions();
		window._kidjs_.setGlobals();
		eval(processed);
	}
	function stop() {
		log("Stop");
		window.stage.stop();
		reset();
	}
	async function wait(seconds) {
		await new Promise(function(resolve) {
			setTimeout(resolve, seconds * 1e3);
		});
	}
	/**
	* Modify path to image or sound asset.
	*
	* @param {string} url - Path to asset
	* @return {string} Modified path to asset
	*/
	function assetUrlFilter(url) {
		if (typeof urlFilter == "function") url = urlFilter(url);
		return url;
	}
	/**
	* Set function to modify path to image or sound asset.
	*
	* @param {function} callback - Function to modify path
	*/
	function setAssetUrlFilter(callback) {
		urlFilter = callback;
	}
	//#endregion
	//#region src/stage/index.js
	var WALL_DEPTH = 1e3;
	var Stage = class {
		/**
		* Create a new stage.
		*
		* @constructor
		* @param {int} [width] - Optional stage width. Defaults to browser width.
		* @param {int} [height] - Optional stage height. Defaults to browser height.
		*/
		constructor(width = window.innerWidth, height = window.innerHeight) {
			this.running = false;
			this.frame = 0;
			this.engine = import_matter.default.Engine.create();
			import_matter.default.Events.on(this.engine, "collisionStart", (event) => this.onCollisionStart(event));
			import_matter.default.Resolver._restingThresh = .001;
			this.canvas = document.createElement("canvas");
			this.context = this.canvas.getContext("2d");
			this.canvas.style.display = "block";
			this.canvas.style.position = "fixed";
			this.canvas.style.top = "0px";
			this.canvas.style.left = "0px";
			this.canvas.style.width = "100%";
			this.canvas.style.height = "100%";
			this.canvas.style.objectFit = "contain";
			if (!window._kidjs_.defaultStyle) window._kidjs_.defaultStyle = new Style(this.context);
			this.actors = [];
			this.eventListeners = {};
			log(`Stage created (${width} x ${height})`);
			this.resize(width, height);
		}
		/**
		* Resize the stage.
		* This is often called by a resize event handler.
		*
		* @param {int} [width] - Optional stage width. Defaults to browser width.
		* @param {int} [height] - Optional stage height. Defaults to browser height.
		*/
		resize(width, height) {
			if (!parseInt(width)) width = window.innerWidth;
			if (!parseInt(height)) height = window.innerHeight;
			if (this.width != parseInt(width) || this.height != parseInt(height)) {
				this.width = parseInt(width);
				this.height = parseInt(height);
				log(`Stage resized (${width} x ${height})`);
				if (window._kidjs_.settings.pixelSize > 1) {
					let scale = 1 / window._kidjs_.settings.pixelSize;
					this.canvas.width = Math.floor(this.width * scale);
					this.canvas.height = Math.floor(this.height * scale);
					this.canvas.style.imageRendering = "pixelated";
				} else {
					let scale = window.devicePixelRatio;
					this.canvas.width = Math.floor(this.width * scale);
					this.canvas.height = Math.floor(this.height * scale);
					this.context.scale(scale, scale);
				}
				window.width = this.width;
				window.height = this.height;
				if (this._leftWall) {
					this._leftWall.locked = false;
					this._leftWall.x = -500;
					this._leftWall.y = this.height / 2;
					this._leftWall.height = this.height + WALL_DEPTH * 2;
					this._leftWall.updateBody();
					this._leftWall.locked = true;
					this._rightWall.locked = false;
					this._rightWall.x = this.width + WALL_DEPTH / 2;
					this._rightWall.y = this.height / 2;
					this._rightWall.height = this.height + WALL_DEPTH * 2;
					this._rightWall.updateBody();
					this._rightWall.locked = true;
					this._ceiling.locked = false;
					this._ceiling.x = this.width / 2;
					this._ceiling.y = -500;
					this._ceiling.width = this.width + WALL_DEPTH * 2;
					this._ceiling.updateBody();
					this._ceiling.locked = true;
					this._floor.locked = false;
					this._floor.x = this.width / 2;
					this._floor.y = this.height + WALL_DEPTH / 2;
					this._floor.width = this.width + WALL_DEPTH * 2;
					this._floor.updateBody();
					this._floor.locked = true;
				}
				if (window.grid) window.grid.render();
			}
		}
		/**
		* Add an actor to the stage.
		*
		* @param {Actor} actor - Actor to add to the stage.
		*/
		addChild(actor) {
			this.actors.push(actor);
			if (actor.body) import_matter.default.Composite.add(this.engine.world, actor.body);
		}
		/**
		* Remove actor from stage.
		*
		* @param {Actor} actor - Actor to remove from the stage.
		*/
		removeChild(actor) {
			this.actors = this.actors.filter((item) => {
				return item != actor;
			});
			if (actor.body) import_matter.default.Composite.remove(this.engine.world, actor.body);
			if (actor.constraints) for (const constraint of actor.constraints) import_matter.default.Composite.remove(this.engine.world, constraint);
		}
		/**
		* Find actor from Matter.js body.
		*
		* @param {Matter.Body} body - Matter.js body
		* @return {Actor} Actor if found
		*/
		findChildByBody(body) {
			for (let actor of this.actors) if (actor.body && (actor.body.id == body.id || actor.body.id == body.parent.id)) return actor;
		}
		/**
		* Clear all actors from the stage.
		*/
		clear() {
			log("Stage cleared");
			this.actors = [];
			import_matter.default.Composite.clear(this.engine.world);
			this._leftWall = rect(-500, this.height / 2, WALL_DEPTH, this.height);
			this._rightWall = rect(this.width + WALL_DEPTH / 2, this.height / 2, WALL_DEPTH, this.height);
			this._ceiling = rect(this.width / 2, -500, this.width + WALL_DEPTH * 2, WALL_DEPTH);
			this._floor = rect(this.width / 2, this.height + WALL_DEPTH / 2, this.width + WALL_DEPTH * 2, WALL_DEPTH);
			this._leftWall.invisible = true;
			this._leftWall.locked = true;
			this._leftWall.type = "wall";
			this._rightWall.invisible = true;
			this._rightWall.locked = true;
			this._rightWall.type = "wall";
			this._ceiling.invisible = true;
			this._ceiling.locked = true;
			this._ceiling.type = "wall";
			this._floor.invisible = true;
			this._floor.locked = true;
			this._floor.type = "wall";
			this.resize(window._kidjs_.settings.width, window._kidjs_.settings.height);
			resetCursor();
		}
		/**
		* Clear stage and reset fill and stroke.
		*/
		reset() {
			log("Stage reset");
			if (screen.orientation && screen.orientation.lock) {
				if (["portrait", "landscape"].includes(window._kidjs_.settings.orientation)) screen.orientation.lock(window._kidjs_.settings.orientation).catch(function(error) {
					console.warn(error);
				});
				else screen.orientation.unlock();
			}
			window.fill = "theme";
			window.stroke = false;
			window.lineWidth = 3;
			window.font = window._kidjs_.settings.defaultFont ?? "Arial";
			window.fontColor = "black";
			window.fontSize = window._kidjs_.settings.defaultFontSize ?? "40px";
			window.fontWeight = window._kidjs_.settings.defaultFontWeight ?? "400";
			window.textAlign = "center";
			window.textBaseline = "middle";
			window.easing = "easeInOutElastic";
			window.tempo = 60;
			window.gravity = 1;
			window.ceiling = true;
			window.floor = true;
			window.walls = true;
			window.friction = .1;
			this.previousFriction = .1;
			this.clear();
			this.removeAllEventListeners();
		}
		/**
		* Start rendering
		*/
		run() {
			if (!this.running) {
				this.running = true;
				this.render();
			}
		}
		/**
		* Stop rendering
		*/
		stop() {
			if (this.running) {
				cancelAnimationFrame(this.animation);
				this.running = false;
			}
		}
		/**
		* Render a single frame.
		*/
		render() {
			if (this.running) {
				this.frame++;
				if (window._kidjs_.settings.backgroundColor) {
					this.context.fillStyle = window._kidjs_.settings.backgroundColor;
					this.context.fillRect(0, 0, this.width, this.height);
				} else {
					this.context.fillStyle = "white";
					this.context.fillRect(0, 0, this.width, this.height);
				}
				if (window.friction != this.previousFriction) {
					this.previousFriction = window.friction;
					this._leftWall.friction = window.friction;
					this._rightWall.friction = window.friction;
					this._ceiling.friction = window.friction;
					this._floor.friction = window.friction;
				}
				this._leftWall.locked = false;
				this._leftWall.ghost = !window.walls;
				this._leftWall.collides = window.walls;
				this._leftWall.locked = true;
				this._rightWall.locked = false;
				this._rightWall.ghost = !window.walls;
				this._rightWall.collides = window.walls;
				this._rightWall.locked = true;
				this._ceiling.locked = false;
				this._ceiling.ghost = !window.ceiling;
				this._ceiling.collides = window.ceiling;
				this._ceiling.locked = true;
				this._floor.locked = false;
				this._floor.ghost = !window.floor;
				this._floor.collides = window.floor;
				this._floor.locked = true;
				this.engine.gravity.y = window.gravity;
				import_matter.default.Engine.update(this.engine, 1e3 / 60);
				for (let actor of this.actors) {
					if (actor.body && (actor.body.velocity.x != 0 || actor.body.velocity.y != 0)) actor.dispatchEvent(new CustomEvent("move"));
					actor.update();
					if (!actor.invisible) actor.render(this.context);
				}
				let staticActors = this.actors.filter((actor) => {
					return actor.body && actor.type != "wall" && actor.anchored == true && actor.collides == true;
				});
				for (let i = 0; i < staticActors.length - 1; i = i + 1) for (let j = i + 1; j < staticActors.length; j = j + 1) if (import_matter.default.Collision.collides(staticActors[i].body, staticActors[j].body)) {
					staticActors[i].dispatchEvent(new CustomEvent("collision", { detail: staticActors[j] }));
					staticActors[j].dispatchEvent(new CustomEvent("collision", { detail: staticActors[i] }));
				}
				window._kidjs_.onframe();
				window._kidjs_.stats.lastFrame = Date.now();
				this.dispatchEvent(new CustomEvent("animationframe"));
				this.animation = requestAnimationFrame(() => this.render());
			}
		}
		/**
		* Add event listener to stage.
		*
		* @param {string} [event] - Name of event.
		* @param {function} [handler] - Event handler to execute when event occurs.
		*/
		addEventListener(event, handler) {
			if (event == "doubleclick") event = "dblclick";
			if (event == "frame") event = "animationframe";
			if (this.eventListeners[event] == void 0) this.eventListeners[event] = [];
			this.eventListeners[event].push({ handler });
		}
		/**
		* Remove event listener from stage.
		*
		* @param {string} [event] - Name of event.
		* @param {function} [handler] - Event handler to remove.
		*/
		removeEventListener(event, handler) {
			if (this.eventListeners[event] !== void 0) this.eventListeners[event] = this.eventListeners[event].filter((item) => item.handler !== handler);
		}
		/**
		* Remove all event listeners from stage.
		*/
		removeAllEventListeners() {
			this.eventListeners = {};
		}
		/**
		* Execute event handler.
		*
		* @param {Event} [event] - Event object.
		*/
		dispatchEvent(event, context = window) {
			if (this.eventListeners[event.type] !== void 0) {
				for (let listener of this.eventListeners[event.type]) if (typeof listener.handler == "function") {
					switch (event.constructor.name) {
						case "KeyboardEvent":
							listener.handler.call(context, event.key);
							return;
						case "MouseEvent":
						case "PointerEvent":
							let position = this.toStageCoordinates(event.x, event.y);
							listener.handler.call(context, position.x, position.y);
							return;
					}
					switch (event.type) {
						case "tilt":
							listener.handler.call(context, window.tiltX, window.tiltY);
							return;
						case "message":
							listener.handler.call(context, event.detail.message);
							return;
						default: listener.handler.call(context);
					}
				}
			}
		}
		/**
		* Respond to collision events.
		*
		* @param {Event} [event] - Event object.
		*/
		onCollisionStart(event) {
			for (let pair of event.pairs) {
				let a = this.findChildByBody(pair.bodyA);
				let b = this.findChildByBody(pair.bodyB);
				if (a && b && a.collides && b.collides) {
					a.dispatchEvent(new CustomEvent("collision", { detail: b }));
					b.dispatchEvent(new CustomEvent("collision", { detail: a }));
				}
			}
		}
		/**
		* Translate page coordinates to scene coordinates.
		* 
		* @param {int} [x] - X coordinate
		* @param {int} [y] - Y coordinate
		* @return {object} Translated coordinates
		*/
		toStageCoordinates(x, y) {
			let canvasRect = this.canvas.getBoundingClientRect();
			let ratio = this.width / this.height;
			let w = canvasRect.height * ratio;
			let h = canvasRect.height;
			if (w > canvasRect.width) {
				w = canvasRect.width;
				h = canvasRect.width / ratio;
			}
			let offsetX = (canvasRect.width - w) / 2;
			let offsetY = (canvasRect.height - h) / 2;
			return {
				x: this.width / w * (x - offsetX),
				y: this.height / h * (y - offsetY)
			};
		}
	};
	//#endregion
	//#region src/stage/grid.js
	var Grid = class {
		/**
		* Create a new grid.
		*
		* @constructor
		* @param {int} size - Grid size
		* @param {string} color - Grid line color
		*/
		constructor(color = "#f6f6f6") {
			this.color = color;
			this.canvas = document.createElement("canvas");
			this.context = this.canvas.getContext("2d");
			this.canvas.style.position = "fixed";
			this.canvas.style.top = 0;
			this.canvas.style.left = 0;
			this.canvas.style.width = "100%";
			this.canvas.style.height = "100%";
			this.canvas.style.display = "block";
		}
		/**
		* Render grid.
		*
		* @param {CanvasRenderingContext2D} context - Rendering context
		*/
		render() {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			let size = window._kidjs_.settings.pixelSize;
			if (window._kidjs_.settings.grid && size >= 5) for (let x = 0; x < this.canvas.width; x = x + size) for (let y = 0; y < this.canvas.height; y = y + size) {
				this.context.fillStyle = this.color;
				this.context.fillRect(x + size, y, 1, size);
				this.context.fillRect(x, y + size, size, 1);
			}
		}
	};
	//#endregion
	//#region src/assets/rotate-portrait.svg
	var rotate_portrait_default = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%20129%20127.3'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20192)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23231f20;%20}%20.st1%20{%20fill:%20%23fff;%20stroke:%20%23231f20;%20stroke-linecap:%20round;%20stroke-miterlimit:%2010;%20stroke-width:%205px;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M112.4,66.8c0-24.6-18.5-44.9-42.3-47.9v9s-12.1-7-12.1-7l-12.1-7,12.1-7L70.1,0v9.5c29,3.1,51.7,27.6,51.7,57.4'/%3e%3cpath%20class='st0'%20d='M7.3,85.8v27.1c0,7.9,6.4,14.3,14.3,14.3h67.2c7.9,0,14.3-6.4,14.3-14.3v-27.1c0-7.9-6.4-14.3-14.3-14.3h-31.7v6h31.7c4.6,0,8.3,3.7,8.3,8.3v27.1c0,4.6-3.7,8.3-8.3,8.3H21.6c-2.3,0-4.4-.9-5.9-2.4-.4-.4-.7-.8-1-1.2s-.6-.9-.8-1.4c-.4-1-.7-2.1-.7-3.2v-27.1'/%3e%3ccircle%20class='st0'%20cx='35.2'%20cy='44'%20r='3'/%3e%3cline%20class='st1'%20x1='24.6'%20y1='114.1'%20x2='45.7'%20y2='114.1'/%3e%3cpath%20class='st0'%20d='M48.7,37.4c4.6,0,8.3,3.7,8.3,8.3v67.2c0,4.6-3.7,8.3-8.3,8.3h-27.1c-4.6,0-8.3-3.7-8.3-8.3V45.7c0-4.6,3.7-8.3,8.3-8.3h27.1M48.7,31.4h-27.1c-7.9,0-14.3,6.4-14.3,14.3v67.2c0,7.9,6.4,14.3,14.3,14.3h27.1c7.9,0,14.3-6.4,14.3-14.3V45.7c0-7.9-6.4-14.3-14.3-14.3h0Z'/%3e%3c/svg%3e";
	//#endregion
	//#region src/assets/rotate-landscape.svg
	var rotate_landscape_default = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%20129%20127.3'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20192)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23231f20;%20}%20.st1%20{%20fill:%20%23fff;%20stroke:%20%23231f20;%20stroke-linecap:%20round;%20stroke-miterlimit:%2010;%20stroke-width:%205px;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20d='M62.2,20.8c24.6,0,44.9,18.5,47.9,42.3h-9l7,12.1,7,12.1,7-12.1,7-12.1h-9.5c-3.1-29-27.6-51.7-57.4-51.7'/%3e%3cpath%20class='st0'%20d='M6,112.9v-27.1s0,0,0,0v-40.1c0-4.6,3.7-8.3,8.3-8.3h27.1c4.6,0,8.3,3.7,8.3,8.3v31.7h6v-31.7c0-7.9-6.4-14.3-14.3-14.3H14.3C6.4,31.4,0,37.8,0,45.7v67.2'/%3e%3ccircle%20class='st0'%20cx='83.2'%20cy='99.4'%20r='3'/%3e%3cpath%20class='st0'%20d='M81.5,77.5c4.6,0,8.3,3.7,8.3,8.3v27.1c0,4.6-3.7,8.3-8.3,8.3H14.3c-4.6,0-8.3-3.7-8.3-8.3v-27.1c0-4.6,3.7-8.3,8.3-8.3h67.2M81.5,71.5H14.3C6.4,71.5,0,77.9,0,85.8v27.1C0,120.8,6.4,127.3,14.3,127.3h67.2c7.9,0,14.3-6.4,14.3-14.3v-27.1c0-7.9-6.4-14.3-14.3-14.3h0Z'/%3e%3cline%20class='st1'%20x1='13.2'%20y1='88.8'%20x2='13.2'%20y2='109.9'/%3e%3c/svg%3e";
	//#endregion
	//#region src/assets/rotation-lock.svg
	var rotation_lock_default = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%20129%20127.3'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20192)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20stroke:%20%23000;%20stroke-miterlimit:%2010;%20stroke-width:%209.5px;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st0'%20d='M97.5,107c-9.6,9.6-22.8,15.5-37.5,15.5s-27.9-5.9-37.5-15.5-15.5-22.8-15.5-37.5,5.9-27.9,15.5-37.5,22.8-15.5,37.5-15.5,27.9,5.9,37.5,15.5,15.5,22.8,15.5,37.5'/%3e%3cg%3e%3cpath%20d='M75.8,63.5c0-.4,0-.9,0-1.3v-7.9c0-8.8-7.1-15.9-15.9-15.9s-15.9,7.1-15.9,15.9v7.9c0,.4,0,.9,0,1.3h-4.2v29.3h40v-29.3h-4.2ZM49.6,63.5c0-.4,0-.8,0-1.3v-7.9c0-5.8,4.7-10.4,10.4-10.4s10.4,4.7,10.4,10.4v7.9c0,.4,0,.9,0,1.3h-20.7Z'/%3e%3cpath%20d='M107.9,63.3h-9l7,12.1,7,12.1,7-12.1,7-12.1h-9.5'/%3e%3c/g%3e%3c/svg%3e";
	//#endregion
	//#region src/stage/orientation-overlay.js
	var OrientationOverlay = class {
		/**
		* this.domElement shown when orientation is incorrect.
		*
		* @constructor
		* @param {int} x - Initial x coordinate
		* @param {int} y - Initial y coordinate
		*/
		constructor() {
			this.domElement = document.createElement("div");
			this.domElement.style.position = "fixed";
			this.domElement.style.top = "0px";
			this.domElement.style.left = "0px";
			this.domElement.style.width = "100%";
			this.domElement.style.height = "100%";
			this.domElement.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
			this.domElement.style.backdropFilter = "blur(10px)";
			this.domElement.style.display = "none";
			this.domElement.style.flexDirection = "column";
			this.domElement.style.alignItems = "center";
			this.domElement.style.justifyContent = "center";
			this.domElement.style.zIndex = 1e3;
			let icons = document.createElement("div");
			icons.style.display = "flex";
			icons.style.alignItems = "center";
			icons.style.marginBottom = "15px";
			icons.appendChild(this.stepElement(1));
			this.rotateIcon = document.createElement("img");
			this.rotateIcon.style.width = "100px";
			this.rotateIcon.style.height = "100px";
			this.rotateIcon.style.marginRight = "30px";
			icons.appendChild(this.rotateIcon);
			icons.appendChild(this.stepElement(2));
			let lockIcon = document.createElement("img");
			lockIcon.src = rotation_lock_default;
			lockIcon.style.width = "100px";
			lockIcon.style.height = "100px";
			icons.appendChild(lockIcon);
			this.message = document.createElement("div");
			this.message.style.fontFamily = "\"Public Sans\", Helvetica, sans-serif";
			this.message.style.fontSize = "36px";
			this.message.style.fontWeight = "bold";
			this.domElement.appendChild(icons);
			this.domElement.appendChild(this.message);
			document.body.appendChild(this.domElement);
			screen.orientation.addEventListener("change", this.onOrientationChanged.bind(this));
			this.onOrientationChanged();
		}
		/**
		* Generate step number element.
		* 
		* @param {int} step 
		*/
		stepElement(step) {
			let element = document.createElement("div");
			element.style.display = "flex";
			element.style.alignItems = "center";
			element.style.justifyContent = "center";
			element.style.width = "30px";
			element.style.height = "30px";
			element.style.borderRadius = "30px";
			element.style.backgroundColor = "#000";
			element.style.color = "#fff";
			element.style.fontFamily = "\"Public Sans\", Helvetica, sans-serif";
			element.style.fontSize = "16px";
			element.style.marginRight = "8px";
			element.style.position = "relative";
			element.style.top = "8px";
			element.textContent = step;
			return element;
		}
		/**
		* Show incorrect orientation overlay.
		* 
		* @param {string} orientation - Required orientation
		*/
		show(orientation) {
			this.message.textContent = `This app is designed for ${orientation}`;
			this.rotateIcon.src = orientation == "portrait" ? rotate_portrait_default : rotate_landscape_default;
			this.domElement.style.display = "flex";
		}
		/**
		* Hide incorrect orientation overlay.
		*/
		hide() {
			this.domElement.style.display = "none";
		}
		/**
		* Orientation changed
		*/
		onOrientationChanged() {
			this.hide();
			if (window._kidjs_.settings.orientation == "portrait" && (screen.orientation.type == "landscape" || screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary")) this.show("portrait");
			if (window._kidjs_.settings.orientation == "landscape" && (screen.orientation.type == "portrait" || screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary")) this.show("landscape");
		}
	};
	//#endregion
	//#region src/index.js
	/*!
	* MIT License
	*
	* Copyright (C) 2020-2024 Chris Maissan
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in
	* all copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	* THE SOFTWARE.
	*/
	init();
	window.addEventListener("DOMContentLoaded", function() {
		window.stage = new Stage(window.KID.settings.width, window.KID.settings.height);
		document.body.style.margin = 0;
		document.body.style.padding = 0;
		document.body.appendChild(stage.canvas);
		window.grid = new Grid();
		document.body.appendChild(grid.canvas);
		new OrientationOverlay();
		window.addEventListener("resize", function() {
			window.stage.resize(KID.settings.width, KID.settings.height);
		});
		window.clear = function() {
			window.stage.clear();
		};
		events_default();
		window.dispatchEvent(new Event("KID.ready"));
		let scripts = document.querySelectorAll("script[type=\"kidjs\"]");
		for (let script of scripts) if (script.src) fetch(script.src).then(function(response) {
			return response.text();
		}).then(function(text) {
			run(text);
		});
		else run(script.innerHTML);
	});
	window.KID = {
		run,
		stop,
		settings: window._kidjs_.settings,
		setAssetUrlFilter
	};
	window.debug = false;
	//#endregion
});

//# sourceMappingURL=kid.js.map