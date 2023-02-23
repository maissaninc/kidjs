# Physics

By default, objects are anchored in place. If we set this property to false,
objects come to life!

```kidjs
let ball = circle(400, 200, 150)
on('click', ball.anchored = false)
```

## Functions

### object.push(x, y)

Give an object a push in the direction defined by x and y. This is the same as
momentarily increasing the acceleration. If the object is anchored, it will
become unanchored.

```kidjs
let ball = circle(400, 200, 150)
on('click', ball.push(10, 10))
```

## Properties

### object.bounciness

A Number between 0 and 1 defining how "bouncy" an object is.

```kidjs
rect(400, 350, 600, 25)
let a = square(300, 50, 50)
let b = square(500, 50, 50)
a.bounciness = 1
b.bounciness = 0.5
a.anchored = false
b.anchored = false
```

### object.velocity.x

A Number defining the object's velocity, or speed, along the x-axis.

```kidjs
gravity = 0
let ball = circle(400, 200, 150)
ball.velocity.x = 1
```

### object.velocity.y

A Number defining the object's velocity, or speed, along the y-axis.

```kidjs
gravity = 0
let ball = circle(400, 200, 150)
ball.velocity.y = 1
```

### object.x

A Number defining the object's x coordinate.

```kidjs
let ball = circle(400, 200, 150)
ball.x = 10
```

### object.y

A Number defining the object's y coordinate.

```kidjs
let ball = circle(400, 200, 150)
ball.y = 10
```

## Events

### collision

The collision event fired when two objects smash into each other.
