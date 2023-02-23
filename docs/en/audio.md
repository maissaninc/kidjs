# Audio

The audio functions make use of the Audio and Speech Synthesis APIs in most
modern browsers. It is important to note that most browsers will only play audio
after the user has interacted with the page through a mouse click or key
pressed.

## Functions

### beep()

Makes a simple beep sound.

```kidjs
let button = triangle(400, 200, 150).rotate(90)
button.on('click', beep())
```

### frequency(frequency, duration = 0.25)

Play a frequency for a specified duration of time.

#### Parameters
- frequency Number Frequncy in hz.
- duration Number Duration of time in seconds.

#### Returns
Nothing

```kidjs
let button = triangle(400, 200, 150).rotate(90)
button.on('click', frequency(100, 1))
```

### note(note, beats = 1)

Play a note for the specified number of beats. The length of a single beat is
set by the tempo property.

#### Parameters
- note String Note to play (e.g. "c", "c5", "c5#", etc.)
- duration Number Number of beats to play the note.

#### Returns
Nothing

```kidjs
let c5 = rect(235, 200, 50, 200)
let d5 = rect(290, 200, 50, 200)
let e5 = rect(345, 200, 50, 200)
let f5 = rect(400, 200, 50, 200)
let g5 = rect(455, 200, 50, 200)
let a5 = rect(510, 200, 50, 200)
let b5 = rect(565, 200, 50, 200)

fill = 'black'
let c5sharp = rect(263, 175, 30, 150)
let d5sharp = rect(318, 175, 30, 150)
let f5sharp = rect(428, 175, 30, 150)
let g5sharp = rect(483, 175, 30, 150)
let a5sharp = rect(538, 175, 30, 150)

c5.on('click', note('c5', 1))
c5sharp.on('click', note('c5#', 1))
d5.on('click', note('d5', 1))
d5sharp.on('click', note('d5#', 1))
e5.on('click', note('e5', 1))
f5.on('click', note('f5', 1))
f5sharp.on('click', note('f5#', 1))
g5.on('click', note('g5', 1))
g5sharp.on('click', note('g5#', 1))
a5.on('click', note('a5', 1))
a5sharp.on('click', note('a5#', 1))
b5.on('click', note('b5', 1))
```

### song(note1, beats1, note2, beats2, ...)

Play a song made up of the specified notes for the specified number of beats. If
the beats value is left out, the default of 1 beat will be used.

#### Parameters
- note1..noten String Note to play (e.g. "c", "c5", "c5#", etc.)
- beats1..beatsn Number Number of beats to play the note.

#### Returns
Nothing

```kidjs
let button = triangle(400, 200, 150).rotate(90)
button.on('click', song('c5', 1, 'a', 0.5, 'd', 0.5))
```

### sound(file)

Play the audio file at the specified path. This file must be on hosted on the
same domain. Formats supported by most browsers include .mp3, .wav, and .ogg.

#### Parameters
- file String Path to audio file.
- beats1..beatsn Number Number of beats to play the note.

#### Returns
Nothing

```kidjs
let button = triangle(400, 200, 150).rotate(90)
button.on('click', sound('trumpet.mp3'))
```

### speak(text)

Use speech synthesis to say the specified text.

#### Parameters
- text String Text to say.

#### Returns
Nothing

```kidjs
let button = triangle(400, 200, 150).rotate(90)
button.on('click', speak('Hello World'))
```

## Properties

### tempo

A Number defining the number of beats per minute.
