# HTML

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 419–769](/research?document=interview&start=419&end=769). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## HTML Fundamentals

**Q1.33. What is HTML?**

Answer: HTML stands for HyperText Markup Language. It is the standard markup language used to define the structure and content of webpages.

It provides elements such as headings, paragraphs, images, links, forms and buttons.

For example, HTML defines where a login form and its input fields appear on a webpage.

**Q1.34. What is the basic structure of an HTML document?**

Answer: An HTML document generally contains a DOCTYPE declaration, an HTML root element, a head section and a body section.

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>Welcome!</p>
</body>
</html>
```

The head contains metadata and linked resources, while the body contains the visible webpage content.

**Q1.35. What is the purpose of the DOCTYPE declaration?**

Answer: The `<!DOCTYPE html>` declaration tells the browser to use standards mode when rendering an HTML5 document.

It helps browsers interpret HTML and CSS according to modern web standards.

It is a declaration, not an HTML element or tag.

**Q1.36. What is the difference between an HTML tag and an HTML element?**

Answer:

- Tag: The markup used to define an element, such as `<p>` or `</p>`.
- Element: The complete structure, including its opening tag, content and closing tag.

For example, `<p>Hello World</p>` is an HTML element, while `<p>` is its opening tag.

**Q1.37. What are HTML attributes?**

Answer: HTML attributes provide additional information or configuration for HTML elements. They are generally written inside the opening tag as name-value pairs.

Example:

```html
<a href="https://example.com">Visit</a>
```

Here, `href` is the attribute, and its value is the destination URL.

**Q1.38. What are heading tags in HTML?**

Answer: HTML provides six heading elements, from `<h1>` to `<h6>`.

- `<h1>` represents the highest-level heading.
- `<h6>` represents the lowest-level heading.

They organize webpage content into a meaningful hierarchy and improve readability and accessibility.

**Q1.39. What is semantic HTML?**

Answer: Semantic HTML means using HTML elements according to their actual meaning rather than using generic elements everywhere.

For example, we use `<header>`, `<nav>`, `<main>`, `<article>` and `<footer>` to describe different sections of a webpage.

It improves accessibility, code readability and helps search engines understand the page structure.

**Q1.40. What is the difference between semantic and non-semantic HTML elements?**

Answer:

- Semantic elements clearly describe their purpose, such as `<article>`, `<nav>`, `<header>` and `<footer>`.
- Non-semantic elements do not describe their specific meaning, such as `<div>` and `<span>`.

Semantic elements make HTML easier to understand and improve accessibility.

**Q1.41. What is the difference between block-level and inline elements?**

Answer:

| Block-level elements                       | Inline elements                                         |
| ------------------------------------------ | ------------------------------------------------------- |
| Normally start on a new line               | Remain within the current line                          |
| Usually occupy the available width         | Occupy only the required width                          |
| Can have width and height applied normally | Width and height generally do not apply in the same way |
| Examples: `div`, `p`, `section`            | Examples: `span`, `a`, `strong`                         |

CSS can change an element's default display behavior.

**Q1.42. What is the difference between **`<div>`** and **`<span>`**?**

Answer:

- `<div>` is a generic block-level container used to group larger sections of content.
- `<span>` is a generic inline container used to group or style smaller portions of text.

For example, I might use a `<div>` for a card and a `<span>` to highlight one word inside that card.

**Q1.43. What is the difference between **`id`** and **`class`** in HTML?**

Answer:

- `id`: Identifies a particular element and should be unique within the document.
- `class`: Groups multiple elements so they can share styling or behavior.

Example:

```html
<div id="header">Header</div>

<p class="highlight">Hello</p>
<p class="highlight">Welcome</p>
```

In CSS, IDs are selected using `#`, while classes are selected using `.`.

**Q1.44. What are void elements in HTML?**

Answer: Void elements are HTML elements that cannot contain child content and do not have closing tags.

Examples include:

- `<img>`
- ` · `
- `<hr>`
- `<input>`
- `<meta>`
- `<link>`

For example, `<img src="photo.jpg" alt="Photo">` displays an image without needing a closing tag.

**Q1.45. What is the difference between container elements and empty elements?**

Answer:

- Container elements can contain text or other HTML elements. For example, `<div>`, `<p>` and `<section>`.
- Empty or void elements cannot contain child content. For example, `<img>`, ` · ` and `<input>`.

**Q1.46. What is an anchor tag in HTML?**

Answer: The `<a>` tag creates hyperlinks that allow users to navigate to another webpage, file or section of the same webpage.

Example:

```html
<a href="https://example.com">Visit Website</a>
```

The `href` attribute specifies the destination.

**Q1.47. How can you redirect a user to a particular section of the same webpage?**

Answer: We can use an anchor tag with the ID of the target section.

Example:

```html
<a href="#contact">Contact Us</a>

<section id="contact">
  <h2>Contact Us</h2>
</section>
```

When the user clicks the link, the browser navigates to the section with that ID.

**Q1.48. How can you open a hyperlink in a new browser tab?**

Answer: We can use the `target="_blank"` attribute.

Example:

```html
<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer">
  Open Website
</a>
```

The `rel` attributes provide additional security and privacy protection when opening external links.

**Q1.49. What are **`<b>`** and **`<strong>`** tags? Are they the same?**

Answer: Both elements are commonly displayed in bold, but their meanings are different.

- `<b>` draws attention to text without indicating additional importance.
- `<strong>` indicates that the text has strong importance or urgency.

For example, I would use `<strong>` for an important warning because it communicates meaning to assistive technologies.

**Q1.50. What is the difference between **`<i>`** and **`<em>`** tags?**

Answer: Both are generally displayed in italics, but their purposes differ.

- `<i>` represents text in an alternate voice or category, such as a technical term.
- `<em>` represents emphasized text.

For example, `<em>Please read carefully</em>` communicates emphasis.

**Q1.51. How do you add comments in HTML?**

Answer: HTML comments are written using `<!--` and `-->`.

Example:

```html
<!-- This is an HTML comment -->
<p>Hello World</p>
```

Comments are not displayed as webpage content, although they remain visible in the page source.

**Q1.52. What are meta tags in HTML?**

Answer: Meta tags provide information about an HTML document and are placed inside the `<head>` section.

They can define character encoding, viewport settings, page descriptions and other metadata.

Example:

```html
<meta charset="UTF-8">
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">
<meta name="description"
      content="My portfolio website">
```

They help browsers and search engines understand webpage information.

**Q1.53. What is the difference between HTML and XHTML?**

Answer:

- HTML is the standard markup language used to structure webpages and follows HTML parsing rules.
- XHTML is an XML-based form of HTML with stricter syntax requirements.

In XHTML, elements must be properly nested, tags must be lowercase and attributes must be quoted. Unlike ordinary HTML, XHTML documents must also follow XML well-formedness rules.

**Q1.54. What is the difference between HTML4 and HTML5?**

Answer: HTML5 introduced several improvements over earlier HTML versions.

- HTML5 provides semantic elements such as `<header>`, `<nav>` and `<article>`.
- It supports native audio and video elements.
- It provides SVG and Canvas support.
- It introduced browser APIs such as Web Storage and Web Workers.
- It improved form controls and multimedia support.

These features reduce the need for external plugins and make modern web development easier.

**Q1.55. What are the audio and video elements in HTML5?**

Answer: HTML5 provides `<audio>` and `<video>` elements to embed media directly into webpages without requiring external plugins.

Example:

```html
<audio controls src="music.mp3"></audio>

<video controls width="400">
  <source src="video.mp4" type="video/mp4">
</video>
```

The `controls` attribute provides built-in playback controls.

**Q1.56. What is SVG in HTML?**

Answer: SVG stands for Scalable Vector Graphics. It is an XML-based format used to create vector graphics such as icons, shapes and diagrams.

Unlike raster images, SVG graphics can be resized without losing quality.

For example, we can use SVG for logos and responsive icons.

**Q1.57. What is Canvas in HTML5?**

Answer: The Canvas element provides a drawing area where JavaScript can create graphics dynamically.

It is useful for games, animations, charts and image manipulation.

Unlike SVG, Canvas primarily uses pixel-based drawing rather than maintaining individual graphics as DOM elements.

**Q1.58. What is MathML in HTML5?**

Answer: MathML stands for Mathematical Markup Language. It is used to represent mathematical expressions and equations in webpages.

It helps browsers display mathematical notation in a structured way and can improve accessibility for mathematical content.

**Q1.59. What are HTML forms?**

Answer: HTML forms collect information from users and submit it for processing.

Common form elements include:

- `<form>`: Defines the form.
- `<input>`: Accepts user input.
- `<label>`: Describes an input.
- `<textarea>`: Accepts longer text.
- `<select>`: Provides dropdown options.
- `<button>`: Performs an action or submits the form.

For example, a registration form collects a user's name, email and password.

**Q1.60. What is the difference between GET and POST in HTML forms?**

Answer: GET and POST are HTTP methods that can be used when submitting forms.

- GET: Sends data through the URL query string and is generally used to retrieve information.
- POST: Sends data in the request body and is commonly used to submit information or create resources.

Passwords and sensitive information should not be sent through GET query parameters. However, POST alone does not provide encryption; HTTPS is still required.

**Q1.61. What is multipart/form-data?**

Answer: `multipart/form-data` is an HTTP form encoding type used to submit multiple parts of data, especially files.

It allows a request to contain text fields and binary file content.

For example, when a user uploads a resume through a recruitment portal, the frontend can send it using `multipart/form-data`.

**Q1.62. What are the different ways to add JavaScript to HTML?**

Answer: JavaScript can be included in HTML in three common ways:

1. Inline JavaScript: Written directly inside an HTML event attribute.
2. Internal JavaScript: Written inside a `<script>` element.
3. External JavaScript: Written in a separate `.js` file and included using the `src` attribute.

Example:

```html
<script src="app.js" defer></script>
```

External JavaScript is generally preferred because it improves maintainability and code organization.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
