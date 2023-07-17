# Outline

## Responsive Design

- From [Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design):
  > Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
- A feature of web development is that there are a huge diversity of screen sizes out there
- What's more, is that the screen sizes can vary dramatically - from a 320px mobile screen to a 3800 pixel ultrawide. There can be ten orders of magnitude between screen sizes!
- Mobile development is especially tricky given the space constraints - and so we often have to build sites that adapt and change in signficant ways to accommodate different sizes.
- Demo some sites responsive design (google results, twitter, etc)
  - show layout changes
  - show relative size changes
  - show text changes
- Luckily, CSS helps us accomplish this with a number of different tools

## Demo

- We're going to convert a simple site into a responsive site today!
- Frogs Inc has made a simple landing page but the owner is not a web developer and couldn't get very far on their own. They've hired us to help!

- Some problems

  - Whole site was designed on a screen 1200px wide
  - scaling on mobile
  - empty space at bottom of page
  - notice looks kind of large and unweildy
  - looks bad on large screens
  - aside width is broken
  - font size to be more dramatic

- show page and walk through some elements.
- header/footer/main
- aside
- header elements

- Show Chrome Dev Tools
  - Mobile view
  - Responsive
  - Different presets
  - Scaling

### Scaling - Viewport Meta Tag

- In the early days of mobile browsing, some devices would try to accomodate sites built for desktops by introducing a device-level scaling.
- Basically, they would render a page at the full desktop width, then shrink it down to fit a smaller screen.
- this was great for mobile devices back then because it made the internet just work
- But when people started creating actual mobile applications it made a problem because you couldn't optimize for smaller widths

- We can add `meta` tags to the `head` element of our html in order to level set the scaling and tell the browser that we're going to handle mobile optimization
- In order to make sure that the user's browser displays our page correctly, we want to target the `viewport` meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- The `content` portion is made up of two key/value pairs: `width` and `initial-scale`
- `width=device-width` tells the browser to set the width of the page to the width of the device
- `intial-scale=1.0` sets the initial zoom level of the page to `1.0` (or 100%)

### Relative Units

- Instead of specifying element dimensions using fixed units (eg. pixels), we can use relative units to help things scale appropriately for various display sizes

#### Percentage - Aside width

- Width, height, font-size, and a variety of other dimensions can be specified as a percentage
- Bear in mind that the percentage is based on the dimensions of the parent element, not the webpage itself
- eg. If the parent is `300px` wide and the child has a width of `50%`, then the child will be `150px` wide

- adjust aside width to 89%
- show how it responds to wider screens
- demonstrate how fixing the parent (main) would change things

#### `max-width` && `min-width` - fixing large screens

- `max-width` and `min-width` are used to set a maximum and minimum width respectively
- The element will not grow beyond the `max-width` nor shrink below the `min-width`
- Useful for making sure that your responsive elements don't grow or shrink to a point where they break the layout

- add layout class and put on innner divs

```css
.layout {
  max-width: 1200px;
  margin-inline: auto;
}
```

#### `vh` and `vw` - fil

- One `vh` is equal to `1%` of the viewport height
- An element with a style of `height: 50vh;` will be 50% the height of the screen
- `vw` works the same way except it's `1%` of the viewport width

- set body to 100vh to fill the space
- add display flex to body
- add flex direction column to body
- add flex grow to main

#### `em` and `rem`

- An `em` is a relative measure based on the font-size of the parent component
- eg. If the parent has a font-size of `24px` and the child is `3em` wide, then it will be `72px` wide
- A `rem` is a **root** _em_, instead of being based on the parent's font-size, it is based on the font-size of the root element (html)

- take over base font size (add font-size 10px to html)
- set p, h3, h2, h1 to REM units

```css
p {
  font-size: 1rem;
}

h3 {
  font-size: 1.6rem;
}

h2 {
  font-size: 2rem;
}

h1 {
  font-size: 2.6rem;
}
```

- add emphasis class to <span> around "biggest" in paragraph, set to 1.2em

#### Media Queries

- Media queries allow us to make changes to our design based on the user's device
- There are two parts to a media query: a **media type** and a **media feature**
- The options for _media types_ are `screen`, `print`, `speech`, and `all`
- _Media features_ include things like `aspect-ratio`, `device-height`, and `orientation`
- We can use multiple media queries to target various device sizes and orientations

- hide header text on mobile

```css
@media only screen and (max-width: 575px) {
  header p {
    display: none;
  }
}
```

- move aside to the side on desktop
- add wrapper div to not-aside in main

```css
@media only screen and (min-width: 600px) {
  main > div {
    display: flex;
  }

  aside {
    max-width: 200px;
  }
}
```

## Tooling

- In the early days of the internet, when sites were basically just a collection of documents linked together, writing vanilla HTML, CSS and JS was fine. As your site scaled, it was just adding more documents, and the scope of a document was totally sustainable for vanilla tools
- Once we started to build more complex things, with more interactivity, with application state, with common styles and themes, writing this stuff vanilla became harder and harder.
- If I give you a hammer and some nails and a saw and ask you to build a picture frame, you're probably ok. But if I ramp this up to a chair, or a house, or the CN Tower, your tools start to become inadequate
- but at the end of the day, the browser still needs to consume pure HTML, CSS and JS. So what do we do?
- Enter tooling - additional software that we use to give us more power, more scale, and more functionality, without worrying about browser support
- Tooling takes in some special kind of advanced code and spits out vanilla stuff during the build phase of your application
- Thoughout the bootcamp you're going to learn a few different examples of tooling - there are many for HTML, CSS and JS.
- Today we're going to focus on some CSS tooling, specifically a tool called SASS.

### CSS Preprocessors

- A CSS preprocessor generates CSS using a [Domain Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language)
- Styles are written in this _language_ and then [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler) into CSS before being served to the client
- Popular preprocessors include [Sass](https://sass-lang.com/), [LESS](http://lesscss.org/), [Stylus](https://stylus-lang.com/), and [PostCSS](https://postcss.org/)

### Intro to Sass

- **S**yntactically **A**wesome **S**yle **S**heets
- Sass gives us some useful features to make writing our CSS easier
- **SCSS** or _Sassy CSS_ is a superset of CSS
- A superset is a language that extends another language by adding new features
- But the browser doesn't understand SCSS, so we have to transpile our SCSS into CSS before serving it

### Sass CLI

- [npm sass](https://www.npmjs.com/package/sass)

```sh
# install globally
npm i -g sass

# output to console
sass input.scss

# output to file
sass input.scss output.css

# file watcher
sass input.scss output.css --watch

# no source map
sass input.scss output.css --watch --no-source-map

# source folder:output folder
sass app/sass:public/stylesheets --watch
sass sass:stylesheets --watch --no-source-map

# get rid of .sass-cache
sass main.scss output.css --no-source-map --no-cache
```

#### Variables

- Sass utilizes variables like any other programming language: store a value and retrieve it later using the variables name

```scss
// variables
$font-color: lightblue;
$font-size: 1.2rem;

p {
  color: $font-color;
}
h1 {
  font-size: $font-size;
}
```

#### Nesting

- Nesting styles inside one another can help improve the readability and logical flow of our code

```scss
// basic css
.container p {
  color: magenta;
  text-decoration: underline;
}
.container div {
  border: 1px solid black;
}

// using nesting
.container {
  p {
    color: magenta;
    text-decoration: underline;
  }
  div {
    border: 1px solid black;
  }
}
```

#### Partials and `@import`

- We can use partials to store small amounts of code
- The convention for naming partials is to prepend the filename with an underscore (eg. `_variables.scss` or `_nav.scss`)
- Partials can be included into other Sass files using the `@import` syntax
- When importing, the leading underscore can be omitted from the filename

```scss
// inside _variables.scss
$border-width: 2px;
$border-color: red;

// inside styles.scss
@import "variables";
p {
  border: $border-width solid $border-color;
}
```

#### `@extend`

- When you have two or more elements that have very similar styles, you could style one and use it as the basis for the other element(s)
- Styles can be combined into other styles using `@extend`

```scss
.header-text {
  font-size: 2em;
  font-family: "sans-serif";
}

.heading {
  @extend .header-text;
  color: rebeccapurple;
}
```

#### Mixins

- A **mixin** is like a function that returns a group of styles
- The _mixin_ can be included in any other style by using `@include`

```scss
// declare the mixin
@mixin header-styles {
  height: 50px;
  background-color: $header-bg;
}

// include it in another style
header {
  @include header-styles();
}

// mixins can take parameters as well
@mixin box-sizes($n) {
  height: $n;
  width: $n;
  line-height: $n;
}

.box {
  @include box-sizes(15px);
  border: 1px solid green;
}
```

### Useful Links

- [MDN: CSS Preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
- [What is the viewport?](https://www.w3schools.com/css/css_rwd_viewport.asp)
- [W3 Schools: Meta Tags](https://www.w3schools.com/tags/tag_meta.asp)
- [MDN: CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Sass CLI](https://sass-lang.com/documentation/cli/dart-sass)

### Units of Measure

- Absolute sizes: `px`, `pt`, `in`
- Relative sizes: `%`, `vh`, `vw`, `em`, `rem`

### Percentages

- percentage of the parent

```css
div {
  height: 150px;
  width: 20%; /* change this one ! */
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

- `height` percentage only works if the parent has an explicit height

```css
section {
  height: 300px; /* add this */
  border: 2px solid black;
}

section div {
  height: 50%; /* this one! */
  width: 20%;
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### `max-width` && `min-width`

```css
section div {
  height: 50%;
  width: 20%;
  min-width: 100px; /* this one */
  max-width: 150px; /* this one */
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### `vh` and `vw`

```css
section div {
  height: 50vh; /* this one */
  width: 20vw; /* this one */
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### `em` and `rem`

```css
section div {
  height: 40rem; /* this one */
  width: 25em; /* this one */
  border: 2em dotted orange; /* this one */
  margin: 20px;
  line-height: 150px;
  display: inline-block;
  background-color: lightpink;
  text-align: center;
}
```

### Media Queries

- **media type** and **media feature**
- Media types: `screen`, `print`, `speech`, and `all`
- Media features: `aspect-ratio`, `device-height`, `light-level`, and `orientation`

```css
@media only screen and (max-width: 500px) {
  /* these styles will be applied if the screen width is less than 500px */
  body {
    background-color: lightblue;
  }
}

@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

- You can also specify certain style sheets

```html
<link
  rel="stylesheet"
  media="screen and (min-width: 1200px)"
  href="large.css"
/>
```

### Intro to Sass

- **S**yntactically **A**wesome **S**yle **S**heets (Sassy CSS)

### Variables

```scss
// variables
$font-color: lightblue;
$font-size: 1.2rem;

p {
  color: $font-color;
}
h1 {
  font-size: $font-size;
}
```

### Nesting

```scss
// using nesting
.container {
  p {
    color: magenta;
    text-decoration: underline;
  }
  div {
    border: 1px solid black;
  }
}
```

### Partials

```scss
// _variables.scss
$font-size: 24px;
$border-width: 10px;
$border-color: hotpink;
$border-style: dotted;
$border: $border-width $border-style $border-color;
```

```scss
// styles.scss
@import "_variables";

// you can omit the underscore
@import "variables";
```

### Extending Styles

```scss
.header-text {
  font-size: 2em;
  font-family: "sans-serif";
}

.heading {
  @extend .header-text;
  color: rebeccapurple;
}
```

#### Mixins

```scss
// declare the mixin
@mixin header-styles {
  height: 50px;
  background-color: $header-bg;
}

// include it in another style
header {
  @include header-styles();
}

// mixins can take parameters as well
@mixin make-square($n) {
  height: $n;
  width: $n;
  font-size: ($n / 2);
  border: ($n / 4) solid black;
}

.small-square {
  @include make-square(4em);
}

.med-square {
  @include make-square(30px);
}
```
