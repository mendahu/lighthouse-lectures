# W04D04 - Responsive Design and SASS

### To Do

- [ ] Responsive Design
- [ ] Viewport Meta Tag
- [ ] Percentages
- [ ] `max-width` and `min-width`
- [ ] Viewport Height/Width `vh`/`vw`
- [ ] Based on Font-size `em`/`rem`
- [ ] Media Queries
- [ ] Tooling and CSS Preprocessors
- [ ] Intro to Sass/SCSS

# Responsive Design

- Web Development - lots of screen sizes to work with!
- As small as ~320px (iPhone 5) - ~3800 px on ultrawide
- Twitter.com - nice example of different responsive breakpoints

# How???

- fixing Frogs Inc Website
- Designed for 1200px - we're gonna make it responsive!!

# Viewport Meta Tag - Scaling

- Viewport meta tag - tells the browser that we are going to be in charge of the mobile experience and not to scale it for us

# Relative Units

- Instead of fixed units (pixels, inches), you can use relative units
- Most common one - %
- Percentage units take up a chunk of their parent
- So if the parent is 300px wide, 50% will be 150px

# Max and Min Widths - fix large screens

- `max-width` and a `min-width` properties which can cap or floor a responsive value

# Viewheights and Viewwidths (`vh` and `vw`)

- A unit of measurement in CSS
- A view height is 1/100th of the height of the viewport
- A view width is 1/100th of the width of the viewport

# EMs and REMs

- Unit of measurement in CSS
- 1 `em` = the base line height of the parent component - immediate ancestor
- 1 `rem` (r stands for root) - is the base line height of the root element of the HTML

# Media Queries

- Media Queries allow us to make changes to design based on user's device
- There are two parts to a media query
  - type - screen or print or speech or all
  - feature - aspect-ratio, device-height, orientation
- You can combine multiple media queries to handle different kinds of things

// return at :10

# Tooling

- Software build tooling, specifically in Web, is a process we add to our flow
- We write some code, a build tool processes it, and it spits out vanilla code at the end
- Allows us to write complex different things - the browser doesn't need to understand it.
- through bootcamp you're going to learn a number of tools, React, SASS, JSX, Rails, etc

# CSS Preprocessor

- Uses a domain specific language (Sassy CSS, for example)
- You write your CSS in this special language
- The build tool will then convert the domain language to vanilla CSS
- SASS is a example, there are many others (LESS, PostCSS, Stylus)

# Intro to SASS

- Syntactically Awesome Style Sheets
- Adds more CSS features to make it easier to scale and use
- SCSS (Sassy CSS) is what's called a Superset of CSS
- Browser doesn't need to understand SASS, because the tool compiles it down to vanilla CSS before you publish

# Features

## Variables

- Variables - you can store CSS values into variables and reuse them
- colors, sizes, etc can be stored
- uses $ syntax

## Nesting

- Keep related or nested styles together in your code!

## Partials and Imports

- Use underscore to create partial files (like "\_brand.scss") and import them with special import syntax where needed (@import "brand")

# @extend

- create base styles and then extend them into other styles to add styling!

# Mixins

- Mixins are like functions that return styles
- can add parameters to make it reusable

- [MDN: CSS Preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
- [What is the viewport?](https://www.w3schools.com/css/css_rwd_viewport.asp)
- [W3 Schools: Meta Tags](https://www.w3schools.com/tags/tag_meta.asp)
- [MDN: CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Sass CLI](https://sass-lang.com/documentation/cli/dart-sass)
