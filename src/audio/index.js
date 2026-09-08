let context;

function getContext() {
  if (!context) {
    context = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (context.state === 'suspended') {
    context.resume();
  }
  return context;
}

/**
 * Play a specific frequency for a given duration.
 * 
 * @param {number} frequency - Frequency in Hz
 * @param {number} duration - Duration in seconds
 */
export async function frequency(frequency, duration = 1) {
  let context = getContext();

  return new Promise((resolve) => {
    let start = context.currentTime;
    duration = Math.max(duration, 0.05);

    // Soft attack and release to prevent click
    let attack = Math.min(0.012, duration * 0.15);
    let release = Math.min(0.14, duration * 0.3);
    let peak = 0.2;

    let filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 0.9;
    // Bright at the start (like a hammer hitting a string), then mellow.
    filter.frequency.setValueAtTime(Math.min(frequency * 8, 4200), start);
    filter.frequency.exponentialRampToValueAtTime(
      Math.max(frequency * 2.2, 180),
      start + duration
    );

    let amp = context.createGain();
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(peak, start + attack);
    amp.gain.exponentialRampToValueAtTime(peak * 0.55, start + duration - release);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);

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
      oscillator.stop(start + duration + 0.02);
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

    startOscillator('sine', frequency, 0.7);
    startOscillator('triangle', frequency, 0.25, 4);
    startOscillator('sine', frequency * 2, 0.1);
  });
}

/**
 * Play a specific note for a given duration.
 * 
 * @param {string} note - Note name (e.g. 'c4')
 * @param {number} beats - Duration in beats
 */
export async function note(note, beats = 1) {
  let frequencies = {
    'c0': 16.35,
    'c0#': 17.32,
    'd0': 18.35,
    'd0#': 19.45,
    'e0': 20.60,
    'f0': 21.83,
    'f0#': 23.12,
    'g0': 24.50,
    'g0#': 25.96,
    'a0': 27.50,
    'a0#': 29.14,
    'b0': 30.87,

    'c1': 32.70,
    'c1#': 34.65,
    'd1': 36.71,
    'd1#': 38.89,
    'e1': 41.20,
    'f1': 43.65,
    'f1#': 46.25,
    'g1': 49.00,
    'g1#': 51.91,
    'a1': 55.00,
    'a1#': 58.27,
    'b1': 61.74,

    'c2': 65.41,
    'c2#': 69.30,
    'd2': 73.42,
    'd2#': 77.78,
    'e2': 82.41,
    'f2': 87.31,
    'f2#': 92.50,
    'g2': 98.00,
    'g2#': 103.83,
    'a2': 110.00,
    'a2#': 116.54,
    'b2': 123.47,

    'c3': 130.81,
    'c3#': 138.59,
    'd3': 146.83,
    'd3#': 155.56,
    'e3': 164.81,
    'f3': 174.61,
    'f3#': 185.00,
    'g3': 196.00,
    'g3#': 207.65,
    'a3': 220.00,
    'a3#': 233.08,
    'b3': 246.94,

    'c4': 261.63,
    'c4#': 277.18,
    'd4': 293.66,
    'd4#': 311.13,
    'e4': 329.63,
    'f4': 349.23,
    'f4#': 369.99,
    'g4': 392.00,
    'g4#': 415.30,
    'a4': 440.00,
    'a4#': 466.16,
    'b4': 493.88,

    'c': 261.63,
    'c#': 277.18,
    'd': 293.66,
    'd#': 311.13,
    'e': 329.63,
    'f': 349.23,
    'f#': 369.99,
    'g': 392.00,
    'g#': 415.30,
    'a': 440.00,
    'a#': 466.16,
    'b': 493.88,

    'c5': 523.25,
    'c5#': 554.37,
    'd5': 587.33,
    'd5#': 622.25,
    'e5': 659.25,
    'f5': 698.46,
    'f5#': 739.99,
    'g5': 783.99,
    'g5#': 830.61,
    'a5': 880.00,
    'a5#': 932.33,
    'b5': 987.77,

    'c6': 1046.50,
    'c6#': 1108.73,
    'd6': 1174.66,
    'd6#': 1244.51,
    'e6': 1318.51,
    'f6': 1396.91,
    'f6#': 1479.98,
    'g6': 1567.98,
    'g6#': 1661.22,
    'a6': 1760.00,
    'a6#': 1864.66,
    'b6': 1975.53,

    'c7': 2093.00,
    'c7#': 2217.46,
    'd7': 2349.32,
    'd7#': 2489.02,
    'e7': 2637.02,
    'f7': 2793.83,
    'f7#': 2959.96,
    'g7': 3135.96,
    'g7#': 3322.44,
    'a7': 3520.00,
    'a7#': 3729.31,
    'b7': 3951.07,

    'c8': 4186.01,
    'c8#': 4434.92,
    'd8': 4698.63,
    'd8#': 4978.03,
    'e8': 5274.04,
    'f8': 5587.65,
    'f8#': 5919.91,
    'g8': 6271.93,
    'g8#': 6644.88,
    'a8': 7040.00,
    'a8#': 7458.62,
    'b8': 7902.13
  };

  note = note.toLowerCase();
  let tempo = window.tempo || 60;
  let duration = (60 / tempo) * beats;
  if (typeof frequencies[note] !== 'undefined') {
    await frequency(frequencies[note], duration);
  }
}

/**
 * Play a multiple notes in sequence.
 * 
 * @param  {...any} notes - Notes to play
 */
export async function song(...notes) {
  for (let i = 0; i < notes.length; i++) {
    if (i < notes.length - 1) {
      if (typeof notes[i] === 'string' && typeof notes[i + 1] === 'number') {
        await note(notes[i], notes[i + 1]);
        i++;
      } else if (typeof notes[i] === 'string') {
        await note(notes[i], 1);
      } else if (typeof notes[i] === 'array' && notes[i].length === 2) {
        await note(notes[i][0], notes[i][1]);
      }
    } else {
      await note(notes[i], 1);
    }
  }
}

/**
 * Make a beep sound.
 */
export async function beep() {
  let context = getContext();

  return new Promise((resolve) => {
    let start = context.currentTime;

    function chirp(freqStart, freqEnd, when, length, volume, done) {
      let osc = context.createOscillator();
      let sparkle = context.createOscillator();
      let filter = context.createBiquadFilter();
      let amp = context.createGain();
      let sparkleGain = context.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(freqStart, when);
      osc.frequency.exponentialRampToValueAtTime(freqEnd, when + length);

      sparkle.type = 'sine';
      sparkle.frequency.setValueAtTime(freqStart * 2, when);
      sparkle.frequency.exponentialRampToValueAtTime(freqEnd * 2, when + length);
      sparkleGain.gain.value = 0.35;

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(4200, when);
      filter.frequency.exponentialRampToValueAtTime(2200, when + length);
      filter.Q.value = 1.2;

      amp.gain.setValueAtTime(0.0001, when);
      amp.gain.exponentialRampToValueAtTime(volume, when + 0.004);
      amp.gain.setValueAtTime(volume, when + length * 0.45);
      amp.gain.exponentialRampToValueAtTime(0.0001, when + length);

      osc.connect(filter);
      sparkle.connect(sparkleGain);
      sparkleGain.connect(filter);
      filter.connect(amp);
      amp.connect(context.destination);

      osc.start(when);
      sparkle.start(when);
      osc.stop(when + length + 0.02);
      sparkle.stop(when + length + 0.02);

      osc.onended = () => {
        osc.disconnect();
        sparkle.disconnect();
        sparkleGain.disconnect();
        filter.disconnect();
        amp.disconnect();
        if (done) {
          resolve();
        }
      };
    }

    // Bloop-bleep!
    chirp(660, 880, start, 0.07, 0.22, false);
    chirp(880, 1320, start + 0.075, 0.12, 0.26, true);
  });
}
