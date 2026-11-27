# Browser rendering

## Visual overview

![HTML and CSS feed document and style structures, followed by layout, paint and compositing.](/diagrams/browser-pipeline.svg)

This is a simplified pipeline. Layout computes geometry, paint records visual content, and compositing combines layers. A change need not repeat every stage; browser implementations decide what work is necessary. Start with [HTML](/knowledge/html), [CSS](/knowledge/css), and the [DOM](/knowledge/dom).

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 1320–1472](/research?document=interview&start=1320&end=1472). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Browser Rendering and DOM

**Q1.102. What is the DOM?**

Answer: DOM stands for Document Object Model. It is a programming interface that represents an HTML document as a tree of objects.

JavaScript can use the DOM to access, modify, create and remove HTML elements dynamically.

For example, when a user clicks an Add Task button, JavaScript can create a new task element and display it without reloading the page.

**Q1.103. What is the difference between HTML and DOM?**

Answer:

- HTML is the markup language used to define the structure of a webpage.
- DOM is the object-based representation of that document created by the browser.

HTML defines the initial page structure, while JavaScript can modify the DOM dynamically without changing the original HTML source file.

**Q1.104. How does a browser render a webpage?**

Answer: The browser follows several steps to convert HTML, CSS and other resources into visible pixels.

1. Parses HTML and builds the DOM tree.
2. Parses CSS and builds the CSSOM tree.
3. Combines them to create the render tree.
4. Performs layout calculations.
5. Paints elements.
6. Composites the layers and displays the result.

JavaScript can modify the DOM and CSSOM, which may cause parts of the rendering process to run again.

**Q1.105. What is the difference between DOM and CSSOM?**

Answer:

- DOM: Represents the structure and content of an HTML document.
- CSSOM: Represents the CSS rules and styles associated with the document.

The browser combines the information from both to determine how visible elements should be rendered.

**Q1.106. What is the difference between reflow and repaint?**

Answer:

- Reflow: Happens when the browser recalculates the layout or geometry of elements.
- Repaint: Happens when the browser redraws the appearance of elements without necessarily recalculating their layout.

For example, changing an element's width may cause reflow, while changing its background color generally causes repaint.

Frequent layout changes can reduce performance, so we should avoid unnecessary DOM updates.


**Q1.107. How do you select HTML elements using JavaScript?**

Answer: JavaScript provides several DOM selection methods.

Common methods include:

```javascript
document.getElementById("header");
document.querySelector(".card");
document.querySelectorAll("p");
document.getElementsByClassName("item");
document.getElementsByTagName("div");
```

`querySelector()` returns the first matching element, while `querySelectorAll()` returns a static NodeList containing all matching elements.

**Q1.108. How do you create and modify DOM elements using JavaScript?**

Answer: JavaScript provides DOM methods to create elements, update their content and attributes, and insert them into the document.

Example:

```javascript
const heading = document.createElement("h1");

heading.textContent = "Hello World";

document.body.appendChild(heading);
```

This creates a heading and adds it to the webpage.

**Q1.109. What is the difference between **`innerHTML`** and **`textContent`**?**

Answer:

- `innerHTML` gets or sets the HTML markup inside an element.
- `textContent` gets or sets the text content without interpreting it as HTML.

For example, assigning `<b>Hello</b>` to `innerHTML` creates bold text, while assigning it to `textContent` displays the characters as text.

Interview point: Avoid inserting untrusted user input through `innerHTML` because it can create cross-site scripting vulnerabilities.


**Q1.110. What is **`getComputedStyle()`**?**

Answer: `getComputedStyle()` is a browser API that returns the final computed CSS styles of an element after applying stylesheets, inheritance and the CSS cascade.

Example:

```javascript
const element = document.querySelector(".card");

const styles = getComputedStyle(element);

console.log(styles.backgroundColor);
```

It is useful when we need to inspect the actual styles applied by the browser.

**Q1.111. What is **`getBoundingClientRect()`**?**

Answer: `getBoundingClientRect()` returns the size and position of an element relative to the browser's viewport.

It provides properties such as `top`, `left`, `right`, `bottom`, `width` and `height`.

It is useful for positioning tooltips, overlays and inspection panels.

**Q1.112. What is MutationObserver?**

Answer: MutationObserver is a browser API that allows JavaScript to observe changes in the DOM.

It can detect changes such as added elements, removed elements and modified attributes.

For example, in a DOM inspection tool, MutationObserver can detect when a webpage dynamically adds new components.

**Q1.113. What is Shadow DOM?**

Answer: Shadow DOM is a browser feature that allows us to create an encapsulated DOM subtree inside a host element.

It helps isolate the internal HTML and CSS of a component from the surrounding webpage.

For example, a Chrome extension can use Shadow DOM for its floating inspection panel so that the website's CSS does not easily interfere with the extension's styles.

Interview point: Shadow DOM provides encapsulation, not a complete security boundary.

**Q1.114. What are Web Components?**

Answer: Web Components are a collection of browser technologies that allow developers to create reusable custom HTML elements.

Their main technologies include:

- Custom Elements.
- Shadow DOM.
- HTML Templates.

For example, we can create a reusable `<user-card>` element that displays user information.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
