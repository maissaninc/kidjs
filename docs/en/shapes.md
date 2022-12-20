# Shapes

The shape functions create new objects and add them to the stage, centered at
the specified coordinates. The shape's various properties (fill, stroke, etc.)
are initially set to the global values, but can be changed at anytime.

## Functions

- circle
- curve
- heptagon
- hexagon
- line
- octagon
- oval
- pentagon
- rect
- semicircle
- square
- star
- triangle


### circle(x, y, size)

Creates a circle centered at the specified x and y coordinates, of the specified
size.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Diameter of circle in pixels.

#### Returns
Circle

```kidjs
circle(400, 200, 250)
```

### heptagon(x, y, size)

Creates a regular heptagon (7 sided polygon) centered at the specified x and y
coordinates, of the specified size.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Diameter of the bounding circle in pixels.

#### Returns
RegularPolygon

```kidjs
heptagon(400, 200, 250)
```

### hexagon(x, y, size)

Creates a regular hexagon (6 sided polygon) centered at the specified x and y
coordinates, of the specified size.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Diameter of the bounding circle in pixels.

#### Returns
RegularPolygon

```kidjs
hexagon(400, 200, 250)
```

### octagon(x, y, size)

Creates a regular octagon (8 sided polygon) centered at the specified x and y
coordinates, of the specified size.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Diameter of the bounding circle in pixels.

#### Returns
RegularPolygon

```kidjs
octagon(400, 200, 250)
```

### oval(x, y, width, height)

Creates a oval width centered at the specified x and y coordinates, with the
specified width and height.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- width Number Width of oval in pixels.
- height Number Height of oval in pixels.

#### Returns
Oval

```kidjs
oval(400, 200, 250, 150)
```

### pentagon(x, y, size)

Creates a regular pentagon (5 sided polygon) centered at the specified x and y
coordinates, of the specified size.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Diameter of the bounding circle in pixels.

#### Returns
RegularPolygon

```kidjs
pentagon(400, 200, 250)
```

### rect(x, y, width, height)

Creates a rectangle centered at the specified x and y coordinates, with the
specified width and height.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- width Number Width of rectangle in pixels.
- height Number Height of rectangle in pixels.

#### Returns
Rectangle

```kidjs
rect(400, 200, 250, 150)
```

### semicircle(x, y, size)

Creates a semicircle centered at the specified x and y coordinates, of the
specified size.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Diameter of the semicircle in pixels.

#### Returns
Semicircle

```kidjs
semicircle(400, 200, 250)
```

### square(x, y, size)

Creates a square centered at the specified x and y coordinates, of the specified
size.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Width and height of the square in pixels.

#### Returns
Rectangle

```kidjs
square(400, 200, 200)
```

### star(x, y, outerSize, innerSize = null, points = 5)

Creates a stars centered at the specified x and y coordinates, of the specified
size. You may optionally specify an inner radius as well as the number of
points.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- outerSize Number Outer diameter in pixels.
- innerSize Number Inner diameter in pixels.
- points Number Number of points on the star.

#### Returns
Polygon

```kidjs
star(400, 200, 250, 150, 5)
```

### triangle(x, y, width, height = null)

Creates a triange centered at the specified x and y coordinates, of the
specified width and height. The height parameter is optional. If omitted a
regular triangle will be created.

#### Parameters
- x Number x coordinate of center point.
- y Number y coordinate of center point.
- size Number Width of triangle.
- size Number Height of triangle.

#### Returns
Polygon

```kidjs
triangle(300, 200, 150)
triangle(500, 200, 150, 250)
```

### line(x1, y1, x2, y2)

Creates a line between two points.

#### Parameters
- x1 Number x coordinate of the first point.
- y1 Number y coordinate of the first point.
- x2 Number x coordinate of the second point.
- y2 Number y coordinate of the second point.

#### Returns
Line

```kidjs
line(200, 100, 600, 300)
```

### curve(x1, y1, x2, y2, x3, y3, ...)

Creates a curve using the specified control points. You may pass any number of
sets of x and y coordinate. The curve will begin at the first point and end at
the last point, guided by the points in between.

#### Parameters
- x1...xn Number x coordinate of control point.
- y1...yn Number y coordinate of control point.

#### Returns
Curve

```kidjs
fill = 'black'
circle(200, 200, 10)
circle(350, 300, 10)
circle(450, 100, 10)
circle(600, 200, 10)
curve(200, 200, 350, 300, 450, 100, 600, 200)
```

## Properties

- angle
- lineWidth
- fill
- stroke

### object.angle

A Number defining the rotation of the object in degrees.

```kidjs
let slope = rect(400, 200, 350, 50)
slope.angle = 10
```

### object.lineWidth

A Number defining the line width of the object's stroke in pixels.

```kidjs
let ball = circle(400, 200, 250)
ball.stroke = 'black'
ball.lineWidth = 10
```

### object.fill

A String defining the object's fill color. This can be a known named color such
as "red", "blue", etc., a hexidecimal color code in the format #rrbbgg or the
individual rgb values in the format rgb(red, green, blue).

```kidjs
let sirius = star(400, 200, 300)
sirius.fill = 'pink'
```

### object.stroke

A String defining the object's stroke color. This can be a known named color
such as "red", "blue", etc., a hexidecimal color code in the format #rrbbgg or
the individual rgb values in the format rgb(red, green, blue).


```kidjs
let sirius = star(400, 200, 300)
sirius.fill = 'pink'
sirius.stroke = 'purple'
```

## Grouping Shapes

Several shapes can be grouped together using the group() function. The group
then has it's own set of position and size properties.

### group(shape1, shape2, shape3, ...)

Groups together the specified shapes.

#### Parameters
- shape1...shapen Shape Shape to include in group.

#### Returns
Group
