# CSS

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 770–1275](/research?document=interview&start=770&end=1275). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## CSS Fundamentals and Layout

**Q1.63. What is CSS?**

Answer: CSS stands for Cascading Style Sheets. It is used to control the appearance and layout of HTML elements.

It handles colors, fonts, spacing, positioning, animations and responsive designs.

For example, HTML creates a login form, while CSS makes it visually attractive and properly aligned.

**Q1.64. Why do we use CSS?**

Answer: CSS separates the presentation of a webpage from its HTML structure.

It helps us:

- Maintain a consistent design.
- Reuse styles across multiple pages.
- Create responsive layouts.
- Control spacing, colors and typography.
- Maintain and update the design more easily.

**Q1.65. What is the difference between CSS and CSS3?**

Answer: CSS3 refers to the evolution of CSS through modular specifications that introduced many modern styling features.

It includes features such as:

- Flexbox and Grid.
- Transitions and animations.
- Media queries.
- Gradients.
- 2D and 3D transformations.

Modern CSS continues to evolve through independent modules rather than one single version called CSS4.

**Q1.66. What is the basic syntax of CSS?**

Answer: A CSS rule contains a selector and a declaration block. The declaration block contains properties and their values.

Example:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

Here, `h1` is the selector, `color` is a property and `blue` is its value.

**Q1.67. What are the different ways to apply CSS to HTML?**

Answer: There are three main ways:

1. Inline CSS: Written inside an element's `style` attribute.
2. Internal CSS: Written inside a `<style>` element.
3. External CSS: Written in a separate `.css` file and linked using `<link>`.

Example of external CSS:

```html
<link rel="stylesheet" href="style.css">
```

External CSS is generally preferred for larger applications because it is easier to reuse and maintain.

**Q1.68. How do you include one CSS file inside another CSS file?**

Answer: We can use the `@import` rule to include another stylesheet.

Example:

```css
@import url("theme.css");
```

However, using HTML `<link>` elements is often preferable for loading stylesheets because it allows the browser to discover them earlier.

**Q1.69. How do you add comments in CSS?**

Answer: CSS comments are written using `/*` and `*/`.

Example:

```css
/* This is a CSS comment */

h1 {
  color: blue;
}
```

Comments are ignored by the browser when applying styles.

**Q1.70. What are CSS selectors?**

Answer: CSS selectors identify the HTML elements to which we want to apply styles.

Common types include:

- Element selector: `p`
- Class selector: `.container`
- ID selector: `#header`
- Universal selector: `*`
- Attribute selector: `input[type="text"]`

For example, `.card` selects all elements with the class `card`.

**Q1.71. What is CSS specificity?**

Answer: CSS specificity determines which CSS rule is applied when multiple rules target the same element.

The general priority is:

1. Inline styles.
2. ID selectors.
3. Class, attribute and pseudo-class selectors.
4. Element and pseudo-element selectors.

The `!important` declaration can override normal cascade priorities, but it should be used carefully.

**Q1.72. What is CSS inheritance?**

Answer: CSS inheritance means some CSS properties are automatically passed from a parent element to its child elements.

For example, if I set `color: blue` on a parent container, its child text elements usually inherit that color.

Properties such as `color` and `font-family` are commonly inherited, while `margin` and `padding` are not inherited by default.

**Q1.73. What are CSS combinators?**

Answer: CSS combinators describe relationships between elements and help us select elements based on their position in the HTML structure.

Common combinators are:

- Descendant (`A B`): Selects all matching descendants.
- Child (`A > B`): Selects direct children.
- Adjacent sibling (`A + B`): Selects the immediately following sibling.
- General sibling (`A ~ B`): Selects subsequent matching siblings.

**Q1.74. What are pseudo-classes in CSS?**

Answer: Pseudo-classes select elements based on their state or position.

Examples:

- `:hover` selects an element when the pointer is over it.
- `:focus` selects an element when it receives focus.
- `:first-child` selects the first child.
- `:checked` selects checked form controls.

For example, `button:hover` changes a button's appearance when the user hovers over it.

**Q1.75. What are pseudo-elements in CSS?**

Answer: Pseudo-elements allow us to style a specific part of an element or insert generated content.

Common examples include:

- `::before`
- `::after`
- `::first-letter`
- `::first-line`
- `::placeholder`

For example, `p::first-letter` can style the first letter of every paragraph.

**Q1.76. What is the CSS box model?**

Answer: The CSS box model explains how the browser calculates the space occupied by an HTML element.

It contains four parts:

1. Content: The actual text or image.
2. Padding: Space between content and border.
3. Border: The boundary around the element.
4. Margin: Space outside the border.

For example, if a card has padding of 20px, its content gets 20px of internal spacing from the border.

**Q1.77. What is the difference between margin and padding?**

Answer:

- Margin: Creates space outside an element's border.
- Padding: Creates space between the content and its border.

For example, margin separates two cards, while padding creates space inside a card around its text.

**Q1.78. What is the **`box-sizing`** property in CSS?**

Answer: The `box-sizing` property determines how the browser calculates an element's total width and height.

There are two common values:

- `content-box`: Width and height apply only to the content.
- `border-box`: Width and height include content, padding and border.

Example:

```css
* {
  box-sizing: border-box;
}
```

Using `border-box` makes layout calculations easier because padding and borders are included in the declared dimensions.

**Q1.79. What are the different CSS display properties?**

Answer: The `display` property controls how an element participates in the layout.

Common values include:

- `block`: Starts on a new line and normally takes available width.
- `inline`: Stays within the current line.
- `inline-block`: Stays inline but supports width and height.
- `flex`: Creates a flex container.
- `grid`: Creates a grid container.
- `none`: Removes the element from the layout.

**Q1.80. What does **`display: inline-block`** do?**

Answer: `inline-block` allows an element to remain within the current line while still supporting width, height, margin and padding in a more predictable way than a normal inline element.

It is useful when we want multiple small elements to appear next to each other while controlling their dimensions.

**Q1.81. What is CSS Flexbox?**

Answer: Flexbox is a CSS layout system designed to arrange elements along one main axis, either horizontally or vertically.

It makes alignment, spacing and distribution of elements easier.

For example, I can use Flexbox to center a login form or arrange navigation links in a horizontal row.

**Q1.82. What is CSS Grid?**

Answer: CSS Grid is a two-dimensional layout system that allows us to arrange elements using rows and columns.

It is useful for complex layouts such as dashboards, galleries and webpage sections.

For example, I can use Grid to create a dashboard with a sidebar, header and multiple content cards.

**Q1.83. What is the difference between Flexbox and Grid?**

Answer:

| Flexbox                                            | Grid                                            |
| -------------------------------------------------- | ----------------------------------------------- |
| Primarily one-dimensional                          | Two-dimensional                                 |
| Works along a row or column                        | Works with rows and columns together            |
| Useful for navigation bars and component alignment | Useful for complete page layouts and dashboards |
| Content often determines the layout                | Layout can be defined using explicit tracks     |

Both can be used together in the same application.

**Q1.84. What is CSS positioning?**

Answer: The `position` property controls how an element is positioned within a webpage.

Its main values are:

- `static`: Default positioning.
- `relative`: Positioned relative to its normal position.
- `absolute`: Positioned relative to its nearest positioned ancestor.
- `fixed`: Positioned relative to the viewport.
- `sticky`: Behaves normally until a scroll threshold is reached, then sticks.

For example, a fixed navigation button can remain visible while the user scrolls.

**Q1.85. Can we overlap elements using CSS?**

Answer: Yes, we can overlap elements using positioning, negative margins, CSS transforms or Grid.

The `z-index` property controls stacking order when the elements participate in compatible stacking contexts.

For example, we can position a notification badge over the corner of a profile image.

**Q1.86. What is CSS overflow?**

Answer: The `overflow` property controls what happens when content is larger than its container.

Common values are:

- `visible`: Content can extend outside the container.
- `hidden`: Extra content is clipped.
- `scroll`: Displays scrolling controls.
- `auto`: Adds scrolling when required.

For example, a chat panel can use `overflow-y: auto` to allow vertical scrolling through messages.

**Q1.87. What is the CSS float property?**

Answer: The `float` property moves an element towards the left or right side of its container, allowing surrounding text to flow around it.

It was commonly used for layouts in older websites but is now mainly useful for text wrapping around images.

Modern layouts generally use Flexbox or Grid.

**Q1.88. How can you vertically center text or an element using CSS?**

Answer: One of the simplest methods is to use Flexbox.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

Here, `justify-content` aligns content along the main axis, while `align-items` aligns it along the cross axis.

**Q1.89. How can you center an image using CSS?**

Answer: We can use Flexbox to center an image horizontally and vertically.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

We can also use `margin: auto` for horizontal centering when the image or element has an appropriate block layout and width.

**Q1.90. What is responsive web design?**

Answer: Responsive web design means creating websites that automatically adjust their layout and appearance according to the user's screen size and device.

We commonly use:

- Flexible layouts.
- CSS media queries.
- Relative units.
- Responsive images.
- Flexbox and Grid.

For example, a desktop dashboard with a sidebar can display a collapsible navigation menu on mobile devices.

**Q1.91. How can you make a website responsive using CSS?**

Answer: We can make websites responsive using media queries, flexible layouts and relative units.

Example:

```css
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

This changes a two-column layout into a single-column layout on smaller screens.

**Q1.92. What are media queries in CSS?**

Answer: Media queries allow us to apply CSS rules based on conditions such as screen width, orientation and device characteristics.

Example:

```css
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
```

This hides the sidebar when the viewport width is 768px or smaller.

**Q1.93. What does the **`float`** property do, and how is it different from Flexbox?**

Answer: Float moves an element to the left or right and allows text to wrap around it. Flexbox creates a flexible layout that controls the alignment and distribution of child elements.

Float is mainly useful for wrapping text around images, while Flexbox is better for modern component layouts.

**Q1.94. What does the alpha value in RGBA represent?**

Answer: RGBA stands for Red, Green, Blue and Alpha.

The alpha value controls the transparency of a color.

- `0`: Fully transparent.
- `0.5`: 50% opacity.
- `1`: Fully opaque.

Example:

```css
background: rgba(255, 0, 0, 0.5);
```

This creates a semi-transparent red background.

**Q1.95. What are HSL colors in CSS?**

Answer: HSL stands for Hue, Saturation and Lightness.

- Hue: Represents the color, usually from 0° to 360°.
- Saturation: Controls color intensity.
- Lightness: Controls brightness.

Example:

```css
color: hsl(120, 100%, 30%);
```

HSL is useful because it makes adjusting color shades more intuitive.

**Q1.96. What are CSS border properties?**

Answer: CSS border properties control the appearance of an element's border.

The main properties are:

- `border-width`: Controls thickness.
- `border-style`: Controls appearance, such as solid, dashed or dotted.
- `border-color`: Controls the border color.
- `border-radius`: Creates rounded corners.

Example:

```css
.card {
  border: 1px solid gray;
  border-radius: 8px;
}
```

**Q1.97. What are CSS transitions?**

Answer: CSS transitions allow property changes to happen smoothly over a specified duration.

For example:

```css
button {
  background: blue;
  transition: background 0.3s ease;
}

button:hover {
  background: green;
}
```

The background color changes smoothly when the user hovers over the button.

**Q1.98. What are CSS animations?**

Answer: CSS animations allow elements to change their styles over time without requiring JavaScript.

They are generally created using `@keyframes` and the `animation` property.

They are useful for loading indicators, moving elements and visual effects.

**Q1.99. What are CSS gradients?**

Answer: CSS gradients create smooth transitions between two or more colors without requiring image files.

Common types are:

- Linear gradient.
- Radial gradient.
- Conic gradient.

Example:

```css
background: linear-gradient(to right, blue, purple);
```

**Q1.100. What are 2D and 3D transformations in CSS?**

Answer: CSS transformations allow us to rotate, scale, move or skew elements.

- 2D transformations work along the X and Y axes.
- 3D transformations also support depth along the Z axis.

Examples include `rotate()`, `scale()`, `translate()` and `rotateY()`.

They are commonly used for interactive cards and animations.

**Q1.101. What is the difference between CSS transitions and animations?**

Answer:

- Transitions smoothly change a property when a state changes, such as when a user hovers over a button.
- Animations use keyframes to define multiple stages of movement or styling and can run automatically.

Transitions are useful for simple interactions, while animations are better for more complex effects.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
