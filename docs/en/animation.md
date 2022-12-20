# Animation

To create animation, we can change an object's size, position or color over
time. We can create more complex animations by chaining several animations
together.

## Functions

- animate
- grow
- move
- moveTo
- shrink

### object.animate(properties, duration = 1, easing = 'easeinoutelastic')

Animate any number of properties.

#### Parameters
- properties Object Object list the properties to animate and their target values.
- duration Number Duration of the animation in seconds.
- easing String Easing function to use for the animation.

#### Returns
Animation

```kidjs
let ball = circle(400, 200, 250)
ball.animate( {x: 400, radius: 350 }, 1)
```

### object.grow(amount, duration = 1, easing = 'easeinoutelastic')

Grow the object by the specified number of pixels.

#### Parameters
- amount Number Number of pixels to grow the object by.
- duration Number Duration of the animation in seconds.
- easing String Easing function to use for the animation.

#### Returns
Animation

```kidjs
let ball = circle(400, 200, 250)
ball.grow(100)
```

### object.shrink(amount, duration = 1, easing = 'easeinoutelastic')

Shrink the object by the specified number of pixels.

#### Parameters
- amount Number Number of pixels to shrink the object by.
- duration Number Duration of the animation in seconds.
- easing String Easing function to use for the animation.

#### Returns
Animation

```kidjs
let ball = circle(400, 200, 250)
ball.shrink(100)
```

### object.move(x, y, duration = 1, easing = 'easeinoutelastic')

Move the object the specified number of pixels in each direction.

#### Parameters
- x Number Number of pixels to move along the x axis.
- y Number Number of pixels to move along the y axis.
- duration Number Duration of the animation in seconds.
- easing String Easing function to use for the animation.

#### Returns
Animation

```kidjs
let ball = circle(400, 200, 250)
ball.move(100, 0)
```

### object.moveTo(x, y, duration = 1, easing = 'easeinoutelastic')

Move the object to a specific coordinate.

#### Parameters
- x Number Target x coordinate.
- y Number Target y coordinate.
- duration Number Duration of the animation in seconds.
- easing String Easing function to use for the animation.

#### Returns
Animation

```kidjs
let ball = circle(400, 200, 250)
ball.moveTo(100, 100)
```

## Easing Functions

### Linear

```kidjs
easing = 'linear'
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200).repeat()
```

### Ease In

```kidjs
easing = 'easeIn'
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200).repeat()
```

### Ease Out

```kidjs
easing = 'easeOut'
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200).repeat()
```

### Ease In Out

```kidjs
easing = 'easeInOut'
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200).repeat()
```

### Ease In Elastic

```kidjs
easing = 'easeInElastic'
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200).repeat()
```

### Ease Out Elastic

```kidjs
easing = 'easeOutElastic'
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200).repeat()
```

### Ease In Out Elastic

```kidjs
easing = 'easeInOutElastic'
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200).repeat()
```

## Chaining Animations Together

By default, when attempting to animate a property that is already being
animated, the active animation will be stopped and replaced with the new one. By
chaining animations together in the following pattern, the animations will play
one after the other.


```kidjs
let ball = circle(200, 200, 250)
ball.moveTo(600, 200).moveTo(200, 200)
```

### repeat(count = infinite)

Calling the repeat() function after an animation, or chain of animations, will
repeat the animation or animations.

#### Parameters
- count Number Number of times to repeat the animation. If omitted the animation will repeat indefinately.
