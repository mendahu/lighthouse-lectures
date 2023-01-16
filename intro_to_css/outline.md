# External Links

- https://guide.freecodecamp.org/html/html5-semantic-elements/
- https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/profile.jpeg
- http://xahlee.info/js/html5_non-closing_tag.html
- http://guyroutledge.github.io/box-model/
- https://gist.githubusercontent.com/DavidWells/18e73022e723037a50d6/raw/31b030534440f31f3ddcd72c4916cc47eb1be520/reset.css
- https://github.com/necolas/normalize.css/blob/master/normalize.css
- https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png

# Outline

## Introduce Frog Profile

- We're gonna make a little profile card for our friend Felipa the Frog
- Here's a mockup of what we want to get to
- Along the way we'll learn some of the basics of HTML And CSS

## Layout Markup

- Put all the content on the page with just html
- talk about how to approach a layout from a content first approach
- Layout is a CSS job, not an HTML job
- Emphasize the roles of the different technologies
- show diagram
- Show in browser
- Talk about tags vs elements, self-closing vs closed, heirarchy of parent/child

```html
<html>
  <head>
    <title>Felipa the Frog</title>
  </head>
  <body>
    <div>
      <div>
        <h1>Featured Frog Friend</h1>
      </div>
      <div>
        <div>
          <img />
        </div>
        <div>
          <h2>Felipa the Frog</h2>
          <ul>
            <li>Age: 2 years</li>
            <li>Favourite Leaf: Papaya</li>
          </ul>
          <h3>Profile</h3>
          <p>
            Felipa is a friendly tree frog who enjoys spending her days sleeping
            and her nights chasing mosquitos for a delicious meal.
          </p>
          <h3>Tags</h3>
          <div>
            <ul>
              <li>green</li>
              <li>happy</li>
              <li>hungry</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <small><a>More about frogs</a> - Copyright 2023 Frogs Inc.</small>
      </div>
    </div>
  </body>
</html>
```

### Semantic Markup

- From [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
  > In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)
- We've already seen semantics when we use descriptive names for variables and functions in JavaScript
- HTML gives us access to many [semantic tags](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) to better describe our documents

* Show how the h1 and h2 have a heirarchy - Chrome renders them different sizes
* paragraph instead of span
* Show how the unordered lists are just that - lists, and the vertical layout, the dots, are all part of how they look
* Visit https://guide.freecodecamp.org/html/html5-semantic-elements/
* Talk about divs - then refactor using article and section, main, footer, header, small
* Talk about assistive devices

```html
<html>
  <head>
    <title>Felipa the Frog</title>
  </head>
  <body>
    <header>
      <h1>Featured Frog Friend</h1>
    </header>
    <main>
      <article>
        <section>
          <img />
        </section>
        <section>
          <h2>Felipa the Frog</h2>
          <ul>
            <li>Age: 2 years</li>
            <li>Favourite Leaf: Papaya</li>
          </ul>
          <h3>Profile</h3>
          <p>
            Felipa is a friendly tree frog who enjoys spending her days sleeping
            and her nights chasing mosquitos for a delicious meal.
          </p>
          <h3>Tags</h3>
          <div>
            <ul>
              <li>green</li>
              <li>happy</li>
              <li>hungry</li>
            </ul>
          </div>
        </section>
      </article>
    </main>
    <footer>
      <small><a>More about frogs</a> - Copyright 2023 Frogs Inc.</small>
    </footer>
  </body>
</html>
```

### Attributes

- Discuss attributes on html elements
- Some tags are universal, some are element specific
  - Global HTML Attributes: https://www.w3schools.com/tags/ref_standardattributes.asp
- Add img src/alt/size, a href
- Notice multi line spanning with attributes

```html
<img src="public/frog_profile.jpg" alt="Felipa the Frog Profile Picture" />
<a href="https://en.wikipedia.org/wiki/Tree_frog">More about frogs</a>
```

## Part Two: CSS

- CSS is a [programming language](https://notlaura.com/css-is-a-programming-language/) that allows us to style our webpages
- Can be added inline, embedded in a style element, or stored in an external file and linked in the head of the HTML file

### Demo inline style

- Give article a background color, a border, and box shadow
- Pick a hex color from https://htmlcolorcodes.com

```html
<article
  style="
          background-color: #ccefc5;
          border: solid black 1px;
          box-shadow: 4px 4px 4px lightgrey;
        "
></article>
```

### DevTools

- Demo Chrome DevTools
  - Show DOM and elements hovering
  - show picker tool

### Refactor to use style element and selectors

inside <head>

```html
<style>
  article {
    background-color: #ccefc5;
    border: solid black 1px;
    box-shadow: 4px 4px 4px lightgrey;
  }
</style>
```

- Talk about selectors

  - element selectors
  - class selectors
  - id selectors

- Demo Element using headings and other text elements
- Show how you can combine elements in one selector
- Talk about the pattern of multi selectors vs individual

```css
small,
p,
li,
h1,
h2,
h3 {
  font-family: "Arial";
  color: #222222;
}
h1 {
  font-size: 36px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 18px;
}
p,
li {
  font-size: 16px;
}
small {
  font-size: 12px;
}
```

- Demo classes
- `li` element is different in one place vs another
  - need a group setting to apply to some elements but not other
  - classes!

```css
.tag {
  background-color: #969696;
  border-radius: 20px;
  color: #eeeeee;
  padding: 12px 24px;
}
```

```html
<li class="tag">green</li>
<li class="tag">happy</li>
<li class="tag">hungry</li>
```

- Demo id selectors (there can only be one id per element)
- Image can be targeted

```css
#profile-picture {
  border-radius: 48px;
}
```

### External Stylesheets

- Refactor to external stylesheet
- `styles.css`

```html
<link rel="stylesheet" href="./styles.css" />
```

- Highlight code separation, reusability.

### Dev Tools

- show margin around divs
- show style toggling
- show class/state toggling
- show user agent stylesheet in devtools

### Reset and Normalize

- A reset is removing any default browser styling, often called the user agent stylesheet. The Goal is to remove any browser inconsistencies.
- Demo a reset file like https://gist.githubusercontent.com/DavidWells/18e73022e723037a50d6/raw/31b030534440f31f3ddcd72c4916cc47eb1be520/reset.css
- "normalize.css retains many useful default browser styles. This means that you don’t have to redeclare styles for all the common typographic elements."
- Demo a normalize file like https://github.com/necolas/normalize.css/blob/master/normalize.css

```html
<link rel="stylesheet" href="public/normalize.css" />
<link rel="stylesheet" href="public/reset.css" />
```

- set article to 800px wide so you can show next section
- set article > section width to 400px

### Box Model

- Show Dev Tools Margin/Padding
- Add 1px border - what is the new width?
- Discuss box-model - margin ~> border ~> padding ~> content

- Demo box-sizing: border-box

```css
 {
  box-sizing: border-box;
}
```

### Flexbox

- Show how we can use Flexbox for layout
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- `  display: flex;` to article
- Add width to sections

```css
article > section {
  width: 50%;
}
```

fix image

```css
width: 100%;
```

### Demo specificity

- Least specific to most specific: element => class => id => inline style
- https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png

### Finish styling

- `display: flex` on ul.taglist
- `padding: 36px` on article, `gap 36px`
- `margin-top: 0xp` on article h2
- `margin-top: 8px` on article li
- `margin-top: 9px` on .tag
- `gap 8px` on .tag
- `margin-top: 48px` on footer
- `margin: 8px` on body
