# W04D04 - Responsive Design and SASS

### To Do

- [ ] Responsive Design
- [ ] Viewport Meta Tag
- [ ] Percentages
- [ ] `max-width` and `min-width`
- [ ] Viewport Height/Width `vh`/`vw`
- [ ] Based on Font-size `em`/`rem`
- [ ] Media Queries
- [ ] CSS Preprocessors
- [ ] Intro to Sass/SCSS

# Responsive Design

- https://en.wikipedia.org/wiki/Responsive_web_design
- an approach to web design that makes pages render well on a variety of devices and screen sizes
- web is unique for its diversity of screen sizes
- smallest screen sizes out there might be 320px/375px
- largest might be 3850px?? ultrawide - 1 order of magnitude
- Mobile development is especially tricky - the screens are small
- CSS give us a lot of tools to build responsive sites

# Chrome Dev Tools

- Responsive Mode
  - Scale the window as needed
  - Dimensions
  - touch mode
  - scaling

# Relative Units

- across CSS we have ways of defining size (pixels, inches - static units)
- We can use dynamic units / relative units which change depending on the context
- % units
- min and max widths / heights
- vh vw
- ems and rems
- if font-size is 16px. 1em = 16px, 1rem = 16px

:00

# Media Queries

- A CSS feature that allows us to change CSS based on device/size
- Media queries have two parts
  - Media Type - screen, print, speech
  - Media Feature - size, orientation, aspect-ratio

# Tooling

- In early days of the internet - documents connected with hyperlinks - HTML documents
- as we added vanilla JavaScript and CSS, those were just consumed as is
- as we started building more complex applications, scaling became a challenge.

* Tooling helps with this
* Tooling is when we add a step between what we write and what the browser consumes
* allows us to use more complex or useful, scalable features of development without making it harder for the browser to consume
* We're going to learn SASS today, which is a CSS Tool

# CSS Preprocessor

- CSS Preprocessor ( a type of tool ) - lets you write CSS with something called a domain-specific language
- https://en.wikipedia.org/wiki/Domain-specific_language
- SASS tool has a domain specific language called SASS, SASSY CSS
- Regular CSS extended with Sassy features
- There is a SASS compiler which consumes SASSY CSS and compiles it down to CSS
- SASS is one of many, also includes LESS, PostCSS, Stylus
- https://sass-lang.com/
