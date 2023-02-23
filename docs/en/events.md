# Events

Events are "things" that happen during a program's execution, like a mouse
click, or keypress. We can write code that runs when that event occurs.

We could first write a function that is intended to run when an event occurs.
These functions are referred to as an Event Handlers. In Kid.js we can assoicate
an event handler with an event using the on() method.

```kidjs
function hello() {
  write(400, 200, 'Hello')
}
on('click', hello)
```

We can also write an "inline" function and pass it as the second parameter to
the on() method. Inline functions don't have a name and are sometimes referred
to as annonymous functions.

```kidjs
on('click', function() {
  write(400, 200, 'Hello')
})
```

In Kid.js you can also pass a single statement.

```kidjs
on('click', write(400, 200, 'Hello'))
```

## Triggers

In addition to events, Kid.js also supports a concept we refer to as "triggers".
If we pass an expression as the first parameter to the on() method, Kid.js will
watch for this expression to be true and execute the event handler when it is.

```kidjs
let t = 10
display(400, 200, t)
on('click', t = t - 1)
on(t == 0, t = 'Blast off!')
```

## Keyboard Input

There are a number of events related to keyboard input. When any of these events
happen, the specific key pressed is passed as a parameter to the event handler.

### keydown

The keydown event is triggered when the user pressed down on a key.

```kidjs
function handler(key) {
  write(400, 200, key)
}
on('keydown', handler)
```

### keyup

The keyup event is triggered when the key is released.

```kidjs
function handler(key) {
  write(400, 200, key)
}
on('keyup', handler)
```

Kid.js also triggers an event matching the name of the key pressed. This makes
it easy to attach code to a specific key press.

```kidjs
function handler(key) {
  write(400, 200, 'You pressed spacebar')
}
on('space', handler)
```

## Mouse Input

At anytime, the global variables mouseX and mouseY contain the x and y
coordinates of the mouse.

```kidjs
display(350, 200, mouseX)
display(450, 200, mouseY)
```

There are also a number of events related to mouse input. When any of these
events happen, the specific x and y coordinates of the mouse area passed as
parameters to the event hander.

### click

The click event is triggered when the user clicks the mouse, or on a smartphone
or tablet, taps the display.

```kidjs
on('click', write(400, 200, 'You clicked'))
```

### doubleclick

The doubleclick event is triggered when the user clicks or taps twice.

```kidjs
on('doubleclick', write(400, 200, 'You double clicked'))
```

### mousedown

The mousedown event is triggered when the user presses down on the mouse, or
begins to tap.

```kidjs
on('mousedown', write(400, 200, 'Mouse down'))
```

### mouseup

The mouseup event is triggered when the user releases the mouse button, or
removes their finger.

```kidjs
let t = ''
display(400, 200, t)
on('mousedown', t = 'Mouse Down')
on('mouseup', t = 'Mouse Up')
```

### mousemove

The mousemove event is triggered whenever the user moves the mouse cursor across
the app.

```kidjs
function handler(x, y) {
  clear()
  write(400, 200, x + ',' + y)
}
on('mousemove', handler)
```

## Device Orientation

Kid.js triggers a number of events based on the orientation of the user's
device. These events only occur on smartphones, tablets or other devices with a
gyroscope. The user must also first tap the app before these events can be
detected.

### tiltleft

The tiltleft event is triggered when the user tilts the device more than 10
degrees to the left.

### tiltright

The tiltright event is triggered when the user tilts the device more than 10
degrees to the right.

### tiltup

The tiltup event is triggered when the user tilts the device more than 10
degrees forward.

### tiltdown

The tiltdown event is triggered when the user tilts the device more than 10
degrees backward.

```kidjs
let t = 'Holding steady'
display(400, 200, t)
on('tiltleft', t = 'Left')
on('tiltright', t = 'Right')
on('tiltup', t = 'Up')
on('tiltdown', t = 'Down')
```

## Device Motion

Kid.js triggers a number of events based on the motion of the user's device.
These events only occur on smartphones, tablets or other devices with a
gyroscope. The user must also first tap the app before these events can be
detected.

### shake

The shake event is triggered when the user shakes their device.
