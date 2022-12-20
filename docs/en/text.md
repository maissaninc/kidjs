# Text

Like the shape functions, the text functions create a new object and add it to
the stage. By default, it is centered at the specified x and y coordinates. This
can be changed by setting the textAlign and textBaseline properties.

For a font to be used, but must be installed on the computer, or imported into
the web page using webfonts. For this reason it may be best to stick to web safe
fonts. These are fonts that are likely to be installed on all computers.

## Writing Text

### write(x, y, text)

Writes a string of text at the specified x and y coordinates. By default the
text is centered at the specified coordinates. This can by changed using the
textAlign and textBaseline properties.

#### Parameters
- x Number x coordinate.
- y Number y coordinate.
- text String Text to display.

#### Returns
Text

```kidjs
write(400, 200, 'Hello World')
```

## Live Text

### display(x, y, expression)

Similar to write, except that if a variable name is passed as the third
parameter, it will always display the current value of the variable.

#### Parameters
- x Number x coordinate.
- y Number y coordinate.
- expression Expression Variable or expression to display.

#### Returns
Text

```kidjs
let t = 1
display(400, 200, t)
on('click', t = t + 1)
```

## Properties

### object.fill

A String defining the text's fill color. This can be a known named color such as
"red", "blue", etc., a hexidecimal color code in the format #rrbbgg or the
individual rgb values in the format rgb(red, green, blue).

```kidjs
let message = write(400, 200, "Hello World")
message.fill = '#a7c854'
```

### object.font

A String defining the font used. The font must be installed on the computer, or
embedded as a webfont.

```kidjs
let message = write(400, 200, "Hello World")
message.font = 'Times'
```

### object.fontSize

A Number defining the size of the text in pixels.

```kidjs
let message = write(400, 200, 'Hello World')
message.fontSize = 80
```

### object.textAlign

A String defining the horizontal alignment of the text. Accepted values are
"left", "right" and "center". The default is "center".

```kidjs
line(400, 50, 400, 350)
write(400, 150, 'Hello World').textAlign = 'left'
write(400, 200, 'Hello World').textAlign = 'center'
write(400, 250, 'Hello World').textAlign = 'right'
```

### object.textBasline

A String defining the vertical alignment of the text. Accepted values are "top",
"middle", "bottom" and "alphabetic". The default is "middle".
