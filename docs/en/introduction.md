# Introduction

Kid.js is a framework designed to make JavaScript more accessible for kids and beginner programmers. It eliminates the need to first understand the DOM and provides functions to create drawings, animations and simple games.

## Why Learn JavaScript?

JavaScript is the most popular programming language, and growing. It was created to power interactive websites, but has since grown beyond the web browser and is used to write applications large and small, on servers and on mobile devices.

JavaScript shares a similar syntax with many other programming languages such as C/C++, Swift, Java and Kotlin, but is a little more forgiving. It can be a great jumping off point to other more structured languages.

## Getting Started

Use the following HTML template to get started. Any code written inside of <script type="kidjs"> tags will be executed by the framework.

```
<html>
  <head>
    <title>Kid.js Example</title>
    <script src="https://cdn.jsdelivr.net/npm/@maissaninc/kidjs/dist/kid.min.js"></script>
  </head>
  <body>
    <script type="kidjs">

      write('Hello World');

    </script>
  </body>
</html>
```

## The Stage

The shape functions in Kid.js create new objects which are added to the stage.

```kidjs
star(400, 200, 250)
```

Each object has a set of properties that can be modified, such as fill color, stroke color, line width, etc.

```kidjs
let sirius = star(400, 200, 250)
sirius.fill = 'gold'
sirius.stroke = 'orange'
sirius.lineWidth = 10
```

In addition to their properties, most objects also have a set of functions or methods that can be executed.

```kidjs
let sirius = star(400, 200, 250)
sirius.spin()
```

## Support

If you have any questions or run into trouble with your code, reach out to us on Discord. Please report any bugs you uncover on GitHub.

## Open Source

We're big supporters of open source. Kid.js is licensed under the MIT license, meaning you're free to use as you wish, with few conditions.
