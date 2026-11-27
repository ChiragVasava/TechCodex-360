# Full-Stack Software Engineer — Consolidated Interview Handbook

> One learning path from three selected documents. Study each concept in its primary phase; later applications link back to that lesson. Java comes before Python, coding practice begins in Phase 7, and databases precede backend frameworks.

## Learning order


**Stage 1 — Programming and Web Foundations**

1. [Web Foundations, HTML5, CSS3 and Tailwind CSS](#phase-1)
2. [Git, GitHub and Team Collaboration](#phase-2)
3. [JavaScript in Depth](#phase-3)
4. [TypeScript in Depth](#phase-4)
5. [Java and Object-Oriented Design](#phase-5)
6. [Python in Depth](#phase-6)
7. [Coding Interview Practice — Java, Python and JavaScript](#phase-7)

**Stage 2 — Database Fundamentals**

8. [SQL, DBMS, PostgreSQL, MySQL, SQLite and ORMs](#phase-8)
9. [MongoDB, NoSQL, Redis and Caching](#phase-9)

**Stage 3 — Frontend and Backend Development**

10. [React.js and Next.js](#phase-10)
11. [Node.js, Express.js, RESTful APIs and Microservices](#phase-11)
12. [FastAPI and Python Backend Development](#phase-12)

**Stage 4 — Security, Testing and Debugging**

13. [JWT Authentication, Authorization and Security](#phase-13)
14. [Testing, PyTest, Playwright and Postman](#phase-14)
15. [Debugging, Browser DevTools and Production Incidents](#phase-15)

**Stage 5 — Deployment and Real-World Applications**

16. [Linux, AWS, Docker, GitHub Actions and CI/CD](#phase-16)
17. [Applied Business Workflows](#phase-17)

**Stage 6 — Project and Interview Preparation**

18. [Project Architecture and Technical Defence](#phase-18)
19. [Resume, Learning Strategy and HR Preparation](#phase-19)
20. [Final Mock Interview and Readiness Check](#phase-20)

## How to use this handbook

Follow the phases in order. Definitions and general interview answers live with their owning skill. A later project or business workflow uses that skill without teaching its definition again. Java, Python and JavaScript comparisons retain language-specific behavior; SQL exercises stay with databases. Links in later phases are references, not new study assignments.

The source material contains historical project and application notes. Project claims are not newly verified against repositories; see the explicit UniNest discrepancy table. Original source documents are preserved. Framework examples should be matched to the versions used by the project you present.

## Resume skill coverage

| Category | Skills | Primary phases |
| --- | --- | --- |
| Languages | JavaScript, TypeScript, Java, Python, SQL | [3](#phase-3), [4](#phase-4), [5](#phase-5), [6](#phase-6), [8](#phase-8) |
| Frontend | HTML5, CSS3, Tailwind CSS, React.js, Next.js | [1](#phase-1), [10](#phase-10) |
| Backend and APIs | Node.js, Express.js, RESTful APIs, Microservices, FastAPI | [11](#phase-11), [12](#phase-12) |
| Databases and ORM | PostgreSQL, MySQL, SQLite, Prisma ORM, SQLAlchemy, MongoDB, Redis | [8](#phase-8), [9](#phase-9) |
| Security | JWT Authentication, authorization, web protections | [13](#phase-13) |
| Cloud and DevOps | Git, GitHub, Linux, AWS, Docker, GitHub Actions, CI/CD Pipelines | [2](#phase-2), [16](#phase-16) |
| Testing and tools | PyTest, Playwright, Postman, Browser DevTools | [14](#phase-14), [15](#phase-15) |

<a id="phase-1"></a>

## Phase 1 — Web Foundations, HTML5, CSS3 and Tailwind CSS

**Objective:** Understand browser requests, semantic HTML, responsive CSS and utility styling.

**Sections:** [Introduction to Web Development](#phase-1-section-1) · [Internet, DNS and Networking Fundamentals](#phase-1-section-2) · [HTTP and HTTPS](#phase-1-section-3) · [HTML Fundamentals](#phase-1-section-4) · [CSS Fundamentals and Layout](#phase-1-section-5) · [Tailwind CSS — Utility Styling After CSS Foundations](#phase-1-section-6) · [Browser Rendering and DOM](#phase-1-section-7) · [Browser Storage](#phase-1-section-8) · [Browser and Frontend Practical Concepts](#phase-1-section-9) · [Semantic figures and layout-free outlines](#phase-1-section-10) · [Chrome extension platform and browser isolation](#phase-1-section-11)

<a id="phase-1-section-1"></a>

### Introduction to Web Development

**Q1.1. What is web development?**

Answer: Web development is the process of building websites and web applications that users access through a browser. It involves three main areas:

- Frontend: The user interface that users see and interact with.
- Backend: Handles business logic, authentication and API requests.
- Database: Stores and manages application data.

For example, in a campus recruitment application, React displays placement drives, Express handles applications, and PostgreSQL stores student and application information.

**Q1.2. What is the difference between a website and a web application?**

Answer:

- Website: Mainly provides information, such as a company landing page or blog.
- Web application: Allows users to perform interactive operations, such as Gmail, Google Docs or online banking.

The difference is not always strict because modern websites can also have application-like features.

**Q1.3. What are the three main technologies used in frontend development?**

Answer: The three main technologies are HTML, CSS and JavaScript.

- HTML defines the structure of a webpage.
- CSS controls its appearance, layout and responsiveness.
- JavaScript adds functionality and interactivity.

For example, HTML creates a login button, CSS styles it, and JavaScript handles the button click.

**Q1.4. What is full-stack development?**

Answer: Full-stack development means working on both the frontend and backend of a web application, including database integration. A full-stack developer understands how user interfaces, APIs, server-side logic and databases work together.

For example, building a complete login feature involves creating the login form, developing the login API and checking user credentials in the database.

**Q1.5. What is the difference between frontend and backend development?**

Answer:

- Frontend: Runs mainly in the browser and handles the user interface, interactions and presentation.
- Backend: Runs on the server and handles business logic, authentication, database operations and API responses.

For example, displaying a student's placement applications is frontend work, while retrieving those applications from PostgreSQL is backend work.

**Q1.6. What is the difference between client-side and server-side programming?**

Answer: Client-side programming runs in the user's browser and handles interactions, form validation and DOM updates. Server-side programming runs on the server and handles authentication, business logic and database operations.

For example, JavaScript can check whether an email field is empty, but the backend must independently validate the email before saving user data.

**Q1.7. What is client-server architecture?**

Answer: Client-server architecture is a model in which a client sends requests to a server, and the server processes those requests and returns responses.

For example, when a student logs in:

1. The browser sends login credentials.
2. The backend receives and validates them.
3. The backend checks the user in the database.
4. The backend verifies the password.
5. The server returns an authentication response.
6. The frontend updates the interface.

The client and server communicate through a network, commonly using HTTP or HTTPS.

**Q1.8. What is a static website and a dynamic website?**

Answer:

- Static website: Displays fixed content that generally remains the same until someone updates the files.
- Dynamic website: Generates or updates content based on user actions, database information or other conditions.

For example, a simple portfolio page is usually static, while a recruitment portal displaying personalized job applications is dynamic.

<a id="phase-1-section-2"></a>

### Internet, DNS and Networking Fundamentals

**Q1.9. What is the internet?**

Answer: The internet is a worldwide network of interconnected computers and devices that communicate using standard networking protocols.

It allows users to access websites, exchange information, send emails and use online services.

For example, when I open a website, my computer communicates with a remote server through the internet.

**Q1.10. What is the World Wide Web (WWW)?**

Answer: The World Wide Web is a collection of interconnected webpages and resources that we access through the internet using web browsers.

The internet is the underlying network, while the WWW is one of the services that runs on it.

For example, websites, hyperlinks and webpages are part of the WWW.

**Q1.11. What is the difference between the internet and the World Wide Web?**

Answer:

- Internet: The global network infrastructure connecting computers and devices.
- WWW: A system of webpages and resources accessed through that network.

Email, file transfers and online gaming can use the internet without necessarily using the WWW.

**Q1.12. What is a web browser?**

Answer: A web browser is software that allows users to access and interact with websites. It sends requests to web servers, receives resources and displays webpages.

Examples include Chrome, Firefox, Safari and Edge.

**Q1.13. What is a web server?**

Answer: A web server is software or a computer that receives HTTP requests and sends appropriate responses to clients.

It can serve static files such as HTML, CSS and images or forward requests to backend application logic.

For example, Nginx and Apache are popular web servers.

**Q1.14. What is an IP address?**

Answer: An IP address is a numerical address assigned to a device or network interface so it can communicate over an IP network.

There are two main versions:

- IPv4: Uses 32 bits, such as `192.168.1.1`.
- IPv6: Uses 128 bits, such as `2001:db8::1`.

An IP address helps identify where network data should be delivered.

**Q1.15. What is a domain name?**

Answer: A domain name is a human-readable address used to access a website instead of remembering its numerical IP address.

For example, `google.com` is easier to remember than its server's IP address.

DNS translates the domain name into the corresponding IP address.

**Q1.16. What is DNS?**

Answer: DNS stands for Domain Name System. It translates human-readable domain names into IP addresses so browsers can locate servers.

For example, when I enter `google.com`, DNS helps find the IP address associated with that domain.

I can think of DNS as the phonebook of the internet.

**Q1.17. How does DNS resolution work?**

Answer: When we enter a domain name, the following process generally happens:

1. The browser checks its DNS cache.
2. The operating system checks its DNS cache.
3. A DNS resolver is contacted if the address is not cached.
4. The resolver queries the DNS hierarchy when necessary.
5. The root server directs it towards the appropriate TLD server.
6. The TLD server points towards the authoritative DNS server.
7. The authoritative server provides the required DNS record.
8. The resolver returns the result to the client.

The browser can then use the returned IP address to connect to the server.

**Q1.18. What is a port number?**

Answer: A port number identifies a particular application or service running on a device.

An IP address identifies the device or network interface, while a port helps direct traffic to the correct service.

Common examples:

- HTTP: Port 80.
- HTTPS: Port 443.
- SSH: Port 22.
- PostgreSQL: Port 5432.
- MySQL: Port 3306.

**Q1.19. What is localhost?**

Answer: Localhost refers to the current computer, meaning the machine on which the application is running.

Its commonly used IPv4 address is `127.0.0.1`.

For example, when I run a Node.js application locally on port 3000, I can access it using `http://localhost:3000`.

**Q1.20. What is TCP?**

Answer: TCP stands for Transmission Control Protocol. It is a connection-oriented protocol that provides reliable and ordered delivery of data between devices.

It handles acknowledgements, retransmissions and flow control to help ensure that data reaches the destination correctly.

For example, HTTPS commonly uses TCP when running over HTTP/1.1 or HTTP/2.

**Q1.21. Explain the TCP three-way handshake.**

Answer: The TCP three-way handshake establishes a connection between a client and a server.

It involves three steps:

1. SYN: The client requests to establish a connection.
2. SYN-ACK: The server acknowledges the request and responds.
3. ACK: The client acknowledges the server's response.

After these steps, the TCP connection is established and data transfer can begin.

**Q1.22. What is UDP, and how is it different from TCP?**

Answer: UDP stands for User Datagram Protocol. It sends data without establishing a connection and does not guarantee delivery or ordering.

| TCP                           | UDP                                                        |
| ----------------------------- | ---------------------------------------------------------- |
| Connection-oriented           | Connectionless                                             |
| Reliable delivery             | No delivery guarantee                                      |
| Maintains data order          | No ordering guarantee                                      |
| More protocol overhead        | Lower protocol overhead                                    |
| Used by many web applications | Used in DNS queries, streaming and real-time communication |

For example, video calls may use UDP because low latency is often more important than retransmitting every lost packet.

**Q1.23. What is the difference between TCP and HTTP?**

Answer: TCP and HTTP work at different networking layers.

- TCP is a transport protocol responsible for reliable data delivery.
- HTTP is an application-layer protocol used for communication between clients and servers.

HTTP/1.1 and HTTP/2 commonly run over TCP, while HTTP/3 uses QUIC over UDP.

**Q1.24. What happens internally when you enter a URL in the browser?**

Answer: Several steps happen before the webpage appears:

1. The browser parses the URL.
2. It checks available caches.
3. DNS resolves the domain into an IP address.
4. The browser establishes a network connection.
5. For HTTPS, a TLS handshake establishes secure communication.
6. The browser sends an HTTP request.
7. The server processes the request.
8. The server returns an HTTP response.
9. The browser parses HTML and CSS.
10. It builds the page structure and renders the content.
11. JavaScript executes and handles interactions.

This entire process happens in the background whenever we access a website.

<a id="phase-1-section-3"></a>

### HTTP and HTTPS

**Q1.25. What is HTTP?**

Answer: HTTP stands for HyperText Transfer Protocol. It is an application-layer protocol used for communication between clients and web servers.

It follows a request-response model in which the client sends a request and the server returns a response.

For example, a browser sends an HTTP GET request to retrieve a webpage.

**Q1.26. What is HTTPS?**

Answer: HTTPS stands for HyperText Transfer Protocol Secure. It is HTTP communication protected using TLS encryption.

It provides three important security benefits:

1. Confidentiality: Protects data from being read by unauthorized parties.
2. Integrity: Helps detect unauthorized modifications to transmitted data.
3. Authentication: Helps verify the server's identity using digital certificates.

HTTPS is especially important when transmitting passwords, payment information and personal data.

**Q1.27. What is the difference between HTTP and HTTPS?**

Answer:

| HTTP                                             | HTTPS                                               |
| ------------------------------------------------ | --------------------------------------------------- |
| Communication is not encrypted by TLS            | Communication is protected by TLS                   |
| Default port is 80                               | Default port is 443                                 |
| Does not provide TLS-based server authentication | Supports server authentication through certificates |
| Data can be intercepted and read more easily     | Data is encrypted during transmission               |
| Less suitable for sensitive information          | Recommended for modern websites                     |

Interview point: HTTPS does not automatically make an application completely secure. The application must still implement proper authentication, authorization and input validation.

**Q1.28. What is SSL/TLS?**

Answer: TLS stands for Transport Layer Security. It is a security protocol that protects communication between a client and a server.

It provides encryption, authentication and data integrity.

SSL is its older predecessor and is now considered obsolete. Modern HTTPS uses TLS.

**Q1.29. What is an SSL/TLS certificate?**

Answer: A TLS certificate is a digital certificate that helps verify the identity of a website or server.

It contains information such as the domain name and the server's public key, and it is digitally signed by a certificate authority or another trusted issuer.

For example, when I visit an HTTPS website, the browser checks its certificate to verify the server's identity.

**Q1.30. What is an HTTP request and an HTTP response?**

Answer: An HTTP request is a message sent by a client to a server asking it to perform an operation or return a resource.

An HTTP response is the message returned by the server containing a status code, headers and sometimes a response body.

For example, when a frontend requests student information, the server may return a `200 OK` response containing student details in JSON format.

**Q1.31. What are HTTP status codes?**

Answer: HTTP status codes indicate the result of a client's request.

They are divided into five categories:

- 1xx: Informational responses.
- 2xx: Successful responses.
- 3xx: Redirection.
- 4xx: Client errors.
- 5xx: Server errors.

Common examples include:

| Status | Meaning               |
| ------ | --------------------- |
| 200    | OK                    |
| 201    | Created               |
| 204    | No Content            |
| 301    | Moved Permanently     |
| 302    | Found                 |
| 400    | Bad Request           |
| 401    | Unauthorized          |
| 403    | Forbidden             |
| 404    | Not Found             |
| 409    | Conflict              |
| 500    | Internal Server Error |
| 503    | Service Unavailable   |

**Q1.32. What is the difference between a browser and a JavaScript engine?**

Answer: A browser is a complete application that provides features such as webpage rendering, networking, storage and JavaScript execution.

A JavaScript engine is the component responsible for parsing and executing JavaScript code.

For example, Chrome uses the V8 JavaScript engine, while Firefox uses SpiderMonkey.

<a id="phase-1-section-4"></a>

### HTML Fundamentals

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
- `<br>`
- `<hr>`
- `<input>`
- `<meta>`
- `<link>`

For example, `<img src="photo.jpg" alt="Photo">` displays an image without needing a closing tag.

**Q1.45. What is the difference between container elements and empty elements?**

Answer:

- Container elements can contain text or other HTML elements. For example, `<div>`, `<p>` and `<section>`.
- Empty or void elements cannot contain child content. For example, `<img>`, `<br>` and `<input>`.

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

<a id="phase-1-section-5"></a>

### CSS Fundamentals and Layout

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


<a id="phase-1-section-6"></a>

### Tailwind CSS — Utility Styling After CSS Foundations

#### What is Tailwind CSS, and why learn ordinary CSS first?

Tailwind CSS generates CSS utilities that you compose in markup. A class such as `p-4` applies padding; `flex` changes the layout mode. You still need the box model, cascade, flexbox, grid and responsive design to understand the result. Tailwind is a styling system, not a JavaScript UI framework.

#### Responsive and Accessible Components

Unprefixed utilities define the base style. Breakpoint variants such as `md:` apply at that minimum width and above. Start with a usable narrow layout, then enhance it for wider screens. A small screen is not necessarily a mobile device. [Official responsive-design reference](https://tailwindcss.com/docs/responsive-design).

```html
<article class="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
  <div>
    <h2 class="text-xl font-semibold">Placement applications</h2>
    <p class="mt-2 text-slate-700">Review your submitted applications.</p>
  </div>
  <button
    type="button"
    class="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800
           focus-visible:outline-2 focus-visible:outline-offset-2
           disabled:cursor-not-allowed disabled:opacity-50">
    View applications
  </button>
</article>
```

The base layout has one column; the medium breakpoint introduces two. The button keeps native keyboard behavior. Styling alone does not supply accessible names, form labels, error announcements or correct contrast; check those independently.

#### Class Detection and Component Reuse

Use complete class names in conditional mappings. Constructing a class such as `bg-${color}-500` can prevent the build from detecting it. Choose between complete alternatives instead. [Official class-detection reference](https://tailwindcss.com/docs/detecting-classes-in-source-files).

Extract repeated markup into components rather than hiding every utility behind a new custom CSS class. Prefer shared spacing and color tokens to unrelated arbitrary values. In a React component, the attribute is `className`, not `class`.

#### Interview Questions and Practice

**Why can a Tailwind class work locally but disappear in a build?** Inspect source detection, dynamically assembled names and whether the stylesheet is included. Confirm the project's Tailwind version before copying configuration: installation and theme configuration differ across major versions.

**Does Tailwind replace CSS?** No. It expresses CSS choices through generated utilities. You must still explain why a layout overflows or which rule wins.

**Practice:** Build a labelled registration form with a responsive grid, visible keyboard focus, validation messages and disabled submission state. Inspect the computed styles in DevTools and explain each utility you chose.

<a id="phase-1-section-7"></a>

### Browser Rendering and DOM

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

<a id="phase-1-section-8"></a>

### Browser Storage

**Q1.115. What is browser storage?**

Answer: Browser storage refers to the mechanisms that allow web applications to store data on the user's device.

Common browser storage mechanisms include:

- Cookies.
- Local Storage.
- Session Storage.
- IndexedDB.

For example, a task management application can use Local Storage to remember tasks after the user refreshes the page.

**Q1.116. What is Local Storage?**

Answer: Local Storage is a browser storage mechanism that stores key-value pairs as strings and keeps the data even after the browser is closed and reopened.

It does not automatically expire.

Example:

```javascript
localStorage.setItem("name", "Chirag");

const name = localStorage.getItem("name");
```

It is useful for storing non-sensitive preferences and simple application data.

**Q1.117. What is Session Storage?**

Answer: Session Storage stores key-value pairs for a particular browser tab's session.

The data normally remains available when the page is refreshed but is cleared when that tab's page session ends.

For example, we can temporarily store information about a multi-step form.

**Q1.118. What are cookies?**

Answer: Cookies are small pieces of data stored by the browser and associated with a website.

They are commonly used for session management, authentication and user preferences.

Unlike Local Storage, cookies can be automatically included in matching HTTP requests.

**Q1.119. What is the difference between Local Storage, Session Storage and Cookies?**

Answer:

| Feature                               | Local Storage                                     | Session Storage                | Cookies                        |
| ------------------------------------- | ------------------------------------------------- | ------------------------------ | ------------------------------ |
| Lifetime                              | Until removed                                     | Usually until tab session ends | Depends on expiration settings |
| Capacity                              | Usually around 5 MB or more, depending on browser | Usually around 5 MB            | Usually around 4 KB per cookie |
| Sent automatically with HTTP requests | No                                                | No                             | Yes, when applicable           |
| Scope                                 | Origin                                            | Origin and tab session         | Depends on domain and path     |
| Common use                            | Preferences                                       | Temporary form data            | Sessions and authentication    |

Interview point: Sensitive authentication cookies should generally use `HttpOnly`, `Secure` and appropriate `SameSite` settings.

**Q1.120. How do you create, read and delete cookies using JavaScript?**

Answer: JavaScript provides the `document.cookie` property to work with cookies that are accessible to JavaScript.

Example:

```javascript
// Create
document.cookie = "user=Chirag; path=/";

// Read
console.log(document.cookie);

// Delete
document.cookie =
  "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

JavaScript cannot read cookies marked as `HttpOnly`. This is an important security feature.

**Q1.121. What is IndexedDB?**

Answer: IndexedDB is a browser database that allows applications to store larger amounts of structured data locally.

Unlike Local Storage, it supports objects, indexes and asynchronous database operations.

For example, an offline application can use IndexedDB to store records that users can access without an internet connection.

**Q1.122. What is the difference between Local Storage and IndexedDB?**

Answer:

- Local Storage: Simple synchronous key-value storage that stores strings.
- IndexedDB: Asynchronous browser database that supports structured data, indexes and larger datasets.

Local Storage is suitable for simple preferences, while IndexedDB is more suitable for complex offline application data.

<a id="phase-1-section-9"></a>

### Browser and Frontend Practical Concepts


**Q1.123. What is a Web Worker?**

Answer: A Web Worker allows JavaScript to execute in a background thread separate from the main browser thread.

It is useful for heavy calculations or processing tasks that could otherwise make the user interface unresponsive.

For example, a Web Worker can process a large dataset while the user continues interacting with the webpage.

A Web Worker cannot directly manipulate the DOM.

**Q1.124. What is the difference between a Web Worker and the main JavaScript thread?**

Answer:

- Main thread: Handles JavaScript execution, DOM operations and much of the user interface work.
- Web Worker: Executes background JavaScript tasks independently and communicates with the main thread through messages.

This helps keep the interface responsive during expensive operations.

**Q1.125. What is the role of the **`defer`** attribute in a script tag?**

Answer: The `defer` attribute tells the browser to download an external JavaScript file without blocking HTML parsing and execute it after the HTML document has been parsed.

Example:

```html
<script src="app.js" defer></script>
```

Deferred scripts execute in document order.

It is useful when JavaScript needs to access DOM elements that are defined in the HTML.

**Q1.126. What is the difference between **`async`** and **`defer`** in HTML scripts?**

Answer:

- `async`: Downloads the script without blocking HTML parsing and executes it as soon as it is ready. Execution order is not guaranteed.
- `defer`: Downloads the script without blocking HTML parsing and executes it after parsing is complete, preserving document order among deferred scripts.

Use `defer` when scripts depend on the document structure or on each other.


**Q1.127. What is the difference between frontend validation and backend validation?**

Answer:

- Frontend validation: Checks user input in the browser before sending a request.
- Backend validation: Checks incoming data on the server before performing operations or storing information.

For example, the frontend can check whether an email field is empty, but the backend must independently validate the email and check whether it meets application rules.

Interview point: Never trust frontend validation alone because users can bypass it.

**Q1.128. What is a Progressive Web App (PWA)?**

Answer: A Progressive Web App is a web application that uses modern browser capabilities to provide an app-like experience.

It can support features such as installation, offline access, caching and push notifications, depending on browser support and permissions.

For example, a PWA can allow users to access previously cached content even when they temporarily lose internet connectivity.

**Q1.129. What is a Content Management System (CMS)?**

Answer: A Content Management System is software that allows users to create, edit, organize and publish digital content without needing to write all the code manually.

Examples include WordPress, Drupal and Joomla.

For example, a company can use a CMS to update blog articles without changing its website's source code.


<a id="phase-1-section-10"></a>

### Semantic figures and layout-free outlines

##### Q1.130. What is the difference between the `<figure>` tag and the `<img>` tag?

HTML fundamentals

Interviewer: Tell me the difference between the figure tag and image tag.

The candidate could not answer this question.

**`<img>` tag**

The `img` element is used to embed an image into an HTML document.

Example:

```html
<img
    src="profile.jpg"
    alt="Student profile picture"
    width="200"
/>
```

**`<figure>` tag**

The `figure` element represents self-contained content, such as:

- Images.
- Diagrams.
- Illustrations.
- Code examples.
- Charts.

It can be accompanied by a caption using `<figcaption>`.

Example:

```html
<figure>
    <img
        src="architecture.png"
        alt="Application architecture diagram"
    />

    <figcaption>
        Architecture of the application.
    </figcaption>
</figure>
```

**Main difference**

| `<img>`                        | `<figure>`                                     |
| ------------------------------ | ---------------------------------------------- |
| Embeds an image                | Represents self-contained content              |
| An image element               | A semantic container                           |
| Has `src` and `alt` attributes | Can contain images, captions and other content |
| Cannot contain children        | Can contain child elements                     |

Interview-ready answer:

"The img tag is used to embed an image into a webpage, whereas the figure tag is a semantic HTML element used to represent self-contained content such as an image, diagram or chart. We can use figcaption inside figure to provide a caption."

##### Q1.131. What is the difference between CSS border and outline?

CSS fundamentals

Interviewer: Can you explain the difference between CSS border and outline?

The candidate was unable to provide an answer.

**Border**

A border is drawn around an element's border box.

Example:

```css
.box {
    border: 2px solid black;
}
```

It is part of the CSS box model and can affect the element's dimensions depending on the box-sizing configuration.

**Outline**

An outline is drawn outside the element's border edge.

Example:

```css
.box {
    outline: 2px solid red;
}
```

It does not take up layout space and does not change the element's dimensions.

**Main differences**

| Feature            | Border                         | Outline                            |
| ------------------ | ------------------------------ | ---------------------------------- |
| Position           | Around border box              | Outside border edge                |
| Takes layout space | Yes, as part of box dimensions | No                                 |
| Affects dimensions | Can                            | No                                 |
| Individual sides   | Yes                            | No, one outline around the element |
| Rounded corners    | Supports border-radius         | Browser rendering varies           |
| Common usage       | Element boundaries             | Focus indication and highlighting  |

**Example using both**

```html
<div class="box">
    Hello Chirag
</div>
```

```css
.box {
    border: 3px solid black;
    outline: 3px solid red;
    outline-offset: 5px;
    padding: 20px;
}
```

The black border appears around the element, while the red outline appears outside it.

**Where do we use outline?**

One of the most important applications is keyboard accessibility.

```css
button:focus-visible {
    outline: 3px solid blue;
    outline-offset: 3px;
}
```

This helps keyboard users identify which element currently has focus.

Interview-ready answer:

"Border is part of the CSS box model and is drawn around the element's border box. Outline is drawn outside the border and does not occupy layout space or affect element dimensions. Outlines are commonly used for focus indicators and accessibility."


<a id="phase-1-section-11"></a>

### Chrome extension platform and browser isolation

##### What is a Chrome Extension?

Interview question: What is a Chrome Extension?

Interview-ready answer

A Chrome Extension is a small software application that extends the functionality of the Google Chrome browser.

It can interact with browser tabs, webpages, browser events, and other extension APIs depending on its permissions.

Examples include ad blockers, password managers, screenshot tools, and developer utilities.

DOMLens is a Chrome Extension that adds UI inspection and AI-assisted editing functionality to webpages.

**Examples of browser extensions**

![Beautifully Designed Chrome Extension Popups](https://images.openai.com/static-rsc-4/_Fr1JUsu27aqujjS8mIR5kP2l3Ot2HHD0pWmBSf9dCMq7lKDc1uSSxUZAAxB6XMbeIjEei1cni0IakionWKUT-TvnDk7QDy6ulC6UeWXyOWd5QO_ZzU81FurcV1uqo0E3fW2f6sPNjCAkO9JpvQvImAE7PskXzMdG7oqbhAl0Es?purpose=inline)

Grammar tools

Help improve writing on webpages.

![Troubleshooting Autosave Issues in Bitdefender SecurePass](https://images.openai.com/static-rsc-4/R57Q7AM2rF_asnCGPLPOTMa-ACNjbWrJQszVi1QeJqZmP5C-5nadYS9Rt6k3SricpLKGoByncGl3ixFCC7l0KxgQ5kWKN0x8F7eWxrQPThXRLv9V4kF37NUaCdvXFRh9CnVwoPE-fZ7x6UBvmMnxGd1y9A2lsTWLQ49qNQ8Ahqg?purpose=inline)

Password managers

Manage login credentials.

![8 Best Ad Blockers for Web Browsers | Beebom](https://images.openai.com/static-rsc-4/_cFyOLT0tTaIfXI7DXkEnSR79TXPr2BlaaYMUJlwctU_0gz4zNSiSMLNP7_W_6hnCu0Z9H5nkIR3Kt3ANZ5LQEhEEm9HZckZcDrat6vZFtrFHeW8YVB0DSWeB2fUKgaLWS8xvUb6BpulkgseDu7L2aYxDerm49gpBREor2Y7sr4?purpose=inline)

Ad blockers

Control unwanted advertisements.

![Mode d'inspection: analyser rapidement les propriétés des éléments  |  Chrome DevTools  |  Chrome for Developers](https://images.openai.com/static-rsc-4/SpVHJSDIKf_xF8M-SO62eZgzn9P6H6_zsOvCWepd1rDntqVVUcFeBZioPzqQUE5cyAz0xcQNbC2XqUWXB8XBl7Js9GBbGnyqlW7wTSoLKRiiqABYu8bQ9sRZ9Q8cD8nFx8CRFuw12AHPBCJIz5_M7bfAZJMr0X79PpFrfdFRmjA?purpose=inline)

Developer tools

Inspect and modify webpages.

##### What is Manifest V3?

Interview question: What is Manifest V3, and why did you use it?

Interview-ready answer

Manifest V3 is the modern Chrome Extension platform architecture. It defines how an extension is configured, what permissions it requires, which scripts it can run, and how its background functionality works.

I used Manifest V3 for DOMLens because it provides the extension architecture needed for content scripts, service workers, browser messaging, and permissions.

**What is `manifest.json`?**

It is the main configuration file of a Chrome Extension.

A simplified example:

```json
{
  "manifest_version": 3,
  "name": "DOMLens",
  "version": "1.0.0",
  "description": "AI-powered UI inspector",

  "permissions": [
    "storage",
    "activeTab",
    "scripting"
  ],

  "background": {
    "service_worker": "background/background.js",
    "type": "module"
  },

  "action": {
    "default_popup": "popup/popup.html"
  }
}
```

This is an educational example, not necessarily the exact manifest from your repository.

**Important manifest properties**

| Property           | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `manifest_version` | Specifies the extension platform version |
| `name`             | Extension name                           |
| `version`          | Extension version                        |
| `permissions`      | Browser capabilities requested           |
| `background`       | Background service worker configuration  |
| `action`           | Toolbar popup and action configuration   |
| `content_scripts`  | Scripts injected into matching pages     |
| `host_permissions` | Website origins the extension can access |

Cross-question: Why are permissions important?

Permissions control what an extension can access. Requesting unnecessary permissions can create security and privacy concerns.

##### What are content scripts?

Interview question: What is a content script?

Interview-ready answer

A content script is JavaScript that runs in the context of a webpage and can interact with its DOM.

In DOMLens, content scripts are responsible for interacting with webpage elements, extracting their properties, and injecting the floating inspector interface.

**Example**

Suppose you have a webpage:

```html
<h1 id="heading">Welcome</h1>
```

A content script can access it:

```javascript
const heading = document.getElementById("heading");

console.log(heading.textContent);
```

Output:

```text
Welcome
```

**What can content scripts do?**

- Find webpage elements.
- Read HTML structure.
- Read text content.
- Inspect computed CSS.
- Listen to webpage events.
- Add or modify DOM elements.
- Communicate with the extension through Chrome messaging APIs.

**Important distinction**

A content script has access to the webpage DOM, but it does not run in exactly the same JavaScript execution environment as the page's own scripts. Chrome uses an isolated world for content scripts.

This separation helps prevent ordinary page JavaScript variables from directly sharing the same JavaScript environment with extension content scripts.

##### What is a background service worker?

Interview question: What is a service worker in Manifest V3?

Interview-ready answer

A background service worker is an event-driven background script used by Chrome Extensions.

It handles extension-related events such as installation, commands, tab operations, and communication between different extension components.

In DOMLens, the background service worker manages tab lifecycle operations, keyboard shortcuts, and dynamic content-script injection.

**Example**

```javascript
chrome.runtime.onInstalled.addListener(() => {
    console.log("DOMLens installed");
});
```

This event runs when the extension is installed or updated.

**Why is it called a service worker?**

Unlike a continuously running background page, a Manifest V3 service worker is designed to start when relevant events occur and can be stopped when idle.

Therefore, you should not assume that it remains active continuously.

**Background service worker vs content script**

| Background service worker      | Content script                           |
| ------------------------------ | ---------------------------------------- |
| Handles extension events       | Interacts with webpage DOM               |
| Manages tab-related operations | Inspects page elements                   |
| Handles keyboard commands      | Injects or updates page UI               |
| Uses extension APIs            | Uses DOM APIs and extension messaging    |
| Event-driven lifecycle         | Runs in webpage context's isolated world |

##### What is Chrome runtime messaging?

Interview question: How do different parts of your extension communicate?

Interview-ready answer

Chrome Extensions have separate execution contexts, so their components need a communication mechanism.

In DOMLens, I use Chrome runtime messaging APIs such as `chrome.runtime.sendMessage`, `chrome.tabs.sendMessage`, and `chrome.runtime.onMessage`.

These APIs allow the popup, background service worker, and content scripts to exchange messages.

**Example**

Sending a message:

```javascript
chrome.runtime.sendMessage({
    action: "INSPECT_PAGE"
});
```

Receiving a message:

```javascript
chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {

        if (message.action === "INSPECT_PAGE") {
            sendResponse({
                status: "success"
            });
        }
    }
);
```

**Why is messaging necessary?**

Consider this situation:

1. User clicks the extension icon.
2. Popup sends a request to the background worker.
3. Background worker communicates with the active tab.
4. Content script receives the message.
5. Content script inspects the webpage.
6. The result is returned to the extension interface.

Each part has a different responsibility, so messaging connects them.

##### What is an iframe?

Interview question: What is an iframe?

Interview-ready answer

An iframe, or inline frame, allows one HTML document to be embedded inside another HTML document.

It provides a separate browsing context.

In DOMLens, I use an iframe with `srcdoc` to render the generated HTML and CSS in an isolated preview environment.

**Example**

```html
<iframe
    srcdoc="
        <h1>Hello DOMLens</h1>
        <style>
            h1 {
                color: blue;
            }
        </style>
    ">
</iframe>
```

The iframe renders the provided HTML document separately from the parent document.

**What is `srcdoc`?**

`srcdoc` is an iframe attribute that lets us provide the HTML content of the embedded document directly.

```javascript
iframe.srcdoc = `
    <html>
      <body>
        <h1>Preview</h1>
      </body>
    </html>
`;
```

**What is iframe sandboxing?**

The iframe `sandbox` attribute can restrict capabilities of the embedded document.

For example:

```html
<iframe
    sandbox=""
    srcdoc="<h1>Safe preview</h1>">
</iframe>
```

An empty sandbox applies a restrictive set of sandboxing rules.

Specific capabilities can be enabled with sandbox tokens, but those should be selected carefully.

**Shadow DOM vs iframe**

| Shadow DOM                                        | iframe                                |
| ------------------------------------------------- | ------------------------------------- |
| Creates an encapsulated DOM subtree               | Creates a separate browsing context   |
| Primarily isolates component styles and structure | Separates the embedded document       |
| Shares the host document's browsing context       | Has its own document                  |
| Useful for injected extension UI                  | Useful for isolated preview rendering |
| Does not provide full security isolation          | Sandbox can restrict embedded content |

Remember this interview distinction:

- Shadow DOM protects the inspector UI from CSS conflicts.
- The iframe provides a separate environment for previewing generated content.

**Q1.132. What is `chrome.storage.sync`?**

It is a Chrome extension storage API that stores extension data and can synchronise supported data across a user's signed-in Chrome browsers.

Example:

```javascript
chrome.storage.sync.set({
  theme: "dark"
});

chrome.storage.sync.get(
  ["theme"],
  (result) => {
    console.log(result.theme);
  }
);
```

Difference between local storage and sync storage:

| `chrome.storage.local`                | `chrome.storage.sync`                       |
| ------------------------------------- | ------------------------------------------- |
| Stores data locally                   | Supports syncing across Chrome browsers     |
| Larger storage allowance              | More restricted storage allowance           |
| Not intended for cross-device syncing | Designed for supported cross-device syncing |

DOMLens uses browser extension storage rather than a conventional SQL or NoSQL database.

---

<a id="phase-2"></a>

## Phase 2 — Git, GitHub and Team Collaboration

**Objective:** Use version control and reviews throughout every later practical exercise.

**Sections:** [Git fundamentals and architecture](#phase-2-section-1) · [Git installation and configuration](#phase-2-section-2) · [Working directory, staging area and repository](#phase-2-section-3) · [Essential Git commands](#phase-2-section-4) · [Branching and merging](#phase-2-section-5) · [Merge conflicts](#phase-2-section-6) · [Rebase vs merge](#phase-2-section-7) · [Reset, revert, restore and stash](#phase-2-section-8) · [Cherry-pick and advanced Git](#phase-2-section-9) · [GitHub repositories and collaboration](#phase-2-section-10) · [Pull requests and code reviews](#phase-2-section-11) · [Branch protection and team workflows](#phase-2-section-12) · [Conventional commits and semantic versioning](#phase-2-section-13) · [MAJOR.MINOR.PATCH](#phase-2-section-14) · [Complete team development workflow](#phase-2-section-15) · [Advanced Git and collaboration interview Q&A](#phase-2-section-16)

<a id="phase-2-section-1"></a>

### Git fundamentals and architecture

#### 1. What is Git?

Git is a **distributed version control system (DVCS)**.

It tracks changes to your source code over time. It allows you to:

- See what changed in a file.
- Restore previous versions.
- Create independent development branches.
- Combine work from multiple developers.
- Investigate bugs using project history.
- Collaborate without everyone editing the same copy of the code.

##### Example: Recruitment API

Imagine that your API currently has this structure:

```text
recruitment-api/
├── src/
│   ├── auth/
│   ├── students/
│   ├── companies/
│   └── applications/
├── prisma/
├── package.json
└── tsconfig.json
```

You implement student registration today. Tomorrow, you change its validation. Next week, you discover that the validation change broke another feature.

Without version control, finding and restoring the earlier implementation can be difficult.

With Git, you can inspect the changes and recover earlier commits.

#### 2. Types of version control systems

| Type            | How it works                      | Example |
| --------------- | --------------------------------- | ------- |
| Local VCS       | Tracks versions on one machine    | RCS     |
| Centralized VCS | Uses a central server             | SVN     |
| Distributed VCS | Each clone has repository history | Git     |

**Why is distributed version control useful?**

Every developer can have a local repository containing the project's history. Developers can commit locally without needing to contact a central server for every commit.

#### 3. Git vs GitHub

This is a very common interview question.

| Git                           | GitHub                                 |
| ----------------------------- | -------------------------------------- |
| Version-control software      | Git hosting and collaboration platform |
| Runs locally                  | Primarily provides hosted services     |
| Tracks code history           | Hosts repositories and PRs             |
| Supports branches and commits | Adds reviews, issues and automation    |
| Can work without GitHub       | Uses Git repositories                  |

Think of Git as the version-control engine and GitHub as a platform built around Git.

#### 4. What is a repository?

A repository is a project whose changes and history are tracked by Git.

Initialize one:

```bash
mkdir recruitment-api
cd recruitment-api

git init
```

Git creates a hidden directory:

```text
recruitment-api/
└── .git/
```

The `.git` directory contains Git's internal repository information, including objects, references, configuration and other metadata.

Do not manually edit its internal files unless you understand the consequences.

#### 5. Git's architecture

Git uses three important areas:

**Working directory**

Files you create or modify

git add

**Staging area (index)**

Changes selected for the next commit

git commit

**Local repository**

Recorded commits and project history

git push

**Remote repository**

For example, a GitHub repository

##### Understand this with an example

Create a file:

```bash
echo "Recruitment API" > README.md
```

Check its status:

```bash
git status
```

Git identifies `README.md` as untracked.

Stage it:

```bash
git add README.md
```

Commit it:

```bash
git commit -m "docs: add project README"
```

The important distinction:

- `git add` selects changes for a commit.
- `git commit` records the selected changes in local history.
- `git push` publishes local commits to a remote repository.

#### 6. How does Git store information?

Git's internal object model includes:

| Object | Purpose                                              |
| ------ | ---------------------------------------------------- |
| Blob   | Stores file content                                  |
| Tree   | Represents directories and file names                |
| Commit | Points to a tree and parent commit(s), with metadata |
| Tag    | Identifies or annotates another Git object           |

Inspect the current commit object:

```bash
git cat-file -t HEAD
```

Expected output:

```text
commit
```

Inspect its contents:

```bash
git cat-file -p HEAD
```

Git uses content-addressed object storage: object identities are derived from their content and type. This helps Git identify stored objects and detect content changes.

#### 7. What is HEAD?

`HEAD` identifies your currently checked-out position.

Usually:

```text
HEAD → main → commit C
```

When you switch branches:

```bash
git switch feature/auth
```

HEAD now refers to `feature/auth`.

In a detached HEAD state, HEAD points directly to a commit instead of a branch.

#### 8. Tracked vs untracked files

- **Tracked:** Git already knows about the file.
- **Untracked:** Git has not started tracking the file.

Check with:

```bash
git status
```

Start tracking a new file:

```bash
git add src/auth.ts
```

<a id="phase-2-section-2"></a>

### Git installation and configuration

Check whether Git is installed:

```bash
git --version
```

Configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Use the email address associated with your GitHub account if you want your commits associated with that account.

View configuration:

```bash
git config --list
```

Check a specific setting:

```bash
git config user.name
```

Set the default branch name:

```bash
git config --global init.defaultBranch main
```

Optionally configure VS Code as the Git editor:

```bash
git config --global core.editor "code --wait"
```

##### Global vs local configuration

| Global                       | Local                          |
| ---------------------------- | ------------------------------ |
| Applies to your repositories | Applies to one repository      |
| User-level configuration     | Repository-level configuration |
| `git config --global`        | `git config --local`           |

Local configuration generally takes precedence when both define the same setting.

**Interview question:** What happens if your global Git username is different from your local username?

The repository-specific setting takes precedence for that repository.

<a id="phase-2-section-3"></a>

### Working directory, staging area and repository

This is the foundation for understanding Git commands.

Imagine you modify three files:

```text
src/
├── auth.service.ts
├── student.service.ts
└── application.service.ts
```

But you only want to commit the authentication change.

You can stage just one file:

```bash
git add src/auth.service.ts
```

Then inspect:

```bash
git status
```

The authentication file is staged; the other modifications remain unstaged.

##### Inspect changes

Unstaged changes:

```bash
git diff
```

Staged changes:

```bash
git diff --staged
```

Commit history:

```bash
git log
```

Compact history:

```bash
git log --oneline
```

Visual history:

```bash
git log --oneline --graph --decorate --all
```

**Important:** `git add .` stages all eligible changes under the current directory. It is convenient, but in professional projects you should inspect `git status` first so you don't accidentally stage unwanted files.

<a id="phase-2-section-4"></a>

### Essential Git commands

#### 1. Clone

Download an existing repository:

```bash
git clone https://github.com/username/recruitment-api.git
```

This creates a local repository copy and normally configures a remote named `origin`.

#### 2. Remote

A remote is a named reference to another Git repository.

```bash
git remote -v
```

Add a remote:

```bash
git remote add origin https://github.com/username/recruitment-api.git
```

Change its URL:

```bash
git remote set-url origin https://github.com/username/recruitment-api.git
```

#### 3. Push

Publish local commits:

```bash
git push origin main
```

Set the upstream branch:

```bash
git push -u origin main
```

After the upstream is configured, you can usually use:

```bash
git push
```

#### 4. Fetch

Download updates from the remote:

```bash
git fetch origin
```

This updates remote-tracking references. It does not automatically integrate those changes into your current branch.

For example, after fetching, you can inspect:

```bash
git log --oneline main..origin/main
```

This shows commits present in `origin/main` that are not yet in your local `main`.

#### 5. Pull

Fetch and integrate remote changes:

```bash
git pull origin main
```

By default, this typically performs a fetch followed by a merge. Depending on your Git configuration, it can instead integrate using rebase.

##### Fetch vs pull vs push

| Command     | Purpose                               |
| ----------- | ------------------------------------- |
| `git fetch` | Downloads remote updates              |
| `git pull`  | Fetches and integrates remote updates |
| `git push`  | Publishes local commits               |

**Interview-ready answer:** I use `fetch` when I want to inspect incoming changes before integrating them. I use `pull` to update my current branch, and `push` to publish my local commits.

<a id="phase-2-section-5"></a>

### Branching and merging

#### 1. What is a branch?

A branch is a movable reference to a commit.

It lets developers work on independent features without directly changing the shared development branch.

Suppose your team has:

| Developer | Branch                  | Task           |
| --------- | ----------------------- | -------------- |
| A         | `feature/auth`          | Authentication |
| B         | `feature/students`      | Student CRUD   |
| C         | `feature/notifications` | Notifications  |

Create a branch:

```bash
git branch feature/auth
```

Switch to it:

```bash
git switch feature/auth
```

Or create and switch in one command:

```bash
git switch -c feature/auth
```

#### 2. What is a merge?

A merge integrates changes from another branch into your current branch.

```bash
git switch main
git merge feature/auth
```

A merge can produce a merge commit, which records the integration of the two branch histories.

#### 3. Fast-forward merge

A fast-forward merge occurs when the target branch has not advanced independently.

Before:

```text
A --- B --- C   feature/auth
      |
      main
```

After merging `feature/auth` into `main`:

```text
A --- B --- C
            |
            main
            feature/auth
```

Git can simply move the `main` reference forward.

#### 4. Three-way merge

A three-way merge considers:

1. The common ancestor.
2. The latest commit on the current branch.
3. The latest commit on the incoming branch.

Git compares both branches against their common ancestor and combines compatible changes.

If it cannot reconcile competing changes, a merge conflict can occur.

<a id="phase-2-section-6"></a>

### Merge conflicts

#### 1. What is a merge conflict?

A merge conflict occurs when Git cannot automatically reconcile competing changes.

Suppose two developers change the same line.

Developer A:

```javascript
const port = 3000;
```

Developer B:

```javascript
const port = 5000;
```

Git may mark the conflict like this:

```text
<<<<<<< HEAD
const port = 3000;
=======
const port = 5000;
>>>>>>> feature/config
```

Meaning:

- `<<<<<<< HEAD`: Current branch's version.
- `=======`: Separates the versions.
- `>>>>>>> feature/config`: Incoming branch's version.

#### 2. Resolve a conflict step by step

Suppose you're merging `feature/config` into `main`.

```bash
git switch main
git merge feature/config
```

Check the conflict:

```bash
git status
```

Open the conflicted file and decide what the final code should be.

For example, perhaps the correct application configuration is:

```javascript
const port = process.env.PORT || 3000;
```

Remove the conflict markers, save the file, and stage it:

```bash
git add src/config.js
```

Complete the merge:

```bash
git commit
```

Git may provide a default merge commit message.

#### 3. Cancel a merge

If the merge is still in progress and has not been committed:

```bash
git merge --abort
```

This attempts to return your working tree to its pre-merge state.

#### 4. How do you reduce conflicts?

- Keep feature branches reasonably short-lived.
- Fetch and integrate updates regularly.
- Divide tasks between developers clearly.
- Avoid unnecessary formatting changes across entire files.
- Communicate when multiple developers need to modify the same module.
- Commit smaller, focused changes.

**Interview point:** Never blindly choose "Accept Current" or "Accept Incoming." Understand both changes and resolve the code according to the intended application behavior.

<a id="phase-2-section-7"></a>

### Rebase vs merge

#### 1. What is rebase?

Rebase reapplies commits from one branch on top of another base commit.

Suppose:

```text
          C --- D   feature/auth
         /
A --- B --- E       main
```

The feature branch started at `B`, but `main` has advanced to `E`.

Run:

```bash
git switch feature/auth
git rebase main
```

Conceptually, Git reapplies the feature commits:

```text
A --- B --- E --- C' --- D'
                 feature/auth
```

`C'` and `D'` are new commits with new hashes.

#### 2. Merge vs rebase

| Merge                             | Rebase                              |
| --------------------------------- | ----------------------------------- |
| Integrates branch histories       | Replays commits on a new base       |
| Can create merge commits          | Usually creates a linear history    |
| Preserves original commits        | Replayed commits get new identities |
| Does not rewrite existing commits | Rewrites the rebased commits        |

#### 3. When should you use each?

Use merge when:

- Integrating shared branches.
- Preserving the integration history.
- You want to avoid rewriting shared history.

Use rebase when:

- Updating your personal feature branch.
- Cleaning up unpublished local commits.
- You want a linear history before opening or updating a PR.

**Critical rule:** Avoid rebasing commits that other developers have already based their work on, unless the team explicitly coordinates the history rewrite.

#### 4. Interactive rebase

You can modify a sequence of commits:

```bash
git rebase -i HEAD~3
```

Common actions:

| Action   | Purpose                                       |
| -------- | --------------------------------------------- |
| `pick`   | Keep commit                                   |
| `reword` | Change commit message                         |
| `edit`   | Pause to modify commit                        |
| `squash` | Combine commits and edit combined message     |
| `fixup`  | Combine commits and discard the fixup message |
| `drop`   | Remove commit                                 |

This is useful for cleaning up local commit history before sharing it.

<a id="phase-2-section-8"></a>

### Reset, revert, restore and stash

These commands are particularly important in interviews.

#### 1. `git reset`

Moves the current branch reference and can also change the staging area and working directory.

##### Soft reset

```bash
git reset --soft HEAD~1
```

Moves the branch pointer back one commit but keeps changes staged.

##### Mixed reset

```bash
git reset --mixed HEAD~1
```

Moves the branch pointer back and unstages changes, but keeps modifications in the working directory.

This is the default reset mode.

##### Hard reset

```bash
git reset --hard HEAD~1
```

Moves the branch pointer back and discards tracked working-tree and staging changes that are overwritten by the reset.

Destructive operation

Be careful: uncommitted work can be lost.

#### 2. `git revert`

Creates a new commit that reverses the changes introduced by an earlier commit.

```bash
git revert a123456
```

Suppose your history is:

```text
A --- B --- C --- D
```

You revert `C`:

```text
A --- B --- C --- D --- R
```

`R` reverses the changes introduced by `C` without deleting the original commit.

#### 3. Reset vs revert

| Reset                              | Revert                               |
| ---------------------------------- | ------------------------------------ |
| Moves branch pointer               | Creates a new commit                 |
| Can rewrite local history          | Preserves existing history           |
| Useful for unpublished corrections | Useful for shared branch corrections |
| Can discard working changes        | Adds an inverse change               |

**Professional practice:** Prefer `git revert` when undoing a commit that has already been pushed to a shared branch.

#### 4. `git restore`

Discard unstaged changes to a file:

```bash
git restore src/app.ts
```

Unstage a file:

```bash
git restore --staged src/app.ts
```

Restoring can discard edits, so inspect the file first.

#### 5. `git stash`

Temporarily stores uncommitted changes.

Imagine you're working on authentication, but your team urgently asks you to fix a production bug.

Save your unfinished work:

```bash
git stash push -m "WIP authentication"
```

Switch branches:

```bash
git switch hotfix/payment-error
```

Fix the bug and commit it. Then return:

```bash
git switch feature/auth
git stash pop
```

Useful stash commands:

```bash
git stash list
git stash apply
git stash pop
git stash -u
```

- `apply` restores the stash but keeps it in the stash list.
- `pop` restores it and removes it if successful.
- `-u` includes untracked files.

<a id="phase-2-section-9"></a>

### Cherry-pick and advanced Git

#### 1. Cherry-pick

Applies a particular commit onto your current branch.

```bash
git switch hotfix
git cherry-pick a123456
```

Example: A bug fix exists on a feature branch, but you urgently need that fix in a release branch. Cherry-pick can apply that specific change without merging the entire feature branch.

#### 2. Detached HEAD

Normally:

```text
HEAD → main → commit A
```

Detached HEAD means HEAD points directly to a commit.

```bash
git checkout a123456
```

This is useful for inspecting historical code.

If you create commits while detached and want to keep them, create a branch:

```bash
git switch -c recovery-branch
```

#### 3. `.gitignore`

Specifies files that Git should intentionally leave untracked.

Example:

```text
node_modules/
.env
dist/
coverage/
*.log
.DS_Store
```

This helps prevent dependency folders, environment files and build artifacts from entering the repository.

Important: `.gitignore` does not automatically stop tracking files that Git already tracks.

To stop tracking an existing `.env` while keeping your local copy:

```bash
git rm --cached .env
git commit -m "chore: stop tracking environment file"
```

If a secret was already pushed, removing the file is not enough. Rotate the exposed credential and consider the required history cleanup.

#### 4. Reflog

Reflog records movements of local references such as HEAD and branch tips.

```bash
git reflog
```

Suppose you accidentally reset a commit:

```text
a123456 HEAD@{0}: reset: moving to HEAD~1
b456789 HEAD@{1}: commit: Add authentication
```

You can recover the earlier commit by creating a branch at its hash:

```bash
git branch recovered-auth b456789
```

Reflog is local, and entries eventually expire according to Git's maintenance policies.

#### 5. Bisect

`git bisect` uses binary search to help identify which commit introduced a bug.

```bash
git bisect start
git bisect bad
git bisect good a123456
```

Git checks out an intermediate commit. Test it and mark it:

```bash
git bisect good
```

or:

```bash
git bisect bad
```

Repeat until Git identifies the first bad commit.

Finish:

```bash
git bisect reset
```

<a id="phase-2-section-10"></a>

### GitHub repositories and collaboration

GitHub provides a platform for collaborative Git development.

Its features include:

- Repository hosting.
- Issues and pull requests.
- Code reviews.
- Releases.
- Project boards.
- GitHub Actions.
- Discussions.
- Access controls.

#### 1. Public vs private repositories

| Public                        | Private                            |
| ----------------------------- | ---------------------------------- |
| Anyone can view it            | Only authorized people can view it |
| Useful for open-source work   | Useful for confidential projects   |
| Public collaboration possible | Access controlled by permissions   |

A private repository is not a safe place to store API keys or passwords.

#### 2. Repository vs organization

- Repository: A project's code, history, issues and branches.
- Organization: A shared space to manage multiple repositories, teams, members and permissions.

Example:

```text
Taurus-Organization/
├── customer-portal/
├── policy-management/
├── claims-service/
└── internal-tools/
```

#### 3. GitHub Issues

An issue is a unit of work, discussion or reported problem.

Example:

```text
Title: Add password reset API

Description:
Implement secure password reset with an expiring token.

Acceptance criteria:
- Generate a random token.
- Store the token hash.
- Send a reset email.
- Validate expiry.
- Allow single-use reset.
```

Issues help teams track requirements and progress.

#### 4. Milestones

A milestone groups issues and pull requests toward a goal or release.

Example:

```text
Milestone: Authentication v1

- User registration
- Login
- Refresh token
- Logout
- Password reset
```

#### 5. Fork vs clone

A fork creates a hosted copy of a repository under your GitHub account or organization.

A clone creates a local repository copy on your machine.

| Fork                                | Clone                       |
| ----------------------------------- | --------------------------- |
| Happens on GitHub                   | Happens on your machine     |
| Creates a hosted copy               | Creates a local copy        |
| Common in open-source contributions | Common in local development |

You can fork a repository and then clone your fork.

<a id="phase-2-section-11"></a>

### Pull requests and code reviews

#### 1. What is a Pull Request?

A pull request (PR) is a proposal to integrate changes from one branch into another.

Example:

```text
feature/auth → main
```

The author opens a PR so teammates can inspect, discuss, test and approve the changes before integration.

#### 2. Typical team workflow

```text
1. Clone repository
2. Update main
3. Create feature branch
4. Implement changes
5. Run tests
6. Commit changes
7. Push feature branch
8. Open pull request
9. Receive code review
10. Make requested changes
11. CI checks pass
12. Merge pull request
13. Delete feature branch
```

Commands:

```bash
git clone https://github.com/company/recruitment-api.git

cd recruitment-api

git switch main
git pull origin main

git switch -c feature/student-registration
```

After development:

```bash
git add src/
git commit -m "feat: add student registration"
git push -u origin feature/student-registration
```

Then open the PR on GitHub.

#### 3. What should a good PR description contain?

Example:

```markdown
# feat: add student registration API

## Summary
Adds student registration functionality.

## Changes
- Added registration endpoint.
- Added request validation.
- Added password hashing.
- Added duplicate email handling.

## Testing
- Tested successful registration.
- Tested duplicate email.
- Tested invalid input.
- Verified password is not returned in the response.

## Related issue
Closes #42
```

A good PR explains what changed, why it changed and how it was tested.

#### 4. What is a code review?

A code review is the examination of another developer's changes before they are integrated into the main codebase.

Reviewers check:

- Correctness.
- Readability.
- Security.
- Performance.
- Error handling.
- Tests.
- Architecture.
- Maintainability.
- Consistency with project standards.

##### Example: Review a Recruitment API endpoint

Suppose a teammate writes:

```javascript
app.get("/api/users/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id
    }
  });

  res.json(user);
});
```

As a reviewer, ask:

1. Is the user authenticated?
2. Is the caller authorized to view this particular user?
3. Does the query handle a missing user?
4. Could sensitive fields such as `passwordHash` be exposed?
5. Is the identifier validated?
6. Are errors handled?
7. Are tests included?

A safer query explicitly selects fields:

```javascript
const user = await prisma.user.findUnique({
  where: { id: req.params.id },
  select: {
    id: true,
    email: true,
    role: true
  }
});
```

The route still needs appropriate authentication, authorization, validation and error handling.

#### 5. Review actions

| Action          | Meaning                                                |
| --------------- | ------------------------------------------------------ |
| Approve         | Reviewer approves the changes                          |
| Comment         | Reviewer leaves feedback without blocking or approving |
| Request Changes | Reviewer requests modifications before approval        |

#### 6. Draft PR

A draft PR is an unfinished pull request.

It is useful when you want early feedback on architecture or implementation before the changes are ready for final review.

When you push additional commits to the same branch, the existing PR updates automatically.

<a id="phase-2-section-12"></a>

### Branch protection and team workflows

#### 1. Branch protection

Branch protection rules help prevent unsafe or unauthorized changes to important branches.

Common rules:

- Require PRs before merging.
- Require one or more approvals.
- Require CI checks to pass.
- Require review conversations to be resolved.
- Restrict direct pushes.
- Optionally require signed commits or linear history.

Example policy for `main`:

```text
main branch

✓ Pull request required
✓ At least 1 approval
✓ CI checks required
✓ Review conversations resolved
✓ Direct pushes restricted
```

This helps prevent unreviewed or untested changes from entering the shared branch.

#### 2. Git Flow

Git Flow is a branching model with long-lived and short-lived branches.

| Branch      | Purpose                  |
| ----------- | ------------------------ |
| `main`      | Production-ready history |
| `develop`   | Integration branch       |
| `feature/*` | Feature development      |
| `release/*` | Release preparation      |
| `hotfix/*`  | Urgent production fixes  |

#### 3. GitHub Flow

GitHub Flow is a simpler approach:

1. Keep `main` deployable.
2. Create a branch for a change.
3. Commit changes.
4. Open a PR.
5. Review and test.
6. Merge.
7. Deploy.

##### Git Flow vs GitHub Flow

| Git Flow                    | GitHub Flow                  |
| --------------------------- | ---------------------------- |
| More branch types           | Simpler branch structure     |
| Long-lived `develop` branch | Main-centered development    |
| Release and hotfix branches | Feature branches and PRs     |
| Formal release management   | Continuous delivery friendly |

Neither is universally best. The team's release process determines which workflow makes sense.

<a id="phase-2-section-13"></a>

### Conventional commits and semantic versioning

#### 1. Conventional Commits

Conventional Commits is a convention for structured commit messages.

Format:

```text
<type>[optional scope]: <description>
```

Examples:

```bash
git commit -m "feat: add student registration"

git commit -m "fix: handle expired refresh tokens"

git commit -m "docs: update API documentation"

git commit -m "test: add authentication integration tests"

git commit -m "refactor: simplify auth service"
```

Common types:

| Type       | Purpose                 |
| ---------- | ----------------------- |
| `feat`     | New feature             |
| `fix`      | Bug fix                 |
| `docs`     | Documentation           |
| `test`     | Tests                   |
| `refactor` | Code restructuring      |
| `perf`     | Performance improvement |
| `ci`       | CI/CD configuration     |
| `chore`    | Maintenance             |

A breaking change can be indicated with `!`:

```text
feat!: change authentication response format
```

#### 2. Semantic Versioning

Semantic Versioning commonly uses:

<a id="phase-2-section-14"></a>

### MAJOR.MINOR.PATCH

Example:

```text
2.4.1
```

- **MAJOR:** Incompatible API changes.
- **MINOR:** Backward-compatible new functionality.
- **PATCH:** Backward-compatible bug fixes.

Examples:

```text
1.0.0 → 1.0.1
```

Bug fix.

```text
1.0.1 → 1.1.0
```

Backward-compatible feature.

```text
1.1.0 → 2.0.0
```

Breaking change.

#### 3. Git tags

Tags identify a specific Git object, commonly a release commit.

Lightweight tag:

```bash
git tag v1.0.0
```

Annotated tag:

```bash
git tag -a v1.0.0 -m "First stable release"
```

Push a tag:

```bash
git push origin v1.0.0
```

Push all tags:

```bash
git push origin --tags
```

Annotated tags are generally preferable for releases because they include metadata and a message.


<a id="phase-2-section-15"></a>

### Complete team development workflow

Let's put everything together.

Imagine four developers working on a Recruitment Management Application:

| Developer | Responsibility       |
| --------- | -------------------- |
| A         | Authentication       |
| B         | Student management   |
| C         | Companies and drives |
| D         | Notifications        |

The team uses:

- GitHub repository.
- `main` branch.
- Feature branches.
- Pull requests.
- Required code reviews.
- GitHub Actions CI.

#### Step 1 — Clone the repository

```bash
git clone https://github.com/company/recruitment-api.git

cd recruitment-api
```

#### Step 2 — Update main

```bash
git switch main
git pull origin main
```

#### Step 3 — Create a feature branch

```bash
git switch -c feature/student-registration
```

#### Step 4 — Develop the feature

Example:

```text
src/
├── controllers/
│   └── student.controller.ts
├── services/
│   └── student.service.ts
└── routes/
    └── student.routes.ts
```

#### Step 5 — Test your changes

```bash
npm run lint
npm run build
npm test
```

#### Step 6 — Stage and commit

```bash
git add src/

git commit -m "feat: add student registration API"
```

#### Step 7 — Push your branch

```bash
git push -u origin feature/student-registration
```

#### Step 8 — Open a pull request

Create a PR:

```text
feature/student-registration → main
```

Add a description explaining the implementation and testing.

#### Step 9 — Code review

A teammate checks:

- Does registration work?
- Are inputs validated?
- Is the password hashed?
- Are duplicate emails handled?
- Are sensitive fields excluded?
- Are tests included?

The reviewer can approve or request changes.

#### Step 10 — CI runs

GitHub Actions executes:

```text
Checkout
   ↓
Install dependencies
   ↓
Generate Prisma Client
   ↓
Lint
   ↓
Build
   ↓
Test
```

If a check fails, fix the issue and push another commit.

#### Step 11 — Merge

After the required reviews and checks pass, merge the PR according to the team's repository policy.

#### Step 12 — Clean up

Delete the feature branch after merging if your team workflow permits it.

**A practical detail:** If `main` changes while you're working, fetch and integrate those updates into your feature branch according to your team's merge/rebase policy.

<a id="phase-2-section-16"></a>

### Advanced Git and collaboration interview Q&A

These are based on the advanced interview topics in your roadmap.

#### Q2.1. What is a monorepo?

A monorepo stores multiple projects or services in one repository.

```text
recruitment-platform/
├── apps/
│   ├── frontend/
│   └── backend/
├── packages/
│   ├── shared-types/
│   └── ui-components/
└── infrastructure/
```

Advantages include shared code and centralized history. Disadvantages include larger repositories and more complex CI optimization.

#### Q2.2. What is a Git submodule?

A submodule allows one Git repository to reference another repository at a specific commit.

```bash
git submodule add https://github.com/company/shared-lib.git libs/shared-lib

git submodule update --init --recursive
```

#### Q2.3. What is a hotfix?

An urgent correction for a production issue.

```bash
git switch main
git pull origin main
git switch -c hotfix/login-error
```

Fix and test the issue, then open a priority PR. Ensure the correction is incorporated into other active release or development branches when appropriate.

#### Q2.4. What is the difference between `git reflog` and `git log`?

`git log` shows commit history reachable from the relevant references. `git reflog` records local movements of references, which can help recover commits after accidental branch movements or resets.

#### Q2.5. What is the difference between a merge commit and a normal commit?

A normal commit usually has one parent. A merge commit typically has two or more parents, recording the integration of separate histories.

#### Q2.6. How would you explain your team's Git workflow in an interview?

A strong answer:

> I start by updating the main branch and creating a feature branch for my assigned task. I implement the changes, run tests and linting, and commit using meaningful Conventional Commit messages. I push the branch and open a pull request with a summary and testing details. My teammates review the changes, and I address their comments. GitHub Actions runs automated checks. Once the required reviews and checks pass, the PR is merged into the main branch.

---

---

<a id="phase-3"></a>

## Phase 3 — JavaScript in Depth

**Objective:** Learn the language, asynchronous execution and browser/API communication.

**Sections:** [JavaScript Fundamentals and Runtime](#phase-3-section-1) · [Variables, Data Types and Type Conversion](#phase-3-section-2) · [Scope, Hoisting and Temporal Dead Zone](#phase-3-section-3) · [Functions, Callbacks and Closures](#phase-3-section-4) · [Objects, Prototypes and `this`](#phase-3-section-5) · [Arrays and Higher-Order Array Methods](#phase-3-section-6) · [Asynchronous JavaScript](#phase-3-section-7) · [Call Stack, Event Loop and Execution Order](#phase-3-section-8) · [Fetch API and HTTP Communication](#phase-3-section-9) · [Debouncing, Throttling and Memory](#phase-3-section-10) · [JavaScript Modules and Error Handling](#phase-3-section-11) · [Advanced Interview Questions](#phase-3-section-12) · [Practical Interview Output Questions](#phase-3-section-13) · [Practical JavaScript exercise](#phase-3-section-14) · [Template literals](#phase-3-section-15) · [Observable state and streamed responses](#phase-3-section-16)

<a id="phase-3-section-1"></a>

### JavaScript Fundamentals and Runtime

#### Q3.1. What is JavaScript?

**Answer:**

JavaScript is a high-level, dynamically typed, prototype-based programming language primarily used to build interactive web applications.

It executes in different environments:

| Environment | Purpose                                          |
| ----------- | ------------------------------------------------ |
| Browser     | DOM manipulation, events, frontend logic         |
| Node.js     | Backend APIs, file operations, server-side logic |
| Deno        | JavaScript and TypeScript runtime                |
| Bun         | JavaScript runtime and development toolkit       |

Common uses include frontend development, backend development, browser extensions, REST APIs, automation, testing and real-time applications.

JavaScript and Java are two different programming languages.

#### Q3.2. Is JavaScript interpreted or compiled?

**Answer:**

Modern JavaScript engines use a combination of interpretation and Just-In-Time (JIT) compilation.

For example, Google's V8 engine broadly follows this process:

**JavaScript source code**

**Parser → Abstract Syntax Tree (AST)**

**Bytecode generation**

**Ignition interpreter**

**TurboFan optimizes frequently executed code**

**Optimized machine code**

- An interpreter executes instructions.
- A compiler translates code into another representation or machine code.
- A JIT compiler compiles code during execution and can optimize frequently executed paths.

#### Q3.3. What is the difference between JavaScript and ECMAScript?

**Answer:**

- ECMAScript is the language specification.
- JavaScript is an implementation of that specification.
- JavaScript engines implement the ECMAScript standard.

ES6 (ECMAScript 2015) introduced features such as `let`, `const`, classes, arrow functions, promises and modules.

#### Q3.4. What is the difference between a JavaScript engine and runtime?

**Answer:**

A JavaScript engine executes JavaScript. A runtime provides the surrounding environment and APIs.

| Engine         | Environment/runtime |
| -------------- | ------------------- |
| V8             | Chrome              |
| V8             | Node.js             |
| SpiderMonkey   | Firefox             |
| JavaScriptCore | Safari              |

Node.js provides APIs such as filesystem access, HTTP, networking and process management.

Browsers provide APIs such as:

```javascript
document
window
localStorage
fetch()
setTimeout()
```

`document.querySelector()` does not work in a standard Node.js application because `document` is a browser API, not a core JavaScript language feature.

<a id="phase-3-section-2"></a>

### Variables, Data Types and Type Conversion

#### Q3.5. Difference between `var`, `let` and `const`?

| Feature                      | `var`       | `let` | `const` |
| ---------------------------- | ----------- | ----- | ------- |
| Scope                        | Function    | Block | Block   |
| Reassignment                 | Yes         | Yes   | No      |
| Redeclaration in same scope  | Yes         | No    | No      |
| Hoisted                      | Yes         | Yes   | Yes     |
| Access before initialization | `undefined` | Error | Error   |

```javascript
var name = "Chirag";
var name = "Rahul"; // Allowed

let age = 20;
age = 21; // Allowed

const country = "India";
// country = "USA"; // TypeError
```

**Practical rule:** Use `const` by default, `let` when reassignment is required, and avoid `var` in modern code.

Important: `const` prevents reassignment of the variable, not mutation of an object stored in that variable.

```javascript
const user = { name: "Chirag" };

user.name = "Amit"; // Allowed
// user = {};       // Not allowed
```

#### Q3.6. What is block scope?

A block is code enclosed in `{}`. Variables declared with `let` and `const` are accessible only inside their block.

```javascript
if (true) {
    let age = 20;
    const name = "Chirag";
    var city = "Vadodara";
}

console.log(city); // Vadodara

// console.log(age);  // ReferenceError
// console.log(name); // ReferenceError
```

`var` is function-scoped, not block-scoped.

#### Q3.7. What are JavaScript's data types?

JavaScript has seven primitive types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Objects are non-primitive values. Arrays and functions are also objects.

```javascript
let name = "Chirag";
let age = 20;
let isStudent = true;
let salary;
let value = null;
let largeNumber = 12345678901234567890n;

let student = {
    name: "Chirag",
    age: 20
};

let marks = [80, 90, 85];
```

Important `typeof` results:

```javascript
console.log(typeof "Hello");      // string
console.log(typeof 20);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof []);           // object
console.log(typeof {});           // object
console.log(typeof function(){}); // function
```

`typeof null === "object"` is a historical JavaScript quirk.

Use `Array.isArray()` to check arrays:

```javascript
console.log(Array.isArray([])); // true
```

#### Q3.8. Difference between `undefined` and `null`?

- `undefined`: A variable has not been assigned a value, or a property is absent.
- `null`: An intentional absence of a value.

```javascript
let username;

console.log(username); // undefined

let selectedUser = null;

console.log(selectedUser); // null
```

#### Q3.9. What is type coercion?

Type coercion is the conversion of a value from one type to another.

Implicit conversion:

```javascript
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log("5" * 2);  // 10
console.log(true + 1); // 2
```

Explicit conversion:

```javascript
Number("100");      // 100
String(100);        // "100"
Boolean(1);         // true
parseInt("25");     // 25
parseFloat("3.5");  // 3.5
```

For external data, explicitly convert and validate values.

```javascript
const ageInput = "20";
const age = Number(ageInput);

if (Number.isNaN(age)) {
    console.log("Invalid age");
} else {
    console.log(age + 5); // 25
}
```

#### Q3.10. Difference between `==` and `===`?

- `==` allows type coercion.
- `===` compares without type coercion.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false

console.log(0 == false);  // true
console.log(0 === false); // false

console.log(null == undefined);  // true
console.log(null === undefined); // false
```

Prefer `===` in application code.

#### Q3.11. What are truthy and falsy values?

Falsy values include:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy, including empty arrays and empty objects.

```javascript
if ([]) {
    console.log("Runs");
}

if ({}) {
    console.log("Also runs");
}
```


**Transcript exercise: why does an empty array enter an if block?**

```javascript
if ([]) console.log('runs'); // runs
console.log([] == true);   // false
console.log([] == false);  // true
```

An array is an object, so its Boolean conversion is true. Loose equality follows a different conversion path: true becomes 1; [] becomes an empty string and then 0, so [] == true compares 0 with 1. For [] == false, both sides become 0. Do not infer Boolean conversion from loose equality.

<a id="phase-3-section-3"></a>

### Scope, Hoisting and Temporal Dead Zone

#### Q3.12. What is scope?

Scope determines where variables and functions can be accessed.

Important types:

1. Global scope
2. Function scope
3. Block scope
4. Module scope

```javascript
const globalName = "Chirag";

function example() {
    const functionName = "Inside function";

    if (true) {
        let blockName = "Inside block";
        console.log(blockName);
    }

    console.log(functionName);
    console.log(globalName);
}
```

The scope chain allows inner scopes to access variables from outer scopes.

#### Q3.13. What is hoisting?

Hoisting is the behaviour where JavaScript processes declarations before executing statements in their respective scopes. It does not mean source code is physically moved.

```javascript
console.log(name); // undefined

var name = "Chirag";
```

Conceptually:

```javascript
var name;

console.log(name);

name = "Chirag";
```

With `let`:

```javascript
console.log(age); // ReferenceError

let age = 20;
```


**Transcript correction: block function declarations**

The transcript reports "25undefined", but its reconstructed code evaluates `typeof f` **inside** the block containing the function declaration. That exact code produces "25function". The reported output cannot be reconciled without the original code and execution mode; it is not an answer to memorize.

```javascript
'use strict';
var abc = 25;
if (true) {
  abc = abc + typeof f;
  function f() {}
}
console.log(abc);      // 25function
console.log(typeof f); // undefined: outside the block in strict mode
```

Ask whether code runs as a module, strict script, or non-strict script before discussing the outer binding; legacy non-strict block-function behavior differs.

#### Q3.14. What is the Temporal Dead Zone (TDZ)?

The TDZ is the period between entering a scope and initializing a `let` or `const` variable.

```javascript
{
    // TDZ starts

    // console.log(age); // ReferenceError

    let age = 20;

    // TDZ ends
    console.log(age);
}
```

#### Q3.15. Difference between function declaration and function expression?

Function declaration:

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Function expressions are assigned to variables:

```javascript
const greet = function() {
    console.log("Hello");
};

greet();
```

A function expression assigned to a `let` or `const` variable cannot be called before that variable is initialized.

<a id="phase-3-section-4"></a>

### Functions, Callbacks and Closures

#### Q3.16. What are JavaScript functions?

Functions are reusable blocks of code that perform specific tasks.

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(100, 3);

console.log(total); // 300
```

JavaScript functions are first-class citizens. They can be:

- Stored in variables.
- Passed as arguments.
- Returned from other functions.
- Stored in objects and arrays.

#### Q3.17. What are arrow functions?

```javascript
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => {
    return a + b;
};

const multiply = (a, b) => a * b;
```

| Feature                | Normal function | Arrow function |
| ---------------------- | --------------- | -------------- |
| Own `this`             | Yes             | No             |
| Own `arguments`        | Yes             | No             |
| Constructor with `new` | Possible        | Not possible   |
| Own prototype property | Yes             | No             |
| Implicit return        | No              | Possible       |

Arrow functions inherit `this` from their surrounding lexical scope.

#### Q3.18. What is a callback function?

A callback is a function passed to another function as an argument and invoked by that function.

```javascript
function processUser(name, callback) {
    console.log("Processing:", name);
    callback();
}

function completed() {
    console.log("Completed");
}

processUser("Chirag", completed);
```

Output:

```text
Processing: Chirag
Completed
```

#### Q3.19. What is a higher-order function?

A higher-order function either accepts another function as an argument or returns a function.

Examples include `map()`, `filter()`, `reduce()` and `forEach()`.

```javascript
function calculate(operation, a, b) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(add, 10, 20)); // 30
```


**Transcript exercise: infinite currying**

```javascript
function sum(a) {
  return function next(b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}
console.log(sum(2)(3)(4)()); // 9
console.log(sum(2)(0)(3)()); // 5
```

An empty call terminates the chain. Testing `if (!b)` would incorrectly stop at zero. This API treats an explicit undefined argument as termination too; explain that contract.

#### Q3.20. What is a closure?

Very important interview topic

A closure occurs when a function retains access to variables from its outer lexical scope, even after the outer function has finished executing.

```javascript
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

**Execution explanation:**

1. `createCounter()` creates `count`.
2. It returns the inner function.
3. The outer function finishes.
4. The inner function retains access to `count`.
5. Each call updates the retained variable.

Real-world applications:

- Private state.
- Function factories.
- Event handlers.
- Debouncing and throttling.
- Maintaining state without global variables.

Example of private state:

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance()); // 1500
console.log(account.balance);      // undefined
```

<a id="phase-3-section-5"></a>

### Objects, Prototypes and `this`

#### Q3.21. What are objects?

Objects store data as key-value pairs and can contain functions called methods.

```javascript
const student = {
    name: "Chirag",
    age: 20,

    introduce() {
        return `My name is ${this.name}`;
    }
};

console.log(student.name);
console.log(student.introduce());
```

Properties can be accessed using dot notation or bracket notation:

```javascript
student.name;
student["name"];
```

#### Q3.22. What is the `this` keyword?

`this` refers to the execution context associated with a function call. Its value depends on how a normal function is called.

```javascript
const user = {
    name: "Chirag",

    greet() {
        console.log(this.name);
    }
};

user.greet(); // Chirag
```

An arrow function does not create its own `this`:

```javascript
const user = {
    name: "Chirag",

    greet: () => {
        console.log(this.name);
    }
};
```

Here, `this` is inherited from the surrounding scope, not the `user` object.

**Practical rule:** Use normal methods when you need the method's `this` to refer to its object.

#### Q3.23. Difference between `call()`, `apply()` and `bind()`?

```javascript
function introduce(city, country) {
    console.log(`${this.name} from ${city}, ${country}`);
}

const user = {
    name: "Chirag"
};
```

**call():** Invokes immediately with separate arguments.

```javascript
introduce.call(user, "Vadodara", "India");
```

**apply():** Invokes immediately with arguments in an array.

```javascript
introduce.apply(user, ["Vadodara", "India"]);
```

**bind():** Returns a new function with bound `this`.

```javascript
const boundIntroduce = introduce.bind(
    user,
    "Vadodara",
    "India"
);

boundIntroduce();
```

#### Q3.24. What is a prototype?

Every ordinary JavaScript object has an internal prototype link to another object or `null`.

If JavaScript cannot find a property on an object, it searches the prototype chain.

```javascript
const person = {
    greet() {
        return "Hello";
    }
};

const student = Object.create(person);

student.name = "Chirag";

console.log(student.name);   // Chirag
console.log(student.greet()); // Hello
```

#### Q3.25. What is prototypal inheritance?

It is the mechanism through which objects inherit properties and methods from other objects.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function() {
    return `I am ${this.name}`;
};

function Student(name, course) {
    Person.call(this, name);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student = new Student("Chirag", "CSE");

console.log(student.introduce());
```

#### Q3.26. What are JavaScript classes?

Classes provide a cleaner syntax over JavaScript's prototype-based inheritance system.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `I am ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    getCourse() {
        return this.course;
    }
}

const student = new Student("Chirag", "CSE");

console.log(student.introduce());
console.log(student.getCourse());
```

Important concepts:

- `constructor()`: initializes instances.
- `extends`: inherits from another class.
- `super()`: calls the parent constructor.
- `static`: defines class-level methods.
- `#privateField`: declares a private class field.

<a id="phase-3-section-6"></a>

### Arrays and Higher-Order Array Methods

Assume this dataset:

```javascript
const students = [
    { name: "Amit", marks: 75 },
    { name: "Chirag", marks: 90 },
    { name: "Raj", marks: 65 },
    { name: "Neha", marks: 85 }
];
```

#### Q3.27. Difference between `map()` and `forEach()`?

- `map()` returns a new transformed array.
- `forEach()` executes a callback for each item and returns `undefined`.

```javascript
const names = students.map(student => student.name);

console.log(names);
// ["Amit", "Chirag", "Raj", "Neha"]
```

```javascript
students.forEach(student => {
    console.log(student.name);
});
```

#### Q3.28. What does `filter()` do?

It creates a new array containing elements that satisfy a condition.

```javascript
const passedStudents = students.filter(
    student => student.marks >= 75
);
```

#### Q3.29. What does `reduce()` do?

It processes an array and combines its elements into a single accumulated result.

```javascript
const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log(totalMarks); // 315
```

| Iteration | Accumulator | Current marks | Result |
| --------- | ----------- | ------------- | ------ |
| 1         | 0           | 75            | 75     |
| 2         | 75          | 90            | 165    |
| 3         | 165         | 65            | 230    |
| 4         | 230         | 85            | 315    |

#### Q3.30. Difference between `find()` and `filter()`?

- `find()` returns the first matching element.
- `filter()` returns all matching elements.

```javascript
const firstTopper = students.find(
    student => student.marks >= 85
);

const allTopStudents = students.filter(
    student => student.marks >= 85
);
```

#### Q3.31. Difference between `some()` and `every()`?

- `some()` returns `true` if at least one element matches.
- `every()` returns `true` only if all elements match.

```javascript
const hasTopper = students.some(
    student => student.marks >= 90
);

const allPassed = students.every(
    student => student.marks >= 40
);
```

#### Q3.32. What is destructuring?

Destructuring extracts values from arrays and properties from objects.

```javascript
const user = {
    name: "Chirag",
    age: 20,
    city: "Vadodara"
};

const { name, age } = user;
```

Array destructuring:

```javascript
const colors = ["red", "green", "blue"];

const [first, second] = colors;
```

#### Q3.33. What are spread and rest operators?

Both use `...`.

Spread expands an iterable or object:

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

const user = { name: "Chirag", age: 20 };

const updatedUser = {
    ...user,
    age: 21
};
```

Rest collects remaining arguments or values:

```javascript
function sum(...numbers) {
    return numbers.reduce(
        (total, number) => total + number,
        0
    );
}

console.log(sum(10, 20, 30)); // 60
```

Important: Spread creates a shallow copy, not a deep copy.

<a id="phase-3-section-7"></a>

### Asynchronous JavaScript

Critical for frontend and backend interviews

#### Q3.34. What is synchronous programming?

Synchronous code executes sequentially. Each operation completes before the next one proceeds.

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

#### Q3.35. What is asynchronous programming?

It allows an application to start an operation and continue executing other work while waiting for that operation to complete.

Examples:

- API requests.
- Database operations.
- File system operations.
- Timers.
- Network communication.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer completed");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Timer completed
```

#### Q3.36. Is JavaScript single-threaded?

JavaScript execution on a given main thread is generally single-threaded: one JavaScript task runs at a time on that thread.

However, runtimes support asynchronous operations through runtime facilities and event-loop mechanisms.

- Browsers support Web Workers.
- Node.js provides an event loop and libuv for asynchronous I/O.
- Node.js also supports worker threads for CPU-intensive work.

**Important:** Asynchronous does not automatically mean parallel execution.

#### Q3.37. What is a Promise?

A Promise represents the eventual completion or failure of an asynchronous operation.

Three states:

- Pending
- Fulfilled
- Rejected

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data loaded successfully");
    } else {
        reject(new Error("Failed to load data"));
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
    .finally(() => console.log("Operation completed"));
```

#### Q3.38. What are `then()`, `catch()` and `finally()`?

| Method      | Purpose                                      |
| ----------- | -------------------------------------------- |
| `then()`    | Handles fulfillment                          |
| `catch()`   | Handles rejection                            |
| `finally()` | Runs after settlement, regardless of outcome |

```javascript
fetch("/api/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then(users => console.log(users))
    .catch(error => console.error(error))
    .finally(() => console.log("Request finished"));
```

#### Q3.39. What is `async/await`?

It is syntax that makes Promise-based asynchronous code easier to read.

An `async` function always returns a Promise. `await` pauses execution of that async function until the Promise settles; it does not block the JavaScript thread.

```javascript
async function getUsers() {
    const response = await fetch("/api/users");

    if (!response.ok) {
        throw new Error("Unable to fetch users");
    }

    const users = await response.json();

    return users;
}

getUsers()
    .then(users => console.log(users))
    .catch(error => console.error(error.message));
```

#### Q3.40. How do you handle errors with async/await?

Use `try...catch...finally`.

```javascript
async function loadUsers() {
    try {
        const response = await fetch("/api/users");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        console.log(users);
        return users;

    } catch (error) {
        console.error("Error:", error.message);
        throw error;

    } finally {
        console.log("Loading completed");
    }
}
```

Important: `fetch()` generally rejects for network-level failures, not simply because the server returns HTTP 404 or 500. Check `response.ok`.

#### Q3.41. Difference between `Promise.all()` and `Promise.allSettled()`?

`Promise.all()` rejects if any input Promise rejects.

```javascript
const results = await Promise.all([
    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders")
]);
```

`Promise.allSettled()` waits until every Promise settles.

```javascript
const results = await Promise.allSettled([
    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders")
]);

results.forEach(result => {
    console.log(result.status);
});
```

Other methods:

| Method                 | Behaviour                   |
| ---------------------- | --------------------------- |
| `Promise.all()`        | All must fulfill            |
| `Promise.allSettled()` | Waits for all to settle     |
| `Promise.race()`       | First settled result wins   |
| `Promise.any()`        | First fulfilled result wins |

#### Q3.42. What is callback hell?

Callback hell occurs when nested callbacks make asynchronous code difficult to understand and maintain.

```javascript
getUser(userId, user => {
    getOrders(user.id, orders => {
        getPayments(orders[0].id, payments => {
            console.log(payments);
        });
    });
});
```

Improve it with async/await:

```javascript
async function getPaymentDetails(userId) {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const payments = await getPayments(orders[0].id);

        console.log(payments);
    } catch (error) {
        console.error(error);
    }
}
```

<a id="phase-3-section-8"></a>

### Call Stack, Event Loop and Execution Order

#### Q3.43. What is the call stack?

The call stack is a Last-In, First-Out (LIFO) data structure used to track function execution.

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

Execution:

1. `first()` enters the stack.
2. `second()` enters the stack.
3. `third()` enters the stack.
4. `third()` finishes.
5. `second()` finishes.
6. `first()` finishes.


#### Execution context and the call stack

##### Q3.44. What is Execution Context in JavaScript?

Timestamp: 08:43

Very important

Interviewer: Can you explain what execution context is in JavaScript?

**What is an execution context?**

An execution context is the environment in which JavaScript code is evaluated and executed.

It keeps track of information needed during execution, such as:

- Variables.
- Function declarations.
- Scope and lexical environments.
- The value of `this`.

Think of it as the environment JavaScript creates to execute your code.

**Types of execution contexts**

There are three commonly discussed execution-context categories:

1. Global Execution Context.
2. Function Execution Context.
3. Eval Execution Context.

The first two are the important ones for most interviews.

**Global Execution Context (GEC)**

When JavaScript starts executing a script, it creates a Global Execution Context.

Example:

```javascript
var name = "Chirag";

function greet() {
    console.log("Hello");
}

console.log(name);
greet();
```

The global execution context manages the global-level execution.

**Function Execution Context (FEC)**

Whenever a function is invoked, JavaScript creates a new function execution context for that invocation.

Example:

```javascript
function add(a, b) {
    let result = a + b;

    return result;
}

let answer = add(10, 20);
```

When `add(10, 20)` executes, a function execution context is created with its own parameters and local environment.

**Two important phases**

In a simplified explanation, JavaScript execution context processing involves two phases.

##### Execution Context

1. Creation Phase

- Establishes the lexical environment.
- Creates bindings for declarations.
- Initializes `var` bindings with undefined.
- Handles function declarations.
- Sets up the `this` binding.

2. Execution Phase

- Executes statements.
- Assigns values to variables.
- Evaluates expressions.
- Invokes functions.
- Returns results.

Example:

```javascript
var a = 10;

function greet() {
    var message = "Hello";
    console.log(message);
}

greet();
```

During the creation phase, bindings are established.

During the execution phase, assignments and function calls are performed.

**What is the Call Stack?**

The call stack is a data structure used by JavaScript to keep track of active execution contexts.

Example:

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

Execution:

##### Call Stack – During third()

third()

Top of stack

second()

first()

Global Execution Context

Conceptual stack representation. The currently executing function is on top.

Once `third()` finishes, its execution context is removed. Then `second()` resumes, followed by `first()`.

**What is LIFO?**

LIFO means Last In, First Out.

The last function pushed onto the call stack is the first one removed.

Example:

```text
Push: first()
Push: second()
Push: third()

Pop: third()
Pop: second()
Pop: first()
```

Interview-ready answer:

"Execution context is the environment in which JavaScript code executes. The main execution contexts are global and function execution contexts. Each context maintains information such as variables, lexical environments and the this binding. During execution-context setup, declarations and bindings are established, and then statements are executed. JavaScript uses a call stack to manage active execution contexts, following the LIFO principle."

**Follow-up: Which data structure does the JavaScript call stack use?**

Answer: Stack.

It follows LIFO – Last In, First Out.

Interviewer feedback: The candidate gave a good answer but mixed up the call stack's purpose with the execution context's purpose. Remember:

- Execution context: Environment for executing code.
- Call stack: Tracks active execution contexts.

#### Q3.45. What is the event loop?

The event loop coordinates JavaScript task execution and asynchronous callbacks.

Key concepts:

- Call stack.
- Runtime APIs.
- Task queues.
- Microtask queue.
- Event loop.

Simplified order:

1. Execute synchronous JavaScript.
2. When the current task finishes, process microtasks.
3. Continue processing microtasks until the queue is empty.
4. The runtime can proceed to another task.
5. Repeat.

Browser rendering opportunities are also coordinated by the browser event loop.

#### Q3.46. Difference between microtasks and macrotasks?

Microtasks are processed after the current JavaScript task completes.

Examples:

- Promise callbacks.
- `queueMicrotask()`.
- MutationObserver callbacks.

Tasks often called macrotasks include:

- `setTimeout()`.
- `setInterval()`.
- DOM event callbacks.
- Some I/O callbacks.

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

#### Q3.47. Predict this output.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve()
    .then(() => console.log("Promise 1"))
    .then(() => console.log("Promise 2"));

queueMicrotask(() => {
    console.log("Microtask");
});

console.log("End");
```

Answer:

```text
Start
End
Promise 1
Microtask
Promise 2
Timeout
```

Why?

- `Start` and `End` are synchronous.
- `Promise 1` is queued first.
- `Microtask` is queued second.
- `Promise 2` is queued when the first Promise callback completes, behind the already queued microtask.
- The timer runs after the microtask queue is drained.


**Additional transcript exercises (representative, not recovered original code)**

The transcript did not include the code displayed for its final output question. These are practice examples, not a reconstruction of that missing question.

```javascript
console.log('A');
Promise.resolve().then(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
});
console.log('D'); // A, D, B, C
```

```javascript
console.log(1);
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => console.log(3));
}, 0);
Promise.resolve().then(() => console.log(4));
console.log(5); // 1, 5, 4, 2, 3
```

Trace the synchronous stack, drain microtasks, run the timer task, then drain newly queued microtasks.

<a id="phase-3-section-9"></a>

### Fetch API and HTTP Communication

#### Q3.48. What is the Fetch API?

Fetch is an API for making HTTP requests.

```javascript
async function getProducts() {
    const response = await fetch(
        "https://api.example.com/products"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    return products;
}
```

#### Q3.49. How do you send a POST request?

```javascript
async function createUser(userData) {
    const response = await fetch(
        "https://api.example.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    return response.json();
}

createUser({
    name: "Chirag",
    email: "chirag@example.com"
});
```

Important properties:

- `method`: HTTP method.
- `headers`: request metadata.
- `body`: request payload.
- `JSON.stringify()`: converts JavaScript objects into JSON text.
- `response.json()`: reads and parses a JSON response body.

#### Q3.50. What is AbortController?

`AbortController` allows you to cancel certain asynchronous operations, including Fetch requests.

```javascript
const controller = new AbortController();

async function loadData() {
    try {
        const response = await fetch(
            "https://api.example.com/users",
            {
                signal: controller.signal
            }
        );

        const users = await response.json();

        console.log(users);

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Request cancelled");
        } else {
            console.error(error);
        }
    }
}

loadData();

// Cancel the request:
controller.abort();
```

**Real-world example:** When a user types into a search field, cancel the previous request before sending a new one to reduce unnecessary work and avoid stale results.

<a id="phase-3-section-10"></a>

### Debouncing, Throttling and Memory

#### Q3.51. What is debouncing?

Debouncing delays execution until a specified period has passed without another invocation.

Useful for search suggestions.

```javascript
function debounce(callback, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

search("Java");
search("JavaScript");
```

Only the last invocation runs if no newer invocation occurs within 500 milliseconds.

#### Q3.52. What is throttling?

Throttling limits how frequently a function can execute.

Useful for scroll events.

```javascript
function throttle(callback, delay) {
    let lastExecution = 0;

    return function(...args) {
        const now = Date.now();

        if (now - lastExecution >= delay) {
            lastExecution = now;
            callback.apply(this, args);
        }
    };
}

const handleScroll = throttle(() => {
    console.log("Scroll event handled");
}, 200);

window.addEventListener("scroll", handleScroll);
```

#### Q3.53. Difference between debouncing and throttling?

| Debouncing                     | Throttling                         |
| ------------------------------ | ---------------------------------- |
| Waits until activity stops     | Limits execution frequency         |
| Useful for search inputs       | Useful for scroll events           |
| Executes after a quiet period  | Executes at controlled intervals   |
| Reduces repeated final actions | Controls continuous event handling |

#### Q3.54. How does JavaScript garbage collection work?

Garbage collection is automatic memory management. JavaScript engines identify objects that are no longer reachable and can reclaim their memory.

```javascript
let user = {
    name: "Chirag"
};

user = null;
```

If no other reachable reference points to the object, it becomes eligible for garbage collection.

#### Q3.55. What is a memory leak?

A memory leak occurs when an application retains references to data that is no longer needed.

Common causes:

- Unremoved event listeners.
- Unmanaged timers.
- Unnecessary global variables.
- Retained DOM references.
- Growing caches without eviction.
- Closures retaining large objects unintentionally.

Example:

```javascript
function startTimer() {
    const timer = setInterval(() => {
        console.log("Running");
    }, 1000);

    return () => clearInterval(timer);
}

const stopTimer = startTimer();

// Later, when no longer needed:
stopTimer();
```

This provides an explicit cleanup function.

<a id="phase-3-section-11"></a>

### JavaScript Modules and Error Handling

#### Q3.56. What are JavaScript modules?

Modules divide code into reusable files.

`math.js`

```javascript
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;
```

`app.js`

```javascript
import { add, PI } from "./math.js";

console.log(add(10, 20));
console.log(PI);
```

Default export:

```javascript
// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}
```

```javascript
// app.js
import User from "./user.js";

const user = new User("Chirag");
```

#### Q3.57. Difference between CommonJS and ES Modules?

| CommonJS                           | ES Modules                                |
| ---------------------------------- | ----------------------------------------- |
| `require()`                        | `import`                                  |
| `module.exports`                   | `export`                                  |
| Traditionally used in Node.js      | Standard JavaScript module system         |
| Runtime-oriented loading           | Static module structure                   |
| Less suited to static tree shaking | Supports static analysis and tree shaking |

CommonJS:

```javascript
const express = require("express");

module.exports = {
    name: "My Application"
};
```

ES Modules:

```javascript
import express from "express";

export const name = "My Application";
```

Node.js supports both. Project configuration and file extensions determine how files are interpreted.

#### Q3.58. What is error handling in JavaScript?

JavaScript uses `try`, `catch`, `finally` and `throw`.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution completed");
}
```

Common error types:

- `SyntaxError`: invalid syntax.
- `ReferenceError`: accessing an unavailable variable.
- `TypeError`: operation incompatible with the value's type.
- `RangeError`: value outside an allowed range.
- `Error`: general error object.

Engineering practice: Avoid silently swallowing errors. Log useful context, propagate errors when necessary and return appropriate API error responses.


<a id="phase-3-section-12"></a>

### Advanced Interview Questions

#### Q3.59. Difference between shallow copy and deep copy?

A shallow copy copies the top-level object but retains references to nested objects.

```javascript
const original = {
    name: "Chirag",
    address: {
        city: "Vadodara"
    }
};

const shallow = { ...original };

shallow.address.city = "Ahmedabad";

console.log(original.address.city); // Ahmedabad
```

A deep copy creates an independent copy of nested data.

```javascript
const deep = structuredClone(original);

deep.address.city = "Mumbai";

console.log(original.address.city); // Vadodara
```

`structuredClone()` supports many built-in data types and circular references, but cannot clone every JavaScript value. For example, functions cannot be cloned this way.


**Transcript follow-up: are objects passed by reference?** JavaScript passes values. For an object, the copied value is a reference: mutating the referenced object is visible to the caller, but assigning a different object to the parameter does not reassign the caller's variable.

#### Q3.60. What is immutability?

Immutability means creating a new value instead of directly modifying an existing value.

```javascript
const user = {
    name: "Chirag",
    age: 20
};

const updatedUser = {
    ...user,
    age: 21
};
```

Benefits:

- Predictable state updates.
- Easier debugging.
- Fewer accidental side effects.
- Useful in React state management.

#### Q3.61. What is optional chaining?

Optional chaining (`?.`) safely accesses nested properties when an intermediate value may be `null` or `undefined`.

```javascript
const user = {
    profile: {
        name: "Chirag"
    }
};

console.log(user.profile?.name);
console.log(user.address?.city); // undefined
```

#### Q3.62. What is nullish coalescing?

The nullish coalescing operator (`??`) uses a fallback only when the left side is `null` or `undefined`.

```javascript
const username = null ?? "Guest";

console.log(username); // Guest
```

Difference from `||`:

```javascript
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

console.log("" || "Guest"); // Guest
console.log("" ?? "Guest"); // ""
```

Browser storage is covered in [Web Foundations](#phase-1); use that reference when choosing storage for frontend state.

#### Q3.63. Difference between synchronous and asynchronous errors?

Synchronous:

```javascript
try {
    throw new Error("Something failed");
} catch (error) {
    console.log(error.message);
}
```

Asynchronous:

```javascript
async function loadData() {
    try {
        await Promise.reject(new Error("Request failed"));
    } catch (error) {
        console.log(error.message);
    }
}
```

A `try...catch` around a function call does not automatically catch an error that occurs later in an unawaited asynchronous operation.

#### Q3.64. Difference between `setTimeout(fn, 0)` and immediate execution?

`setTimeout(fn, 0)` schedules a callback as a future task. It does not execute immediately.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

#### Q3.65. What is event delegation?

Event delegation allows a parent element to handle events originating from its descendants.

```javascript
document.querySelector("#student-list")
    .addEventListener("click", (event) => {
        const button = event.target.closest(".delete-btn");

        if (!button) return;

        const studentId = button.dataset.id;

        console.log("Delete student:", studentId);
    });
```

Benefits:

- Fewer event listeners.
- Works with dynamically added child elements.
- Centralized event handling.

This is also relevant to DOMLens, which uses document-level event listeners to support element inspection.

<a id="phase-3-section-13"></a>

### Practical Interview Output Questions

These are common interview questions. Each answer is provided immediately for revision.

#### Q3.66. Predict the output.

```javascript
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof null);
console.log(Array.isArray([]));
```

**Answer:**

```text
number
undefined
object
true
```

#### Q3.67. Predict the output.

```javascript
let a = 10;

function test() {
    let a = 20;
    console.log(a);
}

test();

console.log(a);
```

**Answer:**

```text
20
10
```

The inner `a` shadows the outer variable.

#### Q3.68. Predict the output.

```javascript
console.log(1 + "2" + 3);
console.log(1 + 2 + "3");
```

**Answer:**

```text
123
33
```

Evaluation happens from left to right.

#### Q3.69. Predict the output.

```javascript
const user = {
    name: "Chirag"
};

const anotherUser = user;

anotherUser.name = "Amit";

console.log(user.name);
```

**Answer:**

```text
Amit
```

Both variables reference the same object.

#### Q3.70. Predict the output.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(number => number * 2);

console.log(numbers);
console.log(result);
```

**Answer:**

```text
[1, 2, 3]
[2, 4, 6]
```

#### Q3.71. Predict the output.

```javascript
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const a = outer();
const b = outer();

a();
a();
b();
```

**Answer:**

```text
1
2
1
```

Each call to `outer()` creates a separate lexical environment.

#### Q3.72. Predict the output.

```javascript
console.log("One");

Promise.resolve().then(() => {
    console.log("Two");
});

setTimeout(() => {
    console.log("Three");
}, 0);

console.log("Four");
```

**Answer:**

```text
One
Four
Two
Three
```

#### Q3.73. Predict the output.

```javascript
const value = 0;

console.log(value || 10);
console.log(value ?? 10);
```

**Answer:**

```text
10
0
```

`||` checks truthiness. `??` checks only `null` and `undefined`.


<a id="phase-3-section-14"></a>

### Practical JavaScript exercise

We will implement a small student management module.

Features:

1. Add students.
2. Search students.
3. Filter students.
4. Calculate average marks.
5. Display student information.

#### Q3.74. How would you implement it using JavaScript?

Project structure:

```text
student-manager/
│
├── index.html
├── package.json
│
└── src/
    ├── data.js
    ├── studentService.js
    └── app.js
```

`data.js`

```javascript
export const students = [
    { id: 1, name: "Amit", marks: 75 },
    { id: 2, name: "Chirag", marks: 90 },
    { id: 3, name: "Raj", marks: 65 }
];
```

`studentService.js`

```javascript
export function getAllStudents(students) {
    return students;
}

export function searchStudent(students, name) {
    return students.filter(student =>
        student.name.toLowerCase().includes(name.toLowerCase())
    );
}

export function getPassedStudents(students) {
    return students.filter(student => student.marks >= 40);
}

export function calculateAverage(students) {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    return total / students.length;
}
```

`app.js`

```javascript
import { students } from "./data.js";

import {
    searchStudent,
    getPassedStudents,
    calculateAverage
} from "./studentService.js";

console.log("All students:", students);

console.log(
    "Search:",
    searchStudent(students, "chi")
);

console.log(
    "Passed:",
    getPassedStudents(students)
);

console.log(
    "Average:",
    calculateAverage(students)
);
```

`package.json`:

```json
{
  "type": "module"
}
```

Run:

```bash
node src/app.js
```

Expected average:

```text
76.66666666666667
```

---

**Q3.75. What is the difference between synchronous and asynchronous operations in a browser?**

Answer:

- Synchronous operations execute one after another and block further JavaScript execution until they finish.
- Asynchronous operations allow the application to continue working while waiting for operations such as network requests or timers.

For example, using `fetch()` allows the browser to request API data without blocking the main JavaScript thread while waiting for the response.

---


**Q3.76. What are JavaScript events?**

Answer: Events are actions or occurrences that happen in the browser and can be handled using JavaScript.

Examples include:

- `click`
- `submit`
- `keydown`
- `mouseover`
- `change`
- `load`

For example, we can listen for a button click and display a message when the user presses it.


**Q3.77. What is event bubbling?**

Answer: Event bubbling is the process in which an event starts at the target element and then propagates upwards through its parent elements.

For example, if a button is inside a div, clicking the button can trigger its click handler and then the parent's click handler.


**Q3.78. What is event capturing?**

Answer: Event capturing is the process in which an event travels from the outermost ancestor towards the target element.

It happens before the bubbling phase.

We can register a capturing event listener by passing `true` or `{ capture: true }` as the third argument to `addEventListener()`.


**Q3.79. What is the difference between event bubbling and event capturing?**

Answer:

- Capturing: Event travels from parent elements towards the target.
- Bubbling: Event travels from the target towards its parent elements.

For example, when a button is clicked inside a container, capturing handles the event from the container towards the button, while bubbling handles it from the button towards the container.


<a id="phase-3-section-15"></a>

### Template literals

##### Q3.80. What are Template Literals?

Interviewer: Can you tell me about template literals?

**Explanation**

Template literals allow us to create strings using backticks and embed JavaScript expressions directly inside them.

Traditional approach:

```javascript
let name = "Chirag";
let age = 21;

let message = "My name is " + name + " and I am " + age + " years old.";

console.log(message);
```

Using template literals:

```javascript
let name = "Chirag";
let age = 21;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
```

Output:

```text
My name is Chirag and I am 21 years old.
```

**Syntax**

- Backtick: `` ` ``
- Dollar sign: `$`
- Curly braces: `{}`

Example with an expression:

```javascript
let a = 10;
let b = 20;

console.log(`Addition = ${a + b}`);
```

Output:

```text
Addition = 30
```

**Important features**

Multiline strings

```javascript
let message = `
Hello Chirag,
Welcome to JavaScript.
Keep learning!
`;
```

Function calls inside template literals

```javascript
function greet(name) {
    return `Hello ${name}`;
}

console.log(`${greet("Chirag")}`);
```

Interview-ready answer:

"Template literals are a modern JavaScript feature that allows us to create strings using backticks. They support string interpolation through `${}` and also allow multiline strings and embedded expressions."


<a id="phase-3-section-16"></a>

### Observable state and streamed responses

##### What is state management?

Interview question: What is state management?

Interview-ready answer

State management is the process of storing, updating, and sharing application data so that different parts of the application remain synchronized.

In DOMLens, I created a custom reactive state store called `ComponentState`.

It acts as the single source of truth for the selected component's HTML and CSS.

When the state changes, subscribed parts of the application receive notifications and update the live preview, code generation, or AI editing interface.

**Example**

Suppose a user selects a card.

The current state might be:

```javascript
{
    html: "<div class='card'>Hello</div>",
    css: ".card { color: red; }"
}
```

The user asks AI:

"Change the text color to blue."

The state changes to:

```javascript
{
    html: "<div class='card'>Hello</div>",
    css: ".card { color: blue; }"
}
```

The live preview and generated code should reflect the updated state.

**What is a Single Source of Truth?**

A Single Source of Truth means that the authoritative application data is maintained in one central location instead of maintaining multiple independent copies.

In DOMLens:

- Original HTML/CSS snapshots are maintained.
- Current HTML/CSS are authoritative mutable state.
- Changes are distributed through event subscriptions.

**Why is this useful?**

Without centralized state, different tabs could display different versions of the same component.

Centralized state keeps the live preview, code tab, and AI editing functionality synchronized.

##### What is the Observer pattern?

Interview question: Explain the Observer pattern.

Interview-ready answer

The Observer pattern is a design pattern where one object maintains a list of subscribers and notifies them when its state changes.

In DOMLens, the `ComponentState` store maintains listeners for events such as `change`, `theme`, `ai_edit`, and `reset`.

When a relevant event occurs, subscribed components are notified and can update their interface.

**Simple example**

```javascript
class Store {
    constructor() {
        this.listeners = [];
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify(data) {
        this.listeners.forEach(callback => {
            callback(data);
        });
    }
}

const store = new Store();

store.subscribe(data => {
    console.log("Updated:", data);
});

store.notify("Hello");
```

Output:

```text
Updated: Hello
```

**Explain each method**

| Method        | Purpose                         |
| ------------- | ------------------------------- |
| `subscribe()` | Registers a listener            |
| `notify()`    | Notifies registered listeners   |
| `callback`    | Function executed when notified |

**Observer pattern vs Pub-Sub**

They are closely related, but not exactly the same.

- Observer pattern commonly involves a subject notifying its observers directly.
- Pub-Sub commonly uses an event channel or event bus between publishers and subscribers.

Your project's `ComponentState` uses a centralized listener registry and is described as a reactive store / Pub-Sub system.

##### What is unidirectional data flow?

Unidirectional data flow means that data moves in one controlled direction through an application.

In DOMLens, the central state store is the authoritative source of current HTML and CSS.

A simplified flow:

User action

Edit CSS or request AI modification

ComponentState update

Notify subscribers

Live Preview

Code

AI Edit

This makes it easier to track where changes originate and how they affect the rest of the application.

##### AI Integration and API Architecture

##### What is streaming in AI applications?

Interview question: What is streaming, and why did you use it?

Interview-ready answer

Streaming means receiving a response gradually instead of waiting for the complete response before displaying or processing it.

In DOMLens, I implemented streaming using the browser's `ReadableStream` API and a custom Server-Sent Events parser.

This allows the application to process incoming response chunks as they arrive.

**Normal response vs streaming response**

Normal response

Wait for complete response

A

B

C

D

E

Complete result becomes available after generation finishes.

Streaming response

Receive chunks progressively

A

B

C

D

E

Each chunk can be processed as it arrives.

Streaming can improve perceived responsiveness for longer AI responses.

##### What is Server-Sent Events (SSE)?

Interview question: Explain SSE.

Interview-ready answer

Server-Sent Events is a protocol that allows a server to send a continuous stream of events to a client over an HTTP connection.

In DOMLens, I implemented a custom SSE parser that consumes streamed response data through `ReadableStream`.

The parser handles incoming chunks, decodes them, buffers incomplete lines, and processes complete event messages.

**Simple SSE message**

```text
data: Hello

data: World
```

Each event is separated by a blank line.

**Important APIs**

| API               | Purpose                            |
| ----------------- | ---------------------------------- |
| `response.body`   | Provides the response stream       |
| `getReader()`     | Creates a stream reader            |
| `ReadableStream`  | Represents readable streaming data |
| `TextDecoder`     | Converts bytes into text           |
| `AbortController` | Cancels an ongoing request         |

**Example**

```javascript
const response = await fetch(url);

const reader = response.body.getReader();

const decoder = new TextDecoder();

while (true) {

    const { value, done } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(
        value,
        { stream: true }
    );

    console.log(chunk);
}
```

This is a simplified streaming example. Your actual SSE parser also needs to buffer partial messages and process event boundaries.

**Q3.81. What is `ReadableStream`?**

`ReadableStream` is a Web API that allows JavaScript to read data progressively from a source.

For example:

```javascript
const response = await fetch(API_URL);

const reader = response.body.getReader();

while (true) {
  const { value, done } = await reader.read();

  if (done) {
    break;
  }

  const chunk = new TextDecoder().decode(value);

  console.log(chunk);
}
```

Explanation:

1. `fetch()` sends the request.
2. `response.body` provides the response stream.
3. `getReader()` obtains a reader.
4. `reader.read()` reads the next available chunk.
5. `TextDecoder` converts received bytes into text.
6. The loop continues until the stream finishes.

**Q3.82. What is a common problem with streaming?**

A chunk is not necessarily a complete message.

For example, the server may send:

```text
Chunk 1: {"name":
Chunk 2: "button",
Chunk 3: "color":"blue"}
```

You cannot safely assume that every chunk is a complete JSON object.

You need to buffer incoming data, identify complete SSE events or messages, and then parse them.

This is particularly important when handling streamed AI responses.

---

<a id="phase-4"></a>

## Phase 4 — TypeScript in Depth

**Objective:** Apply static types, narrowing and generics to JavaScript code.

**Sections:** [TypeScript Fundamentals](#phase-4-section-1) · [Practical TypeScript exercise](#phase-4-section-2)

<a id="phase-4-section-1"></a>

### TypeScript Fundamentals

#### Q4.1. What is TypeScript?

TypeScript is a programming language built on JavaScript. It adds a static type system and compiles into JavaScript.

It helps detect many errors during development rather than waiting for runtime.

JavaScript:

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, "20")); // "1020"
```

TypeScript:

```typescript
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));
```

The TypeScript compiler reports a type error if you try to pass a string where a number is required.

#### Q4.2. Difference between JavaScript and TypeScript?

| JavaScript                                            | TypeScript                                    |
| ----------------------------------------------------- | --------------------------------------------- |
| Dynamically typed                                     | Static type system                            |
| `.js`                                                 | `.ts`                                         |
| No built-in static type checking                      | Compile-time type checking                    |
| Runs directly in supported runtimes                   | Usually compiled/transformed to JavaScript    |
| Types checked mainly at runtime through program logic | Many type errors can be caught before runtime |

Important: TypeScript types are generally erased during compilation. They do not automatically validate incoming API data at runtime.

#### Q4.3. How do you install and compile TypeScript?

```bash
npm init -y

npm install -D typescript

npx tsc --init

npx tsc
```

A typical configuration:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

#### Q4.4. What are TypeScript's basic types?

```typescript
let username: string = "Chirag";
let age: number = 20;
let isStudent: boolean = true;

let marks: number[] = [80, 90, 85];

let user: {
    name: string;
    age: number;
} = {
    name: "Chirag",
    age: 20
};

let id: string | number = 101;

let anything: any = "Hello";
let unknownValue: unknown = "Hello";

function logMessage(): void {
    console.log("Hello");
}

function throwError(): never {
    throw new Error("Something failed");
}
```

Important:

- `any`: disables meaningful type checking for that value.
- `unknown`: requires type checking before use.
- `void`: commonly describes a function with no meaningful return value.
- `never`: represents values that do not occur, such as a function that never completes normally.

#### Q4.5. Difference between `any` and `unknown`?

`any` permits almost any operation without checking.

```typescript
let a: any = "Hello";

console.log(a.toUpperCase());
console.log(a.someMethod());
```

`unknown` requires type narrowing first.

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

Prefer `unknown` when handling untrusted or uncertain data.

#### Q4.6. What are TypeScript interfaces?

An interface defines the expected structure of an object.

```typescript
interface Student {
    id: number;
    name: string;
    age: number;
    email?: string;
}

const student: Student = {
    id: 1,
    name: "Chirag",
    age: 20
};
```

`email?` means the property is optional.

Interfaces are useful for:

- API request and response objects.
- React component props.
- Service contracts.
- Domain entities.

#### Q4.7. Difference between `type` and `interface`?

Interface:

```typescript
interface User {
    name: string;
    age: number;
}
```

Type alias:

```typescript
type User = {
    name: string;
    age: number;
};
```

A type alias can also represent unions and intersections:

```typescript
type ID = string | number;

type Admin = {
    permissions: string[];
};

type Employee = {
    name: string;
};

type AdminEmployee = Employee & Admin;
```

Interfaces support declaration merging, while type aliases do not.

**Interview answer:** Both can describe object structures. Choose based on whether you need interface extension/declaration merging or type features such as unions, intersections and mapped types.

#### Q4.8. What are union and intersection types?

Union (`|`): a value can be one of multiple types.

```typescript
type ID = string | number;

let userId: ID = 101;
userId = "USR101";
```

Intersection (`&`): a value must satisfy multiple types.

```typescript
type User = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type EmployeeUser = User & Employee;

const employee: EmployeeUser = {
    name: "Chirag",
    employeeId: 101
};
```

#### Q4.9. What are generics?

Important advanced TypeScript topic

Generics allow reusable code to work with different data types while preserving type information.

Without generics:

```typescript
function getValue(value: any): any {
    return value;
}
```

With generics:

```typescript
function getValue<T>(value: T): T {
    return value;
}

const name = getValue<string>("Chirag");
const age = getValue<number>(20);
```

Practical API response example:

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
}

interface User {
    id: number;
    name: string;
}

const response: ApiResponse<User> = {
    success: true,
    data: {
        id: 1,
        name: "Chirag"
    },
    message: "User fetched"
};
```

This is useful when creating reusable API response structures.

#### Q4.10. What are type assertions?

Type assertions tell the TypeScript compiler to treat a value as a particular type.

```typescript
const input = document.querySelector("#username");

const usernameInput = input as HTMLInputElement;

console.log(usernameInput.value);
```

A type assertion does not perform runtime conversion or validation.

Safer approach:

```typescript
const input = document.querySelector("#username");

if (input instanceof HTMLInputElement) {
    console.log(input.value);
}
```

#### Q4.11. What is type narrowing?

Type narrowing reduces a broad type to a more specific type through checks.

```typescript
function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(0));
    }
}
```

Common narrowing techniques:

- `typeof`
- `instanceof`
- `in`
- Equality checks.
- Discriminated unions.
- Custom type guards.

#### Q4.12. What are enums?

Enums define a set of named constants.

```typescript
enum ApplicationStatus {
    PENDING,
    APPROVED,
    REJECTED
}

const status = ApplicationStatus.APPROVED;

console.log(status); // 1
```

String enum:

```typescript
enum Role {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT",
    COMPANY = "COMPANY"
}
```

An alternative is a string literal union:

```typescript
type Role = "ADMIN" | "STUDENT" | "COMPANY";
```

#### Q4.13. What is `tsconfig.json`?

It configures the TypeScript compiler.

Important options:

| Option             | Purpose                                |
| ------------------ | -------------------------------------- |
| `target`           | JavaScript version output              |
| `module`           | Module system                          |
| `moduleResolution` | Module resolution strategy             |
| `strict`           | Enables strict type checking           |
| `rootDir`          | Source directory                       |
| `outDir`           | Compiled output directory              |
| `esModuleInterop`  | Improves CommonJS import compatibility |
| `noEmit`           | Checks types without generating output |


<a id="phase-4-section-2"></a>

### Practical TypeScript exercise

Build a typed version of the student-management example from the JavaScript phase.

#### Q4.14. How would you implement the same logic in TypeScript?

Project structure:

```text
student-manager-ts/
│
├── src/
│   ├── types.ts
│   ├── data.ts
│   ├── studentService.ts
│   └── app.ts
│
├── package.json
└── tsconfig.json
```

`types.ts`

```typescript
export interface Student {
    id: number;
    name: string;
    marks: number;
}
```

`data.ts`

```typescript
import type { Student } from "./types.js";

export const students: Student[] = [
    { id: 1, name: "Amit", marks: 75 },
    { id: 2, name: "Chirag", marks: 90 },
    { id: 3, name: "Raj", marks: 65 }
];
```

`studentService.ts`

```typescript
import type { Student } from "./types.js";

export function searchStudent(
    students: Student[],
    name: string
): Student[] {
    return students.filter(student =>
        student.name.toLowerCase().includes(name.toLowerCase())
    );
}

export function getPassedStudents(
    students: Student[]
): Student[] {
    return students.filter(student => student.marks >= 40);
}

export function calculateAverage(
    students: Student[]
): number {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    return total / students.length;
}
```

`app.ts`

```typescript
import { students } from "./data.js";

import {
    searchStudent,
    getPassedStudents,
    calculateAverage
} from "./studentService.js";

console.log(searchStudent(students, "chi"));

console.log(getPassedStudents(students));

console.log(calculateAverage(students));
```

Compile and run:

```bash
npx tsc
node dist/app.js
```

This example uses Node.js ESM-compatible `.js` import specifiers with TypeScript's `NodeNext` configuration.

**What have we implemented?**

- Interface-based data modelling.
- Strongly typed functions.
- Module imports and exports.
- Array methods.
- Filtering and searching.
- Data aggregation.
- TypeScript compilation.

These principles also apply to larger applications such as UniNest AI.


#### Q4.15. How is TypeScript useful in a large backend application?

Consider an insurance application managing policies.

```typescript
interface Policy {
    id: string;
    customerId: string;
    premium: number;
    status: "ACTIVE" | "PENDING" | "EXPIRED";
}

function calculatePremium(policy: Policy): number {
    return policy.premium * 1.18;
}
```

Benefits:

- Clear data contracts.
- Better IDE autocomplete.
- Compile-time checks.
- Easier refactoring.
- More maintainable service interfaces.

However, TypeScript types do not replace runtime validation for user input or API responses.

---

---

<a id="phase-5"></a>

## Phase 5 — Java and Object-Oriented Design

**Objective:** Study Java before Python: JVM, types, OOP, exceptions and collections.

**Sections:** [Java Foundations](#phase-5-section-1) · [Control Flow and Arrays](#phase-5-section-2) · [Strings](#phase-5-section-3) · [Methods and OOP](#phase-5-section-4) · [Exception Handling](#phase-5-section-5) · [Java Collections Framework](#phase-5-section-6) · [Applied Object-Oriented Design](#phase-5-section-7)

<a id="phase-5-section-1"></a>

### Java Foundations

#### 1. What is Java?

Java is a high-level, general-purpose, class-based, object-oriented programming language.

It was developed at Sun Microsystems and is now maintained by Oracle and the Java community.

Java is widely used for:

| Area                    | Applications                                  |
| ----------------------- | --------------------------------------------- |
| Backend development     | Spring Boot applications and REST APIs        |
| Enterprise applications | Banking, insurance and business software      |
| Android development     | Android applications                          |
| Distributed systems     | Backend services and large-scale applications |
| Desktop applications    | GUI applications                              |
| Financial systems       | Transaction processing and business systems   |

##### Important characteristics

1. **Object-oriented:** Supports classes, objects, inheritance, encapsulation, abstraction and polymorphism.
2. **Platform-independent:** Java bytecode can run on different operating systems when a compatible JVM is available.
3. **Strongly typed:** Variables have declared types, and type rules are enforced by the compiler and runtime.
4. **Automatic memory management:** Garbage collection manages many memory-reclamation tasks.
5. **Multithreaded:** Supports multiple threads of execution.
6. **Robust:** Provides exception handling, type checking and runtime checks.
7. **Secure-oriented:** Includes features such as bytecode verification and a managed runtime environment.

**Interview question: Why is Java called platform-independent?**

Java source code is compiled into bytecode rather than directly into machine code for one operating system. The bytecode can run on any compatible Java Virtual Machine, allowing the same compiled program to work across different platforms.

#### 2. JDK, JRE and JVM

These three terms are extremely important in Java interviews.

#### Java environment

**JDK — Java Development Kit**

Tools for developing and running Java applications

**JRE — Java Runtime Environment (traditional conceptual term)**

Runtime components needed to run Java applications

**JVM — Java Virtual Machine**

Loads and executes Java bytecode

Also includes supporting runtime libraries in the traditional JRE model.

Modern JDK distributions do not necessarily ship a separate JRE installation. The diagram illustrates the traditional conceptual relationship.

##### JVM

JVM stands for Java Virtual Machine.

It is responsible for:

- Loading Java class files.
- Verifying bytecode.
- Executing bytecode.
- Managing memory.
- Garbage collection.
- Runtime operations such as method invocation.

##### JRE

JRE stands for Java Runtime Environment.

Traditionally, it refers to the runtime environment required to execute Java programs, including the JVM and runtime libraries.

##### JDK

JDK stands for Java Development Kit.

It includes development tools such as:

- `javac` — Java compiler.
- `java` — Java application launcher.
- `javadoc` — Documentation generator.
- `jar` — Archive tool.
- Debugging and other development tools.

**Easy way to remember:**

- JVM executes bytecode.
- JRE provides the traditional runtime environment.
- JDK provides tools for developing Java programs.

#### 3. How does Java execute a program?

Consider this program:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

Execution flow:

**Java source code**

Main.java

**Java compiler — javac**

Compiles source code

**Bytecode**

Main.class

**JVM**

Class loading, verification and execution

**Output**

`Hello World`

The JVM generally executes bytecode using an interpreter and a Just-In-Time (JIT) compiler. The JIT compiler can compile frequently executed code into native machine code to improve performance.

##### Compile and run manually

```bash
javac Main.java
java Main
```

Output:

```text
Hello World
```

**Interview question: Is Java compiled or interpreted?**

Java uses both. The Java compiler converts source code into bytecode. The JVM then executes that bytecode using interpretation and, where appropriate, JIT compilation.

#### 4. Your first Java program

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

        System.out.println("I am learning Java.");

        System.out.println(10 + 20);
    }
}
```

Output:

```text
Hello, World!
I am learning Java.
30
```

##### Understanding every part

`public`

An access modifier. It makes the class or method accessible from other classes, subject to Java's access rules.

`class`

A keyword used to declare a class.

`Main`

The class name.

`static`

Allows the method to be called through the class without first creating an object.

`void`

Indicates that the method does not return a value.

`main()`

The conventional entry-point method recognized by the Java launcher.

`String[] args`

An array of strings used to receive command-line arguments.

`System.out.println()`

Prints a value followed by a line break.

Difference:

```java
System.out.print("Hello");
System.out.println("World");
```

Output:

```text
HelloWorld
```

#### 5. Variables in Java

A variable is a named storage location that holds a value.

Syntax:

```java
dataType variableName = value;
```

Examples:

```java
int age = 20;

String name = "Chirag";

double marks = 85.5;

boolean isStudent = true;
```

Unlike Python, Java requires variable types to be declared.

##### Variable naming rules

Valid:

```java
int age = 20;
String studentName = "Chirag";
int total_marks = 500;
```

Invalid:

```java
int 2age = 20;
int student-name = 10;
```

Java conventionally uses `camelCase` for variables and methods.

##### Types of variables

**Local variable**

Declared inside a method, constructor or block.

```java
public class Main {

    public static void main(String[] args) {

        int age = 20;

        System.out.println(age);
    }
}
```

Local variables must be initialized before use.

**Instance variable**

Declared inside a class but outside methods, constructors and blocks. Each object has its own instance fields.

```java
class Student {

    String name;
    int age;
}
```

**Static variable**

Belongs to the class rather than each individual object.

```java
class Student {

    static String college = "MSU";

    String name;
}
```

All instances share the same static field.

#### 6. Data types in Java

Java data types are divided into two major categories.

**Java data types**

**Primitive data types**

`byte`

`short`

`int`

`long`

`float`

`double`

`char`

`boolean`

**Reference types**

Class types, arrays, interfaces, enums and other reference types.

Examples: `String`, `Student`, `int[]`, `ArrayList`.

##### 6.1 Primitive data types

| Type      | Size                                 | Example             |
| --------- | ------------------------------------ | ------------------- |
| `byte`    | 8 bits                               | `byte a = 10;`      |
| `short`   | 16 bits                              | `short a = 100;`    |
| `int`     | 32 bits                              | `int a = 1000;`     |
| `long`    | 64 bits                              | `long a = 100000L;` |
| `float`   | 32 bits                              | `float a = 10.5f;`  |
| `double`  | 64 bits                              | `double a = 10.5;`  |
| `char`    | 16 bits                              | `char a = 'A';`     |
| `boolean` | JVM-dependent storage representation | `boolean a = true;` |

A `char` represents a UTF-16 code unit, not necessarily an entire Unicode character.

##### 6.2 Reference types

Reference variables hold references to objects.

```java
String name = "Chirag";

int[] numbers = {10, 20, 30};
```

`String` and arrays are reference types.

##### Primitive vs reference types

| Primitive                       | Reference                                       |
| ------------------------------- | ----------------------------------------------- |
| Stores a primitive value        | Holds a reference to an object                  |
| Has a predefined primitive type | Can refer to instances of classes, arrays, etc. |
| Cannot be `null`                | Can be `null`                                   |
| Examples: `int`, `char`         | Examples: `String`, arrays                      |

#### 7. Type conversion and casting

Type conversion changes a value from one type to another.

##### Widening conversion

A smaller compatible numeric type is converted into a larger type automatically.

```java
int number = 10;

double result = number;

System.out.println(result);
```

Output:

```text
10.0
```

##### Narrowing conversion

A larger numeric type is converted into a smaller type explicitly.

```java
double number = 10.75;

int result = (int) number;

System.out.println(result);
```

Output:

```text
10
```

The fractional part is discarded.

##### String conversion

```java
int number = 100;

String text = String.valueOf(number);

System.out.println(text);
```

String to integer:

```java
String text = "100";

int number = Integer.parseInt(text);
```

String to double:

```java
double price = Double.parseDouble("99.50");
```

Invalid numeric strings can cause `NumberFormatException`.

#### 8. Operators in Java

##### Arithmetic operators

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |
| `++`     | Increment      |
| `--`     | Decrement      |

Example:

```java
int a = 10;
int b = 3;

System.out.println(a + b);
System.out.println(a / b);
System.out.println(a % b);
```

Output:

```text
13
3
1
```

Important: Integer division truncates the fractional part.

```java
System.out.println(10 / 3);    // 3
System.out.println(10.0 / 3);  // 3.333...
```

##### Relational operators

```java
== != > < >= <=
```

Example:

```java
int a = 10;
int b = 20;

System.out.println(a < b);
```

##### Java logical operators

```java
&&   // AND
||   // OR
!    // NOT
```

Example:

```java
int age = 20;
boolean hasId = true;

if (age >= 18 && hasId) {
    System.out.println("Allowed");
}
```

##### Assignment operators

```java
int x = 10;

x += 5;
x -= 2;
x *= 2;
x /= 2;
x %= 3;
```

##### Ternary operator

A shorter way of writing a simple `if-else`.

```java
int age = 20;

String result = age >= 18 ? "Adult" : "Minor";

System.out.println(result);
```

##### Increment operators

Pre-increment:

```java
int a = 5;

System.out.println(++a);
```

Output: `6`

Post-increment:

```java
int a = 5;

System.out.println(a++);
System.out.println(a);
```

Output:

```text
5
6
```

<a id="phase-5-section-2"></a>

### Control Flow and Arrays

#### 9. Conditional statements

##### `if`

```java
int age = 20;

if (age >= 18) {
    System.out.println("Adult");
}
```

##### `if-else`

```java
int number = 10;

if (number % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}
```

##### `if-else-if`

```java
int marks = 85;

if (marks >= 90) {
    System.out.println("A");
} else if (marks >= 75) {
    System.out.println("B");
} else if (marks >= 50) {
    System.out.println("C");
} else {
    System.out.println("Fail");
}
```

##### `switch`

Useful when selecting among multiple fixed cases.

```java
int day = 2;

switch (day) {

    case 1:
        System.out.println("Monday");
        break;

    case 2:
        System.out.println("Tuesday");
        break;

    case 3:
        System.out.println("Wednesday");
        break;

    default:
        System.out.println("Invalid day");
}
```

The `break` statement prevents execution from falling through to the next case in this traditional switch form.

Modern Java also supports switch expressions:

```java
int day = 2;

String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Invalid";
};

System.out.println(result);
```

#### 10. Loops

##### `for` loop

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

Execution:

1. Initialize `i = 1`.
2. Check `i <= 5`.
3. Execute the body.
4. Increment `i`.
5. Repeat.

##### `while` loop

```java
int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++;
}
```

##### `do-while` loop

Executes at least once because the condition is checked after the body.

```java
int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

##### Enhanced for loop

Used to iterate through arrays and other iterable collections.

```java
int[] numbers = {10, 20, 30};

for (int number : numbers) {
    System.out.println(number);
}
```

##### `break` and `continue`

`break` terminates the loop.

```java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        break;
    }

    System.out.println(i);
}
```

`continue` skips the current iteration.

```java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    System.out.println(i);
}
```

#### 11. Arrays

An array stores a fixed number of elements of the same declared component type.

##### Declaration

```java
int[] numbers;
```

##### Creation

```java
numbers = new int[5];
```

##### Declaration and initialization

```java
int[] numbers = {10, 20, 30, 40, 50};
```

##### Accessing elements

```java
System.out.println(numbers[0]);
System.out.println(numbers[2]);
```

Array indexing starts at zero.

##### Modifying elements

```java
numbers[1] = 100;
```

##### Array length

```java
System.out.println(numbers.length);
```

For arrays, `length` is a field, not a method.

##### Iterating through an array

```java
int[] numbers = {10, 20, 30, 40};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

##### Enhanced for loop

```java
for (int number : numbers) {
    System.out.println(number);
}
```

##### Multidimensional arrays

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[0][1]);
```

Output: `2`

##### Iterating a matrix

```java
for (int i = 0; i < matrix.length; i++) {

    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }

    System.out.println();
}
```

##### Useful `Arrays` class

```java
import java.util.Arrays;

int[] numbers = {5, 2, 8, 1};

Arrays.sort(numbers);

System.out.println(Arrays.toString(numbers));
```

Other useful methods:

```java
Arrays.equals(a, b);
Arrays.copyOf(a, a.length);
Arrays.fill(a, 0);
Arrays.binarySearch(a, 5);
```

`binarySearch()` requires a sorted array for its normal expected use.

<a id="phase-5-section-3"></a>

### Strings

#### 12. Strings in Java

A `String` represents a sequence of characters.

```java
String name = "Chirag";
```

Strings are objects, not primitive types.

##### String immutability

Strings are immutable in Java. Once a `String` object is created, its contents cannot be changed.

```java
String text = "Hello";

text.concat(" World");

System.out.println(text);
```

Output:

```text
Hello
```

Why? `concat()` returns a new string. It does not modify the original string.

Correct:

```java
String text = "Hello";

text = text.concat(" World");

System.out.println(text);
```

Output:

```text
Hello World
```

#### 13. `==` vs `.equals()`

This is an extremely important Java interview question.

`==` compares primitive values for equality, but for reference types it checks whether references identify the same object.

`.equals()` compares object equality according to the class's implementation.

Example:

```java
String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);
System.out.println(a.equals(b));
```

Output:

```text
false
true
```

The two objects contain equal text but are separate objects.

**Interview answer:** Use `.equals()` to compare string contents, not `==`.

#### 14. Important String methods

```java
String text = "Hello Java";

System.out.println(text.length());
System.out.println(text.charAt(0));
System.out.println(text.toUpperCase());
System.out.println(text.toLowerCase());
System.out.println(text.substring(0, 5));
System.out.println(text.contains("Java"));
System.out.println(text.startsWith("Hello"));
System.out.println(text.endsWith("Java"));
System.out.println(text.indexOf("Java"));
System.out.println(text.replace("Java", "Python"));
```

##### `split()`

```java
String text = "Java,Python,JavaScript";

String[] languages = text.split(",");

for (String language : languages) {
    System.out.println(language);
}
```

##### `trim()` and `strip()`

```java
String text = "  Java  ";

System.out.println(text.trim());
System.out.println(text.strip());
```

`strip()` uses Unicode-aware whitespace handling and is available from Java 11.

#### 15. StringBuilder and StringBuffer

Repeated string concatenation can create many temporary string objects.

For repeated modifications, use `StringBuilder`.

```java
StringBuilder builder = new StringBuilder("Hello");

builder.append(" Java");

System.out.println(builder);
```

Other methods:

```java
builder.insert(5, " World");
builder.replace(0, 5, "Hi");
builder.delete(0, 3);
builder.reverse();
builder.toString();
```

##### String vs StringBuilder vs StringBuffer

| Feature                        | String           | StringBuilder                 | StringBuffer                                               |
| ------------------------------ | ---------------- | ----------------------------- | ---------------------------------------------------------- |
| Mutable                        | No               | Yes                           | Yes                                                        |
| Thread-safe for its operations | Immutable object | No                            | Synchronized methods                                       |
| Typical use                    | Fixed text       | Repeated string modifications | Shared mutable string operations requiring synchronization |

<a id="phase-5-section-4"></a>

### Methods and OOP

#### 16. Methods in Java

A method is a block of code that performs a specific operation.

Syntax:

```java
returnType methodName(parameters) {
    // Statements
}
```

Example:

```java
public class Main {

    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {

        int result = add(10, 20);

        System.out.println(result);
    }
}
```

##### Parameters and arguments

```java
static void greet(String name) {
    System.out.println("Hello " + name);
}

greet("Chirag");
```

- `name` is a parameter.
- `"Chirag"` is an argument.

##### Return types

```java
static int getAge() {
    return 20;
}
```

A `void` method does not return a value.

##### Java is pass-by-value

Java always passes arguments by value.

For object arguments, the copied value is the reference. This allows a method to modify the referenced object's state, but reassigning the parameter does not change the caller's reference.

Example:

```java
class Student {
    String name;
}

public class Main {

    static void changeName(Student student) {
        student.name = "Amit";
    }

    public static void main(String[] args) {

        Student s = new Student();
        s.name = "Chirag";

        changeName(s);

        System.out.println(s.name);
    }
}
```

Output:

```text
Amit
```

The method received a copy of the reference, but both references identify the same object.

#### 17. Classes and objects

A class is a blueprint. An object is an instance of a class.

```java
class Student {

    String name;
    int age;

    void display() {
        System.out.println(name);
        System.out.println(age);
    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();

        s1.name = "Chirag";
        s1.age = 20;

        s1.display();
    }
}
```

##### Constructor

A constructor initializes an object.

```java
class Student {

    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println(name + " " + age);
    }
}
```

Create an object:

```java
Student s1 = new Student("Chirag", 20);

s1.display();
```

##### Constructor characteristics

- Constructor name matches the class name.
- It has no return type, not even `void`.
- It executes during object creation.
- Constructors can be overloaded.
- Constructors are not inherited.

##### Default constructor vs no-argument constructor

If you do not declare any constructor, Java provides a default constructor.

If you declare a constructor yourself, Java does not automatically provide that default constructor.

A programmer can also explicitly declare a no-argument constructor.

#### 18. `this` keyword

`this` refers to the current object.

```java
class Student {

    String name;

    Student(String name) {
        this.name = name;
    }
}
```

It distinguishes the instance field from the constructor parameter.

It can also call another constructor using `this()`.

```java
class Student {

    String name;
    int age;

    Student() {
        this("Unknown", 0);
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

A `this()` constructor call must be the first statement in the constructor.

#### 19. The four pillars of OOP

#### Four pillars of object-oriented programming

**1. Encapsulation**

Protecting internal state through controlled access.

**2. Abstraction**

Exposing essential functionality and hiding implementation details.

**3. Inheritance**

Reusing and extending parent-class functionality.

**4. Polymorphism**

One interface or method call can represent different implementations.

##### 19.1 Encapsulation

Encapsulation combines data and methods in a class and controls access to the internal state.

```java
class BankAccount {

    private double balance;

    public void deposit(double amount) {

        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}
```

Usage:

```java
BankAccount account = new BankAccount();

account.deposit(1000);

System.out.println(account.getBalance());
```

The `balance` field is private, so external code cannot directly modify it.

##### 19.2 Inheritance

Inheritance allows a child class to acquire accessible behavior and state from a parent class.

```java
class Animal {

    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {

    void bark() {
        System.out.println("Barking");
    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.eat();
        dog.bark();
    }
}
```

Java supports:

- Single inheritance.
- Multilevel inheritance.
- Hierarchical inheritance.

Java classes do not support multiple inheritance of classes. A class can implement multiple interfaces.

##### 19.3 Polymorphism

Polymorphism means one interface can represent different behaviors.

There are two commonly discussed forms:

- Compile-time polymorphism — method overloading.
- Runtime polymorphism — method overriding and dynamic method dispatch.

##### 19.4 Abstraction

Abstraction hides unnecessary implementation details.

Java provides:

- Abstract classes.
- Interfaces.

#### 20. Method overloading

Multiple methods have the same name but different parameter lists.

```java
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

Usage:

```java
Calculator calculator = new Calculator();

System.out.println(calculator.add(10, 20));
System.out.println(calculator.add(10, 20, 30));
System.out.println(calculator.add(10.5, 20.5));
```

Changing only the return type is not sufficient to overload a method.

#### 21. Method overriding

A child class provides its own implementation of an inherited method.

```java
class Animal {

    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    @Override
    void sound() {
        System.out.println("Bark");
    }
}
```

Usage:

```java
Animal animal = new Dog();

animal.sound();
```

Output:

```text
Bark
```

Why?

The actual object is a `Dog`, so Java uses the overridden method at runtime.

##### Overloading vs overriding

| Overloading                                    | Overriding                                              |
| ---------------------------------------------- | ------------------------------------------------------- |
| Same method name, different parameters         | Same inherited method signature, compatible return type |
| Usually within the same class                  | Inheritance is required                                 |
| Resolved at compile time                       | Runtime dispatch for instance methods                   |
| Return type alone cannot distinguish overloads | Return type must be compatible                          |

#### 22. Abstract classes

An abstract class is declared using `abstract`.

It cannot be instantiated directly.

```java
abstract class Payment {

    abstract void pay(double amount);

    void receipt() {
        System.out.println("Receipt generated");
    }
}
```

Child class:

```java
class UpiPayment extends Payment {

    @Override
    void pay(double amount) {
        System.out.println("Paid using UPI: " + amount);
    }
}
```

Usage:

```java
Payment payment = new UpiPayment();

payment.pay(500);
payment.receipt();
```

An abstract class can contain:

- Abstract methods.
- Concrete methods.
- Fields.
- Constructors.
- Static methods.

#### 23. Java interfaces

An interface defines a contract that implementing classes agree to follow.

```java
interface Payment {

    void pay(double amount);
}
```

Implementation:

```java
class CardPayment implements Payment {

    @Override
    public void pay(double amount) {
        System.out.println("Paid using card: " + amount);
    }
}
```

Usage:

```java
Payment payment = new CardPayment();

payment.pay(1000);
```

Interfaces can contain abstract methods, default methods, static methods and constants. Modern Java also supports private helper methods in interfaces.

##### Abstract class vs interface

| Abstract class                            | Interface                                              |
| ----------------------------------------- | ------------------------------------------------------ |
| Declared using `abstract class`           | Declared using `interface`                             |
| A class extends one class                 | A class can implement multiple interfaces              |
| Can have instance fields                  | Fields are implicitly `public static final`            |
| Can have constructors                     | Cannot have constructors                               |
| Can contain abstract and concrete methods | Can have abstract, default, static and private methods |

**Interview question: Why does Java use interfaces?**

Interfaces define contracts between components. They allow different classes to provide different implementations of the same behavior, which helps with abstraction, loose coupling and flexible application design.

#### 24. Access modifiers

Access modifiers control visibility.

| Modifier                | Same class | Same package | Subclass in another package             | Other package |
| ----------------------- | ---------- | ------------ | --------------------------------------- | ------------- |
| `private`               | Yes        | No           | No                                      | No            |
| Default/package-private | Yes        | Yes          | No, unless through package-access rules | No            |
| `protected`             | Yes        | Yes          | Yes, subject to protected-access rules  | No            |
| `public`                | Yes        | Yes          | Yes                                     | Yes           |

Example:

```java
class Student {

    private int age;

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
```

#### 25. `static`, `final` and `super`

##### `static`

Belongs to the class rather than an individual object.

```java
class Student {

    static String college = "MSU";

    String name;
}
```

Access:

```java
System.out.println(Student.college);
```

##### `final`

The meaning depends on what it modifies.

**Final variable:** Cannot be reassigned.

```java
final int MAX = 100;
```

**Final method:** Cannot be overridden.

```java
class Parent {

    final void display() {
        System.out.println("Hello");
    }
}
```

**Final class:** Cannot be subclassed.

```java
final class Utility {
}
```

A final reference cannot be reassigned, but the referenced object may still be mutable.

##### `super`

Refers to the parent-class portion of the current object.

Calling parent constructor:

```java
class Animal {

    Animal(String name) {
        System.out.println(name);
    }
}

class Dog extends Animal {

    Dog() {
        super("Dog");
    }
}
```

Calling parent method:

```java
class Animal {

    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    void sound() {
        super.sound();
        System.out.println("Bark");
    }
}
```

<a id="phase-5-section-5"></a>

### Exception Handling

#### 26. What is an exception?

An exception is an event that disrupts the normal flow of a program.

Examples:

- Dividing by zero.
- Accessing an invalid array index.
- Opening a missing file.
- Converting invalid text into a number.

Java exception hierarchy begins with `Throwable`.

**Throwable**

**Error**

Serious JVM/system problems

Example: OutOfMemoryError

**Exception**

Conditions applications may handle

**RuntimeException**

Unchecked exception family

Example: NullPointerException

##### Checked exceptions

Checked exceptions are checked by the compiler.

Examples:

- `IOException`
- `SQLException`
- `ClassNotFoundException`

You must handle them or declare them with `throws`, subject to the language rules.

##### Unchecked exceptions

These are subclasses of `RuntimeException`.

Examples:

- `NullPointerException`
- `ArithmeticException`
- `ArrayIndexOutOfBoundsException`
- `NumberFormatException`

The compiler does not require you to catch or declare them.

#### 27. `try-catch`

```java
public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

            System.out.println(result);

        } catch (ArithmeticException e) {

            System.out.println("Cannot divide by zero");
        }
    }
}
```

#### 28. Multiple catch blocks

```java
try {

    int[] numbers = {10, 20};

    System.out.println(numbers[5]);

} catch (ArithmeticException e) {

    System.out.println("Arithmetic error");

} catch (ArrayIndexOutOfBoundsException e) {

    System.out.println("Invalid index");
}
```

Catch more specific exceptions before more general exceptions.

#### 29. `finally`

The `finally` block normally executes after `try` and `catch` processing, whether or not an exception occurred.

```java
try {

    int result = 10 / 2;

} catch (Exception e) {

    System.out.println("Error");

} finally {

    System.out.println("Cleanup");
}
```

For resource cleanup, prefer try-with-resources when working with `AutoCloseable` resources.

#### 30. `throw` vs `throws`

`throw` explicitly throws an exception.

```java
throw new IllegalArgumentException("Invalid age");
```

`throws` declares that a method may propagate specified exceptions.

```java
void readFile() throws IOException {
    // File operation
}
```

##### Custom exception

```java
class InsufficientBalanceException extends Exception {

    InsufficientBalanceException(String message) {
        super(message);
    }
}
```

Use it:

```java
class BankAccount {

    double balance = 1000;

    void withdraw(double amount)
            throws InsufficientBalanceException {

        if (amount > balance) {
            throw new InsufficientBalanceException(
                "Insufficient balance"
            );
        }

        balance -= amount;
    }
}
```

#### 31. Try-with-resources

Automatically closes resources that implement `AutoCloseable`.

```java
try (
    java.io.FileReader reader =
        new java.io.FileReader("data.txt")
) {

    int character = reader.read();

    System.out.println(character);

} catch (IOException e) {

    System.out.println(e.getMessage());
}
```

This is useful for file handling, database connections and streams.

<a id="phase-5-section-6"></a>

### Java Collections Framework

This is a particularly important topic for interviews and coding rounds.

#### 32. What is the Collections Framework?

The Java Collections Framework provides interfaces and implementations for storing and manipulating groups of objects.

Main interfaces include:

- `List`
- `Set`
- `Queue`
- `Deque`
- `Map` (part of the framework, but not a subtype of `Collection`)

**Simplified Collections hierarchy**

**Iterable**

**Collection**

**List**

ArrayList, LinkedList

**Set**

HashSet, TreeSet

**Queue**

PriorityQueue

**Map**

HashMap, LinkedHashMap, TreeMap

Simplified view; Map is a separate interface and does not extend Collection.

#### 33. ArrayList

`ArrayList` is a resizable array implementation of the `List` interface.

```java
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> names = new ArrayList<>();

        names.add("Amit");
        names.add("Rahul");
        names.add("Chirag");

        System.out.println(names);
    }
}
```

##### Important methods

```java
names.add("Karan");
names.get(0);
names.set(0, "Raj");
names.remove(1);
names.contains("Chirag");
names.size();
names.clear();
```

##### ArrayList characteristics

- Maintains insertion order.
- Allows duplicates.
- Allows `null`.
- Provides fast indexed access.
- Inserting or removing elements in the middle can require shifting elements.
- It is not synchronized by default.

#### 34. LinkedList

`LinkedList` implements both `List` and `Deque`.

```java
import java.util.LinkedList;

LinkedList<Integer> numbers = new LinkedList<>();

numbers.add(10);
numbers.add(20);
numbers.addFirst(5);
numbers.addLast(30);

System.out.println(numbers);
```

It is a doubly linked list implementation.

Accessing an element by index requires traversal, so it is generally slower than ArrayList for frequent random access.

#### 35. HashSet

`HashSet` stores unique elements using hash-based storage.

```java
import java.util.HashSet;

HashSet<Integer> numbers = new HashSet<>();

numbers.add(10);
numbers.add(20);
numbers.add(10);

System.out.println(numbers);
```

Only one `10` is retained.

Characteristics:

- Does not guarantee iteration order.
- Does not allow duplicate elements.
- Allows one `null`.
- Average-case basic operations are generally \\(O(1)\\), assuming suitable hash distribution.

#### 36. TreeSet

`TreeSet` stores unique elements in sorted order.

```java
import java.util.TreeSet;

TreeSet<Integer> numbers = new TreeSet<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);

System.out.println(numbers);
```

Output:

```text
[10, 20, 30]
```

It generally offers \\(O(\log n)\\) basic operations.

#### 37. HashMap

A `HashMap` stores key-value pairs.

```java
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<Integer, String> students = new HashMap<>();

        students.put(1, "Chirag");
        students.put(2, "Amit");
        students.put(3, "Rahul");

        System.out.println(students.get(1));
    }
}
```

Output:

```text
Chirag
```

##### Important methods

```java
students.put(4, "Karan");
students.get(2);
students.remove(3);
students.containsKey(1);
students.containsValue("Amit");
students.size();
students.isEmpty();
```

##### Iterating through HashMap

```java
for (Map.Entry<Integer, String> entry : students.entrySet()) {

    System.out.println(
        entry.getKey() + " " + entry.getValue()
    );
}
```

##### HashMap characteristics

- Keys are unique.
- Values can be duplicated.
- Allows one `null` key and multiple `null` values.
- Does not guarantee iteration order.
- Average-case lookup and insertion are generally \\(O(1)\\).

#### 38. HashMap vs Hashtable

| HashMap                            | Hashtable                  |
| ---------------------------------- | -------------------------- |
| Not synchronized by default        | Synchronized methods       |
| Allows one null key                | Does not allow null keys   |
| Allows null values                 | Does not allow null values |
| Generally preferred in modern code | Legacy collection          |

For concurrent access, modern applications commonly use `ConcurrentHashMap` when its behavior fits the use case.

#### 39. Queue and PriorityQueue

A queue generally follows FIFO: First In, First Out.

```java
import java.util.LinkedList;
import java.util.Queue;

Queue<Integer> queue = new LinkedList<>();

queue.offer(10);
queue.offer(20);
queue.offer(30);

System.out.println(queue.poll());
System.out.println(queue.peek());
```

Output:

```text
10
20
```

- `offer()` inserts.
- `poll()` retrieves and removes the head.
- `peek()` retrieves without removing it.

A `PriorityQueue` retrieves elements according to priority, not ordinary insertion order.

```java
import java.util.PriorityQueue;

PriorityQueue<Integer> queue = new PriorityQueue<>();

queue.add(30);
queue.add(10);
queue.add(20);

System.out.println(queue.poll());
```

Output: `10`

#### 40. Comparable vs Comparator

These interfaces help define sorting behavior.

##### Comparable

Defines a class's natural ordering.

```java
class Student implements Comparable<Student> {

    int marks;

    Student(int marks) {
        this.marks = marks;
    }

    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.marks, other.marks);
    }
}
```

##### Comparator

Defines an external comparison strategy.

```java
import java.util.Comparator;

Comparator<Student> byMarks =
    Comparator.comparingInt(student -> student.marks);
```

**Interview question: Comparable vs Comparator?**

Comparable defines the natural ordering inside the class. Comparator defines an external or alternative ordering, allowing different sorting strategies without modifying the class.


<a id="phase-5-section-7"></a>

### Applied Object-Oriented Design

#### Q5.1. Difference between abstraction and encapsulation?

| Abstraction                          | Encapsulation                                    |
| ------------------------------------ | ------------------------------------------------ |
| Hides implementation complexity      | Protects internal state                          |
| Focuses on what an object does       | Focuses on how data and behaviour are controlled |
| Uses interfaces and abstract classes | Uses access control and methods                  |
| Example: Payment interface           | Example: Private account balance                 |

A simple way to remember:

- Abstraction: Hide complexity.
- Encapsulation: Control access to data.


#### Q5.2. Explain Single Responsibility Principle with an example.

A class should have one primary responsibility.

Poor design:

```python
class Student:    def save_to_database(self):        pass    def send_email(self):        pass    def generate_pdf(self):        pass
```

Better separation:

```python
class StudentRepository:    def save(self, student):        passclass EmailService:    def send(self, student):        passclass PdfService:    def generate(self, student):        pass
```

This makes each component easier to test and modify.


#### Q5.3. What is dependency injection?

Dependency injection means providing a class with its dependencies from outside instead of making it construct every dependency itself.

```typescript
interface PaymentGateway {
    charge(amount: number): void;
}

class OrderService {
    constructor(private gateway: PaymentGateway) {}

    checkout(amount: number) {
        this.gateway.charge(amount);
    }
}
```

This makes it easier to substitute a real payment provider with a mock during testing.


#### Q5.4. What is coupling and cohesion?

- **Coupling:** How strongly one component depends on other components.
- **Cohesion:** How closely related the responsibilities inside a component are.

Good software design generally aims for:

- Low coupling.
- High cohesion.


#### Q5.5. Give an OOP example from a real business application.

**Model answer:**

"In a university placement platform, I can model Student, Company, Drive and Application as domain objects. An application belongs to a student and a placement drive. Different user roles can implement different permissions, and services can use interfaces for notifications or document storage. This keeps business responsibilities separated."

Treat this as a design explanation, not a claim that every part of UniNest was implemented using a formal OOP design pattern.

---

---

<a id="phase-6"></a>

## Phase 6 — Python in Depth

**Objective:** Learn Python syntax, collections, functions, OOP, modules and concurrency. Testing, database access and FastAPI have dedicated later phases.

**Sections:** [Python Foundations](#phase-6-section-1) · [Practice programs](#phase-6-section-2) · [Loops and Data Structures](#phase-6-section-3) · [Functions and Programming Techniques](#phase-6-section-4) · [Object-Oriented Programming in Python](#phase-6-section-5) · [Exception Handling and Files](#phase-6-section-6) · [Modules, Packages and Project Structure](#phase-6-section-7) · [Advanced Python](#phase-6-section-8) · [Memory Management and Python Internals](#phase-6-section-9) · [Concurrency and Asynchronous Programming](#phase-6-section-10) · [Practical Python for Backend Development](#phase-6-section-11) · [Practical Python Project](#phase-6-section-12) · [Static analysis and subprocess boundaries](#phase-6-section-13) · [Static-analysis follow-ups](#phase-6-section-14)

<a id="phase-6-section-1"></a>

### Python Foundations

#### 1. What is Python?

Python is a **high-level, general-purpose programming language** used to develop different types of software.

It is popular because its syntax is relatively simple and readable.

For example, in Java:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

In Python:

```python
print("Hello World")
```

Python allows us to write the same basic instruction with less code.

##### Where is Python used?

| Area                    | Use                                        |
| ----------------------- | ------------------------------------------ |
| Backend development     | FastAPI, Django, Flask                     |
| Artificial Intelligence | Machine learning and AI applications       |
| Data Science            | Data analysis and visualization            |
| Automation              | Automating repetitive tasks                |
| Web scraping            | Extracting publicly available website data |
| Testing                 | Automated software testing with pytest     |
| DevOps                  | Scripts and infrastructure automation      |
| Cybersecurity           | Security testing and automation tools      |

**Interview question: Is Python a programming language or a scripting language?**

Python is a general-purpose programming language. It is also commonly used as a scripting language because developers can write and execute scripts to automate tasks.

#### 2. How does Python execute code?

Before learning syntax, understand what happens when you execute a Python program.

Consider:

```python
print("Hello")
```

Execution flow:

**Python source code**

main.py

**Python interpreter**

Parses and compiles code into bytecode

**Python bytecode**

Intermediate instructions

**Python Virtual Machine (PVM)**

Executes bytecode

**Output**

`Hello`

This describes the typical execution model of CPython, the standard and most widely used Python implementation.

##### Important terms

- **Source code:** The Python code written by the developer.
- **Interpreter:** The program that processes and executes Python code.
- **Bytecode:** An intermediate representation of the program.
- **PVM:** Python Virtual Machine, which executes Python bytecode.
- **CPython:** The most widely used implementation of Python, written primarily in C.

Python is often called an interpreted language. However, CPython also compiles source code into bytecode before executing it.

**Interview question: Is Python compiled or interpreted?**

Python is commonly described as interpreted. In CPython, source code is first compiled into bytecode, and that bytecode is executed by the Python Virtual Machine. Therefore, it uses both compilation and interpretation stages.

#### 3. Installing and running Python

Install Python from the official website:

[Download Python](https://www.python.org/downloads/?utm_source=chatgpt.com)

On Windows, verify installation in Command Prompt or PowerShell:

```bash
python --version
```

You can also try:

```bash
py --version
```

Run a Python file:

```bash
python main.py
```

Run Python interactively:

```bash
python
```

This opens the Python interactive shell, where you can execute individual statements.

Example:

```python
>>> 10 + 2030>>> print("Learning Python")Learning Python
```

Exit using:

```python
exit()
```

##### Your first Python program

Create a file named `main.py`.

```python
print("Hello, World!")print("I am learning Python.")print(10 + 20)
```

Output:

```text
Hello, World!
I am learning Python.
30
```

#### 4. Python syntax and indentation

Python uses indentation to identify blocks of code.

Unlike Java, C and JavaScript, Python does not use curly braces `{}` to define blocks.

JavaScript:

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

Python:

```python
age = 20if age >= 18:    print("Adult")
```

The indented statement belongs to the `if` block.

##### Indentation example

Correct:

```python
if True:    print("First statement")    print("Second statement")print("Outside the if block")
```

Incorrect:

```python
if True:print("Hello")
```

This produces an `IndentationError`.

**Important:** Python conventionally uses four spaces per indentation level.

Other syntax rules:

- Python is case-sensitive.
- Statements normally end at a newline.
- A colon `:` introduces an indented block.
- Comments begin with `#`.
- Semicolons are generally unnecessary.

Example:

```python
name = "Chirag"  # This is a comment# This is another commentprint(name)
```

#### 5. Variables in Python

A variable is a name that refers to an object in memory.

Example:

```python
name = "Chirag"age = 20marks = 85.5print(name)print(age)print(marks)
```

Output:

```text
Chirag
20
85.5
```

Unlike Java, Python does not require us to declare a variable's data type explicitly.

Java:

```java
int age = 20;
String name = "Chirag";
```

Python:

```python
age = 20name = "Chirag"
```

Python determines the object's type at runtime. This is called **dynamic typing**.

##### Dynamic typing

```python
value = 10print(type(value))value = "Hello"print(type(value))
```

Output:

```text
<class 'int'>
<class 'str'>
```

The same variable name can refer to objects of different types at different times.

This does not mean Python objects themselves change their type. The name is simply reassigned to another object.

##### Multiple variable assignment

```python
a, b, c = 10, 20, 30print(a)print(b)print(c)
```

Assigning the same value:

```python
x = y = z = 100
```

Swapping values:

```python
a = 10b = 20a, b = b, aprint(a)  # 20print(b)  # 10
```

##### Variable naming rules

Valid:

```python
student_name = "Chirag"age2 = 20_total = 500
```

Invalid:

```python
2age = 20       # Cannot start with a numberstudent-name = "A"  # Hyphen is not allowed
```

Python conventionally uses `snake_case` for variables and functions.

#### 6. Python data types

A data type tells us what kind of value an object represents.

Python has several built-in data types.

| Category   | Data types                         |
| ---------- | ---------------------------------- |
| Numeric    | `int`, `float`, `complex`          |
| Boolean    | `bool`                             |
| Text       | `str`                              |
| Sequence   | `list`, `tuple`, `range`           |
| Mapping    | `dict`                             |
| Set        | `set`, `frozenset`                 |
| Binary     | `bytes`, `bytearray`, `memoryview` |
| Null value | `NoneType`                         |

##### 6.1 Integer — `int`

Stores whole numbers.

```python
age = 20salary = 50000negative = -100print(type(age))
```

Output:

```text
<class 'int'>
```

Python integers can grow beyond the usual fixed-width limits of Java's `int`, subject to available memory.

##### 6.2 Float — `float`

Stores floating-point numbers.

```python
price = 99.50percentage = 85.75print(type(price))
```

Output:

```text
<class 'float'>
```

Note: Floating-point numbers can have precision limitations.

```python
print(0.1 + 0.2)
```

Typical output:

```text
0.30000000000000004
```

For precise decimal financial calculations, Python provides the `decimal` module.

##### 6.3 Complex — `complex`

Stores complex numbers with real and imaginary components.

```python
number = 3 + 4jprint(number.real)print(number.imag)
```

Output:

```text
3.0
4.0
```

##### 6.4 Boolean — `bool`

Represents either `True` or `False`.

```python
is_student = Trueis_employed = Falseprint(type(is_student))
```

Output:

```text
<class 'bool'>
```

Notice that Boolean values begin with capital letters.

##### 6.5 String — `str`

Stores text.

```python
name = "Chirag"city = 'Vadodara'print(name)print(type(name))
```

Strings can use single quotes, double quotes or triple quotes.

```python
text1 = 'Hello'text2 = "Hello"description = """This isa multilinestring."""
```

##### 6.6 None — `NoneType`

`None` represents the absence of a value.

```python
result = Noneprint(result)print(type(result))
```

Output:

```text
None
<class 'NoneType'>
```

It is similar in purpose to `null` in JavaScript, though the language semantics differ.

##### Checking data types

Use `type()`:

```python
x = 100y = "Python"z = Trueprint(type(x))print(type(y))print(type(z))
```

Use `isinstance()` when checking whether an object belongs to a type:

```python
age = 20print(isinstance(age, int))  # Trueprint(isinstance(age, str))  # False
```

**Interview question: What is the difference between **`type()`** and **`isinstance()`**?**

`type()` returns the exact type of an object. `isinstance()` checks whether an object is an instance of a specified class or one of its subclasses. For most type checks in application code, `isinstance()` is more flexible.

#### 7. Type conversion (type casting)

Type conversion means converting a value from one data type to another.

Python provides built-in conversion functions.

```python
int()float()str()bool()list()tuple()set()
```

Example:

```python
age = "20"age = int(age)print(age)print(type(age))
```

Output:

```text
20
<class 'int'>
```

More examples:

```python
x = 10print(float(x))  # 10.0print(str(x))    # "10"print(bool(x))   # True
```

##### Implicit and explicit conversion

**Implicit conversion:** Python automatically converts compatible numeric types in an expression.

```python
a = 10b = 2.5result = a + bprint(result)print(type(result))
```

Output:

```text
12.5
<class 'float'>
```

**Explicit conversion:** The programmer manually converts the type.

```python
age = "21"age = int(age)
```

Important: Not every conversion is valid.

```python
number = int("hello")
```

This raises:

```text
ValueError
```

#### 8. Input and output

##### Taking input

Use `input()`:

```python
name = input("Enter your name: ")print("Hello", name)
```

The important point is that `input()` returns a string, even when the user enters a number.

Example:

```python
age = input("Enter your age: ")print(type(age))
```

Output:

```text
<class 'str'>
```

Convert it when you need a number:

```python
age = int(input("Enter your age: "))print(age + 5)
```

##### Printing output

```python
print("Hello")print(10, 20, 30)
```

Custom separator:

```python
print("Python", "Java", "JavaScript", sep=" | ")
```

Output:

```text
Python | Java | JavaScript
```

Custom ending:

```python
print("Hello", end=" ")print("World")
```

Output:

```text
Hello World
```

##### String formatting

Three commonly used approaches:

**1. f-strings — recommended**

```python
name = "Chirag"age = 20print(f"My name is {name} and I am {age} years old.")
```

**2. **`format()`

```python
print("My name is {} and I am {} years old.".format(name, age))
```

**3. **`%`** formatting — older style**

```python
print("My name is %s and I am %d years old." % (name, age))
```

F-strings are generally the clearest option in modern Python.

#### 9. Operators in Python

Operators perform operations on values and variables.

##### 9.1 Arithmetic operators

| Operator | Meaning        | Example        |
| -------- | -------------- | -------------- |
| `+`      | Addition       | `10 + 5 = 15`  |
| `-`      | Subtraction    | `10 - 5 = 5`   |
| `*`      | Multiplication | `10 * 5 = 50`  |
| `/`      | Division       | `10 / 5 = 2.0` |
| `//`     | Floor division | `10 // 3 = 3`  |
| `%`      | Modulus        | `10 % 3 = 1`   |
| `**`     | Exponentiation | `2 ** 3 = 8`   |

Important difference:

```python
print(10 / 2)   # 5.0print(10 // 2)  # 5
```

`/` performs regular division. `//` performs floor division.

For negative numbers, floor division rounds down toward negative infinity:

```python
print(-7 // 2)  # -4
```

##### 9.2 Comparison operators

| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Equal                 |
| `!=`     | Not equal             |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |

Example:

```python
a = 10b = 20print(a == b)  # Falseprint(a < b)   # Trueprint(a != b)  # True
```

##### 9.3 Logical operators

Python has three logical operators:

- `and`
- `or`
- `not`

```python
age = 20has_id = Trueprint(age >= 18 and has_id)print(age < 18 or has_id)print(not has_id)
```

Unlike Java and JavaScript, Python uses words rather than `&&`, `||` and `!`.

##### 9.4 Assignment operators

```python
x = 10x += 5print(x)  # 15x -= 2print(x)  # 13x *= 2print(x)  # 26x /= 2print(x)  # 13.0
```

Other operators include `//=`, `%=`, `**=`, `&=`, `|=` and `^=`.

##### 9.5 Membership operators

Check whether a value exists in a sequence or collection.

```python
languages = ["Python", "Java", "JavaScript"]print("Python" in languages)      # Trueprint("C++" not in languages)     # True
```

##### 9.6 Identity operators

`is` and `is not` check object identity.

```python
a = [1, 2, 3]b = [1, 2, 3]print(a == b)  # Trueprint(a is b)  # False
```

Why?

- `==` checks whether the values are equal.
- `is` checks whether both names refer to the same object.

Use `is None` when checking for `None`:

```python
result = Noneif result is None:    print("No result")
```

Do not use `is` as a general replacement for `==`.

#### 10. Conditional statements

Conditional statements allow a program to make decisions.

##### 10.1 `if`

```python
age = 20if age >= 18:    print("Eligible to vote")
```

##### 10.2 `if-else`

```python
age = 16if age >= 18:    print("Adult")else:    print("Minor")
```

##### 10.3 `if-elif-else`

```python
marks = 85if marks >= 90:    print("Grade A")elif marks >= 75:    print("Grade B")elif marks >= 50:    print("Grade C")else:    print("Fail")
```

Execution flow:

1. Python checks the first condition.
2. If true, its block executes and the remaining branches are skipped.
3. Otherwise, Python checks the next condition.
4. If no condition is true, the `else` block executes.

##### 10.4 Nested conditions

```python
age = 20has_id = Trueif age >= 18:    if has_id:        print("Entry allowed")    else:        print("ID required")else:    print("Underage")
```

##### 10.5 Ternary conditional expression

A short way to write a simple `if-else`.

```python
age = 20result = "Adult" if age >= 18 else "Minor"print(result)
```

##### 10.6 `match-case`

Python 3.10 and later supports structural pattern matching.

```python
day = 2match day:    case 1:        print("Monday")    case 2:        print("Tuesday")    case 3:        print("Wednesday")    case _:        print("Invalid day")
```

`case _` acts as a catch-all pattern.

<a id="phase-6-section-2"></a>

### Practice programs

These small programs combine the concepts you have learned.

##### Program 1: Add two numbers

```python
a = int(input("Enter first number: "))b = int(input("Enter second number: "))result = a + bprint(f"Sum = {result}")
```

##### Program 2: Even or odd

```python
number = int(input("Enter a number: "))if number % 2 == 0:    print("Even")else:    print("Odd")
```

Explanation:

- `%` returns the remainder.
- If a number divided by 2 has remainder 0, it is even.
- Otherwise, it is odd.

##### Program 3: Find the largest of three numbers

```python
a = 10b = 25c = 15if a >= b and a >= c:    print("A is largest")elif b >= a and b >= c:    print("B is largest")else:    print("C is largest")
```

##### Program 4: Simple calculator

```python
a = float(input("Enter first number: "))operator = input("Enter operator (+, -, *, /): ")b = float(input("Enter second number: "))if operator == "+":    print(a + b)elif operator == "-":    print(a - b)elif operator == "*":    print(a * b)elif operator == "/":    if b != 0:        print(a / b)    else:        print("Cannot divide by zero")else:    print("Invalid operator")
```

<a id="phase-6-section-3"></a>

### Loops and Data Structures

#### 11. Loops in Python

Loops are used to execute a block of code repeatedly.

Python mainly provides two loops:

1. `for` loop
2. `while` loop

##### 11.1 `for` loop

A `for` loop iterates over elements of an iterable, such as a list, string, tuple or range.

```python
for number in range(1, 6):    print(number)
```

Output:

```text
1
2
3
4
5
```

##### Understanding `range()`

`range()` generates a sequence of integers.

It has three common forms:

```python
range(stop)range(start, stop)range(start, stop, step)
```

Examples:

```python
print(list(range(5)))# [0, 1, 2, 3, 4]print(list(range(1, 6)))# [1, 2, 3, 4, 5]print(list(range(2, 11, 2)))# [2, 4, 6, 8, 10]
```

The `stop` value is excluded.

##### Iterating over a string

```python
name = "Python"for character in name:    print(character)
```

##### Iterating over a list

```python
languages = ["Python", "Java", "JavaScript"]for language in languages:    print(language)
```

##### 11.2 `while` loop

A `while` loop executes as long as its condition is true.

```python
number = 1while number <= 5:    print(number)    number += 1
```

Output:

```text
1
2
3
4
5
```

Execution:

1. Initialize `number = 1`.
2. Check whether `number <= 5`.
3. Print the number.
4. Increase the number by one.
5. Repeat until the condition becomes false.

Be careful about infinite loops:

```python
while True:    print("Running")
```

This loop continues indefinitely unless it is interrupted or a `break` statement is reached.

##### 11.3 `break`

Terminates the loop immediately.

```python
for number in range(1, 10):    if number == 5:        break    print(number)
```

Output:

```text
1
2
3
4
```

##### 11.4 `continue`

Skips the current iteration and moves to the next iteration.

```python
for number in range(1, 6):    if number == 3:        continue    print(number)
```

Output:

```text
1
2
4
5
```

##### 11.5 `pass`

`pass` does nothing. It is used as a placeholder when Python syntax requires a statement but you haven't implemented the block yet.

```python
def future_function():    pass
```

##### 11.6 Nested loops

A loop inside another loop is called a nested loop.

```python
for i in range(1, 4):    for j in range(1, 4):        print(i, j)
```

Output:

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

The inner loop completes all its iterations for every iteration of the outer loop.

##### 11.7 Loop `else`

Python supports an `else` block with loops.

It executes when the loop finishes normally, not when it terminates through `break`.

```python
for number in range(1, 4):    print(number)else:    print("Loop completed")
```

This feature is particularly useful when searching for an element.

```python
numbers = [10, 20, 30, 40]target = 50for number in numbers:    if number == target:        print("Found")        breakelse:    print("Not found")
```

#### 12. Strings in Python

A string is an immutable sequence of Unicode characters.

```python
name = "Python Programming"
```

##### 12.1 Indexing

Each character has an index.

```python
text = "PYTHON"print(text[0])   # Pprint(text[1])   # Yprint(text[-1])  # Nprint(text[-2])  # O
```

Positive indexing starts from zero.

Negative indexing starts from the end.

##### 12.2 Slicing

Slicing extracts a portion of a sequence.

Syntax:

```python
string[start:stop:step]
```

Example:

```python
text = "PYTHON"print(text[0:3])   # PYTprint(text[2:])    # THONprint(text[:4])    # PYTHprint(text[::-1])  # NOHTYP
```

The `stop` index is excluded.

##### 12.3 Important string methods

```python
text = "  Hello Python  "print(text.upper())print(text.lower())print(text.title())print(text.capitalize())print(text.strip())print(text.replace("Python", "Java"))print(text.find("Python"))print(text.count("o"))print(text.startswith("  Hello"))print(text.endswith("  "))
```

Other useful methods:

```python
"hello".isalpha()      # True"123".isdigit()        # True"hello123".isalnum()   # True"   ".isspace()        # True
```

##### 12.4 Splitting and joining

`split()` converts a string into a list.

```python
sentence = "Python is easy"words = sentence.split()print(words)
```

Output:

```text
['Python', 'is', 'easy']
```

`join()` combines strings.

```python
words = ["Python", "is", "easy"]sentence = " ".join(words)print(sentence)
```

Output:

```text
Python is easy
```

##### 12.5 Strings are immutable

```python
name = "Python"# name[0] = "J"  # TypeError
```

You cannot directly modify an individual character.

Instead:

```python
name = "J" + name[1:]print(name)
```

Output:

```text
Jython
```

**Interview question: Why are strings immutable in Python?**

Strings are immutable, which makes their values stable after creation. This supports safe sharing, predictable behavior and their use as dictionary keys when their contents are hashable.

#### 13. Lists

A list is an ordered, mutable collection that can contain duplicate values and elements of different data types.

```python
numbers = [10, 20, 30, 40]
```

##### 13.1 Creating lists

```python
numbers = [1, 2, 3]names = ["Amit", "Rahul", "Chirag"]mixed = [10, "Python", True, 20.5]empty = []
```

##### 13.2 Accessing elements

```python
numbers = [10, 20, 30, 40]print(numbers[0])   # 10print(numbers[-1])  # 40
```

##### 13.3 Modifying elements

```python
numbers = [10, 20, 30]numbers[1] = 100print(numbers)
```

Output:

```text
[10, 100, 30]
```

##### 13.4 List methods

| Method             | Purpose                          |
| ------------------ | -------------------------------- |
| `append(x)`        | Adds one element at the end      |
| `extend(iterable)` | Adds multiple elements           |
| `insert(i, x)`     | Inserts at an index              |
| `remove(x)`        | Removes the first matching value |
| `pop(i)`           | Removes and returns an element   |
| `clear()`          | Removes all elements             |
| `index(x)`         | Returns the first matching index |
| `count(x)`         | Counts occurrences               |
| `sort()`           | Sorts the list in place          |
| `reverse()`        | Reverses the list in place       |
| `copy()`           | Creates a shallow copy           |

Examples:

```python
numbers = [10, 20, 30]numbers.append(40)print(numbers)numbers.extend([50, 60])print(numbers)numbers.insert(1, 15)print(numbers)numbers.remove(30)print(numbers)removed = numbers.pop()print(removed)
```

##### 13.5 Sorting

```python
numbers = [5, 2, 8, 1, 3]numbers.sort()print(numbers)
```

Descending:

```python
numbers.sort(reverse=True)
```

Using `sorted()`:

```python
numbers = [5, 2, 8, 1]new_numbers = sorted(numbers)print(new_numbers)print(numbers)
```

Difference:

- `sort()` modifies the original list.
- `sorted()` returns a new sorted list.

##### 13.6 List comprehension

A concise way to create lists.

Normal approach:

```python
squares = []for number in range(1, 6):    squares.append(number ** 2)
```

Comprehension:

```python
squares = [number ** 2 for number in range(1, 6)]print(squares)
```

Output:

```text
[1, 4, 9, 16, 25]
```

With a condition:

```python
even_numbers = [    number    for number in range(1, 11)    if number % 2 == 0]print(even_numbers)
```

##### 13.7 Copying lists: shallow copy vs reference

This is an important interview topic.

```python
a = [1, 2, 3]b = ab.append(4)print(a)print(b)
```

Output:

```text
[1, 2, 3, 4]
[1, 2, 3, 4]
```

Why? Both variables refer to the same list object.

Creating a shallow copy:

```python
a = [1, 2, 3]b = a.copy()b.append(4)print(a)  # [1, 2, 3]print(b)  # [1, 2, 3, 4]
```

But a shallow copy does not recursively copy nested objects.

```python
a = [[1, 2], [3, 4]]b = a.copy()b[0].append(100)print(a)
```

Output:

```text
[[1, 2, 100], [3, 4]]
```

For a deep copy:

```python
import copya = [[1, 2], [3, 4]]b = copy.deepcopy(a)b[0].append(100)print(a)print(b)
```

The nested lists are also copied.

#### 14. Tuples

A tuple is an ordered, immutable collection.

```python
coordinates = (10, 20)
```

##### Features

- Ordered.
- Allows duplicates.
- Supports indexing and slicing.
- Immutable.
- Can contain different data types.

```python
data = (10, "Python", True)print(data[0])print(data[1])
```

##### Single-element tuple

```python
a = (10,)print(type(a))
```

The comma is important.

Without the comma:

```python
a = (10)print(type(a))
```

This is an integer, not a tuple.

##### Tuple unpacking

```python
student = ("Chirag", 20, "CSE")name, age, branch = studentprint(name)print(age)print(branch)
```

##### Why use tuples?

Tuples are useful when a group of values should remain unchanged, such as coordinates, fixed configuration values or a database record representation.

**Interview question: List vs tuple?**

A list is mutable, while a tuple is immutable. Lists are suitable for collections that need modification. Tuples are useful for fixed collections of values.

#### 15. Sets

A set is an unordered collection of unique hashable elements.

```python
numbers = {10, 20, 30, 20}print(numbers)
```

Output contains each distinct element once:

```text
{10, 20, 30}
```

The display order is not guaranteed.

##### Creating an empty set

```python
empty_set = set()
```

Do not use `{}` for an empty set. It creates an empty dictionary.

##### Set methods

```python
numbers = {10, 20, 30}numbers.add(40)numbers.update([50, 60])numbers.remove(20)numbers.discard(100)
```

Difference:

- `remove()` raises `KeyError` if the value does not exist.
- `discard()` does not raise an error for a missing value.

##### Set operations

```python
a = {1, 2, 3}b = {3, 4, 5}print(a | b)  # Unionprint(a & b)  # Intersectionprint(a - b)  # Differenceprint(a ^ b)  # Symmetric difference
```

| Operation            | Result            |
| -------------------- | ----------------- |
| Union                | `{1, 2, 3, 4, 5}` |
| Intersection         | `{3}`             |
| Difference `a - b`   | `{1, 2}`          |
| Symmetric difference | `{1, 2, 4, 5}`    |

##### Practical use: Remove duplicates

```python
numbers = [1, 2, 2, 3, 3, 4]unique_numbers = list(set(numbers))print(unique_numbers)
```

Note: This does not guarantee preservation of the original order.

If order matters:

```python
unique_numbers = list(dict.fromkeys(numbers))
```

#### 16. Dictionaries

A dictionary stores data as key-value pairs.

```python
student = {    "name": "Chirag",    "age": 20,    "branch": "CSE"}
```

This is one of the most important Python data structures.

##### 16.1 Accessing values

```python
print(student["name"])
```

Using `get()`:

```python
print(student.get("name"))print(student.get("city", "Not available"))
```

Difference:

- `student["city"]` raises `KeyError` if the key does not exist.
- `student.get("city")` returns `None` by default.

##### 16.2 Adding and updating

```python
student["city"] = "Vadodara"student["age"] = 21
```

##### 16.3 Removing values

```python
student.pop("age")
```

Other methods:

```python
student.popitem()student.clear()
```

##### 16.4 Iterating over dictionaries

```python
student = {    "name": "Chirag",    "age": 20,    "branch": "CSE"}for key in student:    print(key)
```

Values:

```python
for value in student.values():    print(value)
```

Both keys and values:

```python
for key, value in student.items():    print(key, value)
```

##### 16.5 Dictionary comprehension

```python
squares = {    number: number ** 2    for number in range(1, 6)}print(squares)
```

Output:

```text
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

##### 16.6 Dictionary characteristics

- Stores key-value pairs.
- Keys must be hashable.
- Values can be any objects.
- Keys are unique.
- Dictionaries preserve insertion order in modern Python.

**Interview question: Why are dictionaries fast?**

Python dictionaries are implemented using hash tables. A hash function helps locate the storage position associated with a key. Lookup, insertion and deletion are typically average-case \\(O(1)\\), although worst-case behavior can be slower.

#### 17. Comparing Python collections

| Feature    | List | Tuple | Set                 | Dictionary      |
| ---------- | ---- | ----- | ------------------- | --------------- |
| Ordered    | Yes  | Yes   | No guaranteed order | Yes             |
| Mutable    | Yes  | No    | Yes                 | Yes             |
| Duplicates | Yes  | Yes   | No                  | Keys are unique |
| Indexing   | Yes  | Yes   | No                  | By key          |
| Syntax     | `[]` | `()`  | `{}`                | `{key: value}`  |

#### 18. Useful collection functions

```python
numbers = [10, 20, 30, 40]print(len(numbers))print(max(numbers))print(min(numbers))print(sum(numbers))print(sorted(numbers))
```

##### `enumerate()`

Provides both index and value.

```python
names = ["Amit", "Rahul", "Chirag"]for index, name in enumerate(names):    print(index, name)
```

##### `zip()`

Combines elements from multiple iterables.

```python
names = ["Amit", "Rahul"]marks = [80, 90]for name, mark in zip(names, marks):    print(name, mark)
```

##### `any()` and `all()`

```python
numbers = [2, 4, 6]print(all(number % 2 == 0 for number in numbers))print(any(number > 5 for number in numbers))
```

- `all()` returns true if all elements are truthy.
- `any()` returns true if at least one element is truthy.

<a id="phase-6-section-4"></a>

### Functions and Programming Techniques

#### 19. Python functions

A function is a reusable block of code that performs a specific task.

```python
def greet():    print("Hello, Python")
```

Calling it:

```python
greet()
```

##### Function with parameters

```python
def greet(name):    print(f"Hello, {name}")greet("Chirag")
```

Here, `name` is a parameter and `"Chirag"` is an argument.

##### Function with return value

```python
def add(a, b):    return a + bresult = add(10, 20)print(result)
```

`return` sends a value back to the caller and terminates the function.

##### `print()` vs `return`

```python
def first():    print(10)def second():    return 10a = first()b = second()print(a)print(b)
```

Output:

```text
10
None
10
```

The first function prints a value but does not return it. Python therefore returns `None` implicitly.

#### 20. Types of function arguments

##### 20.1 Positional arguments

```python
def student(name, age):    print(name, age)student("Chirag", 20)
```

Values are assigned based on position.

##### 20.2 Keyword arguments

```python
student(age=20, name="Chirag")
```

Values are assigned by parameter name.

##### 20.3 Default arguments

```python
def greet(name="Student"):    print(f"Hello {name}")greet()greet("Chirag")
```

##### 20.4 Variable-length positional arguments: `*args`

Use `*args` when a function should accept an arbitrary number of positional arguments.

```python
def add(*args):    print(args)    return sum(args)print(add(10, 20, 30, 40))
```

Inside the function, `args` is a tuple.

##### 20.5 Variable-length keyword arguments: `kwargs`

Use `**kwargs` when a function should accept arbitrary keyword arguments.

```python
def student(**kwargs):    print(kwargs)student(name="Chirag", age=20, branch="CSE")
```

Inside the function, `kwargs` is a dictionary.

##### 20.6 Combining arguments

```python
def example(name, *args, **kwargs):    print(name)    print(args)    print(kwargs)example("Chirag", 10, 20, city="Vadodara", age=20)
```

##### Important interview point: Mutable default arguments

Avoid this:

```python
def add_item(item, items=[]):    items.append(item)    return items
```

The same default list is reused across calls.

Better:

```python
def add_item(item, items=None):    if items is None:        items = []    items.append(item)    return items
```

#### 21. Scope of variables

Scope defines where a variable can be accessed.

Python follows the LEGB lookup rule:

1. Local
2. Enclosing
3. Global
4. Built-in

##### Local variable

```python
def test():    x = 10    print(x)test()
```

`x` exists in the function's local scope.

##### Global variable

```python
x = 100def test():    print(x)test()
```

The function can read the global variable.

##### `global` keyword

```python
count = 0def increment():    global count    count += 1increment()print(count)
```

##### `nonlocal` keyword

Used to modify a variable in an enclosing function's scope.

```python
def outer():    count = 0    def inner():        nonlocal count        count += 1    inner()    print(count)outer()
```

#### 22. Lambda functions

A lambda is a small anonymous function.

```python
square = lambda x: x * xprint(square(5))
```

Equivalent normal function:

```python
def square(x):    return x * x
```

Lambda expressions are useful for short functions, especially when passing a function as an argument.

Example:

```python
students = [    ("Amit", 80),    ("Rahul", 95),    ("Chirag", 85)]students.sort(key=lambda student: student[1])print(students)
```

#### 23. Recursion

Recursion occurs when a function calls itself.

Example: Factorial.

$$
 5! = 5 \times 4 \times 3 \times 2 \times 1 
$$

```python
def factorial(n):    if n == 0 or n == 1:        return 1    return n * factorial(n - 1)print(factorial(5))
```

Execution:

```text
factorial(5)
    5 * factorial(4)
        4 * factorial(3)
            3 * factorial(2)
                2 * factorial(1)
                    1
```

Result:

```text
120
```

The base condition prevents infinite recursion.

Python has a recursion depth limit, so recursion is not always the best solution for deeply nested or very large problems.

#### 24. Higher-order functions

A higher-order function is a function that accepts another function as an argument or returns a function.

##### `map()`

Applies a function to each element.

```python
numbers = [1, 2, 3, 4]result = map(lambda x: x * 2, numbers)print(list(result))
```

Output:

```text
[2, 4, 6, 8]
```

##### `filter()`

Selects elements based on a condition.

```python
numbers = [1, 2, 3, 4, 5, 6]result = filter(lambda x: x % 2 == 0, numbers)print(list(result))
```

Output:

```text
[2, 4, 6]
```

##### `reduce()`

Combines elements into a single result.

```python
from functools import reducenumbers = [1, 2, 3, 4]result = reduce(lambda a, b: a + b, numbers)print(result)
```

Output:

```text
10
```

<a id="phase-6-section-5"></a>

### Object-Oriented Programming in Python

#### 25. What is OOP?

Object-oriented programming is a programming approach in which software is organized around objects containing data and behavior.

Four main pillars:

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

Python supports OOP using classes and objects.

#### 26. Classes and objects

A class is a blueprint for creating objects.

An object is an instance of a class.

```python
class Student:    def display(self):        print("I am a student")student1 = Student()student1.display()
```

Here:

- `Student` is the class.
- `student1` is an object.
- `display()` is a method.

##### Constructor: `__init__()`

The `__init__()` method initializes an object when it is created.

```python
class Student:    def __init__(self, name, age):        self.name = name        self.age = age    def display(self):        print(self.name, self.age)student1 = Student("Chirag", 20)student1.display()
```

##### What is `self`?

`self` refers to the current instance.

```python
class Student:    def __init__(self, name):        self.name = name
```

When you call:

```python
student1 = Student("Chirag")
```

Python passes the newly created instance to the initializer as its first argument, conventionally named `self`.

`self` is a convention, not a reserved keyword.

#### 27. Instance, class and static methods

##### Instance method

Works with an object and receives `self`.

```python
class Student:    def display(self):        print("Instance method")
```

##### Class method

Receives the class as its first argument, conventionally named `cls`.

```python
class Student:    college = "MSU"    @classmethod    def show_college(cls):        print(cls.college)
```

##### Static method

Does not automatically receive `self` or `cls`.

```python
class Calculator:    @staticmethod    def add(a, b):        return a + b
```

Use a static method for functionality logically related to a class but not requiring its instance or class state.

#### 28. Encapsulation

Encapsulation means grouping data and methods together and controlling how internal state is accessed or modified.

Python does not enforce traditional private access modifiers like Java.

Conventions:

- `name`: public.
- `_name`: internal-use convention.
- `__name`: name mangling.

Example:

```python
class BankAccount:    def __init__(self, balance):        self.__balance = balance    def deposit(self, amount):        if amount > 0:            self.__balance += amount    def get_balance(self):        return self.__balanceaccount = BankAccount(1000)account.deposit(500)print(account.get_balance())
```

The double underscore triggers name mangling. It does not provide absolute security.

#### 29. Inheritance

Inheritance allows a child class to reuse or extend the functionality of a parent class.

```python
class Animal:    def eat(self):        print("Eating")class Dog(Animal):    def bark(self):        print("Barking")dog = Dog()dog.eat()dog.bark()
```

##### Types of inheritance

**Single inheritance**

One child class inherits from one parent class.

**Multiple inheritance**

One child class inherits from multiple parent classes.

```python
class Father:    def skill(self):        print("Driving")class Mother:    def hobby(self):        print("Reading")class Child(Father, Mother):    pass
```

**Multilevel inheritance**

A class inherits from a child class.

```python
class A:    passclass B(A):    passclass C(B):    pass
```

**Hierarchical inheritance**

Multiple child classes inherit from the same parent.

**Hybrid inheritance**

A combination of inheritance patterns.

##### Method overriding

A child class provides its own implementation of a parent method.

```python
class Animal:    def sound(self):        print("Animal sound")class Dog(Animal):    def sound(self):        print("Bark")dog = Dog()dog.sound()
```

##### `super()`

Calls functionality from the parent class according to Python's method resolution order.

```python
class Animal:    def __init__(self, name):        self.name = nameclass Dog(Animal):    def __init__(self, name, breed):        super().__init__(name)        self.breed = breeddog = Dog("Tommy", "Labrador")
```

#### 30. Polymorphism

Polymorphism means that a common interface can be used with different underlying implementations.

Example:

```python
class Dog:    def sound(self):        return "Bark"class Cat:    def sound(self):        return "Meow"def make_sound(animal):    print(animal.sound())make_sound(Dog())make_sound(Cat())
```

The same function works with different object types.

Python commonly uses duck typing: if an object supports the required behavior, code can use it without requiring a particular inheritance relationship.

##### Method overloading

Traditional compile-time method overloading by signature is not supported in the same way as Java.

You can achieve similar behavior using default arguments or variable-length arguments.

```python
class Calculator:    def add(self, a, b, c=0):        return a + b + c
```

#### 31. Abstraction

Abstraction means exposing essential functionality while hiding unnecessary implementation details.

Python provides abstract classes through the `abc` module.

```python
from abc import ABC, abstractmethodclass Payment(ABC):    @abstractmethod    def pay(self, amount):        passclass UpiPayment(Payment):    def pay(self, amount):        print(f"Paid {amount} using UPI")payment = UpiPayment()payment.pay(500)
```

You cannot normally instantiate `Payment` while it has an unimplemented abstract method.

#### 32. Composition vs inheritance

Inheritance expresses an "is-a" relationship.

Composition expresses a "has-a" relationship.

Example:

```python
class Engine:    def start(self):        print("Engine started")class Car:    def __init__(self):        self.engine = Engine()    def start(self):        self.engine.start()car = Car()car.start()
```

A car has an engine. Composition is often preferable when you want to combine reusable components without creating deep inheritance hierarchies.

#### 33. Special methods / Dunder methods

Dunder means double underscore.

Examples:

| Method      | Purpose                           |
| ----------- | --------------------------------- |
| `__init__`  | Initialize object                 |
| `__str__`   | Human-readable string             |
| `__repr__`  | Developer-oriented representation |
| `__len__`   | Supports `len()`                  |
| `__eq__`    | Supports equality comparison      |
| `__add__`   | Supports `+`                      |
| `__iter__`  | Supports iteration                |
| `__next__`  | Retrieves next iterator item      |
| `__enter__` | Context manager entry             |
| `__exit__`  | Context manager exit              |

Example:

```python
class Student:    def __init__(self, name):        self.name = name    def __str__(self):        return f"Student: {self.name}"student = Student("Chirag")print(student)
```

#### 34. SOLID principles

These are important for software engineering interviews.

| Principle                 | Meaning                                                       |
| ------------------------- | ------------------------------------------------------------- |
| S — Single Responsibility | A class should have one primary responsibility                |
| O — Open/Closed           | Open for extension, closed for modification                   |
| L — Liskov Substitution   | Subtypes should be usable where their base types are expected |
| I — Interface Segregation | Prefer focused interfaces over large interfaces               |
| D — Dependency Inversion  | High-level modules should depend on abstractions              |

For example, avoid putting payment processing, email notifications and report generation into one large class. Separate responsibilities into different services.

<a id="phase-6-section-6"></a>

### Exception Handling and Files

#### 35. Errors and exceptions

An error is a problem that prevents the program from completing its intended operation.

Python has different categories of exceptions.

Examples:

| Exception           | Typical cause                |
| ------------------- | ---------------------------- |
| `SyntaxError`       | Invalid syntax               |
| `IndentationError`  | Invalid indentation          |
| `NameError`         | Undefined name               |
| `TypeError`         | Invalid operation for a type |
| `ValueError`        | Correct type, invalid value  |
| `IndexError`        | Invalid sequence index       |
| `KeyError`          | Missing dictionary key       |
| `ZeroDivisionError` | Division by zero             |
| `FileNotFoundError` | Missing file                 |
| `AttributeError`    | Missing attribute            |

##### 35.1 `try-except`

```python
try:    number = int(input("Enter number: "))    print(10 / number)except ValueError:    print("Please enter a valid integer")except ZeroDivisionError:    print("Cannot divide by zero")
```

##### 35.2 `else`

Executes if no exception occurs.

```python
try:    number = int("100")except ValueError:    print("Invalid number")else:    print("Conversion successful")
```

##### 35.3 `finally`

Executes whether an exception occurs or not, normally used for cleanup.

```python
try:    file = open("data.txt", "r")except FileNotFoundError:    print("File not found")finally:    print("Operation completed")
```

##### 35.4 Raising exceptions

Use `raise` to explicitly generate an exception.

```python
def withdraw(balance, amount):    if amount > balance:        raise ValueError("Insufficient balance")    return balance - amount
```

##### 35.5 Custom exceptions

```python
class InsufficientBalanceError(Exception):    passdef withdraw(balance, amount):    if amount > balance:        raise InsufficientBalanceError("Not enough balance")    return balance - amount
```

Custom exceptions help represent meaningful application-specific failures.

#### 36. File handling

Python supports reading and writing files.

##### 36.1 Opening a file

```python
file = open("data.txt", "r")content = file.read()print(content)file.close()
```

##### 36.2 File modes

| Mode | Meaning                            |
| ---- | ---------------------------------- |
| `r`  | Read                               |
| `w`  | Write; overwrites existing content |
| `a`  | Append                             |
| `x`  | Create; fails if file exists       |
| `b`  | Binary mode                        |
| `t`  | Text mode                          |
| `r+` | Read and write                     |

##### 36.3 Using `with`

Recommended approach:

```python
with open("data.txt", "r") as file:    content = file.read()print(content)
```

The context manager automatically closes the file when the block exits.

##### 36.4 Reading methods

```python
file.read()file.readline()file.readlines()
```

##### 36.5 Writing

```python
with open("data.txt", "w") as file:    file.write("Learning Python\n")    file.write("Learning FastAPI")
```

##### 36.6 Appending

```python
with open("data.txt", "a") as file:    file.write("\nNew line")
```

#### 37. JSON handling

JSON is a commonly used data format for APIs and configuration.

Python has a built-in `json` module.

```python
import jsonstudent = {    "name": "Chirag",    "age": 20,    "branch": "CSE"}json_string = json.dumps(student)print(json_string)
```

Convert JSON string into Python data:

```python
data = json.loads(json_string)print(data["name"])
```

Read JSON file:

```python
with open("student.json", "r") as file:    data = json.load(file)
```

Write JSON file:

```python
with open("student.json", "w") as file:    json.dump(student, file, indent=4)
```

Difference:

- `dump()` writes Python data into a file.
- `dumps()` converts Python data into a JSON string.
- `load()` reads JSON from a file.
- `loads()` reads JSON from a string.

#### 38. CSV handling

CSV means Comma-Separated Values.

Python provides the `csv` module.

```python
import csvwith open("students.csv", "w", newline="") as file:    writer = csv.writer(file)    writer.writerow(["Name", "Age"])    writer.writerow(["Chirag", 20])    writer.writerow(["Amit", 21])
```

Reading:

```python
import csvwith open("students.csv", "r") as file:    reader = csv.reader(file)    for row in reader:        print(row)
```

<a id="phase-6-section-7"></a>

### Modules, Packages and Project Structure

#### 39. Modules

A module is a Python file containing code such as functions, classes and variables.

Suppose we have:

`calculator.py`

```python
def add(a, b):    return a + b
```

`main.py`

```python
import calculatorprint(calculator.add(10, 20))
```

You can also import specific names:

```python
from calculator import addprint(add(10, 20))
```

##### Aliases

```python
import math as mprint(m.sqrt(25))
```

##### Common standard library modules

| Module        | Purpose                             |
| ------------- | ----------------------------------- |
| `math`        | Mathematical functions              |
| `random`      | Random number generation            |
| `datetime`    | Date and time                       |
| `os`          | Operating system interfaces         |
| `sys`         | Interpreter and runtime information |
| `json`        | JSON handling                       |
| `csv`         | CSV handling                        |
| `re`          | Regular expressions                 |
| `collections` | Specialized containers              |
| `itertools`   | Iterator utilities                  |
| `pathlib`     | Filesystem paths                    |
| `logging`     | Application logging                 |
| `subprocess`  | Running external processes          |
| `sqlite3`     | SQLite database access              |

#### 40. Packages

A package organizes related modules into a directory structure.

Example:

```text
my_project/
│
├── main.py
│
├── services/
│   ├── __init__.py
│   ├── user_service.py
│   └── payment_service.py
│
└── models/
    ├── __init__.py
    └── user.py
```

`__init__.py` can mark a regular package and execute package initialization code. Modern Python also supports namespace packages without it.

#### 41. pip and virtual environments

`pip` is the standard package installer commonly used with Python.

Install a package:

```bash
python -m pip install fastapi
```

List installed packages:

```bash
python -m pip list
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate on Windows:

```powershell
.venv\Scripts\Activate.ps1
```

Activate on Linux/macOS:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
python -m pip install fastapi uvicorn
```

Save dependencies:

```bash
python -m pip freeze > requirements.txt
```

Install them elsewhere:

```bash
python -m pip install -r requirements.txt
```

##### Why virtual environments?

Different projects may require different package versions.

For example:

- Project A requires library version 1.
- Project B requires library version 2.

Virtual environments isolate dependencies so that projects do not unnecessarily interfere with one another.

##### `if __name__ == "__main__"`

A common Python pattern:

```python
def main():    print("Program started")if __name__ == "__main__":    main()
```

When the file is executed directly, `__name__` is set to `"__main__"`.

When it is imported as a module, `__name__` is set to the module's name.

This allows code to be reusable without automatically executing the main program during import.

<a id="phase-6-section-8"></a>

### Advanced Python

#### 42. Iterable and iterator

These two concepts are closely related but not identical.

An **iterable** is an object that can return an iterator.

Examples:

- List
- Tuple
- String
- Dictionary
- Set
- Range

An **iterator** is an object that produces values one at a time.

Example:

```python
numbers = [10, 20, 30]iterator = iter(numbers)print(next(iterator))print(next(iterator))print(next(iterator))
```

Output:

```text
10
20
30
```

A further call to `next()` raises `StopIteration`.

##### How does a `for` loop work?

This:

```python
for number in [10, 20, 30]:    print(number)
```

Conceptually uses the iterator protocol:

```python
numbers = [10, 20, 30]iterator = iter(numbers)while True:    try:        number = next(iterator)        print(number)    except StopIteration:        break
```

This is an important interview concept.

#### 43. Generators

A generator is a special kind of iterator that produces values lazily.

It uses `yield` instead of returning all values at once.

```python
def generate_numbers():    yield 1    yield 2    yield 3numbers = generate_numbers()print(next(numbers))print(next(numbers))print(next(numbers))
```

Output:

```text
1
2
3
```

##### Why use generators?

Imagine generating one million numbers.

Creating a complete list stores all values in memory:

```python
numbers = [x for x in range(1_000_001)]
```

A generator produces values as they are requested:

```python
numbers = (x for x in range(1_000_001))
```

This can reduce memory consumption when values are processed incrementally.

##### Generator function example

```python
def even_numbers(limit):    number = 0    while number <= limit:        yield number        number += 2for number in even_numbers(10):    print(number)
```

**Interview question: Generator vs list?**

A list stores its elements in memory. A generator produces elements lazily, one at a time, and maintains its execution state between yields. Generators are useful for large datasets and streaming operations.

#### 44. Decorators

A decorator is a callable that takes another callable and returns a modified or wrapped callable.

Example:

```python
def my_decorator(func):    def wrapper():        print("Before function")        func()        print("After function")    return wrapper@my_decoratordef greet():    print("Hello")greet()
```

Output:

```text
Before function
Hello
After function
```

This:

```python
@my_decoratordef greet():    print("Hello")
```

Is conceptually equivalent to:

```python
def greet():    print("Hello")greet = my_decorator(greet)
```

##### Decorator with arguments

```python
def my_decorator(func):    def wrapper(*args, **kwargs):        print("Executing function")        result = func(*args, **kwargs)        return result    return wrapper@my_decoratordef add(a, b):    return a + bprint(add(10, 20))
```

##### `functools.wraps`

Use `wraps` to preserve useful metadata from the original function.

```python
from functools import wrapsdef decorator(func):    @wraps(func)    def wrapper(*args, **kwargs):        return func(*args, **kwargs)    return wrapper
```

##### Real-world use

Decorators are used for:

- Authentication and authorization checks.
- Logging.
- Performance measurement.
- Caching.
- Route definitions in web frameworks.

For example, FastAPI uses decorators to define API routes.

#### 45. Context managers

A context manager handles setup and cleanup around a block of code.

The most familiar example is file handling:

```python
with open("data.txt", "r") as file:    content = file.read()
```

The context manager handles file cleanup even if an exception occurs.

You can create your own context manager using a class:

```python
class MyContext:    def __enter__(self):        print("Entering")        return self    def __exit__(self, exc_type, exc_value, traceback):        print("Exiting")with MyContext():    print("Inside block")
```

Output:

```text
Entering
Inside block
Exiting
```

You can also use `contextlib.contextmanager`:

```python
from contextlib import contextmanager@contextmanagerdef my_context():    print("Start")    try:        yield    finally:        print("Cleanup")with my_context():    print("Working")
```

Real-world examples include:

- File handling.
- Database connections.
- Locks.
- Transactions.
- Temporary resources.

#### 46. Regular expressions

Regular expressions are patterns used to search, validate or extract text.

Python provides the `re` module.

```python
import retext = "My number is 9876543210"result = re.search(r"\d+", text)if result:    print(result.group())
```

Output:

```text
9876543210
```

Important patterns:

| Pattern | Meaning                                 |
| ------- | --------------------------------------- |
| `\d`    | Digit                                   |
| `\w`    | Word character                          |
| `\s`    | Whitespace                              |
| `.`     | Any character except newline by default |
| `+`     | One or more                             |
| `*`     | Zero or more                            |
| `?`     | Zero or one                             |
| `^`     | Start of string                         |
| `$`     | End of string                           |
| `[a-z]` | Lowercase letter range                  |
| `{3}`   | Exactly three repetitions               |

Example:

```python
import reemail = "student@example.com"pattern = r"^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$"if re.fullmatch(pattern, email):    print("Valid format")else:    print("Invalid format")
```

This is a basic format check, not a complete guarantee that an email address exists or can receive mail.

#### 47. Type hints

Python is dynamically typed, but it supports optional type annotations.

```python
def add(a: int, b: int) -> int:    return a + b
```

This communicates the expected types.

It does not automatically enforce runtime type checking.

##### Common type hints

```python
name: str = "Chirag"age: int = 20marks: float = 85.5is_student: bool = True
```

##### Collection annotations

Modern Python:

```python
numbers: list[int] = [1, 2, 3]student: dict[str, int] = {    "age": 20}coordinates: tuple[int, int] = (10, 20)
```

##### Optional values

```python
def find_user(user_id: int) -> str | None:    if user_id == 1:        return "Chirag"    return None
```

##### Union types

```python
def process(value: int | str):    print(value)
```

##### Generic types

Generics allow code to work with multiple types while retaining useful type information.

```python
from typing import TypeVarT = TypeVar("T")def first_item(items: list[T]) -> T:    return items[0]
```

##### Protocol

A `Protocol` defines a structural interface for type checking.

```python
from typing import Protocolclass Drawable(Protocol):    def draw(self) -> None:        ...def render(shape: Drawable):    shape.draw()
```

Any object implementing the required method can satisfy this protocol structurally.

<a id="phase-6-section-9"></a>

### Memory Management and Python Internals

#### 48. Mutable vs immutable objects

This is one of the most frequently asked Python interview topics.

##### Immutable

Cannot be changed after creation.

Examples:

- `int`
- `float`
- `bool`
- `str`
- `tuple`
- `frozenset`

##### Mutable

Can be modified after creation.

Examples:

- `list`
- `dict`
- `set`
- `bytearray`

Example:

```python
a = "Hello"b = aa = a + " World"print(a)print(b)
```

The original string was not modified. `a` now refers to another string object.

Compare with:

```python
a = [1, 2]b = aa.append(3)print(a)print(b)
```

Both names refer to the same list object.

#### 49. Shallow copy vs deep copy

Already introduced for lists, but remember the distinction:

- Shallow copy creates a new outer object while retaining references to nested objects.
- Deep copy recursively copies nested objects.

```python
import copyoriginal = [[1, 2], [3, 4]]shallow = copy.copy(original)deep = copy.deepcopy(original)
```

Use deep copying when nested objects must be independent. It can be more expensive and is not appropriate for every object type.

#### 50. Memory management

Python manages object memory automatically.

In CPython, important mechanisms include:

1. Reference counting.
2. Cyclic garbage collection.

##### Reference counting

Objects maintain references to them.

When an object's reference count reaches zero, CPython can generally reclaim it immediately.

##### CPython garbage collection

Reference counting alone cannot reclaim unreachable reference cycles.

Example:

```python
a = []a.append(a)
```

The list refers to itself. Python's cyclic garbage collector can identify unreachable cycles and reclaim them.

The `gc` module provides access to the garbage collector.

##### `del`

```python
x = [1, 2, 3]del x
```

`del` removes a name binding or deletes an item. It does not necessarily mean the underlying object is immediately destroyed if other references still exist.

#### 51. The Global Interpreter Lock (GIL)

In traditional GIL-enabled CPython builds, the Global Interpreter Lock allows only one thread at a time to execute Python bytecode within a given interpreter.

This affects CPU-bound multithreaded Python programs.

Important distinctions:

- Threads can be useful for I/O-bound tasks.
- Multiprocessing can use multiple processes for CPU-bound work.
- Asynchronous programming is useful for coordinating many I/O operations.
- Modern Python also has optional free-threaded CPython builds, so avoid saying that every Python implementation or build always has a GIL.

**Interview question: Why doesn't Python threading always improve CPU performance?**

In traditional GIL-enabled CPython, only one thread at a time executes Python bytecode in an interpreter. Therefore, CPU-bound tasks may not gain parallel execution from ordinary threads. Multiprocessing or a suitable native extension can provide parallelism.

<a id="phase-6-section-10"></a>

### Concurrency and Asynchronous Programming

#### 52. Threading

A thread is a unit of execution within a process.

Python provides the `threading` module.

```python
import threadingimport timedef task():    print("Task started")    time.sleep(2)    print("Task completed")thread = threading.Thread(target=task)thread.start()thread.join()print("Main program completed")
```

- `start()` starts the thread.
- `join()` waits for the thread to finish.

##### Race conditions

A race condition occurs when multiple threads access shared state and the result depends on execution timing.

Use synchronization mechanisms such as locks when required.

```python
import threadingcounter = 0lock = threading.Lock()def increment():    global counter    for _ in range(1000):        with lock:            counter += 1threads = [    threading.Thread(target=increment)    for _ in range(5)]for thread in threads:    thread.start()for thread in threads:    thread.join()print(counter)
```

#### 53. Multiprocessing

Multiprocessing uses separate processes.

```python
from multiprocessing import Processdef task():    print("Process running")if __name__ == "__main__":    process = Process(target=task)    process.start()    process.join()
```

Processes have separate memory spaces by default and can execute CPU-bound work in parallel.

Use the `if __name__ == "__main__"` guard, especially on platforms that use process spawning.

#### 54. Asynchronous programming with `asyncio`

Asynchronous programming allows a program to coordinate operations that may wait for external events without blocking the entire execution flow.

```python
import asyncioasync def task():    print("Task started")    await asyncio.sleep(2)    print("Task completed")asyncio.run(task())
```

##### Important terms

- `async`: Defines a coroutine function.
- `await`: Suspends the coroutine until the awaited operation completes.
- Coroutine: An object representing an asynchronous computation.
- Event loop: Coordinates asynchronous tasks and I/O operations.

##### Running multiple tasks

```python
import asyncioasync def task(name):    print(f"{name} started")    await asyncio.sleep(2)    print(f"{name} completed")async def main():    await asyncio.gather(        task("Task 1"),        task("Task 2"),        task("Task 3")    )asyncio.run(main())
```

These tasks can overlap while waiting for the sleep operations.

##### Threading vs multiprocessing vs asyncio

| Feature        | Threading                                 | Multiprocessing           | Asyncio                                            |
| -------------- | ----------------------------------------- | ------------------------- | -------------------------------------------------- |
| Execution unit | Thread                                    | Process                   | Coroutine/task                                     |
| Memory         | Shared within process                     | Separate by default       | Usually same process                               |
| CPU-bound work | GIL can limit Python bytecode parallelism | Good fit                  | Not a solution by itself                           |
| I/O-bound work | Useful                                    | Possible but heavier      | Excellent for many async-compatible I/O operations |
| Coordination   | Locks and synchronization                 | IPC and shared mechanisms | Event loop and async primitives                    |

**Interview question: What is the difference between concurrency and parallelism?**

Concurrency means multiple tasks make progress during overlapping periods. Parallelism means multiple tasks execute at the same instant, typically on multiple CPU cores.


<a id="phase-6-section-11"></a>

### Practical Python for Backend Development

These concepts connect Python programming to actual software engineering work.

#### 59. HTTP requests

Python can communicate with web APIs using libraries such as `requests`.

Install:

```bash
python -m pip install requests
```

Example:

```python
import requestsresponse = requests.get(    "https://jsonplaceholder.typicode.com/users",    timeout=10)print(response.status_code)print(response.json())
```

Important response properties:

- `status_code`: HTTP status code.
- `headers`: Response headers.
- `text`: Response body as text.
- `json()`: Parses JSON response content.

Always consider timeouts and errors when calling external APIs.


<a id="phase-6-section-12"></a>

### Practical Python Project

You should not stop at syntax. A software engineering interview may ask you to explain how you would organize a Python application.

Here is a small Student Management System structure.

```text

student_management/
│
├── main.py
├── models.py
├── services.py
├── storage.py
├── requirements.txt
└── tests/
    └── test_services.py

```

##### `models.py`

```python
class Student:    def __init__(self, student_id, name, age):        self.student_id = student_id        self.name = name        self.age = age    def to_dict(self):        return {            "student_id": self.student_id,            "name": self.name,            "age": self.age        }
```

##### `services.py`

```python
class StudentService:    def __init__(self):        self.students = {}    def add_student(self, student):        if student.student_id in self.students:            raise ValueError("Student already exists")        self.students[student.student_id] = student    def get_student(self, student_id):        return self.students.get(student_id)    def delete_student(self, student_id):        if student_id not in self.students:            raise ValueError("Student not found")        del self.students[student_id]    def get_all_students(self):        return list(self.students.values())
```

##### `main.py`

```python
from models import Studentfrom services import StudentServicedef main():    service = StudentService()    student1 = Student(1, "Chirag", 20)    student2 = Student(2, "Amit", 21)    service.add_student(student1)    service.add_student(student2)    student = service.get_student(1)    if student:        print(student.to_dict())    for student in service.get_all_students():        print(student.to_dict())if __name__ == "__main__":    main()
```

##### What this project demonstrates

| Concept      | Where used                     |
| ------------ | ------------------------------ |
| Classes      | `Student`, `StudentService`    |
| Objects      | `student1`, `student2`         |
| Constructor  | `__init__()`                   |
| Dictionaries | Student storage                |
| Methods      | Add, retrieve and delete       |
| Exceptions   | Duplicate and missing students |
| Modules      | `models.py`, `services.py`     |
| Main guard   | `if __name__ == "__main__"`    |

This is an in-memory project, not a production database-backed system. It is a starting point for adding PostgreSQL, FastAPI and pytest.

---

<a id="phase-6-section-13"></a>

### Static analysis and subprocess boundaries

##### What is AST?

Interview question: What is AST in Python?

Interview-ready answer

AST stands for Abstract Syntax Tree. It is a tree-like representation of source code that describes its structure.

Python provides a built-in `ast` module that allows us to parse source code and inspect its classes, functions, arguments, expressions, and other elements without executing the code.

In TestForge AI, I use AST to understand uploaded Python files and extract information required for generating test cases.

**Simple example**

Consider this Python code:

```python
def add(a, b):    return a + b
```

Its conceptual structure looks like this:

FunctionDef: add

Arguments

a, b

Return

a + b

The parser can identify:

- Function name: `add`
- Parameters: `a`, `b`
- Return expression: `a + b`
- Function type: synchronous function

**Important AST node types**

| AST node               | Purpose                 |
| ---------------------- | ----------------------- |
| `ast.Module`           | Complete Python module  |
| `ast.ClassDef`         | Class definition        |
| `ast.FunctionDef`      | Function definition     |
| `ast.AsyncFunctionDef` | Asynchronous function   |
| `ast.Import`           | Import statement        |
| `ast.ImportFrom`       | From-import statement   |
| `ast.Return`           | Return statement        |
| `ast.Raise`            | Raise statement         |
| `ast.Call`             | Function or method call |
| `ast.Name`             | Variable or identifier  |

Interview tip: Remember `ast.parse()`, `ast.walk()`, `ast.FunctionDef`, `ast.ClassDef`, and `ast.Raise`. These are especially useful when explaining your parser.

##### What is subprocess in Python?

Interview question: Why did you use subprocess?

Interview-ready answer

The subprocess module allows a Python program to start and manage another process.

In TestForge AI, I use subprocess to launch the PyTest command separately from the main FastAPI application.

This allows the backend to execute test commands, capture their output, and apply a timeout.

**Simple example**

```python
import subprocessresult = subprocess.run(    ["python", "-c", "print('Hello')"],    capture_output=True,    text=True,    timeout=5)print(result.stdout)
```

Output:

```text
Hello
```

**Explain the important parameters**

- `capture_output=True`: Captures standard output and standard error.
- `text=True`: Returns output as strings.
- `timeout=5`: Stops waiting if the process exceeds five seconds.

Cross-question: Why not execute PyTest directly inside the FastAPI request handler?

Because running test execution as a separate process helps separate the test-running process from the main API process. It also makes it easier to capture execution output and enforce a timeout.


<a id="phase-6-section-14"></a>

### Static-analysis follow-ups

**ast.parse versus ast.walk:** parse creates a syntax tree; walk visits its nodes. Static analysis inspects code without executing the target program. Dynamic analysis observes a running program. Parsing can find invalid syntax and reveal structure, but does not establish business correctness or discover every logical bug.

---

<a id="phase-7"></a>

## Phase 7 — Coding Interview Practice — Java, Python and JavaScript

**Objective:** Practice algorithms with Java first, then Python and JavaScript comparisons. SQL exercises stay in the database phase.

**Sections:** [How to Approach a Coding Interview](#phase-7-section-1) · [Big-O Time and Space Complexity](#phase-7-section-2) · [Essential Data Structures](#phase-7-section-3) · [Java Coding Exercises](#phase-7-section-4) · [Python Coding Exercises](#phase-7-section-5) · [String Coding Problems](#phase-7-section-6) · [Array and Hash-Map Interview Problems](#phase-7-section-7) · [Searching, Sorting, Stacks and Recursion](#phase-7-section-8) · [Additional Python Exercises](#phase-7-section-9) · [How to Explain Coding Solutions in an Interview](#phase-7-section-10) · [Python vs JavaScript Coding Interview Differences](#phase-7-section-11)

<a id="phase-7-section-1"></a>

### How to Approach a Coding Interview

A coding interview tests more than whether you can write code. Interviewers want to understand how you reason.

Use this five-step approach:

1. Understand the problem: identify inputs, outputs and constraints.
2. Consider edge cases: empty input, duplicates, negative numbers, one element.
3. Start with a simple solution: establish correctness first.
4. Optimize: consider better algorithms and data structures.
5. Test and explain: dry-run the code and discuss complexity.

##### Example: Find the largest number in an array

Input:

```python
numbers = [10, 5, 30, 20, 15]
```

Solution:

```python
def find_largest(numbers):    if not numbers:        return None    largest = numbers[0]    for number in numbers:        if number > largest:            largest = number    return largestprint(find_largest([10, 5, 30, 20, 15]))
```

Output:

```text
30
```

Dry run:

| Current number | Largest |
| -------------- | ------- |
| 10             | 10      |
| 5              | 10      |
| 30             | 30      |
| 20             | 30      |
| 15             | 30      |

- Time complexity: \\(O(n)\\), because every element is inspected.
- Auxiliary space: \\(O(1)\\), because only one additional variable is used.

**Interview follow-up:** Why not sort the array first?

Sorting takes \\(O(n\log n)\\), while one traversal takes \\(O(n)\\). Sorting is unnecessary if you only need the largest value.

<a id="phase-7-section-2"></a>

### Big-O Time and Space Complexity

Big-O describes how an algorithm's resource requirements grow as input size increases.

| Complexity       | Meaning      | Example                          |
| ---------------- | ------------ | -------------------------------- |
| \\(O(1)\\)       | Constant     | Access by array index            |
| \\(O(\log n)\\)  | Logarithmic  | Binary search                    |
| \\(O(n)\\)       | Linear       | Traverse an array                |
| \\(O(n\log n)\\) | Linearithmic | Efficient comparison sorting     |
| \\(O(n^2)\\)     | Quadratic    | Nested loops                     |
| \\(O(2^n)\\)     | Exponential  | Some recursive subset algorithms |

##### Example 1 — Constant time

```python
numbers = [10, 20, 30, 40]print(numbers[2])
```

Output: `30`

The number of elements does not change the number of index accesses.

##### Example 2 — Linear time

```python
def print_numbers(numbers):    for number in numbers:        print(number)
```

If there are 100 elements, the loop executes 100 times.

##### Example 3 — Quadratic time

```python
def print_pairs(numbers):    for i in numbers:        for j in numbers:            print(i, j)
```

For four elements, this produces 16 pairs. For \\(n\\) elements, it produces \\(n^2\\) pairs.

##### Important distinctions

- **Time complexity:** How running time grows.
- **Space complexity:** How additional memory grows.
- **Auxiliary space:** Extra memory used by the algorithm, excluding its input.

For example, creating a new list containing \\(n\\) elements requires \\(O(n)\\) additional space.

<a id="phase-7-section-3"></a>

### Essential Data Structures

Choosing the right data structure can change an inefficient solution into an efficient one.

#### 3.1 Array / Python list

An array stores elements in an ordered sequence.

```python
numbers = [10, 20, 30]numbers.append(40)numbers[0] = 5print(numbers)
```

Output:

```text
[5, 20, 30, 40]
```

Typical complexity:

| Operation             | Complexity           |
| --------------------- | -------------------- |
| Access by index       | \\(O(1)\\)           |
| Append at end         | \\(O(1)\\) amortized |
| Search by value       | \\(O(n)\\)           |
| Insert at beginning   | \\(O(n)\\)           |
| Delete from beginning | \\(O(n)\\)           |

#### 3.2 Dictionary / hash map

A dictionary stores key-value pairs.

```python
student = {    "name": "Chirag",    "age": 21,    "department": "CSE"}print(student["name"])
```

Output: `Chirag`

Average lookup, insertion and deletion are \\(O(1)\\).

Useful for:

- Counting frequencies
- Detecting duplicates
- Finding matching values
- Caching results
- Looking up records by ID

#### 3.3 Set

A set stores unique elements.

```python
numbers = [1, 2, 2, 3, 4, 4]unique_numbers = set(numbers)print(unique_numbers)
```

Output (order is not guaranteed):

```text
{1, 2, 3, 4}
```

Membership testing is typically \\(O(1)\\) on average.

#### 3.4 Stack

A stack follows **LIFO — Last In, First Out**.

```python
stack = []stack.append(10)stack.append(20)stack.append(30)print(stack.pop())  # 30print(stack)        # [10, 20]
```

Applications include:

- Balanced parentheses
- Undo functionality
- Browser history patterns
- Function calls and recursion

#### 3.5 Queue

A queue follows **FIFO — First In, First Out**.

```python
from collections import dequequeue = deque()queue.append("A")queue.append("B")queue.append("C")print(queue.popleft())  # Aprint(queue)
```

Use `deque` rather than repeatedly removing the first element of a Python list. `deque.popleft()` is \\(O(1)\\).

Applications include task queues, job processing and breadth-first search.


<a id="phase-7-section-4"></a>

### Java Coding Exercises

#### 41. Reverse a string

```java
public class Main {

    public static void main(String[] args) {

        String text = "Java";

        String reversed = "";

        for (int i = text.length() - 1; i >= 0; i--) {
            reversed += text.charAt(i);
        }

        System.out.println(reversed);
    }
}
```

Output:

```text
avaJ
```

A more efficient approach for repeated modifications:

```java
String reversed = new StringBuilder("Java")
                    .reverse()
                    .toString();
```

#### 42. Check palindrome

```java
public class Main {

    public static void main(String[] args) {

        String text = "madam";

        String reversed = new StringBuilder(text)
                            .reverse()
                            .toString();

        if (text.equals(reversed)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not palindrome");
        }
    }
}
```

#### 43. Find factorial

```java
public class Main {

    public static void main(String[] args) {

        int number = 5;

        long factorial = 1;

        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }

        System.out.println(factorial);
    }
}
```

Output: `120`

#### 44. Fibonacci series

```java
public class Main {

    public static void main(String[] args) {

        int n = 10;

        int a = 0;
        int b = 1;

        for (int i = 0; i < n; i++) {

            System.out.print(a + " ");

            int next = a + b;

            a = b;
            b = next;
        }
    }
}
```

Output:

```text
0 1 1 2 3 5 8 13 21 34
```

#### 45. Check prime number

```java
public class Main {

    public static void main(String[] args) {

        int number = 17;

        boolean isPrime = number >= 2;

        for (int i = 2; i <= Math.sqrt(number) && isPrime; i++) {

            if (number % i == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            System.out.println("Prime");
        } else {
            System.out.println("Not prime");
        }
    }
}
```

#### 46. Find largest element in an array

```java
public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 50, 20, 80, 30};

        int largest = numbers[0];

        for (int number : numbers) {

            if (number > largest) {
                largest = number;
            }
        }

        System.out.println(largest);
    }
}
```

Output: `80`

#### 47. Count character frequency

```java
import java.util.HashMap;
import java.util.Map;

public class Main {

    public static void main(String[] args) {

        String text = "programming";

        Map<Character, Integer> frequency = new HashMap<>();

        for (char character : text.toCharArray()) {

            frequency.put(
                character,
                frequency.getOrDefault(character, 0) + 1
            );
        }

        System.out.println(frequency);
    }
}
```

This demonstrates the use of `HashMap` and `getOrDefault()`.

#### 48. Remove duplicates from an array

```java
import java.util.LinkedHashSet;
import java.util.Set;

public class Main {

    public static void main(String[] args) {

        int[] numbers = {1, 2, 2, 3, 3, 4};

        Set<Integer> unique = new LinkedHashSet<>();

        for (int number : numbers) {
            unique.add(number);
        }

        System.out.println(unique);
    }
}
```

`LinkedHashSet` preserves insertion order while removing duplicates.

#### 49. Find second-largest distinct element

```java
public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 40, 30, 40, 20};

        Integer largest = null;
        Integer secondLargest = null;

        for (int number : numbers) {

            if (largest == null || number > largest) {

                secondLargest = largest;
                largest = number;

            } else if (
                number != largest &&
                (secondLargest == null || number > secondLargest)
            ) {

                secondLargest = number;
            }
        }

        if (secondLargest != null) {
            System.out.println(secondLargest);
        } else {
            System.out.println("Second-largest does not exist");
        }
    }
}
```

Output: `30`

#### 50. Check anagrams

```java
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        String a = "listen";
        String b = "silent";

        char[] first = a.toCharArray();
        char[] second = b.toCharArray();

        Arrays.sort(first);
        Arrays.sort(second);

        if (Arrays.equals(first, second)) {
            System.out.println("Anagrams");
        } else {
            System.out.println("Not anagrams");
        }
    }
}
```


<a id="phase-7-section-5"></a>

### Python Coding Exercises

<a id="phase-7-section-6"></a>

### String Coding Problems

These are common entry-level interview problems.

#### Problem 1: Reverse a string

```python
def reverse_string(text):    return text[::-1]print(reverse_string("chirag"))
```

Output:

```text
garihc
```

Complexity:

- Time: \\(O(n)\\)
- Space: \\(O(n)\\) for the resulting string.

Alternative using two pointers:

```python
def reverse_string(text):    chars = list(text)    left = 0    right = len(chars) - 1    while left < right:        chars[left], chars[right] = chars[right], chars[left]        left += 1        right -= 1    return "".join(chars)
```

Python strings are immutable, so the two-pointer version converts the string into a list before swapping characters.

#### Problem 2: Check whether a string is a palindrome

A palindrome reads the same forward and backward.

Examples:

- `madam` → palindrome
- `racecar` → palindrome
- `hello` → not a palindrome

```python
def is_palindrome(text):    return text == text[::-1]print(is_palindrome("madam"))  # Trueprint(is_palindrome("hello"))  # False
```

Follow-up: What if uppercase and spaces should be ignored?

```python
def is_palindrome(text):    cleaned = "".join(        char.lower()        for char in text        if char.isalnum()    )    return cleaned == cleaned[::-1]print(is_palindrome("A man, a plan, a canal: Panama"))
```

Output: `True`

#### Problem 3: Count character frequency

Input: `"programming"`

```python
def character_frequency(text):    frequency = {}    for char in text:        frequency[char] = frequency.get(char, 0) + 1    return frequencyprint(character_frequency("programming"))
```

Output:

```text
{    'p': 1,    'r': 2,    'o': 1,    'g': 2,    'a': 1,    'm': 2,    'i': 1,    'n': 1}
```

Explanation:

- `frequency.get(char, 0)` returns the existing count.
- If the character does not exist, it returns zero.
- We increment the count.

Complexity:

- Time: \\(O(n)\\) average.
- Space: \\(O(k)\\), where \\(k\\) is the number of distinct characters.

Alternative:

```python
from collections import Counterprint(Counter("programming"))
```

#### Problem 4: Find the first non-repeating character

Input: `"swiss"`

Expected output: `"w"`

```python
def first_non_repeating(text):    frequency = {}    for char in text:        frequency[char] = frequency.get(char, 0) + 1    for char in text:        if frequency[char] == 1:            return char    return Noneprint(first_non_repeating("swiss"))
```

Why two loops?

1. First pass counts occurrences.
2. Second pass preserves original order and finds the first character with count one.

Complexity: \\(O(n)\\) average time and \\(O(k)\\) space.

#### Problem 5: Check whether two strings are anagrams

Two strings are anagrams if they contain the same characters with the same frequencies, regardless of order.

```python
from collections import Counterdef are_anagrams(first, second):    return Counter(first) == Counter(second)print(are_anagrams("listen", "silent"))  # Trueprint(are_anagrams("hello", "world"))    # False
```

Complexity:

- Time: \\(O(n+m)\\) average.
- Space: \\(O(k)\\).

This solution is case-sensitive and treats spaces as characters. Normalize the inputs if the problem requires case-insensitive comparison.

<a id="phase-7-section-7"></a>

### Array and Hash-Map Interview Problems

#### Problem 6: Find duplicate elements

Input:

```python
numbers = [1, 2, 3, 2, 4, 5, 1]
```

Expected output: `[2, 1]`

```python
def find_duplicates(numbers):    seen = set()    added = set()    duplicates = []    for number in numbers:        if number in seen and number not in added:            duplicates.append(number)            added.add(number)        seen.add(number)    return duplicatesprint(find_duplicates([1, 2, 3, 2, 4, 5, 1]))
```

This preserves the order in which duplicates are first encountered.

- Time: \\(O(n)\\) average.
- Space: \\(O(n)\\).

**Project connection:** In a recruitment system, a database unique constraint on `(student_id, drive_id)` can prevent the same student from applying to the same drive twice. An application-level check improves the user experience, but the database constraint protects against concurrent requests.

#### Problem 7: Two Sum

High-priority interview problem

Question: Given an array and a target, return the indices of two numbers that add up to the target.

Input:

```python
numbers = [2, 7, 11, 15]target = 9
```

Expected output:

```text
[0, 1]
```

**Approach 1 — Brute force**

```python
def two_sum(numbers, target):    for i in range(len(numbers)):        for j in range(i + 1, len(numbers)):            if numbers[i] + numbers[j] == target:                return [i, j]    return None
```

- Time: \\(O(n^2)\\)
- Space: \\(O(1)\\)

**Approach 2 — Hash map optimization**

```python
def two_sum(numbers, target):    seen = {}    for index, number in enumerate(numbers):        complement = target - number        if complement in seen:            return [seen[complement], index]        seen[number] = index    return Noneprint(two_sum([2, 7, 11, 15], 9))
```

Output: `[0, 1]`

Dry run:

| Index | Number | Complement | Dictionary before check | Action          |
| ----- | ------ | ---------- | ----------------------- | --------------- |
| 0     | 2      | 7          | `{}`                    | Store `2: 0`    |
| 1     | 7      | 2          | `{2: 0}`                | Return `[0, 1]` |

Complexity:

- Time: \\(O(n)\\) average.
- Space: \\(O(n)\\).

Why is it better? Instead of repeatedly searching the remaining array, we store previously visited numbers and look up the required complement.

#### Problem 8: Remove duplicates from a sorted array

Input:

```python
numbers = [1, 1, 2, 2, 3, 4, 4]
```

Expected output:

```text
[1, 2, 3, 4]
```

```python
def remove_duplicates(numbers):    if not numbers:        return []    result = [numbers[0]]    for number in numbers[1:]:        if number != result[-1]:            result.append(number)    return result
```

Why does it work? Because the array is sorted, duplicate values are adjacent.

- Time: \\(O(n)\\)
- Space: \\(O(n)\\) for output.

#### Problem 9: Move all zeros to the end

Input:

```python
numbers = [0, 1, 0, 3, 12]
```

Expected output:

```text
[1, 3, 12, 0, 0]
```

```python
def move_zeros(numbers):    position = 0    for number in numbers:        if number != 0:            numbers[position] = number            position += 1    while position < len(numbers):        numbers[position] = 0        position += 1    return numbersprint(move_zeros([0, 1, 0, 3, 12]))
```

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(1)\\)
- The function modifies the original list.

#### Problem 10: Maximum subarray sum — Kadane's algorithm

Question: Find the maximum sum of a contiguous subarray.

Input:

```python
numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
```

Expected output: `6`

The maximum-sum subarray is `[4, -1, 2, 1]`.

```python
def max_subarray_sum(numbers):    if not numbers:        return None    current_sum = numbers[0]    maximum_sum = numbers[0]    for number in numbers[1:]:        current_sum = max(number, current_sum + number)        maximum_sum = max(maximum_sum, current_sum)    return maximum_sumprint(max_subarray_sum(    [-2, 1, -3, 4, -1, 2, 1, -5, 4]))
```

Core idea: At every position, decide whether to start a new subarray at the current element or extend the existing subarray.

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(1)\\)

Initializing with the first element also allows the algorithm to handle arrays containing only negative numbers.

<a id="phase-7-section-8"></a>

### Searching, Sorting, Stacks and Recursion

#### Problem 11: Binary search

Question: Find the index of a target in a sorted array.

Input:

```python
numbers = [10, 20, 30, 40, 50, 60]target = 40
```

Expected output: `3`

```python
def binary_search(numbers, target):    left = 0    right = len(numbers) - 1    while left <= right:        mid = (left + right) // 2        if numbers[mid] == target:            return mid        elif numbers[mid] < target:            left = mid + 1        else:            right = mid - 1    return -1print(binary_search([10, 20, 30, 40, 50, 60], 40))
```

Dry run:

| Left | Right | Mid | Value | Decision          |
| ---- | ----- | --- | ----- | ----------------- |
| 0    | 5     | 2   | 30    | Search right half |
| 3    | 5     | 4   | 50    | Search left half  |
| 3    | 3     | 3   | 40    | Found             |

- Time: \\(O(\log n)\\)
- Auxiliary space: \\(O(1)\\)

**Important:** Binary search requires sorted data or another suitable monotonic search condition. Each iteration eliminates approximately half of the remaining search space.

#### Problem 12: Merge two sorted arrays

Input:

```python
first = [1, 3, 5]second = [2, 4, 6]
```

Expected output:

```text
[1, 2, 3, 4, 5, 6]
```

```python
def merge_sorted_arrays(first, second):    i = 0    j = 0    result = []    while i < len(first) and j < len(second):        if first[i] <= second[j]:            result.append(first[i])            i += 1        else:            result.append(second[j])            j += 1    result.extend(first[i:])    result.extend(second[j:])    return resultprint(merge_sorted_arrays([1, 3, 5], [2, 4, 6]))
```

- Time: \\(O(n+m)\\)
- Space: \\(O(n+m)\\) for the result.

This is also a core idea used in merge sort.

#### Problem 13: Valid parentheses

High-priority interview problem

Valid:

```text
()
{}[]
({[]})
```

Invalid:

```text
(]
([)]
(((
```

```python
def is_valid_parentheses(text):    stack = []    matching = {        ")": "(",        "}": "{",        "]": "["    }    for char in text:        if char in "({[":            stack.append(char)        elif char in matching:            if not stack or stack.pop() != matching[char]:                return False    return len(stack) == 0print(is_valid_parentheses("({[]})"))  # Trueprint(is_valid_parentheses("([)]"))    # False
```

Why a stack? The most recently opened bracket must be the first one closed. This is LIFO behavior.

- Time: \\(O(n)\\)
- Space: \\(O(n)\\)

#### Problem 14: Recursion — Factorial

Recursion occurs when a function calls itself to solve a smaller version of the same problem.

$$
 n! = n \times (n-1)! 
$$

Base case:

$$
 0! = 1 
$$

```python
def factorial(n):    if n < 0:        raise ValueError("Factorial is not defined for negative integers")    if n == 0 or n == 1:        return 1    return n * factorial(n - 1)print(factorial(5))
```

Output: `120`

Call flow:

```text
factorial(5)
    5 * factorial(4)
        4 * factorial(3)
            3 * factorial(2)
                2 * factorial(1)
                    1
```

Unwinding:

```text
5 × 4 × 3 × 2 × 1 = 120
```

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(n)\\), because of the call stack.

A **base case** stops recursive calls. Without one, recursion may continue until a recursion-depth error occurs.

#### Problem 15: Fibonacci sequence

Each Fibonacci number is the sum of the previous two.

$$
 F(n) = F(n-1) + F(n-2) 
$$

Naive recursive implementation:

```python
def fibonacci(n):    if n < 0:        raise ValueError("n must be non-negative")    if n <= 1:        return n    return fibonacci(n - 1) + fibonacci(n - 2)print(fibonacci(6))
```

Output: `8`

This naive implementation has approximately \\(O(2^n)\\) time complexity because it recalculates many values.

Better iterative solution:

```python
def fibonacci(n):    if n < 0:        raise ValueError("n must be non-negative")    a, b = 0, 1    for _ in range(n):        a, b = b, a + b    return aprint(fibonacci(6))
```

- Time: \\(O(n)\\)
- Auxiliary space: \\(O(1)\\)

**Interview lesson:** Recursion can make a solution easier to express, but it is not automatically more efficient.

#### Sorting algorithms — What you should know

| Algorithm      | Average time     | Worst time       | Stable?    |
| -------------- | ---------------- | ---------------- | ---------- |
| Bubble sort    | \\(O(n^2)\\)     | \\(O(n^2)\\)     | Yes        |
| Selection sort | \\(O(n^2)\\)     | \\(O(n^2)\\)     | No         |
| Insertion sort | \\(O(n^2)\\)     | \\(O(n^2)\\)     | Yes        |
| Merge sort     | \\(O(n\log n)\\) | \\(O(n\log n)\\) | Yes        |
| Quick sort     | \\(O(n\log n)\\) | \\(O(n^2)\\)     | Usually no |

In real Python applications, use built-in sorting unless there is a specific reason to implement an algorithm yourself.

```python
numbers = [5, 2, 8, 1, 3]print(sorted(numbers))
```

Output:

```text
[1, 2, 3, 5, 8]
```

`sorted()` returns a new list. `list.sort()` sorts the existing list in place.


<a id="phase-7-section-9"></a>

### Additional Python Exercises

#### 67. Check prime number

```python
number = 17if number < 2:    print("Not prime")else:    for i in range(2, int(number ** 0.5) + 1):        if number % i == 0:            print("Not prime")            break    else:        print("Prime")
```

Why check only up to the square root?

If a number has a factor greater than its square root, its corresponding factor must be smaller than the square root. Therefore, checking beyond that point is unnecessary.


#### 70. Find the second-largest distinct number

```python
numbers = [10, 20, 40, 30, 40, 20]unique = sorted(set(numbers))if len(unique) >= 2:    print(unique[-2])else:    print("Second-largest value does not exist")
```


#### 72. Find missing number

Given numbers from 1 to `n` with one number missing:

```python
numbers = [1, 2, 4, 5]n = 5expected_sum = n * (n + 1) // 2actual_sum = sum(numbers)missing = expected_sum - actual_sumprint(missing)
```

Output:

```text
3
```


<a id="phase-7-section-10"></a>

### How to Explain Coding Solutions in an Interview

Knowing the code is only half the job. Explain your reasoning in a structured way.

Use this template:

1. **Approach:** Explain the algorithm.
2. **Data structure:** Explain why you chose it.
3. **Implementation:** Walk through the important code.
4. **Complexity:** State time and auxiliary space.
5. **Edge cases:** Explain what happens with unusual inputs.

##### Example: Two Sum

Interviewer: Find two numbers that add up to a target.

Model answer:

> I'll use a hash map to store previously visited numbers and their indices. For every number, I'll calculate its complement by subtracting it from the target. If the complement is already in the map, I've found the answer. Otherwise, I'll store the current number and its index.
>
> This avoids the nested loops of the brute-force solution. The average time complexity is O(n), and the auxiliary space complexity is O(n).

Then demonstrate with:

```python
numbers = [2, 7, 11, 15]target = 9
```

Explain how the dictionary changes at each iteration.

This demonstrates both algorithmic understanding and communication ability.

<a id="phase-7-section-11"></a>

### Python vs JavaScript Coding Interview Differences

Since backend development may involve both languages, understand these common differences.

| Concept        | Python         | JavaScript             |
| -------------- | -------------- | ---------------------- |
| List/array     | `list`         | `Array`                |
| Dictionary/map | `dict`         | `Map` / object         |
| Set            | `set`          | `Set`                  |
| Length         | `len(arr)`     | `arr.length`           |
| Add to end     | `append()`     | `push()`               |
| Remove last    | `pop()`        | `pop()`                |
| Iterate        | `for x in arr` | `for (const x of arr)` |
| Sorting        | `sorted(arr)`  | `arr.sort()`           |

#### Two Sum in JavaScript

```javascript
function twoSum(numbers, target) {
    const seen = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        seen.set(numbers[i], i);
    }

    return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
```

Output:

```text
[0, 1]
```

#### Important JavaScript sorting trap

This:

```javascript
[10, 2, 30, 4].sort()
```

does not produce numeric ascending order because the default sorting behavior compares string representations.

Correct:

```javascript
[10, 2, 30, 4].sort((a, b) => a - b);
```

Output:

```text
[2, 4, 10, 30]
```

---

<a id="phase-8"></a>

## Phase 8 — SQL, DBMS, PostgreSQL, MySQL, SQLite and ORMs

**Objective:** The single home for SQL theory and query practice, relational engines, Prisma ORM and SQLAlchemy.

**Sections:** [Database Fundamentals](#phase-8-section-1) · [Relational Database Design](#phase-8-section-2) · [SQL Fundamentals](#phase-8-section-3) · [Filtering, Sorting and Aggregation](#phase-8-section-4) · [SQL Joins](#phase-8-section-5) · [Database Normalization](#phase-8-section-6) · [Constraints and Indexes](#phase-8-section-7) · [Transactions, ACID and Concurrency](#phase-8-section-8) · [PostgreSQL Architecture](#phase-8-section-9) · [MySQL and SQLite — Engine-Specific Knowledge](#phase-8-section-10) · [Connection Pooling](#phase-8-section-11) · [Prisma ORM](#phase-8-section-12) · [Prisma Migrations and Queries](#phase-8-section-13) · [Prisma Transactions](#phase-8-section-14) · [Advanced Database Interview Questions](#phase-8-section-15) · [SQLAlchemy — Python Persistence After SQL](#phase-8-section-16) · [SQL Practice — Customer, Order and Payment Queries](#phase-8-section-17) · [Subqueries, CTEs and CASE](#phase-8-section-18) · [Advanced SQL Interview Questions](#phase-8-section-19)

<a id="phase-8-section-1"></a>

### Database Fundamentals

**Q8.1. What is a database?**

A database is an organized collection of data that can be stored, accessed, updated, and managed efficiently.

For a recruitment platform, the database needs to store:

- Student information.
- Company information.
- Placement drives.
- Student applications.
- Interview schedules.
- Job offers.

A database provides persistent storage and controlled access to information. Unlike a temporary JavaScript array, records remain available after the application server restarts.

**Q8.2. What is a DBMS?**

A Database Management System is software that allows applications and users to interact with databases.

Examples include PostgreSQL, MySQL, MongoDB, Oracle Database, Microsoft SQL Server, and SQLite.

| Database                     | DBMS                           |
| ---------------------------- | ------------------------------ |
| Organized collection of data | Software managing the data     |
| Contains records             | Provides operations on records |
| Example: student database    | Example: PostgreSQL            |


**Q8.3. Difference between PostgreSQL and MySQL?**

Both are relational database management systems.

- PostgreSQL has strong support for advanced SQL features, complex queries, JSONB, custom types, and extensibility.
- MySQL is widely used in web applications and has a large ecosystem.
- Both support transactions, indexes, constraints, and relational data.
- Actual performance depends on schema design, queries, indexing, configuration, and workload.

We’ll use PostgreSQL for this phase.

<a id="phase-8-section-2"></a>

### Relational Database Design

##### Tables, rows, columns and schema

Consider a `Student` table:

| id | name   | email               | department |
| -- | ------ | ------------------- | ---------- |
| 1  | Chirag | chirag\@example.com | CSE        |
| 2  | Rahul  | rahul\@example.com  | IT         |
| 3  | Priya  | priya\@example.com  | CSE        |

- Table: `Student`
- Row: One student's record.
- Column: A property such as name or email.
- Schema: The defined structure of the database and its objects.

**Q8.4. What is a primary key?**

A primary key uniquely identifies each row in a table.

```sql
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255)
);
```

Primary key rules:

1. Values must be unique.
2. Values cannot be `NULL`.
3. Each table has one primary key constraint, which can contain multiple columns.

A primary key can be a single column or a composite key.

For automatically generated IDs in PostgreSQL:

```sql
CREATE TABLE students (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

**Q8.5. What is a foreign key?**

A foreign key connects one table to another by referencing a candidate key, commonly the primary key.

```sql
CREATE TABLE companies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(150) NOT NULL
);

CREATE TABLE drives (
    id INTEGER PRIMARY KEY,
    company_id INTEGER NOT NULL,
    role VARCHAR(100),

    FOREIGN KEY (company_id)
        REFERENCES companies(id)
);
```

Here, `drives.company_id` references `companies.id`. This prevents a drive from referencing a company that does not exist, unless the constraint is deliberately deferred or otherwise configured.

##### Database relationships

**One-to-one (1:1)**

Student

Profile

One student has one profile.

**One-to-many (1:N)**

Company

Many drives

One company can have multiple placement drives.

**Many-to-many (M:N)**

Students

Drives

Many students can apply to many drives. A junction table connects them.

**Q8.6. How do you implement a many-to-many relationship?**

Generally, create a junction table.

```sql
CREATE TABLE applications (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES students(id),
    drive_id BIGINT NOT NULL REFERENCES drives(id),
    status VARCHAR(30) NOT NULL DEFAULT 'APPLIED',

    UNIQUE (student_id, drive_id)
);
```

The unique constraint prevents the same student from applying to the same drive twice.

**Q8.7. Why not store multiple drive IDs inside a student record?**

Bad design:

```text
id | name   | drive_ids
1  | Chirag | 10, 11, 12
```

Problems:

- Difficult to query individual applications.
- Difficult to enforce foreign keys for each ID.
- Updating individual relationships becomes complicated.
- Data integrity is harder to maintain.

A separate `applications` table solves these problems.

#### Q8.8. What are candidate, alternate and composite keys?

- **Candidate key:** A minimal set of columns that can uniquely identify a row.
- **Primary key:** The candidate key selected as the main identifier.
- **Alternate key:** A candidate key not selected as the primary key.
- **Composite key:** A key made from multiple columns.

Example:

```sql
CREATE TABLE drive_applications (
    student_id INT,
    drive_id INT,
    status VARCHAR(30),
    PRIMARY KEY (student_id, drive_id)
);
```

A student can apply to multiple drives, but cannot create duplicate applications for the same drive.

This is directly relevant to UniNest AI's `studentId` and `driveId` uniqueness constraint.


<a id="phase-8-section-3"></a>

### SQL Fundamentals

SQL stands for Structured Query Language. It is used to define, retrieve, manipulate, and control relational database data.

##### Categories of SQL commands

| Category | Purpose                    | Commands                      |
| -------- | -------------------------- | ----------------------------- |
| DDL      | Define database structures | CREATE, ALTER, DROP, TRUNCATE |
| DML      | Manipulate records         | INSERT, UPDATE, DELETE        |
| DQL      | Retrieve records           | SELECT                        |
| DCL      | Control permissions        | GRANT, REVOKE                 |
| TCL      | Manage transactions        | BEGIN, COMMIT, ROLLBACK       |

##### Creating a table

```sql
CREATE TABLE students (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    department VARCHAR(50),
    cgpa NUMERIC(4, 2)
);
```

- `BIGINT`: Integer type with a larger range.
- `VARCHAR(100)`: Text with a maximum length.
- `NOT NULL`: Value is required.
- `UNIQUE`: Duplicate values are rejected.
- `NUMERIC(4,2)`: Exact decimal representation with up to four total digits and two after the decimal point.

##### INSERT — Create data

```sql
INSERT INTO students (name, email, department, cgpa)
VALUES
('Chirag', 'chirag@example.com', 'CSE', 8.20),
('Rahul', 'rahul@example.com', 'IT', 7.80),
('Priya', 'priya@example.com', 'CSE', 9.10);
```

Expected result:

```text
INSERT 0 3
```

##### SELECT — Read data

```sql
SELECT * FROM students;
```

Select specific columns:

```sql
SELECT name, email
FROM students;
```

##### UPDATE — Modify data

```sql
UPDATE students
SET cgpa = 8.50
WHERE id = 1;
```

Important: Always understand your `WHERE` clause. Without it, the query updates every row.

##### DELETE — Remove data

```sql
DELETE FROM students
WHERE id = 3;
```

Again, without `WHERE`, all rows are deleted.

**Q8.9. Difference between DELETE, TRUNCATE and DROP?**

| Command  | What it does                                      |
| -------- | ------------------------------------------------- |
| DELETE   | Removes selected or all rows                      |
| TRUNCATE | Quickly removes all rows from a table             |
| DROP     | Removes the table itself, including its structure |

In PostgreSQL, `TRUNCATE` and `DROP` are transactional, but have different semantics and effects. `TRUNCATE` can affect identity sequences depending on whether `RESTART IDENTITY` is specified.

<a id="phase-8-section-4"></a>

### Filtering, Sorting and Aggregation

##### WHERE

```sql
SELECT *
FROM students
WHERE department = 'CSE';
```

Other operators:

```sql
SELECT * FROM students WHERE cgpa > 8.0;

SELECT * FROM students WHERE cgpa BETWEEN 7.0 AND 9.0;

SELECT * FROM students WHERE department IN ('CSE', 'IT');

SELECT * FROM students WHERE name LIKE 'C%';
```

`LIKE` performs pattern matching. `%` means any sequence of characters, while `_` means one character. PostgreSQL also supports `ILIKE` for case-insensitive pattern matching.

##### ORDER BY

```sql
SELECT name, cgpa
FROM students
ORDER BY cgpa DESC;
```

- `ASC`: Ascending order.
- `DESC`: Descending order.

##### LIMIT and OFFSET

```sql
SELECT *
FROM students
ORDER BY id
LIMIT 10 OFFSET 20;
```

This retrieves 10 rows after skipping the first 20. This is one form of pagination. For large datasets, keyset pagination is often more efficient than high OFFSET values.

##### Aggregate functions

| Function | Purpose           |
| -------- | ----------------- |
| COUNT()  | Count records     |
| SUM()    | Calculate total   |
| AVG()    | Calculate average |
| MIN()    | Find minimum      |
| MAX()    | Find maximum      |

```sql
SELECT COUNT(*) FROM students;

SELECT AVG(cgpa) FROM students;

SELECT MAX(cgpa) FROM students;
```

##### GROUP BY

Count students in each department:

```sql
SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department;
```

Conceptual result:

| department | total_students |
| ---------- | -------------- |
| CSE        | 2              |
| IT         | 1              |

##### HAVING

`WHERE` filters rows before grouping. `HAVING` filters groups after aggregation.

```sql
SELECT department, AVG(cgpa) AS average_cgpa
FROM students
GROUP BY department
HAVING AVG(cgpa) > 8.0;
```

**Q8.10. Difference between WHERE and HAVING?**

- `WHERE` filters individual records before aggregation.
- `HAVING` filters aggregated groups after `GROUP BY`.

<a id="phase-8-section-5"></a>

### SQL Joins

Joins combine records from multiple tables based on related columns.

Imagine these tables:

**companies**

| id | name      |
| -- | --------- |
| 1  | Google    |
| 2  | Microsoft |

**drives**

| id  | company_id | role              |
| --- | ---------- | ----------------- |
| 101 | 1          | SDE               |
| 102 | 1          | QA Engineer       |
| 103 | 2          | Backend Developer |

##### INNER JOIN

Returns matching rows from both tables.

```sql
SELECT
    companies.name,
    drives.role
FROM companies
INNER JOIN drives
    ON companies.id = drives.company_id;
```

| name      | role              |
| --------- | ----------------- |
| Google    | SDE               |
| Google    | QA Engineer       |
| Microsoft | Backend Developer |

##### LEFT JOIN

Returns every row from the left table and matching rows from the right table. If no match exists, right-side columns are `NULL`.

```sql
SELECT
    companies.name,
    drives.role
FROM companies
LEFT JOIN drives
    ON companies.id = drives.company_id;
```

This also includes companies that have no drives.

##### Other joins

- RIGHT JOIN: Returns all rows from the right table and matching rows from the left table.
- FULL OUTER JOIN: Returns all matching and non-matching rows from both tables.
- CROSS JOIN: Returns the Cartesian product of two tables: every row from the first paired with every row from the second.

**Q8.11. Difference between INNER JOIN and LEFT JOIN?**

INNER JOIN returns only matching records. LEFT JOIN returns all records from the left table, including those without a matching record on the right.

##### Subqueries

A subquery is a query inside another query.

Find students whose CGPA is above the average:

```sql
SELECT name, cgpa
FROM students
WHERE cgpa > (
    SELECT AVG(cgpa)
    FROM students
);
```

A subquery can be used in `SELECT`, `FROM`, `WHERE`, and other query contexts.

##### EXISTS

Find students who have applied to at least one drive:

```sql
SELECT s.name
FROM students s
WHERE EXISTS (
    SELECT 1
    FROM applications a
    WHERE a.student_id = s.id
);
```

`EXISTS` checks whether the subquery returns any rows.

<a id="phase-8-section-6"></a>

### Database Normalization

Normalization organizes relational data to reduce duplication and prevent data anomalies.

**Q8.12. What is normalization?**

It is the process of structuring database tables according to rules called normal forms.

Consider a poorly designed table:

| student_id | student_name | company_name | drive_role |
| ---------- | ------------ | ------------ | ---------- |
| 1          | Chirag       | Google       | SDE        |
| 1          | Chirag       | Microsoft    | QA         |
| 2          | Rahul        | Google       | SDE        |

Student and company information is repeated. This can cause:

- Update anomaly: Changing a student's name requires updating multiple records.
- Insertion anomaly: You cannot store a company until a drive or related record exists.
- Deletion anomaly: Deleting the last drive record could accidentally remove the only stored company information.

We separate the data into related tables.

**First Normal Form (1NF)**

- Each column contains atomic values.
- No repeating groups or arrays of values in a single cell.
- Each row is identifiable.

Instead of storing `Python, Java, SQL` in one skills cell, use a separate `student_skills` table with one skill per row.

**Second Normal Form (2NF)**

- Must satisfy 1NF.
- Every non-key attribute must depend on the entire candidate key, not just part of a composite candidate key.

For example, in a table keyed by `(student_id, drive_id)`, `student_name` depends only on `student_id`, not on the full key. It belongs in the students table.

**Third Normal Form (3NF)**

- Must satisfy 2NF.
- Non-key attributes must not depend transitively on a candidate key.

Example:

```text
student_id → department_id → department_name
```

If `department_name` is stored in the student table, it depends on `department_id`, not directly on the student's key. Separate departments into their own table.

**Q8.13. What is denormalization?**

Denormalization intentionally introduces redundancy to improve read performance or simplify certain access patterns.

Example: Store a precomputed `application_count` on a drive rather than calculating it every time.

Trade-off:

- Faster or simpler reads in certain workloads.
- More complex writes and risk of inconsistent duplicated values.

Interview answer: Normalize first to protect data integrity. Denormalize only when there is a demonstrated performance or reporting need and a strategy to keep duplicated data consistent.

<a id="phase-8-section-7"></a>

### Constraints and Indexes

##### Database constraints

Constraints enforce rules at the database level.

| Constraint  | Purpose                  |
| ----------- | ------------------------ |
| PRIMARY KEY | Unique row identity      |
| FOREIGN KEY | Referential integrity    |
| UNIQUE      | Prevent duplicate values |
| NOT NULL    | Require a value          |
| CHECK       | Enforce a condition      |
| DEFAULT     | Provide a default value  |

Example:

```sql
CREATE TABLE applications (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES students(id),
    drive_id BIGINT NOT NULL REFERENCES drives(id),
    status VARCHAR(30) NOT NULL DEFAULT 'APPLIED',
    cgpa_at_application NUMERIC(4,2)
        CHECK (cgpa_at_application BETWEEN 0 AND 10),
    UNIQUE (student_id, drive_id)
);
```

The database enforces these rules even if an API endpoint accidentally fails to validate a request.

**Q8.14. Explain database indexing.**

An index is an additional data structure that helps the database locate records without scanning every row.

Imagine a book:

- Without an index: Read every page to find a topic.
- With an index: Look up the topic and jump to its page.

PostgreSQL commonly uses B-tree indexes for equality and range queries.

```sql
CREATE INDEX idx_students_department
ON students(department);
```

A query filtering by department may be able to use the index:

```sql
SELECT *
FROM students
WHERE department = 'CSE';
```

An index does not guarantee a faster query. PostgreSQL's query planner chooses a plan based on estimated costs, table size, selectivity, statistics, and other factors.

##### Composite indexes

```sql
CREATE INDEX idx_applications_student_status
ON applications(student_id, status);
```

This is particularly useful for queries filtering by `student_id`, or by both `student_id` and `status`. It may not be as useful for a query filtering only by `status`, because of the leading-column behaviour of B-tree indexes.

**Q8.15. Difference between single-column and composite indexes?**

- Single-column index: An index on one column.
- Composite index: An index on multiple columns in a specific order.

The order matters.

##### PostgreSQL index types

| Index  | Typical use                                   |
| ------ | --------------------------------------------- |
| B-tree | Equality, range, sorting                      |
| Hash   | Equality comparisons                          |
| GIN    | JSONB, arrays, full-text search               |
| GiST   | Geometric and specialized search              |
| BRIN   | Very large tables with naturally ordered data |

**Q8.16. Can too many indexes be harmful?**

Yes. Indexes:

- Consume disk space.
- Add overhead to INSERT, UPDATE and DELETE.
- Need maintenance.
- Can increase write latency.

Create indexes based on actual query patterns, not automatically on every column.

##### EXPLAIN and EXPLAIN ANALYZE

```sql
EXPLAIN
SELECT *
FROM students
WHERE department = 'CSE';
```

To execute the query and report actual timings:

```sql
EXPLAIN ANALYZE
SELECT *
FROM students
WHERE department = 'CSE';
```

Look for sequential scans, index scans, nested loops, hash joins, sorts, actual rows, and execution time. A sequential scan is not inherently bad; for a small table or a query returning many rows, it may be the best plan.

Important: `EXPLAIN ANALYZE` actually executes the query. Be careful with statements that modify data.

#### Q8.17. What is the difference between clustered and non-clustered indexes?

The precise terminology and implementation differ by database.

Broadly:

- A clustered index organizes table data according to the index key in systems that support that organization.
- A non-clustered index is a separate structure containing indexed keys and references to the associated rows.

Don't assume every database implements clustered indexes in exactly the same way.


<a id="phase-8-section-8"></a>

### Transactions, ACID and Concurrency

##### What is a transaction?

A transaction is a logical unit of database work. It allows multiple operations to succeed or fail together.

Imagine a student accepts a company offer. The application must:

1. Update the offer status.
2. Update the application status.
3. Record the acceptance in the audit history.

If the first two succeed but the audit record fails, the database may become inconsistent. A transaction ensures the operations are committed together or rolled back together.

##### ACID properties

- **A — Atomicity:** All operations succeed, or none are committed.
- **C — Consistency:** A transaction preserves defined database constraints and integrity rules.
- **I — Isolation:** Concurrent transactions are controlled so they do not produce unacceptable interference.
- **D — Durability:** Once committed, changes survive failures according to the database's durability guarantees.

**Q8.18. Explain ACID with a practical example.**

When a student accepts an offer, the application status, offer status, and audit record should be updated as one transaction. Atomicity prevents partial completion; consistency preserves constraints; isolation controls concurrent updates; durability ensures the committed result is retained.

##### SQL transaction example

```sql
BEGIN;

UPDATE offers
SET status = 'ACCEPTED'
WHERE id = 501;

UPDATE applications
SET status = 'OFFER_ACCEPTED'
WHERE id = 101;

INSERT INTO offer_audit (offer_id, action)
VALUES (501, 'ACCEPTED');

COMMIT;
```

If something fails before the transaction commits:

```sql
ROLLBACK;
```

- `COMMIT`: Commits the transaction's changes.
- `ROLLBACK`: Discards uncommitted changes.

##### Transaction isolation levels

| Isolation level  | Key behaviour                                                                    |
| ---------------- | -------------------------------------------------------------------------------- |
| Read Uncommitted | PostgreSQL treats it as Read Committed                                           |
| Read Committed   | Each statement sees a committed snapshot                                         |
| Repeatable Read  | Transaction sees a stable snapshot                                               |
| Serializable     | Enforces behaviour equivalent to serial execution, potentially requiring retries |

**Q8.19. What are dirty reads, non-repeatable reads and phantom reads?**

- Dirty read: Reading uncommitted data from another transaction. PostgreSQL prevents this.
- Non-repeatable read: Reading the same row twice and seeing different committed values.
- Phantom read: Repeating a query and seeing a different set of rows due to changes by another transaction.

PostgreSQL's Repeatable Read provides snapshot isolation and prevents non-repeatable reads and phantom reads in PostgreSQL, although serialization anomalies can still occur. Serializable provides stronger guarantees.

##### Race conditions

A race condition occurs when the result depends on the timing or ordering of concurrent operations.

Example: Only one seat is available in a placement drive, and two students attempt to claim it simultaneously. A naive read-then-decrement approach can allow both to believe they obtained the last seat.

One solution is an atomic conditional update:

```sql
UPDATE drives
SET seats_remaining = seats_remaining - 1
WHERE id = 10
  AND seats_remaining > 0
RETURNING seats_remaining;
```

If no row is returned, no seat was available to claim.

**Q8.20. Optimistic vs pessimistic locking?**

- Pessimistic locking: Lock a record so competing transactions must wait or fail to acquire the lock.
- Optimistic locking: Let operations proceed, but check a version or equivalent condition before accepting an update.

Example:

```sql
UPDATE drives
SET seats_remaining = 4,
    version = version + 1
WHERE id = 10
  AND version = 7;
```

If zero rows are affected, another transaction changed the record first. The application should reload and retry or report a conflict.

#### Q8.21. What is a lost update?

Two transactions read the same original value and then overwrite each other's updates.

Example:

- Original stock = 10.
- A reads 10 and calculates 9.
- B reads 10 and calculates 8.
- A writes 9.
- B writes 8.

The final value becomes 8 instead of 7.

A database-level atomic update can prevent this specific pattern:

```sql
UPDATE inventory
SET quantity = quantity - 1
WHERE product_id = 5
  AND quantity > 0;
```


#### Q8.22. What is row-level locking?

Row-level locking locks selected rows to coordinate conflicting updates.

PostgreSQL example:

```sql
BEGIN;

SELECT *
FROM accounts
WHERE id = 1
FOR UPDATE;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

COMMIT;
```

Another transaction trying to update or acquire a conflicting lock on that row may need to wait.


<a id="phase-8-section-9"></a>

### PostgreSQL Architecture

**Q8.23. What is PostgreSQL?**

PostgreSQL is an open-source object-relational database management system (ORDBMS).

It supports:

- Relational tables and SQL.
- Transactions and ACID properties.
- Constraints and indexes.
- JSON and JSONB.
- Views and materialized views.
- Stored functions and triggers.
- Extensions such as PostGIS.

##### How PostgreSQL processes a query

1. Client sends SQL to PostgreSQL.
2. PostgreSQL parses and validates the query.
3. The planner/optimizer chooses a query plan.
4. The executor runs the plan.
5. Data is accessed through memory and storage structures.
6. Results are returned to the client.

##### Shared buffers

Shared buffers are PostgreSQL's main shared memory area for caching database pages. When a query needs a page, PostgreSQL can use a cached copy or read it from storage.

##### WAL

WAL stands for Write-Ahead Logging. PostgreSQL records changes in its write-ahead log before the corresponding data pages need to be written to their final locations.

Why?

- Crash recovery.
- Durability.
- Replication support.
- Point-in-time recovery when combined with appropriate backups and archived WAL.

**Q8.24. What happens when a PostgreSQL transaction commits?**

In simplified terms:

1. The transaction's changes generate WAL records.
2. PostgreSQL ensures the relevant WAL is flushed according to configured durability settings.
3. The commit is acknowledged.
4. Changed data pages can be written later.
5. If a crash occurs, WAL supports recovery.

A commit does not mean every modified data page is immediately written to the table file.

##### MVCC

MVCC stands for Multi-Version Concurrency Control. PostgreSQL uses row versions to allow readers and writers to work concurrently in many situations without readers blocking writers or writers blocking readers.

An UPDATE typically creates a new row version rather than overwriting the old version in place. Old versions are later cleaned up through vacuuming when they are no longer needed.

**Q8.25. What is VACUUM?**

`VACUUM` helps reclaim space occupied by obsolete row versions for reuse and maintains visibility information. PostgreSQL's autovacuum normally performs maintenance automatically.

```sql
VACUUM ANALYZE students;
```

`ANALYZE` updates statistics used by the query planner.


<a id="phase-8-section-10"></a>

### MySQL and SQLite — Engine-Specific Knowledge

#### PostgreSQL, MySQL and SQLite Serve Different Workloads

| Engine | Deployment model | Practical choice |
| --- | --- | --- |
| PostgreSQL | Client/server relational database | Shared transactional data, rich queries and constraints |
| MySQL with InnoDB | Client/server relational database | Shared web-application data with transactional tables |
| SQLite | Embedded database library, commonly a local file | Local tools, embedded apps and suitable single-application deployments |

Learn SQL and relational design once, then study dialect and operational differences. Choosing an ORM does not remove those differences.

#### MySQL Fundamentals

Be able to explain a database/schema, table, primary key and index using the SQL lessons above. InnoDB combines transactions, locking and multiversion reads. Concurrency behavior depends on the isolation level and statement; do not assume all SELECT operations lock rows or that every storage engine offers identical guarantees. [MySQL InnoDB transaction reference](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-model.html).

Practice parameterized CRUD, a multi-statement transaction, a unique-constraint violation and an execution-plan investigation. For monetary amounts, choose an appropriate exact representation and currency handling rather than assuming binary floating point is exact.

PostgreSQL-specific examples such as `DATE_TRUNC`, `JSONB` and `BIGSERIAL` need adaptation for MySQL. Check engine support before transferring full outer joins, upserts, identity columns or JSON queries. Migration tests should use the actual deployment engine.

#### SQLite Fundamentals

SQLite runs inside the application process instead of requiring a separate database server. It is useful for local storage and modest workloads, but concurrent writing is serialized: many competing writers may call for a client/server database. Do not judge suitability only by database size. [Official SQLite deployment guidance](https://www.sqlite.org/whentouse.html).

For an application using SQLite, know where the file lives, how container volumes preserve it, and how backups remain consistent with active writes. Verify foreign-key enforcement for each connection. Testing on SQLite alone does not prove PostgreSQL/MySQL behavior, especially around types, constraints and concurrency.

#### Interview Questions and Practical Task

**Why not switch engines by changing only the connection URL?** SQL syntax, types, migrations, isolation, locking and query plans can differ.

**When would you choose SQLite?** When embedded/local storage and simple operation match the workload; evaluate concurrent writes and deployment topology.

**Task:** Model students and applications with a uniqueness constraint on the student/drive pair. Implement the same use case on the engine you claim experience with. Explain the schema, query plan, transaction boundary, backup approach and any dialect-specific choices.


<a id="phase-8-section-11"></a>

### Connection Pooling

**Q8.26. What is a database connection?**

A database connection is a communication session between an application and a database server. Creating and destroying connections for every request is inefficient.

**Q8.27. What is connection pooling?**

Connection pooling maintains a reusable collection of database connections.

Typical flow:

1. An API request asks for a connection.
2. The pool provides an available connection.
3. The query runs.
4. The connection is returned to the pool.
5. Another request can reuse it.

Benefits:

- Lower connection setup overhead.
- Controlled database connection count.
- Better resource utilization.
- Improved application scalability.

**Q8.28. What happens when the pool is exhausted?**

Requests may wait for a connection until a timeout occurs.

Common causes:

- Too many application instances.
- Long-running queries.
- Connections not released.
- Pool size configured too high or too low.
- Database connection limit reached.

Interview answer: Inspect pool metrics, query duration, connection acquisition wait time, active connections, idle connections, and database limits. Investigate connection leaks and query performance before changing pool size.

<a id="phase-8-section-12"></a>

### Prisma ORM

##### What is an ORM?

ORM stands for Object-Relational Mapping. An ORM maps relational database tables and records to objects and models in application code.

Without an ORM:

```javascript
const result = await pool.query(
  "SELECT * FROM students WHERE id = $1",
  [studentId]
);

const student = result.rows[0];
```

With Prisma:

```javascript
const student = await prisma.student.findUnique({
  where: { id: studentId }
});
```

Both approaches can query PostgreSQL. Prisma provides a type-safe application interface and manages database access through its generated client.

**Q8.29. What is Prisma?**

Prisma is a Node.js and TypeScript ORM toolkit. Its major components include:

- Prisma Schema: Defines models, fields, relations, and database configuration.
- Prisma Client: Generated, type-safe query API.
- Prisma Migrate: Manages database schema migrations.
- Prisma CLI: Commands for generating clients, migrations, and database operations.

**Q8.30. Difference between raw SQL and Prisma?**

| Raw SQL                                | Prisma                                 |
| -------------------------------------- | -------------------------------------- |
| Direct SQL control                     | Higher-level query API                 |
| Full SQL flexibility                   | Convenient typed operations            |
| You manage mapping                     | Client maps results to objects         |
| Can be database-specific               | Abstracts many operations              |
| Must manage parameterization carefully | Provides safe parameterized query APIs |

Prisma does not eliminate the need to understand SQL. For complex queries, database-specific features, and performance tuning, SQL knowledge remains important.

##### Install PostgreSQL and Prisma

Create the project:

```bash
mkdir recruitment-api
cd recruitment-api

npm init -y

npm install express @prisma/client dotenv
npm install -D prisma typescript tsx @types/node @types/express
```

Initialize TypeScript and Prisma:

```bash
npx tsc --init
npx prisma init
```

The exact generated files can vary by Prisma version and initialization options. Keep the installed Prisma CLI and client versions aligned.

Check versions:

```bash
npx prisma -v
npm list prisma @prisma/client
```

##### Configure the database connection

In `.env`:

```dotenv
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/recruitment_db?schema=public"
PORT=3000
```

Replace `your_password` with your local PostgreSQL password.

The URL structure:

```text
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

| Component | Example        |
| --------- | -------------- |
| Protocol  | postgresql     |
| User      | postgres       |
| Password  | your password  |
| Host      | localhost      |
| Port      | 5432           |
| Database  | recruitment_db |
| Schema    | public         |

Do not commit `.env` to GitHub.

##### Create the database

Using PostgreSQL's command-line utility:

```bash
createdb -U postgres recruitment_db
```

Alternatively, in `psql`:

```sql
CREATE DATABASE recruitment_db;
```

Connect:

```bash
psql -U postgres -d recruitment_db
```

Expected prompt:

```text
recruitment_db=#
```

##### Define the Prisma schema

Our recruitment platform needs four models:

- Student
- Company
- Drive
- Application

A conventional Prisma schema:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum ApplicationStatus {
  APPLIED
  SHORTLISTED
  INTERVIEW
  OFFERED
  REJECTED
}

model Student {
  id           Int           @id @default(autoincrement())
  name         String
  email        String        @unique
  department   String
  cgpa         Decimal       @db.Decimal(4, 2)

  applications Application[]

  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}

model Company {
  id      Int     @id @default(autoincrement())
  name    String
  website String?

  drives  Drive[]
}

model Drive {
  id        Int     @id @default(autoincrement())
  role      String
  package   Decimal @db.Decimal(10, 2)
  companyId Int

  company      Company       @relation(fields: [companyId], references: [id])
  applications Application[]

  createdAt DateTime @default(now())
}

model Application {
  id        Int               @id @default(autoincrement())
  studentId Int
  driveId   Int
  status    ApplicationStatus @default(APPLIED)

  student Student @relation(fields: [studentId], references: [id])
  drive   Drive   @relation(fields: [driveId], references: [id])

  appliedAt DateTime @default(now())

  @@unique([studentId, driveId])
  @@index([driveId, status])
}
```

Version note from the source: this example uses the conventional `prisma-client-js` generator and `url` in the datasource block. Prisma versions may use different generator or adapter configurations. Follow the setup for your installed version rather than mixing configurations from different major versions.

**Q8.31. Explain the Prisma schema.**

```prisma
model Student {
  id    Int    @id @default(autoincrement())
  email String @unique
}
```

- `model`: Defines a database model.
- `Int`: Integer field.
- `@id`: Primary key.
- `@default(autoincrement())`: Generates an incrementing ID.
- `@unique`: Creates a uniqueness constraint.

Other useful attributes:

| Attribute    | Purpose                           |
| ------------ | --------------------------------- |
| `@id`        | Primary key                       |
| `@unique`    | Unique constraint                 |
| `@default()` | Default value                     |
| `@updatedAt` | Automatically updates timestamp   |
| `@relation`  | Defines a relationship            |
| `@@index`    | Adds an index                     |
| `@@unique`   | Composite uniqueness              |
| `@map`       | Maps a field to a database column |
| `@@map`      | Maps a model to a table           |

##### Understanding Prisma relationships

```prisma
model Company {
  id     Int     @id @default(autoincrement())
  name   String
  drives Drive[]
}

model Drive {
  id        Int     @id @default(autoincrement())
  role      String
  companyId Int

  company Company @relation(
    fields: [companyId],
    references: [id]
  )
}
```

This represents one company having many drives.

- `Company.drives`: Relation field on the one side.
- `Drive.company`: Relation field on the many side.
- `Drive.companyId`: Actual foreign-key scalar field in the database.

**Q8.32. Difference between a relation field and a scalar field in Prisma?**

`company` is a relation field used by Prisma to navigate the relationship. `companyId` is a scalar field representing the actual foreign key stored in the database.

<a id="phase-8-section-13"></a>

### Prisma Migrations and Queries

##### Generate and migrate

Run:

```bash
npx prisma migrate dev --name init
```

In the conventional setup, this:

1. Creates a migration from schema changes.
2. Applies the migration to the development database.
3. Generates Prisma Client.

If needed, generate the client separately:

```bash
npx prisma generate
```

Inspect the database visually:

```bash
npx prisma studio
```

Prisma Studio opens a browser interface to view and edit database records.

**Q8.33. What is a migration?**

A migration is a version-controlled change to the database schema.

For example:

- First migration: Create students.
- Second migration: Add companies.
- Third migration: Add drives and applications.
- Fourth migration: Add an index.

Migration history lets a team apply schema changes consistently across environments.

**Q8.34. Difference between **`migrate dev`** and **`migrate deploy`**?**

| Command                 | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| `prisma migrate dev`    | Development: creates and applies migrations |
| `prisma migrate deploy` | Deployment: applies existing migrations     |
| `prisma migrate status` | Checks migration status                     |
| `prisma generate`       | Generates Prisma Client                     |

Never use `migrate dev` as the normal production deployment migration command.

##### Create a student

```javascript
const student = await prisma.student.create({
  data: {
    name: "Chirag",
    email: "chirag@example.com",
    department: "CSE",
    cgpa: 8.2
  }
});

console.log(student);
```

Conceptual result:

```json
{
  "id": 1,
  "name": "Chirag",
  "email": "chirag@example.com",
  "department": "CSE",
  "cgpa": "8.20"
}
```

The actual representation of decimal values depends on the Prisma Decimal type and serialization.

##### Read records

Find all:

```javascript
const students = await prisma.student.findMany();
```

Find by unique email:

```javascript
const student = await prisma.student.findUnique({
  where: { email: "chirag@example.com" }
});
```

Find first matching record:

```javascript
const student = await prisma.student.findFirst({
  where: { department: "CSE" }
});
```

Differences:

- `findUnique`: Searches using a unique field or unique constraint.
- `findFirst`: Returns the first matching record.
- `findMany`: Returns all matching records.

##### Update and delete

```javascript
const updatedStudent = await prisma.student.update({
  where: { id: 1 },
  data: { cgpa: 8.5 }
});
```

```javascript
const deletedStudent = await prisma.student.delete({
  where: { id: 1 }
});
```

`delete()` throws an error if the unique record does not exist. Handle that case in your API.

##### Filtering

```javascript
const students = await prisma.student.findMany({
  where: {
    department: "CSE",
    cgpa: { gte: 8.0 }
  }
});
```

| Prisma operator | Meaning                   |
| --------------- | ------------------------- |
| `equals`        | Exact match               |
| `contains`      | Contains text             |
| `startsWith`    | Starts with               |
| `gt`            | Greater than              |
| `gte`           | Greater than or equal     |
| `lt`            | Less than                 |
| `lte`           | Less than or equal        |
| `in`            | Matches one of the values |
| `not`           | Negates a condition       |

##### Sorting and pagination

Offset-based:

```javascript
const students = await prisma.student.findMany({
  where: { department: "CSE" },
  orderBy: { cgpa: "desc" },
  skip: 0,
  take: 10
});
```

Cursor-based:

```javascript
const students = await prisma.student.findMany({
  take: 10,
  cursor: { id: 100 },
  skip: 1,
  orderBy: { id: "asc" }
});
```

The `skip: 1` avoids returning the cursor record itself.

##### Select only required fields

```javascript
const students = await prisma.student.findMany({
  select: {
    id: true,
    name: true,
    email: true
  }
});
```

This reduces unnecessary data retrieval and helps prevent exposing fields the API does not need.

**Q8.35. Difference between **`select`** and **`include`**?**

- `select`: Specifies exactly which fields and relations to return.
- `include`: Returns the model's default scalar fields plus specified relations.

```javascript
const student = await prisma.student.findUnique({
  where: { id: 1 },
  include: { applications: true }
});
```

This retrieves the student and their related applications.

##### Nested writes

Create a company and its first drive in one nested operation:

```javascript
const company = await prisma.company.create({
  data: {
    name: "Example Technologies",
    website: "https://example.com",
    drives: {
      create: {
        role: "Backend Developer",
        package: 800000
      }
    }
  },
  include: {
    drives: true
  }
});
```

Prisma supports nested writes for creating and connecting related records. Nested writes are transactional.

##### Connect existing records

Create an application for an existing student and drive:

```javascript
const application = await prisma.application.create({
  data: {
    student: { connect: { id: 1 } },
    drive: { connect: { id: 10 } }
  }
});
```

The database's foreign-key and unique constraints still apply.

<a id="phase-8-section-14"></a>

### Prisma Transactions

**Q8.36. How do you execute multiple Prisma queries in one transaction?**

There are two common transaction patterns.

**1. Sequential transaction**

```javascript
const result = await prisma.$transaction([
  prisma.student.update({
    where: { id: 1 },
    data: { name: "Chirag Vasava" }
  }),

  prisma.application.updateMany({
    where: { studentId: 1 },
    data: { status: "SHORTLISTED" }
  })
]);
```

The operations execute as one transaction. If the transaction fails, changes are rolled back.

**2. Interactive transaction**

Use an interactive transaction when later operations depend on earlier query results or when conditional application logic is required.

```javascript
const result = await prisma.$transaction(async (tx) => {
  const application = await tx.application.update({
    where: { id: 101 },
    data: { status: "OFFERED" }
  });

  const offer = await tx.offer.create({
    data: {
      applicationId: application.id,
      status: "PENDING"
    }
  });

  return { application, offer };
});
```

`tx` is the transaction-scoped Prisma Client. Queries executed through it participate in the transaction.

Avoid slow external network calls inside a database transaction. Holding a transaction open for a long time can increase lock contention and consume database resources.

**Q8.37. How do you prevent duplicate applications?**

Use three layers:

1. Validate the incoming request.
2. Check for an existing application when useful for user feedback.
3. Enforce `@@unique([studentId, driveId])` in the database.

Why is the third one essential? Two requests may arrive simultaneously. Both can pass the initial application-level check. The database uniqueness constraint is the final authority.

Catch Prisma's unique constraint error, commonly `P2002`, and return HTTP `409 Conflict`.

<a id="phase-8-section-15"></a>

### Advanced Database Interview Questions

These questions test whether you understand how databases behave in real applications, not just SQL syntax.

**Q8.38. Difference between SQL and Prisma?**

SQL is the language used to communicate with relational databases. Prisma is an ORM toolkit that provides a type-safe application interface for database operations. Prisma can generate SQL queries internally, and developers can also use raw SQL when necessary.

**Q8.39. What is the N+1 query problem?**

Suppose you retrieve 100 students and then query their applications individually:

```javascript
const students = await prisma.student.findMany();

for (const student of students) {
  const applications = await prisma.application.findMany({
    where: { studentId: student.id }
  });
}
```

This can execute:

- 1 query to retrieve students.
- 100 additional queries to retrieve applications.

Total: 101 queries.

A better approach:

```javascript
const students = await prisma.student.findMany({
  include: {
    applications: true
  }
});
```

Inspect the generated SQL and query count for your particular setup.

**Q8.40. Difference between JSON and JSONB in PostgreSQL?**

| JSON                                     | JSONB                                      |
| ---------------------------------------- | ------------------------------------------ |
| Stores JSON text representation          | Stores decomposed binary representation    |
| Preserves input formatting and key order | Does not preserve key order or formatting  |
| Requires parsing for processing          | Supports efficient processing and indexing |
| Useful when original text matters        | Often better for querying JSON structures  |

JSONB is commonly used when an application needs to filter and index JSON fields.

**Q8.41. What is a view?**

A view is a stored SQL query presented as a virtual table.

```sql
CREATE VIEW student_applications AS
SELECT
    s.name,
    d.role,
    a.status
FROM students s
JOIN applications a ON a.student_id = s.id
JOIN drives d ON d.id = a.drive_id;
```

Query it:

```sql
SELECT *
FROM student_applications;
```

A regular view does not normally store result data itself. A materialized view stores query results and must be refreshed to reflect newer data.

**Q8.42. What is a stored procedure or function?**

A database function or procedure is reusable logic executed inside the database. It can be useful for complex database-side operations, calculations, and workflows. However, business logic does not always belong in the database; decide based on maintainability, performance, and architectural boundaries.

**Q8.43. What is a deadlock?**

A deadlock happens when transactions wait for resources locked by each other.

Example:

- Transaction A locks row 1 and waits for row 2.
- Transaction B locks row 2 and waits for row 1.

PostgreSQL detects deadlocks and aborts one transaction.

Prevention:

- Access records in a consistent order.
- Keep transactions short.
- Avoid unnecessary locks.
- Implement retries for appropriate transient failures.

**Q8.44. Difference between database backup and replication?**

- Backup: A recoverable copy of database data.
- Replication: Maintains copies of database changes on another database server.

Replication can help availability and read scaling, but it is not a replacement for backups. Accidental deletion or corrupted data can also be replicated.

**Q8.45. How would you optimize a slow API endpoint that retrieves student applications?**

Investigate in this order:

1. Reproduce and measure the slow endpoint.
2. Inspect the SQL queries generated by the ORM.
3. Use `EXPLAIN ANALYZE` on expensive queries.
4. Identify unnecessary queries and N+1 problems.
5. Add appropriate indexes based on the query pattern.
6. Retrieve only necessary fields.
7. Add pagination.
8. Review connection pool behaviour.
9. Consider caching frequently accessed data if justified.
10. Measure again to verify improvement.

Avoid adding indexes or caching without first identifying the bottleneck.


#### Q8.46. What is a stored procedure?

A stored procedure is a database-side routine that can execute SQL and procedural logic.

Its capabilities and syntax depend on the database. It can be useful for database-centric operations, but should not automatically replace application service logic.


<a id="phase-8-section-16"></a>

### SQLAlchemy — Python Persistence After SQL

#### Core, ORM, Engine and Session

SQLAlchemy Core builds SQL expressions; its ORM maps Python classes to tables. The engine manages database connectivity. A session tracks ORM objects and coordinates a transaction. A session is not a global cache and should not be shared across concurrent threads or asyncio tasks. [Session basics](https://docs.sqlalchemy.org/en/20/orm/session_basics.html).

The following self-contained example uses SQLAlchemy 2.x-style mappings and an in-memory SQLite database. It illustrates insert, commit and a parameterized expression-based query.

```python
from sqlalchemy import String, create_engine, select
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column

class Base(DeclarativeBase):
    pass

class Student(Base):
    __tablename__ = "students"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))

engine = create_engine("sqlite:///:memory:")
Base.metadata.create_all(engine)

with Session(engine) as session:
    with session.begin():
        session.add(Student(name="Aarav"))

with Session(engine) as session:
    statement = select(Student).where(Student.name == "Aarav")
    for student in session.scalars(statement):
        print(student.id, student.name)
```

The first transaction commits on successful exit and rolls back on an exception. The second session reads mapped objects. The database exists only for this example's engine lifetime. See the [ORM quick start](https://docs.sqlalchemy.org/en/20/orm/quickstart.html) for mapping details.

#### Flush, Commit and Migrations

A flush sends pending changes to the database transaction; commit completes the transaction. After a failed flush, roll back before reusing that session. Closing a session releases its resources. Keep transaction boundaries explicit in the service layer. [Session lifecycle reference](https://docs.sqlalchemy.org/en/20/orm/session_basics.html).

Creating tables with metadata is useful in a disposable example; production schema evolution needs reviewed migrations. Alembic is a common migration tool for SQLAlchemy. Review generated changes, backfill data where needed and plan compatibility during rollout.

#### ORM Interview Exercise

Explain an N+1 query and inspect generated SQL before choosing relationship loading. Compare Prisma's schema/client workflow with SQLAlchemy's Python mappings and sessions. Both still require knowledge of indexes, constraints and transactions.

**Practice:** Replace the FastAPI example's dictionary with a session-backed service. Test rollback and duplicate constraints against the target engine. Keep request validation models separate from persistence models, and use a compatible async driver/session only if adopting an asynchronous persistence path.


<a id="phase-8-section-17"></a>

### SQL Practice — Customer, Order and Payment Queries

These exercises use PostgreSQL syntax. Foundations, joins, normalization and ACID are taught earlier in this phase; they are not repeated in the coding phase.

#### Sample database

**customers**

| customer_id | name  | city      |
| ----------- | ----- | --------- |
| 1           | Aarav | Vadodara  |
| 2           | Neha  | Ahmedabad |
| 3           | Riya  | Surat     |
| 4           | Dev   | Vadodara  |

**orders**

| order_id | customer_id | amount | status    |
| -------- | ----------- | ------ | --------- |
| 101      | 1           | 1500   | completed |
| 102      | 2           | 2500   | completed |
| 103      | 1           | 800    | pending   |
| 104      | 3           | 3000   | completed |
| 105      | 2           | 1200   | cancelled |

**payments**

| payment_id | order_id | amount | status     |
| ---------- | -------- | ------ | ---------- |
| 501        | 101      | 1500   | successful |
| 502        | 102      | 2500   | successful |
| 503        | 103      | 800    | pending    |
| 504        | 104      | 3000   | successful |

#### Problem 19: Calculate total spending per customer

```sql
SELECT
    customer_id,
    SUM(amount) AS total_spending
FROM orders
GROUP BY customer_id;
```

Expected result:

| customer_id | total_spending |
| ----------- | -------------- |
| 1           | 2300           |
| 2           | 3700           |
| 3           | 3000           |

How `GROUP BY` works:

1. Groups rows with the same `customer_id`.
2. Calculates the aggregate for each group.
3. Returns one result row per group.

#### Problem 20: Find customers whose total orders exceed ₹2,000

```sql
SELECT
    customer_id,
    SUM(amount) AS total_spending
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 2000;
```

Expected result:

| customer_id | total_spending |
| ----------- | -------------- |
| 1           | 2300           |
| 2           | 3700           |
| 3           | 3000           |

#### Problem 21: Find customers who have never placed an order

```sql
SELECT
    customers.customer_id,
    customers.name
FROM customers
LEFT JOIN orders
    ON customers.customer_id = orders.customer_id
WHERE orders.order_id IS NULL;
```

Expected result:

| customer_id | name |
| ----------- | ---- |
| 4           | Dev  |

Alternative using `NOT EXISTS`:

```sql
SELECT c.customer_id, c.name
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);
```

`NOT EXISTS` clearly expresses an anti-join: find records with no matching row.

<a id="phase-8-section-18"></a>

### Subqueries, CTEs and CASE

#### 10.1 Subqueries

A subquery is a query inside another query.

**Problem 22: Find orders above the average order amount.**

```sql
SELECT *
FROM orders
WHERE amount > (
    SELECT AVG(amount)
    FROM orders
);
```

The inner query calculates the average. The outer query returns orders above that value.

Expected result:

| order_id | customer_id | amount |
| -------- | ----------- | ------ |
| 102      | 2           | 2500   |
| 104      | 3           | 3000   |

#### 10.2 CTE — Common Table Expression

A CTE makes complex queries easier to read and organize.

```sql
WITH customer_totals AS (
    SELECT
        customer_id,
        SUM(amount) AS total_spending
    FROM orders
    GROUP BY customer_id
)
SELECT *
FROM customer_totals
WHERE total_spending > 2500;
```

Think of a CTE as a named query result that can be referenced by the main query.

#### 10.3 CASE

`CASE` adds conditional logic to SQL.

```sql
SELECT
    order_id,
    amount,
    CASE
        WHEN amount >= 2500 THEN 'High Value'
        WHEN amount >= 1000 THEN 'Medium Value'
        ELSE 'Low Value'
    END AS order_category
FROM orders;
```

Expected classification:

| order_id | amount | order_category |
| -------- | ------ | -------------- |
| 101      | 1500   | Medium Value   |
| 102      | 2500   | High Value     |
| 103      | 800    | Low Value      |
| 104      | 3000   | High Value     |
| 105      | 1200   | Medium Value   |

#### 10.4 NULL handling

`NULL` represents missing or unknown data. It is not the same as zero or an empty string.

Incorrect:

```sql
SELECT *
FROM orders
WHERE status = NULL;
```

Correct:

```sql
SELECT *
FROM orders
WHERE status IS NULL;
```

Use `COALESCE` to provide a fallback:

```sql
SELECT
    name,
    COALESCE(city, 'Unknown') AS city
FROM customers;
```

Important interview distinction:

- `COUNT(*)` counts rows.
- `COUNT(column)` counts non-NULL values in that column.
- `COUNT(DISTINCT column)` counts unique non-NULL values.

<a id="phase-8-section-19"></a>

### Advanced SQL Interview Questions

These problems are especially useful for backend development, financial systems and reporting.

#### Problem 23: Find the second-highest salary

Assume an `employees` table:

| employee_id | name  | salary |
| ----------- | ----- | ------ |
| 1           | Aarav | 50000  |
| 2           | Neha  | 70000  |
| 3           | Riya  | 60000  |
| 4           | Dev   | 70000  |
| 5           | Mira  | 40000  |

Approach 1 — DISTINCT with a subquery:

```sql
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);
```

Expected result: `60000`

We want the second-highest **distinct** salary, not simply the second row after sorting.

Approach 2 — `DENSE_RANK()`:

```sql
WITH ranked_salaries AS (
    SELECT
        name,
        salary,
        DENSE_RANK() OVER (
            ORDER BY salary DESC
        ) AS salary_rank
    FROM employees
)
SELECT name, salary
FROM ranked_salaries
WHERE salary_rank = 2;
```

Expected result:

| name | salary |
| ---- | ------ |
| Riya | 60000  |

##### Window function comparison

| Function       | What happens with ties?                  |
| -------------- | ---------------------------------------- |
| `ROW_NUMBER()` | Different sequential number for each row |
| `RANK()`       | Same rank for ties, then skips ranks     |
| `DENSE_RANK()` | Same rank for ties, no skipped ranks     |

For salaries `70000, 70000, 60000, 50000`:

| Salary | RANK | DENSE_RANK |
| ------ | ---- | ---------- |
| 70000  | 1    | 1          |
| 70000  | 1    | 1          |
| 60000  | 3    | 2          |
| 50000  | 4    | 3          |

#### Problem 24: Find duplicate records

Find customers sharing the same name:

```sql
SELECT
    name,
    COUNT(*) AS occurrences
FROM customers
GROUP BY name
HAVING COUNT(*) > 1;
```

For duplicate email addresses:

```sql
SELECT
    email,
    COUNT(*)
FROM customers
GROUP BY email
HAVING COUNT(*) > 1;
```

#### Problem 25: Top three highest-paid employees in each department

Assume employees also have a `department_id`.

```sql
WITH ranked_employees AS (
    SELECT
        employee_id,
        name,
        department_id,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY department_id
            ORDER BY salary DESC
        ) AS salary_rank
    FROM employees
)
SELECT *
FROM ranked_employees
WHERE salary_rank <= 3;
```

Important concepts:

- `PARTITION BY` creates independent ranking groups.
- `ORDER BY` defines ranking order.
- The outer query filters the window-function result.

If the requirement is exactly three employees per department, use `ROW_NUMBER()` with a deterministic tie-breaker such as `employee_id`.

#### Problem 26: Calculate monthly revenue

Assume the `payments` table has a `created_at` timestamp.

```sql
SELECT
    DATE_TRUNC('month', created_at) AS month,
    SUM(amount) AS monthly_revenue
FROM payments
WHERE status = 'successful'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month;
```

`DATE_TRUNC('month', ...)` groups timestamps by calendar month.

Why filter successful payments? Pending or failed payments should not be counted as collected payments. The exact definition of revenue depends on the business's accounting rules.

#### Problem 27: Find orders without successful payments

```sql
SELECT
    o.order_id,
    o.customer_id,
    o.amount
FROM orders o
WHERE NOT EXISTS (
    SELECT 1
    FROM payments p
    WHERE p.order_id = o.order_id
      AND p.status = 'successful'
);
```

With our sample data, orders `103` and `105` are returned.

#### Problem 28: Compare order amount and successful payment amount

This is a simple reconciliation query.

```sql
SELECT
    o.order_id,
    o.amount AS order_amount,
    COALESCE(
        SUM(
            CASE
                WHEN p.status = 'successful' THEN p.amount
                ELSE 0
            END
        ),
        0
    ) AS successful_payment_amount
FROM orders o
LEFT JOIN payments p
    ON p.order_id = o.order_id
GROUP BY o.order_id, o.amount
HAVING o.amount <> COALESCE(
    SUM(
        CASE
            WHEN p.status = 'successful' THEN p.amount
            ELSE 0
        END
    ),
    0
);
```

This identifies orders where successful payment totals differ from the order amount.

A production reconciliation system may also need to consider refunds, partial payments, payment attempts, currencies, settlement status, gateway transaction IDs and time differences.

---

---

<a id="phase-9"></a>

## Phase 9 — MongoDB, NoSQL, Redis and Caching

**Objective:** Choose document models and caching strategies based on access patterns.

**Sections:** [NoSQL fundamentals](#phase-9-section-1) · [MongoDB architecture](#phase-9-section-2) · [MongoDB installation and setup](#phase-9-section-3) · [MongoDB CRUD operations](#phase-9-section-4) · [Filtering, sorting and pagination](#phase-9-section-5) · [Embedded documents vs references](#phase-9-section-6) · [MongoDB aggregation pipeline](#phase-9-section-7) · [MongoDB indexes and optimization](#phase-9-section-8) · [MongoDB transactions and consistency](#phase-9-section-9) · [Mongoose ODM](#phase-9-section-10) · [Redis fundamentals](#phase-9-section-11) · [Redis architecture and data structures](#phase-9-section-12) · [Caching fundamentals](#phase-9-section-13) · [Redis advanced backend use cases](#phase-9-section-14) · [Complete architecture: PostgreSQL + MongoDB + Redis](#phase-9-section-15) · [Advanced interview Q&A](#phase-9-section-16)

<a id="phase-9-section-1"></a>

### NoSQL fundamentals

**Q9.1. Difference between SQL and NoSQL databases?**

SQL/relational databases store data in structured tables with defined schemas and relationships. Examples include PostgreSQL, MySQL, and Oracle.

NoSQL databases use models such as documents, key-value pairs, graphs, or wide-column records. Examples include MongoDB, Redis, and Cassandra.

| Feature        | SQL                     | NoSQL                        |
| -------------- | ----------------------- | ---------------------------- |
| Data model     | Usually tables          | Documents, key-value, etc.   |
| Schema         | Generally predefined    | Often flexible               |
| Relationships  | Foreign keys and joins  | Often embedded or referenced |
| Query language | SQL                     | Varies                       |
| Transactions   | Commonly strong support | Depends on database          |

**When would you choose PostgreSQL over MongoDB?**

Choose PostgreSQL when an application has structured data, strong relationships, transactional workflows, and consistency requirements. A recruitment platform has relationships between students, drives, and applications, making PostgreSQL a natural choice.

MongoDB may suit document-oriented data with varying structures or nested documents. NoSQL does not automatically mean faster or more scalable; the decision depends on workload and access patterns.


#### Q9.2. What is NoSQL?

NoSQL means **“Not Only SQL.”** It refers to database systems that use data models other than, or in addition to, traditional relational tables.

NoSQL databases are commonly used when applications need flexible data structures, specific access patterns, horizontal scaling, or specialized data models.

The four main categories are:

| Category    | How it stores data                 | Examples              |
| ----------- | ---------------------------------- | --------------------- |
| Document    | JSON-like documents                | MongoDB, Couchbase    |
| Key-value   | Values associated with unique keys | Redis, DynamoDB       |
| Wide-column | Rows and flexible column families  | Cassandra, HBase      |
| Graph       | Nodes and relationships            | Neo4j, Amazon Neptune |

#### Q9.3. Why do applications use NoSQL databases?

Common reasons include:

1. Flexible document structures.
2. Natural representation of nested data.
3. Access patterns that suit key-value storage.
4. Horizontal scaling options.
5. Specialized capabilities for graphs, wide-column data, or caching.

**Recruitment-platform example**

A student profile might contain:

- Personal information
- Skills
- Certifications
- Projects
- Education history
- Social links

These sections can have different structures across users. MongoDB documents can represent this kind of data naturally.


<a id="phase-9-section-2"></a>

### MongoDB architecture

#### Q9.4. What is MongoDB?

MongoDB is a document-oriented NoSQL database.

Instead of storing information primarily in relational tables, it stores records as **BSON documents** grouped into **collections**.

Understand these four terms:

| MongoDB term | Meaning                    | Relational comparison |
| ------------ | -------------------------- | --------------------- |
| Database     | Container for collections  | Database              |
| Collection   | Group of documents         | Table                 |
| Document     | Individual record          | Row                   |
| Field        | Property inside a document | Column                |

A MongoDB `_id` is the document's unique identifier within its collection. A stored reference to another document is not automatically a relational foreign-key constraint.

#### Q9.5. What does a MongoDB document look like?

```json
{
  "_id": "generated-object-id",
  "name": "Chirag",
  "email": "chirag@example.com",
  "department": "CSE",
  "cgpa": 8.2,
  "skills": [
    "Python",
    "JavaScript",
    "PostgreSQL"
  ],
  "education": {
    "degree": "B.E.",
    "university": "MSU"
  }
}
```

Notice:

- `skills` is an array.
- `education` is a nested object.
- Different documents in a collection can have different fields.
- `_id` uniquely identifies a document within its collection.

#### Q9.6. What is BSON?

**BSON means Binary JSON.**

MongoDB stores documents using BSON, a binary-encoded representation of JSON-like data.

BSON supports additional data types, including:

- ObjectId
- Date
- Binary
- Decimal128
- Int32 and Int64
- Regular expressions

JSON is a text format. BSON is a binary data representation with additional types.

#### Q9.7. What is ObjectId?

MongoDB automatically generates an `_id` field for documents if you don't supply one. A common default type is `ObjectId`.

```javascript
ObjectId("507f1f77bcf86cd799439011")
```

An ObjectId is 12 bytes and contains:

- 4 bytes of timestamp information
- 5 bytes of random value
- 3 bytes of incrementing counter

It is designed to provide highly likely uniqueness across generated IDs. Its timestamp component should not be treated as a perfectly reliable global ordering mechanism.

<a id="phase-9-section-3"></a>

### MongoDB installation and setup

You can use MongoDB locally or through MongoDB Atlas, which provides managed MongoDB deployments.

For local practice, the source roadmap suggests MongoDB Community Server and MongoDB Shell (`mongosh`), or Docker.

##### Docker setup

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  mongo:8
```

Check that the container is running:

```bash
docker ps
```

Connect to MongoDB Shell:

```bash
docker exec -it mongodb mongosh
```

Check the version:

```javascript
db.version()
```

Create and switch to a database:

```javascript
use recruitment
```

MongoDB creates the database when data is first written to it.

Create a collection:

```javascript
db.createCollection("students")
```

List collections:

```javascript
show collections
```

<a id="phase-9-section-4"></a>

### MongoDB CRUD operations

CRUD means Create, Read, Update, Delete. MongoDB Shell provides methods for each operation.

#### Q9.8. How do you insert one document?

```javascript
db.students.insertOne({
  name: "Chirag",
  email: "chirag@example.com",
  department: "CSE",
  cgpa: 8.2
});
```

Conceptual response:

```javascript
{
  acknowledged: true,
  insertedId: ObjectId("...")
}
```

Insert multiple documents:

```javascript
db.students.insertMany([
  {
    name: "Rahul",
    email: "rahul@example.com",
    department: "IT",
    cgpa: 7.8
  },
  {
    name: "Priya",
    email: "priya@example.com",
    department: "CSE",
    cgpa: 9.1
  }
]);
```

#### Q9.9. How do you retrieve documents?

```javascript
// Find all
db.students.find();

// Find one
db.students.findOne({
  email: "chirag@example.com"
});

// Find by department
db.students.find({
  department: "CSE"
});
```

#### Q9.10. How do you update a document?

Update one:

```javascript
db.students.updateOne(
  { email: "chirag@example.com" },
  {
    $set: {
      cgpa: 8.5
    }
  }
);
```

Update multiple:

```javascript
db.students.updateMany(
  { department: "CSE" },
  {
    $set: {
      eligible: true
    }
  }
);
```

**Important MongoDB update operators**

| Operator    | Purpose                         |
| ----------- | ------------------------------- |
| `$set`      | Set a field                     |
| `$unset`    | Remove a field                  |
| `$inc`      | Increment a numeric value       |
| `$push`     | Add an element to an array      |
| `$addToSet` | Add only if not already present |
| `$pull`     | Remove matching array elements  |
| `$rename`   | Rename a field                  |

Example:

```javascript
db.students.updateOne(
  { email: "chirag@example.com" },
  {
    $inc: { cgpa: 0.1 },
    $push: { skills: "Docker" }
  }
);
```

#### Q9.11. How do you delete documents?

```javascript
// Delete one
db.students.deleteOne({
  email: "chirag@example.com"
});

// Delete many
db.students.deleteMany({
  department: "IT"
});
```

**Be careful:** `db.students.deleteMany({})` deletes every document in the collection.

#### Q9.12. Difference between `replaceOne()` and `updateOne()`?

- `updateOne()` modifies selected fields using update operators.
- `replaceOne()` replaces the document's existing contents with a new document, while preserving its `_id` if the replacement does not specify a different one.

```javascript
db.students.replaceOne(
  { email: "rahul@example.com" },
  {
    name: "Rahul Patel",
    email: "rahul@example.com",
    department: "IT"
  }
);
```

Fields not included in the replacement are removed.

<a id="phase-9-section-5"></a>

### Filtering, sorting and pagination

#### Q9.13. How do you filter MongoDB documents?

Find students with CGPA greater than 8:

```javascript
db.students.find({
  cgpa: { $gt: 8 }
});
```

Common comparison operators:

| Operator | Meaning                              |
| -------- | ------------------------------------ |
| `$eq`    | Equal                                |
| `$ne`    | Not equal                            |
| `$gt`    | Greater than                         |
| `$gte`   | Greater than or equal                |
| `$lt`    | Less than                            |
| `$lte`   | Less than or equal                   |
| `$in`    | Matches any value in an array        |
| `$nin`   | Does not match any value in an array |

Examples:

```javascript
// CGPA between 7 and 9
db.students.find({
  cgpa: { $gte: 7, $lte: 9 }
});

// CSE or IT
db.students.find({
  department: { $in: ["CSE", "IT"] }
});
```

#### Q9.14. What are MongoDB query logical operators?

MongoDB supports `$and`, `$or`, `$not`, and `$nor`.

```javascript
db.students.find({
  $and: [
    { department: "CSE" },
    { cgpa: { $gte: 8 } }
  ]
});
```

Another example:

```javascript
db.students.find({
  $or: [
    { department: "CSE" },
    { cgpa: { $gte: 9 } }
  ]
});
```

#### Q9.15. How do you sort and limit results?

```javascript
db.students.find()
  .sort({ cgpa: -1 })
  .limit(5);
```

- `1`: ascending
- `-1`: descending

Skip records:

```javascript
db.students.find()
  .sort({ _id: 1 })
  .skip(10)
  .limit(10);
```

This retrieves the second page of 10 records. For large datasets, repeated high `skip()` values can become expensive; cursor-based pagination is worth considering.

#### Q9.16. How do you select particular fields?

MongoDB calls this **projection**.

```javascript
db.students.find(
  { department: "CSE" },
  {
    name: 1,
    email: 1,
    cgpa: 1,
    _id: 0
  }
);
```

- `1`: include field
- `0`: exclude field

You generally cannot mix inclusion and exclusion projections, except for `_id`.

<a id="phase-9-section-6"></a>

### Embedded documents vs references

This is one of the most important MongoDB design decisions.

#### Q9.17. What is an embedded document?

An embedded document stores related information inside the same parent document.

```javascript
{
  _id: ObjectId("..."),
  name: "Chirag",
  email: "chirag@example.com",
  education: {
    degree: "B.E.",
    university: "MSU",
    graduationYear: 2027
  },
  skills: [
    "Python",
    "JavaScript",
    "PostgreSQL"
  ]
}
```

**Advantages**

- Related data can be retrieved in one query.
- Natural representation of nested structures.
- Atomic updates to a single document.
- Fewer cross-collection queries.

**Disadvantages**

- Documents can become large.
- Data duplication can occur.
- Updating duplicated data becomes harder.
- Arrays that grow indefinitely can cause design problems.

#### Q9.18. What is a reference in MongoDB?

A reference stores the `_id` of another document.

`students` collection:

```javascript
{
  _id: ObjectId("student123"),
  name: "Chirag"
}
```

`applications` collection:

```javascript
{
  _id: ObjectId("application123"),
  studentId: ObjectId("student123"),
  driveId: ObjectId("drive123"),
  status: "APPLIED"
}
```

The application document points to a student and a drive without embedding their entire records.

**Advantages of references**

- Avoids excessive duplication.
- Related records can be managed independently.
- Suitable for many-to-many relationships.
- Better when related data is large or independently updated.

**Disadvantages**

- May require additional queries or aggregation.
- MongoDB does not automatically enforce ordinary references as foreign keys.
- Application code must manage referential integrity.

#### Q9.19. When should you embed and when should you reference?

| Situation                                            | Likely choice     |
| ---------------------------------------------------- | ----------------- |
| One profile has a small address object               | Embed             |
| A student has a few fixed education entries          | Often embed       |
| Students apply to many drives                        | Reference         |
| A company has many independently managed drives      | Reference         |
| A document has small, bounded nested settings        | Embed             |
| A related collection grows without a practical limit | Usually reference |

**Interview answer:** Embed data when it is bounded, belongs to the parent, and is commonly read together. Reference data when it is independently managed, shared by multiple records, or can grow significantly.

<a id="phase-9-section-7"></a>

### MongoDB aggregation pipeline

#### Q9.20. What is an aggregation pipeline?

An aggregation pipeline processes documents through a sequence of stages. Each stage receives documents, performs an operation, and passes results to the next stage.

Common stages:

| Stage      | Purpose                        |
| ---------- | ------------------------------ |
| `$match`   | Filter documents               |
| `$group`   | Group documents                |
| `$project` | Select or calculate fields     |
| `$sort`    | Sort results                   |
| `$limit`   | Limit results                  |
| `$skip`    | Skip results                   |
| `$unwind`  | Expand an array into documents |
| `$lookup`  | Join another collection        |
| `$count`   | Count documents                |

#### Q9.21. How do you count students by department?

```javascript
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      totalStudents: { $sum: 1 }
    }
  }
]);
```

Conceptual result:

```text
[
  { _id: "CSE", totalStudents: 2 },
  { _id: "IT", totalStudents: 1 }
]
```

#### Q9.22. How do you filter and group students?

Find the average CGPA of each department, considering students with CGPA above 7:

```javascript
db.students.aggregate([
  {
    $match: {
      cgpa: { $gt: 7 }
    }
  },
  {
    $group: {
      _id: "$department",
      averageCGPA: { $avg: "$cgpa" },
      totalStudents: { $sum: 1 }
    }
  },
  {
    $sort: {
      averageCGPA: -1
    }
  }
]);
```

This is conceptually similar to SQL:

```sql
SELECT
    department,
    AVG(cgpa),
    COUNT(*)
FROM students
WHERE cgpa > 7
GROUP BY department
ORDER BY AVG(cgpa) DESC;
```

#### Q9.23. What does `$unwind` do?

Suppose a document contains:

```javascript
{
  name: "Chirag",
  skills: ["Python", "Docker", "SQL"]
}
```

Run:

```javascript
db.students.aggregate([
  {
    $unwind: "$skills"
  }
]);
```

Conceptual output:

```javascript
{ name: "Chirag", skills: "Python" }
{ name: "Chirag", skills: "Docker" }
{ name: "Chirag", skills: "SQL" }
```

`$unwind` deconstructs an array field and outputs one document for each array element.

#### Q9.24. What is `$lookup`?

`$lookup` performs a left outer join between collections.

Imagine a `students` collection:

```javascript
{
  _id: ObjectId("student123"),
  name: "Chirag"
}
```

And an `applications` collection:

```javascript
{
  studentId: ObjectId("student123"),
  driveId: ObjectId("drive123"),
  status: "APPLIED"
}
```

Query:

```javascript
db.students.aggregate([
  {
    $lookup: {
      from: "applications",
      localField: "_id",
      foreignField: "studentId",
      as: "applications"
    }
  }
]);
```

The result contains student documents with an additional `applications` array.

Important: MongoDB supports joins. The fact that it is NoSQL does not mean it cannot relate data.

<a id="phase-9-section-8"></a>

### MongoDB indexes and optimization

#### Q9.25. What is an index in MongoDB?

An index is a data structure that helps MongoDB find matching documents without examining every document.

Create an index:

```javascript
db.students.createIndex({
  email: 1
});
```

Queries filtering on email may benefit:

```javascript
db.students.find({
  email: "chirag@example.com"
});
```

#### Q9.26. What is a unique index?

A unique index prevents duplicate indexed values.

```javascript
db.students.createIndex(
  { email: 1 },
  { unique: true }
);
```

This helps enforce unique emails. If duplicate values already exist, MongoDB cannot create the unique index until those duplicates are resolved.

#### Q9.27. What is a compound index?

A compound index includes multiple fields.

```javascript
db.applications.createIndex({
  studentId: 1,
  status: 1
});
```

This is useful for queries filtering by student and status.

MongoDB compound indexes follow the **field-prefix principle**. The field order matters.

For example, an index on `{ studentId: 1, status: 1 }` can support queries using `studentId` alone or both fields, but it is not generally a substitute for an index beginning with `status`.

#### Q9.28. Difference between `find()` and `aggregate()`?

| `find()`                          | `aggregate()`                                  |
| --------------------------------- | ---------------------------------------------- |
| Retrieves matching documents      | Processes documents through stages             |
| Good for CRUD-style queries       | Good for calculations and transformations      |
| Supports filtering and projection | Supports grouping, joining, unwinding and more |
| Usually simpler                   | More expressive for complex analysis           |

#### Q9.29. How do you inspect a MongoDB query plan?

Use:

```javascript
db.students.find({
  email: "chirag@example.com"
}).explain("executionStats");
```

Look for:

- `COLLSCAN`: collection scan
- `IXSCAN`: index scan
- `nReturned`: number of documents returned
- `totalDocsExamined`: documents examined
- `totalKeysExamined`: index keys examined

A `COLLSCAN` is not automatically a problem. It can be appropriate for small collections or queries returning many documents.

<a id="phase-9-section-9"></a>

### MongoDB transactions and consistency

#### Q9.30. Does MongoDB support ACID transactions?

Yes. MongoDB supports atomic operations on individual documents and multi-document transactions.

Single-document atomicity is an important design feature.

For example:

```javascript
db.students.updateOne(
  { _id: ObjectId("...") },
  {
    $set: {
      "education.university": "MSU"
    }
  }
);
```

The update to that document is atomic.

If an operation needs to modify multiple documents or collections as one unit, you can use a multi-document transaction.

#### Q9.31. What is a replica set?

A replica set is a group of MongoDB servers that maintain the same dataset.

Typical roles:

- **Primary:** accepts writes.
- **Secondary:** replicates data from the primary.
- **Other eligible members:** may participate in elections and availability.

Benefits:

- High availability.
- Automatic primary election in suitable failure scenarios.
- Data redundancy.
- Read scaling in appropriate workloads.

#### Q9.32. What is sharding?

Sharding distributes data across multiple machines.

MongoDB sharding involves:

- **Shards:** store portions of the dataset.
- **Config servers:** store cluster metadata.
- **mongos:** routes application queries to appropriate shards.

Sharding helps scale data and workload across machines, but introduces operational and data-model complexity.

#### Q9.33. Replication vs sharding?

| Replication                 | Sharding                                  |
| --------------------------- | ----------------------------------------- |
| Copies data across members  | Splits data across shards                 |
| Improves availability       | Enables horizontal data distribution      |
| Has primary/secondary roles | Uses shard routing and distribution       |
| Can support read scaling    | Can support capacity and workload scaling |

<a id="phase-9-section-10"></a>

### Mongoose ODM

#### Q9.34. What is Mongoose?

Mongoose is an **Object Data Modeling (ODM)** library for Node.js and MongoDB.

It provides:

- Schemas
- Models
- Validation
- Middleware/hooks
- Query APIs
- Population of references

Compare:

- Prisma: ORM commonly used with relational databases such as PostgreSQL.
- Mongoose: ODM designed for MongoDB.

##### 10.1 Install Mongoose

```bash
npm install mongoose
```

Create a model at `models/Student.js`:

```javascript
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    department: {
      type: String,
      required: true
    },

    cgpa: {
      type: Number,
      min: 0,
      max: 10
    },

    skills: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", studentSchema);
```

#### Q9.35. What is a Mongoose schema?

A schema defines the expected structure, data types, and validation rules for documents managed by a Mongoose model.

```javascript
const studentSchema = new mongoose.Schema({
  name: String,
  email: String
});
```

Mongoose schemas do not mean MongoDB has become a relational database. MongoDB remains document-oriented.

##### 10.2 Connect to MongoDB

`config/database.js`:

```javascript
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log("MongoDB connected");
}

module.exports = connectDB;
```

`.env`:

```dotenv
MONGODB_URI=mongodb://localhost:27017/recruitment
```

For an Atlas connection, use the connection string provided by your Atlas cluster.

##### 10.3 Mongoose CRUD

Create:

```javascript
const student = await Student.create({
  name: "Chirag",
  email: "chirag@example.com",
  department: "CSE",
  cgpa: 8.2
});
```

Read:

```javascript
const students = await Student.find({
  department: "CSE"
});
```

Update:

```javascript
const student = await Student.findByIdAndUpdate(
  id,
  { cgpa: 8.5 },
  { new: true, runValidators: true }
);
```

Delete:

```javascript
const student = await Student.findByIdAndDelete(id);
```

<a id="phase-9-section-11"></a>

### Redis fundamentals

#### Q9.36. What is Redis?

Redis is an in-memory data store that supports multiple data structures.

It is commonly used for:

- Caching
- Session storage
- Rate limiting
- Real-time leaderboards
- Temporary verification codes
- Pub/Sub messaging
- Queues and streams
- Distributed coordination

#### Q9.37. Why is Redis fast?

Redis keeps its working dataset in memory and uses efficient data structures and command execution.

Compared with a database query that may involve storage access, a Redis lookup can often be served directly from memory.

However, Redis is not automatically a replacement for PostgreSQL or MongoDB.

#### Q9.38. Redis vs PostgreSQL vs MongoDB

| Feature       | PostgreSQL                  | MongoDB                    | Redis                        |
| ------------- | --------------------------- | -------------------------- | ---------------------------- |
| Main role     | Relational database         | Document database          | In-memory data store         |
| Data model    | Tables                      | Documents                  | Keys and data structures     |
| Typical use   | Durable application records | Flexible documents         | Cache, sessions, counters    |
| Querying      | SQL                         | MongoDB query language     | Commands and data structures |
| Persistence   | Durable database storage    | Durable database storage   | Configurable persistence     |
| Relationships | Foreign keys and joins      | References and aggregation | Usually application-managed  |

A common real-world architecture:

- PostgreSQL stores students and applications.
- MongoDB stores flexible resume documents, if justified.
- Redis caches frequently requested student profiles or stores temporary session data.

<a id="phase-9-section-12"></a>

### Redis architecture and data structures

#### Q9.39. What is a Redis key-value pair?

Redis stores values under keys.

Example:

```text
Key: student:1:name
Value: Chirag
```

A basic Redis command:

```redis
SET student:1:name "Chirag"
GET student:1:name
```

Expected result:

```text
"Chirag"
```

#### Q9.40. What are Redis data structures?

Redis supports several important data structures:

**1. Strings**

Store text, numbers, serialized data, and counters.

```redis
SET user:1:name Chirag
```

**2. Lists**

Ordered collections of strings.

```redis
LPUSH jobs job1
```

**3. Sets**

Unordered collections of unique members.

```redis
SADD skills Python Java
```

**4. Sorted sets**

Unique members associated with scores. Useful for leaderboards.

**5. Hashes**

Field-value mappings, useful for representing objects.

```redis
HSET user:1 name Chirag age 21
```

Other important Redis capabilities include bitmaps, HyperLogLog, Streams, and geospatial indexes.

#### Q9.41. How do Redis commands work?

Run Redis locally through Docker:

```bash
docker run -d \
  --name redis \
  -p 6379:6379 \
  redis:8
```

Open the CLI:

```bash
docker exec -it redis redis-cli
```

Check the connection:

```redis
PING
```

Expected:

```text
PONG
```

**String commands**

```redis
SET name "Chirag"
GET name
```

**Counter commands**

```redis
SET page_views 0
INCR page_views
INCR page_views
GET page_views
```

Result:

```text
"2"
```

**Expiration commands**

```redis
SET otp:123456 "verified" EX 60
TTL otp:123456
```

The `EX 60` sets an expiration of 60 seconds.

Useful commands:

| Command  | Purpose                |
| -------- | ---------------------- |
| `SET`    | Store a value          |
| `GET`    | Retrieve a value       |
| `DEL`    | Delete a key           |
| `EXISTS` | Check if a key exists  |
| `EXPIRE` | Set expiration         |
| `TTL`    | Get remaining lifetime |
| `INCR`   | Increment a number     |
| `DECR`   | Decrement a number     |

#### Q9.42. What is TTL?

TTL stands for **Time To Live**.

It determines how long a key remains available before Redis automatically expires it.

```redis
SET session:101 "active" EX 3600
```

The session expires after one hour.

TTL is especially useful for:

- OTPs
- Temporary verification tokens
- Cache entries
- Short-lived sessions
- Rate-limit counters

#### Q9.43. How do Redis hashes work?

```redis
HSET student:1 name Chirag department CSE cgpa 8.2
```

Retrieve one field:

```redis
HGET student:1 name
```

Retrieve all fields:

```redis
HGETALL student:1
```

Update one field:

```redis
HSET student:1 cgpa 8.5
```

#### Q9.44. What are Redis lists and sets?

**List:**

```redis
LPUSH notifications:1 "New application received"
LPUSH notifications:1 "Interview scheduled"

LRANGE notifications:1 0 -1
```

**Set:**

```redis
SADD student:1:skills Python JavaScript SQL
SMEMBERS student:1:skills
```

A set removes duplicates automatically.

#### Q9.45. What are Redis sorted sets?

Sorted sets maintain unique members ordered by score.

```redis
ZADD leaderboard 95 Chirag
ZADD leaderboard 90 Rahul
ZADD leaderboard 98 Priya
```

Retrieve highest scores:

```redis
ZREVRANGE leaderboard 0 2 WITHSCORES
```

This can be used for leaderboards, ranking systems, and prioritization.

#### Q9.46. What is Redis Pub/Sub?

Pub/Sub stands for **Publish/Subscribe**.

A publisher sends a message to a channel, and subscribers listening to that channel receive it.

Subscriber:

```redis
SUBSCRIBE notifications
```

Publisher:

```redis
PUBLISH notifications "New placement drive posted"
```

Pub/Sub is useful for real-time notifications, but ordinary Pub/Sub does not provide durable message storage or guaranteed delivery to disconnected subscribers. Redis Streams or a dedicated message broker may be more appropriate when persistence and consumer tracking are needed.

<a id="phase-9-section-13"></a>

### Caching fundamentals

#### Q9.47. What is caching?

Caching means temporarily storing frequently accessed data so that future requests can retrieve it faster.

Imagine a recruitment platform has 10,000 users requesting the same list of active placement drives.

Without caching:

```text
Client → Express → PostgreSQL → Result → Client
```

Every request queries the database.

With Redis caching:

```text
Client → Express → Redis → Cached result → Client
```

If the cache contains the result, the database query can be avoided.

#### Q9.48. What is a cache hit and cache miss?

- **Cache hit:** Requested data exists in the cache.
- **Cache miss:** Requested data is not in the cache, so the application must retrieve it from the original data source.

Example:

```text
Request 1:
Redis → MISS
PostgreSQL → Fetch data
Redis → Store data

Request 2:
Redis → HIT
Return cached data
```

#### Q9.49. What is cache-aside?

Cache-aside, also called lazy loading, is a commonly used caching strategy.

Steps:

1. Check Redis.
2. If found, return cached data.
3. If missing, query the database.
4. Store the result in Redis.
5. Return the result.

```javascript
async function getStudent(id) {
  const cached = await redis.get(`student:${id}`);

  if (cached) {
    return JSON.parse(cached);
  }

  const student = await database.getStudent(id);

  if (!student) {
    return null;
  }

  await redis.set(
    `student:${id}`,
    JSON.stringify(student),
    "EX",
    300
  );

  return student;
}
```

The example uses a common Redis client calling style; the exact API differs between Redis client versions.

#### Q9.50. What are the common caching strategies?

| Strategy      | How it works                                               |
| ------------- | ---------------------------------------------------------- |
| Cache-aside   | Application reads cache, then database on miss             |
| Read-through  | Cache layer loads missing data from the data source        |
| Write-through | Writes go to cache and data source together                |
| Write-behind  | Writes are initially buffered in cache and persisted later |
| Refresh-ahead | Cache refreshes data before expiration                     |

For many ordinary Express applications, cache-aside is a practical starting point.

#### Q9.51. What is cache invalidation?

Cache invalidation means removing or updating cached data when the original data changes.

Imagine Redis contains:

```text
student:1 → { name: "Chirag", cgpa: 8.2 }
```

PostgreSQL gets updated:

```text
cgpa = 8.5
```

But Redis still contains `8.2`. This is stale data.

One solution is deleting the cache after a successful database update:

```javascript
await prisma.student.update({
  where: { id: 1 },
  data: { cgpa: 8.5 }
});

await redis.del("student:1");
```

The next request reloads fresh data.

Cache invalidation becomes harder when multiple services update the same data, when updates happen asynchronously, or when one database record appears in multiple cache keys.

#### Q9.52. What is cache stampede?

A cache stampede happens when a popular cache entry expires and many simultaneous requests all attempt to reload the same data from the database.

Possible solutions:

- Use a short refresh lock.
- Add TTL jitter.
- Refresh popular entries in the background.
- Use request coalescing.
- Stagger refreshes.

#### Q9.53. Difference between cache and database?

| Cache                     | Database                                             |
| ------------------------- | ---------------------------------------------------- |
| Optimized for fast access | Optimized for persistent data management             |
| Often temporary           | Usually durable                                      |
| Frequently stores copies  | Stores authoritative records                         |
| May evict entries         | Data retained according to database policies         |
| Often has TTL             | Usually has explicit retention and deletion policies |

**Interview answer:** PostgreSQL should remain the source of truth for student applications. Redis can store temporary or frequently accessed copies to improve performance.

<a id="phase-9-section-14"></a>

### Redis advanced backend use cases

##### 16.1 Rate limiting

#### Q9.54. What is rate limiting?

Rate limiting restricts how many requests a client can make within a specified period.

Example:

```text
Login endpoint:
Maximum 5 attempts in 1 minute
```

Why is this important?

- Reduces brute-force attacks.
- Prevents API abuse.
- Protects backend resources.
- Controls traffic spikes.

Redis is useful because multiple application instances can share the same counters.

**Implement rate limiting with Express**

Install:

```bash
npm install express-rate-limit rate-limit-redis
```

A Redis-backed limiter using compatible package versions can look like:

```javascript
const rateLimit = require("express-rate-limit");
const { RedisStore } = require("rate-limit-redis");
const { redis } = require("./config/redis");

const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,

  store: new RedisStore({
    sendCommand: (...args) => redis.sendCommand(args)
  }),

  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many login attempts"
  }
});

app.use("/api/auth/login", loginLimiter);
```

The exact configuration should match the versions of the installed packages. Also configure trusted proxy handling correctly when the app is behind a load balancer, or client IP identification may be wrong.

##### 16.2 Session storage

#### Q9.55. Why use Redis for sessions?

A session stores information about a user's authenticated state.

A session flow:

1. User logs in.
2. Server creates a session.
3. Session data is stored in Redis.
4. Browser receives a session cookie.
5. Browser sends the cookie with subsequent requests.
6. Server looks up the session in Redis.

Advantages:

- Fast lookups.
- Shared sessions across multiple application instances.
- TTL-based expiry.
- Centralized session invalidation.

Redis sessions are different from JWT authentication. JWTs are commonly verified using a signature and expiry, whereas a session-based approach typically requires looking up session state.

##### 16.3 Distributed locks

#### Q9.56. What is a distributed lock?

A distributed lock coordinates access to a shared resource across multiple processes or servers.

Example: Two backend instances should not process the same scheduled job simultaneously.

A basic Redis lock acquisition:

```redis
SET lock:job:101 unique-token NX EX 30
```

Meaning:

- `NX`: Only set if the key does not exist.
- `EX 30`: Expire after 30 seconds.
- `unique-token`: Unique ownership token generated by the client.

To release a lock, verify ownership before deleting it. Do not blindly issue `DEL`, because the lock might have expired and been acquired by another process.

A safe release uses a Lua script:

```lua
if redis.call("GET", KEYS[1]) == ARGV[1] then
    return redis.call("DEL", KEYS[1])
else
    return 0
end
```

This prevents one process from deleting another process's lock.

For critical distributed coordination, consider lease expiry, process pauses, fencing tokens, failure handling, and whether Redis is the right locking system.

##### 16.4 Redis Streams vs Pub/Sub

#### Q9.57. What is Redis Streams?

Redis Streams is a data structure designed for append-only event streams.

It supports:

- Persistent stream entries.
- Consumer groups.
- Message acknowledgements.
- Pending message tracking.
- Multiple consumers.

| Pub/Sub                                | Streams                                    |
| -------------------------------------- | ------------------------------------------ |
| Real-time message delivery             | Stored message entries                     |
| Disconnected subscribers miss messages | Consumers can process stored entries later |
| No acknowledgement tracking            | Consumer groups and acknowledgements       |
| Simple broadcasting                    | More durable processing workflows          |

Example:

```redis
XADD events * type application_created studentId 1
```

Read entries:

```redis
XRANGE events - +
```

For a recruitment platform, you could publish an application-created event and let a background worker process notifications or analytics.

<a id="phase-9-section-15"></a>

### Complete architecture: PostgreSQL + MongoDB + Redis

Now combine the three technologies.

Imagine a recruitment application:

| Component         | Responsibility                                          |
| ----------------- | ------------------------------------------------------- |
| React / Next.js   | User interface                                          |
| Express / Node.js | Backend APIs                                            |
| PostgreSQL        | Students, companies, drives, applications               |
| MongoDB           | Flexible resume or external document data, if justified |
| Redis             | Cache, sessions, rate limiting                          |
| Prisma            | PostgreSQL ORM                                          |
| Mongoose          | MongoDB ODM                                             |

##### Example request: Student profile

A user requests:

```http
GET /api/students/101
```

The request lifecycle:

1. Express receives the request.
2. Authentication middleware validates the user.
3. Authorization middleware checks permissions.
4. Service checks Redis for `student:101`.
5. If cached, the result is returned.
6. If not cached, Prisma queries PostgreSQL.
7. The result is stored in Redis with a TTL.
8. Express returns JSON.

##### Example request: Resume upload

1. Frontend uploads a resume.
2. Backend validates the file.
3. File is stored in object storage, such as S3.
4. Metadata is saved in PostgreSQL.
5. Extracted or flexible document data can be stored in MongoDB if appropriate for the application's design.
6. An event may be added to Redis Streams or another message queue.
7. A worker performs resume parsing and updates the application.

Notice that MongoDB is not mandatory here. PostgreSQL JSONB, object storage, or another document store could be more suitable depending on the requirements.

##### Example request: Company drive listing

1. Client requests active placement drives.
2. Express checks Redis for the relevant listing.
3. If cached, the result is returned.
4. If missing, PostgreSQL retrieves active drives.
5. The application caches the response.
6. When a drive changes, the relevant cache entries are invalidated.

##### Important architecture principle

PostgreSQL or MongoDB should own durable business data. Redis should not silently become the only place where important business records exist.

If you use Redis for a durable queue or stream, configure persistence, replication, delivery handling, and recovery deliberately.

<a id="phase-9-section-16"></a>

### Advanced interview Q&A

#### Q9.58. Is MongoDB schema-less?

MongoDB is schema-flexible, not necessarily schema-less. Different documents can have different fields, but applications can enforce structure through validation, Mongoose schemas, and MongoDB collection validators.

#### Q9.59. Does MongoDB support JOIN?

Yes. MongoDB supports joins through aggregation's `$lookup` stage. However, the data model often favors embedding or referencing based on access patterns.


#### Q9.60. Difference between MongoDB and Mongoose?

MongoDB is the database. Mongoose is a Node.js ODM that provides schemas, validation, models, middleware, and query APIs to work with MongoDB.

#### Q9.61. Difference between Mongoose and Prisma?

Mongoose is designed specifically for MongoDB and document modeling. Prisma is an ORM toolkit commonly used with relational databases such as PostgreSQL and MySQL, with support for additional providers depending on its version.

#### Q9.62. Is Redis a database or a cache?

Redis is an in-memory data store that can be used as a database, cache, message broker, and coordination system. Its persistence options determine how data survives restarts, so it should not be treated as automatically ephemeral or automatically durable.

#### Q9.63. What happens when Redis runs out of memory?

Redis follows its configured memory policy. Depending on the policy, it may evict existing keys, reject writes, or behave differently for non-evictable data. Monitor memory usage and choose an eviction policy according to the workload.

#### Q9.64. What is an eviction policy?

It defines how Redis responds when its configured memory limit is reached.

Examples include:

- `noeviction`: Reject writes that require additional memory.
- `allkeys-lru`: Evict least recently used keys.
- `allkeys-lfu`: Evict least frequently used keys.
- `volatile-lru`: Evict least recently used keys that have an expiry set.
- `volatile-ttl`: Prefer keys with shorter remaining TTLs.

The correct policy depends on whether Redis contains disposable cache entries, sessions, or other important data.

#### Q9.65. Difference between LRU and LFU?

- **LRU:** Least Recently Used; considers how recently a key was accessed.
- **LFU:** Least Frequently Used; considers how frequently a key is accessed.

A frequently used key might be a good LFU candidate to retain even if it has not been accessed in the last few moments.

#### Q9.66. What is cache consistency?

Cache consistency concerns whether cached values accurately reflect the underlying source of truth.

A cache may temporarily contain stale information if database updates and cache invalidation are not coordinated.

Solutions include:

- TTL.
- Cache invalidation.
- Versioned keys.
- Write-through strategies.
- Event-driven invalidation.
- Carefully designed refresh mechanisms.

#### Q9.67. What is a cache avalanche?

A cache avalanche happens when many cache entries expire around the same time, sending a sudden wave of requests to the database.

A common solution is adding random TTL jitter.

```javascript
const ttl = 300 + Math.floor(Math.random() * 60);
```

This spreads expiration times between 300 and 359 seconds.

#### Q9.68. What is a cache penetration problem?

Cache penetration occurs when requests repeatedly ask for data that does not exist, causing repeated database lookups because nothing is cached.

Possible solutions:

- Cache negative results for a short period.
- Validate request identifiers.
- Use Bloom filters for suitable large-scale workloads.
- Apply rate limiting.

Be careful when caching negative results: a record might be created shortly afterward, so negative cache entries should have a short lifetime or be invalidated.


#### Practical assignments

The source roadmap defines 12 practical exercises. Theory coverage does not mean implementation has been verified.

**Phase 9 practical tracker**


1\. Run MongoDB locally and connect with mongosh

2\. Perform MongoDB CRUD: insert, find, update and delete

3\. Practice comparison operators, logical operators, projection and pagination

4\. Design document relationships: embedded profile and referenced applications

5\. Write aggregation pipelines using $match, $group, $project, $unwind and $lookup

6\. Create unique and compound indexes and inspect execution plans

7\. Build and validate a Mongoose Student model

8\. Build Express + MongoDB CRUD endpoints with error handling

9\. Run Redis locally and practice strings, hashes, lists and sets

10\. Implement Redis caching with TTL and invalidation

11\. Implement Redis-backed rate limiting

12\. Design the combined PostgreSQL, MongoDB and Redis architecture

---

<a id="phase-10"></a>

## Phase 10 — React.js and Next.js

**Objective:** Build typed, accessible interfaces after JavaScript and TypeScript.

**Sections:** [React Fundamentals and Architecture](#phase-10-section-1) · [React Setup and Project Structure](#phase-10-section-2) · [JSX and React Components](#phase-10-section-3) · [Virtual DOM and Reconciliation](#phase-10-section-4) · [State Management with `useState`](#phase-10-section-5) · [Conditional Rendering, Lists and Events](#phase-10-section-6) · [React Hooks](#phase-10-section-7) · [Context API and State Management](#phase-10-section-8) · [Custom Hooks](#phase-10-section-9) · [React Router](#phase-10-section-10) · [API Integration and Full-Stack Communication](#phase-10-section-11) · [Performance Optimization](#phase-10-section-12) · [React with TypeScript](#phase-10-section-13) · [Complete Practical Project: Student Management Dashboard](#phase-10-section-14) · [Advanced React Interview Questions](#phase-10-section-15) · [React and Next.js: Important Distinctions](#phase-10-section-16) · [Next.js Application Structure and Data Boundaries](#phase-10-section-17) · [JavaScript and TypeScript in Real Projects](#phase-10-section-18)

<a id="phase-10-section-1"></a>

### React Fundamentals and Architecture

#### Q10.1. What is React?

**Answer:**

React is an open-source JavaScript library used to build user interfaces, particularly component-based interfaces.

React allows developers to divide a user interface into reusable components.

For example, a student management application might contain:

```text
Application
│
├── Navbar
│
├── Sidebar
│
├── Dashboard
│   ├── StudentStatistics
│   ├── RecentStudents
│   └── RecentActivities
│
└── Footer
```

Each section can be developed as an independent component.

Important characteristics:

- Component-based architecture.
- Declarative UI development.
- State-driven rendering.
- Reusable components.
- One-way data flow by default.
- Reconciliation.
- Rich ecosystem of libraries.

**Interview insight:** React is primarily concerned with the view layer. Routing, data fetching and application-wide state management can be handled using additional libraries or frameworks.

#### Q10.2. Why was React introduced? What problems does it solve?

**Answer:**

Consider a traditional JavaScript application.

You have a dashboard displaying:

- Total students.
- Total companies.
- Pending applications.
- Recent notifications.

When an application is submitted, you may need to update multiple parts of the UI.

With traditional DOM manipulation, you might manually find and update each relevant element.

```javascript
document.querySelector("#total-applications")
  .textContent = 50;

document.querySelector("#pending-applications")
  .textContent = 12;
```

As an application grows, manually managing UI updates becomes difficult.

React provides a declarative approach:

```jsx
function Dashboard() {
  const [applications, setApplications] = React.useState(50);

  return (
    <div>
      <h2>Total Applications: {applications}</h2>

      <button onClick={() => setApplications(applications + 1)}>
        Add Application
      </button>
    </div>
  );
}
```

You update the state, and React updates the UI to reflect that state.

Core principle:

> The UI is a representation of application state.

**Interview insight:** React reduces the need for manually synchronizing individual DOM elements with application data.

#### Q10.3. Is React a framework or a library?

**Answer:**

React is primarily a UI library.

It focuses on building user interfaces. It does not prescribe a complete application architecture.

For example, a React application may use:

- React for UI components.
- React Router for client-side routing.
- TanStack Query for server-state management.
- Redux Toolkit for application-wide state.
- Vite for development and bundling.

Next.js provides a more integrated application framework built on React.

#### Q10.4. What is component-based architecture?

**Answer:**

Component-based architecture is a development approach in which an application is divided into smaller, independent and reusable UI components.

For example:

```text
Dashboard
│
├── Navbar
├── Sidebar
├── Statistics
│   ├── StudentCard
│   ├── CompanyCard
│   └── ApplicationCard
│
├── RecentApplications
└── Footer
```

Each component has its own responsibility.

Benefits:

1. Reusability.
2. Easier maintenance.
3. Separation of concerns.
4. Easier testing.
5. Better collaboration among developers.

**Practical example:** In UniNest AI, student information cards, application status indicators and company listings can be independent components rather than one large dashboard component.

#### Q10.5. What is declarative programming in React?

**Answer:**

Declarative programming means describing what the UI should look like rather than manually specifying every DOM operation required to produce it.

Traditional JavaScript:

```javascript
const heading = document.createElement("h1");

heading.textContent = "Hello Chirag";

document.body.appendChild(heading);
```

React:

```jsx
function App() {
  return <h1>Hello Chirag</h1>;
}
```

React handles the process of updating the DOM when the rendered output needs to change.

**Interview insight:** React follows a declarative, state-driven UI approach.

#### Q10.6. What is imperative programming, and how is it different from declarative programming?

**Answer:**

Imperative programming describes how to perform an operation step by step.

Declarative programming describes the desired result.

| Imperative                           | Declarative                     |
| ------------------------------------ | ------------------------------- |
| Describes how                        | Describes what                  |
| Explicit DOM manipulation            | UI described through components |
| Developer manages individual updates | React coordinates UI updates    |
| More manual synchronization          | State-driven rendering          |

#### Q10.7. What is one-way data flow in React?

**Answer:**

One-way data flow means data generally flows from parent components to child components through props.

Example:

```jsx
function Parent() {
  const name = "Chirag";

  return <Child name={name} />;
}

function Child({ name }) {
  return <h1>Hello {name}</h1>;
}
```

Here:

1. Parent owns the data.
2. Parent passes data through props.
3. Child receives and displays the data.
4. Child does not directly modify the parent's variable.

A child can request a parent to update state by invoking a callback passed through props.

**Interview insight:** One-way data flow makes application behaviour easier to trace and debug.

<a id="phase-10-section-2"></a>

### React Setup and Project Structure

*Correction to the question numbering in the opening section: the source curriculum's Q6 and Q7 cover project setup and project structure. One-way data flow is an important React characteristic, not Q7 in the source.*

#### Q10.8. How do you create a React application?

**Answer:**

A commonly used setup is React with Vite. Vite provides a development server and production build tooling.

First, check Node.js and npm:

```bash
node -v
npm -v
```

Create a project:

```bash
npm create vite@latest student-dashboard -- --template react

cd student-dashboard

npm install

npm run dev
```

Vite usually starts at:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

**Interview insight:** Vite is a build tool and development server, not a React framework.

#### Q10.9. What is the typical React project structure?

**Answer:**

```text
student-dashboard/
│
├── public/
│   └── logo.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── StudentCard.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Students.jsx
│   │
│   ├── hooks/
│   │   └── useStudents.js
│   │
│   ├── services/
│   │   └── studentService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

Responsibilities:

| Folder     | Responsibility               |
| ---------- | ---------------------------- |
| components | Reusable UI components       |
| pages      | Route-level screens          |
| hooks      | Reusable custom Hooks        |
| services   | API communication            |
| assets     | Images, icons and fonts      |
| public     | Static files served directly |

This is one possible structure, not a mandatory React convention.

#### Q10.10. What happens when a React application starts?

**Answer:**

The entry point is generally `main.jsx`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Execution flow:

1. Browser loads `index.html`.
2. HTML contains the root DOM element.
3. Vite loads `main.jsx`.
4. React imports the App component.
5. `createRoot()` creates a React root.
6. `root.render()` renders the application.
7. React manages subsequent UI updates.

The HTML generally contains:

```html
<div id="root"></div>
```

React renders the application inside this element.

<a id="phase-10-section-3"></a>

### JSX and React Components

#### Q10.11. What is JSX?

**Answer:**

JSX stands for JavaScript XML.

It is a syntax extension that allows developers to write HTML-like markup inside JavaScript.

```jsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Welcome to my application.</p>
    </div>
  );
}
```

JSX is transformed into JavaScript instructions that React uses to create element descriptions.

#### Q10.12. What are the rules of JSX?

**Answer:**

There are five important rules.

**Rule 1: Return one parent element.**

Incorrect:

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Alternatively, use a Fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

**Rule 2: Close all elements.**

```jsx
<img src="/logo.png" alt="Logo" />
```

**Rule 3: Use **`className`** instead of **`class`**.**

```jsx
<div className="container">Hello</div>
```

**Rule 4: Use camelCase for most JSX event and property names.**

```html
<button onClick={handleClick}>Click</button>
```

**Rule 5: Put JavaScript expressions inside curly braces.**

```jsx
const name = "Chirag";

function App() {
  return <h1>Hello {name}</h1>;
}
```

#### Q10.13. What is the difference between a React element and a React component?

**Answer:**

A component is a function or another supported React component type that describes UI.

An element is a description of what React should render.

Component:

```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}
```

Element:

```javascript
const element = <Welcome />;
```

Think of a component as a reusable definition and an element as a description of its use in the UI.

#### Q10.14. What are functional components?

**Answer:**

Functional components are JavaScript functions that return React elements.

```jsx
function StudentCard() {
  return (
    <div>
      <h2>Chirag</h2>
      <p>Computer Science</p>
    </div>
  );
}
```

Use the component:

```jsx
function App() {
  return (
    <div>
      <StudentCard />
      <StudentCard />
    </div>
  );
}
```

Modern React development primarily uses functional components and Hooks.

#### Q10.15. What are props in React?

**Answer:**

Props are inputs passed from a parent component to a child component.

```jsx
function StudentCard({ name, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <StudentCard name="Chirag" course="CSE" />
      <StudentCard name="Amit" course="IT" />
    </>
  );
}
```

Important: Props are read-only from the component's perspective. A child should not directly modify the props it receives.

#### Q10.16. What is the difference between props and state?

**Answer:**

| Props                         | State                               |
| ----------------------------- | ----------------------------------- |
| Passed from parent            | Managed by component or state owner |
| Read-only                     | Updated through state setters       |
| Configures components         | Represents changing data            |
| Supports parent-to-child flow | Drives UI updates                   |

Example:

```jsx
function Counter({ title }) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Here, `title` is a prop and `count` is state.

<a id="phase-10-section-4"></a>

### Virtual DOM and Reconciliation

#### Q10.17. What is the Virtual DOM?

**Answer:**

The Virtual DOM is a common informal name for the in-memory representation of the UI that React works with.

React elements describe what the UI should look like.

When state or props change, React calculates the next UI representation and reconciles it with the previous one.

It then commits the necessary changes to the actual DOM.

Simplified flow:

1. Component renders.
2. React receives the new element description.
3. React reconciles it with the previous description.
4. React determines necessary updates.
5. React commits relevant changes to the DOM.

Important: React does not necessarily recreate the entire real DOM every time a component renders.

#### Q10.18. What is React reconciliation?

**Answer:**

Reconciliation is React's process for comparing the previous rendered element tree with the new one to determine how the UI should be updated.

React uses element types, positions and keys to determine whether to preserve or replace component state and DOM.

For example:

```jsx
function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
}
```

If the component type changes from `Login` to `Dashboard`, React treats them as different component identities.

#### Q10.19. What are React keys, and why are they important?

**Answer:**

Keys help React identify individual elements in a list across renders.

Incorrect:

```javascript
{students.map(student => (
  <StudentCard name={student.name} />
))}
```

Correct:

```javascript
{students.map(student => (
  <StudentCard
    key={student.id}
    name={student.name}
  />
))}
```

Why keys matter:

- Identify elements between renders.
- Help preserve component identity.
- Help React correctly insert, remove and reorder elements.
- Avoid incorrect state association in lists.

**Why avoid array indexes as keys?**

Consider:

```text
Index 0: Amit
Index 1: Chirag
Index 2: Raj
```

If Amit is deleted, the indexes shift. React may associate previous component state with the wrong student.

Prefer stable IDs.

Use an index only when the list is static and will not be reordered, inserted into or deleted from.

#### Q10.20. Does React update the entire page whenever state changes?

**Answer:**

No.

A state update schedules React to render the component again. React reconciles the new output and commits the required changes.

A render does not automatically mean the entire DOM is replaced.

Also remember:

- A component may render without its DOM output changing.
- A parent rendering may cause its children to render.
- Memoization can sometimes skip child rendering.
- Reconciliation and DOM commit are separate steps.

<a id="phase-10-section-5"></a>

### State Management with `useState`

#### Q10.21. What is state in React?

**Answer:**

State is data that a component remembers between renders.

When state changes through its setter, React schedules a new render.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
```

Here:

- `count` is the current state.
- `setCount` updates the state.
- `0` is the initial state.

#### Q10.22. Why shouldn't we directly modify state?

**Answer:**

Directly mutating state does not tell React that the state has changed.

Incorrect:

```javascript
user.age = 21;
```

Correct:

```javascript
setUser(previousUser => ({
  ...previousUser,
  age: 21
}));
```

For arrays:

Incorrect:

```javascript
students.push(newStudent);
```

Correct:

```javascript
setStudents(previousStudents => [
  ...previousStudents,
  newStudent
]);
```

The new array or object reference allows React to observe the state update.

#### Q10.23. What is functional state updating?

**Answer:**

Functional state updating passes a function to the state setter. That function receives the previous state.

```javascript
const [count, setCount] = useState(0);

function increment() {
  setCount(previous => previous + 1);
}
```

This is particularly useful when the next value depends on the previous value.

Consider:

```javascript
function incrementThreeTimes() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

It may increase by only one because all three calls use the same render's `count` value.

Correct:

```javascript
function incrementThreeTimes() {
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
}
```

Now the result increases by three.

#### Q10.24. What is state batching?

**Answer:**

React can group multiple state updates into one render to improve performance.

```javascript
function updateProfile() {
  setName("Chirag");
  setAge(21);
  setCity("Vadodara");
}
```

Instead of rendering separately for every update, React can batch them.

Modern React supports automatic batching in many situations, including updates originating from Promises and timers when using modern roots.

#### Q10.25. Can state be an object or array?

**Answer:**

Yes. State can contain any JavaScript value.

Object:

```javascript
const [user, setUser] = useState({
  name: "Chirag",
  age: 20,
  city: "Vadodara"
});

function updateAge() {
  setUser(previous => ({
    ...previous,
    age: 21
  }));
}
```

Array:

```javascript
const [students, setStudents] = useState([]);

function addStudent(student) {
  setStudents(previous => [...previous, student]);
}

function deleteStudent(id) {
  setStudents(previous =>
    previous.filter(student => student.id !== id)
  );
}
```

<a id="phase-10-section-6"></a>

### Conditional Rendering, Lists and Events

#### Q10.26. What is conditional rendering?

**Answer:**

Conditional rendering means displaying different UI based on a condition.

Using `if`:

```jsx
function Dashboard({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please log in.</h1>;
}
```

Using ternary:

```jsx
{isLoggedIn
  ? <h1>Welcome back!</h1>
  : <h1>Please log in.</h1>}
```

Using logical AND:

```jsx
{count > 0 && <p>You have {count} notifications.</p>}
```

Be careful with:

```jsx
{count && <p>Notifications</p>}
```

If `count` is `0`, React may render `0`.

Prefer:

```jsx
{count > 0 && <p>Notifications</p>}
```

#### Q10.27. How do you render lists in React?

**Answer:**

Use JavaScript array methods such as `map()`.

```jsx
function StudentList() {
  const students = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Chirag" },
    { id: 3, name: "Raj" }
  ];

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          {student.name}
        </li>
      ))}
    </ul>
  );
}
```

#### Q10.28. How does event handling work in React?

**Answer:**

React supports event props such as:

- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter`
- `onKeyDown`

Example:

```jsx
function Button() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

Do not invoke the handler while rendering.

Incorrect:

```html
<button onClick={handleClick()}>
  Click
</button>
```

Correct:

```html
<button onClick={handleClick}>
  Click
</button>
```

To pass arguments:

```html
<button onClick={() => deleteStudent(101)}>
  Delete
</button>
```

#### Q10.29. What is the React event object?

**Answer:**

Event handlers receive an event object containing information about the event.

```javascript
function SearchBox() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  );
}
```

React uses a normalized event interface. Modern React no longer uses the old Synthetic Event pooling behaviour.

#### Q10.30. What are controlled and uncontrolled components?

**Answer:**

A controlled input gets its value from React state.

```javascript
function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <input
      type="email"
      value={email}
      onChange={event => setEmail(event.target.value)}
    />
  );
}
```

An uncontrolled input manages its current value through the DOM.

```jsx
function LoginForm() {
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(emailRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" />

      <button type="submit">Submit</button>
    </form>
  );
}
```

| Controlled                  | Uncontrolled             |
| --------------------------- | ------------------------ |
| Value stored in React state | Value maintained by DOM  |
| Uses `value` and `onChange` | Often uses refs          |
| Easy real-time validation   | Useful for simpler forms |
| More explicit control       | Less state management    |

<a id="phase-10-section-7"></a>

### React Hooks

#### Q10.31. What are React Hooks?

**Answer:**

Hooks are functions that allow functional components to use React features such as state, context, refs and Effects.

Important Hooks:

| Hook          | Purpose                           |
| ------------- | --------------------------------- |
| `useState`    | Local state                       |
| `useEffect`   | Synchronize with external systems |
| `useRef`      | Persistent mutable reference      |
| `useMemo`     | Cache calculated values           |
| `useCallback` | Cache function definitions        |
| `useContext`  | Read context                      |
| `useReducer`  | Manage complex state transitions  |

#### Q10.32. What are the Rules of Hooks?

**Answer:**

There are two fundamental rules.

**Rule 1:** Call Hooks only at the top level of a React function component or custom Hook.

Incorrect:

```javascript
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
```

Correct:

```javascript
const [user, setUser] = useState(null);

if (isLoggedIn) {
  console.log(user);
}
```

**Rule 2:** Do not call Hooks from ordinary JavaScript functions or class components.

Correct locations:

- Function components.
- Custom Hooks.

These rules ensure React can maintain Hook state consistently across renders.

#### Q10.33. What is `useEffect()`?

Very important interview topic

**Answer:**

`useEffect()` allows a component to synchronize with external systems.

Examples:

- Fetching data.
- Subscribing to external events.
- Managing timers.
- Connecting to external services.
- Synchronizing with browser APIs.

Example:

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component effect executed");

    return () => {
      console.log("Cleanup executed");
    };
  }, []);

  return <h1>Hello React</h1>;
}
```

The function passed to `useEffect()` is called the Effect setup function.

The returned function is the cleanup function.

#### Q10.34. How does the dependency array work in `useEffect()`?

**Answer:**

There are three common patterns.

**1. No dependency array**

```javascript
useEffect(() => {
  console.log("Effect after every commit");
});
```

The Effect runs after every committed render.

**2. Empty dependency array**

```javascript
useEffect(() => {
  console.log("Effect after initial mount");
}, []);
```

The Effect runs after the initial mount.

**3. Dependency array with values**

```javascript
useEffect(() => {
  console.log("User changed");
}, [userId]);
```

The Effect runs after the initial mount and again when `userId` changes.

Important: In development, React Strict Mode may run an additional setup-and-cleanup cycle. Therefore, don't assume an Effect executes exactly once in every environment.

#### Q10.35. What is cleanup in `useEffect()`?

**Answer:**

Cleanup removes subscriptions or resources created by an Effect.

Example:

```jsx
function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h2>Timer Component</h2>;
}
```

When the component unmounts, React calls the cleanup function.

React also runs cleanup before re-running an Effect whose dependencies have changed.

Another example:

```javascript
useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

#### Q10.36. Is `useEffect()` the same as a component lifecycle method?

**Answer:**

Not exactly.

Class components use lifecycle methods such as:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

Function components use Effects to synchronize with external systems.

| Class lifecycle | Effect-related concept    |
| --------------- | ------------------------- |
| Mount           | Initial Effect setup      |
| Update          | Effect re-synchronization |
| Unmount         | Effect cleanup            |

An Effect is not simply a replacement for every lifecycle method. It is better understood as a synchronization mechanism.

#### Q10.37. What is `useRef()`?

**Answer:**

`useRef()` creates a persistent mutable object whose `.current` property can hold a value between renders.

Updating `.current` does not trigger a re-render.

**Example 1: Accessing DOM**

```jsx
import { useRef } from "react";

function Search() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}
```

**Example 2: Storing a timer ID**

```javascript
const timerRef = useRef(null);

function startTimer() {
  timerRef.current = setInterval(() => {
    console.log("Running");
  }, 1000);
}

function stopTimer() {
  clearInterval(timerRef.current);
}
```

Difference:

| `useState`                 | `useRef`                                          |
| -------------------------- | ------------------------------------------------- |
| Stores state               | Stores mutable reference                          |
| Setter schedules rendering | Changing `.current` does not                      |
| Used for UI data           | Used for DOM access and persistent mutable values |

#### Q10.38. What is `useMemo()`?

**Answer:**

`useMemo()` caches the result of a calculation between renders until its dependencies change.

Example:

```jsx
import { useMemo, useState } from "react";

function StudentDashboard({ students }) {
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    console.log("Filtering students");

    return students.filter(student =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [students, search]);

  return (
    <div>
      <input
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      {filteredStudents.map(student => (
        <p key={student.id}>{student.name}</p>
      ))}
    </div>
  );
}
```

Why use it?

- Avoid repeating expensive calculations unnecessarily.
- Maintain stable calculated values when dependencies have not changed.

Do not use it for every variable. It adds complexity and has its own cost.

#### Q10.39. What is `useCallback()`?

**Answer:**

`useCallback()` caches a function definition between renders until its dependencies change.

```jsx
import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child onClick={handleClick} />
    </>
  );
}
```

It is useful when a stable function reference matters, such as when passing callbacks to memoized children or using functions as Effect dependencies.

#### Q10.40. What is the difference between `useMemo()` and `useCallback()`?

**Answer:**

| `useMemo`                         | `useCallback`                         |
| --------------------------------- | ------------------------------------- |
| Caches a calculated value         | Caches a function definition          |
| Returns the memoized result       | Returns the memoized function         |
| Useful for expensive calculations | Useful for stable callback references |

Example:

```javascript
const value = useMemo(
  () => calculateTotal(items),
  [items]
);

const callback = useCallback(() => {
  saveData(items);
}, [items]);
```

#### Q10.41. What is `useReducer()`?

**Answer:**

`useReducer()` manages state using a reducer function.

It is useful when state transitions involve multiple related actions.

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };

    case "RESET":
      return initialState;

    default:
      throw new Error("Unknown action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <h2>{state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </>
  );
}
```

The reducer receives the current state and an action, then returns the next state.

<a id="phase-10-section-8"></a>

### Context API and State Management

#### Q10.42. What is prop drilling?

**Answer:**

Prop drilling occurs when data is passed through multiple intermediate components just to reach a deeply nested child.

Example:

```text
App
│
└── Dashboard
    │
    └── StudentSection
        │
        └── StudentCard
```

If `StudentCard` needs the logged-in user, the data may have to pass through `Dashboard` and `StudentSection`, even if they do not use it.

This is prop drilling.

#### Q10.43. What is Context API?

**Answer:**

Context allows components to share values without explicitly passing props through every intermediate component.

Example:

```jsx
import {
  createContext,
  useContext,
  useState
} from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = userData => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>{user?.name ?? "Guest"}</h2>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Profile />
    </AuthProvider>
  );
}
```

This is a simplified example of authentication state sharing.

#### Q10.44. What is the difference between Context API and Redux?

**Answer:**

| Context API                                      | Redux Toolkit                         |
| ------------------------------------------------ | ------------------------------------- |
| Built into React                                 | External state management library     |
| Shares values across component trees             | Centralized state management          |
| Suitable for relatively simple shared state      | Useful for complex application state  |
| No built-in action/reducer architecture required | Uses reducers and actions             |
| Context updates can re-render many consumers     | Supports selector-based subscriptions |

Context is not automatically a complete replacement for Redux.

Engineering recommendation:

- Local UI state: `useState`.
- Related complex local state: `useReducer`.
- Shared application state: Context or a state management library.
- Server data: Consider a dedicated data-fetching/cache library.

#### Q10.45. What is server state versus client state?

**Answer:**

Client state is data owned by the frontend application.

Examples:

- Open/closed modal.
- Selected tab.
- Theme.
- Temporary form input.

Server state is data owned by a backend service.

Examples:

- Student records.
- Insurance policies.
- Payment transactions.
- Job applications.

Server state has additional concerns:

- Fetching.
- Caching.
- Refetching.
- Loading.
- Error states.
- Synchronization.
- Invalidation.

Libraries such as TanStack Query help manage server state.

<a id="phase-10-section-9"></a>

### Custom Hooks

#### Q10.46. What is a custom Hook?

**Answer:**

A custom Hook is a JavaScript function whose name starts with `use` and which uses React Hooks internally.

It allows developers to reuse stateful logic between components.

Example:

```javascript
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(previous => previous + 1);
  }

  function decrement() {
    setCount(previous => previous - 1);
  }

  return {
    count,
    increment,
    decrement
  };
}
```

Use it:

```jsx
function Counter() {
  const {
    count,
    increment,
    decrement
  } = useCounter(10);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
```

Benefits:

- Reusable logic.
- Cleaner components.
- Better separation of concerns.
- Easier testing.

#### Q10.47. How would you create a custom Hook for API data fetching?

**Answer:**

We can combine `useState`, `useEffect` and `AbortController`.

```javascript
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();
        setData(result);

      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }

      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
```

Usage:

```jsx
function Users() {
  const {
    data,
    loading,
    error
  } = useFetch("/api/users");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong.</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

This is a basic reusable fetching Hook. A production implementation may also need caching, retries, request deduplication, pagination and more sophisticated race-condition handling.

<a id="phase-10-section-10"></a>

### React Router

#### Q10.48. What is React Router?

**Answer:**

React Router is a routing library used to create navigation between different views in a React application.

For example:

```text
/
├── /login
├── /dashboard
├── /students
├── /companies
└── /applications
```

Install:

```bash
npm install react-router
```

A typical browser application setup:

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/students"
          element={<Students />}
        />
      </Routes>
    </BrowserRouter>
  );
}
```

The current React Router APIs support different package import arrangements depending on the router mode and version. Follow the installed version's documentation.

#### Q10.49. What is the difference between `Link` and a normal anchor tag?

**Answer:**

A React Router `Link` performs client-side navigation.

```jsx
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/students">Students</Link>
    </nav>
  );
}
```

A normal anchor:

```html
<a href="/dashboard">Dashboard</a>
```

Typically performs browser navigation and may reload the document.

A router `Link` changes the URL and allows the router to render the appropriate route without a full-page navigation.

#### Q10.50. What are dynamic routes?

**Answer:**

Dynamic routes use URL parameters.

Example:

```text
/students/101
/students/102
```

Route:

```jsx
<Route
  path="/students/:id"
  element={<StudentDetails />}
/>
```

Read the parameter:

```jsx
import { useParams } from "react-router";

function StudentDetails() {
  const { id } = useParams();

  return <h2>Student ID: {id}</h2>;
}
```

#### Q10.51. How do you implement protected routes?

**Answer:**

Protected routes prevent unauthorized users from accessing particular pages.

A simple example:

```jsx
import { Navigate, Outlet } from "react-router";

function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
```

Configuration:

```jsx
<Routes>
  <Route path="/login" element={<Login />} />

  <Route element={<ProtectedRoute isAuthenticated={true} />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/students" element={<Students />} />
  </Route>
</Routes>
```

Important security point: Frontend route protection is not sufficient security.

The backend must independently verify authentication and authorization for every protected API operation.

<a id="phase-10-section-11"></a>

### API Integration and Full-Stack Communication

#### Q10.52. How does React communicate with a backend?

**Answer:**

React sends HTTP requests to a backend API using Fetch or Axios.

Typical architecture:

```text
React Frontend
User interface, forms, state
          |
          | HTTP / JSON
          v
Express.js / FastAPI Backend
Routes, middleware, business logic
          |
          v
Database
PostgreSQL / MySQL / MongoDB
```

Example flow:

1. User clicks Add Student.
2. React collects the form data.
3. React sends a POST request.
4. Backend validates the request.
5. Backend executes business logic.
6. Database stores the record.
7. Backend returns JSON.
8. React updates the UI.

#### Q10.53. How do you implement GET and POST requests in React?

**Answer:**

Separate API communication from UI components.

`src/services/studentService.js`:

```javascript
const API_URL = "http://localhost:3000/api/students";

export async function getStudents() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return response.json();
}

export async function createStudent(student) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });

  if (!response.ok) {
    throw new Error("Failed to create student");
  }

  return response.json();
}
```

Component:

```jsx
import { useEffect, useState } from "react";
import { getStudents } from "./services/studentService";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadStudents() {
      try {
        const result = await getStudents();

        if (!ignore) {
          setStudents(result);
        }

      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }

      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadStudents();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
```

The `ignore` flag prevents an outdated request result from updating an unmounted or superseded component. For cancellation of network work, combine this pattern with `AbortController`.

#### Q10.54. What is CORS, and why does it matter in React?

**Answer:**

CORS stands for Cross-Origin Resource Sharing.

Browsers enforce the Same-Origin Policy. CORS allows a server to specify which cross-origin requests browsers may permit.

Suppose:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:3000
```

These have different origins because their ports differ.

The backend may need to configure CORS.

Express example:

```bash
npm install cors
```

```javascript
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
```

Important: CORS is enforced by browsers. It is not a replacement for backend authentication or authorization.

<a id="phase-10-section-12"></a>

### Performance Optimization

#### Q10.55. What is unnecessary re-rendering?

**Answer:**

A component may render more often than necessary due to:

- Parent re-renders.
- State changes.
- Context changes.
- New object or function references.
- Changed props.

Not every re-render is a performance problem.

First measure performance, then optimize.

#### Q10.56. What is `React.memo()`?

**Answer:**

`React.memo()` memoizes a component so React can skip rendering it when its props are unchanged according to its comparison.

```jsx
import React from "react";

const StudentCard = React.memo(function StudentCard({ name }) {
  console.log("StudentCard rendered");

  return <h2>{name}</h2>;
});

export default StudentCard;
```

If the parent renders again but `name` remains unchanged, React can skip rendering `StudentCard`.

By default, React compares props shallowly.

A newly created object or function may still cause a memoized child to render.

#### Q10.57. What is lazy loading in React?

**Answer:**

Lazy loading allows code to be loaded only when required.

```jsx
import {
  lazy,
  Suspense
} from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

This can reduce the initial JavaScript bundle size.

It is especially useful for large route-level components.

#### Q10.58. What is code splitting?

**Answer:**

Code splitting divides application code into smaller chunks that can be loaded when needed.

For example:

```text
Application bundle
│
├── Common components
├── Dashboard chunk
├── Student management chunk
└── Reports chunk
```

Instead of loading everything immediately, the application can load some chunks on demand.

Dynamic imports and React's `lazy()` are common ways to implement this.

#### Q10.59. How do you identify React performance problems?

**Answer:**

Use:

- React Developer Tools.
- React Profiler.
- Browser Performance panel.
- Network panel.
- Lighthouse.
- Bundle analysis tools.

Investigate:

- Excessive component rendering.
- Large JavaScript bundles.
- Expensive calculations.
- Unnecessary API requests.
- Large lists.
- Memory leaks.
- Slow images.

For large lists, virtualization libraries can render only the visible portion rather than thousands of DOM elements at once.

<a id="phase-10-section-13"></a>

### React with TypeScript

#### Q10.60. How do you define typed React props?

**Answer:**

Use an interface to define the expected properties.

```tsx
interface Student {
  id: number;
  name: string;
  course: string;
}

interface StudentCardProps {
  student: Student;
  onDelete: (id: number) => void;
}

function StudentCard({
  student,
  onDelete
}: StudentCardProps) {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>{student.course}</p>

      <button onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </div>
  );
}
```

This defines exactly what the component expects.

#### Q10.61. How do you type `useState()`?

**Answer:**

We can provide a type explicitly when necessary.

```tsx
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function Profile() {
  const [user, setUser] = useState<User | null>(null);

  function loadUser() {
    setUser({
      id: 1,
      name: "Chirag"
    });
  }

  return (
    <div>
      <button onClick={loadUser}>Load User</button>
      <p>{user?.name ?? "No user loaded"}</p>
    </div>
  );
}
```

The state can either contain a `User` or `null`.

#### Q10.62. How do you type React event handlers?

**Answer:**

TypeScript provides specific event types.

```tsx
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEmail(event.target.value);
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

Common event types:

| Event          | Type                                    |
| -------------- | --------------------------------------- |
| Input change   | `React.ChangeEvent<HTMLInputElement>`   |
| Form submit    | `React.FormEvent<HTMLFormElement>`      |
| Button click   | `React.MouseEvent<HTMLButtonElement>`   |
| Keyboard event | `React.KeyboardEvent<HTMLInputElement>` |

#### Q10.63. How do you create a typed custom Hook?

**Answer:**

We can combine TypeScript interfaces with React state and reusable functions.

```typescript
import { useState } from "react";

interface Student {
  id: number;
  name: string;
}

function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);

  function addStudent(student: Student) {
    setStudents(previous => [...previous, student]);
  }

  function removeStudent(id: number) {
    setStudents(previous =>
      previous.filter(student => student.id !== id)
    );
  }

  return {
    students,
    addStudent,
    removeStudent
  };
}
```

This pattern combines TypeScript interfaces, state management, array methods and reusable logic.

<a id="phase-10-section-14"></a>

### Complete Practical Project: Student Management Dashboard

#### Q10.64. How would you build a small student management dashboard?

**Answer:**

We will build a frontend with:

- Student listing.
- Add student.
- Delete student.
- Search student.
- Statistics.
- Local state management.

**Project structure**

```text
student-dashboard/
│
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx
│   │   ├── StudentList.jsx
│   │   └── StudentCard.jsx
│   │
│   ├── hooks/
│   │   └── useStudents.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

**Step 1 — Create custom Hook**

`src/hooks/useStudents.js`

```javascript
import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Amit", course: "IT" },
  { id: 2, name: "Chirag", course: "CSE" },
  { id: 3, name: "Raj", course: "CSE" }
];

export function useStudents() {
  const [students, setStudents] = useState(initialStudents);

  function addStudent(name, course) {
    const student = {
      id: crypto.randomUUID(),
      name,
      course
    };

    setStudents(previous => [...previous, student]);
  }

  function deleteStudent(id) {
    setStudents(previous =>
      previous.filter(student => student.id !== id)
    );
  }

  return {
    students,
    addStudent,
    deleteStudent
  };
}
```

**Step 2 — Student Form**

`src/components/StudentForm.jsx`

```jsx
import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("CSE");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    onAddStudent(trimmedName, course);

    setName("");
    setCourse("CSE");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <select
        value={course}
        onChange={event => setCourse(event.target.value)}
      >
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="EC">EC</option>
      </select>

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
```

**Step 3 — Student Card**

`src/components/StudentCard.jsx`

```jsx
function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>Course: {student.course}</p>

      <button onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
```

**Step 4 — Student List**

`src/components/StudentList.jsx`

```jsx
import StudentCard from "./StudentCard";

function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <div>
      {students.map(student => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;
```

**Step 5 — Main App**

`src/App.jsx`

```jsx
import { useState } from "react";

import { useStudents } from "./hooks/useStudents";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const {
    students,
    addStudent,
    deleteStudent
  } = useStudents();

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Management Dashboard</h1>

      <h2>Total Students: {students.length}</h2>

      <StudentForm onAddStudent={addStudent} />

      <input
        type="text"
        placeholder="Search students"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;
```

**Step 6 — Basic CSS**

`src/index.css`

```sql
body {
  font-family: Arial, sans-serif;
  background: #f4f5f7;
  margin: 0;
  padding: 30px;
}

.container {
  max-width: 800px;
  margin: auto;
}

input,
select,
button {
  padding: 10px;
  margin: 8px;
}

.student-card {
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}
```

**Step 7 — Run the project**

```bash
npm run dev
```

Expected behaviour:

1. Three initial students appear.
2. Enter a name and select a course.
3. Click Add Student.
4. Student appears in the list.
5. Search filters students.
6. Delete removes a student.
7. Total Students updates automatically.

Concepts integrated:

- Functional components.
- Props.
- `useState`.
- Custom Hooks.
- Event handling.
- Controlled forms.
- Conditional rendering.
- Array `map()` and `filter()`.
- Component composition.
- One-way data flow.

**Limitation:** This is a frontend-only learning project. Student data is stored in React memory and resets when the page reloads. A real application would communicate with a backend and database.

<a id="phase-10-section-15"></a>

### Advanced React Interview Questions

#### Q10.65. What is the difference between rendering and committing?

**Answer:**

React's update process has two major conceptual stages.

**Render phase:**

- React calls components.
- Calculates the next UI description.
- Reconciles previous and next output.

**Commit phase:**

- React applies necessary DOM changes.
- Updates relevant refs.
- Runs layout-related work at the appropriate point.

Effects such as `useEffect()` run after the commit, while `useLayoutEffect()` runs synchronously after DOM mutations and before the browser repaints.

#### Q10.66. What is the difference between `useEffect()` and `useLayoutEffect()`?

**Answer:**

| `useEffect`                               | `useLayoutEffect`                         |
| ----------------------------------------- | ----------------------------------------- |
| Synchronizes with external systems        | Useful for layout-related synchronization |
| Generally does not block browser painting | Runs before browser repaint               |
| Preferred for most Effects                | Use only when necessary                   |

Example use cases for `useLayoutEffect`:

- Measure an element's dimensions.
- Calculate positioning.
- Apply a layout correction before the browser paints.

Use `useEffect` for ordinary API calls, subscriptions and synchronization tasks.

#### Q10.67. What is Strict Mode?

**Answer:**

`React.StrictMode` is a development-only tool that helps identify potential problems in a React application.

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

It helps detect:

- Impure rendering.
- Unsafe lifecycle patterns in older class components.
- Missing Effect cleanup.
- Deprecated API usage.

In development, Strict Mode can invoke component rendering and Effect setup/cleanup extra times to expose bugs.

It does not cause these extra checks in production.

#### Q10.68. What are error boundaries?

**Answer:**

Error boundaries catch certain rendering errors in their descendant component tree and display fallback UI.

They do not automatically catch every kind of error, such as:

- Event handler errors.
- Arbitrary asynchronous callback errors.
- Server-side rendering errors.
- Errors thrown inside the boundary itself.

A simplified class-based example:

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.error("React error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Usage:

```jsx
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>
```

#### Q10.69. What is lifting state up?

**Answer:**

Lifting state up means moving shared state to the closest common parent of components that need it.

Example:

```text
Dashboard
│
├── SearchBar
│
└── StudentList
```

If both components need the same search value, store it in `Dashboard` and pass it through props.

```jsx
function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
      />

      <StudentList search={search} />
    </>
  );
}
```

This maintains a single source of truth.

#### Q10.70. What are portals in React?

**Answer:**

Portals allow React to render a component's DOM into a different DOM node while keeping it within the same React component tree.

Example:

```jsx
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}
```

Common uses:

- Modals.
- Tooltips.
- Dropdown overlays.
- Notifications.

Events from portals still propagate according to the React tree.

#### Q10.71. What are fragments?

**Answer:**

Fragments let you group multiple elements without adding an extra DOM element.

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

Useful when adding an extra wrapper would affect CSS layout or semantic HTML.

<a id="phase-10-section-16"></a>

### React and Next.js: Important Distinctions

Because your projects use Next.js, you should understand how React and Next.js relate.

#### Q10.72. What is the difference between React and Next.js?

**Answer:**

React is a UI library.

Next.js is a React framework that provides additional capabilities.

| React                             | Next.js                                       |
| --------------------------------- | --------------------------------------------- |
| UI library                        | React framework                               |
| Component rendering               | Application rendering and routing conventions |
| Routing usually added separately  | Built-in file-system routing                  |
| No built-in server-side framework | Server-side capabilities                      |
| Build setup required              | Integrated build and development system       |
| Client-side rendering is common   | Supports multiple rendering approaches        |

#### Q10.73. What is client-side rendering?

**Answer:**

Client-side rendering means the browser executes JavaScript to render the UI.

Simplified flow:

1. Browser receives HTML.
2. Browser loads JavaScript.
3. React executes.
4. Components render.
5. UI becomes interactive.

#### Q10.74. What is server-side rendering?

**Answer:**

Server-side rendering generates HTML on the server and sends it to the browser.

Benefits:

- HTML can be available earlier.
- Useful for search-engine discoverability.
- Can improve initial content delivery.

Next.js supports server-side rendering, static generation and other rendering strategies.

#### Q10.75. What is hydration?

**Answer:**

Hydration is the process of attaching React's client-side behaviour to HTML that was previously rendered.

For example:

1. Server produces HTML.
2. Browser displays that HTML.
3. JavaScript loads.
4. React hydrates the relevant component tree.
5. Event handlers and interactive behaviour become active.

A hydration mismatch occurs when the server-rendered output does not match the initial client-rendered output.

Common causes:

- Random values during rendering.
- Current timestamps.
- Different server/client data.
- Browser-only APIs used during initial rendering.
- Incorrect HTML nesting.

#### Q10.76. What are Server Components and Client Components in Next.js?

**Answer:**

In the Next.js App Router:

**Server Components:**

- Render on the server.
- Can access server-side resources.
- Cannot use client-side React Hooks such as `useState` or `useEffect`.

**Client Components:**

- Use the `"use client"` directive at the module boundary.
- Can use state and Effects.
- Support browser interactions and event handlers.

Example:

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

A useful architecture is to keep components server-rendered by default and introduce client components where interactivity is required.

<a id="phase-10-section-17"></a>

### Next.js Application Structure and Data Boundaries

#### App Router Files

A `page.tsx` renders a route; a `layout.tsx` wraps a route subtree with shared UI. A folder such as `students/[id]` defines a dynamic segment. Loading and error UI should communicate what the user can do while data is pending or a request fails. Keep examples aligned with the router and Next.js version used by the project. [Official layouts and pages guide](https://nextjs.org/docs/app/getting-started/layouts-and-pages).

#### Server and Client Responsibilities

Keep database access and secrets on the server. Introduce a Client Component boundary for state, event handlers and browser APIs. The `"use client"` directive marks a module boundary; it does not mean that the component can never contribute to server-generated initial HTML. Pass appropriate serializable data across the boundary. [Official component-boundary guide](https://nextjs.org/docs/app/getting-started/server-and-client-components).

#### Interview Exercise

Design a placement-drive page with a server-loaded drive description and an interactive application form. Explain where authorization is checked, how invalid input is reported, and how the UI refreshes after a successful mutation. Check the installed version's caching behavior rather than assuming all requests are cached or uncached. Never expose a privileged database credential through a public frontend environment variable.

---


<a id="phase-10-section-18"></a>

### JavaScript and TypeScript in Real Projects

#### Q10.77. How does JavaScript work in a React application?

React uses JavaScript or TypeScript to describe UI components and their behaviour.

```tsx
interface Student {
    id: number;
    name: string;
}

function StudentCard({ student }: { student: Student }) {
    return (
        <div>
            <h2>{student.name}</h2>
            <p>ID: {student.id}</p>
        </div>
    );
}
```

Concepts used:

- Functions.
- Objects.
- Destructuring.
- Interfaces.
- JSX.
- Component props.
- Type checking.

---

<a id="phase-11"></a>

## Phase 11 — Node.js, Express.js, RESTful APIs and Microservices

**Objective:** Build HTTP services, then understand service boundaries and distributed failure.

**Sections:** [Backend Development Fundamentals](#phase-11-section-1) · [Introduction to Node.js](#phase-11-section-2) · [Node.js Event Loop](#phase-11-section-3) · [Important Node.js Built-in Modules](#phase-11-section-4) · [HTTP and Building a Basic Node.js Server](#phase-11-section-5) · [Express.js Fundamentals](#phase-11-section-6) · [Middleware and Request Lifecycle](#phase-11-section-7) · [Routing, Controllers and Services](#phase-11-section-8) · [REST API Design](#phase-11-section-9) · [Request Validation and Error Handling](#phase-11-section-10) · [Backend Architecture and Folder Structure](#phase-11-section-11) · [Practical Project: Student Management REST API](#phase-11-section-12) · [Advanced Backend Interview Questions](#phase-11-section-13) · [Microservices — Boundaries, Communication and Failure](#phase-11-section-14) · [Q11.62. How does JavaScript work in an Express.js backend?](#phase-11-section-15) · [Complete Express + PostgreSQL + Prisma Integration](#phase-11-section-16) · [MongoDB with Express](#phase-11-section-17) · [Redis integration with Node.js and Express](#phase-11-section-18) · [npm metadata, lockfiles and dependency categories](#phase-11-section-19) · [Resilient external APIs](#phase-11-section-20) · [Upload and document processing boundaries](#phase-11-section-21) · [AI API contracts and unreliable generated output](#phase-11-section-22)

<a id="phase-11-section-1"></a>

### Backend Development Fundamentals

**Q11.1. What is backend development?**

Answer: Backend development involves building the server-side part of an application. It manages business logic, database operations, authentication, APIs, validation, security, file processing, and external integrations.

**Q11.2. What is the difference between frontend and backend?**

Answer: The frontend is the user interface that users interact with, usually running in a browser. The backend processes requests, applies business rules, communicates with databases, and returns responses. React and Next.js are frontend technologies; Node.js and Express are backend technologies.

**Q11.3. What is an API?**

Answer: API stands for Application Programming Interface. It defines how different software systems communicate. For example, a student API may expose `GET /api/students`, `POST /api/students`, and `DELETE /api/students/:id`.

**Q11.4. What is JSON?**

Answer: JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format commonly used by APIs.

```json
{
  "id": 101,
  "name": "Chirag",
  "course": "CSE",
  "active": true
}
```

JavaScript converts objects to JSON text with `JSON.stringify()` and parses JSON text with `JSON.parse()`. JSON does not support JavaScript functions, `undefined`, or comments.

<a id="phase-11-section-2"></a>

### Introduction to Node.js

**Q11.5. What is Node.js?**

Answer: Node.js is an open-source JavaScript runtime that allows JavaScript to execute outside the browser. It is commonly used for REST APIs, backend applications, real-time services, command-line tools, automation, and microservices.

**Q11.6. Why was Node.js introduced?**

Answer: Node.js made it possible to use JavaScript for server-side development, rather than limiting it primarily to browser applications. Its asynchronous I/O model and npm ecosystem make it useful for network-heavy applications. It is not automatically ideal for every CPU-intensive workload.

**Q11.7. What is the difference between JavaScript and Node.js?**

Answer: JavaScript is a programming language; Node.js is a runtime that executes JavaScript outside the browser. Node.js provides server-side APIs such as filesystem, networking, and process management APIs that are not part of the core JavaScript language.

**Q11.8. What is V8?**

Answer: V8 is Google's open-source JavaScript engine, used by Chrome and Node.js. It parses, compiles, executes, and optimizes JavaScript, and manages memory and garbage collection.

**Q11.9. Explain Node.js architecture.**

Answer: Node.js combines V8 with runtime APIs, libuv, the event loop, and operating-system facilities. V8 executes JavaScript, Node APIs provide capabilities such as filesystem access, and libuv supports asynchronous I/O and event-loop functionality.

| Component        | Responsibility                                                |
| ---------------- | ------------------------------------------------------------- |
| V8               | Executes JavaScript                                           |
| Node.js APIs     | Filesystem, networking, processes                             |
| libuv            | Event loop and asynchronous I/O support                       |
| Event loop       | Coordinates scheduled callbacks                               |
| Thread pool      | Handles certain operations outside the main JavaScript thread |
| Operating system | Provides networking and system facilities                     |

**Q11.10. What is libuv?**

Answer: libuv is a cross-platform library used by Node.js for event-loop functionality and asynchronous I/O. It provides facilities such as timers, filesystem operations, networking support, and a worker thread pool. Not every asynchronous operation uses the thread pool; network I/O generally relies on operating-system facilities.

**Q11.11. Is Node.js single-threaded?**

Answer: Node.js executes JavaScript on its main event-loop thread by default, but it is not entirely single-threaded. It can also use libuv's worker pool, Worker Threads, operating-system asynchronous I/O, and multiple processes.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Timer
```

**Q11.12. What is the difference between concurrency and parallelism?**

Answer: Concurrency means multiple tasks make progress during overlapping periods. Parallelism means multiple tasks execute simultaneously on separate execution resources. One event loop managing multiple network requests is concurrency; multiple Worker Threads executing CPU-heavy tasks can provide parallelism.

<a id="phase-11-section-3"></a>

### Node.js Event Loop

**Q11.13. What is the Node.js event loop?**

Answer: The event loop coordinates the execution of JavaScript callbacks and asynchronous operations. It allows Node.js to handle many I/O operations without blocking the main JavaScript thread while waiting for them.

The major phases are:

1. Timers
2. Pending callbacks
3. Idle and prepare
4. Poll
5. Check
6. Close callbacks

Promise microtasks and `process.nextTick()` have special scheduling behaviour around these phases.

**Q11.14. Difference between **`setTimeout()`** and **`setImmediate()`**?**

Answer: `setTimeout()` schedules a callback after a minimum delay. `setImmediate()` schedules a callback for the event loop's check phase. At the top level, their relative output order can vary; inside an I/O callback, `setImmediate()` normally runs first.

**Q11.15. What is **`process.nextTick()`**?**

Answer: It schedules a callback to run after the current operation completes, before the event loop continues to its next phase.

```javascript
console.log("Start");

process.nextTick(() => console.log("Next Tick"));

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Typical output:

```text
Start
End
Next Tick
Promise
```

Repeatedly scheduling `process.nextTick()` can starve the event loop and delay I/O.

**Q11.16. Difference between blocking and non-blocking I/O?**

Answer: Blocking operations prevent the current JavaScript thread from continuing until the operation finishes. Non-blocking operations allow JavaScript to continue while the runtime handles the operation asynchronously.

```javascript
// Blocking
const data = fs.readFileSync("data.txt", "utf8");

// Non-blocking
fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) return console.error(error);
  console.log(data);
});

console.log("Finished scheduling read");
```

Avoid synchronous filesystem operations in production request-handling paths when they could block other requests.

<a id="phase-11-section-4"></a>

### Important Node.js Built-in Modules

**Q11.17. What is the **`fs`** module?**

Answer: The filesystem module provides operations for reading, writing, appending, and deleting files.

```javascript
import fs from "node:fs/promises";

const data = await fs.readFile("data.txt", "utf8");
await fs.writeFile("data.txt", "Hello Node.js", "utf8");
await fs.appendFile("data.txt", "\nNew content");
await fs.unlink("data.txt");
```

**Q11.18. What is the **`path`** module?**

Answer: It provides utilities for handling filesystem paths. `path.join()` combines path segments, while `path.resolve()` produces an absolute path.

```javascript
import path from "node:path";

path.join("src", "controllers", "user.js");
path.basename("/app/src/server.js");
path.dirname("/app/src/server.js");
path.extname("/app/src/server.js");
```

**Q11.19. What is the **`os`** module?**

Answer: It provides operating-system information such as platform, architecture, CPU count, and memory.

```javascript
import os from "node:os";

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.totalmem());
console.log(os.freemem());
```

**Q11.20. What is the **`crypto`** module?**

Answer: It provides cryptographic functionality such as generating random values, UUIDs, and hashes.

```javascript
import { randomBytes, randomUUID } from "node:crypto";

console.log(randomBytes(32).toString("hex"));
console.log(randomUUID());
```

Important security distinction: Do not store passwords using a fast general-purpose hash such as SHA-256 alone. Use a password-hashing algorithm such as Argon2id or bcrypt with appropriate parameters.

**Q11.21. What is the **`process`** object?**

Answer: It provides information and control over the current Node.js process. It exposes values such as `process.version`, `process.pid`, `process.cwd()`, `process.argv`, and `process.env`.

<a id="phase-11-section-5"></a>

### HTTP and Building a Basic Node.js Server

**Q11.22. What are HTTP methods?**

| Method  | Typical purpose                          |
| ------- | ---------------------------------------- |
| GET     | Retrieve data                            |
| POST    | Create a resource or trigger processing  |
| PUT     | Replace a resource                       |
| PATCH   | Partially update a resource              |
| DELETE  | Delete a resource                        |
| HEAD    | Retrieve headers without a response body |
| OPTIONS | Describe communication options           |

GET should be safe. PUT and DELETE are idempotent by HTTP semantics; POST and PATCH are not inherently idempotent.

**Q11.23. How do you create a basic HTTP server using Node.js?**

Answer: Node.js provides the built-in `http` module.

```javascript
import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run it using `node server.js` and visit `http://localhost:3000`.


<a id="phase-11-section-6"></a>

### Express.js Fundamentals

**Q11.24. What is Express.js?**

Answer: Express is a minimal web framework built on Node.js. It simplifies HTTP server development by providing routing, middleware, request/response handling, and error-handling patterns.

**Q11.25. How do you install Express?**

```bash
mkdir student-api
cd student-api
npm init -y
npm install express
npm install -D nodemon
```

For an ES Module project, configure `"type": "module"` in `package.json`.

**Q11.26. How do you create an Express server?**

```javascript
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Q11.27. What are **`req`** and **`res`**?**

Answer: `req` is the request object containing information sent by the client. `res` is the response object used to send data back. Common request properties include `req.params`, `req.query`, `req.body`, `req.headers`, and `req.method`.

**Q11.28. What is **`express.json()`**?**

Answer: It is built-in Express middleware that parses incoming JSON request bodies. The parsed JavaScript object becomes available through `req.body`. Register it before routes that need to access the request body.

<a id="phase-11-section-7"></a>

### Middleware and Request Lifecycle

**Q11.29. What is middleware in Express?**

Answer: Middleware is a function that executes during the request-response lifecycle. It can read or modify request data, authenticate users, validate input, log requests, pass control onward, or end the response.

**Q11.30. What does **`next()`** do?**

Answer: `next()` passes control to the next middleware or route handler. If middleware has already sent the response, it should not call `next()` unnecessarily.

**Q11.31. What are the types of middleware?**

Answer: The main types are application-level, router-level, built-in, third-party, and error-handling middleware. Examples include custom logging middleware, `express.json()`, `cors()`, and `helmet()`.

**Q11.32. What is middleware execution order?**

Answer: Express executes middleware in the order in which it is registered. For example, JSON parsing should generally run before routes that read `req.body`; authentication should run before protected handlers.

```javascript
app.use(logger);
app.use(authenticateToken);
app.get("/profile", getProfile);
```

**Q11.33. How do you create custom middleware?**

```javascript
export function requestLogger(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    console.log({
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      duration: Date.now() - start
    });
  });

  next();
}
```

Avoid logging passwords, tokens, or sensitive personal information.

<a id="phase-11-section-8"></a>

### Routing, Controllers and Services

**Q11.34. What is routing in Express?**

Answer: Routing defines how the server responds to a particular HTTP method and URL. For example, `GET /students` can retrieve students, while `POST /students` can create one.

**Q11.35. What are route parameters?**

Answer: Route parameters represent dynamic values in a URL.

```javascript
app.get("/students/:id", (req, res) => {
  res.json({ studentId: req.params.id });
});
```

A request to `/students/101` returns the ID `"101"`. Route parameters are strings by default, so validate and convert them when necessary.

**Q11.36. What are query parameters?**

Answer: Query parameters are values passed after `?` in a URL. They are commonly used for search, filtering, sorting, and pagination.

```http
GET /students?course=CSE&page=1&limit=10
```

**Q11.37. Difference between **`req.params`**, **`req.query`**, and **`req.body`**?**

| Property     | Example         | Purpose                  |
| ------------ | --------------- | ------------------------ |
| `req.params` | `/students/101` | Identify a resource      |
| `req.query`  | `?page=2`       | Filtering and options    |
| `req.body`   | JSON payload    | Data sent with a request |

**Q11.38. What is an Express Router?**

Answer: Express Router allows routes to be organized into separate modules. For example, student routes can live in `studentRoutes.js` and be mounted using `app.use("/api/students", studentRoutes)`.

**Q11.39. What are controllers?**

Answer: Controllers handle HTTP request and response logic. They read request parameters, call the required service, and return an appropriate status code and response.

**Q11.40. What are services?**

Answer: Services contain business logic. A student service might check whether a student exists, determine eligibility, check application deadlines, or create a student record.

**Q11.41. Why separate routes, controllers, and services?**

Answer: Separation of concerns improves maintainability and testing. Routes map endpoints, controllers handle HTTP interactions, services implement business rules, and repositories/data-access layers communicate with data sources. Avoid placing all business logic inside route handlers.

<a id="phase-11-section-9"></a>

### REST API Design

**Q11.42. What is REST?**

Answer: REST stands for Representational State Transfer. It is an architectural style for networked applications. Its principles include client-server separation, stateless communication, cacheability, a uniform interface, and a layered system.

**Q11.43. How do you design RESTful endpoints?**

Answer: Use resource-oriented URLs and HTTP methods that express the operation.

```http
GET    /api/students
GET    /api/students/:id
POST   /api/students
PUT    /api/students/:id
PATCH  /api/students/:id
DELETE /api/students/:id
```

Avoid action-heavy URLs such as `/api/deleteStudent` when the HTTP method already expresses the action.

**Q11.44. What is statelessness in REST?**

Answer: Each request should contain the information needed to process it. The server should not rely on conversational session state held only in memory between requests. Statelessness does not mean the server cannot use databases or caches.

**Q11.45. What is pagination?**

Answer: Pagination divides large result sets into smaller pages. For example, `GET /api/students?page=2&limit=10` requests the second page of ten records. For large datasets, pagination should happen at the database level; cursor-based pagination may be more stable for frequently changing data.

**Q11.46. What is API versioning?**

Answer: API versioning allows an API to evolve while maintaining compatibility for existing clients. A common approach is URL versioning, such as `/api/v1/students` and `/api/v2/students`. Versioning is particularly useful when response structures or endpoint behaviour change in breaking ways.

<a id="phase-11-section-10"></a>

### Request Validation and Error Handling

**Q11.47. Why is request validation necessary?**

Answer: Validation ensures incoming data has the expected structure, types, and values before business logic processes it. It helps prevent invalid records, unexpected errors, and some security problems. Never assume frontend validation alone is sufficient.

**Q11.48. What is schema validation?**

Answer: Schema validation checks data against a defined structure and rules. A library such as Zod can validate fields, required values, string lengths, email formats, and allowed values.

```javascript
import { z } from "zod";

const studentSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  course: z.enum(["CSE", "IT", "EC"])
});
```

**Q11.49. What is centralized error handling?**

Answer: Centralized error handling uses a common error-handling middleware to format and return errors consistently. This prevents each route from implementing a different error response and helps avoid exposing internal details.

**Q11.50. Which HTTP status codes should be used for common errors?**

Answer: Use `400` for malformed or invalid requests, `401` for missing or invalid authentication, `403` for insufficient permission, `404` for a missing resource, `409` for conflicts, and `500` for unexpected server failures. Consistent error responses make frontend handling more reliable.

#### Security integration

Authentication, JWT verification, cookies and CORS enforcement are taught in [Security](#phase-13). Here, identify where validation, authentication and authorization middleware sit in the Express request lifecycle.


<a id="phase-11-section-11"></a>

### Backend Architecture and Folder Structure

**Q11.51. What is layered architecture?**

Answer: Layered architecture separates an application into logical responsibilities.

HTTP Request

Routes

Middleware

Controller — HTTP handling

Service — business logic

Repository — data access

Database

**Q11.52. What is MVC architecture?**

Answer: MVC stands for Model-View-Controller. The Model represents data and domain concepts, the View represents the user interface, and the Controller handles input and coordinates operations. In API backends, controllers commonly return JSON instead of rendering views.

**Q11.53. What is a modular monolith?**

Answer: A modular monolith is deployed as one application but divided into well-separated business modules. For example, authentication, student, company, recruitment, application, and notification modules can live in one backend. This gives internal structure without requiring distributed deployment.

**Q11.54. What are microservices?**

Answer: Microservices divide a system into independently deployable services. They can support independent scaling and team autonomy, but introduce network communication, distributed failures, data consistency challenges, and operational complexity. Having multiple folders or modules does not automatically make an application microservices-based.

<a id="phase-11-section-12"></a>

### Practical Project: Student Management REST API

The source material builds an Express API with CRUD operations, Zod validation, request logging, centralized error handling, and in-memory storage. It is an educational backend; it does not yet persist data in PostgreSQL.

##### 1. Create the project

```bash
mkdir student-management-api
cd student-management-api

npm init -y
npm install express zod cors helmet dotenv
npm install -D nodemon
```

Configure the project as an ES Module application:

```json
{
  "name": "student-management-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

##### 2. Folder structure

```text
student-management-api/
├── src/
│   ├── config/
│   │   └── env.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   ├── requestLogger.js
│   │   └── validate.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── schemas/
│   │   └── studentSchema.js
│   ├── services/
│   │   └── studentService.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
└── package.json
```

##### 3. Environment configuration

`.env`:

```dotenv
PORT=3000
NODE_ENV=development
```

`.gitignore`:

```text
node_modules/
.env
coverage/
```

`src/config/env.js`:

```javascript
import "dotenv/config";

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development"
};
```

##### 4. Validation schema

`src/schemas/studentSchema.js`:

```javascript
import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  course: z.enum(["CSE", "IT", "EC"])
});

export const updateStudentSchema = studentSchema
  .partial()
  .refine(data => Object.keys(data).length > 0, {
    message: "At least one field is required"
  });
```

The create schema requires all three fields. The update schema allows partial updates but rejects an empty update.

##### 5. Validation middleware

`src/middleware/validate.js`:

```javascript
export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues
      });
    }

    req.body = result.data;
    next();
  };
}
```

This middleware checks input before the controller runs. Invalid data receives a `400` response; valid, parsed data continues through the request pipeline.

##### 6. Service layer

`src/services/studentService.js`:

```javascript
import { randomUUID } from "node:crypto";

const students = [];

export function getAllStudents() {
  return students;
}

export function getStudentById(id) {
  return students.find(student => student.id === id);
}

export function createStudent(data) {
  const existingStudent = students.find(
    student => student.email === data.email
  );

  if (existingStudent) {
    const error = new Error("Email already exists");
    error.statusCode = 409;
    throw error;
  }

  const student = {
    id: randomUUID(),
    ...data,
    createdAt: new Date().toISOString()
  };

  students.push(student);
  return student;
}

export function updateStudent(id, data) {
  const student = getStudentById(id);

  if (!student) return null;

  Object.assign(student, data);
  return student;
}

export function deleteStudent(id) {
  const index = students.findIndex(student => student.id === id);

  if (index === -1) return false;

  students.splice(index, 1);
  return true;
}
```

The service contains the business operations and data manipulation. In a real application, a database unique constraint should also enforce email uniqueness; an in-memory check alone cannot safely handle concurrent requests.

##### 7. Controller layer

`src/controllers/studentController.js`:

```javascript
import * as studentService from "../services/studentService.js";

export function getStudents(req, res) {
  const students = studentService.getAllStudents();

  res.status(200).json({
    success: true,
    count: students.length,
    data: students
  });
}

export function getStudent(req, res) {
  const student = studentService.getStudentById(req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json({ success: true, data: student });
}

export function createStudent(req, res) {
  const student = studentService.createStudent(req.body);

  res.status(201).json({
    success: true,
    message: "Student created",
    data: student
  });
}

export function updateStudent(req, res) {
  const student = studentService.updateStudent(
    req.params.id,
    req.body
  );

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json({
    success: true,
    message: "Student updated",
    data: student
  });
}

export function deleteStudent(req, res) {
  const deleted = studentService.deleteStudent(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(204).end();
}
```

##### 8. Routes

`src/routes/studentRoutes.js`:

```javascript
import express from "express";

import * as controller from "../controllers/studentController.js";
import {
  studentSchema,
  updateStudentSchema
} from "../schemas/studentSchema.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudent);

router.post(
  "/",
  validate(studentSchema),
  controller.createStudent
);

router.patch(
  "/:id",
  validate(updateStudentSchema),
  controller.updateStudent
);

router.delete("/:id", controller.deleteStudent);

export default router;
```

The router maps HTTP methods and paths to the relevant controller functions. The create and update routes run validation before their controllers.

##### 9. Request logger

`src/middleware/requestLogger.js`:

```javascript
export function requestLogger(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
}
```

##### 10. Centralized error handler

`src/middleware/errorHandler.js`:

```javascript
export function errorHandler(err, req, res, next) {
  console.error(err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500
      ? "Internal server error"
      : err.message
  });
}
```

##### 11. Configure the Express application

`src/app.js`:

```javascript
import express from "express";
import cors from "cors";
import helmet from "helmet";

import studentRoutes from "./routes/studentRoutes.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(requestLogger);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/students", studentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandler);

export default app;
```

Notice the order: security middleware, CORS, JSON parsing, request logging, routes, not-found handling, and error handling.

##### 12. Start the server

`src/server.js`:

```javascript
import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});

function shutdown() {
  console.log("Shutting down server");

  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
```

Run:

```bash
npm run dev
```

Expected startup message:

```text
Server running on port 3000
```

##### 13. Test the API

| Operation        | HTTP request               |
| ---------------- | -------------------------- |
| Health check     | `GET /api/health`          |
| Get all students | `GET /api/students`        |
| Get one student  | `GET /api/students/:id`    |
| Create student   | `POST /api/students`       |
| Update student   | `PATCH /api/students/:id`  |
| Delete student   | `DELETE /api/students/:id` |

Create a student:

```bash
curl -X POST http://localhost:3000/api/students \
-H "Content-Type: application/json" \
-d "{\"name\":\"Chirag\",\"email\":\"chirag@example.com\",\"course\":\"CSE\"}"
```

Expected response structure:

```json
{
  "success": true,
  "message": "Student created",
  "data": {
    "id": "generated-uuid",
    "name": "Chirag",
    "email": "chirag@example.com",
    "course": "CSE",
    "createdAt": "generated-timestamp"
  }
}
```

Use the returned UUID for subsequent get, update, and delete requests.

##### 14. Verify failure cases

| Test                       | Expected status |
| -------------------------- | --------------- |
| Create valid student       | 201             |
| Create without name        | 400             |
| Invalid email              | 400             |
| Duplicate email            | 409             |
| Get nonexistent student    | 404             |
| Update nonexistent student | 404             |
| Delete nonexistent student | 404             |
| Unknown route              | 404             |

**Important limitation:** Students are stored in a JavaScript array. Restarting the server deletes all records. The next database phase will replace this in-memory storage with persistent PostgreSQL storage. 

<a id="phase-11-section-13"></a>

### Advanced Backend Interview Questions

**Q11.55. Difference between Express and Node.js?**

Answer: Node.js is the JavaScript runtime. Express is a web framework built on top of Node.js that simplifies routing, middleware, and HTTP application development.

**Q11.56. Difference between **`app.use()`** and **`app.get()`**?**

Answer: `app.use()` registers middleware, while `app.get()` registers a handler for GET requests matching a path. Middleware can run across many routes; a GET handler responds to a particular route.

**Q11.57. Difference between a monolith and microservices?**

Answer: A monolith is generally deployed as one application. Microservices divide an application into independently deployable services. A modular monolith can have clear internal boundaries without distributed-system complexity.

**Q11.58. What is idempotency in API development?**

Answer: An operation is idempotent if repeating the same request has the same intended effect as performing it once. Payment APIs often use idempotency keys to avoid processing the same payment more than once.

**Q11.59. What is a message queue?**

Answer: A message queue enables asynchronous communication between services. For example, after saving a student application, the backend can publish an event and a notification worker can send an email without making the user wait for that operation.

Examples include RabbitMQ, Apache Kafka, AWS SQS, and Redis-based queue systems.

**Q11.60. What is graceful shutdown?**

Answer: Graceful shutdown means stopping a server in a controlled way. It should stop accepting new requests, allow ongoing requests to finish, close database connections, stop background workers, flush logs, and exit cleanly.


<a id="phase-11-section-14"></a>

### Microservices — Boundaries, Communication and Failure

#### What Makes a System Microservices-Based?

Services own business capabilities and can be deployed independently. Multiple routes, folders or Docker containers do not by themselves establish meaningful service boundaries. A modular monolith keeps internal boundaries without requiring a network call between modules.

For a placement system, applications and notifications may be separate capabilities. Split them only when independent deployment, scaling or ownership justifies the operational cost. An early product may be easier to operate as a modular monolith.

#### Synchronous Calls and Asynchronous Events

A synchronous HTTP call is useful when the caller needs an immediate result. Define timeouts and propagate a correlation identifier for diagnosis. Retries can repeat side effects, so retry only with suitable idempotency rules.

An asynchronous event lets the application accept an application and notify users later. Consumers must tolerate duplicate delivery and out-of-order events where the broker or workflow permits them. Record processed event identifiers or make state transitions idempotent.

#### Data Ownership and Distributed Consistency

A database transaction covers its own database work; it does not atomically include an arbitrary network request. If saving an application must also publish an event, consider a transactional outbox: write the application and an outbox row in one database transaction, then let a worker publish the event. Publication can repeat after a crash, so consumers still need deduplication.

A saga coordinates multiple local transactions with compensating actions. Compensation is a business operation, such as cancelling a reservation; it is not necessarily a literal reversal of history.

#### Interview Questions and Practice

**Why avoid a shared writable database across independent services?** It couples schema changes and data ownership, undermining independent deployment.

**How do you handle a notification-service outage?** Persist the pending work, retry with backoff, expose failures for operations, and keep the core application state correct. Do not make a successful application disappear because an email failed.

**Practice:** Draw a modular monolith and a two-service version of the same application. Identify data owners, request/event contracts, timeouts, retry rules, logs and deployment units. Explain the additional failure modes introduced by the split.

---

**Q11.61. What is an API in web development?**

Answer: API stands for Application Programming Interface. It allows different software components or applications to communicate with each other through defined rules.

For example, a React frontend can call an Express API to retrieve student information from PostgreSQL.

An API acts as a communication interface between systems.


<a id="phase-11-section-15"></a>

### Q11.62. How does JavaScript work in an Express.js backend?

Express uses JavaScript or TypeScript to receive HTTP requests, execute business logic and send responses.

```javascript
import express from "express";

const app = express();

app.use(express.json());

app.get("/api/students", (req, res) => {
    res.json([
        { id: 1, name: "Chirag" },
        { id: 2, name: "Amit" }
    ]);
});

app.post("/api/students", (req, res) => {
    const student = req.body;

    res.status(201).json({
        message: "Student created",
        data: student
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

Request lifecycle:

1. Client sends HTTP request.
2. Express receives it.
3. Middleware processes it.
4. Route matches the endpoint.
5. Controller or handler processes the request.
6. Business logic runs.
7. Response is returned.

Production applications must validate incoming request data instead of trusting `req.body`.


<a id="phase-11-section-16"></a>

### Complete Express + PostgreSQL + Prisma Integration

Now combine the Express backend from Phase 11 with PostgreSQL and Prisma.

##### 14.1 Project structure

```text
recruitment-api/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── config/
│   │   └── prisma.ts
│   ├── controllers/
│   │   └── student.controller.ts
│   ├── services/
│   │   └── student.service.ts
│   ├── routes/
│   │   └── student.routes.ts
│   ├── middleware/
│   │   └── error.middleware.ts
│   └── app.ts
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

This is a layered modular-monolith architecture:

- Routes define endpoints.
- Controllers handle HTTP requests and responses.
- Services contain business logic.
- Prisma accesses the database.
- Middleware handles cross-cutting concerns.

##### 14.2 Prisma singleton

`src/config/prisma.ts`:

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
```

Why a singleton? You generally want a shared Prisma Client instance rather than creating a new one for every HTTP request. It manages its underlying database connection resources and avoids unnecessary client instances.

The source notes that modern Prisma configurations using a driver adapter may require that adapter during initialization. Use the configuration appropriate to your installed Prisma major version.

##### 14.3 Service layer

`src/services/student.service.ts`:

```typescript
import { prisma } from "../config/prisma";

export async function createStudent(data: {
  name: string;
  email: string;
  department: string;
  cgpa: number;
}) {
  return prisma.student.create({ data });
}

export async function getStudents() {
  return prisma.student.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      department: true,
      cgpa: true
    },
    orderBy: { id: "desc" }
  });
}

export async function getStudentById(id: number) {
  return prisma.student.findUnique({
    where: { id },
    include: { applications: true }
  });
}

export async function updateStudent(
  id: number,
  data: {
    name?: string;
    department?: string;
    cgpa?: number;
  }
) {
  return prisma.student.update({
    where: { id },
    data
  });
}

export async function deleteStudent(id: number) {
  return prisma.student.delete({
    where: { id }
  });
}
```

Notice that the service does not need to know about Express's `req` or `res`. This makes it easier to test and reuse business logic.

##### 14.4 Controller layer

`src/controllers/student.controller.ts`:

```typescript
import { Request, Response, NextFunction } from "express";
import * as studentService from "../services/student.service";

export async function create(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const student = await studentService.createStudent(req.body);

    return res.status(201).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
}

export async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const students = await studentService.getStudents();

    return res.status(200).json({
      success: true,
      data: students
    });
  } catch (error) {
    next(error);
  }
}

export async function getById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID"
      });
    }

    const student = await studentService.getStudentById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    return res.json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
}
```

The source instructs you to implement update and delete using the same pattern. Do not let raw database errors leak to clients.

##### 14.5 Routes

`src/routes/student.routes.ts`:

```typescript
import { Router } from "express";
import * as controller from "../controllers/student.controller";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

export default router;
```

##### 14.6 Application and error handling

`src/app.ts`:

```typescript
import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/student.routes";
import { Prisma } from "@prisma/client";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/students", studentRoutes);

app.use(
  (
    error: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(409).json({
          success: false,
          message: "A record with this unique value already exists"
        });
      }

      if (error.code === "P2025") {
        return res.status(404).json({
          success: false,
          message: "Record not found"
        });
      }
    }

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
);

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

For production, add request validation (for example, Zod), structured logging, graceful shutdown, authentication, authorization, and a deliberate error-handling strategy. The source explicitly describes this as a teaching implementation, not a complete production-ready API.

##### 14.7 Run the application

Add scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "tsx watch src/app.ts",
    "build": "tsc",
    "start": "node dist/app.js"
  }
}
```

Then run:

```bash
npm run dev
```

Expected:

```text
Server running on port 3000
```

##### 14.8 Test the API

Create a student:

```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Chirag",
    "email": "chirag@example.com",
    "department": "CSE",
    "cgpa": 8.2
  }'
```

Conceptual response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Chirag",
    "email": "chirag@example.com",
    "department": "CSE",
    "cgpa": "8.20"
  }
}
```

Get all students:

```bash
curl http://localhost:3000/api/students
```

Get one student:

```bash
curl http://localhost:3000/api/students/1
```

Try creating the same email again. Expected response:

```json
{
  "success": false,
  "message": "A record with this unique value already exists"
}
```

HTTP status: `409 Conflict`.

**Important implementation gap:** The controller above directly passes `req.body` to the service. Before using this in a real application, validate and whitelist the fields. Never trust client-supplied data just because Prisma has a schema.


<a id="phase-11-section-17"></a>

### MongoDB with Express

Now connect MongoDB to the backend architecture from Phase 11.

##### 11.1 Project structure

```text
recruitment-mongodb-api/
│
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── Student.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── routes/
│   │   └── studentRoutes.js
│   └── app.js
│
├── .env
├── package.json
└── .gitignore
```

##### 11.2 Controller

`controllers/studentController.js`:

```javascript
const Student = require("../models/Student");

exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
};

exports.getStudents = async (req, res, next) => {
  try {
    const students = await Student.find()
      .select("name email department cgpa")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: students
    });
  } catch (error) {
    next(error);
  }
};

exports.getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.json({
      success: true,
      data: student
    });
  } catch (error) {
    next(error);
  }
};
```

##### 11.3 Routes

`routes/studentRoutes.js`:

```javascript
const express = require("express");
const router = express.Router();

const controller = require("../controllers/studentController");

router.post("/", controller.createStudent);
router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);

module.exports = router;
```

##### 11.4 Application

`app.js`:

```javascript
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.use("/api/students", studentRoutes);

async function startServer() {
  await connectDB();

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error("Application startup failed", error);
  process.exit(1);
});
```

Install and run:

```bash
npm install express mongoose dotenv
node src/app.js
```

Expected output:

```text
MongoDB connected
Server running on port 3000
```

**Production improvements:** Add request validation, centralized error handling, duplicate-key error handling, pagination, graceful shutdown, and authentication.

One important detail: a Mongoose `unique: true` declaration creates or describes a unique index; it is not a normal Mongoose validator.


<a id="phase-11-section-18"></a>

### Redis integration with Node.js and Express

Now we'll implement Redis caching in a real backend.

##### 15.1 Install Redis client

The official Node.js Redis client is `redis`.

```bash
npm install redis
```

Create `src/config/redis.js`:

```javascript
const { createClient } = require("redis");

const redis = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379"
});

redis.on("error", (error) => {
  console.error("Redis error:", error);
});

async function connectRedis() {
  await redis.connect();
  console.log("Redis connected");
}

module.exports = {
  redis,
  connectRedis
};
```

##### 15.2 Connect Redis to Express

`src/app.js`:

```javascript
require("dotenv").config();

const express = require("express");
const { redis, connectRedis } = require("./config/redis");

const app = express();

app.use(express.json());

app.get("/health", async (req, res) => {
  const redisStatus = await redis.ping();

  res.json({
    server: "running",
    redis: redisStatus
  });
});

async function startServer() {
  await connectRedis();

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

For production, configure graceful shutdown so the HTTP server stops accepting new requests and Redis connections close cleanly.

##### 15.3 Implement cache-aside

Suppose the application uses Prisma to retrieve students from PostgreSQL.

`src/services/student.service.js`:

```javascript
const { redis } = require("../config/redis");
const { prisma } = require("../config/prisma");

async function getStudent(id) {
  const cacheKey = `student:${id}`;

  // 1. Check Redis
  const cached = await redis.get(cacheKey);

  if (cached) {
    console.log("Cache HIT");
    return JSON.parse(cached);
  }

  console.log("Cache MISS");

  // 2. Fetch from PostgreSQL
  const student = await prisma.student.findUnique({
    where: {
      id: Number(id)
    }
  });

  if (!student) {
    return null;
  }

  // 3. Store result in Redis
  await redis.set(
    cacheKey,
    JSON.stringify(student),
    {
      EX: 300
    }
  );

  // 4. Return result
  return student;
}

module.exports = {
  getStudent
};
```

This example assumes the Prisma Client uses a standard configuration and that the returned object can be serialized. For Decimal, BigInt, or other special values, use a deliberate serialization strategy.

##### 15.4 Cache invalidation after an update

```javascript
async function updateStudent(id, data) {
  const student = await prisma.student.update({
    where: {
      id: Number(id)
    },
    data
  });

  await redis.del(`student:${id}`);

  return student;
}
```

Now the next read will fetch fresh data from PostgreSQL.

##### 15.5 What if Redis is unavailable?

This is a key production question.

Your application must decide whether Redis is:

- **Critical:** Requests should fail if Redis is unavailable.
- **Optional:** The application should bypass caching and query the database.

For ordinary cache-aside usage, a fallback is often sensible:

```javascript
async function getCachedStudent(id) {
  const key = `student:${id}`;

  try {
    const cached = await redis.get(key);

    if (cached) {
      return JSON.parse(cached);
    }
  } catch (error) {
    console.error("Cache read failed:", error);
  }

  const student = await prisma.student.findUnique({
    where: { id: Number(id) }
  });

  if (!student) return null;

  try {
    await redis.set(key, JSON.stringify(student), {
      EX: 300
    });
  } catch (error) {
    console.error("Cache write failed:", error);
  }

  return student;
}
```

This is a simplified fallback. A production implementation should also account for serialization, cache connection timeouts, logging, and protection against overwhelming PostgreSQL during Redis outages.


<a id="phase-11-section-19"></a>

### npm metadata, lockfiles and dependency categories

##### Q11.63. What is the difference between package.json and package-lock.json?

Node.js and npm

Interviewer: What is the difference between package.json and package-lock.json?

The candidate explained that both contain dependency information, but package-lock.json records exact dependency versions.

Correct.

**package.json**

This file contains project metadata and dependency declarations.

Example:

```json
{
    "name": "my-project",
    "version": "1.0.0",
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
    },
    "dependencies": {
        "express": "^5.0.0"
    },
    "devDependencies": {
        "nodemon": "^3.0.0"
    }
}
```

It contains:

- Project name.
- Project version.
- Scripts.
- Dependencies.
- Development dependencies.
- Other project configuration.

**package-lock.json**

This file is automatically maintained by npm.

It records the resolved dependency tree, including exact installed versions and dependency relationships.

For example:

```json
{
    "name": "my-project",
    "lockfileVersion": 3,
    "packages": {
        "node_modules/express": {
            "version": "5.0.0"
        }
    }
}
```

This is a simplified illustration.

**Why do we need package-lock.json?**

Imagine you and your teammate are developing the same project.

Your package.json contains:

```json
"express": "^5.0.0"
```

The `^` allows compatible versions within the specified major version range.

Without a lockfile, different installations could resolve to different compatible versions as releases change.

With package-lock.json, npm can reproduce the resolved dependency tree.

**Important follow-up: What does npm ci do?**

```bash
npm ci
```

It:

- Installs dependencies from the lockfile.
- Removes an existing node_modules directory first.
- Does not rewrite the package.json or package-lock.json files.
- Is suitable for reproducible CI/CD installations.

Interview-ready answer:

"package.json defines project metadata, scripts and dependency version requirements. package-lock.json records the exact resolved dependency versions and dependency tree. It helps maintain consistent installations across different developers' systems and CI/CD environments."

##### Q11.64. What is the difference between dependencies and devDependencies?

Interviewer: What is the difference between development dependencies and normal dependencies?

**Dependencies**

These are packages required by the application to run in its intended runtime environment.

Example:

```bash
npm install express
```

It is added under:

```json
"dependencies": {
    "express": "^5.0.0"
}
```

Examples:

- Express.
- React.
- Axios.
- Prisma Client.
- Database drivers.

**Development dependencies**

These are packages needed for development, testing, linting, building or other development workflows, but not necessarily needed at runtime.

Install:

```bash
npm install -D nodemon
```

It is added under:

```json
"devDependencies": {
    "nodemon": "^3.0.0"
}
```

Examples:

- Nodemon.
- ESLint.
- Prettier.
- Jest.
- Testing utilities.
- TypeScript compiler, depending on deployment setup.

**Comparison**

| Feature            | dependencies          | devDependencies          |
| ------------------ | --------------------- | ------------------------ |
| Main purpose       | Runtime requirements  | Development tooling      |
| Production runtime | Usually needed        | Usually not needed       |
| Installation       | `npm install package` | `npm install -D package` |
| Example            | Express               | Nodemon                  |

Important: Some build tools and compilers are development dependencies even though they are necessary during the production build process.

Interview-ready answer:

"Dependencies are packages required by the application at runtime. DevDependencies are packages needed during development, testing, linting or building, but generally aren't required by the production runtime."


<a id="phase-11-section-20"></a>

### Resilient external APIs

##### What is the difference between SSE and WebSockets?

| SSE                              | WebSockets                               |
| -------------------------------- | ---------------------------------------- |
| Server-to-client event streaming | Two-way communication                    |
| Uses HTTP-based event streaming  | Uses WebSocket protocol                  |
| Client sends requests separately | Both sides can send messages             |
| Useful for streamed responses    | Useful for interactive real-time systems |

Why did you use SSE?

DOMLens primarily needs to receive generated AI responses progressively. SSE fits that server-to-client streaming requirement.

##### What is exponential backoff?

Interview question: How do you handle temporary API failures?

Interview-ready answer

Exponential backoff is a retry strategy where the waiting time increases after each failed attempt.

Instead of retrying continuously, the application waits longer between attempts.

DOMLens uses retry limits and exponential backoff for temporary service-capacity failures such as HTTP 503.

**Example**

| Attempt | Waiting time |
| ------- | ------------ |
| 1       | 1 second     |
| 2       | 2 seconds    |
| 3       | 4 seconds    |
| 4       | 8 seconds    |

The general formula is:

\\[ T_n = T_0 \times 2^n \\]

Where:

- \\(T_0\\) is the initial waiting time.
- \\(n\\) is the retry number.

This is an illustrative formula; actual implementations may include a maximum delay and random jitter.

**What is jitter?**

Jitter adds randomness to retry delays.

It prevents many clients from retrying at exactly the same time.

##### What is a circuit breaker pattern?

Interview question: Explain circuit breaker in your project.

Interview-ready answer

The circuit breaker pattern is a reliability technique that temporarily stops requests to an unhealthy service to avoid repeatedly calling a provider that is failing.

DOMLens implements a cascading fallback approach across configured AI models. It can move away from models experiencing capacity errors or unavailable model IDs.

For example, it handles:

- HTTP 503 capacity failures using retry and fallback logic.
- HTTP 404 model-not-found errors by removing or skipping the unavailable model.

**Three common circuit breaker states**

Closed

Requests are allowed normally.

Open

Requests are blocked temporarily because of failures.

Half-open

A limited request tests whether the service has recovered.

These are the standard circuit-breaker states. Do not automatically claim that your implementation uses every textbook state transition unless you can point to the corresponding code. Your project audit specifically documents cascading fallbacks, retries, model ejection, and capacity recovery.


<a id="phase-11-section-21"></a>

### Upload and document processing boundaries

**What is Multer?**

Multer is Express middleware used to handle `multipart/form-data`, especially file uploads.

Why is it needed?

When a user uploads a PDF, the browser sends the file as part of a multipart form request.

Multer processes that incoming file and makes its data available to the backend.

A simplified example:

```javascript
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage()
});

app.post(
    "/upload-resume",
    upload.single("resume"),
    (req, res) => {
        console.log(req.file?.originalname);

        res.json({
            message: "File received"
        });
    }
);
```

Here:

- `multer()` creates the upload middleware.
- `memoryStorage()` stores the uploaded file in memory.
- `single("resume")` accepts one file from the form field named `resume`.
- `req.file` contains information about the uploaded file.

Interview question: Why did you use memory storage?

"Memory storage allows the backend to process an uploaded file directly from its buffer without first writing it to disk. This is useful for temporary processing, such as extracting text from a PDF. However, file size limits and memory usage need to be controlled."

**What is `pdf-parse`?**

`pdf-parse` is a library that extracts text from PDF documents.

For example, suppose the PDF contains:

```text
Name: Rahul

Skills:
JavaScript
Node.js
Express
PostgreSQL
```

The parser extracts text that the application can pass to its ATS analysis logic.

Important limitation:

A text extractor is not the same as an OCR engine. A PDF containing only scanned images may not provide extractable text without an OCR process.

**Axios**

Axios is an HTTP client library used by JavaScript applications.

The technical analysis identifies a custom Axios instance at `lib/api.ts` with request and response interceptors for JWT handling. 

Example:

```javascript
const response = await axios.get(
    "/api/v1/drives"
);
```

What is an interceptor?

An interceptor allows the application to process requests or responses centrally.

For example, a request interceptor can attach a JWT to outgoing requests.

```javascript
api.interceptors.request.use(config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization =
            `Bearer ${token}`;
    }

    return config;
});
```

This is an illustrative example. The actual token storage and interceptor implementation should be checked in `lib/api.ts`.


<a id="phase-11-section-22"></a>

### AI API contracts and unreliable generated output

**What is prompt engineering?** It is designing instructions, context, examples and an output contract for a model. A good request specifies the task, allowed inputs and expected structure; it still does not guarantee a correct result.

**What is hallucination?** Generated content can sound convincing while being incorrect or unsupported. Validate syntax/schema and business constraints, bound input/output sizes and timeouts, and handle errors before applying results. JSON parsing checks syntax; it does not validate required fields or the truth of their values. Keep model output separate from executable authority.

**How should model configuration be defended in an interview?** Show the configured provider/model, request schema, timeout, retry policy, fallback conditions and observed failure paths from the target version. A retry on one status code is not evidence of recovery from every API failure. Compare AI suggestions against deterministic checks and human review.

---

<a id="phase-12"></a>

## Phase 12 — FastAPI and Python Backend Development

**Objective:** Apply Python types and asynchronous programming to validated HTTP APIs.

**Sections:** [FastAPI Fundamentals and Request Lifecycle](#phase-12-section-1)

<a id="phase-12-section-1"></a>

### FastAPI Fundamentals and Request Lifecycle

#### What Does FastAPI Provide?

FastAPI is a Python web framework for HTTP APIs. A path operation maps a method and URL to a Python function. Type annotations and Pydantic models describe request data; the framework uses those declarations for validation and API documentation. An ASGI server such as Uvicorn runs the application.

Follow the request through routing, parameter parsing, dependencies, endpoint logic and response serialization. Framework validation does not replace business rules, database constraints or authorization.

#### Request Models, Response Models and Errors

Use separate input and output models when the fields differ. For example, a registration request may contain a password, but the response must not include it or its stored hash. A response model validates and filters returned data to the declared output shape. [Official response-model guide](https://fastapi.tiangolo.com/tutorial/response-model/).

This is an in-memory teaching example; it loses data on restart and is unsuitable as shared storage across multiple server workers.

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI()

class StudentCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)

class StudentRead(BaseModel):
    id: int
    name: str

students: dict[int, StudentRead] = {}

@app.post("/students", response_model=StudentRead, status_code=201)
def create_student(payload: StudentCreate) -> StudentRead:
    name = payload.name.strip()
    if not name:
        raise HTTPException(status_code=422, detail="Name must not be blank")
    student = StudentRead(id=len(students) + 1, name=name)
    students[student.id] = student
    return student

@app.get("/students/{student_id}", response_model=StudentRead)
def read_student(student_id: int) -> StudentRead:
    student = students.get(student_id)
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student
```

The model checks length; the endpoint also rejects a whitespace-only name. A missing student produces 404 rather than an unhandled lookup error. A production implementation delegates persistence to the database phase's transaction and uniqueness rules.

#### Dependencies, Routers and Resource Lifetime

A dependency supplies a reusable requirement such as validated pagination, a database session or the current user. FastAPI resolves declared dependencies before running the endpoint. A dependency using `yield` can arrange resource cleanup. [Official dependency guide](https://fastapi.tiangolo.com/tutorial/dependencies/).

Use `APIRouter` to group endpoints by feature. Keep routing, business decisions and persistence separable so business behavior can be tested without a live HTTP request. Reuse an engine/pool, but give each request an appropriate session lifetime; do not share one mutable session among concurrent requests.

#### When Should an Endpoint Use async def?

Use `async def` when calling awaitable I/O libraries. A blocking database call inside an async endpoint can stall the event loop. Ordinary synchronous path operations are run through a thread pool; that does not make their database driver asynchronous. CPU-intensive analysis may require a separate process or worker. [Official concurrency guide](https://fastapi.tiangolo.com/async/).

#### Integration and Testing

Complete the SQLAlchemy lesson before adding database persistence. Use the security phase for JWT verification and per-resource authorization. Use the testing phase to cover successful requests, invalid input, missing records and unauthorized access. Override dependencies in tests to isolate external services.

Small post-response background tasks can suit best-effort work. Durable jobs need persistent scheduling, retries and failure monitoring; a process crash must not silently lose business-critical work.

#### FastAPI Interview Check

1. **What is the difference between a Pydantic model and an ORM model?** One describes validated data at an application boundary; the other maps persistence. They may represent different fields and lifetimes.
2. **Why use dependency injection?** It makes resource provisioning, authorization prerequisites and test substitution explicit.
3. **Does async always make code faster?** No. It helps concurrency during suitable waiting; CPU work and blocking libraries need separate consideration.
4. **How would you structure a CRUD service?** Router → service → persistence, with input/output models, request-scoped sessions, explicit errors and tests.

**Practice:** Implement create/read/list student endpoints with bounded pagination, database persistence and tests. Add authorization after studying security. Explain each request's session and transaction lifecycle.

---

---

<a id="phase-13"></a>

## Phase 13 — JWT Authentication, Authorization and Security

**Objective:** Apply authentication, authorization, browser protections and secret management.

**Sections:** [Authentication vs Authorization](#phase-13-section-1) · [Password storage and bcrypt](#phase-13-section-2) · [JWT authentication](#phase-13-section-3) · [Access tokens and refresh tokens](#phase-13-section-4) · [Session-based authentication](#phase-13-section-5) · [Cookies and browser security](#phase-13-section-6) · [OAuth 2.0 and OpenID Connect](#phase-13-section-7) · [Role-based access control (RBAC)](#phase-13-section-8) · [Authentication middleware](#phase-13-section-9) · [Common web security vulnerabilities](#phase-13-section-10) · [CORS, security headers and Helmet](#phase-13-section-11) · [Rate limiting and brute-force protection](#phase-13-section-12) · [Password reset and email verification](#phase-13-section-13) · [Secure authentication architecture](#phase-13-section-14) · [Complete Express + PostgreSQL + Prisma authentication implementation](#phase-13-section-15) · [Advanced security interview questions](#phase-13-section-16) · [Same-Origin Policy and CORS](#phase-13-section-17) · [Password-derivation follow-up: PBKDF2](#phase-13-section-18)

<a id="phase-13-section-1"></a>

### Authentication vs Authorization

#### Q13.1. What is authentication?

Authentication is the process of verifying the identity of a user.

It answers:

**Who are you?**

Example: A student enters:

```text
Email: chirag@example.com
Password: ********
```

The backend verifies the credentials and establishes that the user is Chirag.

Common authentication methods:

- Password-based authentication
- OTP-based authentication
- Multi-factor authentication
- Biometric authentication
- OAuth-based sign-in
- Passkeys

#### Q13.2. What is authorization?

Authorization determines what an authenticated user is allowed to do.

It answers:

**What are you allowed to access?**

Example:

| Action                   | Student | Company | Admin             |
| ------------------------ | ------- | ------- | ----------------- |
| View own profile         | Yes     | Yes     | Yes               |
| Apply for a drive        | Yes     | No      | Yes, if permitted |
| Create a drive           | No      | Yes     | Yes               |
| View all users           | No      | No      | Yes               |
| Manage platform settings | No      | No      | Yes               |

A user can be authenticated but not authorized to access a particular resource.

#### Q13.3. Difference between authentication and authorization?

| Authentication              | Authorization                |
| --------------------------- | ---------------------------- |
| Verifies identity           | Checks permissions           |
| Establishes who the user is | Determines allowed actions   |
| Example: Login              | Example: Admin-only endpoint |
| Answers "Who are you?"      | Answers "What can you do?"   |

**Interview answer:** Authentication verifies who the user is, while authorization determines which resources and operations that user is permitted to access. A successful login does not automatically grant access to every API endpoint.

#### Q13.4. What is an authentication factor?

Authentication factors are categories of evidence used to verify identity.

Three common categories:

1. **Something you know:** Password or PIN.
2. **Something you have:** Phone, security key, authenticator device.
3. **Something you are:** Fingerprint or facial biometric.

Multi-factor authentication (MFA) uses two or more different factor categories.

For example, a password plus an authenticator-app code is MFA. Two passwords are not MFA because they belong to the same factor category.

<a id="phase-13-section-2"></a>

### Password storage and bcrypt

#### Q13.5. Should we store passwords in a database?

We store password verifiers, not plaintext passwords.

Never store passwords like this:

```text
email: chirag@example.com
password: chirag123
```

If an attacker obtains the database, plaintext passwords are immediately exposed.

Instead, use a dedicated password-hashing algorithm.

#### Q13.6. What is hashing?

Hashing transforms input data into a fixed-format output using a hash function.

```text
Input:
hello123

Hash:
<hash-output>
```

Important properties:

- Deterministic for a given input and algorithm.
- One-way by design.
- Small input changes generally produce very different outputs.
- A cryptographic hash is not encryption.

#### Q13.7. Hashing vs encryption?

| Hashing                        | Encryption                                      |
| ------------------------------ | ----------------------------------------------- |
| Designed to be one-way         | Designed to be reversible with a key            |
| Used for password verification | Used to protect recoverable data                |
| No decryption operation        | Decryption is possible with the appropriate key |
| Example: Argon2id, bcrypt      | Example: AES-GCM                                |

Do not use ordinary fast hashes such as MD5 or SHA-256 alone for password storage. Password hashing needs to be deliberately slow and resistant to large-scale guessing attacks.

#### Q13.8. What is bcrypt?

bcrypt is a password-hashing algorithm designed to make password guessing computationally expensive.

It uses a configurable work factor, commonly called the cost factor. Higher cost means more computation per password verification.

```javascript
const bcrypt = require("bcrypt");

const password = "StrongPassword123!";

const hash = await bcrypt.hash(password, 12);

console.log(hash);
```

A bcrypt hash includes information such as:

- Algorithm identifier
- Cost factor
- Salt
- Derived hash

#### Q13.9. What is a salt?

A salt is a unique random value used when hashing a password.

Imagine two users have the same password:

```text
User A: password123
User B: password123
```

Without unique salts, their stored hashes could be identical. With unique salts, their resulting password hashes differ.

Benefits:

- Prevents identical passwords from producing identical stored hashes.
- Makes precomputed rainbow-table attacks much less useful.
- Makes each password hash independently expensive to guess.

bcrypt generates and stores the salt information as part of its encoded hash.

#### Q13.10. How do you verify a password?

You do not decrypt the hash. Instead, use bcrypt comparison:

```javascript
const isValid = await bcrypt.compare(
  "StrongPassword123!",
  storedHash
);

console.log(isValid);
```

Output:

```text
true
```

If the password is wrong, the result is `false`.

The library extracts the stored salt and cost information and checks the candidate password against the stored hash.

#### Q13.11. What are Argon2 and scrypt?

Both are password-hashing alternatives.

- **Argon2id:** A modern password-hashing choice that combines resistance to different attack approaches and supports memory and computation cost parameters.
- **scrypt:** A memory-hard password-hashing algorithm.
- **bcrypt:** A widely used adaptive password-hashing algorithm.

For new systems, Argon2id is often a strong default where available and properly configured. bcrypt remains widely encountered in Node.js applications.

#### Q13.12. Why not use SHA-256 for passwords?

SHA-256 is designed to be fast. Attackers can test huge numbers of password guesses quickly using specialized hardware.

Password-hashing algorithms deliberately add computational and, where appropriate, memory cost to slow down guessing.

**Interview answer:** Passwords should be stored using a dedicated password-hashing algorithm such as Argon2id or bcrypt, with unique salts and suitable cost parameters. They should never be stored in plaintext or reversibly encrypted as a substitute for password hashing.

<a id="phase-13-section-3"></a>

### JWT authentication

#### Q13.13. What is JWT?

JWT stands for **JSON Web Token**.

It is a compact token format used to transmit claims between parties. In web applications, JWTs are commonly used to represent authenticated identity and related claims.

A JWT has three sections:

```text
HEADER.PAYLOAD.SIGNATURE
```

#### Q13.14. Explain the three parts of JWT.

**1. Header**

Contains metadata about the token.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- `alg`: Signing algorithm.
- `typ`: Token type.

**2. Payload**

Contains claims.

```json
{
  "sub": "101",
  "email": "chirag@example.com",
  "role": "STUDENT",
  "iat": 1790000000,
  "exp": 1790000900
}
```

Common claims:

| Claim | Meaning                 |
| ----- | ----------------------- |
| `sub` | Subject, often user ID  |
| `iss` | Issuer                  |
| `aud` | Audience                |
| `iat` | Issued at               |
| `exp` | Expiration              |
| `nbf` | Not valid before        |
| `jti` | Unique token identifier |

**3. Signature**

The signature is used to verify that the token was signed by a party holding the appropriate signing key and that the signed content has not been altered.

With HS256, the signing process is conceptually:

```text
HMAC-SHA256(
  secret,
  base64url(header) + "." + base64url(payload)
)
```

The signature provides integrity and authenticity under the security assumptions of the algorithm and key management.

#### Q13.15. Is JWT encrypted?

No. A typical signed JWT is encoded, not encrypted.

Do not put passwords, secret keys, or sensitive personal information in a normal JWT payload. Anyone who obtains the token can decode its header and payload, even though they cannot validly alter the signed content without the signing key.

#### Q13.16. What is the difference between JWT decoding and verification?

- **Decoding:** Reads the token's contents without proving authenticity.
- **Verification:** Validates the signature and configured claims such as expiration, issuer, audience, and permitted algorithm.

Never use decoded-but-unverified token contents to authorize an operation.

#### Q13.17. How do you sign and verify a JWT?

A signing example:

```typescript
const token = jwt.sign(
  {
    role: user.role
  },
  process.env.JWT_ACCESS_SECRET!,
  {
    subject: user.id,
    expiresIn: "15m",
    issuer: "recruitment-api",
    audience: "recruitment-client"
  }
);
```

Verify:

```typescript
const decoded = jwt.verify(
  token,
  process.env.JWT_ACCESS_SECRET!,
  {
    issuer: "recruitment-api",
    audience: "recruitment-client",
    algorithms: ["HS256"]
  }
);
```

The allowed algorithm should match the algorithm used to sign the token. Do not blindly trust an algorithm selected from an untrusted token header.

#### Q13.18. What is a stateless authentication system?

A stateless authentication system does not need to look up a server-side session for every authenticated request.

For example, a signed JWT can carry the user ID and expiration. The server verifies the token cryptographically.

However, stateless authentication does not mean there is no server-side state anywhere. Applications may still maintain refresh-token records, revocation lists, account status, and authorization data.

<a id="phase-13-section-4"></a>

### Access tokens and refresh tokens

#### Q13.19. What is an access token?

An access token is a credential presented to an API to access protected resources.

Typical properties:

- Short lifetime.
- Used frequently.
- Contains identity and limited claims.
- Should be protected from theft.

Example lifetime: 5–15 minutes, depending on security and usability requirements.

#### Q13.20. What is a refresh token?

A refresh token is a longer-lived credential used to obtain a new access token without requiring the user to enter their password again.

Example:

```text
Access token: 15 minutes
Refresh token: 7 days
```

These are illustrative lifetimes, not universal rules.

#### Q13.21. Why use both tokens?

If an access token is stolen, a short expiration limits its useful lifetime.

A refresh token allows the legitimate user to continue their session without repeatedly logging in.

Typical flow:

1. User logs in.
2. Server issues access and refresh tokens.
3. Client uses access token for API requests.
4. Access token expires.
5. Client sends refresh token to the refresh endpoint.
6. Server validates the refresh token.
7. Server issues a new access token and, preferably, rotates the refresh token.
8. Old refresh token is invalidated.

#### Q13.22. What is refresh-token rotation?

Refresh-token rotation means issuing a new refresh token each time an existing refresh token is used successfully.

The old token is invalidated.

Why?

If an attacker steals an old refresh token and attempts to reuse it after the legitimate user has refreshed, the server can detect suspicious reuse and revoke the relevant token family or session.

A robust design stores refresh-token identifiers or hashes server-side and tracks token-family relationships.

#### Q13.23. Should refresh tokens be stored in the database?

A common secure design is to store a hash of the refresh token or a server-side token identifier, along with:

- User ID.
- Session/device identifier.
- Expiration.
- Revocation status.
- Token-family information.
- Creation and last-use timestamps.

Do not store raw long-lived bearer credentials in a database if you can store a verifier instead.


<a id="phase-13-section-5"></a>

### Session-based authentication

#### Q13.24. What is a session?

A session represents a user's authenticated state across multiple HTTP requests.

HTTP is stateless: each request is independent. Sessions provide a way for a server to remember a user's authentication state.

Example:

1. User logs in.
2. Server creates a session.
3. Server stores session data.
4. Server sends a session identifier to the browser.
5. Browser sends that identifier with subsequent requests.
6. Server looks up the session and identifies the user.

#### Q13.25. Where can sessions be stored?

Common options:

- In-memory storage.
- Redis.
- Database.
- Dedicated session store.

For production applications with multiple backend instances, a shared store such as Redis is preferable to process-local memory.

Imagine:

```text
             Load Balancer
             /     |     \
          API 1  API 2  API 3
```

If the session exists only in API 1's memory, a request routed to API 2 may not find it.

A shared Redis session store solves this issue.

#### Q13.26. JWT vs session: which should you use?

Use sessions when:

- Server-side revocation is important.
- You want centralized session state.
- Browser-based authentication is your primary use case.
- You need convenient device/session management.

Use JWT access tokens when:

- Multiple APIs need to verify tokens.
- You need portable signed claims.
- Stateless access-token verification is useful.
- You have a deliberate token expiration and revocation strategy.

You can also combine them: short-lived JWT access tokens with server-tracked refresh sessions.

<a id="phase-13-section-6"></a>

### Cookies and browser security


#### Q13.27. What is HttpOnly?

The `HttpOnly` attribute prevents JavaScript running in the page from reading the cookie through APIs such as `document.cookie`.

Why is it useful?

If an attacker exploits an XSS vulnerability, HttpOnly can make it harder to steal a session cookie through JavaScript.

It does not stop the browser from automatically sending the cookie with matching requests, and it does not prevent every consequence of XSS.

#### Q13.28. What is Secure?

The `Secure` attribute tells the browser to send the cookie only over secure HTTPS connections, except for limited localhost development behavior.

Production authentication cookies should normally use `Secure`.

#### Q13.29. What is SameSite?

`SameSite` controls when the browser sends a cookie with cross-site requests.

| Attribute | Behavior                                                   |
| --------- | ---------------------------------------------------------- |
| Strict    | Restricts sending cookies in cross-site contexts           |
| Lax       | Allows cookies in certain top-level cross-site navigations |
| None      | Allows cross-site cookie sending; requires Secure          |

Example:

```http
Set-Cookie: refreshToken=abc; HttpOnly; Secure; SameSite=Lax; Path=/ 
```

The right setting depends on your frontend/backend domain arrangement and authentication flow.

#### Q13.30. Cookie vs localStorage?

| Cookie                                                      | localStorage                                        |
| ----------------------------------------------------------- | --------------------------------------------------- |
| Automatically sent in matching HTTP requests                | Not automatically sent                              |
| Supports HttpOnly                                           | JavaScript-accessible                               |
| Supports Secure and SameSite                                | No equivalent cookie attributes                     |
| Has expiration controls                                     | Usually persists until cleared                      |
| Can help protect tokens from direct JS reads using HttpOnly | Tokens are exposed to scripts running in the origin |

A useful browser architecture is to keep sensitive session or refresh credentials in appropriately configured HttpOnly cookies.

Storing long-lived bearer tokens in localStorage increases exposure if an attacker achieves script execution through XSS.

#### Q13.31. What is CSRF?

CSRF stands for **Cross-Site Request Forgery**.

It occurs when an attacker tricks a victim's browser into making an unwanted authenticated request to a website where the victim is already logged in.

Example:

A user is logged into a banking application. A malicious site attempts to cause the browser to submit a money-transfer request.

Because browsers automatically attach matching cookies, the request may carry the user's session.

**How do you prevent CSRF?**

1. SameSite cookie policy.
2. CSRF tokens.
3. Origin and Referer validation where appropriate.
4. Avoid unsafe state-changing GET endpoints.
5. Carefully designed CORS policies.

A CSRF token is usually a separate unpredictable value that the client must provide with state-changing requests. The server validates it.

Important: CORS alone is not a complete CSRF defense.

<a id="phase-13-section-7"></a>

### OAuth 2.0 and OpenID Connect

#### Q13.32. What is OAuth 2.0?

OAuth 2.0 is an authorization framework that allows an application to obtain limited access to resources on behalf of a user or client.

Example: You want to allow a recruitment application to access selected information from a third-party account without giving it the account password.

OAuth lets the user grant specific permissions to the application.

#### Q13.33. What is OpenID Connect?

OpenID Connect (OIDC) is an identity layer built on OAuth 2.0.

It enables a client application to authenticate a user and obtain identity information through an ID token.

Key distinction:

- **OAuth 2.0:** Authorization and delegated access.
- **OpenID Connect:** Authentication and identity information built on OAuth 2.0.

#### Q13.34. What is an ID token?

An ID token is a signed token issued by an OpenID Connect provider that communicates information about the authenticated user to the client.

It commonly contains claims such as:

```json
{
  "iss": "https://identity.example.com",
  "sub": "user-123",
  "aud": "my-client-id",
  "exp": 1790000900,
  "iat": 1790000000
}
```

It is not the same as an OAuth access token.

- ID token: Information about the authenticated user.
- Access token: Credential for accessing a protected resource.

#### Q13.35. What is the Authorization Code Flow?

This is a common OAuth/OIDC flow for web applications.

Simplified steps:

1. Client redirects user to the identity provider.
2. User authenticates.
3. User grants the requested permissions.
4. Identity provider redirects the user back with an authorization code.
5. Client exchanges the code for tokens through the token endpoint.
6. Client uses the access token for authorized API access.

Modern public clients, including browser-based and mobile applications, should use PKCE.

#### Q13.36. What is PKCE?

PKCE stands for **Proof Key for Code Exchange**.

It protects the authorization-code exchange against certain interception attacks.

It uses:

- **Code verifier:** A high-entropy secret generated by the client.
- **Code challenge:** A derived value sent in the authorization request.

During token exchange, the client proves possession of the original verifier.

#### Q13.37. Difference between OAuth and JWT?

They solve different problems.

| OAuth 2.0                                    | JWT                                         |
| -------------------------------------------- | ------------------------------------------- |
| Authorization framework                      | Token format                                |
| Defines authorization flows                  | Defines a compact claims representation     |
| Can issue access tokens in different formats | Can represent access tokens or other claims |
| Does not require JWT                         | Can be used without OAuth                   |

An OAuth access token may be a JWT or an opaque token.

<a id="phase-13-section-8"></a>

### Role-based access control (RBAC)

#### Q13.38. What is RBAC?

Role-Based Access Control is an authorization model where permissions are assigned to roles, and users are assigned roles.

Example:

```text
STUDENT
  ├── VIEW_OWN_PROFILE
  ├── APPLY_FOR_DRIVE
  └── VIEW_OWN_APPLICATIONS

COMPANY
  ├── CREATE_DRIVE
  ├── UPDATE_OWN_DRIVE
  └── VIEW_APPLICATIONS_FOR_OWN_DRIVES

ADMIN
  ├── MANAGE_USERS
  ├── MANAGE_COMPANIES
  └── MANAGE_PLATFORM
```

Instead of hardcoding permissions independently for every user, you associate permissions with roles.

#### Q13.39. How do you implement RBAC in Express?

First, authentication middleware identifies the user. Then authorization middleware checks the role.

```typescript
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

function allowRoles(...roles: string[]) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required"
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access forbidden"
      });
    }

    next();
  };
}
```

Use:

```javascript
app.post(
  "/api/drives",
  authenticate,
  allowRoles("COMPANY", "ADMIN"),
  createDrive
);
```

This allows company users and admins to create drives.

#### Q13.40. Difference between 401 and 403?

| HTTP status      | Meaning                                     |
| ---------------- | ------------------------------------------- |
| 401 Unauthorized | Authentication is missing or invalid        |
| 403 Forbidden    | Request is understood, but access is denied |

Example:

- No valid token: `401`.
- Valid student token attempting an admin-only operation: `403`.

#### Q13.41. What is object-level authorization?

RBAC alone is insufficient.

Suppose a student has a valid role of `STUDENT`. Can the student access any student profile by changing the URL?

```http
GET /api/students/102
```

No. The server must check whether the authenticated user is permitted to access that particular resource.

Example:

```javascript
const student = await prisma.student.findUnique({
  where: { id: requestedStudentId }
});

if (!student) {
  return res.status(404).json({
    message: "Student not found"
  });
}

if (
  req.user.role === "STUDENT" &&
  student.userId !== req.user.id
) {
  return res.status(403).json({
    message: "You cannot access another student's profile"
  });
}
```

This prevents insecure direct object reference (IDOR) vulnerabilities.

**Interview-ready answer:** Authorization must validate not only the user's role but also their relationship to the specific resource being accessed.

<a id="phase-13-section-9"></a>

### Authentication middleware

#### Q13.42. What is authentication middleware?

Authentication middleware verifies credentials attached to incoming requests and makes the authenticated identity available to later handlers.

```typescript
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Missing access token"
    });
  }

  const token = authHeader.substring(7);

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!,
      {
        algorithms: ["HS256"],
        issuer: "recruitment-api",
        audience: "recruitment-client"
      }
    ) as jwt.JwtPayload;

    if (
      typeof decoded.sub !== "string" ||
      typeof decoded.role !== "string"
    ) {
      return res.status(401).json({
        message: "Invalid token claims"
      });
    }

    req.user = {
      id: decoded.sub,
      role: decoded.role
    };

    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}
```

The middleware:

1. Reads the Authorization header.
2. Checks the Bearer scheme.
3. Extracts the token.
4. Verifies its signature and claims.
5. Extracts trusted identity information.
6. Adds the identity to the request.
7. Calls `next()`.

#### Q13.43. What is the Bearer token format?

A protected API request commonly looks like:

```http
GET /api/students/me HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
```

Bearer means possession of the token is sufficient to present that credential. Therefore, tokens must be protected from leakage.

<a id="phase-13-section-10"></a>

### Common web security vulnerabilities

This section is particularly important for backend applications handling sensitive user data.

#### Q13.44. What is XSS?

XSS stands for **Cross-Site Scripting**.

It occurs when an attacker injects malicious scripts into content that is executed in another user's browser.

Example of unsafe rendering:

```javascript
element.innerHTML = userInput;
```

If `userInput` contains malicious HTML and JavaScript, it could execute in the browser.

Potential consequences:

- Unauthorized actions as the victim.
- Access to page data.
- Manipulation of page content.
- Theft of accessible tokens or information.
- Phishing.

Types of XSS:

| Type          | Explanation                                           |
| ------------- | ----------------------------------------------------- |
| Stored XSS    | Malicious input is stored and later displayed         |
| Reflected XSS | Malicious input is reflected in an immediate response |
| DOM-based XSS | Client-side JavaScript creates the vulnerability      |

**How to prevent XSS?**

1. Escape untrusted content when rendering HTML.
2. Prefer safe text APIs such as `textContent`.
3. Avoid unsafe `innerHTML`.
4. Sanitize HTML when rich HTML input is required.
5. Use a suitable Content Security Policy.
6. Use HttpOnly cookies for sensitive session credentials.
7. Keep dependencies updated.

React escapes ordinary text interpolation by default, but unsafe APIs such as `dangerouslySetInnerHTML` can introduce XSS.

#### Q13.45. What is SQL injection?

SQL injection occurs when untrusted input changes the meaning of a SQL statement.

Unsafe:

```javascript
const query = `
  SELECT * FROM users
  WHERE email = '${email}'
`;
```

Safer:

```javascript
const user = await prisma.user.findUnique({
  where: {
    email
  }
});
```

Or parameterized SQL:

```javascript
const result = await prisma.$queryRaw`
  SELECT * FROM users
  WHERE email = ${email}
`;
```

The principle is to separate SQL structure from user-provided values.

#### Q13.46. What is NoSQL injection?

NoSQL injection occurs when untrusted input manipulates the structure or operators of a NoSQL query.

Example of unsafe input handling in MongoDB:

```javascript
const user = await User.findOne({
  email: req.body.email,
  password: req.body.password
});
```

If the application accepts objects instead of expected strings, an attacker may attempt operator injection such as:

```json
{
  "email": {
    "$ne": null
  }
}
```

Safer approach:

- Validate the request schema.
- Require expected primitive types.
- Never accept arbitrary MongoDB query objects from users.
- Build database filters from validated fields.
- Use password hashing and password comparison rather than querying for plaintext passwords.

#### Q13.47. What is IDOR?

IDOR stands for **Insecure Direct Object Reference**.

It happens when an application uses an object identifier but fails to check whether the current user is authorized to access that object.

Example:

```http
GET /api/applications/101
```

A student changes the ID to `102` and retrieves another student's application.

Solution: Check resource ownership or permission at the backend for every sensitive resource operation.

Never rely on hiding IDs or buttons in the frontend.

#### Q13.48. What is SSRF?

SSRF stands for **Server-Side Request Forgery**.

It happens when an attacker tricks the server into making requests to unintended destinations.

Example: A resume-import endpoint accepts a URL:

```json
{
  "url": "http://internal-service/admin"
}
```

If the server fetches arbitrary URLs, an attacker might target internal services or cloud metadata endpoints.

Defenses:

- Allowlist permitted destinations.
- Reject private and loopback IP ranges where not required.
- Validate DNS resolution and redirects.
- Restrict outbound network access.
- Set timeouts and response-size limits.
- Avoid unrestricted URL fetching.

#### Q13.49. What is the difference between IDOR and broken access control?

IDOR is one common example of broken access control.

Broken access control is the broader category: an application does not correctly enforce permissions over resources or operations.

<a id="phase-13-section-11"></a>

### CORS, security headers and Helmet


#### Q13.50. What is Helmet?

Helmet is Express middleware that sets various HTTP security headers.

Install:

```bash
npm install helmet
```

Use:

```javascript
import helmet from "helmet";

app.use(helmet());
```

Helmet helps configure headers such as:

- Content-Security-Policy.
- X-Content-Type-Options.
- Strict-Transport-Security, when appropriately configured.
- X-Frame-Options or related frame policies.
- Referrer-Policy.

Helmet does not automatically fix every security vulnerability. For example, a Content Security Policy requires appropriate application-specific configuration.

#### Q13.51. What is Content Security Policy?

CSP is a browser security mechanism that controls which sources are allowed to load scripts, styles, images, and other resources.

Example:

```http
Content-Security-Policy: default-src 'self'; script-src 'self'
```

This is an illustrative restrictive policy. Real applications may need additional allowed sources and directives.

CSP can reduce the impact of certain XSS attacks, but it is not a substitute for safe rendering and input handling.

<a id="phase-13-section-12"></a>

### Rate limiting and brute-force protection

#### Q13.52. What is a brute-force login attack?

A brute-force attack attempts many password combinations until the correct password is discovered.

Example:

```text
admin@example.com / password1
admin@example.com / password2
admin@example.com / password3
...
```

Defenses:

- Rate limiting.
- Strong password hashing.
- MFA.
- Suspicious login detection.
- Account-level throttling.
- Monitoring and alerts.
- Secure recovery processes.

#### Q13.53. How do you rate-limit login requests?

Using Redis-backed rate limiting allows multiple API instances to share counters.

Example using the limiter setup from Phase 9:

```javascript
app.use(
  "/api/auth/login",
  loginLimiter,
  loginRouter
);
```

For login protection, consider both IP-based and account-identifier-based limits. Avoid permanent account lockouts that attackers can use to deny service to legitimate users.

#### Q13.54. What is account enumeration?

Account enumeration occurs when an attacker discovers whether an email address or username exists.

Bad responses:

```text
Email does not exist
```

versus:

```text
Incorrect password
```

These responses reveal whether the account exists.

Better response:

```text
Invalid email or password
```

For password-reset endpoints, use a similarly generic message such as:

```text
If an account exists, a reset link will be sent.
```

<a id="phase-13-section-13"></a>

### Password reset and email verification

#### Q13.55. How does password reset work?

A secure password-reset workflow:

1. User submits their email.
2. Backend returns a generic response.
3. If the account exists, generate a cryptographically random token.
4. Store a hash of the token and an expiration time.
5. Send a reset link by email.
6. User opens the link.
7. Backend verifies the token and expiration.
8. User sets a new password.
9. Backend hashes the new password.
10. Backend invalidates the reset token.
11. Backend revokes existing sessions or refresh tokens as appropriate.

#### Q13.56. Why store a hash of the reset token?

The reset token is a bearer credential. Anyone possessing it may be able to reset the password.

If the database is compromised, storing only a hash makes it harder for an attacker to use the token directly.

Generate the token using Node's cryptographic module:

```javascript
import crypto from "crypto";

const resetToken = crypto.randomBytes(32).toString("hex");

const resetTokenHash = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");
```

Store `resetTokenHash` in the database.

Send `resetToken` to the user's email.

When the user submits it, hash the submitted token and compare it to the stored hash.

#### Q13.57. What is email verification?

Email verification confirms that a user can access the email address they registered with.

A common workflow:

1. User registers.
2. Backend generates a random verification token.
3. Token hash and expiration are stored.
4. Verification link is emailed.
5. User opens the link.
6. Backend validates and consumes the token.
7. Account is marked verified.

A verification token should be:

- Random and unpredictable.
- Single-use.
- Short-lived.
- Stored safely.
- Bound to the intended account.

#### Q13.58. What is MFA?

Multi-factor authentication adds an additional factor to login.

Examples:

- Password + authenticator-app TOTP.
- Password + hardware security key.
- Passkey-based authentication.

TOTP means Time-Based One-Time Password. It generates short-lived codes based on a shared secret and time interval.

For stronger phishing resistance, WebAuthn/passkeys and hardware security keys are important options.

<a id="phase-13-section-14"></a>

### Secure authentication architecture

Before coding, understand the complete system.

##### 14.1 Recommended database structure

For our recruitment platform, we need:

**User**

| Field        | Purpose                   |
| ------------ | ------------------------- |
| id           | Unique identifier         |
| email        | Login identity            |
| passwordHash | Password verifier         |
| role         | STUDENT, COMPANY or ADMIN |
| isVerified   | Email verification status |
| createdAt    | Registration timestamp    |

**RefreshSession**

| Field     | Purpose              |
| --------- | -------------------- |
| id        | Session identifier   |
| userId    | Associated user      |
| tokenHash | Hashed refresh token |
| expiresAt | Expiration           |
| revokedAt | Revocation timestamp |
| createdAt | Creation timestamp   |

**PasswordResetToken**

| Field     | Purpose               |
| --------- | --------------------- |
| id        | Reset record          |
| userId    | Associated user       |
| tokenHash | Hashed reset token    |
| expiresAt | Expiration            |
| usedAt    | Consumption timestamp |

##### 14.2 Authentication request lifecycle

**Registration**

```text
Browser
  ↓
POST /api/auth/register
  ↓
Express validation
  ↓
Check email uniqueness
  ↓
Hash password
  ↓
PostgreSQL user record
  ↓
Create email verification token
  ↓
Send verification email
```

**Login**

```text
Browser
  ↓
POST /api/auth/login
  ↓
Validate email and password
  ↓
bcrypt/Argon2 password comparison
  ↓
Generate access token
  ↓
Create refresh session
  ↓
Set refresh token cookie
  ↓
Return access token
```

**Protected API request**

```text
Browser
  ↓
Authorization: Bearer <access_token>
  ↓
Express authentication middleware
  ↓
Verify signature and claims
  ↓
Authorization middleware
  ↓
Resource ownership check
  ↓
Controller
  ↓
Service
  ↓
PostgreSQL / Prisma
```

**Token refresh**

```text
Browser
  ↓
POST /api/auth/refresh
  ↓
Read refresh cookie
  ↓
Hash and look up stored token
  ↓
Validate expiry and revocation
  ↓
Rotate refresh token
  ↓
Issue new access token
  ↓
Set new refresh cookie
```

##### 14.3 Important security design decisions

1. Access tokens should have short lifetimes.
2. Refresh tokens should be protected and revocable.
3. Store refresh-token hashes rather than raw values.
4. Use HTTPS in production.
5. Validate all request bodies.
6. Enforce authorization at the backend.
7. Use HttpOnly, Secure, and suitable SameSite cookie attributes.
8. Protect cookie-authenticated state-changing requests against CSRF.
9. Rate-limit authentication endpoints.
10. Avoid revealing whether accounts exist.
11. Revoke sessions after password changes when appropriate.
12. Never log passwords, access tokens, or refresh tokens.

<a id="phase-13-section-15"></a>

### Complete Express + PostgreSQL + Prisma authentication implementation

Now let's implement a simplified but realistic authentication system.

The example uses:

- Express
- TypeScript
- PostgreSQL
- Prisma
- bcrypt
- jsonwebtoken
- Redis (optional for additional revocation/cache workflows)

We'll implement:

1. Registration.
2. Login.
3. Access token generation.
4. Refresh token rotation.
5. Logout.
6. Protected profile endpoint.
7. Role-based authorization.

This is an educational foundation. Production deployment additionally needs email verification, password recovery, CSRF protection, security monitoring, and careful cookie/domain configuration.

##### 15.1 Install dependencies

```bash
mkdir secure-auth-api
cd secure-auth-api

npm init -y

npm install express dotenv bcrypt jsonwebtoken cookie-parser zod
npm install @prisma/client

npm install -D prisma typescript tsx
npm install -D @types/node @types/express
npm install -D @types/bcrypt @types/jsonwebtoken @types/cookie-parser
```

Initialize:

```bash
npx tsc --init
npx prisma init
```

##### 15.2 Project structure

```text
secure-auth-api/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   └── prisma.ts
│   │
│   ├── middleware/
│   │   ├── authenticate.ts
│   │   └── authorize.ts
│   │
│   ├── services/
│   │   └── auth.service.ts
│   │
│   ├── controllers/
│   │   └── auth.controller.ts
│   │
│   ├── routes/
│   │   └── auth.routes.ts
│   │
│   └── app.ts
│
├── .env
├── .gitignore
└── package.json
```

##### 15.3 Environment variables

`.env`:

```dotenv
DATABASE_URL="postgresql://postgres:password@localhost:5432/secure_auth"

JWT_ACCESS_SECRET="replace-with-a-long-random-secret"
JWT_REFRESH_SECRET="replace-with-another-long-random-secret"

PORT=3000
NODE_ENV=development
```

Generate secure random secrets rather than using the illustrative strings above:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Generate separate secrets for access and refresh tokens.

Never commit `.env` to Git.

`.gitignore`:

```text
node_modules/
.env
dist/
```

##### 15.4 Prisma schema

`prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  STUDENT
  COMPANY
  ADMIN
}

model User {
  id           String   @id @default(uuid())
  email        String   @unique
  passwordHash String
  role         Role     @default(STUDENT)
  isVerified   Boolean  @default(false)

  refreshSessions RefreshSession[]

  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model RefreshSession {
  id        String   @id @default(uuid())
  userId    String
  tokenHash String   @unique
  expiresAt DateTime
  revokedAt DateTime?

  user User @relation(
    fields: [userId],
    references: [id],
    onDelete: Cascade
  )

  createdAt DateTime @default(now())

  @@index([userId])
  @@index([expiresAt])
}
```

Generate the migration:

```bash
npx prisma migrate dev --name init_auth
```

Generate the client if needed:

```bash
npx prisma generate
```

##### 15.5 Prisma singleton

`src/config/prisma.ts`:

```typescript
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
```

A single shared Prisma Client instance is generally appropriate for a standard long-running Express process.

##### 15.6 Authentication service

`src/services/auth.service.ts`:

```typescript
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import { prisma } from "../config/prisma";

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET!;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

function hashToken(token: string) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

function createAccessToken(user: {
  id: string;
  role: string;
}) {
  return jwt.sign(
    {
      role: user.role
    },
    ACCESS_SECRET,
    {
      subject: user.id,
      expiresIn: "15m",
      issuer: "recruitment-api",
      audience: "recruitment-client"
    }
  );
}

function createRefreshToken(userId: string) {
  return jwt.sign(
    {},
    REFRESH_SECRET,
    {
      subject: userId,
      expiresIn: "7d",
      issuer: "recruitment-api",
      audience: "recruitment-refresh"
    }
  );
}

export async function register(
  email: string,
  password: string
) {
  const existing = await prisma.user.findUnique({
    where: { email }
  });

  if (existing) {
    throw new Error("ACCOUNT_ALREADY_EXISTS");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      role: "STUDENT"
    },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true
    }
  });

  return user;
}

export async function login(
  email: string,
  password: string
) {
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const valid = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!valid) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user.id);

  const decoded = jwt.decode(refreshToken) as jwt.JwtPayload;

  if (!decoded.exp) {
    throw new Error("INVALID_TOKEN_EXPIRY");
  }

  await prisma.refreshSession.create({
    data: {
      userId: user.id,
      tokenHash: hashToken(refreshToken),
      expiresAt: new Date(decoded.exp * 1000)
    }
  });

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  };
}
```

Important: The initial registration and login examples are intentionally simplified. A production system should use a transaction or carefully handle races, generic error responses, email normalization, account verification, and abuse prevention.

##### 15.7 Refresh-token rotation

Add to `auth.service.ts`:

```typescript
export async function refresh(refreshToken: string) {
  const decoded = jwt.verify(
    refreshToken,
    REFRESH_SECRET,
    {
      algorithms: ["HS256"],
      issuer: "recruitment-api",
      audience: "recruitment-refresh"
    }
  ) as jwt.JwtPayload;

  if (!decoded.sub || !decoded.exp) {
    throw new Error("INVALID_REFRESH_TOKEN");
  }

  const tokenHash = hashToken(refreshToken);

  return prisma.$transaction(async (tx) => {
    const session = await tx.refreshSession.findUnique({
      where: {
        tokenHash
      }
    });

    if (
      !session ||
      session.revokedAt ||
      session.expiresAt <= new Date()
    ) {
      throw new Error("INVALID_REFRESH_TOKEN");
    }

    if (session.userId !== decoded.sub) {
      throw new Error("INVALID_REFRESH_TOKEN");
    }

    const user = await tx.user.findUnique({
      where: {
        id: session.userId
      }
    });

    if (!user) {
      throw new Error("INVALID_REFRESH_TOKEN");
    }

    const newRefreshToken = createRefreshToken(user.id);

    const newDecoded = jwt.decode(
      newRefreshToken
    ) as jwt.JwtPayload;

    if (!newDecoded.exp) {
      throw new Error("INVALID_TOKEN_EXPIRY");
    }

    // Consume old session
    await tx.refreshSession.update({
      where: {
        id: session.id
      },
      data: {
        revokedAt: new Date()
      }
    });

    // Create new session
    await tx.refreshSession.create({
      data: {
        userId: user.id,
        tokenHash: hashToken(newRefreshToken),
        expiresAt: new Date(newDecoded.exp * 1000)
      }
    });

    return {
      accessToken: createAccessToken(user),
      refreshToken: newRefreshToken
    };
  });
}
```

This demonstrates token rotation, but it is not a complete production refresh-token reuse-detection system. A production design should track token families, handle concurrent refresh requests safely, and revoke a family if a previously consumed token is reused.

##### 15.8 Logout

```typescript
export async function logout(refreshToken: string) {
  const tokenHash = hashToken(refreshToken);

  await prisma.refreshSession.updateMany({
    where: {
      tokenHash,
      revokedAt: null
    },
    data: {
      revokedAt: new Date()
    }
  });
}
```

This revokes the refresh session. A previously issued access JWT remains valid until it expires unless you also implement an access-token revocation mechanism.

##### 15.9 Authentication middleware

`src/middleware/authenticate.ts`:

```typescript
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  const token = header.substring(7);

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!,
      {
        algorithms: ["HS256"],
        issuer: "recruitment-api",
        audience: "recruitment-client"
      }
    ) as jwt.JwtPayload;

    if (
      typeof decoded.sub !== "string" ||
      typeof decoded.role !== "string"
    ) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    req.user = {
      id: decoded.sub,
      role: decoded.role
    };

    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}
```

##### 15.10 Authorization middleware

`src/middleware/authorize.ts`:

```typescript
import { Response, NextFunction } from "express";
import { AuthRequest } from "./authenticate";

export function authorize(...roles: string[]) {
  return (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required"
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    next();
  };
}
```

##### 15.11 Authentication controller and routes

`src/controllers/auth.controller.ts`:

```typescript
import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/api/auth"
};

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await authService.register(
      req.body.email,
      req.body.password
    );

    return res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
}

export async function login(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await authService.login(
      req.body.email,
      req.body.password
    );

    res.cookie(
      "refreshToken",
      result.refreshToken,
      {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000
      }
    );

    return res.json({
      success: true,
      accessToken: result.accessToken,
      user: result.user
    });
  } catch (error) {
    next(error);
  }
}

export async function refresh(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.refreshToken;

    if (!token) {
      return res.status(401).json({
        message: "Refresh token required"
      });
    }

    const result = await authService.refresh(token);

    res.cookie(
      "refreshToken",
      result.refreshToken,
      {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000
      }
    );

    return res.json({
      success: true,
      accessToken: result.accessToken
    });
  } catch (error) {
    next(error);
  }
}

export async function logout(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.refreshToken;

    if (token) {
      await authService.logout(token);
    }

    res.clearCookie("refreshToken", cookieOptions);

    return res.json({
      success: true,
      message: "Logged out"
    });
  } catch (error) {
    next(error);
  }
}
```

`src/routes/auth.routes.ts`:

```typescript
import { Router } from "express";
import * as controller from "../controllers/auth.controller";

const router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/refresh", controller.refresh);
router.post("/logout", controller.logout);

export default router;
```

##### 15.12 Protected profile endpoint

Create `src/app.ts`:

```typescript
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes";
import { authenticate } from "./middleware/authenticate";
import { authorize } from "./middleware/authorize";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get(
  "/api/profile",
  authenticate,
  (req, res) => {
    res.json({
      success: true,
      user: req.user
    });
  }
);

app.get(
  "/api/admin/dashboard",
  authenticate,
  authorize("ADMIN"),
  (req, res) => {
    res.json({
      message: "Welcome to the admin dashboard"
    });
  }
);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
```

For the code above, add a TypeScript declaration for the Express request's `user` property or use `AuthRequest` in the route handler.

##### 15.13 Important production corrections

Before deploying this teaching implementation:

- Add Zod validation for registration, login, and refresh inputs.
- Normalize emails consistently.
- Avoid exposing whether an account exists.
- Protect the refresh endpoint against CSRF when cookies are used.
- Configure cookie domain, path, SameSite and Secure according to the deployment.
- Use HTTPS.
- Handle duplicate-email database errors.
- Add login rate limiting and monitoring.
- Enforce account verification and account status.
- Implement refresh-token family tracking and reuse detection.
- Add a transaction-safe concurrency strategy for token rotation.
- Revoke sessions on password changes and account compromise.
- Never accept a role from the registration request; assign the default role server-side.
- Add graceful shutdown and safe error handling.

The example deliberately keeps the core flow understandable rather than pretending to be a fully hardened authentication product.

<a id="phase-13-section-16"></a>

### Advanced security interview questions

#### Q13.59. What happens if an access token is stolen?

An attacker may use it until it expires, unless the application has an additional revocation mechanism.

Mitigations:

- Short access-token lifetime.
- HTTPS.
- Secure token storage.
- Refresh-token rotation.
- Session revocation.
- An access-token denylist where appropriate.
- Monitoring suspicious activity.

#### Q13.60. How do you revoke a JWT?

JWTs are normally self-contained, so they remain valid until expiry unless the server checks additional state.

Options:

1. Short token expiry.
2. Maintain a denylist using `jti`.
3. Maintain a token/session version.
4. Revoke the associated refresh session.
5. Use server-side sessions instead.

A Redis denylist can store revoked token identifiers until their original expiry.

#### Q13.61. What is the principle of least privilege?

Give each user, service, or application only the permissions required to perform its tasks.

Example: A student API should not have unrestricted permission to delete company accounts.

This applies to:

- Users.
- Database accounts.
- Cloud IAM roles.
- API tokens.
- Service-to-service access.

#### Q13.62. What is password spraying?

Password spraying is an attack where an attacker tries a small number of commonly used passwords against many different accounts.

Unlike brute force against one account, this can avoid some account-level lockout mechanisms.

Defenses include:

- MFA.
- Password blocklists.
- Rate limiting across IPs and account identifiers.
- Suspicious-login detection.
- Monitoring authentication failures.

#### Q13.63. What is credential stuffing?

Credential stuffing uses username/password combinations stolen from other websites.

Attackers exploit password reuse.

Defenses:

- MFA or passkeys.
- Breached-password checks.
- Rate limiting.
- Suspicious-login monitoring.
- Encouraging unique passwords.

#### Q13.64. What is a security audit log?

A security audit log records security-relevant actions.

Examples:

- Successful and failed login attempts.
- Password changes.
- Refresh-token reuse.
- Role changes.
- Permission changes.
- Administrative actions.
- Account lockouts.

Do not log raw passwords, access tokens, refresh tokens, or unnecessary sensitive personal information.

#### Q13.65. Difference between RBAC and ABAC?

| RBAC                                           | ABAC                                                            |
| ---------------------------------------------- | --------------------------------------------------------------- |
| Role-Based Access Control                      | Attribute-Based Access Control                                  |
| Decisions based on roles and permissions       | Decisions based on attributes and policies                      |
| Easier to implement for common role structures | More expressive for complex rules                               |
| Example: ADMIN can manage users                | Example: Manager can view records belonging to their department |

A system can use both.

#### Q13.66. What is MFA fatigue?

MFA fatigue is an attack where an attacker repeatedly sends authentication approval prompts, hoping the user eventually approves one.

Mitigations:

- Number matching.
- Rate limiting.
- User education.
- Risk-based authentication.
- Phishing-resistant authentication methods.

#### Q13.67. Why should authentication and authorization be separated?

Authentication establishes identity. Authorization checks permissions.

Separating them means identity verification can be reused across endpoints while each endpoint applies its own access rules.

For example, a company user can authenticate successfully but should only modify drives belonging to that company.

#### Practical assignments

These 14 exercises connect the theory to actual backend development.

**Phase 13 practical tracker**


1\. Create registration endpoint: validate email and password, hash password, save user in PostgreSQL

2\. Implement login: verify password hash and issue an access token

3\. Implement JWT middleware: verify signature, expiry, issuer, audience and claims

4\. Implement RBAC with STUDENT, COMPANY and ADMIN roles

5\. Implement resource ownership checks to prevent students accessing other students' applications

6\. Implement refresh-token rotation, store token hashes and invalidate previous sessions

7\. Implement logout: revoke refresh sessions and clear the cookie

8\. Configure secure cookies: HttpOnly, Secure, SameSite and cookie expiry

9\. Implement password reset using random tokens, hashes, expiration and single-use validation

10\. Implement email verification with a secure verification flow

11\. Protect APIs against XSS, CSRF, SQL injection, NoSQL injection and IDOR

12\. Add security middleware: configure CORS, Helmet and rate limiting

13\. Implement MFA conceptually: understand TOTP, recovery codes and passkeys

14\. Write security tests for expired tokens, invalid credentials, unauthorized roles and ownership violations


<a id="phase-13-section-17"></a>

### Same-Origin Policy and CORS

**Q13.68. What is an origin in web development?**

Answer: An origin is defined by three components:

1. Scheme or protocol.
2. Host or domain.
3. Port number.

For example:

`https://example.com:443`

If any of these components changes, the origin is different.

**Q13.69. What is the Same-Origin Policy?**

Answer: Same-Origin Policy is a browser security mechanism that restricts how documents and scripts from one origin can interact with resources from another origin.

It helps prevent malicious websites from freely reading sensitive information from other websites.

For example, JavaScript running on one website cannot normally read private API responses from another website without permission.

**Q13.70. What is CORS?**

Answer: CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that allows a server to specify which external origins can access its resources.

It works through HTTP headers such as `Access-Control-Allow-Origin`.

For example, if my React frontend runs on port 3000 and my Express backend runs on port 5000, they have different origins. I may need to configure CORS on the backend to allow the frontend to access its APIs.

**Q13.71. How does CORS work?**

Answer: When a browser makes a cross-origin request, it checks whether the server permits access from the requesting origin.

The server can respond with headers such as:

```http
Access-Control-Allow-Origin: http://localhost:3000
```

For certain requests, the browser first sends a preflight request using the HTTP OPTIONS method.

If the server's CORS response allows the actual request, the browser proceeds according to the CORS rules.

**Q13.72. What is a CORS preflight request?**

Answer: A preflight request is an OPTIONS request sent by the browser before certain cross-origin requests.

It checks whether the server allows the requested HTTP method and headers.

For example, a cross-origin request using a custom authorization header may trigger a preflight request.

Not every cross-origin request requires preflight.

**Q13.73. How do you enable CORS in Express.js?**

Answer: We can use the `cors` middleware in Express to configure which origins are allowed to access our backend.

Example:

```javascript
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000"
}));
```

This allows requests from the specified frontend origin.

For production, we should configure an appropriate origin allowlist instead of blindly allowing every origin.

**Q13.74. What is the difference between CORS and Same-Origin Policy?**

Answer:

- Same-Origin Policy: The browser's default security restriction on cross-origin access.
- CORS: A mechanism that allows servers to grant controlled exceptions to those restrictions.

CORS does not disable browser security. It provides a controlled way to permit cross-origin resource access.

**Q13.75. Is CORS a backend security mechanism that prevents unauthorized API requests?**

Answer: Not exactly. CORS is primarily enforced by browsers and controls whether frontend JavaScript can access cross-origin responses.

It does not replace backend authentication or authorization.

For example, an attacker can send requests using tools such as curl or Postman without being restricted by browser CORS enforcement. Therefore, every protected API must independently verify authentication and permissions.


<a id="phase-13-section-18"></a>

### Password-derivation follow-up: PBKDF2

PBKDF2 repeatedly applies a pseudorandom function, commonly based on HMAC, to a password and salt to derive key material. The salt and work factor must be retained for verification; the raw password must not be stored. PBKDF2-HMAC-SHA256 is different from applying plain SHA-256 once. Explain the actual library, salt generation, work factor and comparison behavior used in a project rather than borrowing another project's bcrypt answer.

---

<a id="phase-14"></a>

## Phase 14 — Testing, PyTest, Playwright and Postman

**Objective:** Validate units, APIs and user flows; keep test design separate from deployment pipelines.

**Sections:** [Software Testing Fundamentals](#phase-14-section-1) · [Testing Levels and Types](#phase-14-section-2) · [Test Scenarios, Test Cases and Test Planning](#phase-14-section-3) · [Python Testing with PyTest](#phase-14-section-4) · [Advanced PyTest Concepts](#phase-14-section-5) · [API Testing](#phase-14-section-6) · [Playwright Browser Automation](#phase-14-section-7) · [Advanced Playwright Automation](#phase-14-section-8) · [Complete Practical QA Automation Project](#phase-14-section-9) · [Debugging, Flaky Tests and QA Best Practices](#phase-14-section-10) · [Important QA Automation Interview Questions](#phase-14-section-11) · [Python Standard-Library Testing Reference](#phase-14-section-12) · [Postman — Repeatable API Checks](#phase-14-section-13) · [Machine-readable test reports and change-focused quality signals](#phase-14-section-14) · [React Testing](#phase-14-section-15) · [Node.js test runner and HTTP testing](#phase-14-section-16)

<a id="phase-14-section-1"></a>

### Software Testing Fundamentals

#### Q14.1. What is software testing?

Software testing is the process of evaluating an application to identify defects and verify that it behaves according to its requirements.

Imagine you build a student management application with these features:

- Register students.
- Log in.
- View student profiles.
- Update student details.
- Delete student records.

Testing checks whether these features work under expected and unexpected conditions.

For example:

| Input                    | Expected result   |
| ------------------------ | ----------------- |
| Valid email and password | Login succeeds    |
| Incorrect password       | Login rejected    |
| Empty email              | Validation error  |
| Non-existent account     | Appropriate error |
| Expired JWT              | Request rejected  |

**Important:** Testing can reveal the presence of defects, but it cannot prove that software is completely defect-free.

#### Q14.2. Why is software testing important?

1. Detects bugs before production.
2. Helps prevent security vulnerabilities.
3. Verifies business requirements.
4. Reduces maintenance costs.
5. Prevents existing functionality from breaking.
6. Improves application reliability.
7. Builds confidence when developers modify code.

Consider an insurance application. If the premium calculation is incorrect, a customer might be charged the wrong amount. Testing financial calculations therefore protects business operations, not just code quality.

#### Q14.3. What is verification vs validation?

| Verification                           | Validation                              |
| -------------------------------------- | --------------------------------------- |
| Are we building the product correctly? | Are we building the correct product?    |
| Checks specifications and design       | Checks actual application behaviour     |
| Can include reviews and inspections    | Usually involves executing the software |
| Focuses on conformance to requirements | Focuses on user needs                   |

Example requirement:

> A user must not be able to submit a registration form without an email address.

- **Verification:** Review the design and implementation against the requirement.
- **Validation:** Run the application, submit the form without an email, and check that it is rejected.

#### Q14.4. Manual vs automation testing

**Manual testing:** A tester executes test cases manually without writing automation scripts.

**Automation testing:** Scripts and tools execute tests automatically and compare actual results with expected results.

| Manual testing                    | Automation testing                |
| --------------------------------- | --------------------------------- |
| Human executes test cases         | Scripts execute test cases        |
| Useful for exploratory testing    | Useful for repeatable tests       |
| Often slower for repetitive tasks | Efficient for repeated execution  |
| Less initial setup                | Requires automation development   |
| Human observation is valuable     | Consistent assertions and reports |

**Interview point:** Automation does not replace manual testing. Exploratory testing, usability evaluation and situations requiring human judgment still benefit from manual testing.

<a id="phase-14-section-2"></a>

### Testing Levels and Types

#### Q14.5. Explain the four major testing levels

Level 1

**Unit testing**

Tests individual functions or components.

Example: Verify that `calculatePremium()` returns the correct insurance premium.

Level 2

**Integration testing**

Tests interactions between components.

Example: Verify that an Express API correctly saves a student record to PostgreSQL.

Level 3

**System testing**

Tests the complete integrated application.

Example: Register, log in, submit an application and view its status.

Level 4

**Acceptance testing**

Checks whether the system meets business and user requirements.

Example: A business stakeholder verifies that an insurance claim follows the required workflow.

#### Q14.6. Functional vs non-functional testing

**Functional testing** verifies what the application does.

Examples:

- Login works.
- User can submit a form.
- API returns the correct response.
- Payment status updates correctly.

**Non-functional testing** evaluates how well the application works.

Examples:

- Performance testing.
- Load testing.
- Stress testing.
- Security testing.
- Accessibility testing.
- Compatibility testing.
- Usability testing.

An API might be functionally correct but take 15 seconds to respond. It passes a functional check but may fail performance expectations.

#### Q14.7. Smoke, sanity and regression testing

| Type       | Meaning                                     | Example                                  |
| ---------- | ------------------------------------------- | ---------------------------------------- |
| Smoke      | Basic build verification                    | Can the application start?               |
| Sanity     | Focused check after a small change          | Does updated login validation work?      |
| Regression | Checks existing functionality after changes | Did the login change break registration? |

Remember:

- Smoke testing checks whether the build is stable enough for further testing.
- Sanity testing checks a specific change or area.
- Regression testing checks for unintended side effects.

#### Q14.8. What is exploratory testing?

Exploratory testing is an approach where testers simultaneously learn the application, design tests and execute them.

While testing registration, you might try:

- Submitting empty fields.
- Pasting unusually long text.
- Refreshing during submission.
- Opening the same page in multiple tabs.
- Clicking submit repeatedly.
- Using unexpected characters.

It is useful when requirements are incomplete or when testers want to discover unexpected behaviours.

#### Q14.9. Positive vs negative testing

**Positive testing:** Valid input should produce the expected result.

```text
Email: chirag@example.com
Password: ValidPassword123

Expected: Registration succeeds
```

**Negative testing:** Invalid input should be handled correctly.

```text
Email: invalid-email
Password: 123

Expected: Validation error
```

A good test suite includes both.

<a id="phase-14-section-3"></a>

### Test Scenarios, Test Cases and Test Planning

#### Q14.10. What is a test scenario?

A test scenario describes a high-level functionality or situation that needs testing.

```text
Scenario: Verify user login functionality.
```

It does not necessarily specify every step or expected result.

#### Q14.11. What is a test case?

A test case defines the exact conditions, steps, inputs and expected result used to verify a specific behaviour.

Example:

| Field           | Value                                           |
| --------------- | ----------------------------------------------- |
| Test Case ID    | LOGIN_001                                       |
| Feature         | User Login                                      |
| Preconditions   | User account already exists                     |
| Input           | Valid email and password                        |
| Steps           | Open login page, enter credentials, click login |
| Expected Result | User is redirected to dashboard                 |
| Priority        | High                                            |

#### Q14.12. What is a test plan?

A test plan defines the overall testing strategy.

It typically includes:

- Testing scope.
- Features to test.
- Features excluded from testing.
- Testing approach.
- Resources and responsibilities.
- Test environment.
- Test schedule.
- Entry and exit criteria.
- Risks and dependencies.

**Difference:**

- Test scenario: What should be tested?
- Test case: How exactly should it be tested?
- Test plan: How will overall testing be organized?

#### Q14.13. What is test data?

Test data is information used to execute test cases.

Example:

```json
{
  "validUser": {
    "name": "Chirag",
    "email": "chirag@example.com",
    "password": "ValidPassword123"
  },
  "invalidUser": {
    "name": "",
    "email": "invalid",
    "password": "123"
  }
}
```

Test data can be static, dynamically generated, loaded from a database, retrieved from fixtures or created through APIs.

#### Q14.14. Test coverage vs code coverage

**Test coverage** describes how much of the intended functionality, requirements or test scope has been tested.

**Code coverage** measures which parts of source code were executed during testing.

Common measurements:

| Metric             | Meaning                                      |
| ------------------ | -------------------------------------------- |
| Statement coverage | Percentage of executable statements executed |
| Branch coverage    | Percentage of decision branches executed     |
| Function coverage  | Percentage of functions called               |
| Line coverage      | Percentage of executable lines executed      |

Example:

```python
def calculate_discount(price, is_member):    if is_member:        return price * 0.10    return 0
```

A test that only uses `is_member=True` does not exercise the false branch.

**Important interview point:** 100% code coverage does not guarantee defect-free software. A line can execute without its result being meaningfully verified.

#### Q14.15. Explain the test pyramid

The test pyramid recommends having many fast, focused tests and fewer expensive end-to-end tests.

**E2E**

Few, slower tests

**Integration**

Moderate number of tests

**Unit tests**

Many, fast tests

Conceptual proportions, not a mandatory numerical ratio.

Why?

- Unit tests are fast and isolate defects.
- Integration tests verify communication between components.
- E2E tests verify complete user workflows but are more expensive and can be more fragile.

<a id="phase-14-section-4"></a>

### Python Testing with PyTest

#### Q14.16. What is PyTest?

PyTest is a Python testing framework used to write and execute automated tests.

It supports:

- Simple assertions.
- Fixtures.
- Parametrized tests.
- Test discovery.
- Plugins.
- Mocking integrations.
- Detailed failure reports.
- CI/CD integration.

#### Q14.17. How do you install PyTest?

Create a project:

```bash
mkdir pytest-demo
cd pytest-demo

python -m venv .venv
```

Activate it in Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Install PyTest:

```bash
pip install pytest pytest-cov
```

Verify:

```bash
pytest --version
```

The displayed version depends on the installed release.

#### Q14.18. How does PyTest discover test files?

By default, PyTest discovers files such as:

```text
test_example.py
example_test.py
```

Test functions generally begin with:

```python
def test_something():    ...
```

Project:

```text
pytest-demo/
├── calculator.py
├── test_calculator.py
└── requirements.txt
```

`calculator.py`:

```python
def add(a, b):    return a + bdef divide(a, b):    if b == 0:        raise ValueError("Cannot divide by zero")    return a / b
```

`test_calculator.py`:

```python
import pytestfrom calculator import add, dividedef test_add():    assert add(2, 3) == 5def test_divide():    assert divide(10, 2) == 5def test_divide_by_zero():    with pytest.raises(ValueError):        divide(10, 0)
```

Run:

```bash
pytest -v
```

Expected result:

```text
test_calculator.py::test_add PASSED
test_calculator.py::test_divide PASSED
test_calculator.py::test_divide_by_zero PASSED

3 passed
```

The important concept is:

```python
assert actual_result == expected_result
```

If the condition is false, PyTest reports a failure.

<a id="phase-14-section-5"></a>

### Advanced PyTest Concepts

#### Q14.19. What are fixtures?

A fixture provides reusable setup and cleanup logic for tests.

Suppose multiple tests need the same test user.

Instead of creating that user repeatedly:

```python
import pytest@pytest.fixturedef user():    return {        "name": "Chirag",        "email": "chirag@example.com"    }def test_user_name(user):    assert user["name"] == "Chirag"def test_user_email(user):    assert user["email"] == "chirag@example.com"
```

PyTest automatically supplies the fixture when the test requests an argument named `user`.

Fixtures are useful for:

- Reusable test data.
- Database connections.
- Temporary directories.
- Starting and stopping services.
- Shared setup and cleanup.

##### Fixture scopes

| Scope      | Lifetime                    |
| ---------- | --------------------------- |
| `function` | Each test function; default |
| `class`    | Once per test class         |
| `module`   | Once per Python module      |
| `package`  | Once per package            |
| `session`  | Once per test session       |

Example:

```python
@pytest.fixture(scope="session")def app_config():    return {"environment": "testing"}
```

Use wider scopes only when sharing the resource is safe. Shared mutable test data can make tests interfere with one another.

#### Q14.20. What is parametrization?

Parametrization allows one test function to execute with multiple input values.

```python
import pytest@pytest.mark.parametrize(    "a, b, expected",    [        (2, 3, 5),        (10, 20, 30),        (-2, 2, 0),        (0, 0, 0)    ])def test_add(a, b, expected):    assert a + b == expected
```

Run:

```bash
pytest -v
```

PyTest executes the test separately for each parameter set.

This is useful for boundary-value and input-validation testing.

#### Q14.21. What is mocking?

Mocking replaces a real dependency with a controlled test double.

Suppose a service calls an external payment provider. You don't necessarily want every unit test to make a real payment API request.

```python
from unittest.mock import Mockdef process_payment(payment_gateway, amount):    return payment_gateway.charge(amount)def test_process_payment():    gateway = Mock()    gateway.charge.return_value = {"status": "success"}    result = process_payment(gateway, 1000)    assert result["status"] == "success"    gateway.charge.assert_called_once_with(1000)
```

Mocking is useful for testing third-party APIs, email services, payment gateways, error conditions and expensive external calls.

**Important:** Mocking does not prove that the real payment provider works. Integration tests must verify the actual integration separately.

#### Q14.22. Stub vs mock vs fake

| Term | Purpose                                      |
| ---- | -------------------------------------------- |
| Stub | Returns predefined responses                 |
| Mock | Allows verification of expected interactions |
| Fake | A simplified working implementation          |

Examples:

- Stub: Always returns a successful payment response.
- Mock: Checks whether `charge(1000)` was called.
- Fake: An in-memory payment gateway implementing simplified payment behaviour.

These terms can overlap in practice, but their primary purposes differ.

#### Q14.23. How do you test exceptions?

Use `pytest.raises()`.

```python
import pytestdef validate_age(age):    if age < 18:        raise ValueError("Must be 18 or older")    return Truedef test_invalid_age():    with pytest.raises(        ValueError,        match="Must be 18 or older"    ):        validate_age(16)
```

This verifies both the exception type and its message.

#### Q14.24. How do you skip tests?

```python
import pytest@pytest.mark.skip(reason="Feature not implemented")def test_future_feature():    assert True
```

Conditionally skip:

```python
import sysimport pytest@pytest.mark.skipif(    sys.platform == "win32",    reason="Not supported on Windows")def test_linux_feature():    assert True
```

#### Q14.25. What are PyTest markers?

Markers categorize tests.

```python
import pytest@pytest.mark.smokedef test_login():    assert True@pytest.mark.regressiondef test_registration():    assert True
```

Register custom markers in `pytest.ini`:

```ini
[pytest]
markers =
    smoke: critical application tests
    regression: regression test suite
```

Execute only smoke tests:

```bash
pytest -m smoke
```

Execute regression tests:

```bash
pytest -m regression
```

#### Q14.26. How do you generate coverage reports?

Install:

```bash
pip install pytest-cov
```

Terminal report:

```bash
pytest --cov=. --cov-report=term-missing
```

HTML report:

```bash
pytest --cov=. --cov-report=html
```

This generates:

```text
htmlcov/
└── index.html
```

Open `htmlcov/index.html` in a browser to inspect coverage.

<a id="phase-14-section-6"></a>

### API Testing

#### Q14.27. What is API testing?

API testing verifies that application programming interfaces behave correctly.

It checks:

- HTTP status codes.
- Response body.
- Headers.
- Authentication.
- Authorization.
- Input validation.
- Error handling.
- Response time.
- Database side effects.

Consider this endpoint:

```http
POST /api/students
Content-Type: application/json
Authorization: Bearer <token>
```

Request:

```json
{
  "name": "Chirag",
  "email": "chirag@example.com"
}
```

Expected response:

```text
201 Created
```

```json
{
  "id": 101,
  "name": "Chirag",
  "email": "chirag@example.com"
}
```

#### Q14.28. How do you test APIs using Postman?

Postman can send API requests and inspect their responses.

Typical workflow:

1. Create a collection.
2. Add an HTTP request.
3. Select the method.
4. Enter the endpoint URL.
5. Add headers.
6. Add the request body.
7. Send the request.
8. Verify status code and response.
9. Write automated assertions.

Example Postman tests:

```javascript
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response contains student name", function () {
    const response = pm.response.json();

    pm.expect(response.name).to.eql("Chirag");
});
```

#### Q14.29. How do you test a REST API using Python?

Install:

```bash
pip install requests pytest
```

Create a test:

```python
import requestsBASE_URL = "http://localhost:8000"def test_health_endpoint():    response = requests.get(        f"{BASE_URL}/health",        timeout=5    )    assert response.status_code == 200    data = response.json()    assert data["status"] == "ok"
```

Run:

```bash
pytest -v
```

The backend must be running before this test.

#### Q14.30. API unit testing vs API integration testing

**API unit testing:** Tests individual endpoint logic or service functions in isolation, often with dependencies mocked.

**API integration testing:** Tests the endpoint together with actual dependencies, such as the database, authentication middleware and service layer.

**Unit test**

```text
studentService.createStudent()
          ↓
     Mock repository
          ↓
    Verify result
```

**Integration test**

```text
HTTP POST /students
          ↓
     Express route
          ↓
      Middleware
          ↓
      Controller
          ↓
       Service
          ↓
   Test PostgreSQL DB
          ↓
   Verify saved record
```

Both are necessary.

<a id="phase-14-section-7"></a>

### Playwright Browser Automation

#### Q14.31. What is Playwright?

Playwright is a browser automation framework used to test web applications.

It supports:

- Chromium.
- Firefox.
- WebKit.
- Browser automation.
- End-to-end testing.
- Screenshots.
- Video recording.
- Network interception.
- Multiple browser contexts.
- Parallel test execution.

Playwright supports JavaScript, TypeScript, Python, Java and .NET. We'll use its Python version for this QA preparation.

#### Q14.32. How does Playwright work internally?

A simplified architecture:

```text
PyTest test function
        ↓
Playwright Python API
        ↓
Browser automation protocol
        ↓
Browser engine
(Chromium / Firefox / WebKit)
        ↓
Web application
(DOM, JavaScript, network and UI)
```

Your test script tells Playwright what actions to perform. Playwright controls the browser and allows the test to inspect application behaviour.

#### Q14.33. Install Playwright with Python

```bash
mkdir playwright-demo
cd playwright-demo

python -m venv .venv
```

Activate the environment in Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Install:

```bash
pip install pytest pytest-playwright
```

Install browser binaries:

```bash
playwright install
```

Or only Chromium:

```bash
playwright install chromium
```

#### Q14.34. Write your first Playwright test

Create:

```text
playwright-demo/
└── test_example.py
```

`test_example.py`:

```python
from playwright.sync_api import Page, expectdef test_homepage(page: Page):    page.goto("https://example.com")    expect(page).to_have_title("Example Domain")    heading = page.locator("h1")    expect(heading).to_have_text("Example Domain")
```

Run:

```bash
pytest -v
```

The `page` fixture is supplied by the Playwright PyTest plugin.

The test:

1. Opens a browser page.
2. Navigates to the website.
3. Verifies the title.
4. Locates the heading.
5. Verifies the heading text.

#### Q14.35. What are locators?

Locators identify elements on a web page.

Examples:

```python
page.get_by_role("button", name="Login")page.get_by_text("Welcome")page.get_by_label("Email")page.get_by_placeholder("Enter email")page.get_by_test_id("submit-button")page.locator("#email")page.locator(".login-button")
```

**Recommended priority:**

1. Role and accessible name.
2. Label.
3. Placeholder.
4. Test ID.
5. CSS selector or XPath when necessary.

Role-based locators often reflect how users and assistive technologies perceive the interface. They are generally more resilient than selectors tied to internal styling classes.

Example:

```python
def test_login_button(page):    page.goto("http://localhost:3000/login")    login_button = page.get_by_role(        "button",        name="Login"    )    expect(login_button).to_be_visible()
```

#### Q14.36. CSS selectors vs XPath

CSS examples:

```python
page.locator("#email")page.locator(".submit-button")page.locator("form input")
```

XPath examples:

```python
page.locator("//input[@id='email']")page.locator("//button[text()='Login']")
```

CSS is usually simpler for ordinary element selection. XPath can help with complex relationships and DOM traversal.

Prefer Playwright's semantic locator APIs where possible.

#### Q14.37. What are auto-waits?

A common source of flaky automation is interacting with elements before they are ready.

Playwright automatically performs actionability checks before actions such as clicking.

```python
page.get_by_role(    "button",    name="Submit").click()
```

Before clicking, Playwright checks conditions such as:

- Element is visible.
- Element is stable.
- Element receives events.
- Element is enabled.

Bad approach:

```python
import timetime.sleep(5)page.get_by_role("button", name="Submit").click()
```

Better:

```python
button = page.get_by_role(    "button",    name="Submit")expect(button).to_be_visible()button.click()
```

For a specific asynchronous condition:

```python
expect(    page.get_by_text("Payment successful")).to_be_visible(timeout=10000)
```

Avoid unnecessary fixed delays.

#### Q14.38. Browser vs browser context vs page

| Object          | Meaning                           |
| --------------- | --------------------------------- |
| Browser         | Browser process, such as Chromium |
| Browser context | Isolated browser session          |
| Page            | Individual browser tab            |

Structure:

```text
Browser
│
├── Context 1
│   ├── Page 1
│   └── Page 2
│
└── Context 2
    └── Page 1
```

A browser context provides isolated session state, including cookies and local storage.

Example:

```python
from playwright.sync_api import sync_playwrightwith sync_playwright() as p:    browser = p.chromium.launch(headless=True)    context = browser.new_context()    page = context.new_page()    page.goto("https://example.com")    print(page.title())    browser.close()
```

Browser contexts are especially useful when testing multiple users or roles independently.

#### Q14.39. Headless vs headed execution

**Headed:** Browser opens visibly.

```bash
pytest --headed
```

**Headless:** Browser executes without displaying a visible window.

```bash
pytest
```

Headless execution is useful in CI/CD pipelines because it does not require a user to interact with a desktop browser.

#### Q14.40. Screenshots and failure recording

Screenshot:

```python
page.screenshot(path="screenshot.png")
```

Full-page screenshot:

```python
page.screenshot(    path="full-page.png",    full_page=True)
```

The Playwright PyTest plugin also supports screenshot options, for example:

```bash
pytest --screenshot only-on-failure
```

Check your installed plugin's `pytest --help` for options supported by that version.

Screenshots, traces and videos can help investigate automation failures.

<a id="phase-14-section-8"></a>

### Advanced Playwright Automation

#### Q14.41. Automate a login workflow

Assume your application has:

```text
http://localhost:3000/login
```

The page contains email, password and a Login button.

```python
from playwright.sync_api import Page, expectdef test_valid_login(page: Page):    page.goto("http://localhost:3000/login")    page.get_by_label("Email").fill(        "chirag@example.com"    )    page.get_by_label("Password").fill(        "ValidPassword123"    )    page.get_by_role(        "button",        name="Login"    ).click()    expect(page).to_have_url(        "http://localhost:3000/dashboard"    )    expect(        page.get_by_text("Welcome")    ).to_be_visible()
```

A real test should use a controlled test account and a test environment—not production user credentials.

#### Q14.42. Dropdowns, checkboxes and file uploads

**Dropdown:**

```python
page.get_by_label("Country").select_option(    label="India")
```

**Checkbox:**

```python
page.get_by_label("Accept terms").check()
```

Verify:

```python
expect(    page.get_by_label("Accept terms")).to_be_checked()
```

**File upload:**

```python
page.get_by_label("Upload resume").set_input_files(    "tests/data/resume.pdf")
```

Multiple files:

```python
page.get_by_label("Upload documents").set_input_files([    "tests/data/resume.pdf",    "tests/data/cover-letter.pdf"])
```

#### Q14.43. Handle alerts and dialogs

Use a dialog event handler:

```python
def test_confirmation_dialog(page):    page.goto("http://localhost:3000")    page.on(        "dialog",        lambda dialog: dialog.accept()    )    page.get_by_role(        "button",        name="Delete"    ).click()
```

To dismiss:

```python
page.on(    "dialog",    lambda dialog: dialog.dismiss())
```

#### Q14.44. Intercept network requests

Playwright can monitor or modify browser network traffic.

Example:

```python
def test_mock_api(page):    page.route(        "**/api/user",        lambda route: route.fulfill(            status=200,            json={                "id": 1,                "name": "Chirag"            }        )    )    page.goto("http://localhost:3000/profile")    expect(        page.get_by_text("Chirag")    ).to_be_visible()
```

This lets UI tests simulate API responses without calling a real backend.

Other use cases:

- Simulating API errors.
- Testing slow responses.
- Returning test data.
- Testing loading states.
- Avoiding dependence on third-party services.

#### Q14.45. What is Page Object Model (POM)?

Page Object Model is a design pattern that separates page interaction logic from test logic.

Without POM, selectors and interaction code may be repeated across many tests.

With POM, each page has a reusable class.

Structure:

```text
tests/
├── pages/
│   ├── login_page.py
│   └── dashboard_page.py
├── test_login.py
└── conftest.py
```

`pages/login_page.py`:

```python
from playwright.sync_api import Pageclass LoginPage:    def __init__(self, page: Page):        self.page = page        self.email = page.get_by_label("Email")        self.password = page.get_by_label("Password")        self.login_button = page.get_by_role(            "button",            name="Login"        )    def open(self):        self.page.goto(            "http://localhost:3000/login"        )    def login(self, email, password):        self.email.fill(email)        self.password.fill(password)        self.login_button.click()
```

`test_login.py`:

```python
from playwright.sync_api import Page, expectfrom pages.login_page import LoginPagedef test_login_success(page: Page):    login_page = LoginPage(page)    login_page.open()    login_page.login(        "chirag@example.com",        "ValidPassword123"    )    expect(page).to_have_url(        "http://localhost:3000/dashboard"    )
```

Benefits:

- Reusability.
- Maintainability.
- Less duplicated code.
- Centralized selectors.
- Cleaner test functions.

Trade-off: Avoid turning page objects into enormous classes containing every test assertion and business rule. Keep responsibilities focused.

#### Q14.46. What is `conftest.py`?

`conftest.py` is a special PyTest configuration file used to share fixtures and hooks across tests.

Example:

```python
import pytest@pytest.fixturedef base_url():    return "http://localhost:3000"
```

Test:

```python
def test_homepage(page, base_url):    page.goto(base_url)    assert page.title()
```

You do not need to import fixtures from `conftest.py` manually. PyTest discovers them according to its directory structure.

#### Q14.47. Implicit vs explicit waiting

Implicit waiting is a term commonly used in Selenium for configuring a global element lookup wait.

Explicit waiting means waiting for a specific condition.

Playwright uses auto-waiting and web-first assertions rather than Selenium-style implicit waits.

Example:

```python
expect(    page.get_by_text("Order confirmed")).to_be_visible(timeout=10000)
```

Avoid unnecessary fixed sleeps.

<a id="phase-14-section-9"></a>

### Complete Practical QA Automation Project

Now combine PyTest, Playwright, fixtures and Page Object Model.

#### 1. Project structure

```text
qa-automation/
├── pages/
│   └── login_page.py
├── tests/
│   ├── test_login.py
│   └── test_homepage.py
├── conftest.py
├── pytest.ini
├── requirements.txt
└── README.md
```

#### 2. Install dependencies

`requirements.txt`:

```bash
pytest
pytest-playwright
pytest-cov
```

Install:

```bash
pip install -r requirements.txt
playwright install chromium
```

#### 3. Configure PyTest

`pytest.ini`:

```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_functions = test_*

addopts = -v

markers =
    smoke: critical application tests
    regression: regression test suite
```

#### 4. Create shared fixture

`conftest.py`:

```python
import pytest@pytest.fixturedef base_url():    return "http://localhost:3000"
```

#### 5. Create page object

`pages/login_page.py`:

```python
from playwright.sync_api import Pageclass LoginPage:    def __init__(self, page: Page):        self.page = page    def open(self):        self.page.goto(            "http://localhost:3000/login"        )    def enter_email(self, email):        self.page.get_by_label("Email").fill(email)    def enter_password(self, password):        self.page.get_by_label("Password").fill(password)    def submit(self):        self.page.get_by_role(            "button",            name="Login"        ).click()
```

#### 6. Write login tests

`tests/test_login.py`:

```python
import pytestfrom playwright.sync_api import Page, expectfrom pages.login_page import LoginPage@pytest.mark.smokedef test_valid_login(page: Page):    login = LoginPage(page)    login.open()    login.enter_email("chirag@example.com")    login.enter_password("ValidPassword123")    login.submit()    expect(page).to_have_url(        "http://localhost:3000/dashboard"    )@pytest.mark.regressiondef test_invalid_login(page: Page):    login = LoginPage(page)    login.open()    login.enter_email("chirag@example.com")    login.enter_password("WrongPassword")    login.submit()    expect(        page.get_by_text("Invalid credentials")
```

These tests assume your application uses the specified labels, routes and error message. Adjust them to the actual application.

#### 7. Homepage test

`tests/test_homepage.py`:

```python
from playwright.sync_api import Page, expectdef test_homepage(page: Page, base_url):    page.goto(base_url)    expect(page).to_have_title(        "Student Management"    )    expect(        page.get_by_role(            "heading",            name="Students"        )    ).to_be_visible()
```

#### 8. Run tests

Start your application in one terminal:

```bash
npm run dev
```

Run tests in another:

```bash
pytest
```

Only smoke tests:

```bash
pytest -m smoke
```

Regression tests:

```bash
pytest -m regression
```

Coverage:

```bash
pytest --cov=pages --cov-report=term-missing
```

#### Running tests in CI

The complete pipeline and workflow examples live in [Cloud and DevOps](#phase-16). This phase focuses on assertions, fixtures, isolation and browser/API behavior.

<a id="phase-14-section-10"></a>

### Debugging, Flaky Tests and QA Best Practices

#### Q14.48. What is a flaky test?

A flaky test sometimes passes and sometimes fails without a relevant code change.

Common causes:

- Timing problems.
- Race conditions.
- Unstable network.
- Shared test data.
- Tests depending on execution order.
- External service failures.
- Incomplete cleanup.
- Environment differences.

Bad example:

```python
import timedef test_notification(page):    page.goto("http://localhost:3000")    time.sleep(2)    assert page.get_by_text(        "Notification sent"    ).is_visible()
```

Better:

```python
from playwright.sync_api import expectdef test_notification(page):    page.goto("http://localhost:3000")    expect(        page.get_by_text("Notification sent")    ).to_be_visible(timeout=10000)
```

#### Q14.49. What should you do when a test fails?

Follow a systematic debugging process:

1. Read the assertion failure.
2. Identify the failing test.
3. Reproduce the issue.
4. Check test inputs.
5. Inspect application logs.
6. Inspect the browser screenshot or trace.
7. Check network requests and responses.
8. Identify whether the problem is in the test, environment or application.
9. Fix the root cause.
10. Rerun the affected test and regression suite.

Do not immediately change the expected value just to make a test pass.

#### Q14.50. Bug vs defect vs error vs failure

| Term       | Meaning                                       |
| ---------- | --------------------------------------------- |
| Error      | Human mistake                                 |
| Defect/Bug | Problem in software                           |
| Failure    | Incorrect behaviour observed during execution |

Example:

- A developer misunderstands a requirement: error.
- The developer writes an incorrect premium formula: defect.
- The application displays the wrong insurance premium: failure.

Terminology can vary between organizations, but this distinction is useful in interviews.

#### Q14.51. Defect severity vs priority

**Severity:** How seriously the defect affects the system.

**Priority:** How urgently the defect should be fixed.

| Scenario                                                   | Severity   | Priority |
| ---------------------------------------------------------- | ---------- | -------- |
| Payment processing broken                                  | Critical   | High     |
| Typo on homepage                                           | Low        | Low      |
| Minor defect on a high-traffic campaign page before launch | Low/Medium | High     |

Severity is primarily about impact; priority is about fixing order.

#### Q14.52. What is a defect life cycle?

A typical defect lifecycle:

```text
New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed
```

If the issue persists after the fix:

```text
Retest
  ↓
Reopened
  ↓
Assigned again
```

Actual workflows differ by organization and tracking tool.

<a id="phase-14-section-11"></a>

### Important QA Automation Interview Questions

#### Q14.53. Selenium vs Playwright

| Selenium                              | Playwright                                     |
| ------------------------------------- | ---------------------------------------------- |
| Mature browser automation ecosystem   | Modern browser automation framework            |
| WebDriver-based architecture          | Uses browser-specific automation protocols     |
| Supports multiple languages           | Supports several languages                     |
| Explicit waits are commonly important | Built-in auto-waiting and web-first assertions |
| Browser drivers commonly involved     | Browser binaries and Playwright tooling        |
| Broad browser ecosystem               | Chromium, Firefox and WebKit support           |

Both are useful. Playwright offers convenient auto-waiting, browser contexts and modern network tooling. Selenium has a mature ecosystem and broad adoption. The choice depends on project requirements.

#### Q14.54. PyTest vs Unittest

| PyTest                        | Unittest                                    |
| ----------------------------- | ------------------------------------------- |
| Third-party testing framework | Python standard library                     |
| Simple `assert` statements    | Assertion methods                           |
| Powerful fixture system       | `setUp()` and `tearDown()`                  |
| Parametrization support       | Often requires additional patterns or tools |
| Large plugin ecosystem        | Built into Python                           |

#### Q14.55. What is BDD?

BDD stands for Behaviour-Driven Development.

It describes application behaviour in terms understandable to developers, testers and business stakeholders.

Example:

```gherkin
Feature: User login

Scenario: Login with valid credentials

Given the user is on the login page
When the user enters valid credentials
And clicks the login button
Then the dashboard should be displayed
```

Tools such as Behave and Cucumber support BDD-style workflows.

#### Q14.56. What is data-driven testing?

Data-driven testing executes the same test logic against multiple datasets.

```python
import pytest@pytest.mark.parametrize(    "email,password,expected",    [        ("valid@example.com", "Valid123", True),        ("invalid", "Valid123", False),        ("valid@example.com", "", False)    ])def test_login_validation(email, password, expected):    result = validate_login(email, password)    assert result == expected
```

It is useful for validating forms, APIs, financial calculations and business rules.

#### Q14.57. What is contract testing?

Contract testing verifies that services communicating with each other follow an agreed API contract.

Suppose the frontend expects:

```json
{
  "id": 101,
  "name": "Chirag",
  "email": "chirag@example.com"
}
```

If the backend changes `email` to `emailAddress`, the frontend may break.

Contract tests can detect this incompatibility before deployment.

Tools include Pact and schema-validation approaches such as OpenAPI.

#### Q14.58. Load testing vs stress testing

- **Load testing:** Measures behaviour under expected and anticipated traffic.
- **Stress testing:** Pushes the system beyond normal capacity to discover breaking points and recovery behaviour.

Examples:

- Load test: 1,000 concurrent users.
- Stress test: Increase traffic until the service degrades or fails.

Other performance testing includes spike testing, endurance testing and scalability testing.

<a id="phase-14-section-12"></a>

### Python Standard-Library Testing Reference

#### 55. Testing with `unittest`

Python includes a built-in testing framework.

```python
import unittestdef add(a, b):    return a + bclass TestCalculator(unittest.TestCase):    def test_add(self):        self.assertEqual(add(10, 20), 30)if __name__ == "__main__":    unittest.main()
```

Run:

```bash
python -m unittest
```


<a id="phase-14-section-13"></a>

### Postman — Repeatable API Checks

#### Collections, Environments and Request Chains

Organize requests by feature. Use an environment variable for the base URL so the same collection targets local and test environments. Keep credentials out of exported collections and shared example values.

Build a request chain: create a disposable record, capture its identifier, fetch it, update it and delete it. Use unique test data so reruns do not depend on yesterday's state. Confirm both response structure and business behavior; a 200 status alone is insufficient.

#### Pre-request and Post-response Scripts

Pre-request scripts prepare values before sending a request. Post-response scripts validate the result. For a create endpoint returning a numeric identifier:

```javascript
pm.test("Creates a student", function () {
  pm.response.to.have.status(201);
  const body = pm.response.json();
  pm.expect(body.id).to.be.a("number");
  pm.expect(body.name).to.be.a("string");
  pm.collectionVariables.set("studentId", String(body.id));
});
```

The next request can use `{{studentId}}`. Also test invalid fields, missing resources, expired credentials and forbidden ownership changes. [Official Postman scripting guide](https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/).

**Interview distinction:** Postman is useful for repeatable API investigation and collection checks; Playwright exercises browser behavior and can also test APIs; pytest organizes automated Python tests. Choose the layer that can expose the defect with the least unnecessary setup.

---

<a id="phase-14-section-14"></a>

### Machine-readable test reports and change-focused quality signals

##### What is the difference between JUnit XML and Coverage JSON?

| JUnit XML                         | Coverage JSON                         |
| --------------------------------- | ------------------------------------- |
| Stores test execution results     | Stores code coverage information      |
| Passed and failed tests           | Executed and missing lines            |
| Test duration and failure details | Coverage percentages and line details |
| Used for test reports             | Used for coverage reports             |

Your backend parses both reports to create the execution result displayed in the frontend.

**Overall coverage vs changed-code coverage**

| Overall coverage                      | Changed-code coverage                  |
| ------------------------------------- | -------------------------------------- |
| Measures the whole project            | Focuses on modified code               |
| Can hide untested new changes         | Highlights untested changes            |
| Useful for general quality monitoring | Useful for pull-request quality checks |

**What is Git diff?**

Git diff displays differences between versions of files.

Example:

```bash
git diff
```

It shows added, removed, and modified lines.

Your scanner uses Git diff line mapping to compare changed lines with coverage information.

**What is cyclomatic complexity?**

Cyclomatic complexity measures the number of independent execution paths in a program.

A simplified way to think about it is:

- More decision branches usually mean higher complexity.
- Higher complexity often means more test scenarios are required.

For example:

```python
def check_age(age):    if age >= 18:        return "Adult"    return "Minor"
```

This function has a decision branch.

A more complicated function with many nested conditions generally requires more testing.

**What is modification frequency?**

Modification frequency refers to how often a particular file or section of code changes.

Frequently modified code can be a useful risk signal because repeated changes may introduce regressions.

Important: Your scanner calculates a weighted risk score using multiple factors. Do not claim that it uses machine learning to predict bugs. It is a rule-based risk analysis approach described in your project documentation.


<a id="phase-14-section-15"></a>

### React Testing

#### Q14.59. Why is React testing important?

**Answer:**

Testing verifies that components behave as expected.

| Test type           | Purpose                           |
| ------------------- | --------------------------------- |
| Unit testing        | Test individual functions         |
| Component testing   | Test component behaviour          |
| Integration testing | Test multiple components together |
| End-to-end testing  | Test complete user workflows      |

Testing helps detect regressions, verify user interactions and improve application reliability.

#### Q14.60. What is React Testing Library?

**Answer:**

React Testing Library provides utilities to render React components and interact with them as a user would.

Install:

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event
```

Example component:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Example test:

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import Counter from "./Counter";

test("increments counter when clicked", async () => {
  const user = userEvent.setup();

  render(<Counter />);

  await user.click(
    screen.getByRole("button", { name: /increment/i })
  );

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

A typical Vitest configuration includes:

```javascript
// vite.config.js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/testSetup.js"
  }
});
```

`src/testSetup.js`:

```javascript
import "@testing-library/jest-dom/vitest";
```

Run:

```bash
npx vitest
```

**Testing principle:** Prefer testing visible behaviour and user interactions rather than implementation details.


<a id="phase-14-section-16"></a>

### Node.js test runner and HTTP testing

**Q14.61. How do you use the Node.js test runner?**

Answer: Node.js provides a built-in test runner and assertion library.

```javascript
import test from "node:test";
import assert from "node:assert/strict";

test("calculates total", () => {
  assert.equal(100 * 3, 300);
});
```

Run it using `node --test`.


**Q14.62. What is Supertest?**

Answer: Supertest is a library for testing HTTP servers and APIs. It allows tests to make HTTP-style requests to an Express app and verify status codes and response bodies. Exporting the Express app separately from the server listener makes testing easier.

---

<a id="phase-15"></a>

## Phase 15 — Debugging, Browser DevTools and Production Incidents

**Objective:** Use evidence to isolate failures; prepare incident explanations from the supplied project notes.

**Sections:** [Production Troubleshooting](#phase-15-section-1) · [2. GramSaarthi AI — Real debugging incidents](#phase-15-section-2) · [3. Other Linux and infrastructure investigations you performed](#phase-15-section-3) · [5. Important interview questions based on your real debugging experience](#phase-15-section-4) · [6. Your debugging toolkit — commands to remember](#phase-15-section-5) · [7. Final priority — what to prepare before the interview](#phase-15-section-6) · [Browser DevTools — A Practical Investigation](#phase-15-section-7) · [Browser and API investigation exercises](#phase-15-section-8) · [Practical Full Stack Scenarios](#phase-15-section-9) · [Practical React Debugging](#phase-15-section-10) · [Python debugger and logging APIs](#phase-15-section-11) · [Node.js logging and debugger](#phase-15-section-12) · [Logging, Debugging and Testing](#phase-15-section-13)

#### Q15.1. How do you debug an issue?

**Model answer:**

"I follow a systematic approach rather than randomly changing code.

1. Understand the expected behaviour.
2. Reproduce the issue consistently.
3. Read the exact error message and stack trace.
4. Identify which layer is failing: frontend, backend, API, database or infrastructure.
5. Use logs, breakpoints and debugging tools to inspect the execution.
6. Form a hypothesis about the root cause.
7. Test the hypothesis with the smallest possible change.
8. Fix the issue and add a regression test.
9. Verify that the fix has not broken other functionality."

Example: If a student cannot submit an application:

- Check the browser console.
- Inspect the Network tab.
- Check the HTTP status and request payload.
- Inspect backend logs.
- Check authentication and authorization middleware.
- Inspect database constraints and query results.
- Reproduce the issue with the same input.
- Fix the root cause and test again.


#### Q15.2. What debugging tools have you used?

**Model answer:**

"I use browser DevTools for frontend debugging, console logs for tracing execution, breakpoints for inspecting variables and call stacks, API testing tools for request-response verification, and backend logs for investigating server-side issues. For database problems, I inspect queries, constraints and stored data."

Useful tools:

| Tool                         | Purpose                                      |
| ---------------------------- | -------------------------------------------- |
| Chrome DevTools              | Console, Network, Sources, Elements          |
| VS Code debugger             | Breakpoints, variable inspection, call stack |
| Postman                      | API request testing                          |
| Node.js Inspector            | Backend debugging                            |
| Pytest                       | Python test failures                         |
| Git diff                     | Inspect code changes                         |
| PostgreSQL `EXPLAIN ANALYZE` | Query performance investigation              |


#### Q15.3. What is a breakpoint?

A breakpoint pauses execution at a specific line so that you can inspect variables, the call stack and program flow.

For example, in VS Code:

1. Open the source file.
2. Click beside a line number.
3. Start the debugger.
4. Execute the code.
5. Inspect variables.
6. Use Step Over, Step Into and Step Out.


#### Q15.4. What is the difference between Step Into, Step Over and Step Out?

- **Step Into:** Enters the function being called.
- **Step Over:** Executes the current line without entering the called function.
- **Step Out:** Finishes the current function and returns to its caller.


#### Q15.5. What if an issue happens only in production?

**Model answer:**

"I would first check the scope and impact of the issue. Then I would compare production and development configuration, inspect logs and metrics, correlate the issue with recent deployments, check database and external-service health, and try to reproduce it using safe production-like data. If users are affected, I would follow the team's incident process and consider rollback or mitigation before attempting a risky fix."

Never expose passwords, tokens, personal data or sensitive request bodies in debugging logs.


#### Q15.6. What is root cause analysis?

Root cause analysis identifies the underlying reason a failure happened rather than fixing only its visible symptom.

Example:

- Symptom: API returns 500.
- Immediate cause: Database query fails.
- Root cause: A migration changed a column name but the application query was not updated.

A proper fix addresses the mismatch and adds a test or deployment check to prevent recurrence.


#### Q15.7. What if you cannot find a bug?

**Model answer:**

"I would reduce the problem to the smallest reproducible case, collect more evidence, inspect assumptions, check recent changes and consult documentation. If I remain blocked, I would explain what I tried, what I observed and my current hypothesis to a senior developer. I would ask for a focused review rather than simply saying that the code does not work."


#### Q15.8. How would you debug a slow API?

Check in this order:

1. Measure the actual response time.
2. Check whether the delay is in the client, server, database or external service.
3. Inspect logs and request timing.
4. Check database query execution plans.
5. Look for repeated queries and N+1 problems.
6. Check connection pool saturation.
7. Inspect CPU and memory usage.
8. Optimize the bottleneck and measure again.

**Interview follow-up:** What is an N+1 query problem?

It happens when an application executes one query to fetch a list and then one additional query per item, instead of fetching the related data efficiently.

<a id="phase-15-section-1"></a>

### Production Troubleshooting

This is one of the most important areas for a DevOps or cloud engineering interview.

Use the same process for every incident:

```text
Problem
   ↓
Gather evidence
   ↓
Identify the failing layer
   ↓
Find root cause
   ↓
Apply minimal fix
   ↓
Verify recovery
   ↓
Document prevention
```

#### Q15.9. EC2 is running, but the website is unavailable. What do you do?

Do not immediately restart the instance. Diagnose the request path layer by layer.

**Step 1 — Check instance status**

AWS Console → EC2 → Instances.

Check:

- Instance state.
- System status checks.
- Instance status checks.
- Public IP.
- Attached security groups.

**Step 2 — Connect to the server**

Use SSM or SSH, depending on the configured access method.

**Step 3 — Check the application**

```bash
docker ps
docker compose ps
```

**Step 4 — Inspect logs**

```bash
docker compose logs --tail=100
```

**Step 5 — Check listening ports**

```bash
sudo ss -tulpn
```

**Step 6 — Test locally**

```bash
curl -I http://localhost:3000
```

**Step 7 — Check reverse proxy**

```bash
sudo systemctl status caddy
sudo journalctl -u caddy -n 100
```

**Step 8 — Check network access**

- Security group inbound rules.
- Route table.
- Internet Gateway.
- DNS resolution.
- ALB listener and target health, if applicable.

**Step 9 — Verify**

Test the local application, reverse proxy and public URL independently.

#### Q15.10. Docker container keeps restarting. What do you check?

Check:

```bash
docker ps -a
```

Inspect logs:

```bash
docker logs --tail=100 container-name
```

Inspect configuration:

```bash
docker inspect container-name
```

Common causes:

- Application startup exception.
- Missing environment variable.
- Invalid database URL.
- Port already in use.
- Wrong startup command.
- Missing files.
- Incorrect file permissions.
- Out-of-memory termination.

If the container exited because of memory pressure, inspect host memory:

```bash
free -h
```

And kernel logs:

```bash
sudo dmesg -T | grep -i -E 'oom|killed process'
```

Fix the root cause before repeatedly restarting the container.

#### Q15.11. What causes a 502 Bad Gateway?

A 502 usually indicates that a gateway or reverse proxy did not receive a valid response from its upstream.

```text
Browser
   |
   v
Caddy
   |
   v
localhost:3000
   |
   X
Application unavailable
```

Possible causes:

- Application is stopped.
- Incorrect upstream port.
- Docker port mapping is incorrect.
- Application is bound to an unexpected interface.
- Connection refused.
- Upstream timeout or invalid response.

Check:

```bash
docker compose ps
docker compose logs --tail=100
curl -I http://localhost:3000
sudo journalctl -u caddy -n 100
```

A reverse proxy can be working perfectly while the application behind it is unavailable.

#### Q15.12. What is an out-of-memory error?

An OOM (Out of Memory) condition occurs when a process or system cannot obtain sufficient memory for its needs.

Symptoms:

- Build process terminates.
- Application crashes.
- Container exits.
- Kernel kills a process.
- System becomes unresponsive.

Check:

```bash
free -h
top
docker stats
sudo dmesg -T | grep -i oom
```

Your GramSaarthi documentation records an out-of-memory build failure that was addressed by configuring a 2 GB swap file.

A swap file can provide additional virtual memory, but it is not a replacement for sufficient physical RAM. If memory pressure persists, optimize the workload or increase the instance's memory.

#### Q15.13. How do you troubleshoot an SSL certificate error?

Check:

1. Domain DNS points to the intended endpoint.
2. Port 443 is reachable.
3. Caddy or ALB is configured correctly.
4. Certificate issuance or renewal succeeded.
5. Certificate matches the requested domain.
6. Reverse proxy upstream is healthy.

Useful commands:

```bash
curl -Iv https://example.com
```

```bash
openssl s_client \
  -connect example.com:443 \
  -servername example.com
```

For Caddy:

```bash
sudo journalctl -u caddy -f
```

Your GramSaarthi deployment notes describe a real SSL handshake failure and its troubleshooting.

#### Q15.14. Terraform wants to replace an EC2 instance unexpectedly. What do you do?

Do not blindly run `terraform apply`.

First:

```bash
terraform plan
```

Inspect:

- Which attribute changed?
- Is the attribute immutable?
- Is the replacement intentional?
- Did a manual AWS change occur?
- Did the AMI lookup return a newer image?
- Did a configuration change force replacement?

Look for the replacement indicator:

```text
-/+ resource will be replaced
```

Then decide whether to:

- Accept the replacement.
- Pin or change the intended AMI.
- Correct the configuration.
- Reconcile manual changes.
- Modify the deployment strategy to avoid service interruption.

#### Q15.15. Terraform says a resource already exists. What do you do?

Possible cause: A resource was created manually or by another Terraform state.

Do not immediately create another resource with the same intended purpose.

Check:

1. The actual AWS resource ID.
2. Whether it should be managed by this Terraform configuration.
3. Whether another state already manages it.
4. Whether importing it is appropriate.

Terraform supports importing existing resources into state, for example:

```bash
terraform import aws_instance.app i-0123456789abcdef0
```

The resource configuration must still be written correctly and reconciled with the imported resource.

#### Q15.16. GitHub Actions pipeline fails. How do you debug it?

Check the failed workflow run:

1. Identify the failed job.
2. Identify the failed step.
3. Read the complete error message.
4. Compare the runner environment with local development.
5. Check dependency versions.
6. Check environment variables and secrets.
7. Check permissions.
8. Reproduce locally where possible.
9. Fix and rerun the workflow.

Common errors:

| Failure                 | Possible cause                                  |
| ----------------------- | ----------------------------------------------- |
| Dependency installation | Invalid package version or registry issue       |
| Tests fail              | Actual defect or environment-specific behaviour |
| AWS authentication      | Incorrect role, OIDC trust or credentials       |
| Docker build fails      | Missing file or incorrect Dockerfile            |
| SSH deployment fails    | Key or network configuration                    |
| Terraform plan fails    | Provider, credentials or state issue            |

#### Q15.17. How do you troubleshoot a slow application?

Use evidence rather than assumptions.

| Layer          | What to inspect                            |
| -------------- | ------------------------------------------ |
| Browser        | Network waterfall, large assets, rendering |
| DNS            | Resolution time                            |
| Network        | Latency, packet loss                       |
| Reverse proxy  | Request timing and upstream errors         |
| Application    | CPU, memory, event loop and logs           |
| Database       | Slow queries, connection pool              |
| Infrastructure | CPU, RAM, disk and network metrics         |
| External APIs  | Third-party latency and failures           |

Useful commands:

```bash
top
free -h
df -h
docker stats

curl -w "\nTotal: %{time_total}s\n" \
  -o /dev/null -s https://example.com
```

A slow website is not necessarily a server problem. It might be a slow database query, oversized JavaScript bundle or third-party API dependency.


<a id="phase-15-section-2"></a>

### 2. GramSaarthi AI — Real debugging incidents

#### Incident 1: Deployment failed because the health check ran too early


Real hands-on incident

CI/CD + EC2 + Docker


**What was the problem?**

Your GitHub Actions deployment pipeline failed during its post-deployment health check.

The error was:

```bash
curl status 56
CURLE_RECV_ERROR
```

**Where did it happen?**

- Project: GramSaarthi AI
- Environment: AWS EC2
- Application: Next.js
- Deployment: GitHub Actions + Docker Compose
- Application port: 3000

**Why did it happen?**

Your EC2 instance was a `t3.micro` with approximately 1 GB RAM.

The Next.js application needed around 15–20 seconds to initialize, including its application and Prisma-related startup work.

But your original health check ran almost immediately:

```bash
curl -f -s -o /dev/null http://localhost:3000/
```

The application wasn't ready to serve the request, so the health check failed and the pipeline treated the deployment as unsuccessful.

**How did you debug it?**

You identified that the health check was happening too early and needed to account for application startup time.

You changed the health-check logic to:

```bash
MAX_ATTEMPTS=8
ATTEMPT=1
PASSED=false

while [ $ATTEMPT -le $MAX_ATTEMPTS ]; do
  if curl -f -s -o /dev/null http://localhost:3000/; then
    echo "Health check passed on attempt $ATTEMPT!"
    PASSED=true
    break
  fi

  sleep 5
  ATTEMPT=$((ATTEMPT + 1))
done

if [ "$PASSED" != "true" ]; then
  docker compose logs --tail=50
  exit 1
fi
```

You also allowed an initial 20-second startup buffer.

**What did you achieve?**

- The health check could tolerate normal application startup time.
- The pipeline retried instead of failing after one premature request.
- If all attempts failed, Docker logs were collected for diagnosis.
- Deployment became more reliable.

**Interview answer:**

> "I faced a deployment failure where the post-deployment health check returned curl error 56. I investigated the application startup behaviour and found that my Next.js application on a t3.micro needed around 15–20 seconds to initialize, but the pipeline checked it too early. I implemented an initial delay and retry-based health check with eight attempts and five-second intervals. I also added Docker log collection if all attempts failed. This made the deployment more reliable."

**Tools used:** GitHub Actions, EC2, Docker Compose, `curl`, `docker compose logs`.

#### Incident 2: SSM AccessDenied — IAM permissions problem


Real hands-on incident

AWS IAM + SSM + EC2


**What was the problem?**

You attempted to access your EC2 instance using AWS Systems Manager Session Manager, but received:

```text
AccessDeniedException
```

**Where did it happen?**

AWS Systems Manager → Session Manager → EC2 instance.

**Why did it happen?**

The EC2 instance did not have the required IAM permissions for Systems Manager access.

SSM requires the instance to have appropriate permissions to communicate with Systems Manager.

**How did you investigate it?**

You checked the instance's IAM role and its attached policies.

You identified that the required Systems Manager permissions were missing or not correctly attached.

**How did you solve it?**

You created an IAM role:

```text
GramSaarthi-EC2-SSM-Role
```

And attached the AWS managed policy:

```text
AmazonSSMManagedInstanceCore
```

Then you attached the role to the EC2 instance.

The instance's SSM Agent could communicate with Systems Manager over outbound HTTPS on port 443.

**How did you verify it?**

You opened a Session Manager session and ran:

```bash
whoami
docker ps
df -h
free -m
```

You confirmed that you could access the server and inspect its running application and resources.

**Interview answer:**

> "I faced an AccessDeniedException when trying to access my EC2 instance through Systems Manager. I investigated the instance's IAM role and found that it lacked the required SSM permissions. I created an IAM role with AmazonSSMManagedInstanceCore, attached it to EC2 and verified access through Session Manager. This taught me how IAM roles control permissions for AWS services."

**Tools/services:** IAM, EC2, SSM Session Manager, SSM Agent, AWS Console, Linux commands.

**Important distinction:** You did not prove that SSH was disabled. Your server's SSH daemon was still listening on port 22. Your achievement was enabling SSM-based access without requiring inbound SSH.

#### Incident 3: ALB target unhealthy — HTTP 308 redirect


Real hands-on incident

ALB + EC2 + Caddy


**What was the problem?**

After configuring your Application Load Balancer, the target group showed your EC2 target as:

```text
Unhealthy
```

**Where did it happen?**

AWS → EC2 → Load Balancing → Target Groups → Health checks.

**How was your request flowing?**

```text
ALB
 ↓
HTTP health check
 ↓
EC2
 ↓
Caddy
 ↓
HTTP → HTTPS redirect
 ↓
HTTP 308
```

**Why did it happen?**

Caddy was configured to redirect HTTP requests to HTTPS.

The ALB health check used HTTP and received:

```text
308 Permanent Redirect
```

But the target group's success-code matcher did not initially accept 308.

Therefore, the target was marked unhealthy.

**How did you debug it?**

You investigated the target health status and the HTTP response behaviour from the server.

You identified the mismatch between the health-check success codes and Caddy's redirect response.

**How did you solve it?**

You changed the target group's success-code matcher to:

```text
200,301,302,308
```

**How did you verify it?**

You checked the target group's health status again and confirmed that the target became healthy.

**Interview answer:**

> "I configured an ALB and initially found that its EC2 target was unhealthy. I investigated the health-check response and found that Caddy was redirecting HTTP to HTTPS with status 308. The target group wasn't accepting that status code, so I updated the success-code matcher to include 308. The target then became healthy. For a more robust production design, I would prefer a dedicated health endpoint that returns 200 directly."

**Tools/services:** AWS ALB, Target Groups, EC2, Caddy, HTTP status codes.

#### Incident 4: 502 Bad Gateway — deployment caused application downtime


Real hands-on incident

EC2 + Docker + Caddy + CI/CD


**One of your strongest interview stories.**

**What was the problem?**

During deployment, users experienced:

```text
502 Bad Gateway
```

**Where did it happen?**

On the GramSaarthi production server.

Your request path was:

```text
User
 ↓
Caddy
 ↓
127.0.0.1:3000
 ↓
Docker container
 ↓
Next.js application
```

**What was the original deployment sequence?**

```bash
docker compose down
docker compose up -d --build
```

**Why did it happen?**

The first command stopped the currently running application.

The second command had to build the new image before starting the replacement container.

During that build, nothing was listening on port 3000.

Caddy was still running, but its upstream application was unavailable.

Its logs showed:

```text
dial tcp 127.0.0.1:3000:
connect: connection refused
```

That caused Caddy to return 502.

**How did you debug it?**

You checked Caddy's logs:

```bash
journalctl -u caddy
```

You inspected the running containers:

```bash
docker ps
```

You checked the application logs:

```bash
docker compose logs --tail=50
```

You connected the error to the deployment sequence: the application was stopped before the replacement was ready.

**How did you solve it?**

You changed the sequence:

```bash
docker compose build
docker compose up -d --no-deps app
```

The new image was built while the old container was still serving requests. Only after the build did Docker Compose replace the application container.

**How did you verify it?**

You tested the production URL:

```powershell
curl.exe -I https://gramsaarthi-ai.chiragvasava.me
```

It returned:

```http
HTTP/1.1 200 OK
```

You also observed a much smaller replacement window in testing compared with the previous outage of around three minutes.

**Interview answer:**

> "I experienced a 502 Bad Gateway during deployment. I checked Caddy logs and found connection refused errors when it tried to connect to the application on port 3000. I traced the root cause to my deployment script, which ran docker compose down before building the new image. This stopped the old application while the new image was still building. I changed the process to build first and then replace the application using docker compose up -d --no-deps app. This reduced the outage to a very small replacement window."

**Tools:** `journalctl`, `docker ps`, `docker compose logs`, `docker compose build`, `curl`, Caddy.

**Concepts demonstrated:** Reverse proxy, upstream connection, 502, container lifecycle, deployment order, application availability.

**Be accurate:** This was a near-zero-downtime in-place deployment, not true zero downtime. A single EC2 instance and single application container still have a replacement window.

#### Incident 5: EC2 disk usage increased — Docker build cache


Real hands-on incident

EC2 + Linux + Docker


**What was the problem?**

Your EC2 instance's disk usage increased after repeated deployments.

**Where did it happen?**

On your Ubuntu EC2 instance.

**How did you investigate it?**

First, you checked overall disk usage:

```bash
df -h
```

Then you inspected Docker's storage usage:

```bash
docker system df
```

You found approximately:

```text
Build Cache: 7.09 GB
Reclaimable: 100%
```

**Why did it happen?**

Repeated Docker builds had accumulated BuildKit build cache.

Build cache is useful because Docker can reuse previous build layers, but unused cache can consume substantial disk space.

**How did you solve it?**

You used:

```bash
docker builder prune -f
```

And:

```bash
docker image prune -f
```

You also used a time-based cleanup:

```bash
docker builder prune -f --filter "until=72h"
```

You incorporated Docker cleanup into your deployment housekeeping.

**How did you verify it?**

You could recheck:

```bash
docker system df
df -h
```

to confirm the storage had been reclaimed.

**Interview answer:**

> "I noticed that disk usage was increasing on my EC2 instance after repeated Docker deployments. I checked df -h and docker system df and identified around 7 GB of reclaimable BuildKit cache. I cleaned unused build cache and dangling images and incorporated cleanup into my deployment process. This helped control disk usage on the small EC2 instance."

**Tools:** `df -h`, `docker system df`, `docker builder prune`, `docker image prune`.

**Important distinction:**

- `docker builder prune` cleans build cache.
- `docker image prune` cleans unused dangling images by default.
- `docker volume prune` is different; never casually delete volumes because they may contain persistent application data.

#### Incident 6: Database backup failed — incorrect path and Docker bind mount


Real hands-on incident

Docker + Linux + S3


**What was the problem?**

You wanted to back up the application's SQLite database to S3, but your expected database path was incorrect.

**Where did it happen?**

On your EC2 host and inside the GramSaarthi Docker container.

**How did you investigate it?**

You searched for the database:

```bash
find /opt/app -name "*.db"
```

You found:

```text
/opt/app/prisma/dev.db
```

Then you inspected the container:

```bash
docker inspect gramsaarthi-app
```

You discovered this bind mount:

```text
Host:      /opt/app/data
Container: /app/prisma
```

**Why did it happen?**

A Docker bind mount maps a host directory into a container directory.

The host directory's contents appear at the mounted container path, masking what was originally in that container directory.

You expected the database to be present in the original container directory, but the mounted host directory was empty.

**How did you solve it?**

You placed the database in the correct host-side mounted directory:

```text
/opt/app/data/dev.db
```

You also adjusted its permissions so the application container's user (UID 1001) could access it.

Then you verified the database and uploaded the backup to S3:

```bash
aws s3 cp backup.db \
  s3://gramsaarthi-backups-519607954788/database/
```

**Interview answer:**

> "I faced an issue while backing up the SQLite database to S3 because the database wasn't present at the path I expected. I used find to locate it and docker inspect to investigate the container's bind mounts. I discovered that the host directory mounted at /app/prisma was masking the container's original directory contents. I placed the database in the correct host-side mounted location, corrected permissions and then uploaded the backup to S3."

**Tools:** `find`, `docker inspect`, Linux file permissions, AWS CLI, S3.

**Concepts demonstrated:** Bind mounts, host vs container filesystem, persistent storage, file ownership and permissions, database backups.

#### Incident 7: CloudWatch alarm — testing high CPU utilization


Real hands-on test

CloudWatch + EC2


**What was the problem you wanted to solve?**

You wanted to confirm that your EC2 monitoring and CloudWatch alarm actually detected high CPU utilization.

This was a controlled monitoring test, not an unexpected production outage.

**Where did it happen?**

AWS CloudWatch → EC2 → CPUUtilization.

**What did you configure?**

You created:

```text
Alarm: GramSaarthi-High-CPU-Alarm
Metric: CPUUtilization
Threshold: > 60%
Period: 1 minute
Statistic: Average
```

**How did you test it?**

You intentionally generated CPU load on the EC2 instance:

```bash
timeout 120s dd if=/dev/zero of=/dev/null &
timeout 120s dd if=/dev/zero of=/dev/null &
```

**What happened?**

CPU utilization increased to approximately 81.275%.

The alarm transitioned:

```text
OK
  ↓
In Alarm
  ↓
OK
```

After the controlled workload stopped, CPU utilization returned to normal.

**Interview answer:**

> "I configured a CloudWatch CPU utilization alarm with a 60% threshold. Instead of assuming it was working, I performed a controlled load test on my EC2 instance using dd processes with a timeout. CPU utilization reached approximately 81%, which triggered the alarm. Once the load stopped, the alarm returned to OK. This verified that my monitoring configuration was working."

**Tools:** CloudWatch, EC2, Linux `dd`, `timeout`.

**What this demonstrates:** Monitoring configuration, metric thresholds, controlled testing and alert verification.

<a id="phase-15-section-3"></a>

### 3. Other Linux and infrastructure investigations you performed

These are additional hands-on diagnostics you can discuss if the interviewer asks about your experience investigating a server.

| What you investigated              | Command/tool             | What you learned                                                  |
| ---------------------------------- | ------------------------ | ----------------------------------------------------------------- |
| Memory consumption                 | `free -m`                | Checked total, used, available RAM and swap                       |
| Highest memory-consuming processes | `ps aux --sort=-%mem`    | Identified Docker daemon as a significant memory consumer         |
| Listening ports                    | `ss -tulpn`              | Found Caddy on 80/443, Docker application port 3000 and SSH on 22 |
| Running containers                 | `docker ps`              | Verified the application container was running                    |
| Disk utilization                   | `df -h`                  | Checked filesystem capacity and available space                   |
| Docker storage                     | `docker system df`       | Identified build cache consumption                                |
| Service status                     | `systemctl status caddy` | Confirmed Caddy service status                                    |
| Service logs                       | `journalctl -u caddy`    | Investigated reverse-proxy errors                                 |
| Container configuration            | `docker inspect`         | Investigated bind mounts and container configuration              |
| System load                        | `uptime`                 | Checked load averages and uptime                                  |
| Kernel/OS                          | `uname -a`               | Inspected OS and kernel information                               |

##### A useful interview explanation

> "I also performed server-level diagnostics on my EC2 instance. For example, I used ps aux to identify memory-consuming processes, free -m to inspect memory and swap, ss -tulpn to identify listening ports, df -h for disk utilization, and journalctl to investigate service logs. I used docker inspect to investigate container configuration and bind mounts. These commands helped me understand whether a problem was related to the application, container, operating system or network."

<a id="phase-15-section-4"></a>

### 5. Important interview questions based on your real debugging experience

These are the questions I would prioritize.

#### General debugging questions


**Q15.18. How do you identify whether the issue is in the application, Docker, Linux or AWS?**

> I investigate layer by layer. First, I check whether the application process is running and whether its logs show errors. Then I check the Docker container and port mappings, followed by Linux service status, resource utilization and listening ports. Finally, I check AWS networking, IAM permissions, load balancer health checks and CloudWatch metrics.

**Q15.19. What is the difference between a symptom and a root cause?**

> A symptom is what we observe, such as a 502 error. The root cause is the underlying reason, such as the application container being stopped during deployment. Fixing only the symptom may not prevent the issue from happening again.


**Q15.20. How do you prevent the same issue from happening again?**

> I improve the process that allowed the failure. For example, I added retries to the deployment health check, changed deployment sequencing to avoid stopping the old application before the new image was built, and added Docker cleanup to manage disk usage.

#### Questions about your incidents

| Interview question                        | Your best incident       |
| ----------------------------------------- | ------------------------ |
| Tell me about a difficult bug you solved. | 502 deployment incident  |
| Have you faced an AWS permission issue?   | SSM AccessDenied         |
| Have you worked with load balancers?      | ALB 308 health check     |
| Have you faced disk-space problems?       | Docker build cache       |
| Have you debugged a Docker volume issue?  | Database bind mount      |
| Have you implemented monitoring?          | CloudWatch CPU alarm     |
| Have you improved a deployment pipeline?  | Health-check retry logic |
| How do you debug Linux servers?           | EC2 diagnostics          |

<a id="phase-15-section-5"></a>

### 6. Your debugging toolkit — commands to remember

These are particularly relevant to your real GramSaarthi work.

| Purpose                 | Command                         |
| ----------------------- | ------------------------------- |
| Running containers      | `docker ps`                     |
| All containers          | `docker ps -a`                  |
| Container logs          | `docker logs <container>`       |
| Last 50 log lines       | `docker compose logs --tail=50` |
| Follow logs             | `docker logs -f <container>`    |
| Container configuration | `docker inspect <container>`    |
| Docker disk usage       | `docker system df`              |
| Disk utilization        | `df -h`                         |
| Memory utilization      | `free -m`                       |
| Process memory          | `ps aux --sort=-%mem`           |
| Listening ports         | `ss -tulpn`                     |
| Service status          | `systemctl status <service>`    |
| Service logs            | `journalctl -u <service>`       |
| Current system load     | `uptime`                        |
| Search for files        | `find /path -name "*.db"`       |
| Test HTTP endpoint      | `curl -I <URL>`                 |
| Check response headers  | `curl -v <URL>`                 |
| Check PM2 processes     | `pm2 status`                    |
| PM2 logs                | `pm2 logs`                      |

<a id="phase-15-section-6"></a>

### 7. Final priority — what to prepare before the interview

#### Your debugging story tracker

**1. 502 Bad Gateway**

Highest priority

Explain Caddy → Docker → port 3000 → deployment sequence → fix.

**2. SSM AccessDenied**

High priority

Explain IAM role → missing permissions → SSM policy → successful session.

**3. ALB unhealthy / 308**

High priority

Explain health check → Caddy redirect → HTTP 308 → matcher adjustment.

**4. Docker disk buildup**

High priority

Explain `df -h` → `docker system df` → 7.09 GB cache → cleanup.

**5. Database bind mount**

High priority

Explain `find` → `docker inspect` → bind mount masking → permissions → S3.

**6. Health-check retry**

High priority

Explain curl 56 → slow startup → retry logic → deployment verification.

**7. CloudWatch CPU alarm**

Good additional example

Explain threshold → controlled load → 81% CPU → alarm recovery.

#### One final answer to memorize

If the interviewer asks, **"What debugging experience do you have?"**, use this answer:

> "I have practical troubleshooting experience from my GramSaarthi AI project, which I deployed on AWS.
>
> I faced several infrastructure and deployment issues. For example, I encountered a 502 Bad Gateway during deployment. I investigated Caddy logs and discovered that my deployment process stopped the existing Docker container before building the replacement image. I changed the sequence to build first and replace the application afterward, which significantly reduced the outage.
>
> I also resolved an SSM AccessDenied issue by configuring the correct EC2 IAM role, an ALB unhealthy-target issue caused by an HTTP 308 redirect, and a Docker disk-usage issue where I found around 7 GB of reclaimable build cache.
>
> I also investigated a database backup problem using Linux file-search commands and Docker inspection, which helped me identify a bind-mount issue. Additionally, I implemented retry-based deployment health checks and tested CloudWatch alarms using controlled CPU load.
>
> I generally debug systematically: observe the symptoms, gather evidence from logs and metrics, isolate the root cause, test a solution and verify the result. I try to prevent the same issue from recurring through automation and monitoring."


<a id="phase-15-section-7"></a>

### Browser DevTools — A Practical Investigation

For a failed form submission, inspect layers in order:

1. **Elements and computed styles:** Check the actual DOM, disabled controls and layout rules rather than assuming the JSX matches what is displayed.
2. **Console:** Read the first relevant exception and its stack; later failures may be consequences.
3. **Network:** Inspect method, URL, request payload, status, timing, response and preflight behavior. Separate a rejected server response from a request the browser never sent.
4. **Sources:** Pause at the event handler or exception, inspect values and step through the failing branch.
5. **Application/storage:** Inspect cookies and stored values, including expiration and scope. Do not publish tokens in screenshots or logs.
6. **Performance and memory:** Record a repeatable slow interaction, locate expensive work and compare after the fix. A single slow observation is not enough to establish a bottleneck.

**Interview exercise:** A request succeeds in Postman but fails in the UI. Compare the exact requests, credentials and origins, inspect the preflight if present, and correlate with server logs. Postman's success does not prove browser CORS configuration is correct. Browser storage and CORS mechanics are in [Web Foundations](#phase-1); authorization belongs in [Security](#phase-13).

---

<a id="phase-15-section-8"></a>

### Browser and API investigation exercises

<a id="phase-15-section-9"></a>

### Practical Full Stack Scenarios

**Q15.21. What happens when a user submits a form on a website?**

Answer: When a user submits a form, the browser triggers a submit event.

The frontend can validate the input and send an API request to the backend. The backend validates the data again, executes business logic, communicates with the database and returns a response.

The frontend then updates the interface based on the response.

For example, when a student applies for a placement drive, the application is validated and saved in PostgreSQL before the frontend displays a success message.

**Q15.22. How would you debug a problem that occurs in both the frontend and backend?**

Answer: I would start by reproducing the issue and then trace the request from the frontend to the backend.

My debugging process would be:

1. Check browser console errors.
2. Inspect the Network tab for failed API requests.
3. Verify the request URL, headers and payload.
4. Check backend logs and error messages.
5. Test the API independently using Postman.
6. Inspect database operations if necessary.

This helps identify whether the issue comes from the frontend, API, backend logic or database.

**Q15.23. What would you do if an API works in Postman but fails in the browser?**

Answer: I would first inspect the browser's Network tab and Console.

One possible reason is a CORS configuration problem because Postman does not enforce browser CORS restrictions.

I would also compare the request headers, authentication credentials, URL and payload to identify any other differences.

**Q15.24. How would you improve the performance of a slow-loading webpage?**

Answer: I would first use browser DevTools and performance tools to identify the actual bottleneck.

Then I would consider:

- Compressing and optimizing images.
- Minifying CSS and JavaScript.
- Lazy-loading images and unnecessary components.
- Reducing unnecessary JavaScript.
- Using browser caching.
- Reducing unnecessary network requests.
- Improving server response time.

I would measure performance before and after making changes rather than assuming an optimization has helped.


**Q15.25. What is browser DevTools?**

Answer: Browser DevTools is a collection of developer tools built into browsers such as Chrome.

It helps developers inspect HTML and CSS, debug JavaScript, monitor network requests, analyze performance and inspect storage.

For example, I can use the Network tab to identify a failed API request and the Console tab to inspect JavaScript errors.


<a id="phase-15-section-10"></a>

### Practical React Debugging

#### Q15.26. Why is a React component rendering repeatedly?

**Answer:**

Possible causes:

1. State updates.
2. Parent component rendering.
3. Context value changes.
4. An Effect updates state repeatedly.
5. Changing keys remount components.
6. Strict Mode development checks.

Example of an infinite loop:

```javascript
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

The Effect changes `count`, which changes its dependency, causing the Effect to run again.

Correct the logic based on the actual requirement. Do not remove dependencies merely to silence the issue.

#### Q15.27. Why is state not updating immediately?

**Answer:**

State setters schedule updates. They do not change the state variable in the currently executing render.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

    console.log(count);
  }

  return (
    <button onClick={handleClick}>
      Increment
    </button>
  );
}
```

The console logs the value from the current render, not the next state.

Use a functional update when the next state depends on the previous state:

```javascript
setCount(previous => previous + 1);
```

#### Q15.28. Why does a `useEffect()` run twice in development?

**Answer:**

One common reason is React Strict Mode.

In development, Strict Mode performs an additional Effect setup-and-cleanup cycle to help detect missing cleanup and unsafe assumptions.

Do not simply disable Strict Mode to hide the issue.

Instead:

- Ensure cleanup is correct.
- Avoid non-idempotent side effects in Effects.
- Move user-triggered actions into event handlers.
- Use request cancellation where appropriate.

#### Q15.29. Why is a child component re-rendering even when its data looks unchanged?

**Answer:**

Because JavaScript compares objects and functions by reference.

Example:

```jsx
<Child user={{ name: "Chirag" }} />
```

The object is newly created on each parent render.

Similarly:

```jsx
<Child onClick={() => console.log("Hello")} />
```

A new function is created.

Possible solutions include:

- `React.memo()`.
- `useMemo()`.
- `useCallback()`.

But only optimize when profiling shows the extra renders matter.


<a id="phase-15-section-11"></a>

### Python debugger and logging APIs

#### 57. Debugging

Python debugging can be performed using:

- `print()` statements.
- IDE breakpoints.
- VS Code debugger.
- `pdb`.
- Logging.
- Exception tracebacks.

Example using `pdb`:

```python
import pdbdef add(a, b):    pdb.set_trace()    result = a + b    return resultprint(add(10, 20))
```

Common debugger commands include:

| Command      | Purpose               |
| ------------ | --------------------- |
| `n`          | Next line             |
| `s`          | Step into             |
| `c`          | Continue              |
| `p variable` | Print variable        |
| `l`          | Show surrounding code |
| `q`          | Quit debugger         |

#### Python logging API

Logging records events that happen while an application runs.

```python
import logginglogging.basicConfig(    level=logging.INFO,    format="%(asctime)s - %(levelname)s - %(message)s")logging.debug("Debug message")logging.info("Application started")logging.warning("Something unusual happened")logging.error("Operation failed")logging.critical("Critical failure")
```

Logging levels from least to most severe:

1. DEBUG
2. INFO
3. WARNING
4. ERROR
5. CRITICAL

In real projects, use logging instead of relying only on `print()` statements.


<a id="phase-15-section-12"></a>

### Node.js logging and debugger

<a id="phase-15-section-13"></a>

### Logging, Debugging and Testing

**Q15.30. What is logging?**

Answer: Logging records application events and system behaviour, such as incoming requests, authentication failures, database errors, and background job execution. Structured logging with tools such as Pino or Winston is useful in production.

**Q15.31. How do you debug a Node.js application?**

Answer: Use console logs, stack traces, breakpoints, the Node.js inspector, the VS Code debugger, and request/database logs.

```bash
node --inspect src/server.js
node --inspect-brk src/server.js
```

The second command pauses at the beginning. Do not expose the inspector port to untrusted networks.

---

<a id="phase-16"></a>

## Phase 16 — Linux, AWS, Docker, GitHub Actions and CI/CD

**Objective:** Operate the application, automate checks and deploy reproducibly. Terraform and alternate hosts are optional extensions.

**Sections:** [Cloud Computing Fundamentals](#phase-16-section-1) · [How an Application Reaches Production](#phase-16-section-2) · [Linux and Server Administration](#phase-16-section-3) · [Docker and Containerization](#phase-16-section-4) · [AWS Fundamentals and Networking](#phase-16-section-5) · [AWS Services Relevant to Your Projects](#phase-16-section-6) · [Optional extension — Terraform and Infrastructure as Code](#phase-16-section-7) · [CI/CD and GitHub Actions](#phase-16-section-8) · [Vercel, Render, Caddy and PM2](#phase-16-section-9) · [Pipeline Workshop — Node.js and PostgreSQL](#phase-16-section-10) · [Build a GitHub Actions CI workflow](#phase-16-section-11) · [DevOps Practical Completion Check](#phase-16-section-12) · [Python deployment configuration](#phase-16-section-13) · [Node.js deployment configuration](#phase-16-section-14) · [Environment Variables and Configuration](#phase-16-section-15)

<a id="phase-16-section-1"></a>

### Cloud Computing Fundamentals

#### Q16.1. What is cloud computing?

Cloud computing is the delivery of computing resources—such as servers, storage, databases, networking and software—over the internet.

Instead of purchasing and maintaining physical servers yourself, you rent resources from a cloud provider.

Examples:

- Amazon Web Services (AWS).
- Microsoft Azure.
- Google Cloud Platform.

Suppose you develop a Next.js application.

**Without cloud computing:**

```text
Your computer
    ↓
Buy physical server
    ↓
Install operating system
    ↓
Configure networking
    ↓
Deploy application
    ↓
Maintain hardware
```

**With cloud computing:**

```text
Developer
    ↓
Cloud provider
    ↓
Virtual server (EC2)
    ↓
Install Docker
    ↓
Deploy application
    ↓
Users access application
```

The key idea: you consume infrastructure as a service instead of owning and maintaining all the underlying hardware.

#### Q16.2. Why do companies use cloud computing?

1. **Scalability:** Increase or decrease computing resources.
2. **Cost flexibility:** Pay for resources used instead of buying all infrastructure upfront.
3. **Availability:** Use multiple availability zones and redundant services.
4. **Global reach:** Deploy applications in different geographical regions.
5. **Managed services:** Reduce infrastructure maintenance.
6. **Automation:** Provision resources using APIs and Infrastructure as Code.

For example, a student management platform may begin with one small server. If traffic increases, the company can add more application instances and distribute traffic between them.

#### Q16.3. What are IaaS, PaaS and SaaS?

**IaaS — Infrastructure as a Service**

![IaaS / Infrastructure as a Service | PC・IT用語集](https://images.openai.com/static-rsc-4/A6uUnt87SnIGSMBM6F0jD6cVFpqr-0gbM-6oMB5hbNaK-gmIseJ09q-CbWvvtboKIgnID_G6w5OZ2yYNlVYtO7DZ0kpkV1GCibXOAAOwYen5KcI_U0SPJ14VwclHBlI6DPpIdiWTRmRfIKqtLRPFzVuTBvj2BvRcAGD0fpmufiI?purpose=inline)

[noveblo.com](https://noveblo.com/glossary/iaas.html?utm_source=chatgpt.com)

You rent infrastructure such as virtual machines, storage and networks.

Examples: AWS EC2, Azure Virtual Machines.

You manage the OS, runtime, application and data.

**PaaS — Platform as a Service**

![Platform as a Service (PaaS): Pengertian, Cara Kerja, dan Contoh | Blog Roofel](https://images.openai.com/static-rsc-4/CBm226ZxTCG0kIOq-FYNs812GgMNEtnSMckhKP4YMAje1paepuxbchNwUNrq9NlOecIPHKB53HYjgmAaAoDkfUylMLIkrbecViGihtIaOjrFVc2Fe_HW5I7hRgUpJbmV5WDWmWZbcA4H30VeUYVfnafLmiBDhELgnJ7U1Ccx4Wc?purpose=inline)

[roofel.com](https://roofel.com/blog/pengertian-paas?utm_source=chatgpt.com)

You deploy your application on a managed platform.

Example: Render.

The provider manages much of the underlying infrastructure.

**SaaS — Software as a Service**

![Key Benefits of Custom SaaS Development - DEV Community](https://images.openai.com/static-rsc-4/Msbds0nipxVzAESVsKgxQne3UFV_ag_EnxDsOSVn-Elx-mJRBawcGM9ujj0ayxk98oRriDcEx6LMw_TG6H2-R5M1yE1qz5YNNwWv2SxeDBb1qAEmw4_renW_DcDzrKrl6Dr62l0lfJ0qdTz2CP1vlMQOc48cShgw3vt76rVdAUk?purpose=inline)

[dev.to](https://dev.to/artyom_mukhopad_a9444ed6d/key-benefits-of-custom-saas-development-1fi7?utm_source=chatgpt.com)

You use a complete software product over the internet.

Examples: Gmail, Slack, Microsoft 365.

Interview shortcut:

- IaaS: Rent infrastructure.
- PaaS: Deploy applications on a managed platform.
- SaaS: Use ready-made software.

#### Q16.4. Scalability vs elasticity

Scalability means the system can handle increased workload by adding resources.

Elasticity means resources can automatically or dynamically increase and decrease as demand changes.

| Horizontal scaling           | Vertical scaling                     |
| ---------------------------- | ------------------------------------ |
| Add more instances           | Increase resources of an instance    |
| Example: 2 EC2 instances → 5 | Example: small EC2 → larger instance |
| Can improve redundancy       | Has a maximum machine size           |
| Often needs load balancing   | May require downtime                 |

![Scalability — Vertical or Horizontal Scaling when Designing Architectures | by Ahmad Sadiq | Medium](https://images.openai.com/static-rsc-4/82gt-rtDVe_LEjmVqx8MK-bQTx4M1_hNjzX0RavykHvmVaEvGThd1hY4Fj5WPn7RziikSb88_9eGg2d0skkRqLERG96WSYA-iEiaYCInzjRF-TYNkcGWG-8Ralz8BlixY4VDTVPax1Ne-n8tJJBKP4dFq6QW2hpnWiDoQ81cbpo?purpose=inline)

[medium.com](https://medium.com/%40ahmadsadiq885/scalability-vertical-or-horizontal-scaling-when-designing-architectures-931a306e9d68?utm_source=chatgpt.com)

Example:

- Vertical: Upgrade a server from 2 GB RAM to 8 GB RAM.
- Horizontal: Run four application servers instead of one.

#### Q16.5. What is high availability?

High availability means designing a system to remain accessible despite individual component failures.

```text
             Users
               |
          Load Balancer
           /       \
        EC2-A      EC2-B
        AZ-1       AZ-2
           \       /
          Shared/managed
          data services
```

If one instance fails, traffic can be directed to a healthy instance.

High availability does not guarantee zero downtime. It requires redundancy, health checks, recovery procedures and careful deployment.

#### Q16.6. Region vs Availability Zone

- **Region:** A separate geographical area containing AWS infrastructure.
- **Availability Zone (AZ):** An isolated location within a region containing one or more data centres.

For example, AWS Mumbai is region `ap-south-1`.

A region can have multiple availability zones. Deploying across multiple AZs can improve resilience.

<a id="phase-16-section-2"></a>

### How an Application Reaches Production

#### Q16.7. What happens when you deploy a web application?

Imagine a user opens:

```text
https://gramsaarthi-ai.chiragvasava.me
```

A simplified request path:

1

**Browser**

User requests the website.

2

**DNS**

Domain resolves to the relevant public endpoint.

3

**Network / Load balancer / Reverse proxy**

HTTPS traffic reaches the server entry point.

4

**Application server**

Request is routed to the Next.js application.

5

**Backend / Database / External APIs**

Application performs business operations.

6

**Response**

HTML, JSON or other content returns to the browser.

The exact architecture varies by application. In GramSaarthi's documented architecture, Caddy handles reverse proxying and HTTPS in front of the Dockerized Next.js application; its separate infrastructure documentation also describes an Application Load Balancer.


#### Q16.8. What is a reverse proxy?

A reverse proxy receives requests from clients and forwards them to backend application servers.

```text
Browser
   |
 HTTPS :443
   |
 Caddy
   |
 HTTP localhost:3000
   |
 Next.js application
```

Benefits:

- TLS termination.
- Routing.
- Request forwarding.
- Centralized entry point.
- Can support load balancing and security controls.

In GramSaarthi, Caddy is used as the reverse proxy and handles automatic HTTPS certificate management.

#### Q16.9. Forward proxy vs reverse proxy

| Forward proxy                           | Reverse proxy                              |
| --------------------------------------- | ------------------------------------------ |
| Represents clients                      | Represents servers                         |
| Client traffic goes through it          | Server traffic comes through it            |
| Can control outbound requests           | Can route incoming requests                |
| Often used for outbound access controls | Often used for TLS termination and routing |

<a id="phase-16-section-3"></a>

### Linux and Server Administration

Cloud servers commonly run Linux. You should be comfortable navigating directories, managing processes, inspecting logs and diagnosing network problems.

#### Q16.10. What is Linux?

Linux is an open-source, Unix-like operating system kernel. Linux distributions combine the kernel with system utilities, libraries and package management.

Common distributions:

- Ubuntu.
- Debian.
- Amazon Linux.
- Red Hat Enterprise Linux.
- Fedora.

Your GramSaarthi and UniNest deployment experience includes Ubuntu-based EC2 servers.

#### Q16.11. Important Linux commands

| Command | Purpose                | Example                       |
| ------- | ---------------------- | ----------------------------- |
| `pwd`   | Current directory      | `pwd`                         |
| `ls`    | List files             | `ls -la`                      |
| `cd`    | Change directory       | `cd /var/www`                 |
| `mkdir` | Create directory       | `mkdir app`                   |
| `cp`    | Copy files             | `cp app.env backup.env`       |
| `mv`    | Move/rename            | `mv old.txt new.txt`          |
| `rm`    | Remove files           | `rm old.txt`                  |
| `cat`   | Display file           | `cat app.log`                 |
| `grep`  | Search text            | `grep ERROR app.log`          |
| `find`  | Find files             | `find . -name "*.log"`        |
| `chmod` | Change permissions     | `chmod 600 key.pem`           |
| `ps`    | Inspect processes      | `ps aux`                      |
| `top`   | Monitor processes      | `top`                         |
| `kill`  | Send signal to process | `kill 1234`                   |
| `curl`  | Make HTTP requests     | `curl -I https://example.com` |
| `ssh`   | Connect remotely       | `ssh user@server-ip`          |

##### Practical server diagnosis

Check the current directory:

```bash
pwd
```

List hidden files and permissions:

```bash
ls -lah
```

Find a Docker Compose file:

```bash
find / -name "docker-compose.yml" 2>/dev/null
```

Search application logs:

```bash
grep -i "error" app.log
```

Watch logs continuously:

```bash
tail -f app.log
```

Check listening ports:

```bash
sudo ss -tulpn
```

Check disk usage:

```bash
df -h
```

Check directory sizes:

```bash
du -sh /var/lib/docker
```

Check memory:

```bash
free -h
```

Check running processes:

```bash
ps aux
```

#### Q16.12. What are Linux file permissions?

Linux permissions define who can read, write or execute a file.

Three categories:

- `u`: Owner.
- `g`: Group.
- `o`: Others.

Three main permissions:

- `r`: Read = 4.
- `w`: Write = 2.
- `x`: Execute = 1.

Example:

```bash
chmod 755 deploy.sh
```

| User category | Permission             | Numeric value |
| ------------- | ---------------------- | ------------- |
| Owner         | Read + write + execute | 7             |
| Group         | Read + execute         | 5             |
| Others        | Read + execute         | 5             |

For an SSH private key:

```bash
chmod 400 my-key.pem
```

This restricts access to the file owner.

Do not use `chmod 777` as a generic permission fix. It grants everyone read, write and execute permissions and can create security problems.

#### Q16.13. How do you connect to an AWS EC2 instance using SSH?

Typical command:

```bash
ssh -i my-key.pem ubuntu@<EC2_PUBLIC_IP>
```

- `-i`: Specifies the private key.
- `my-key.pem`: SSH private key.
- `ubuntu`: Common default username for Ubuntu AMIs.
- `EC2_PUBLIC_IP`: Public IP of the instance.

Possible errors:

**Permission denied (publickey)**

Check:

1. Correct username.
2. Correct private key.
3. File permissions.
4. Key pair associated with the instance.

**Connection timed out**

Check:

1. Instance state.
2. Public IP.
3. Security group inbound SSH rule.
4. Network ACL and routing.
5. Whether SSH is listening.

For GramSaarthi, AWS Systems Manager (SSM) provides an alternative administrative access route without requiring ordinary inbound SSH access, when the instance and IAM configuration are correctly set up.

#### Q16.14. What is `systemctl`?

`systemctl` manages services on Linux systems using systemd.

```bash
sudo systemctl status docker
sudo systemctl start docker
sudo systemctl stop docker
sudo systemctl restart docker
sudo systemctl enable docker
```

- `start`: Starts a service.
- `stop`: Stops a service.
- `restart`: Restarts a service.
- `enable`: Configures a service to start automatically at boot.
- `status`: Shows current status.

View logs:

```bash
sudo journalctl -u docker -n 100
```

Follow logs:

```bash
sudo journalctl -u docker -f
```

#### Q16.15. How do environment variables configure a deployed service?

Environment variables are key-value configuration values made available to processes.

Example:

```bash
export NODE_ENV=production
export PORT=3000
```

Read them:

```bash
echo $NODE_ENV
echo $PORT
```

In Python:

```python
import osport = os.getenv("PORT", "8000")print(port)
```

In Node.js:

```javascript
console.log(process.env.PORT);
```

Typical environment variables:

```text
DATABASE_URL
JWT_SECRET
GEMINI_API_KEY
PORT
NODE_ENV
```

**Security rule:** Do not commit secrets or production `.env` files to Git.

#### Q16.16. What are pipes and redirection?

A pipe sends the output of one command to another.

```bash
ps aux | grep node
```

This filters process output to find Node.js processes.

Redirection:

```bash
echo "Deployment started" > deploy.log
```

Overwrites the file.

```bash
echo "Deployment complete" >> deploy.log
```

Appends to the file.

Send error output to a file:

```bash
command 2> error.log
```

Send both normal and error output to one file:

```bash
command > output.log 2>&1
```

#### Q16.17. What is `curl` used for in production troubleshooting?

`curl` can test HTTP endpoints from the server itself.

Check application health:

```bash
curl -i http://localhost:3000/health
```

Check response headers:

```bash
curl -I https://example.com
```

Test an API:

```bash
curl -X POST http://localhost:8000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Chirag","email":"chirag@example.com"}'
```

This is useful for distinguishing application problems from reverse proxy, DNS or browser-side problems.

<a id="phase-16-section-4"></a>

### Docker and Containerization

#### Q16.18. What is Docker?

Docker is a platform for building, distributing and running applications inside containers.

A container packages an application with its dependencies and configuration needed to run it.

Without containers:

```text
Developer machine:
  Node 22
  Package versions A
  Configuration X

Server:
  Node 20
  Package versions B
  Configuration Y

Possible environment mismatch
```

With Docker:

```text
Application
    +
Runtime
    +
Dependencies
    +
Configuration
    ↓
Docker image
    ↓
Container
    ↓
Consistent execution environment
```

#### Q16.19. Docker image vs container

| Docker image                | Docker container                  |
| --------------------------- | --------------------------------- |
| Read-only packaged template | Running or stopped instance       |
| Built from Dockerfile       | Created from an image             |
| Can be shared               | Has its own writable layer        |
| Can create many containers  | Represents one container instance |

Think of a class and object:

- Image = class/template.
- Container = running instance.

![Docker Image vs Container — Explained in Simple Terms | by Moinul Hossain | Feb, 2026 | Medium](https://images.openai.com/static-rsc-4/1oo3nIv-RbVLwtK55Yl4_7fuEwXSAZCuZwYaJyyXqUKvQ7pBBQcXLCDAy49e2j-a8G21TD62CMPpJHJNuSzFOP30lm_ID080Nk4vacLRkjgZGgDjhdslShXTG8FPr_yu3k6EY7zk6RCP8ruRVq4BUqrXs3ZAznTl8llC3ImACas?purpose=inline)

[medium.com](https://medium.com/%40moinulhossainmahim/docker-image-vs-container-explained-in-simple-terms-a69b4f05eb52?utm_source=chatgpt.com)

#### Q16.20. What is a Dockerfile?

A Dockerfile contains instructions for building a Docker image.

We'll create a small FastAPI service.

Project:

```text
fastapi-docker/
├── main.py
├── requirements.txt
└── Dockerfile
```

`main.py`:

```python
from fastapi import FastAPIapp = FastAPI()@app.get("/")def home():    return {"message": "Hello from Docker"}@app.get("/health")def health():    return {"status": "ok"}
```

`requirements.txt`:

```text
fastapi
uvicorn[standard]
```

`Dockerfile`:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Understand every instruction:

| Instruction | Meaning                               |
| ----------- | ------------------------------------- |
| `FROM`      | Base image                            |
| `WORKDIR`   | Working directory                     |
| `COPY`      | Copy files into image                 |
| `RUN`       | Execute a build-time command          |
| `EXPOSE`    | Document intended container port      |
| `CMD`       | Default command when container starts |

`EXPOSE` does not publish the port to the host by itself.

#### Q16.21. How do you build and run a Docker container?

Build:

```bash
docker build -t fastapi-demo .
```

List images:

```bash
docker images
```

Run:

```bash
docker run -d \
  --name fastapi-app \
  -p 8000:8000 \
  fastapi-demo
```

Meaning:

```text
Host port 8000
      |
      v
Container port 8000
      |
      v
FastAPI application
```

Check running containers:

```bash
docker ps
```

Test:

```bash
curl http://localhost:8000/health
```

Expected response:

```json
{"status":"ok"}
```

View logs:

```bash
docker logs fastapi-app
```

Follow logs:

```bash
docker logs -f fastapi-app
```

Stop:

```bash
docker stop fastapi-app
```

Remove:

```bash
docker rm fastapi-app
```

Remove image:

```bash
docker rmi fastapi-demo
```

#### Q16.22. What is Docker port mapping?

The `-p` option maps a host port to a container port.

```bash
docker run -p 8080:8000 fastapi-demo
```

```text
Host machine:       8080
                       |
                       v
Container:          8000
                       |
                       v
FastAPI
```

You access:

```text
http://localhost:8080
```

This is different from the port on which the application listens inside the container.

#### Q16.23. What are Docker layers and build caching?

Docker images are built from layers.

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .
```

If only `main.py` changes, Docker may reuse the dependency installation layer.

This makes builds faster.

That is why copying dependency manifests before application source code is a common optimization.

#### Q16.24. What is a multi-stage Docker build?

A multi-stage build uses multiple build stages so that build-time dependencies do not need to be included in the final image.

Example for a Next.js application:

```dockerfile
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/public ./public

USER node

EXPOSE 3000

CMD ["npm", "start"]
```

The exact build must match the Next.js application's dependencies and deployment requirements; some Next.js deployments need additional runtime files or standalone output.

Benefits:

- Smaller runtime image.
- Less unnecessary build tooling.
- Smaller attack surface.
- Cleaner production packaging.

Your GramSaarthi documentation describes a multi-stage Docker build, a non-root runtime user and an image of approximately 180 MB.

#### Q16.25. What is a Docker volume?

A volume stores data independently of a container's writable filesystem.

Create a volume:

```bash
docker volume create app-data
```

Run a PostgreSQL container:

```bash
docker run -d \
  --name database \
  -v app-data:/var/lib/postgresql/data \
  postgres
```

If the container is removed and recreated using the same volume, database data can persist.

Without persistent storage, data stored only in the container's writable layer can be lost when the container is removed.

#### Q16.26. What is Docker networking?

Docker networking enables containers to communicate with one another.

```text
Docker network: app-network

Next.js container
        |
        | HTTP
        |
FastAPI container
        |
        | PostgreSQL protocol
        |
PostgreSQL container
```

Create a network:

```bash
docker network create app-network
```

Connect a container:

```bash
docker run -d \
  --name backend \
  --network app-network \
  fastapi-demo
```

Containers on the same user-defined bridge network can generally communicate using container names as DNS hostnames.

#### Q16.27. What is Docker Compose?

Docker Compose lets you define and run multiple containers using a YAML file.

Example `compose.yaml`:

```yaml
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      PORT: "8000"
    depends_on:
      - redis

  redis:
    image: redis:7-alpine
```

Start:

```bash
docker compose up -d --build
```

Check:

```bash
docker compose ps
```

Logs:

```bash
docker compose logs -f
```

Stop:

```bash
docker compose down
```

`depends_on` controls startup ordering, but it does not automatically guarantee that a dependency is ready to accept connections. Health checks and application retry logic may still be needed.

#### Q16.28. Docker vs virtual machine

| Docker container                 | Virtual machine                                   |
| -------------------------------- | ------------------------------------------------- |
| Shares host kernel               | Has its own guest OS kernel                       |
| Usually lighter                  | Usually heavier                                   |
| Faster startup in many workloads | Typically slower startup                          |
| Isolates processes               | Provides a separate virtual machine environment   |
| Good for application packaging   | Useful for full OS isolation and legacy workloads |

![10 Things to Know About Docker\<!-- --> | Spantree](https://images.openai.com/static-rsc-4/wWD0FUKj2dX3dPPKkHNCzWMYYVAPb0kAw8gWHDBZorFisARVJiYMO1GKNuUKLqPJoOw-a1goCq3D5GVEnSS1YNxDb2z_mIB1EnMtOmo4R2Mou9Uqlvx9OyfCHa752c7DWTOm_gu6YjUjxEy4QZ6sWhX1B7KcRsVfDxaykVluR-k?purpose=inline)

[spantree.net](https://spantree.net/blog/2015/04/29/10-things-to-know-about-docker.html?utm_source=chatgpt.com)

Containers still need security boundaries and proper configuration. They should not be assumed to provide the same isolation properties as a separate physical machine.

#### Q16.29. Important Docker commands

```bash
docker images
docker ps
docker ps -a

docker build -t app .
docker run -d -p 3000:3000 app

docker logs -f container-name
docker exec -it container-name sh

docker stop container-name
docker start container-name
docker restart container-name

docker rm container-name
docker rmi image-name

docker system df
docker image prune -f
docker builder prune
```

Production caution: Before pruning images, volumes or build cache, verify what resources are in use. Avoid destructive cleanup commands on production servers without understanding their impact.

<a id="phase-16-section-5"></a>

### AWS Fundamentals and Networking

#### Q16.30. What is AWS EC2?

Amazon EC2 stands for Elastic Compute Cloud.

It provides virtual machines called instances.

An EC2 instance can run:

- Ubuntu.
- Amazon Linux.
- Windows Server.
- Web servers.
- APIs.
- Docker containers.
- Background workers.

Example:

```text
AWS Region: ap-south-1
       |
       v
EC2 Instance
       |
       v
Ubuntu Linux
       |
       v
Docker
       |
       v
Next.js Application
```

#### Q16.31. What is an AMI?

AMI stands for Amazon Machine Image.

It is a template used to launch an EC2 instance.

An AMI includes information such as:

- Operating system.
- Root volume configuration.
- Preinstalled software.
- Launch permissions and metadata.

You can choose an Ubuntu AMI or Amazon Linux AMI when creating an instance.

#### Q16.32. What is an EC2 instance type?

An instance type determines the compute resources available to an EC2 instance.

Example:

```text
t3.micro
```

The instance family and size influence CPU, memory, networking and other characteristics.

Common categories:

- General purpose.
- Compute optimized.
- Memory optimized.
- Storage optimized.
- Accelerated computing.

For a small Next.js project, a small instance may be sufficient initially, but workload, memory usage, storage and build requirements determine the correct size.

#### Q16.33. What is a VPC?

Amazon VPC stands for Virtual Private Cloud.

It is a logically isolated network in AWS where you launch resources.

A VPC defines the network address range and contains subnets, route tables and network controls.

Example:

```text
VPC: 10.0.0.0/16
       |
       +----------------------+
       |                      |
 Public subnet           Private subnet
 10.0.1.0/24             10.0.2.0/24
       |                      |
   EC2 web server          Database
```

#### Q16.34. What is a subnet?

A subnet is a subdivision of a VPC's IP address range.

Subnets are associated with an availability zone.

Two common types:

- **Public subnet:** Has a route to an Internet Gateway.
- **Private subnet:** Does not provide direct inbound internet routing through an Internet Gateway.

A subnet is not public merely because its name says `public`; its route table and resource addressing determine connectivity.

#### Q16.35. What is an Internet Gateway?

An Internet Gateway enables communication between a VPC and the internet for resources with suitable routes and addressing.

Example public subnet route:

```text
Destination       Target
10.0.0.0/16       local
0.0.0.0/0         Internet Gateway
```

The route to the Internet Gateway alone does not make every instance internet-accessible. Public IP addressing and security rules also matter.

#### Q16.36. What is a route table?

A route table contains rules that determine where network traffic is directed.

Example:

| Destination   | Target           |
| ------------- | ---------------- |
| `10.0.0.0/16` | Local VPC        |
| `0.0.0.0/0`   | Internet Gateway |

The route table is associated with one or more subnets.

#### Q16.37. What is a Security Group?

AWS Security Groups control inbound and outbound network traffic for supported AWS resources such as EC2 instances.

Example web server security group:

| Direction | Protocol    | Port        | Source                                |
| --------- | ----------- | ----------- | ------------------------------------- |
| Inbound   | TCP         | 80          | `0.0.0.0/0`                           |
| Inbound   | TCP         | 443         | `0.0.0.0/0`                           |
| Inbound   | TCP         | 22          | Restricted admin IP, if SSH is needed |
| Outbound  | As required | As required | As required                           |

Security groups are stateful: return traffic for an allowed connection is automatically permitted.

Security best practice: Never expose SSH to the entire internet as a default configuration. Prefer SSM where practical.

#### Q16.38. Security Group vs Network ACL

| Security Group                          | Network ACL                    |
| --------------------------------------- | ------------------------------ |
| Applies to network interfaces/resources | Applies at subnet boundary     |
| Stateful                                | Stateless                      |
| Supports allow rules                    | Supports allow and deny rules  |
| Rules evaluated together                | Rules evaluated by rule number |

Remember:

- Security Group: Instance-level control.
- Network ACL: Subnet-level control.

#### Q16.39. Public IP vs Elastic IP

A public IP enables internet routing to a resource when the network is configured appropriately.

An Elastic IP is a static public IPv4 address allocated to your AWS account that can be associated with supported resources.

Why use an Elastic IP?

A stable address can be useful when DNS or external systems need a fixed IP endpoint.

An Elastic IP has billing implications, so check current AWS pricing and avoid leaving unused addresses allocated.


<a id="phase-16-section-6"></a>

### AWS Services Relevant to Your Projects

#### Q16.40. What is IAM?

AWS IAM stands for Identity and Access Management.

IAM controls who can access AWS resources and what actions they can perform.

| Concept          | Meaning                                          |
| ---------------- | ------------------------------------------------ |
| User             | Identity for a person or application             |
| Group            | Collection of IAM users                          |
| Role             | Identity that can be assumed by trusted entities |
| Policy           | JSON document defining permissions               |
| Instance profile | Mechanism to provide an IAM role to EC2          |

Example policy concept:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::my-app-bucket/backups/*"
    }
  ]
}
```

This allows reading objects under the specified backup prefix, subject to the rest of the effective permission configuration.


#### Q16.41. What is AWS Systems Manager (SSM)?

AWS Systems Manager provides tools to manage and operate AWS infrastructure.

One particularly useful feature is Session Manager.

It can let authorized administrators access an EC2 instance without opening inbound SSH port 22, provided:

- The SSM Agent is installed and running.
- The instance has an appropriate IAM role.
- Network connectivity to Systems Manager endpoints exists.
- The user has appropriate IAM permissions.

```text
Administrator
      |
      v
AWS Console / CLI
      |
      v
Systems Manager
      |
      v
SSM Agent on EC2
      |
      v
Shell session
```

This improves administrative access control and can support auditability.

#### Q16.42. What is Amazon S3?

Amazon S3 is an object storage service.

It is commonly used for:

- Backups.
- Uploaded documents.
- Images and videos.
- Logs and reports.
- Static assets.
- Build artifacts.

S3 stores objects inside buckets.

```text
Bucket: gramsaarthi-backups

  database/
    backup-2026-11-05.sql

  reports/
    monthly-report.pdf

  logs/
    application.log
```

Important features:

- Versioning.
- Lifecycle rules.
- Encryption.
- Access policies.
- Replication.
- Object retention controls.

Your GramSaarthi documentation describes S3 usage for database backups and report/artifact archiving.

#### Q16.43. What is CloudWatch?

Amazon CloudWatch is AWS's monitoring and observability service.

It can collect and display:

- Metrics.
- Logs.
- Alarms.
- Dashboards.
- Events.

Example monitoring flow:

```text
EC2
 |
 +---- CPU metrics
 |
 +---- CloudWatch Agent
          |
          +---- Memory metrics
          |
          +---- Disk metrics
                    |
                    v
                CloudWatch
                    |
                    v
                  Alarm
                    |
                    v
              Notification
```

Important distinction:

- EC2 basic monitoring provides standard instance metrics.
- Memory and disk utilization generally require the CloudWatch Agent or another appropriate collection mechanism.

Example:

```text
CPU Utilization > 80%
for 5 minutes
       ↓
CloudWatch Alarm
       ↓
SNS notification
```

Your GramSaarthi hands-on documentation describes CPU, RAM and disk monitoring, alarms and operational notifications.

#### Q16.44. What is an Application Load Balancer?

AWS Application Load Balancer (ALB) distributes HTTP and HTTPS traffic across registered targets.

It operates at Layer 7 of the OSI model.

```text
                 Users
                   |
                   v
           Application Load Balancer
                   |
              Target Group
               /       \
              v         v
            EC2-A     EC2-B
```

Important concepts:

- **Listener:** Accepts connections on a port.
- **Listener rule:** Defines routing conditions.
- **Target group:** Contains destinations for requests.
- **Health check:** Checks target health.
- **TLS certificate:** Enables HTTPS at the load balancer.

A target can be marked unhealthy if it fails the configured health checks.

Why use an ALB?

- Distributes traffic.
- Performs health checks.
- Supports path-based routing.
- Supports host-based routing.
- Can terminate TLS.
- Can improve application availability when multiple healthy targets exist.

Your GramSaarthi deployment notes describe target groups, health probing, SSL offloading and routing behaviour.

#### Q16.45. How do these AWS services work together?

Here is a representative deployment architecture:

```text
                         Users
                           |
                           v
                      DNS / HTTPS
                           |
                           v
                  Application Load Balancer
                           |
                           v
                      Target Group
                           |
                           v
                      EC2 Instance
                           |
                 +---------+---------+
                 |                   |
                 v                   v
              Docker              CloudWatch
                 |                   |
                 v                   v
            Next.js App          Metrics / Logs
                 |
                 v
             Caddy / API

EC2 IAM Role
     |
     +------> SSM
     |
     +------> S3
     |
     +------> CloudWatch
```

This is a conceptual architecture showing the services and their relationships. Exact request routing and the placement of Caddy versus ALB depend on the deployed configuration.

<a id="phase-16-section-7"></a>

### Optional extension — Terraform and Infrastructure as Code

#### Q16.46. What is Infrastructure as Code?

Infrastructure as Code (IaC) means defining and managing infrastructure using machine-readable configuration rather than creating every resource manually through a cloud console.

Without IaC:

```text
AWS Console
   ↓
Create VPC
   ↓
Create subnet
   ↓
Create Security Group
   ↓
Launch EC2
   ↓
Allocate Elastic IP
```

With Terraform:

```text
Terraform configuration
          |
          v
     terraform init
          |
          v
     terraform plan
          |
          v
     terraform apply
          |
          v
        AWS
```

Benefits:

- Repeatability.
- Version control.
- Consistency.
- Automation.
- Reviewable infrastructure changes.
- Easier recovery and recreation.

#### Q16.47. What is Terraform?

Terraform is an Infrastructure as Code tool that lets engineers define infrastructure using declarative configuration.

It supports AWS and other infrastructure providers.

Terraform configuration files commonly use `.tf` extension and HashiCorp Configuration Language (HCL).

#### Q16.48. What are Terraform providers?

A provider is a plugin that allows Terraform to interact with an external platform or service.

Example:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}
```

The AWS provider exposes resources and data sources used to manage AWS infrastructure.

Provider versions should be chosen based on project compatibility and the installed Terraform version.

#### Q16.49. What is a Terraform resource?

A resource represents infrastructure that Terraform manages.

Example: Create an AWS security group.

```hcl
resource "aws_security_group" "web" {
  name        = "web-security-group"
  description = "Allow web traffic"
  vpc_id      = var.vpc_id

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

This is an example resource. In a real deployment, `vpc_id` must refer to a valid VPC, and the ingress rules should match the intended architecture.

#### Q16.50. What are Terraform variables?

Variables make configuration reusable.

`variables.tf`:

```hcl
variable "aws_region" {
  description = "AWS deployment region"
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}
```

Use:

```hcl
provider "aws" {
  region = var.aws_region
}
```

```hcl
resource "aws_instance" "app" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
}
```

#### Q16.51. What are Terraform outputs?

Outputs expose useful values after Terraform creates or updates infrastructure.

```hcl
output "instance_public_ip" {
  value = aws_instance.app.public_ip
}
```

After applying:

```bash
terraform output
```

It can display the instance's public IP.

Avoid outputting secrets. Marking an output `sensitive = true` reduces accidental display, but it does not encrypt the underlying Terraform state.

#### Q16.52. What is Terraform state?

Terraform state is the record Terraform uses to map configuration resources to real infrastructure objects.

```text
Terraform configuration
       |
       v
aws_instance.app
       |
       v
Terraform state
       |
       v
Actual AWS EC2 instance
```

Common state file:

```text
terraform.tfstate
```

Why does state matter?

- Tracks managed resources.
- Stores resource attributes.
- Helps determine changes.
- Maps configuration addresses to real resource IDs.

**Critical security point:** State may contain sensitive information. Protect it carefully, restrict access and use an appropriate remote backend for team environments.

#### Q16.53. Difference between `terraform plan` and `terraform apply`

| Command              | Purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| `terraform init`     | Initializes working directory and downloads providers/modules |
| `terraform fmt`      | Formats configuration                                         |
| `terraform validate` | Checks configuration validity                                 |
| `terraform plan`     | Calculates proposed changes                                   |
| `terraform apply`    | Applies changes                                               |
| `terraform destroy`  | Destroys managed infrastructure                               |

Typical workflow:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

`terraform plan` previews changes; it does not normally make the infrastructure changes itself.

#### Q16.54. What is Terraform dependency management?

Terraform builds a dependency graph.

Example:

```hcl
resource "aws_security_group" "web" {
  name   = "web-sg"
  vpc_id = aws_vpc.main.id
}

resource "aws_instance" "app" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  vpc_security_group_ids = [aws_security_group.web.id]
}
```

Terraform understands that the EC2 instance depends on the security group because it references its ID.

This is an implicit dependency.

An explicit dependency can be added using `depends_on`, but it should only be used when Terraform cannot infer the required relationship from references.

#### Q16.55. What is Terraform drift?

Drift occurs when actual infrastructure differs from Terraform's expected configuration/state.

Example:

1. Terraform creates a security group allowing port 443.
2. Someone manually changes the AWS security group to allow port 8080.
3. Terraform detects a difference during a subsequent plan or refresh-related operation.

You should review the proposed plan and decide whether to:

- Revert the manual change.
- Update Terraform configuration to reflect the intended change.
- Reconcile state and actual resources appropriately.

Never blindly apply a plan without reviewing unexpected replacements or deletions.

#### Q16.56. What are Terraform modules?

A module is a reusable collection of Terraform configuration files.

```text
terraform/
├── main.tf
├── variables.tf
├── outputs.tf
└── modules/
    ├── network/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    └── compute/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

Modules help organize infrastructure into reusable components.

#### Q16.57. Create a small Terraform AWS example

This example creates an EC2 instance using a dynamic Ubuntu AMI lookup and creates a security group. It intentionally does not expose SSH or HTTP/HTTPS publicly; it is not a complete public web deployment.

`main.tf`:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}

data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name = "name"
    values = [
      "ubuntu/images/hvm-ssd/ubuntu-noble-24.04-amd64-server-*"
    ]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_security_group" "app" {
  name        = "terraform-demo-app"
  description = "Demo application security group"
  vpc_id      = data.aws_vpc.default.id
}

resource "aws_instance" "app" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  subnet_id              = data.aws_subnets.default.ids[0]
  vpc_security_group_ids = [aws_security_group.app.id]

  tags = {
    Name = "terraform-demo-app"
  }
}

output "instance_id" {
  value = aws_instance.app.id
}
```

Run:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
```

Review the plan before creating anything:

```bash
terraform apply
```

After confirming the output, Terraform creates the instance and prints its ID.

Clean up:

```bash
terraform destroy
```

Cost and account caution

This example requires working AWS credentials, a default VPC and a suitable subnet. It creates billable infrastructure. Review your account and region before applying, and destroy resources when no longer needed.

#### Q16.58. Terraform vs CloudFormation

| Terraform                                  | AWS CloudFormation                             |
| ------------------------------------------ | ---------------------------------------------- |
| Infrastructure as Code tool from HashiCorp | AWS-native infrastructure provisioning service |
| Uses HCL                                   | Uses JSON or YAML templates                    |
| Supports many providers                    | Primarily AWS-focused                          |
| Uses Terraform state                       | Uses CloudFormation stack state                |
| Broad provider ecosystem                   | Deep AWS service integration                   |
| Uses plan/apply workflow                   | Uses change sets and stack operations          |

Interview answer: I would choose Terraform when I need a consistent IaC workflow across multiple providers or want its module and provider ecosystem. I would consider CloudFormation when the infrastructure is AWS-focused and native AWS integration is the priority.

<a id="phase-16-section-8"></a>

### CI/CD and GitHub Actions

#### Q16.59. What is CI/CD?

CI/CD is a software delivery practice that automates the process of building, testing and delivering applications.

- **CI — Continuous Integration:** Frequently integrate code changes and automatically build and test them.
- **Continuous Delivery:** Keep software in a deployable state, with production release typically requiring approval or a deliberate trigger.
- **Continuous Deployment:** Automatically release qualifying changes to production after the required checks pass.

#### Q16.60. What is a CI/CD pipeline?

A pipeline is an automated sequence of stages.

```text
Developer pushes code
         |
         v
    GitHub Actions
         |
         v
    Install dependencies
         |
         v
     Static checks
         |
         v
       Unit tests
         |
         v
      Build app
         |
         v
    Build Docker image
         |
         v
    Deploy to server
         |
         v
     Health check
```

Not every project needs every stage. A good pipeline should match the risks and deployment model.

#### Q16.61. What are GitHub Actions?

GitHub Actions automates workflows in response to repository events.

| Term     | Meaning                                   |
| -------- | ----------------------------------------- |
| Workflow | Complete automation definition            |
| Event    | Trigger such as push or pull request      |
| Job      | Group of steps executed on a runner       |
| Runner   | Machine that executes jobs                |
| Step     | Individual command or action              |
| Action   | Reusable automation component             |
| Artifact | File produced and retained by a workflow  |
| Secret   | Encrypted repository or environment value |

#### Q16.62. Create a basic CI workflow

Create:

```text
.github/
└── workflows/
    └── ci.yml
```

`ci.yml`:

```yaml

name: Python CI

on:
  push:
    branches: [main]

  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt

      - name: Run tests
        run: pytest -v

```

What happens?

1. A developer pushes code or opens a pull request.
2. GitHub creates an Ubuntu runner.
3. The repository is checked out.
4. Python is configured.
5. Dependencies are installed.
6. PyTest runs.
7. GitHub reports whether the job succeeded.

#### Q16.63. What are GitHub Actions secrets?

Secrets store sensitive values used by workflows.

Examples:

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
DATABASE_URL
DEPLOY_SSH_KEY
```

Reference a secret:

```yaml
env:
  API_TOKEN: ${{ secrets.API_TOKEN }}
```

Never hardcode credentials directly in workflow YAML.

For AWS deployment, prefer short-lived credentials through GitHub OIDC and an appropriately restricted AWS IAM role when supported, rather than long-lived access keys.

#### Q16.64. Environment variables vs secrets

| Environment variable           | Secret                              |
| ------------------------------ | ----------------------------------- |
| General configuration value    | Sensitive configuration             |
| May be public or non-sensitive | Should be protected                 |
| Can be stored in workflow YAML | Stored in a secure secrets facility |
| Example: `NODE_ENV=production` | Example: API key                    |

A value being called an environment variable does not automatically make it secure.

#### Q16.65. What are artifacts in CI/CD?

Artifacts are files generated by a workflow and stored for later inspection or download.

Examples:

- Test reports.
- Coverage reports.
- Build output.
- Docker-related metadata.
- Logs.
- Test screenshots.

Example:

```yaml
- name: Upload test report
  if: always()
  uses: actions/upload-artifact@v4
  with:
    name: test-results
    path: reports/
```

#### Q16.66. How does Terraform fit into CI/CD?

Terraform can be integrated into a pipeline to validate and plan infrastructure changes before they are applied.

```text
Pull request
     |
     v
Terraform fmt
     |
     v
Terraform validate
     |
     v
Terraform plan
     |
     v
Review plan
     |
     v
Approval
     |
     v
Terraform apply
```

Safety rules:

1. Do not automatically apply unreviewed infrastructure changes from every pull request.
2. Protect state and backend credentials.
3. Use restricted IAM permissions.
4. Review resource replacements and deletions.
5. Separate development, staging and production environments.
6. Use approvals for sensitive production changes.
7. Keep state locking enabled where supported by the backend.

#### Q16.67. How does CI differ from CD?

| CI                                | CD                                                     |
| --------------------------------- | ------------------------------------------------------ |
| Integrates code changes           | Delivers/releases changes                              |
| Builds and tests                  | Deploys or prepares deployment                         |
| Detects defects early             | Makes delivery repeatable                              |
| Usually triggered by code changes | Triggered by successful pipeline or release conditions |

<a id="phase-16-section-9"></a>

### Vercel, Render, Caddy and PM2

#### Q16.68. What is Vercel?

Vercel is a platform for deploying frontend and supported full-stack applications.

Common capabilities:

- Git-based deployments.
- Preview deployments.
- Production deployments.
- Custom domains.
- HTTPS.
- Environment variables.
- Serverless and edge capabilities, depending on the application.

Your project experience includes deploying frontend applications using Vercel.

#### Q16.69. What is Render?

Render provides managed hosting for web services, static sites, background workers, databases and related application services.

Typical workflow:

```text
GitHub repository
       |
       v
Render deployment
       |
       v
Build command
       |
       v
Start command
       |
       v
Live application
```

#### Q16.70. What is Caddy?

Caddy is a web server and reverse proxy.

A simple Caddyfile:

```caddyfile
example.com {
    reverse_proxy localhost:3000
}
```

This configures Caddy to reverse-proxy requests for the domain to the application listening locally on port 3000.

Caddy can automatically obtain and renew HTTPS certificates when domain DNS, public connectivity and the required certificate validation conditions are satisfied.

In your GramSaarthi architecture, Caddy is used for reverse proxying and automatic HTTPS.

#### Q16.71. What is PM2?

PM2 is a process manager commonly used for Node.js applications.

It can:

- Start applications.
- Restart crashed processes.
- Manage multiple processes.
- Collect application logs.
- Support startup configuration.
- Provide monitoring information.

Install:

```bash
npm install -g pm2
```

If your Express backend's `package.json` contains a `start` script:

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

Start it with PM2:

```bash
pm2 start npm --name uninest-api -- start
```

Check status:

```bash
pm2 status
```

View logs:

```bash
pm2 logs uninest-api
```

Restart:

```bash
pm2 restart uninest-api
```

Save the process list:

```bash
pm2 save
```

Generate startup instructions:

```bash
pm2 startup
```

Follow the command printed by PM2 to configure startup on boot.

Project connection: Your UniNest deployment documentation describes running the Express backend on Ubuntu EC2 using PM2.


<a id="phase-16-section-10"></a>

### Pipeline Workshop — Node.js and PostgreSQL

<a id="phase-16-section-11"></a>

### Build a GitHub Actions CI workflow

Now let's create a CI workflow for your Node.js + TypeScript + Prisma Recruitment API.

#### 1. Project structure

```text
recruitment-api/
├── src/
├── prisma/
├── tests/
├── package.json
├── package-lock.json
├── tsconfig.json
└── .github/
    └── workflows/
        └── ci.yml
```

#### 2. Create `ci.yml`

```yaml

name: Recruitment API CI

on:
  push:
    branches: [main]

  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Generate Prisma Client
        run: npx prisma generate

      - name: Run lint
        run: npm run lint --if-present

      - name: Run TypeScript build
        run: npm run build

      - name: Run tests
        run: npm test

```

##### Understand the execution flow

1. `on` defines the events that trigger the workflow.
2. `jobs` defines the jobs to run.
3. `runs-on` selects the runner.
4. `checkout` downloads the repository contents.
5. `setup-node` configures Node.js.
6. `npm ci` installs dependencies.
7. `prisma generate` generates Prisma Client.
8. Lint, build and test commands validate the application.

This is a starting workflow. Your `package.json` must define the scripts being invoked.

#### 3. Add PostgreSQL as a CI service

If your integration tests require PostgreSQL, you can run a database service alongside the test job.

```yaml

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:17
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        ports:
          - 5432:5432
        options: >-
          --health-cmd "pg_isready -U postgres -d test_db"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    env:
      DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci

      - run: npx prisma generate

      - run: npx prisma migrate deploy

      - run: npm test

```

This creates an isolated test database for the workflow. Your tests must connect to it and manage their test data appropriately.

**Important:** The example uses a test-only database credential. Never reuse production database credentials in CI.

#### 4. CI vs deployment

| CI                                  | Deployment                       |
| ----------------------------------- | -------------------------------- |
| Validates code                      | Releases application             |
| Runs tests and builds               | Publishes and runs application   |
| Often runs for PRs and pushes       | Runs after release conditions    |
| Detects problems before integration | Makes changes available to users |

A workflow that only tests code is not automatically a deployment pipeline.


<a id="phase-16-section-12"></a>

### DevOps Practical Completion Check

Explain how each résumé skill contributes to a release rather than listing tools in isolation.

| Skill | Demonstration |
| --- | --- |
| Linux | Inspect processes, listening ports, permissions, disk and service logs |
| Docker | Build an image, run as an appropriate user, expose the correct port and persist required data |
| AWS | Trace an HTTP request through DNS/networking, load balancing and compute; explain IAM and monitoring |
| GitHub Actions | Explain workflow triggers, jobs, steps, permissions, artifacts and failed-run diagnosis |
| CI/CD Pipelines | Distinguish validation from deployment; describe migration ordering, health checks and rollback |

**Exercise:** Trace one change from pull request through tests, image build and deployment. State which checks block release, where configuration comes from, how a failed health check is handled, and what happens to database compatibility during rollback. Use [Debugging](#phase-15) for incident walkthroughs.

---

**Q16.72. What is deployment in web development?**

Answer: Deployment is the process of making an application available in an environment where users can access it.

It may involve building the application, configuring environment variables, setting up servers, connecting databases and configuring domains and HTTPS.

For example, deploying a React frontend to Vercel and a Node.js backend to AWS makes the application accessible online.


<a id="phase-16-section-13"></a>

### Python deployment configuration

#### Reading deployment configuration in Python

Do not hardcode sensitive values such as API keys and database passwords.

Use environment variables.

```python
import osapi_key = os.getenv("API_KEY")if api_key is None:    raise RuntimeError("API_KEY is not configured")
```

Set a variable in PowerShell:

```powershell
$env:API_KEY="your-test-key"
```

For local development, packages such as `python-dotenv` can load variables from a `.env` file.

Never commit real secrets to GitHub.


<a id="phase-16-section-14"></a>

### Node.js deployment configuration

<a id="phase-16-section-15"></a>

### Environment Variables and Configuration


**Q16.73. How do you use **`.env`** in Node.js?**

```bash
npm install dotenv
```

`.env`:

```dotenv
PORT=3000
JWT_SECRET=replace_with_a_long_random_secret
NODE_ENV=development
```

Load it early:

```javascript
import "dotenv/config";

const PORT = process.env.PORT || 3000;
```

Never commit real `.env` files. Use `.gitignore`, provide a secret-free `.env.example`, and use protected configuration or a secret manager in production.

**Q16.74. Difference between development and production environments?**

Answer: Development environments are designed for local coding, debugging, and testing. Production environments serve real users and require controlled deployments, managed secrets, operational logging, hardened configuration, and careful handling of errors. Never expose stack traces or confidential internal errors to production clients.

---

<a id="phase-17"></a>

## Phase 17 — Applied Business Workflows

**Objective:** Apply the earlier database, API and security concepts to payments, insurance and reconciliation.

**Sections:** [Understanding Fintech and Insurtech](#phase-17-section-1) · [Insurance Fundamentals](#phase-17-section-2) · [Complete Insurance Policy Lifecycle](#phase-17-section-3) · [Claims Management](#phase-17-section-4) · [Orders, Invoices and Payments](#phase-17-section-5) · [Payment Integration and Webhooks](#phase-17-section-6) · [Payment States, Refunds and Reconciliation](#phase-17-section-7) · [Idempotency and Duplicate Prevention](#phase-17-section-8) · [Transactions and Financial Data Integrity](#phase-17-section-9) · [Complete Business Workflow Scenario](#phase-17-section-10) · [Scenario-Based Interview Questions](#phase-17-section-11) ? [Offline Billing and Failure-Recovery Interview Scenarios](#phase-17-section-12)

<a id="phase-17-section-1"></a>

### Understanding Fintech and Insurtech

#### Q17.1. What is fintech?

**Fintech** means Financial Technology. It refers to technology used to deliver, improve or automate financial services.

Examples include:

- Digital payments and payment gateways
- Online banking and lending
- Accounting and invoicing software
- Investment management
- Financial reporting and reconciliation

A simple fintech workflow:

```text
Customer
   |
   v
Create Order
   |
   v
Generate Invoice
   |
   v
Make Payment
   |
   v
Payment Confirmation
   |
   v
Update Financial Records
```

A backend developer working on this workflow might build the order API, invoice service, payment integration, webhook handler and database transaction that updates the order after payment confirmation.

#### Q17.2. What is insurtech?

**Insurtech** means Insurance Technology. It uses software to improve insurance operations.

Examples:

- Insurance applications
- Policy management
- Underwriting automation
- Premium calculation
- Claims processing
- Document management
- Policy renewal and cancellation

```text
Customer
   |
   v
Insurance Application
   |
   v
Underwriting
   |
   v
Premium Calculation
   |
   v
Policy Issuance
   |
   v
Claims Management
```

#### Q17.3. Fintech vs insurtech

| Fintech                       | Insurtech                       |
| ----------------------------- | ------------------------------- |
| Financial technology broadly  | Technology focused on insurance |
| Payments, banking, accounting | Policies, premiums, claims      |
| Payment processing            | Underwriting                    |
| Refunds and reconciliation    | Claims approval and settlement  |

They overlap because insurance systems also collect premiums and pay claims.

#### Q17.4. Why is reliability especially important?

Imagine two defects:

1. A payment application charges a customer twice for one order.
2. An insurance system records a claim as approved but fails to record its settlement.

Both are business-critical defects.

Financial software must prioritize:

- Accurate records
- Transaction consistency
- Authorization
- Duplicate prevention
- Traceability
- Failure recovery
- Secure handling of sensitive information

A frontend displaying “Payment successful” does not prove the financial records are correct. The backend must verify the payment and update authoritative records safely.

<a id="phase-17-section-2"></a>

### Insurance Fundamentals

#### Q17.5. Who is a policyholder?

A **policyholder** is the person or organization that owns an insurance policy.

For example, if a customer purchases a health insurance policy:

- Customer: policyholder
- Insurance company: insurer
- Insurance policy: contract describing coverage, conditions and exclusions

#### Q17.6. Who is an insurer?

An **insurer** is the company that provides insurance coverage and accepts specified risks in exchange for premiums.

Its software may support:

- Evaluating applications
- Issuing policies
- Collecting premiums
- Processing claims
- Paying eligible claims

#### Q17.7. What is an insurance agent or broker?

An agent or broker helps customers find, purchase or manage insurance. Their precise legal responsibilities depend on the jurisdiction and their relationship with the insurer.

From a software perspective, an insurance platform may have separate portals:

```text
Policyholder Portal
        |
        v
Insurance Platform
        |
   +----+----+
   |         |
   v         v
Agent      Insurer
Portal     Admin Portal
```

These roles should not all have identical permissions.

#### Q17.8. What is an insurance premium?

A **premium** is the amount paid to obtain or maintain insurance coverage.

Example:

```text
Annual premium = ₹12,000
```

Depending on the product, a customer may pay annually or in installments.

#### Q17.9. What is coverage?

**Coverage** describes the risks, events, benefits or expenses protected by the policy, subject to its terms and exclusions.

Example: a policy might provide up to ₹5 lakh of coverage for specified medical expenses.

#### Q17.10. What is a deductible?

A **deductible** is an amount the policyholder must bear before the insurer pays the eligible covered amount, subject to policy conditions.

Simplified example:

```text
Eligible medical expense = ₹50,000
Deductible               =  ₹5,000
Potential insurer payment = ₹45,000
```

Actual claim calculations can also involve co-payments, exclusions, limits and other conditions.

#### Q17.11. What is underwriting?

**Underwriting** is the process of evaluating an applicant's risk and deciding whether, and on what terms, an insurer should provide coverage.

It may examine:

- Applicant information
- Risk factors
- Supporting documents
- Previous claims
- Requested coverage
- Applicable pricing rules

Possible outcomes:

- Approved
- Rejected
- More information required
- Approved with modified terms

**Interview-ready answer:**

> Underwriting is the risk evaluation process performed before issuing an insurance policy. It helps the insurer decide whether to accept an application and determine suitable policy terms and premiums.

<a id="phase-17-section-3"></a>

### Complete Insurance Policy Lifecycle

#### Q17.12. What is the policy lifecycle?

A policy lifecycle describes the stages through which an insurance policy progresses.

1. **Application**

   Customer submits personal details and required documents.
2. **Underwriting**

   Insurer evaluates risk and eligibility.
3. **Premium calculation**

   Pricing rules determine the premium.
4. **Policy issuance**

   Policy document and coverage details are generated.
5. **Active coverage**

   The policyholder receives coverage according to policy terms.
6. **Renewal, expiry or cancellation**

   The policy progresses according to business rules.

#### Q17.13. What database tables might an insurance system need?

A simplified relational design:

```text
CUSTOMERS
---------
id
name
email
phone

INSURANCE_APPLICATIONS
----------------------
id
customer_id
product_id
status
submitted_at

POLICIES
--------
id
customer_id
application_id
policy_number
premium
coverage_amount
start_date
end_date
status

PREMIUM_PAYMENTS
----------------
id
policy_id
amount
status
payment_reference

CLAIMS
------
id
policy_id
claim_number
claim_amount
status
submitted_at

CLAIM_DOCUMENTS
---------------
id
claim_id
file_url
document_type
```

Relationships:

```text
Customer
   |
   +------ Insurance Applications
   |
   +------ Policies
                |
                +------ Premium Payments
                |
                +------ Claims
                           |
                           +------ Claim Documents
```

This is an introductory schema, not a complete production insurance data model. Real systems may need policy versions, endorsements, beneficiaries, product-specific coverage rules, event histories and more detailed financial records.

#### Q17.14. What API endpoints could support this lifecycle?

| Method | Endpoint                       | Purpose               |
| ------ | ------------------------------ | --------------------- |
| POST   | `/applications`                | Submit an application |
| GET    | `/applications/:id`            | Retrieve application  |
| POST   | `/applications/:id/underwrite` | Process underwriting  |
| POST   | `/policies`                    | Issue policy          |
| GET    | `/policies/:id`                | Retrieve policy       |
| POST   | `/policies/:id/renew`          | Request renewal       |
| POST   | `/policies/:id/cancel`         | Request cancellation  |
| POST   | `/policies/:id/payments`       | Pay premium           |

These are example API designs, not verified endpoints from any company's internal software.

#### Q17.15. How should policy status be managed?

Use explicit states and controlled transitions, rather than allowing arbitrary status updates.

```text
DRAFT
  |
  v
SUBMITTED
  |
  v
UNDER_REVIEW
  |
  +------> REJECTED
  |
  +------> NEEDS_INFORMATION
  |               |
  |               v
  |          UNDER_REVIEW
  |
  v
APPROVED
  |
  v
ISSUED
  |
  v
ACTIVE
  |
  +------> EXPIRED
  |
  +------> CANCELLED
```

The exact states depend on the insurance product and business rules.

**Engineering principle:** Validate transitions on the backend. A client should not be able to send `PATCH /policies/123` with `"status": "ACTIVE"` and bypass underwriting or payment requirements.

<a id="phase-17-section-4"></a>

### Claims Management

#### Q17.16. What is an insurance claim?

A **claim** is a request made by a policyholder or eligible claimant for a benefit under an insurance policy.

Example:

A customer with health insurance submits a claim for eligible hospital expenses.

Typical workflow:

```text
Claim Submitted
      |
      v
Document Verification
      |
      v
Eligibility Check
      |
      v
Claim Assessment
      |
      +------> Rejected
      |
      v
Approved
      |
      v
Settlement Processing
      |
      v
Paid
```

#### Q17.17. What database tables might a claims system need?

```text
CLAIMS
------
id
policy_id
claim_number
claim_amount
approval_status
settlement_status
submitted_at

CLAIM_DOCUMENTS
---------------
id
claim_id
document_type
file_url
verification_status

CLAIM_REVIEWS
-------------
id
claim_id
reviewer_id
decision
remarks
reviewed_at

CLAIM_PAYMENTS
--------------
id
claim_id
amount
provider_reference
status
attempt_number
```

Notice that approval and settlement are separate concepts. A claim can be approved while the payment is still pending.

#### Q17.18. What roles might exist in a claims system?

| Role            | Example permissions                        |
| --------------- | ------------------------------------------ |
| Policyholder    | Submit and view own claims                 |
| Claims officer  | Review assigned claims                     |
| Claims manager  | Approve or reject within authority         |
| Finance officer | Process settlement                         |
| Administrator   | Manage authorized access and configuration |

A policyholder should not be able to approve their own claim by modifying a request parameter.

#### Q17.19. What happens if a claim is approved but payment fails?

Do not mark the claim as `PAID` merely because it was approved.

Separate the decision state from the settlement state:

```text
Claim status: APPROVED

Settlement status: PENDING
            |
            v
       Payment attempt
            |
       +----+----+
       |         |
       v         v
     FAILED    SUCCESS
       |         |
       v         v
 Retry/manual   Mark settlement
 review         as PAID
```

This avoids treating an approved but unpaid claim as settled.

<a id="phase-17-section-5"></a>

### Orders, Invoices and Payments

This lesson connects business workflows to a rental-management application such as RentFlow.

#### Q17.20. What is an order?

An **order** represents a customer's request to purchase a product or service.

For example, a tenant reserves a rental property:

```json
{
  "orderId": 101,
  "customerId": 25,
  "totalAmount": 15000,
  "status": "PENDING"
}
```

An order records what the customer requested. It is not necessarily proof that payment has happened.

#### Q17.21. What is an invoice?

An **invoice** is a financial document describing the amount owed for goods or services.

It commonly contains:

- Invoice number
- Seller and customer details
- Line items and quantities
- Prices, taxes and discounts
- Total amount
- Due date
- Payment status

Example:

| Invoice item       | Amount      |
| ------------------ | ----------- |
| Monthly rental     | ₹12,000     |
| Maintenance        | ₹2,000      |
| Tax (illustrative) | ₹1,000      |
| **Total**          | **₹15,000** |

#### Q17.22. Order vs invoice

| Order                                 | Invoice                                  |
| ------------------------------------- | ---------------------------------------- |
| Represents purchase intent or request | Represents an amount billed              |
| Created around ordering               | Created according to billing rules       |
| Contains requested goods/services     | Contains financial charges               |
| Can exist before fulfilment           | May be issued before or after fulfilment |

A useful distinction: an order is primarily a business request; an invoice is a billing document.

#### Q17.23. What is a payment gateway?

A **payment gateway** enables an application to accept payments through supported methods such as cards, UPI or net banking.

Examples include Razorpay, Stripe and PayPal.

```text
Frontend
   |
   v
Backend creates payment/order
   |
   v
Payment gateway
   |
   v
Customer completes payment
   |
   v
Gateway sends result/webhook
   |
   v
Backend verifies result
   |
   v
Database updated
```

**Critical rule:** Never trust the frontend alone to confirm payment success. The backend must verify authenticity through the provider's documented mechanism, such as signature verification or a server-side API check.

<a id="phase-17-section-6"></a>

### Payment Integration and Webhooks

#### Q17.24. How does a payment integration work?

A typical flow:

1. Customer clicks Pay.
2. Frontend calls the backend.
3. Backend retrieves the order and calculates the payable amount.
4. Backend creates a payment order with the provider.
5. Customer completes checkout.
6. Provider sends a webhook or checkout response.
7. Backend verifies authenticity.
8. Backend updates the payment record.
9. Order or invoice status is updated according to business rules.

Example endpoint:

```http
POST /api/payments/create
```

Request:

```json
{
  "orderId": 101
}
```

The backend should look up the order and calculate the amount itself. It should not trust a client-supplied amount.

Illustrative response:

```json
{
  "paymentId": "pay_12345",
  "providerOrderId": "order_98765",
  "status": "CREATED"
}
```

#### Q17.25. Why should the backend create payment orders?

Because the backend enforces the application's business rules.

Suppose the actual order total is ₹15,000. If the frontend is allowed to dictate the amount, a malicious user could try to change it to ₹1.

The backend should:

1. Retrieve the order from the database.
2. Verify the user's ownership and authorization.
3. Calculate the payable amount from trusted records.
4. Create the provider payment order.
5. Store the provider reference.

The frontend can display the amount, but it must not be the authoritative source.

#### Q17.26. What is a webhook?

A **webhook** is an HTTP callback sent by one system to another when an event occurs.

For example, a payment provider might send:

```http
POST /api/webhooks/payment
```

Illustrative event:

```json
{
  "event": "payment.captured",
  "payment": {
    "id": "pay_12345",
    "order_id": "order_98765",
    "amount": 1500000,
    "currency": "INR"
  }
}
```

The amount is illustrative and uses a minor-unit representation. Always follow the actual provider's amount and currency conventions.

Why are webhooks useful? The browser might close or lose its connection after a payment succeeds. The provider can still notify the backend independently.

The backend should:

- Verify webhook authenticity.
- Validate the event and its expected payment/order relationship.
- Deduplicate repeated deliveries.
- Update records transactionally.
- Return an appropriate HTTP response.
- Support safe retries.

#### Q17.27. What is webhook signature verification?

Providers commonly sign webhook payloads using a secret. The backend verifies the signature to check that the event came from the expected provider and was not modified.

Conceptually:

```text
Webhook request
       |
       v
Read raw request body
       |
       v
Calculate expected signature
       |
       v
Compare with supplied signature
       |
       +-----> Invalid: reject
       |
       v
Valid: process event
```

A generic HMAC-SHA256 example in Python:

```python
import hashlibimport hmacdef verify_signature(payload, supplied_signature, secret):    expected = hmac.new(        secret.encode(),        payload,        hashlib.sha256    ).hexdigest()    return hmac.compare_digest(        expected,        supplied_signature    )
```

This is a generic example, not a drop-in integration for every provider. Providers differ in header names, signature formats, raw-body requirements, encoding and timestamp validation. Use the provider's official verification procedure.

<a id="phase-17-section-7"></a>

### Payment States, Refunds and Reconciliation

#### Q17.28. What is a payment state machine?

A state machine defines valid states and transitions.

An illustrative payment lifecycle:

```text
CREATED
   |
   v
PENDING
   |
   +---------> FAILED
   |
   v
CAPTURED
   |
   v
REFUND_PENDING
   |
   v
REFUNDED
```

The precise states differ by provider and business.

A state machine helps prevent invalid operations, such as:

- Refunding a payment that never succeeded.
- Marking a pending payment as captured without verification.
- Settling the same payment twice.
- Allowing arbitrary status changes from the frontend.

#### Q17.29. What is a refund?

A **refund** returns money to a customer after a successful payment, subject to business and provider rules.

Example:

```text
Original payment = ₹15,000
Refund requested =  ₹5,000

Remaining net paid amount = ₹10,000
```

A simplified schema:

```sql
CREATE TABLE payments (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL,
    amount BIGINT NOT NULL,
    status VARCHAR(30) NOT NULL,
    provider_reference VARCHAR(255) UNIQUE
);

CREATE TABLE refunds (
    id BIGSERIAL PRIMARY KEY,
    payment_id BIGINT NOT NULL REFERENCES payments(id),
    refund_amount BIGINT NOT NULL,
    status VARCHAR(30) NOT NULL,
    provider_refund_id VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

A payment may have multiple refund records, provided their combined amount does not exceed the refundable amount and the provider supports the operation. Enforce this rule safely under concurrent requests.

#### Q17.30. What is payment reconciliation?

**Payment reconciliation** compares records from different systems to identify matches and discrepancies.

Internal application records:

| Order | Internal status | Amount |
| ----- | --------------- | ------ |
| 101   | Paid            | ₹1,000 |
| 102   | Paid            | ₹2,000 |
| 103   | Pending         | ₹500   |

Provider report:

| Provider order | Provider status | Amount |
| -------------- | --------------- | ------ |
| 101            | Captured        | ₹1,000 |
| 102            | Failed          | ₹2,000 |
| 104            | Captured        | ₹750   |

The comparison identifies:

- Order 101: Match.
- Order 102: Internal system says paid, provider says failed.
- Order 103: Internal system says pending; provider record is missing.
- Order 104: Provider has a payment not matched to an internal order.

Reconciliation helps find records that normal request processing may have missed.

#### Q17.31. How would you implement a simple reconciliation script?

```python
internal_payments = {    "101": {"amount": 1000, "status": "PAID"},    "102": {"amount": 2000, "status": "PAID"},    "103": {"amount": 500, "status": "PENDING"},}provider_payments = {    "101": {"amount": 1000, "status": "CAPTURED"},    "102": {"amount": 2000, "status": "FAILED"},    "104": {"amount": 750, "status": "CAPTURED"},}for payment_id, internal in internal_payments.items():    provider = provider_payments.get(payment_id)    if provider is None:        print(payment_id, "Missing from provider report")    elif internal["amount"] != provider["amount"]:        print(payment_id, "Amount mismatch")    elif (        internal["status"] == "PAID"        and provider["status"] != "CAPTURED"    ):        print(payment_id, "Status mismatch")
```

Expected output:

```text
101 Matched
102 Status mismatch
103 Missing from provider report
104 Missing from internal system
```

This is a basic comparison exercise. A production reconciliation system would also consider currencies, fees, settlement dates, partial captures, refunds, provider references and duplicate records.

<a id="phase-17-section-8"></a>

### Idempotency and Duplicate Prevention


#### Q17.32. How do you implement an idempotency key?

The client sends a unique key for the logical operation:

```http
POST /api/payments
Idempotency-Key: order-101-payment-attempt-1
```

The backend associates that key with the operation and its result.

A simple table:

```sql
CREATE TABLE idempotency_records (
    id BIGSERIAL PRIMARY KEY,
    idempotency_key VARCHAR(255) UNIQUE NOT NULL,
    response_status INTEGER,
    response_body JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Conceptual backend workflow:

1. Validate the key.
2. Atomically reserve the key.
3. If a completed record exists, return its stored result.
4. If another request is currently processing it, handle that in-progress state safely.
5. Perform the business operation.
6. Store the outcome.
7. Return the result.

In a real payment system, concurrent requests need database constraints and careful transaction handling. A simple “check, then insert” sequence is not enough.


#### Q17.33. Idempotency vs deduplication

- **Idempotency:** Repeating a logical request does not repeat its side effect.
- **Deduplication:** Detecting and ignoring repeated events or records.

For example, a payment webhook may be delivered several times. Store the provider's unique event ID and ensure its business effect is processed only once.

<a id="phase-17-section-9"></a>

### Transactions and Financial Data Integrity


#### Q17.34. What is an audit trail?

An **audit trail** records important actions performed in a system.

Example:

```text
Claim ID: 501

10:00 — Claim submitted by user 25
10:05 — Claim assigned to officer 17
10:20 — Documents requested
11:00 — Documents uploaded
12:30 — Claim approved by manager 4
13:00 — Settlement initiated
```

A simplified table:

```sql
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    entity_type VARCHAR(50) NOT NULL,
    entity_id BIGINT NOT NULL,
    action VARCHAR(100) NOT NULL,
    actor_id BIGINT,
    old_values JSONB,
    new_values JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Audit trails support:

- Accountability
- Debugging
- Compliance and investigations
- Tracking business decisions
- Understanding who changed a record and when

Avoid recording passwords, access tokens, payment secrets or unnecessary sensitive personal information in audit logs.

<a id="phase-17-section-10"></a>

### Complete Business Workflow Scenario

#### Scenario: A tenant pays rent through a rental-management application

Let's combine your backend, database, authentication, payment and testing knowledge.

##### Step 1 — Business workflow

1. **Select property** — Tenant chooses an available property.
2. **Create rental order** — Backend validates availability and creates the order.
3. **Generate invoice** — Billing service calculates the amount due.
4. **Initiate payment** — Backend creates a payment with the gateway.
5. **Verify webhook** — Backend verifies the provider event.
6. **Update financial records** — Payment and order records are updated transactionally.
7. **Generate receipt** — Tenant can view or download payment confirmation.

##### Step 2 — Database records

A simplified schema:

```text
USERS
-----
id
name
role

PROPERTIES
----------
id
name
monthly_rent
status

ORDERS
------
id
tenant_id
property_id
total_amount
status

INVOICES
--------
id
order_id
invoice_number
amount
status

PAYMENTS
--------
id
order_id
provider_reference
amount
status

WEBHOOK_EVENTS
--------------
id
provider_event_id
event_type
processed_at

AUDIT_LOGS
----------
id
entity_type
entity_id
action
actor_id
created_at
```

##### Step 3 — API flow

| Method | Endpoint                  | Purpose                |
| ------ | ------------------------- | ---------------------- |
| POST   | `/api/orders`             | Create rental order    |
| POST   | `/api/orders/:id/invoice` | Generate invoice       |
| POST   | `/api/payments/create`    | Initiate payment       |
| POST   | `/api/webhooks/payment`   | Receive provider event |
| GET    | `/api/orders/:id`         | Retrieve order         |
| GET    | `/api/invoices/:id`       | Retrieve invoice       |

##### Step 4 — Authorization

| User             | Allowed operations                    |
| ---------------- | ------------------------------------- |
| Tenant           | Create own rental order and pay       |
| Property manager | Manage properties and relevant orders |
| Finance user     | Review payments and reconciliation    |
| Administrator    | Manage authorized system settings     |

Every endpoint must validate both the user's role and access to the particular resource.

##### Step 5 — Failure handling

| Failure                                 | Expected handling                           |
| --------------------------------------- | ------------------------------------------- |
| Payment request times out               | Check provider status before retrying       |
| Duplicate payment request               | Use idempotency key                         |
| Webhook delivered repeatedly            | Deduplicate provider event                  |
| Invalid signature                       | Reject webhook                              |
| Payment captured, database update fails | Retry or reconcile using provider reference |
| Refund fails                            | Preserve pending/failed refund state        |
| Unauthorized user                       | Reject operation                            |

##### Step 6 — Testing

Your QA knowledge from Phase 14 applies directly:

- Valid order creation
- Invalid property ID
- Unavailable property
- Unauthorized order access
- Duplicate payment request
- Invalid webhook signature
- Repeated webhook event
- Successful and failed payment
- Partial refund
- Database rollback
- Concurrent reservation attempts

This is end-to-end business reasoning: not just whether an endpoint returns HTTP 200, but whether the business records remain correct.

<a id="phase-17-section-11"></a>

### Scenario-Based Interview Questions

These are practice predictions based on the roadmap's published domain scope and your project experience, not confirmed historical interview questions.

#### Q17.35. What is the difference between a premium and a claim?

**Answer:** A premium is the amount paid to obtain insurance coverage. A claim is a request for an insurance benefit under the policy.

#### Q17.36. Why should payment confirmation happen on the backend?

**Answer:** Frontend responses can be manipulated or lost. The backend must verify the payment with the provider or validate an authentic webhook before updating authoritative financial records.

#### Q17.37. What happens if a payment webhook arrives twice?

**Answer:** The backend should identify the duplicate event using the provider event ID or another reliable unique identifier. It should process the business effect only once and return an appropriate response to the provider.


#### Q17.38. How would you prevent two users from reserving the same property?

**Answer:** I would enforce availability at the database level using transactions and appropriate constraints or locking. Application-level checks alone are insufficient because concurrent requests can pass the check at the same time.

#### Additional scenario practice

| Interview scenario                          | What the interviewer is testing          |
| ------------------------------------------- | ---------------------------------------- |
| Customer paid, but order still says pending | Webhooks, transactions, reconciliation   |
| Customer clicked Pay three times            | Idempotency and duplicate prevention     |
| Two tenants reserve the same unit           | Race conditions and database constraints |
| Finance user changes a payment amount       | Authorization and audit trail            |
| Refund request is submitted twice           | Refund state machine and idempotency     |
| Claim approved by an unauthorized user      | RBAC and resource-level authorization    |
| Payment provider is temporarily unavailable | Retry strategy and failure recovery      |

---

<a id="phase-17-section-12"></a>

### Offline Billing and Failure-Recovery Interview Scenarios

The shopping-mall question below comes from the supplied interview question. The additional questions are practice scenarios, not claims about features already implemented in your projects. They apply [database transactions](#phase-8), [API reliability and the transactional outbox](#phase-11), [security](#phase-13) and [duplicate prevention](#phase-17-section-8) without repeating those lessons.

#### Q17.39. How would you design a shopping mall billing system that works during internet, network or power failures?

**Interview question:** “A mall has five POS (Point of Sale) counters. How can they continue billing when the network goes down, preserve transactions if electricity fails, and send the data to a central server when connectivity returns?”

**Answer:** I would use an **offline-first design**: an eligible sale is saved durably on the terminal before the cashier sees confirmation, and a background worker synchronizes it later. I would first clarify the permitted offline payment methods, maximum outage duration, inventory rules and acceptable data-loss risk.

##### 1. Separate the failures before proposing a solution

| Failure | What can still work? | Required response |
| --- | --- | --- |
| Internet connection fails | Powered terminals may still reach a store server over LAN | Continue local operations and queue cloud synchronization |
| LAN or store server fails | Each powered terminal may still operate independently | Use terminal storage and the agreed offline sales policy |
| Central API fails while internet works | Terminal storage remains available | Preserve pending work and retry the actual API later |
| Terminal loses power | It cannot run without another power source | Recover committed data after restart; use battery/UPS for temporary operation |
| Terminal disk fails before synchronization | The only local copy may be unavailable | Recover from a separate durable copy if one exists; local storage alone cannot guarantee recovery |

Internet availability is not proof that the billing API is reachable. A UPS must cover the equipment needed for the chosen operating mode, such as the terminal, network switch and store server. It provides limited runtime, not unlimited operation.

##### 2. Choose the architecture

```text
POS 1: billing app + local SQLite + pending work --+
POS 2: billing app + local SQLite + pending work --+--> Central API --> Central DB
POS 3: billing app + local SQLite + pending work --+
POS 4: billing app + local SQLite + pending work --+
POS 5: billing app + local SQLite + pending work --+
                  temporary disconnection is allowed
```

An alternative adds a **store server on the LAN**, which coordinates connected counters and synchronizes with the cloud. This allows shared inventory checks during an internet outage. If the LAN also fails, terminals fall back to their own storage under stricter rules. Keep the same sale identifiers across terminal, store and cloud ingestion so forwarding through two paths cannot create two sales.

| Component | One possible implementation | Responsibility |
| --- | --- | --- |
| Terminal application | React UI in an Electron desktop application | Cashier workflow, scanner input and receipt display |
| Terminal storage | SQLite accessed through a controlled desktop/local service boundary | Bills, line items, cached catalogue and durable pending work |
| Synchronization worker | Background process with persisted retry state | Upload pending sales and apply acknowledgements |
| Backend | FastAPI or Node.js/Express | Authenticate terminals, validate records and accept each sale once |
| Central database | PostgreSQL | Consolidated sales, inventory events and reporting |
| Power and recovery | UPS, monitored storage and tested backups | Temporary continuity and recovery |

This is a proposed stack, not a requirement. An ordinary browser UI does not directly access a native SQLite file; a browser-only design needs an appropriate storage and application-delivery design.

##### 3. Save the complete sale and its pending work together

Generate a stable sale ID once, such as a UUID, and persist it with the sale. A separate human-readable receipt number can include a terminal identifier and a persistent counter. Do not rely on a timestamp or an in-memory counter alone for uniqueness.

Store the header, items, price snapshot, payment state and synchronization work in **one local transaction**. Otherwise, a crash between saving the bill and queuing its upload can leave a bill that is never synchronized.

This SQLite transaction illustrates an approved cash sale. Tables and constraints are assumed to exist; named parameters must be bound through the database driver. `:total_minor` is an integer in the currency's minor units, such as `150000` paise for ₹1,500.

```sql
BEGIN IMMEDIATE;

INSERT INTO bills
    (sale_id, terminal_id, total_minor, currency, payment_state)
VALUES
    (:sale_id, :terminal_id, :total_minor, 'INR', 'CASH_RECEIVED');

INSERT INTO bill_items
    (sale_id, product_id, quantity, unit_price_minor)
VALUES
    (:sale_id, :product_id, :quantity, :unit_price_minor);

INSERT INTO sync_outbox
    (event_id, sale_id, event_type, state, attempts)
VALUES
    (:event_id, :sale_id, 'SALE_CREATED', 'PENDING', 0);

COMMIT;
```

The application rolls back if a statement fails. Confirm the sale and request printing only after a successful commit. For a multi-item bill, insert all items within the same transaction. The upload must use a stable snapshot of the committed sale rather than recalculating it from today's catalogue.

SQLite provides atomic transactions, including recovery after interrupted writes, subject to its storage assumptions. This protects against partially saved bills; it does not preserve a draft that was never committed. See [SQLite atomic commit](https://www.sqlite.org/atomiccommit.html).

For a local database using WAL mode, `synchronous=FULL` adds a durability sync at each commit. WAL with `synchronous=NORMAL` can lose recent committed transactions after power loss even while preserving database consistency. Choose and verify durability settings for the workload and hardware; “SQLite is installed” is not a complete power-loss strategy. See [SQLite synchronous settings](https://www.sqlite.org/pragma.html#pragma_synchronous).

##### 4. Synchronize with durable acknowledgements

1. Read due pending entries in bounded batches. Persist attempts and next retry time so restarting does not lose the queue.
2. Send the original sale ID, event ID, terminal identity, schema version and immutable payload through an authenticated API.
3. On the server, enforce uniqueness within the correct store/tenant scope. Accept the sale and its database effects atomically. Queue any external side effects durably.
4. If the same ID and payload already succeeded, return the recorded result. If the ID is reused with different content, flag a conflict rather than silently accepting it.
5. Acknowledge each sale only after durable server acceptance. Mark the matching local entry `SYNCED` in a local transaction.
6. If the response is lost, leave the entry retryable. Retry the same operation with the same ID.

```text
Local commit --> PENDING --> send original event --> server commit --> acknowledgement
                   ^                                                   |
                   | timeout or lost response                          v
                   +-----------------------------------------------  SYNCED

Permanent validation conflict --> NEEDS_REVIEW (retain record; alert operator)
```

This uses retryable delivery with duplicate-safe effects. Do not claim the network delivers every message exactly once. A server acknowledgement must distinguish a durable accepted sale from a request merely received in memory or queued for later validation.

For a provider-specific example of request-key handling, see [Stripe's idempotent requests](https://docs.stripe.com/api/idempotent_requests). Provider retention rules are separate from this design: the POS needs durable business-level sale uniqueness even when a retry occurs after an API key expires.

##### 5. Resolve inventory and payment limitations explicitly

Two disconnected terminals cannot both independently guarantee ownership of the same last unit. Choose an agreed policy: use central reservation while connected, allocate non-overlapping offline stock quotas, block offline sales of restricted items, or allow a defined overselling risk and reconcile it visibly. Synchronization cannot undo a physical item already handed to a customer.

Keep **payment status** separate from **synchronization status**. A locally stored bill does not prove a card or UPI payment succeeded. Continue only payment methods supported by the offline policy; preserve uncertain electronic payments for verification instead of marking them paid. Apply the existing [payment-state and reconciliation workflow](#phase-17-section-7).

##### 6. Recover after restart and make pending work visible

Open the database through its normal recovery process, reload committed bills, and resume pending uploads. If workers claim records using an `IN_FLIGHT` state, use expiring leases so a crashed worker cannot leave a sale permanently stuck. Reprint an existing bill using its original ID rather than generating a new sale.

Show the cashier an offline indicator, pending count, oldest pending age and records requiring review. Monitor free disk space, repeated failures and the last successful synchronization. Retain unsynchronized sales; remove eligible historical copies only under a backup and retention policy.

##### Interview-ready answer — about 90 seconds

> I would design the POS to save eligible sales locally first. Each counter would have durable storage, such as SQLite, and save the bill, line items and pending synchronization entry in one transaction before confirming the sale. If internet fails but the LAN works, a store server can still coordinate counters. If the LAN fails too, each counter follows the agreed offline inventory and payment rules. When the central API becomes reachable, a background worker uploads pending sales using stable IDs. The server accepts each sale once and acknowledges it after committing; if an acknowledgement is lost, retrying the same ID does not create another sale. For power failure, I would combine appropriate database durability settings, restart recovery and UPS support. I would also explain the limits: an unpowered terminal cannot keep billing, a failed disk can destroy the only unsynchronized copy, and disconnected counters need a policy for the last available item. The goal is recoverable, auditable operation with visible pending work.

#### Q17.40. Five hundred terminals reconnect together. How would you prevent synchronization from overwhelming the server?

**Answer:** Limit batch sizes and concurrent uploads per terminal. Use exponential backoff with jitter, meaning a randomized delay so terminals do not retry together. Honor server retry guidance, retain retry schedules durably, and apply server-side capacity limits. A possible retry ceiling is `min(max_delay, base_delay × 2^attempt)`; choose a random delay up to that ceiling. Retry transient failures, but route invalid payloads to review and pause authentication failures for credential recovery.

**Follow-up — What should you monitor?** Oldest pending age, pending count, acceptance rate, retry rate and records needing review. A smaller queue is not success if records disappeared instead of being accepted.

#### Q17.41. A batch contains 100 bills, but one bill is invalid. Should all 100 be retried?

**Answer:** Define the batch contract. In this design, each bill is atomic and the response gives a result for each sale ID. Mark only durably accepted bills as synchronized; retain transient failures and isolate invalid bills for review. Do not infer that every item succeeded from the batch's HTTP status alone. If the whole response is lost, replay the original IDs safely.

**Example:** Ninety-eight accepted bills become `SYNCED`, one temporary failure remains `PENDING`, and one invalid bill becomes `NEEDS_REVIEW`. Preserve the reason and the original record so an operator can investigate it without deleting sales history.

#### Q17.42. A receipt printer jams after the bill is saved. Should the cashier create the bill again?

**Answer:** No. Sale acceptance and receipt printing are separate outcomes. Keep the committed sale and retry printing from that record. Display the original sale ID and mark a reprint as a copy. If the app restarts before receiving a printer acknowledgement, let the cashier inspect the saved sale before reprinting; the printer may already have produced a receipt.

**What the interviewer is testing:** Database success does not make an external device action atomic. Repeating a physical action can require human confirmation even when the sale itself is duplicate-safe.

#### Q17.43. The terminal runs out of disk space during an outage. How should the billing application behave?

**Answer:** Monitor storage and warn before it is exhausted. If a sale cannot commit durably, do not show “sale saved” or discard older pending bills to make room. Stop the affected workflow and use the store's controlled fallback process. Remove only data known to be safely disposable, such as approved temporary files. If cash was already handed over or an external payment completed, preserve or reconstruct that unresolved outcome through the recovery process before attempting another charge.

**Follow-up — Does adding a UPS solve this?** No. A UPS addresses temporary power loss. Disk capacity, failed media and separate backups require their own controls.

#### Q17.44. A product's price changes while a counter is offline. Which price should appear on the synchronized bill?

**Answer:** Preserve the price and catalogue version used when the sale was accepted. Apply a predetermined rule for stale catalogues, such as a limited offline validity window or blocking selected products. When the bill synchronizes, the server checks the recorded version and flags exceptions; it does not silently rewrite the customer's receipt using the latest price.

**Follow-up — What if the bill needs correction?** Record an authorized adjustment or reversal linked to the original sale, with a reason and actor. Keep the original accepted record auditable.

#### Q17.45. A field-sales application must collect orders in villages without connectivity. How would you design it?

**Answer:** Save drafts and submitted orders locally with stable IDs. Distinguish “saved on this device” from “accepted by the server.” Queue uploads, preserve rejected records with actionable messages, and display server acknowledgement only after validation. Cache only the catalogue and customer data needed for the work, with appropriate access controls. Use an explicit rule for stale prices and stock; an offline order can be a request awaiting allocation rather than a guaranteed reservation.

**Follow-up — What if the user edits an order on two devices?** Send the version that each edit was based on. The server accepts an update only against the expected version and returns a conflict otherwise. Present the competing changes for resolution instead of blindly overwriting an accepted order.

#### Q17.46. Warehouse scanners work offline and upload stock movements later. How would you avoid incorrect inventory totals?

**Answer:** Record immutable movements with unique event IDs: item, location, quantity change, reason, operator and device. Upload movements rather than letting every scanner overwrite an absolute stock total. Apply each accepted movement once, and represent corrections as new linked movements. Separate physical movement from authorization: if stock must never go negative, require connectivity or issue bounded offline allocations.

**Follow-up — Is the device timestamp enough to order events?** No. Clocks can drift. Preserve device time for investigation, but use explicit dependencies or persistent device sequence numbers where needed, plus server receipt time. Two disconnected devices have no automatically trustworthy global event order.

#### Q17.47. An attendance kiosk goes offline and uploads check-ins later. How would you handle duplicate scans and incorrect clocks?

**Answer:** Give each captured event a stable ID, and enforce an additional business rule such as one accepted attendance record per participant and session. These solve different problems: retrying the same scan and performing a second physical scan. Store both claimed device time and server receipt time. Flag suspicious clock drift or late uploads according to policy; do not let an untrusted device clock decide an attendance deadline by itself.

**Follow-up — Can a photograph or location prove attendance?** Treat those as evidence subject to validation and access controls, not automatic proof. Explain the actual verification requirement before choosing what data to collect.

#### Q17.48. An online examination loses connectivity while a student is answering. How would you preserve answers and handle final submission?

**Answer:** Autosave answer revisions locally and synchronize acknowledged revisions when possible. Clearly distinguish “saved locally” from “submitted.” Bind each revision to the exam attempt and question, and prevent an old delayed revision from overwriting a newer accepted one. The server enforces the exam's submission policy and returns a durable receipt for the accepted submission.

**Follow-up — Can an offline client prove it submitted before the deadline?** A local timestamp alone cannot prove that. The design needs an explicit outage/grace policy or a supervised process. Preserve pending answers and show the unresolved status; do not falsely claim successful final submission.

#### Q17.49. A store accepts offline returns. What if the same receipt is used at two disconnected counters?

**Answer:** Each counter cannot reliably see returns processed at the other one. If duplicate refunds are unacceptable, require an online authorization against the remaining refundable quantity/amount or a coordinated store service. An offline counter can record a return request awaiting approval, but should not promise that a refund has completed. Where the business accepts a limited risk, define limits and review requirements explicitly.

**What the interviewer is testing:** Duplicate-safe transmission of one refund request does not stop two separate refund requests against the same purchase. That needs a business constraint and coordination.

#### Q17.50. A cashier's access is revoked while the terminal is offline. Can the terminal immediately enforce the revocation?

**Answer:** Not if it cannot receive the revocation. Decide the permitted offline authorization window in advance, restrict high-risk actions, and use protected device credentials and local access controls. After reconnection, refresh authorization and preserve an audit trail of offline actions. Do not silently delete captured sales because their uploader is no longer authorized; route them through a controlled recovery and review process.

**Follow-up — What about an expired API token during synchronization?** Stop unauthorized upload attempts, recover credentials through the approved flow, and keep pending data intact. Avoid retrying an authentication error indefinitely as though it were a network timeout.

#### Q17.51. How would you prove that the offline billing design survives failures?

**Answer:** Use the testing techniques from [Phase 14](#phase-14) to interrupt the workflow at specific boundaries and inspect durable records after recovery. Assert business invariants, not only successful HTTP responses.

| Experiment | Expected result |
| --- | --- |
| Disconnect internet while LAN remains available | Store-local mode works within its defined policy |
| Disconnect the LAN as well | Terminal-only mode activates with the correct restrictions |
| Terminate the app before local commit | No partial committed sale or orphaned upload entry |
| Terminate after local commit but before upload | Committed sale is recovered and remains pending |
| Drop the response after server commit | Replaying the original ID creates no second sale or inventory effect |
| Restart a worker after it claims a batch | Expired claims can be recovered; work is not permanently stuck |
| Reuse a sale ID with a different payload | Conflict is surfaced; original accepted sale remains intact |
| Deliver a reversal before its original sale | Dependency is deferred or reviewed; balances are not blindly changed |
| Fill the disk or make it unwritable | No false “saved” confirmation and no deletion of pending sales |
| Simulate a power interruption on disposable test equipment | Recovery meets the chosen durability configuration and assumptions |
| Replay a mixed batch and reconnect many devices | Per-sale results remain correct and retry traffic stays bounded |

Killing the application tests an application crash; it does not fully reproduce an operating-system crash or power failure. Test those separately in a controlled environment. Reconcile local accepted sale IDs and amounts with central records, separating pending and review states; matching row counts alone can hide missing or duplicated sales.

**Answering pattern for similar interviews:** State the business rule, identify the failure boundary, explain what is durably stored, show how retry and acknowledgement work, describe conflicts, and finish with a recovery test and the remaining limitation.

---

<a id="phase-18"></a>

## Phase 18 — Project Architecture and Technical Defence

**Objective:** Explain each project from the problem and design through implementation, testing, deployment, limitations and technical defence.

**Sections:** [TestForge AI — complete project defence](#phase-18-section-1) · [DOMLens — complete project defence](#phase-18-section-2) · [UniNest AI — complete project defence](#phase-18-section-3) · [Ownership and evidence checklist](#phase-18-section-4)

The three supplied documents are the evidence for this consolidated handbook. Their repository-audit statements are **saved notes**, not a fresh source-code or deployed-system audit. Confirm file paths, versions, test results and personal ownership against the commit you present. A design proposal is not an implemented feature.

| Project | Follow this complete path | Prerequisites |
| --- | --- | --- |
| [TestForge AI](#project-testforge) | Source upload → AST metadata → generated tests → execution → reports → QA workflows → CI | [Python](#phase-6), [databases](#phase-8), [FastAPI](#phase-12), [testing](#phase-14) |
| [DOMLens](#project-domlens) | Extension loading → selection → style capture → editing/state → AI generation → preview → JSX export → validation | [browser platform](#phase-1), [JavaScript](#phase-3), [API resilience](#phase-11), [security](#phase-13) |
| [UniNest AI](#project-uninest) | Registration → role access → resume analysis → drives → applications → interviews → offers → deployment | [databases](#phase-8), [frontend](#phase-10), [backend](#phase-11), [security](#phase-13) |

Use the linked earlier phases for definitions. This phase answers what the project does with those concepts.

<a id="project-testforge"></a>

<a id="phase-18-section-1"></a>

### TestForge AI — complete project defence

#### Problem, architecture and file responsibilities

##### What is TestForge AI?

Interview question: Tell me about your TestForge AI project.

Interview-ready answer

TestForge AI is an AI-assisted software testing and quality management platform. It helps developers generate unit tests, identify edge cases, execute tests, and analyze code coverage.

It uses Python's AST module to understand source code without executing it. Based on that analysis, it generates PyTest test templates. It also integrates Google's Gemini API to suggest additional edge cases.

For QA automation, it can convert manual test cases into Playwright scripts. Additionally, it includes a GitHub Actions workflow that analyzes changed code in pull requests and provides feedback about testing coverage and potential risks.

The main goal is to reduce manual testing effort and improve software quality.

**Understand it in simple language**

Imagine you are developing an application with 100 functions.

You need to:

- Write test cases for those functions.
- Check normal and unusual input values.
- Execute the tests.
- Find which lines are not tested.
- Check whether new code introduces risks.
- Test the application through a browser.

Doing all this manually takes time.

TestForge AI brings several of these activities into one platform.

The five major parts of TestForge AI

1. AST Code Analysis

Understands Python source code structure.

2. PyTest Generation

Creates an initial test suite from the analyzed code.

3. Gemini AI Suggestions

Recommends additional edge cases.

4. Test Execution & Coverage

Executes tests and displays results.

5. CI/CD Quality Scanner

Checks changed code and reports testing risks in pull requests.

Remember this sequence:

Analyze → Generate → Improve → Execute → Monitor

##### Why did you build TestForge AI?

Interview question: What problem does your project solve?

Interview-ready answer

While developing software, writing comprehensive test cases manually can be time-consuming. Developers sometimes test only normal scenarios and miss edge cases.

Another problem is that AI-generated tests may contain incorrect imports, duplicate classes, invalid constructors, or meaningless assertions.

I wanted to build a platform that combines static code analysis, automated test generation, AI-assisted edge-case recommendations, test execution, and CI/CD quality checks.

It also connects developer testing and QA automation in a single workspace.

**Four problems your project addresses**

| Problem                                     | Your solution                            |
| ------------------------------------------- | ---------------------------------------- |
| Writing tests manually takes time           | AST-guided PyTest generation             |
| Edge cases are often missed                 | Gemini suggestions                       |
| AI sometimes generates invalid code         | Code sanitization and duplicate handling |
| Testing coverage of changed code is unclear | CI/CD change-impact scanner              |

Important interview point: Do not say that TestForge completely eliminates manual testing. It assists developers and QA engineers; generated tests still need review.

##### Explain the complete architecture

Interview question: Explain the architecture of TestForge AI.

Interview-ready answer

TestForge AI follows a full-stack architecture.

The frontend is built with Next.js, React, and TypeScript. The backend uses FastAPI and Python. SQLAlchemy manages database operations, with SQLite as the local database and PostgreSQL compatibility for deployment.

The backend contains separate modules for authentication, AST parsing, test generation, test execution, and Gemini integration.

The GitHub Actions workflow runs automated checks and invokes a separate scanner script to analyze changed code and publish pull-request feedback.

**Architecture diagram**

Frontend — Next.js / React / TypeScript

Dashboard · Login · Projects · Testing Workspace · Reports

REST API requests and responses

Backend — FastAPI / Python

Authentication · Projects · Tests · AI · QA Test Cases

AST Parser

Extracts functions, classes, arguments and exceptions.

Test Generator

Creates PyTest templates and fixtures.

Gemini Integration

Suggests edge cases and browser scripts.

Test Executor

Runs PyTest and collects reports.

Database — SQLAlchemy

SQLite locally · PostgreSQL-compatible configuration

Separate CI/CD Pipeline

GitHub Actions → PyTest + Coverage → Scanner CLI → Pull Request Feedback

**Understand the important files**

| File                   | Responsibility                                       |
| ---------------------- | ---------------------------------------------------- |
| `main.py`              | Initializes FastAPI and registers routers            |
| `database.py`          | Creates database engine and sessions                 |
| `models.py`            | Defines database tables                              |
| `schemas.py`           | Defines Pydantic request and response schemas        |
| `auth.py`              | Password hashing and JWT authentication              |
| `parser.py`            | Static AST analysis                                  |
| `generator.py`         | Generates PyTest test templates                      |
| `executor.py`          | Executes tests in temporary directories              |
| `gemini.py`            | Handles Gemini prompts and generated-code processing |
| `routers/`             | Organizes API endpoints                              |
| `testforge_scanner.py` | Analyzes changed code in CI/CD                       |

These responsibilities are particularly important because an interviewer may ask you to explain the difference between the parser, generator, and executor.

#### Source analysis and deterministic test generation

**Additional implementation detail from the supplied overview:** The notes describe breadth-first dependency resolution for fixtures. Be ready to trace the dependency graph, visited-node handling, missing dependencies and cycles in the actual generator; confirm this path against the version you demonstrate.

**How do you use AST in your project?**

Your project uses:

```python
import astsource_code = """def add(a, b):    return a + b"""tree = ast.parse(source_code)for node in ast.walk(tree):    if isinstance(node, ast.FunctionDef):        print("Function:", node.name)
```

Output:

```text
Function: add
```

**Understand each line**

| Code              | Meaning                                  |
| ----------------- | ---------------------------------------- |
| `import ast`      | Imports Python's AST module              |
| `ast.parse()`     | Converts source code into an AST         |
| `ast.walk()`      | Traverses AST nodes                      |
| `isinstance()`    | Checks the type of a node                |
| `ast.FunctionDef` | Represents a regular function definition |
| `node.name`       | Gets the function name                   |

Remember: AST analysis does not execute the target source code. It analyzes its syntax and structure.

##### Why did you use AST instead of executing the Python file?

Interview question: Why not directly import the uploaded Python file and inspect its functions?

Interview-ready answer

Directly importing an uploaded Python file can execute its top-level code. If the uploaded file contains unwanted operations, those operations may run during import.

Instead, I used Python's AST module to inspect the source code statically. This allows the application to extract functions, classes, parameters, and other structural information without executing the target file during analysis.

**Example**

Suppose someone uploads this file:

```python
import osos.remove("important_file.txt")def calculate(a, b):    return a + b
```

If you import this file, its top-level `os.remove()` operation may execute.

But if you use:

```python
tree = ast.parse(source_code)
```

Python parses the source text. It does not execute that `os.remove()` call.

**AST vs direct execution**

| AST parsing                    | Direct import/execution        |
| ------------------------------ | ------------------------------ |
| Reads source structure         | Loads and executes module code |
| Does not execute target code   | Can execute top-level code     |
| Extracts functions and classes | Gives runtime objects          |
| Useful for static analysis     | Useful for runtime behavior    |

Cross-question: Does AST guarantee that uploaded code is safe?

No. AST parsing avoids executing the uploaded source during the analysis stage, but it does not guarantee that the code is safe in every later stage.

TestForge separately executes generated tests and source files through a subprocess-based execution system. Temporary directories and timeouts provide some isolation, but they are not a complete operating-system security sandbox.

This is an important limitation to acknowledge honestly.

##### What information do you extract using AST?

Interview question: What exactly does your parser extract?

Your parser extracts information such as:

1. Imported modules.
2. Class definitions.
3. Class inheritance information.
4. Function and method names.
5. Function arguments and default values.
6. Type annotations.
7. Return expressions.
8. Docstrings.
9. Raised exceptions.
10. Line numbers.

For example:

```python
class BankAccount:    def withdraw(self, amount: float) -> bool:        if amount <= 0:            raise ValueError("Invalid amount")        return True
```

Your parser can identify:

| Element           | Extracted information |
| ----------------- | --------------------- |
| Class             | `BankAccount`         |
| Method            | `withdraw`            |
| Parameter         | `amount`              |
| Annotation        | `float`               |
| Return annotation | `bool`                |
| Exception         | `ValueError`          |
| Condition         | `amount <= 0`         |

##### How does TestForge generate PyTest test cases?

Interview question: Explain your test-generation algorithm.

Interview-ready answer

First, the application analyzes the uploaded Python file using AST and extracts its classes, functions, parameters, return expressions, and raised exceptions.

Then the test generator uses this extracted information to create PyTest templates.

For class-based code, it analyzes constructor dependencies and builds fixture dependencies using Breadth-First Search. It also generates mock values, assertions, and negative tests for detected exceptions.

The generated code is displayed in an editable test editor, where users can review and modify it before execution.

**Step-by-step example**

Original code:

```python
def calculate_discount(price, discount):    if discount < 0:        raise ValueError("Invalid discount")    return price - (price * discount / 100)
```

The AST parser identifies:

- Function: `calculate_discount`
- Parameters: `price`, `discount`
- Return expression
- Raised exception: `ValueError`

The generator can create a test structure like:

```python
import pytestdef test_calculate_discount():    result = calculate_discount(100, 10)    assert result == 90def test_invalid_discount():    with pytest.raises(ValueError):        calculate_discount(100, -10)
```

This illustrates the idea. Your actual generator uses extracted AST metadata and generation rules to build the test templates.

**Important: How does your generator handle exceptions?**

It detects `raise` statements in the AST.

For example:

```python
raise ValueError("Invalid discount")
```

The generator can create a negative test using:

```python
with pytest.raises(ValueError):    calculate_discount(100, -10)
```

This checks whether the function raises the expected exception.

**Why did you use fixtures in TestForge?**

Your generator analyzes class constructors and dependencies. It uses Breadth-First Search to build fixture dependency graphs and generates reusable fixtures with dependency injection.

This helps when a class depends on other objects.

**Prerequisite reference:** [AST and subprocess](#phase-6); [fixtures, mocks, parametrization and assertions](#phase-14). Dependency injection is explained in [object-oriented design](#phase-5).

#### AI augmentation, validation and failure handling

##### Why did you integrate Gemini API?

Interview question: Why did you use Gemini when you already had an AST-based test generator?

Interview-ready answer

AST is useful for understanding the structure of source code, but it cannot always determine meaningful business-level edge cases.

For example, it can identify a function's parameters and conditions, but deciding which unusual input scenarios deserve testing may require additional reasoning.

Therefore, I integrated Gemini to suggest edge cases based on the selected function or class.

The AST-based generator creates the initial test template, while Gemini helps improve the test coverage by suggesting additional scenarios.

**AST vs Gemini**

| AST                                           | Gemini                                    |
| --------------------------------------------- | ----------------------------------------- |
| Static code analysis                          | AI-based reasoning                        |
| Extracts source structure                     | Suggests possible test scenarios          |
| Deterministic parsing                         | Probabilistic generated output            |
| Does not understand all business requirements | Can reason from provided code and context |

**Example**

Suppose you have:

```python
def withdraw(balance, amount):    if amount > balance:        raise ValueError("Insufficient funds")    return balance - amount
```

AST can identify:

- Parameters.
- Conditions.
- Return expression.
- Raised exception.

Gemini may suggest testing:

- Withdrawal equal to the balance.
- Withdrawal greater than the balance.
- Withdrawal of zero.
- Negative withdrawal amount.
- Very large withdrawal amount.

These are suggestions. The developer should review whether each one is valid according to the intended business rules.

##### How do you prevent incorrect AI-generated code?

Interview question: LLMs sometimes hallucinate. How do you handle that?

Interview-ready answer

LLMs can generate incorrect or duplicate code. For example, they may redefine an existing class, use imports that do not exist, or generate invalid constructors.

To reduce these issues, I use AST-guided prompts with strict generation rules and a post-processing step.

The backend sanitizes generated code, including removing duplicate class definitions and cleaning the generated output. The frontend also detects duplicate test function names when appending AI-generated tests and adds numerical suffixes to avoid naming collisions.

**Two important layers**

Layer 1: Backend sanitization

Your `gemini.py` module contains `_clean_generated_code()` to process generated code and handle issues such as duplicate class definitions.

Layer 2: Frontend collision handling

When generated tests are appended, the frontend checks existing `def test_...` names.

For example:

Existing test:

```python
def test_withdraw():    pass
```

New AI-generated test has the same name.

The application can rename the appended test:

```python
def test_withdraw_1():    pass
```

Important: Sanitization reduces common generation errors. It does not guarantee that every AI-generated test is correct.

##### What happens if Gemini API reaches its rate limit?

Interview question: How does your application handle Gemini API failures?

Your project document describes Gemini 2.5 Pro as the primary model for edge-case recommendations, with automatic fallback to Gemini 2.5 Flash when a rate-limit response (HTTP 429) occurs.

Interview-ready answer

I implemented model fallback handling. If Gemini Pro reaches its rate limit, the application can retry the generation using Gemini Flash.

This helps maintain the availability of the AI-assisted feature when the primary model is temporarily rate-limited.

**Understand HTTP 429**

HTTP 429 means:

Too Many Requests.

It generally means the client has sent too many requests within a particular time period or has reached a provider's request quota.

**Pro vs Flash — interview-level explanation**

- Pro is the primary model configured for the relevant generation workflow.
- Flash is used as a fallback in the documented rate-limit handling.
- Both models are accessed through the Gemini API.

Avoid claiming that every possible Gemini failure is automatically handled by this fallback. Your documented fallback specifically mentions HTTP 429.

#### Execution, results and cleanup

##### How does TestForge execute generated tests?

Interview question: Explain the complete test execution process.

Interview-ready answer

When the user clicks the execute button, the application first saves the current test code.

The backend creates a unique temporary directory and writes the project's Python source files and generated test files into it.

Then it launches PyTest through a subprocess with coverage enabled and a 30-second timeout.

After execution, it reads the JUnit XML report and Coverage JSON report to extract test results, execution logs, and coverage information.

Finally, it stores the execution result in the database and cleans up the temporary directory.

**Execution flow**

1. User clicks Execute

   The frontend saves the current test code.
2. Temporary directory created

   A unique directory is created under `backend/temp_runs/`.
3. Files written

   Source files and test files are copied into the temporary directory.
4. PyTest subprocess launched

   The execution command runs with coverage enabled and a 30-second timeout.
5. Reports generated

   PyTest generates JUnit XML, and coverage tooling generates JSON.
6. Reports parsed

   The backend extracts passed tests, failed tests, logs, and coverage data.
7. Results saved and directory cleaned

   A `TestRun` record is stored and temporary files are removed in a `finally` block.

**Important command**

Your project uses a command based on:

```bash
python -m pytest \
  --junitxml=report.xml \
  --cov=. \
  --cov-report=json \
  -v
```

Understand the options:

| Option              | Meaning                                           |
| ------------------- | ------------------------------------------------- |
| `python -m pytest`  | Runs PyTest using the selected Python interpreter |
| `--junitxml`        | Generates a JUnit XML test report                 |
| `--cov=.`           | Measures coverage for the current directory       |
| `--cov-report=json` | Generates a JSON coverage report                  |
| `-v`                | Verbose output                                    |

##### How do you handle test execution timeout?

Interview question: What if the generated test runs infinitely?

Interview-ready answer

I configured a 30-second timeout for test execution. If the process does not finish within that period, the subprocess execution is interrupted instead of waiting indefinitely.

This prevents a single test run from waiting forever.

**Example**

```python
import subprocesstry:    subprocess.run(        ["python", "-m", "pytest"],        timeout=30,        check=False    )except subprocess.TimeoutExpired:    print("Test execution timed out")
```

Important limitation: A timeout limits execution duration, but it does not by itself prevent filesystem access, network access, privilege misuse, or every other form of malicious behavior. A production-grade execution environment would require stronger OS-level isolation and resource controls.

This is a good technical trade-off to explain if the interviewer asks about security.

**Execution boundary:** A temporary directory and a timeout do not create an operating-system security sandbox. User code still runs with the process's privileges unless additional isolation is implemented. Explain process-tree termination, file/network access, resource limits and dependency installation as concrete constraints; do not claim hardened isolation from directory cleanup alone.

#### QA cases and externalized test data

##### Explain the QA workflow in TestForge AI.

Your project includes a separate QA mode.

A user can create manual test cases with:

- Test title.
- Description.
- Test steps.
- Expected result.

The user can also define external test variables, such as:

```dotenv
BASE_URL = http://localhost:3000
```

Then the user clicks the automation option.

The backend sends the test-case details and external variables to Gemini, which generates a Playwright Python script.

**Example manual test case**

| Field             | Value                                           |
| ----------------- | ----------------------------------------------- |
| Title             | User Login Validation                           |
| Steps             | Open login page, enter credentials, click login |
| Expected result   | Dashboard should appear                         |
| External variable | `BASE_URL`                                      |

Gemini can generate a browser automation script using those instructions.

**Why use externalized variables?**

Suppose your application has different environments:

```text
Development: http://localhost:3000
Testing: https://test.example.com
Production: https://example.com
```

If you hardcode the URL into every test, changing environments becomes difficult.

Externalized variables make configuration easier.

Interview point: The project generates Playwright scripts from manual QA steps. Do not claim that every generated browser script is automatically executed inside the TestForge execution engine unless you have verified that functionality separately.

#### Change-risk scanner and repository integration

##### Explain your CI/CD change-impact scanner.

Interview question: What does your custom scanner do?

Interview-ready answer

I created a standalone Python CLI scanner that analyzes changed code in a pull request.

It uses Git diff information to identify modified lines and compares those lines with coverage information.

It also considers additional risk signals such as cyclomatic complexity and modification frequency.

Based on these factors, it calculates a weighted change-impact risk score and publishes quality feedback on the GitHub pull request.

**Why is this useful?**

Suppose a project has 10,000 lines of code and overall coverage is 90%.

That number may look good.

But what if a developer modifies an important payment function and none of the changed lines are covered by tests?

Overall coverage might hide this problem.

Your scanner focuses on changed code instead of relying only on overall repository coverage.

##### How does your scanner publish comments on GitHub pull requests?

Your project uses the GitHub REST API to publish pull-request quality feedback.

The GitHub Actions workflow runs the scanner after the relevant test and coverage steps.

The scanner analyzes the results and creates or updates a pull-request comment.

Your documentation also describes anti-spam behavior: instead of publishing a completely new report comment after every push, the workflow can update the existing report comment.

This keeps pull-request feedback organized.

The scanner is separate from the interactive web execution path. Use [Phase 14](#phase-14) for changed-line coverage and complexity, [Phase 2](#phase-2) for diffs and pull requests, and [Phase 16](#phase-16) for Actions jobs and CI configuration. Verify actual scanner inputs, thresholds, permissions and workflow files before quoting a quality-gate result.

#### Persistence and account flow

##### Which database did you use?

Interview question: Which database did you use in TestForge AI and why?

Interview-ready answer

I used SQLAlchemy as the ORM layer. SQLite is the default database for local development, while the project also supports PostgreSQL through its database configuration.

I used SQLAlchemy to define database models and manage database operations without writing raw SQL for every operation.

**What are your main database tables?**

Your project documentation identifies these seven tables:

| Table             | Purpose                          |
| ----------------- | -------------------------------- |
| `users`           | Stores user accounts             |
| `projects`        | Stores user projects             |
| `project_files`   | Stores uploaded source files     |
| `generated_tests` | Stores generated test code       |
| `test_runs`       | Stores execution results         |
| `test_cases`      | Stores QA test cases             |
| `test_data`       | Stores externalized QA variables |

The main relationship is:

One User → Many Projects → Multiple Project Resources

**How does authentication work in TestForge?**

Your authentication flow is:

1. User registers with email and password.
2. Backend hashes the password.
3. The password hash is stored in the database.
4. User submits login credentials.
5. Backend verifies the password.
6. Backend creates a JWT.
7. Frontend stores the token in local storage.
8. The API client sends it in the Authorization header for protected requests.

**Your implementation**

The documented implementation uses:

- `hashlib.pbkdf2_hmac`
- SHA-256
- Random salt generated with `secrets.token_hex(16)`
- 100,000 iterations
- `secrets.compare_digest()` for password verification

**Security reference:** Password hashing, salts, token verification and resource authorization are in [Phase 13](#phase-13). The saved TestForge notes describe PBKDF2-HMAC-SHA256; do not substitute UniNest's bcrypt implementation into this project answer. Check ownership on project/file/test/run endpoints, not merely whether a JWT is valid.

#### Debugging, limitations and practical follow-ups

##### How do you debug your project?

This is one of the interview topics specifically mentioned in the interview experiences.

Interview-ready answer

I debug issues by first reproducing the problem and identifying which layer is responsible.

For example, if a test is not executing correctly, I check the frontend request, backend API logs, generated test code, subprocess output, and execution reports.

I use browser DevTools for frontend debugging, logs and error traces for backend debugging, and Postman to test APIs independently.

After finding the root cause, I fix it and retest the affected functionality.

**Your practical debugging approach**

| Layer          | What to check                                 |
| -------------- | --------------------------------------------- |
| Frontend       | Browser console, Network tab, component state |
| API            | Request body, endpoint, status code           |
| Backend        | Logs, exceptions, stack traces                |
| Database       | Records, relationships, query errors          |
| AI             | Prompt, API response, generated output        |
| Test execution | PyTest output, JUnit XML, timeout             |
| CI/CD          | GitHub Actions logs, scanner output           |

**Common debugging questions**

Q: What is a bug?

A bug is an error or defect in software that causes it to behave incorrectly or unexpectedly.

Q: What is a stack trace?

A stack trace shows the sequence of function calls that led to an error. It helps identify where an exception occurred.

Q: What is a breakpoint?

A breakpoint pauses program execution at a particular line so that a developer can inspect variables and program state.

Q: What is root-cause analysis?

It means finding the underlying reason for a problem instead of only fixing its visible symptoms.

##### How do you handle security in TestForge AI?

Interview-ready answer

I considered security at different layers of the application.

For authentication, I used salted PBKDF2 password hashing and JWT-based authentication.

For API protection, protected endpoints require authentication, and project ownership is checked before accessing project resources.

For uploaded Python source analysis, I used AST parsing instead of directly importing the source code during analysis.

For test execution, I used temporary directories and a subprocess with a 30-second timeout.

However, I understand that temporary-directory isolation and timeouts are not a complete security sandbox. A production system handling untrusted code would need stronger operating-system-level isolation and resource restrictions.

**Security concepts to remember**

| Concept          | Meaning                                                    |
| ---------------- | ---------------------------------------------------------- |
| Hashing          | Protects stored passwords                                  |
| Salt             | Adds random data before hashing                            |
| JWT              | Carries signed authentication claims                       |
| Authentication   | Verifies user identity                                     |
| Authorization    | Checks permissions                                         |
| Input validation | Checks incoming data                                       |
| CORS             | Controls browser cross-origin access                       |
| Timeout          | Limits how long execution can wait                         |
| Isolation        | Separates potentially risky execution from other processes |

This answer is stronger than claiming that your project is completely secure.

##### Practical Scenarios an Interviewer May Give You

These questions test whether you understand the decisions behind your project.

##### Scenario 1: What if AST parsing fails?

Question: A user uploads invalid Python code. What happens?

Answer:

`ast.parse()` raises a `SyntaxError` when the source code has invalid Python syntax. The backend should catch that exception and return a meaningful validation error instead of allowing an unhandled exception to break the request.

Example:

```python
import astsource_code = "def add(:"try:    tree = ast.parse(source_code)except SyntaxError as error:    print("Invalid Python code:", error)
```

##### Scenario 2: What if the generated test fails?

Question: Does a failed generated test mean your generator is broken?

Answer:

Not necessarily. A test can fail because the original source code has a bug, the generated expectation is incorrect, or the test setup is incomplete.

I would inspect the failure trace, generated test code, original function, and expected behavior to identify the actual cause.

##### Scenario 3: What if two AI-generated tests have the same name?

Answer:

The frontend checks existing test function names before appending new tests. If a duplicate exists, it adds a numerical suffix to avoid the naming collision.

##### Scenario 4: What if the user uploads a very large Python file?

Answer:

A production version should enforce upload-size limits, validate file types, and manage processing time and memory usage. Large source files can make static analysis and test generation more expensive.

Do not claim that your current implementation has specific upload-size limits unless you verify them in the source code.

##### Scenario 5: What if a test has an infinite loop?

Answer:

The subprocess timeout limits the test execution duration. In TestForge AI, the configured timeout is 30 seconds.

For stronger protection against untrusted code, I would use container or OS-level isolation, resource limits, and restricted filesystem and network access.

##### Scenario 6: What if overall coverage is 95%, but newly changed code has 0% coverage?

Answer:

That is exactly the kind of situation the change-impact scanner is intended to identify. It examines changed lines and compares them against coverage information instead of depending only on overall repository coverage.

##### Important Resume Cross-Questions

Your resume makes several claims about TestForge AI. An interviewer may ask you to defend the wording.

| Resume statement              | What you should be prepared to explain               |
| ----------------------------- | ---------------------------------------------------- |
| AST analysis                  | How parsing works and what information is extracted  |
| PyTest suite generation       | How templates, fixtures and assertions are generated |
| GitHub Actions workflow       | Workflow triggers, jobs and scanner execution        |
| Coverage gaps in changed code | Git diff mapping and coverage comparison             |
| Change-risk signals           | Complexity, modification frequency and coverage      |
| Gemini edge-case suggestions  | Prompt construction and code sanitization            |
| Playwright generation         | How manual test cases become browser scripts         |

One important distinction: Your resume describes test generation across multiple project types, but the documented AST parser is specifically for Python source code. If asked about language support, explain that the verified static parser and PyTest generation workflow target Python.

Also, your project documentation describes a functional portfolio prototype. Present it as a working project, not as a mature enterprise testing platform.

**Deployment evidence:** The notes establish a development/CI workflow, but do not independently establish a specific public production host. Demonstrate the actual configuration and deployment run before naming a production environment.

#### One-minute interview explanation

##### Version 2 — 1-minute answer

TestForge AI is a full-stack testing platform that I built to reduce manual testing effort.

The frontend uses Next.js, React, and TypeScript, while the backend uses FastAPI and Python.

Its main feature is AST-based static code analysis. When a user uploads a Python file, the backend extracts classes, functions, arguments, and exceptions without executing the source during analysis.

Based on that information, it generates PyTest templates. I also integrated Gemini for additional edge-case suggestions and implemented sanitization and duplicate-name handling for generated tests.

The platform can execute tests through a subprocess, generate coverage reports, and store execution history.

It also has a QA mode for managing manual test cases and generating Playwright scripts, along with a GitHub Actions scanner for changed-code coverage and pull-request quality feedback.

**Code walkthrough route:** Start with an API router, trace validation and ownership checks, then parser → generator/Gemini adapter → executor → database models → response displayed in the frontend. Show one successful execution, one syntax failure, one test failure and a timeout. Explain each report artifact using [Phase 14](#phase-14).

<a id="project-domlens"></a>

<a id="phase-18-section-2"></a>

### DOMLens — complete project defence

#### Problem, architecture and source layout

##### What is DOMLens?

Interview question: Explain your DOMLens project.

Interview-ready answer

DOMLens is an AI-powered Chrome Extension that helps developers inspect web page elements, understand their styles and layout, and generate reusable UI code.

It allows users to select elements from a live webpage and inspect information such as HTML structure, computed CSS properties, typography, colors, dimensions, and layout.

It also provides a floating developer panel with different inspection tools. Users can preview UI changes, edit styles using natural language, and generate HTML/CSS or React JSX code.

I integrated multiple AI providers, including Gemini, Groq, OpenRouter, and OpenAI, to support AI-based editing and code generation.

The main objective is to make UI inspection and frontend development faster and easier.

**Understand it in simple language**

Imagine you visit a website and like a particular card design.

Normally, you might have to:

1. Open browser DevTools.
2. Inspect the HTML element.
3. Find the CSS properties.
4. Understand its dimensions, colors, and typography.
5. Recreate the component manually in your project.

DOMLens helps automate parts of this process.

You select the element, and DOMLens collects information about it. It displays the information in its developer panel and can use AI to help modify or generate code.

![WebAIM: Contrast and Color Accessibility - Evaluating Contrast with Chrome DevTools](https://images.openai.com/static-rsc-4/dMsD0J6-GrfJm_NYkqSip8lTzWwB5comSgkvHJ5xJN02z5ECMh1AEJpTzRC8vRdayU9g3YgrBBiqnHTSvOIbsXs5H5rmDiF2SKjoh6v1Kbee-lUZuoIDoBfNi5Odfb2UhhzSAj9BjAp23LKOZ6U83QLhAK33G2JhYBT8FcBI_-g?purpose=inline)

![Visual Inspector Tabs by CanvasFlip  on Dribbble](https://images.openai.com/static-rsc-4/K3UCeVLrK5IKUXZCvHdRWArPzoxXSDfAh13M0M8NPVOY3o2LOG1I275k6-SRzJ7Oyi3yr77e1QyXCsJNPNmnFy8cJdWqVl2hdRu1GkhYKk0w_0e7nr6TfPgLBbbeQ_gWeh-7bEFDaLTZ71sI-_ecdH87egc-VMEvExs07atgpvk?purpose=inline)

![CSS Peeper – Inspect website styles in seconds.](https://images.openai.com/static-rsc-4/q4t3L4wV_RaXWockD16dSQy_gktpWU7XbX3Xf91P_3T55POn2bRsg6NRNYFHVeNNWPnxR2bobgwgFyfuYobm1d3Z5e7f3Pd40WgriNOuUal5cEKil0GoUKjA5VlhZsT8d9gOX43miYXJkJ61XRYC5Z8K3jNjLu3irvfVc0SiquM?purpose=inline)

8

**Main features**

| Feature             | Purpose                                       |
| ------------------- | --------------------------------------------- |
| Live DOM Inspection | Select and inspect webpage elements           |
| Style Inspection    | Extract computed CSS properties               |
| Typography          | Examine font-related properties               |
| Colors              | Identify colors used by elements              |
| Layout Inspection   | Understand dimensions and spacing             |
| Live Preview        | Preview HTML/CSS changes                      |
| AI Editing          | Modify UI using natural-language instructions |
| Code Generation     | Generate HTML/CSS and React JSX               |
| Multi-provider AI   | Connect Gemini, Groq, OpenRouter and OpenAI   |

Remember this sequence:

Inspect → Extract → Analyze → Edit → Preview → Generate

##### What problem does DOMLens solve?

Interview question: Why did you build DOMLens?

Interview-ready answer

While developing frontend applications, I noticed that recreating an existing UI component requires manually inspecting its HTML structure, CSS properties, dimensions, and styling.

This process can become repetitive, especially when working with complex layouts.

I wanted to build a browser extension that could inspect webpage elements, extract their styling information, provide an interactive editing environment, and use AI to assist with UI modifications and code generation.

DOMLens combines these activities into one developer tool.

**Problems and solutions**

| Problem                                    | DOMLens solution               |
| ------------------------------------------ | ------------------------------ |
| Manually inspecting elements takes time    | Live DOM inspector             |
| Understanding computed styles is difficult | Computed CSS extraction        |
| Recreating UI components takes effort      | HTML/CSS and JSX generation    |
| Editing styles requires manual CSS changes | Natural-language style editing |
| Previewing changes can be inconvenient     | Isolated iframe preview        |
| AI providers can experience failures       | Multi-provider fallback system |

Important: DOMLens is a developer-assistance tool. Do not claim that it perfectly recreates every website or generates production-ready code in every situation.

##### Explain the architecture of DOMLens

Interview question: Explain the complete architecture of your project.

Interview-ready answer

DOMLens follows a Chrome Extension Manifest V3 architecture.

It is divided into multiple parts: the background service worker, content scripts, popup, and an injected floating panel.

The background service worker handles extension lifecycle events, tab-related operations, keyboard shortcuts, and dynamic content-script injection.

Content scripts interact with the webpage DOM, extract element information, and inject the inspector interface.

The popup provides the extension's entry point, while the floating panel is isolated using Shadow DOM to prevent styling conflicts with the host webpage.

For AI operations, I created a common service layer that communicates directly with different LLM providers through HTTP APIs.

**Architecture diagram**

Chrome Browser / Host Webpage

Website DOM, HTML, CSS and JavaScript

Popup

Extension entry point and controls

Background Service Worker

Lifecycle, commands and script injection

Chrome runtime messaging

Content Scripts

DOM inspection · Element selection · Data extraction

Shadow DOM Floating Inspector Panel

Live · Overview · Typography · Colors · Layout · Code · Edit · Assets · Settings

ComponentState

Central state store and event subscriptions

Preview Renderer

Isolated iframe using srcdoc

AI service layer · HTTP requests · SSE streams

External AI Providers

Gemini · Groq · OpenRouter · OpenAI

**Understand the important directories**

| Directory/file                 | Responsibility                            |
| ------------------------------ | ----------------------------------------- |
| `manifest.json`                | Extension configuration and permissions   |
| `background/background.js`     | Background service worker                 |
| `content/`                     | DOM interaction and floating panel        |
| `content/panel.js`             | Main inspector panel                      |
| `utils/component_state.js`     | Centralized state management              |
| `utils/llm_service.js`         | AI provider communication                 |
| `utils/prompt_generator.js`    | Builds AI prompts from DOM information    |
| `utils/component_generator.js` | Generates React JSX                       |
| `utils/preview_renderer.js`    | Renders isolated HTML/CSS preview         |
| `utils/tailwind_mapper.js`     | Maps CSS declarations to Tailwind classes |
| `utils/text_editor.js`         | Direct text and attribute editing         |
| `utils/style_editor.js`        | Natural-language CSS style editing        |
| `utils/theme.js`               | Dark, light and system themes             |

The key architectural distinction is that the extension's production runtime uses native JavaScript and browser APIs, not React or a backend framework.

**Platform reference:** [Phase 1](#phase-1) owns Manifest V3, content scripts, workers, messaging, DOM APIs, Shadow DOM, iframe documents and Chrome storage. [Phase 3](#phase-3) owns browser events, observable state, asynchronous execution and stream decoding.

#### Inspecting and selecting a page element

##### How does DOMLens inspect CSS properties?

Interview question: How do you extract the actual CSS applied to an element?

Interview-ready answer

DOMLens uses the browser's `window.getComputedStyle()` API to inspect the computed CSS properties of selected elements.

This is useful because an element's final appearance can be affected by styles from multiple CSS rules, inheritance, and browser defaults.

The computed style API gives us the resolved style values that the browser uses for rendering.

**Example**

HTML:

```html
<div id="card">Hello</div>
```

CSS:

```css
#card {
    color: blue;
    padding: 20px;
    background-color: white;
}
```

JavaScript:

```javascript
const element = document.getElementById("card");

const styles = window.getComputedStyle(element);

console.log(styles.color);
console.log(styles.padding);
console.log(styles.backgroundColor);
```

Possible output:

```text
rgb(0, 0, 255)
20px
rgb(255, 255, 255)
```

##### How does DOMLens identify the element under the mouse pointer?

Your project uses `document.elementFromPoint()`.

Interview question: What is `elementFromPoint()`?

It returns the topmost element at the specified viewport coordinates.

Example:

```javascript
document.addEventListener("mousemove", (event) => {

    const element = document.elementFromPoint(
        event.clientX,
        event.clientY
    );

    console.log(element);
});
```

**Explanation**

- `event.clientX` gives the horizontal mouse position relative to the viewport.
- `event.clientY` gives the vertical mouse position relative to the viewport.
- `elementFromPoint()` finds the topmost element at those coordinates.

This is useful for a UI inspector because the user can move the mouse over an element and identify what is underneath it.

**Q18.1. Why does DOMLens use `document.elementFromPoint()`?**

It returns the topmost element at a particular viewport coordinate.

This is useful for hover-based inspection because the extension can identify the element under the pointer without needing to attach a separate event listener to every element on the page.

For example:

```javascript
document.addEventListener(
    "mousemove",
    (event) => {
        const element = document.elementFromPoint(
            event.clientX,
            event.clientY
        );

        if (element) {
            console.log(element.tagName);
        }
    },
    true
);
```

This is an illustrative example of the API, not a replacement for DOMLens's actual implementation.

Follow-up: Why use capture phase?

The third argument `true` registers the listener in the capture phase. This lets the listener observe the event as it travels down the DOM event path, before it reaches the target.

**Q18.2. Why does DOMLens ignore its own inspector container?**

The extension injects its own UI into the webpage. Without filtering, the inspector could select its own overlay or panel instead of the actual website element.

The supplied audit notes state that DOMLens ignores its own `#website-inspector-root` container.

This is important to prevent self-interference.

**Q18.3. Why does `handleClick()` call `preventDefault()` and `stopPropagation()`?**

The inspected implementation uses these methods to prevent the original webpage click action from occurring while the user is selecting an element.

- `preventDefault()` prevents the browser's default action when the event is cancelable.
- `stopPropagation()` prevents further propagation through the event path.

Trade-off: This can interfere with normal webpage interactions. For example, a user might unintentionally cancel a link navigation or form interaction while inspection is active.

A stronger implementation should make this interaction intentional, visible and easy to exit.

#### Inspector isolation and preview

**How Shadow DOM helps**

Without Shadow DOM

Website DOM

Website CSS

Inspector UI styles may conflict

Possible CSS conflicts

With Shadow DOM

Website DOM

Shadow Root

Inspector UI styles

Style encapsulation

**Why is iframe useful for previewing UI?**

Suppose DOMLens generates this CSS:

```css
body {
    background: black;
    color: white;
}
```

If you inserted that CSS directly into the host webpage, it could change the appearance of the entire website.

Instead, DOMLens can render the generated HTML and CSS inside an iframe.

This separates the preview from the original page.

The saved design separates inspector UI isolation from generated-content preview. Shadow DOM reduces style collisions but is not an authorization boundary. Explain the actual iframe sandbox attributes and CSP from the target commit before making an isolation claim; applying generated code directly to the host page has a different risk profile.

#### State updates and native JavaScript design

##### Why did you use native JavaScript instead of React?

Interview question: Why didn't you use React for DOMLens?

Interview-ready answer

I intentionally built the production extension using native JavaScript instead of a frontend framework.

DOMLens is designed to run inside arbitrary webpages, so I wanted to minimize runtime dependencies and avoid adding unnecessary framework overhead.

Native JavaScript also provides direct access to browser APIs, DOM events, Shadow DOM, and extension messaging.

I used React 19 only in a separate verification test to validate generated JSX output. React is not part of the production extension runtime.

**Important distinction**

| Production extension        | Test and verification environment |
| --------------------------- | --------------------------------- |
| Native JavaScript           | React 19                          |
| Native DOM APIs             | `react-dom/server`                |
| Shadow DOM                  | JSX rendering tests               |
| No production React runtime | `esbuild` for JSX transformation  |

This is an excellent question to prepare because your interviewer may see React mentioned in your project files.

**Q18.4. What is `ComponentState` in DOMLens?**

DOMLens uses a custom state store called `ComponentState` to manage component-related state.

The important concept is unidirectional data flow.

**DOMLens selection-to-preview update path**

User action

Select an element or change a setting

State update

Update the stored data

UI re-render or update

Display the latest state

Another user action starts the cycle again

#### AI request, validation and streaming flow

##### How did you integrate AI into DOMLens?

Interview question: Explain your AI integration.

Interview-ready answer

I integrated multiple AI providers, including Gemini, Groq, OpenRouter, and OpenAI.

Instead of using official provider SDKs, I implemented direct HTTP REST requests using the browser's Fetch API.

I created a common service layer called `llm_service.js` that abstracts the different providers behind a consistent interface.

The application extracts the selected element's DOM structure, computed styles, and relevant context. It then uses a prompt generator to construct structured instructions for the AI model.

The AI response is validated, parsed, and used for UI editing or React component generation.

**Understand the workflow**

1. User selects an element

   DOMLens identifies the selected DOM element.
2. DOM information is extracted

   HTML hierarchy, computed CSS, and accessibility attributes are collected.
3. Prompt is generated

   `prompt_generator.js` formats the extracted information and user's instructions.
4. AI service is called

   `llm_service.js` sends the request to the selected provider.
5. Response is processed

   The application parses and validates the returned structure.
6. Component state is updated

   Generated HTML and CSS are applied to the current state.
7. Preview and code are updated

   The user can inspect the result.

##### Why did you use multiple AI providers?

Interview question: Why not use only Gemini?

Interview-ready answer

I integrated multiple AI providers to improve reliability and flexibility.

Different providers offer different models, capabilities, response times, and availability.

If one model experiences temporary capacity problems or becomes unavailable, the application can attempt another configured model.

This also gives users flexibility to choose their preferred provider.

**Providers supported by your project**

| Provider      | Integration     |
| ------------- | --------------- |
| Google Gemini | Direct REST API |
| Groq          | Direct REST API |
| OpenRouter    | Direct REST API |
| OpenAI        | Direct REST API |

**Why did you use Fetch instead of an SDK?**

Your project documentation describes direct HTTP REST requests without official AI SDKs.

This approach avoids adding SDK dependencies to the production extension and gives you direct control over request construction, response parsing, and streaming.

**Why require JSON output?**

Because the application needs to process the response programmatically.

If the model returns a long explanation mixed with HTML and CSS, parsing becomes more difficult.

A structured response is easier to validate and apply.

##### How do you handle invalid AI responses?

Interview question: What if the AI returns invalid JSON?

Interview-ready answer

LLMs may sometimes return malformed JSON, extra Markdown formatting, or responses that do not follow the expected schema.

In DOMLens, I use defensive JSON parsing and strict schema validation.

If the response is invalid or malformed, the application can initiate a secondary repair request asking the model to correct the structure.

This reduces failures when processing AI-generated HTML and CSS.

**Example of invalid output**

```css
Here is your result:

{
    "html": "<button>Submit</button>",
    "css": "button { color: blue; }"
```

This output has explanatory text and an incomplete JSON object.

**What should a valid response look like?**

```json
{
  "html": "<button>Submit</button>",
  "css": "button { color: blue; }",
  "changes": [
    "Updated button color"
  ]
}
```

**What is schema validation?**

Schema validation checks whether received data follows a predefined structure and expected types.

For example:

| Field     | Expected type    |
| --------- | ---------------- |
| `html`    | String           |
| `css`     | String           |
| `changes` | Array of strings |

Important: JSON parsing alone does not guarantee safe HTML or CSS. DOMLens also performs HTML/CSS structure validation and sanitization before preview rendering.

**How does DOMLens process streaming data?**

1. Send an HTTP request to the AI provider.
2. Receive the response body as a stream.
3. Obtain a reader from the stream.
4. Read incoming binary chunks.
5. Decode chunks into text.
6. Buffer incomplete data.
7. Split complete lines and events.
8. Parse the event payload.
9. Process the generated content.

**Why is it useful in DOMLens?**

Suppose a user requests an AI modification, but then decides to cancel it.

The application can abort the ongoing request instead of continuing to wait for an unwanted response.

Your project's reliability tests also cover `AbortSignal` cancellation.

**How does DOMLens handle them?**

According to your project audit:

- 503: retry with backoff and fallback handling.
- 404: immediately skip or eject the unavailable model.
- Duplicate submissions: use a concurrency lock.
- Cancellation: use `AbortSignal`.

Use [Phase 11](#phase-11) for retries, backoff, jitter, circuit breakers and SSE versus WebSockets. On this project, trace the centralized LLM layer, provider adapter, stream parser, validation boundary and state update. Verify which provider/model paths implement fallback; do not imply every provider behaves identically.

#### HTML-to-JSX conversion and utility-class mapping

##### How does DOMLens convert HTML into React JSX?

Interview question: Explain your component generation pipeline.

Interview-ready answer

DOMLens has a multi-stage component generation pipeline.

First, it receives the selected DOM structure and sanitizes unsupported or unnecessary elements.

Then it resolves nested element relationships and converts HTML attributes into JSX-compatible attributes.

It also handles SVG attribute transformations and applies Tailwind utility classes based on computed CSS values.

Finally, it generates the React JSX output.

**Pipeline**

1

Raw DOM

Selected webpage elements

2

Sanitization

Clean unsupported wrappers and markup

3

Nesting Resolution

Preserve parent-child relationships

4

HTML-to-JSX Mapping

Convert HTML syntax to JSX-compatible syntax

5

Tailwind Class Injection

Map CSS properties to utility classes

6

React JSX Output

Generate reusable component code

**Example**

Original HTML:

```html
<div class="card">
    <label for="email">Email</label>
    <input id="email">
</div>
```

Generated JSX:

```jsx
function Card() {
    return (
        <div className="card">
            <label htmlFor="email">
                Email
            </label>

            <input id="email" />
        </div>
    );
}
```

**What is attribute transformation?**

JSX has its own syntax rules.

Your generator converts certain HTML attributes into their JSX equivalents.

Examples:

| HTML           | JSX           |
| -------------- | ------------- |
| `class`        | `className`   |
| `for`          | `htmlFor`     |
| `tabindex`     | `tabIndex`    |
| `stroke-width` | `strokeWidth` |
| `fill-rule`    | `fillRule`    |

##### What is an AST-like transformation?

Your project documentation describes an HTML-to-JSX AST mapping stage.

Interview question: Did you use Babel AST for JSX conversion?

Interview-ready answer

No. I implemented a custom heuristic transformation pipeline using DOM parsing, sanitization, nesting resolution, and attribute mapping.

It follows AST-like structural transformation principles, but it is not a full Babel AST-based compiler.

The goal was to convert the selected webpage's DOM structure into JSX-compatible output while handling common HTML and SVG differences.

**Important distinction**

| Formal compiler AST                              | DOMLens transformation                        |
| ------------------------------------------------ | --------------------------------------------- |
| Uses a formal parser and AST representation      | Uses custom DOM and transformation logic      |
| Provides detailed language syntax representation | Handles selected HTML-to-JSX conversion cases |
| Can support complex language transformations     | Uses heuristic transformation rules           |
| Example: Babel parser                            | Custom component generator                    |

Very important: Do not tell the interviewer that you built a complete Babel compiler or a production-grade React transpiler.

Your documentation explicitly describes the generator as heuristic and not based on a formal Babel AST parser.

**How does DOMLens use Tailwind?**

DOMLens contains a custom mapper called `tailwind_mapper.js`.

It maps selected computed CSS declarations into Tailwind utility class strings.

For example:

| Computed CSS         | Possible Tailwind class |
| -------------------- | ----------------------- |
| `padding: 16px`      | `p-4`                   |
| `color: white`       | `text-white`            |
| `border-radius: 8px` | `rounded-lg`            |
| `display: flex`      | `flex`                  |

Important: DOMLens does not use a complete Tailwind build pipeline or run the Tailwind JIT engine. It maps CSS declarations into Tailwind's utility-class vocabulary.

#### Permissions, keys and generated-code risks

##### How do you handle security in DOMLens?

Interview question: Explain the security considerations in your project.

Interview-ready answer

DOMLens interacts with arbitrary webpages and sends selected UI information to external AI providers, so I considered security at multiple levels.

For the extension, I followed Chrome Manifest V3's Content Security Policy restrictions and avoided `eval()` and inline scripts.

For preview rendering, I used an iframe with `srcdoc` and sandboxing to isolate generated markup from the host webpage.

I also implemented HTML sanitization before rendering generated content, validated AI response structures, avoided hardcoded API keys, and stored provider credentials in browser storage.

The application also masks secrets in its logs.

**Important security features**

| Security area              | DOMLens approach           |
| -------------------------- | -------------------------- |
| Extension script execution | Manifest V3 CSP            |
| HTML preview               | Sandboxed iframe           |
| CSS conflicts              | Shadow DOM encapsulation   |
| AI response handling       | JSON validation and repair |
| Generated markup           | Sanitization               |
| API credentials            | Browser storage            |
| Console logging            | Secret masking             |
| Duplicate AI requests      | Concurrency lock           |

**How do you reduce this risk?**

- Sanitize untrusted HTML.
- Validate generated structures.
- Avoid inserting arbitrary untrusted content directly into the host DOM.
- Use a sandboxed iframe for preview rendering.
- Apply appropriate CSP restrictions.

Important limitation: Shadow DOM is not a security boundary, and an iframe is only as restrictive as its sandbox configuration. Avoid saying that these features make DOMLens completely immune to XSS.

##### Where do you store API keys?

Interview question: How does DOMLens store provider API keys?

Interview-ready answer

DOMLens stores provider API keys in Chrome's browser storage rather than hardcoding them into the source code.

It uses `chrome.storage.sync` for preferences and provider configuration, and `chrome.storage.local` for local extension state.

The interface masks API keys, and the logging system avoids exposing secrets in console output.

**Security cross-question: Is storing API keys in browser storage completely secure?**

No.

Browser extension storage is not equivalent to a secure server-side secrets vault. An extension's own code and a user with access to the browser profile may be able to access stored credentials.

For a production service, a backend proxy with secure server-side secret management can be more appropriate, depending on the architecture.

#### Validation and actual test tooling

##### How did you test DOMLens?

Interview question: Explain your testing approach.

Interview-ready answer

I used custom Node.js test scripts instead of a conventional testing framework such as Jest or Mocha.

The tests cover provider switching, storage persistence, style editing, JSX generation, DOM mutations, and AI pipeline reliability.

I also created an interactive HTML playground for manual browser verification.

For JSX compilation validation, I used esbuild to transform generated JSX and React's server renderer to verify the output.

**Testing structure**

| Test file                         | What it validates                             |
| --------------------------------- | --------------------------------------------- |
| `test_style_and_provider.js`      | Provider switching, storage and style editing |
| `test_react_generator.js`         | JSX generation and nesting                    |
| `test_youtube_edit.js`            | Live text mutations                           |
| `test_llm_pipeline_resilience.js` | Fallbacks, retries and cancellation           |
| `run_real_compilation_test.js`    | JSX transformation and React rendering        |
| `test_page.html`                  | Manual browser verification                   |

Your audit specifically records 37 tests in `test_style_and_provider.js` and 37 resilience tests in `test_llm_pipeline_resilience.js`. 

**Important: Why not Jest?**

Your project does not use Jest, Mocha, Cypress, or a conventional coverage runner.

You created custom Node.js test scripts with assertion logic.

If asked, explain that this was a deliberate lightweight testing approach, not a Jest-based test suite.

#### Failure scenarios and design extensions

##### Scenario 1: What if the host website has CSS rules that affect your inspector?

Answer:

I use Shadow DOM to encapsulate the inspector's styles. This prevents normal host-page CSS selectors from freely cascading into the inspector's shadow tree.

##### Scenario 2: What if the generated CSS changes the entire original website?

Answer:

I render the generated HTML and CSS inside a separate iframe preview rather than inserting the generated styles directly into the host webpage.

##### Scenario 3: What if Gemini returns invalid JSON?

Answer:

I use defensive JSON parsing and schema validation. If the response is malformed, the application can send a secondary repair request to correct the structure.

##### Scenario 4: What if the primary AI model returns HTTP 503?

Answer:

The application uses retry limits and exponential backoff for temporary capacity problems. It can then move to another configured model through its fallback system.

##### Scenario 5: What if a configured AI model returns HTTP 404?

Answer:

The fallback logic immediately skips or ejects that unavailable model rather than repeatedly trying the same invalid model ID.

##### Scenario 6: What if the user clicks Generate multiple times quickly?

Answer:

DOMLens uses a client-side concurrency lock, such as `isApplyingEdit`, to prevent duplicate submissions and unnecessary API requests.

##### Scenario 7: What if the AI response arrives in incomplete chunks?

Answer:

The streaming parser buffers incomplete data until it receives complete lines and event boundaries. It then parses the completed SSE messages.

##### Scenario 8: What if the user cancels AI generation?

Answer:

The application uses `AbortController` and `AbortSignal` to cancel the ongoing request when cancellation is supported by the request flow.

##### Scenario 9: What if an HTML element has nested children?

Answer:

The component generator resolves the nesting relationships before generating JSX. This helps preserve the original parent-child structure.

##### Scenario 10: What if an SVG attribute is invalid in JSX?

Answer:

The generator maps applicable SVG attributes to JSX-compatible camelCase names, such as `stroke-width` to `strokeWidth`.

**Q18.5. What would you improve in DOMLens?**

Sample answer:

"I would improve the accuracy of HTML-to-JSX transformation, expand CSS-to-Tailwind mapping, add more comprehensive automated tests, improve AI response validation, and strengthen preview security. I would also improve error messages so users can understand why a provider or code-generation operation failed."

**Q18.6. What happens if the selected element is removed from the webpage?**

Sample answer:

"The extension should detect that the selected element is no longer available. It should clear or invalidate the stale selection and update the interface instead of continuing to use an outdated element reference."

**Q18.7. What happens if the user selects a very complex component?**

Sample answer:

"The extracted information may become large or complex. I would prioritise the relevant element information, handle nested structures carefully, and avoid sending unnecessary data to the AI provider."

**Q18.8. What if the AI generates incorrect code?**

Sample answer:

"AI-generated code is not guaranteed to be correct. I would validate the output, handle syntax or formatting errors, display useful feedback, and allow the developer to review and modify the generated code."

**Q18.9. How would you make DOMLens more scalable?**

Sample answer:

"I would separate the inspection, state management, provider integration, transformation, and preview responsibilities into well-defined modules. I would also improve error handling, caching where appropriate, test coverage, and provider configuration."

**Q18.10. What did you learn from building DOMLens?**

Sample answer:

"I gained practical experience with browser APIs, DOM manipulation, Chrome extension architecture, Shadow DOM, iframe-based previews, asynchronous JavaScript, streaming responses, and AI API integration. I also learned that integrating AI into a real application requires proper validation and error handling, not just sending prompts to an API."

#### Runtime, build-tool and deployment claim boundaries

##### Critical Resume and Project Accuracy Check

This is one of the most important sections of this lesson.

Your DOMLens project audit identifies several technologies that are present in the repository but are not part of the production extension runtime.

You should know these distinctions before an interviewer asks about them.

| Technology                | Actual role in DOMLens              |
| ------------------------- | ----------------------------------- |
| JavaScript                | Main production language            |
| Chrome Manifest V3        | Extension platform                  |
| Shadow DOM                | Inspector UI encapsulation          |
| React 19                  | JSX verification tests only         |
| React DOM                 | JSX rendering verification          |
| esbuild                   | JSX transformation in test runner   |
| Tailwind CSS              | Custom utility-class mapping        |
| Node.js                   | Test runners and automation scripts |
| SQLite/PostgreSQL/MongoDB | Not used                            |
| FastAPI/Express           | Not used                            |
| Docker/AWS/Vercel         | Not used                            |
| GitHub Actions            | Not used                            |
| Jest/Mocha/Cypress        | Not used                            |

#### One-minute interview explanation

##### Version 2 — 1-minute answer

DOMLens is a browser-based developer tool that I built to simplify UI inspection and frontend component recreation.

It uses Chrome Extension Manifest V3 with native JavaScript. The background service worker manages extension events and tab operations, while content scripts interact with the webpage DOM.

The extension extracts information such as HTML structure, computed CSS, typography, colors, and element dimensions.

I used Shadow DOM to isolate the floating inspector interface from host-page styles and a sandboxed iframe to preview generated HTML and CSS.

For AI functionality, I integrated Gemini, Groq, OpenRouter, and OpenAI through direct REST APIs. I also implemented a common service layer with model fallbacks, streaming using SSE, and structured response validation.

Finally, I built a custom HTML-to-JSX transformation pipeline and a centralized state store to keep the preview and generated code synchronized.

**Code walkthrough route:** Load the extension unpacked, trace activation and message delivery, select a host element, show the inspector exclusion logic and selected-node state, generate a preview, then export JSX. Demonstrate cancellation and invalid model output. The saved notes describe custom Node assertion scripts and JSX verification; test counts are historical notes, not a current passing-test report.

<a id="project-uninest"></a>

<a id="phase-18-section-3"></a>

### UniNest AI — complete project defence

#### Resolve contradictory notes before making implementation claims

| Claim | Supplied accounts | Interview treatment and evidence needed |
| --- | --- | --- |
| Redis token blacklist | The study handbook and an early New Interview summary describe a hashed-token Redis check; the later UniNest analysis says no Redis blacklist | Unresolved across source versions. Inspect authentication/logout middleware, Redis client configuration and tests. Explain revocation theory in [Phase 13](#phase-13) without claiming this feature until verified. |
| Docker | Earlier notes describe a multi-stage Node 20 Alpine Dockerfile, TypeScript build, pruned dependencies and non-root runtime; later notes say Docker is not used | Verify whether a Dockerfile exists in the target commit and whether deployment actually builds/runs it. Repository configuration and deployed infrastructure are separate evidence. |
| Deployment and Actions | Notes describe Vercel frontend and EC2/Ubuntu/PM2 backend with manual SSH; some summaries discuss CI/CD generally, while later analysis explicitly says no GitHub Actions | Check workflow files and successful runs. Git-integrated Vercel deployment alone does not demonstrate a custom Actions pipeline. |
| Next.js version | Resume notes say 15; later analysis says 16.2.6 | Read the installed dependency/lockfile and specify the commit. |
| Gemini model | Resume notes say 1.5 Flash; later analysis says 2.0 Flash | Read configured model identifiers and actual request code. These names are historical notes, not current availability advice. |
| PostgreSQL and Neon | One description says PostgreSQL; another says Neon PostgreSQL | These can both be true: engine and hosting provider. Verify the actual environment. |
| Kubernetes, vector database, active Twilio SMS | Later analysis says absent | Keep these as possible extensions unless implementation evidence establishes otherwise. |

#### Problem and application architecture

**What is UniNest AI?**

UniNest AI is a Campus Recruitment Operating System designed to manage the campus placement process through one platform.

In a traditional campus placement process, different activities may be handled through separate tools:

- Students receive placement announcements through email or messaging groups.
- Companies share job descriptions and eligibility requirements.
- Universities verify student eligibility.
- Students submit resumes.
- Recruiters shortlist candidates.
- Interview schedules are communicated separately.
- Final selections and offers are tracked manually.

This creates problems such as scattered information, repeated manual work, communication gaps and difficulty tracking the entire recruitment process.

UniNest AI brings these activities into one platform.

![PrepCV PMS - AI-Powered Placement Management System](https://images.openai.com/static-rsc-4/xBr_E-WTLWRu-X4roMQbcekyrFBkXGYe_vLewq4__Xj4W44MSZoeqygaQyAvdYLhqB0a9tfnAbrdTUQ9cq91LK1t09donxmCoLNi2UR4ZCAupdL4hjM_u_HB5JVB4bm_G0Lf1OW4FRB_tLBSPwFeu-Benoewzcj-z0OD3ITEs7Y?purpose=inline)

[pms.prepcv.com](https://pms.prepcv.com/?utm_source=chatgpt.com)

**Main objective**

The main objective is to connect four major participants:

1. Student: Discovers placement opportunities, submits resumes and tracks recruitment progress.
2. Company: Creates recruitment drives, reviews candidates and manages recruitment.
3. University: Manages the campus placement process and oversees student and company activities.
4. Admin: Has administrative access to manage the platform.

The technical analysis identifies these four RBAC roles:

- `STUDENT`
- `COMPANY`
- `UNIVERSITY`
- `ADMIN`

##### Technology stack – complete explanation

Frontend

![Next.js Logo Vector Free Download | Logowik](https://images.openai.com/static-rsc-4/mUgR9EQlKOc0ZIpOnhYZhazJ_YVofBYxjwNAr2HRG48-5wFR7xu-bUB-hKVXhSf_lZgjCMNUuw8TQiIDYJEFKZScc0e7fU_GLJLrhPVR5FPYMjNMTFDySkF2UEyM8_bIHu6rKHeNhicN21gYi0dN-xuySfa7tZTocg14sJoQVMo?purpose=inline)

Next.js / React

User interface, routing, pages and components

![Download Typescript Logo Vector Free | Logowik](https://images.openai.com/static-rsc-4/HJNBrnycNcpLXeO0YAcs1SPrszeLnyggPzlkfF3_oiGM5QuZdU19IXdU7Rn-o-F7wRpZoVyRSV7a3ZycV4Fs5pR6Y4pSpHwfmkDqaHykEqKbGr9LDA20xWKticrlEaYFcdLuawxj1J_qtxcAQ_PHk8Dx3ixVF5I3vDEk3V8_kFM?purpose=inline)

TypeScript

Static typing and safer application code

![Tailwind CSS Logo PNG Vector (SVG) Free Download](https://images.openai.com/static-rsc-4/hCunqWZtSTQOp6kyRy6etYyXPd4hgXgCzyX8xJ4lU5Afpi5X5R1-IRiOZnp4l7GyJ7cfpvqnsgI1Enss4MD3W12uAfvVfaNzZix938uaP-BA39hy-D_Y-glDNRx_NI09r3_Uhr1FI5ooexE7ImJgRF7zHMNC14HvZapPIE6qTkI?purpose=inline)

Tailwind CSS

Utility-based styling and responsive UI

Backend

![Order in which task execute when we compte i/o operation, event loop, timers, microtasks and why in Nodejs? | by Himanshu Joshi | Medium](https://images.openai.com/static-rsc-4/3ZGTUp11PWBfUHIonXeo3ReQPu2wc9Rk02B_mv-v0080lppLxJxrAEzICP3DK25FK4A6jYWAozI_Jyqo-hjtg7KltI9jQ2i9Qix9w8XWz-W-HgpyWTGmB873A-9dY3NTgbFi-_7Tv8VJ0U5Z9PTqF-nWBLRQqzQVuOOxE-n2B9Y?purpose=inline)

Node.js

JavaScript runtime for backend execution

![Abhinav Joshi | Portfolio](https://images.openai.com/static-rsc-4/0CyNTA8Law8Kp3sFFHCf_QqVvpJPHcZQt1t3ou2Qp6ynTHB1qKsOkbIXvZizS3OnuvHhqVaHWD6AHlryIxKLsmQEIKH-3EpxtrE7URkcH49n5QiKOnjeWO0iPjLQx9CmLgmBGlxbo730sLWvgz8j1rS3ExbPwgdo_5WDC2HRBOI?purpose=inline)

Express.js

HTTP server, REST APIs and middleware

![Deno Deploy](https://images.openai.com/static-rsc-4/Hr7nDp4ev4YSm2QymeDHjcvR4WVO24V58SkBTM4vety9qV-7bSbLM0FnzHQYTiVPzNes9afSEkeet_77oxQbyFKInorCbCHKoNs5ONtCh8z5089juVfraM4ZIImktgPkoAEu6HYQ2CmEfeS_H53T4lrZeMA8VDVXCjV-fI8EbNA?purpose=inline)

Prisma ORM

Database access and relational queries

Database and AI

![Docker Hub Container Image Library | App Containerization](https://images.openai.com/static-rsc-4/Pole4xk5FkyhFJxxWDBh3yHjF1pQlxteoZyEQA0ykJQSPxLpLcdTrKWhkIQ2-SeCQp9ObINiyVMBFzoUkAM9P9RUAWW761nUuSEzxGOPsF9Keb0OX7HGw8IiQD84tSEoRfxnWrmYPSxGM1Bq9IBWZrT-EGb7Ta0uoZ1t6-qsVoY?purpose=inline)

PostgreSQL

Relational database

![Gemini – Google’s AI Assistant for Smart Conversations & Productivity – Daidu.ai](https://images.openai.com/static-rsc-4/ptJvxAnbpHSz9oKwhiZCWU9MTvmPl997rGrZd4wqTgvg18xJPt8X3ASwCANnmkTN4cvnMJqTW5csYg-Wx_SyU_pL6waVf_YLfxdwlsLklzd2H22udrktQ6oVGaeLOvjKRl8y4lJCZGtYV2I-4GwcwBjAGawfKX-wZYbv6TzRORU?purpose=inline)

Google Gemini

Resume scoring and other AI-assisted tasks

Deployment and supporting tools

![Mitch's Portfolio](https://images.openai.com/static-rsc-4/kR0GYbQjOEjpGF49dzRf0WXLFyFUhm17eJq28D5F49J19euydxs9_UAZ9_3ZI0sqgmURhdWeUab6YVe5U1OK8pxUBWRGcGQL0rmPD5Ema7mhMyGOV2xl2e3TZ_NhBspDZ81VXaID2dkQH-WcmgLqr6Mmqy-VDnlXVx17zxjk1RE?purpose=inline)

AWS EC2

Backend hosting on Ubuntu Linux

![Image Component with Next.js](https://images.openai.com/static-rsc-4/sTouMJAtkHUuDDGXRu0kZ8xLA6v7ttJKmK-cpDMTtWVBvMW6DrABI5Wx-K_eEuHs4379D2HJQEdP09gxok81gUXFY7F7-WiOrq5niH94Qvtwcx_pYvbxGKDvHZ0SZUKFcZy49bzNOc6XYMJN0ZylBwljho4b3KlTX9A-ZvyidNM?purpose=inline)

Vercel

Frontend hosting

![Cloudflare D1 vs Neon vs Supabase](https://images.openai.com/static-rsc-4/tlFs0r3FPzK22EYDgBLmp_22ciqjxiCOpgrq5Ig1DYvzAuYAP_JcQphWoYXx5KC_-j8N9f87UKezm0qDIpXJQ1JSLcjLaq0kP6SLyb-UYaOVewWY3tAppGbMW8sUihP-5WpVbweR7z0GsD8kji6m183a6oQk44zkTwwTaDvc8XU?purpose=inline)

Neon PostgreSQL

Hosted PostgreSQL database

The technical analysis also records Axios, React Context, Nodemailer, Multer, `pdf-parse`, bcryptjs, JWT, PM2, Postman and dotenv as project tools.

**What is the architecture?**

Architecture explains how different parts of an application are organised and communicate with each other.

UniNest is described as a modular monolith with a decoupled frontend and backend.

That means:

- The frontend is a separate Next.js application.
- The backend is a separate Express.js application.
- The backend is organised into modules and layers.
- The application is not built as independently deployable microservices.

**Three-tier layered backend**

The documented backend follows this structure:

1. Routes

Receive HTTP requests and connect URLs to controllers

2. Controllers

Handle request and response, call the relevant service

3. Services

Contain business rules and application logic

4. Repositories

Handle database access and queries

5. Prisma ORM

Translates application data operations into database queries

6. PostgreSQL

Stores persistent application data

The technical analysis explicitly identifies routes, controllers, services and repositories, including `driveRepository`, `offerRepository`, `studentRepository`, `companyRepository`, `atsService`, `driveService`, `offerService`, `studentService` and `authService`. 

**What does each layer do?**

A. Routes

Routes define API endpoints.

For example:

```javascript
router.get(
    "/drives",
    authMiddleware,
    driveController.getDrives
);
```

This route describes a GET endpoint for retrieving drives.

B. Controllers

Controllers handle the incoming request and outgoing response.

Example:

```javascript
const getDrives = async (req, res, next) => {
    try {
        const drives = await driveService.getDrives();

        res.status(200).json({
            success: true,
            data: drives
        });
    } catch (error) {
        next(error);
    }
};
```

C. Services

Services contain business logic.

For example, a drive service might:

- Check whether a drive exists.
- Validate eligibility rules.
- Apply application rules.
- Coordinate repository operations.

D. Repositories

Repositories communicate with the database.

Example:

```javascript
const findAll = () => {
    return prisma.drive.findMany();
};
```

This separates database operations from business logic.

**Why use layered architecture?**

Imagine all code is written in a single Express route:

```javascript
app.post("/apply", async (req, res) => {
    // Validate student
    // Check drive eligibility
    // Check deadline
    // Insert application
    // Update status
    // Return response
});
```

As the application grows, this becomes difficult to maintain.

With layered architecture:

- Routes handle URL mapping.
- Controllers handle HTTP communication.
- Services handle business rules.
- Repositories handle data access.

This improves separation of concerns, testability and maintainability.

#### End-to-end workflows for the four roles

**Student workflow**

![Placement Portal](https://images.openai.com/static-rsc-4/hdaFggP1yqj4O6s1nA46Ht2SI9tlOk6G8qC00bvdlxt9IPmcdLHg0VxqwcIivbah1iMwoY4ay4_jRIXMlZdNvMLPuOMrNkZwywnXjhA5a66_1efIaj-0Nts4iijU11Qgj9yn84Nl9iGe_qt0D4OIS1e_8W7fAuN3UQ2wmggOGMg?purpose=inline)

[placement-management.vercel.app](https://placement-management.vercel.app/?utm_source=chatgpt.com)

A student uses the system to:

1. Register or log in.
2. Verify their email using OTP.
3. Access the student dashboard.
4. Discover available placement drives.
5. Review eligibility and job details.
6. Submit a resume.
7. Complete the application process.
8. Track application or interview progress.
9. View offer-related information when available.

The exact sequence and available screens should be checked against the application itself, but the overall drive-discovery and recruitment workflow is established by the project description.

**Company workflow**


The company role is intended for recruiters who manage hiring.

Typical responsibilities in the documented platform include:

- Managing company access.
- Creating recruitment drives.
- Defining job requirements.
- Reviewing student applications.
- Using ATS scoring to assess resume relevance.
- Managing interview scheduling.
- Handling offer management.

**University workflow**

The university role is designed to oversee campus recruitment.

Typical responsibilities include:

- Managing placement activities.
- Monitoring drives.
- Coordinating students and companies.
- Supporting the campus recruitment process.

**Admin workflow**

The admin role has administrative privileges.

The technical analysis confirms the role but does not enumerate every admin operation. Avoid claiming specific operations such as deleting accounts, approving companies or managing every record unless you verify them in the application.

#### Registration, login, verification and protected actions

**JWT authentication flow**

User enters credentials

Backend verifies credentials

Backend creates and signs JWT

Client sends token with protected API request

Authentication middleware verifies token

Request continues if authorised

Example of creating a JWT:

```javascript
import jwt from "jsonwebtoken";

const token = jwt.sign(
    {
        userId: user.id,
        role: user.role
    },
    process.env.JWT_SECRET!,
    {
        expiresIn: "24h"
    }
);
```

The documented project uses `jsonwebtoken` and a 24-hour token expiration.

**OTP email verification**

OTP means One-Time Password.

The documented project includes email OTP verification and Nodemailer for SMTP-based OTP delivery. 

Simplified flow:

1. User enters registration details.
2. Backend generates an OTP.
3. Backend sends the OTP through email.
4. User enters the received OTP.
5. Backend validates it.
6. If valid, the relevant verification process succeeds.

Do not assume SMS OTP is active. Twilio appears as an installed package, but the technical analysis says it is unused in core routes.

**Authorization walkthrough:** Trace token verification into the attached identity, role checks and per-record ownership. Student, company, university and administrator permissions must be enforced in backend routes/services, not only by hiding frontend controls. Password hashing, JWT structure, CORS and RBAC definitions remain in [Phase 13](#phase-13). Any Redis revocation branch is subject to the discrepancy table above.

#### Resume upload, text extraction and ATS analysis

**What is an ATS?**

ATS stands for Applicant Tracking System.

Recruiters receive many resumes for a job opening. Manually reading and comparing every resume against the job requirements takes time.

An ATS helps organise and evaluate applicants.

For example, a company creates a job description:

Job: Junior Backend Developer

Required skills:

- Node.js
- Express.js
- PostgreSQL
- REST APIs
- JavaScript

A student uploads a resume containing:

- JavaScript
- Python
- React
- Node.js
- MySQL

The system needs to compare the resume with the job description.

An AI-assisted ATS can help identify:

- Relevant skills.
- Missing skills.
- Matching keywords.
- Overall suitability.
- A recruitment verdict.

The resume description confirms that UniNest's Gemini ATS engine returns a verdict, strengths, skill gaps and matched keywords, with a heuristic fallback. 

Chirag_Vasava(5).pdf

**How does resume processing work?**

The technical analysis identifies two important libraries:

- Multer: Processes file uploads.
- pdf-parse: Extracts text from PDF files.

It describes Multer using `memoryStorage`, which means uploaded file data is held in memory during processing rather than being automatically saved as a disk file. 

The conceptual workflow:

1. Student uploads resume PDF

2. Multer processes the upload

Multipart/form-data and in-memory buffer

3. pdf-parse extracts text

4. ATS service receives extracted text and job description

5. Gemini analyses the resume

6. Result is processed

Verdict, strengths, skill gaps and matched keywords

7. Result is presented to the application

This is the functional processing model. Exact request payloads, response schemas and database persistence points should be confirmed from the ATS service and controller source.

**How does Gemini ATS scoring work?**

The project analysis describes structured prompts for:

- ATS scoring.
- Verdict classification.
- Skill gap analysis.
- Offer letter email generation.

The resume specifically confirms a Gemini-powered ATS that returns verdict, strengths, skill gaps and matched keywords, with heuristic fallback. 

Chirag_Vasava(5).pdf

A simplified conceptual prompt could look like:

```text
You are an applicant evaluation assistant.

Compare the resume with the job description.

Return:
1. Matched skills
2. Missing skills
3. Relevant experience
4. Strengths
5. Overall suitability verdict

Resume:
[Extracted resume text]

Job Description:
[Job requirements]
```

The model processes the supplied context and generates an answer.

Important: This is an illustrative prompt, not the exact prompt used in UniNest.

**What is heuristic fallback?**

This is a particularly good interview topic.

A heuristic is a rule-based approach.

Suppose the AI provider is unavailable. The application can use a simpler method to compare keywords or skills.

Example:

```javascript
const requiredSkills = [
    "JavaScript",
    "Node.js",
    "Express",
    "PostgreSQL"
];

const resumeText =
    "I know JavaScript, Node.js and MySQL.";

const matchedSkills = requiredSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
);

const missingSkills = requiredSkills.filter(skill =>
    !resumeText.toLowerCase().includes(skill.toLowerCase())
);

console.log("Matched:", matchedSkills);
console.log("Missing:", missingSkills);
```

Output:

```text
Matched:
JavaScript
Node.js

Missing:
Express
PostgreSQL
```

This example demonstrates the basic idea only. It is not the exact UniNest fallback implementation.

Why have a fallback?

- AI services can become unavailable.
- API calls can fail.
- Rate limits may be reached.
- Network problems can interrupt requests.
- A simpler result can still be produced.

What is the limitation of heuristic matching?

It can miss semantic matches.

For example:

- "JS" and "JavaScript" may refer to the same skill.
- "Postgres" and "PostgreSQL" may refer to the same technology.
- A resume may describe a skill without using the exact keyword.

A rule-based keyword matcher is therefore less intelligent than contextual AI analysis.

**How does the Gemini REST API work?**

The project analysis describes direct REST integration using Axios and Google's Generative Language API.

General example:

```javascript
const response = await axios.post(
    GEMINI_API_URL,
    {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ]
    },
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
);
```

Conceptually:

1. Prepare the prompt.
2. Send an HTTP POST request.
3. Gemini processes the input.
4. The API returns generated content.
5. Backend code extracts the response.
6. The result is returned to the frontend.

In production, the API key should be stored securely on the backend, not exposed in browser code.

**Is ATS scoring completely objective?**

No.

An AI-generated suitability assessment is not a guaranteed measure of a candidate's actual ability.

Potential issues:

- Resume wording affects matching.
- Important skills may be expressed differently.
- AI may misunderstand context.
- Generated verdicts may be inconsistent.
- A candidate's practical ability cannot be established from a resume alone.

A responsible ATS should support recruiter decisions, not replace human judgement.

Strong interview answer:

"The ATS is an AI-assisted evaluation feature, not a final hiring decision engine. It compares resume information with job requirements and provides a verdict, matched keywords, strengths and skill gaps. The recruiter should still review the candidate rather than blindly trusting the generated score."

**Upload reference:** Multipart handling, Multer, PDF text extraction and parser limits are covered in [Phase 11](#phase-11). For this workflow, validate file type/size, handle empty or scanned PDFs, control temporary-file lifetime and treat model output as untrusted. Scores are heuristic feedback, not a guarantee of employer screening or selection.

#### Database design and consistency

**Why PostgreSQL?**

UniNest has multiple related entities:

- Students.
- Companies.
- Universities.
- Recruitment drives.
- Applications.
- Interviews.
- Offers.

These entities need relationships.

A relational database is suitable because the data has structured relationships and consistency requirements.

The earlier study notes list User, Student, Company, University, Resume, Drive, DriveApplication, InterviewSchedule, Offer, ApplicationTimeline and OfferAudit models. They describe unique email, a unique student/drive pair, foreign keys, indexes and enumerated workflow states. Trace the actual Prisma schema and migration before quoting exact names. A database unique constraint protects concurrent duplicate applications; a prior existence check alone does not. The notes also describe a transaction for related user/student creation. SQL, transactions, indexes and Prisma query syntax remain in [Phase 8](#phase-8).

#### API routes and frontend integration

**Example API structure**

The project analysis records REST APIs under `/api/v1/*`. 

Illustrative endpoints:

```http
GET    /api/v1/drives
POST   /api/v1/drives
GET    /api/v1/drives/:id
PATCH  /api/v1/drives/:id
POST   /api/v1/applications
GET    /api/v1/applications
POST   /api/v1/ats/analyze
```

These are examples of possible API design, not verified exact UniNest route names.

**AuthContext**

The technical analysis identifies a custom React `AuthContext`.

Conceptually:

```text
AuthContext
    |
    ├── Current user
    ├── User role
    ├── Authentication state
    └── Authentication-related methods
```

This can help components access shared authentication state.

Important distinction: React Context manages frontend state. It does not replace backend authentication or authorisation.

Trace an Axios request through routes → middleware → controller → service → repository/Prisma and back to the UI. Review [Phase 10](#phase-10) for Next.js components and forms and [Phase 11](#phase-11) for REST, HTTP errors and interceptors.

#### Interview scheduling and offer lifecycle

**Interview scheduling**

A recruitment process needs to coordinate:

- Candidate.
- Company.
- Interview stage.
- Interview date and time.
- Interview status.

A conceptual workflow:

```text
Candidate shortlisted
       |
       v
Interview scheduled
       |
       v
Candidate notified
       |
       v
Interview conducted
       |
       v
Result updated
```

**Offer management**

After a candidate is selected, offer-related information can be managed.

The technical analysis also mentions an AI-assisted offer letter email generation prompt and Nodemailer SMTP integration. 

Do not claim that the platform digitally signs offer letters or integrates with external e-signature providers; those capabilities are not established by the source.

**Why is workflow management important?**

A placement platform needs to maintain the correct state of each candidate.

For example:

```text
APPLIED
   |
   v
SHORTLISTED
   |
   v
INTERVIEW
   |
   v
SELECTED
   |
   v
OFFERED
```

This is a conceptual recruitment lifecycle. The exact status values used in the project need verification from the actual schema and code.

#### Validation, errors and documented limits

The saved analysis describes custom payload validation, regex-based sanitization, AppError and a central errorHandler. Trace how a rejected upload or invalid application becomes a safe HTTP response; check that internal error details and secrets are not exposed. Middleware and request-validation theory are in [Phase 11](#phase-11).

**Security limitations you must know**

The technical analysis explicitly records that the project does not have:

- Rate limiting.
- Helmet.
- CSRF protection.
- OAuth.

This is not something to hide in an interview. Explain it honestly and describe how you would improve it.

For example:

"I implemented JWT authentication, password hashing, email OTP verification and role-based access control. I would strengthen the production security further by introducing rate limiting, security headers through Helmet, and appropriate CSRF protection depending on the authentication and cookie strategy."

#### Reported deployment flow

##### Deployment and hosting architecture

The technical analysis describes a split deployment:

- Frontend: Vercel.
- Backend: AWS EC2 running Ubuntu Linux.
- Backend process manager: PM2.
- Database: Neon PostgreSQL.

![Medium](https://images.openai.com/static-rsc-4/cenFPEfDGpRWyoBMXn7YvHJ8yBfrXapUCAcr1Exwh2IEalOh6Faob_i0lHSWNqr40N1YNc-OBEK3lK5mt1t2rXouFVBcRe1mzfeEx7-0nSbPtWZHDNJfz7CezVoLa5VKeVU76bxMgBb2mPOsD-dyOOZBuQZbN1vUtpp2aRvEkiU?purpose=inline)

[blog.stackademic.com](https://blog.stackademic.com/scaling-aws-rds-postgresql-with-a-pgbouncer-connection-pooler-proxy-on-ec2-4bb8f53d5e8b?utm_source=chatgpt.com)

**How do frontend, backend and database communicate?**

```text
User's Browser
      |
      v
Next.js Frontend (Vercel)
      |
      | HTTPS / REST API
      v
Express Backend (AWS EC2)
      |
      | Prisma ORM
      v
PostgreSQL (Neon)
```

For AI operations:

```text
Express Backend
      |
      v
Google Gemini API
      |
      v
Generated AI Result
      |
      v
Express Backend
      |
      v
Next.js Frontend
```

Read this flow subject to the discrepancy table. Use [Phase 16](#phase-16) for EC2, PM2, Vercel, Linux and deployment theory. Confirm environment variables, migrations, process health, logs and rollback in the actual environment.

#### Actual testing evidence and development challenges

**Interview question: How did you test UniNest?**

"I used TypeScript static type checking and manually verified API endpoints and workflows using Postman and cURL. The technical implementation did not include a documented automated unit, integration or end-to-end test suite, so adding automated tests would be an improvement."

That is a better answer than claiming tests that were not implemented.

##### Challenges and technical decisions

An interviewer will often ask:

"What were the main technical challenges you faced while building this project?"

Here are strong areas to discuss, with answers grounded in the documented architecture and features. Only describe something as a challenge you personally encountered if it actually happened.

**Challenge 1: Managing multiple user roles**

Problem: Students, companies, universities and administrators require different permissions.

Technical approach: JWT authentication and role-based access control.

Why it helps: Each protected backend operation can verify the user's identity and role.

Interview answer:

"One important architectural consideration was handling multiple types of users. I used JWT-based authentication and role-based access control so that protected operations could be restricted according to the user's role."

**Challenge 2: Processing uploaded resumes**

Problem: Resume PDFs need to be converted into readable text before AI analysis.

Technical approach: Multer for upload handling and `pdf-parse` for extracting PDF text.

Limitation: Scanned PDFs may not contain extractable text, and in-memory processing requires upload-size and memory controls.

**Challenge 3: Integrating AI into a backend**

Problem: The application needs to send resume and job-description context to an external AI provider and process its response.

Technical approach: Direct Gemini REST API integration using Axios and structured prompts.

Additional consideration: API failures and availability.

Approach: The resume describes a heuristic fallback for ATS scoring.

**Challenge 4: Keeping backend code maintainable**

Problem: Putting all business logic in Express route handlers makes the code difficult to maintain.

Technical approach: Routes, controllers, services and repositories.

Benefit: Each layer has a separate responsibility.

**Challenge 5: Deploying frontend and backend separately**

Problem: The Next.js frontend and Express backend run in different hosting environments.

Technical approach: Vercel for frontend hosting and AWS EC2 for the backend.

Additional considerations: CORS, environment variables, API connectivity, server process management and database connection configuration.

#### Trade-offs and next improvements

##### Architecture decisions and trade-offs

These questions demonstrate whether you understand the reasoning behind your technology choices.

| Decision             | Reason                                  | Trade-off                                                      |
| -------------------- | --------------------------------------- | -------------------------------------------------------------- |
| PostgreSQL           | Structured relational recruitment data  | Requires schema and relationship management                    |
| Prisma ORM           | Type-safe database access               | Developers still need SQL and database knowledge               |
| Express.js           | Flexible API development                | More architectural decisions are left to the developer         |
| Layered architecture | Separation of responsibilities          | Additional files and layers                                    |
| JWT                  | Stateless token-based authentication    | Token expiration, revocation and storage need careful handling |
| Gemini API           | AI-assisted resume analysis             | External API availability, cost and response quality           |
| PDF text extraction  | Converts resumes into text for analysis | Scanned PDFs may need OCR                                      |
| Vercel + EC2         | Separate frontend and backend hosting   | Requires deployment and cross-origin configuration             |

**Is UniNest a microservices architecture?**

No. The technical analysis describes it as a modular monolith with a decoupled Next.js frontend and Express backend.

Understand the difference:

Monolithic backend:

```text
One Backend Application
       |
       ├── Authentication
       ├── Student
       ├── Company
       ├── Drives
       ├── ATS
       └── Offers
```

Microservices:

```text
API Gateway
    |
    ├── Authentication Service
    ├── Student Service
    ├── Recruitment Service
    ├── ATS Service
    └── Offer Service
```

In microservices, services are independently deployable units with their own runtime boundaries and communication mechanisms.

A modular monolith can still be well structured without being microservices.

Interview answer:

"UniNest uses a modular monolithic backend rather than microservices. Its functionality is separated into modules and architectural layers, but the backend is deployed as one Express application. This keeps development and deployment simpler while maintaining separation of concerns."

**Why not use MongoDB?**

"Because the platform has structured entities and relationships. For example, students apply to drives, companies create drives, and applications connect students with recruitment opportunities. PostgreSQL provides relational constraints and transaction support that suit these relationships."

**Why not use React alone instead of Next.js?**

"Next.js provides routing and additional rendering and application features on top of React. Its App Router and file-based routing helped organise the different areas of the platform."

**Why not use an AI SDK?**

"The documented implementation uses direct REST requests through Axios. This gives direct control over the HTTP request, prompt payload and response processing without introducing an additional AI SDK abstraction."

**Why not use embeddings and a vector database?**

"The documented ATS implementation uses extracted resume text and job-description context matching with Gemini. It does not use embeddings or a vector database. Those could be explored in a future version if semantic retrieval across a larger set of candidate profiles becomes necessary."

##### What should be improved in UniNest?

This is a particularly important interview topic. A good developer understands not only what was built but also what remains to be improved.

| Area              | Current documented position                        | Possible improvement                                                       |
| ----------------- | -------------------------------------------------- | -------------------------------------------------------------------------- |
| Automated testing | Manual Postman/cURL verification and type checking | Add unit, integration and E2E tests                                        |
| API security      | JWT, bcrypt, OTP and RBAC                          | Add rate limiting and security headers                                     |
| CSRF protection   | Not documented                                     | Evaluate CSRF controls based on cookie/authentication design               |
| Resume extraction | PDF text extraction                                | Add OCR for scanned PDFs                                                   |
| ATS               | Gemini plus heuristic fallback                     | Add evaluation datasets and recruiter feedback                             |
| AI reliability    | External model dependency                          | Improve retries, timeout handling and response validation                  |
| Observability     | Console logging                                    | Add structured logging and error monitoring                                |
| Deployment        | Manual backend SSH deployment                      | Introduce automated deployment pipeline                                    |
| Scalability       | Modular monolith                                   | Optimise queries, connection pooling and horizontal deployment as required |
| File processing   | In-memory upload handling                          | Add strict file validation and scalable file storage                       |

**A good answer to "What would you improve if you had more time?"**

"I would first strengthen the automated testing strategy by introducing unit and integration tests for the service and repository layers, along with end-to-end tests for important placement workflows. I would also improve API security with rate limiting and security headers, improve resume processing for scanned PDFs through OCR, and introduce automated backend deployment. For the AI ATS, I would evaluate its output against a labelled dataset to measure consistency and reduce incorrect recommendations."

#### Complete interview explanation

##### Complete project explanation – interview-ready answer

This is the version you should practise speaking aloud.

90-second project introduction

Interview practice

"One of my major projects is UniNest AI, a campus recruitment operating system designed to simplify the university placement process.

It brings students, companies, universities and administrators together on a single platform. The system handles placement drive discovery, resume verification, interview scheduling, AI-powered ATS scoring and offer management.

I developed the frontend using Next.js and TypeScript, and the backend using Node.js and Express.js. For database management, I used PostgreSQL with Prisma ORM.

One of the key features is the AI-powered ATS. When a student uploads a resume, the backend processes the PDF using Multer and pdf-parse, extracts its text and sends the relevant information along with the job description to Google's Gemini API. The system provides a verdict, matched keywords, strengths and skill gaps. It also includes a heuristic fallback for situations where AI-based analysis is unavailable.

Architecturally, I used a layered backend structure consisting of routes, controllers, services and repositories. For security, the platform uses JWT authentication, bcrypt password hashing, email OTP verification and role-based access control.

For deployment, the frontend is hosted on Vercel, the Express backend runs on AWS EC2 using PM2, and the PostgreSQL database is hosted on Neon.

Overall, this project helped me understand full-stack development, relational database design, API development, authentication, AI integration and cloud deployment."

**Code walkthrough route:** Follow one student from registration and resume upload through a drive application, company review, scheduled interview and offer. Show the stored state transition and permission check at each step. Then demonstrate duplicate-application handling, invalid uploads and AI failure/fallback. Distinguish implemented features from the proposed improvements above.

<a id="phase-18-section-4"></a>

### Ownership and evidence checklist

**Q18.11. What if an interviewer asks, "Did you build this entire project yourself?"**

A strong answer should distinguish:

1. What you personally implemented.
2. What you modified from existing or forked code.
3. What teammates implemented.
4. What you built with AI-assisted development tools.
5. What you understand conceptually but have not personally implemented.

Example answer structure:

> I worked on this project using an existing codebase as the starting point. My contribution was focused on [specific features]. I also worked with [specific technologies] to implement or modify those parts. I don't want to claim ownership of parts I didn't implement, but I can explain the architecture and the specific changes I made.

Replace the bracketed details with actual evidence from your commits and code.

**Q18.12. What if you don't remember how a particular function works?**

Don't bluff.

A better answer:

> I don't remember the exact implementation details of that function at the moment. I understand its responsibility in the overall workflow, and I would verify the source code before explaining its exact behavior. I don't want to give you an inaccurate explanation.

This is better than inventing implementation details under pressure.

For each project prepare: the commit/version, the main code path, your own contribution, one design trade-off, one failure investigation, the actual test command/result, deployment evidence and one known limitation. Describe team work accurately. Do not turn the supplied notes into claims of a new repository audit.

---

<a id="phase-19"></a>

## Phase 19 — Resume, Learning Strategy and HR Preparation

**Objective:** Connect each claimed skill to demonstrable work and prepare behavioral answers.

**Sections:** [Education, training and design background](#phase-19-section-1) · [Self-introduction — 60 to 90 seconds](#phase-19-section-2) · [Resume follow-ups and hackathon experience](#phase-19-section-3) · [Understand the internship before answering HR questions](#phase-19-section-4) · [Resume defence](#phase-19-section-5) · [Defend the claims in your application](#phase-19-section-6) · [HR and behavioral questions](#phase-19-section-7) · [Difficult HR questions](#phase-19-section-8) · [Availability, commitment and professional conduct](#phase-19-section-9) · [Questions you should ask the interviewer](#phase-19-section-10) · [Resume and application audit checklist](#phase-19-section-11) · [Final readiness tracker](#phase-19-section-12) · [Learning Unfamiliar Technologies](#phase-19-section-13)

<a id="phase-19-section-1"></a>

### Education, training and design background

**Your education and learning journey**

| Period         | What you did                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------- |
| 2021–2024      | Diploma in Information Technology, Parul University                                             |
| During diploma | Learned HTML, CSS, JavaScript, PHP, MySQL and XAMPP through YouTube                             |
| 2023           | Completed Internshala UI/UX Design with AI training                                             |
| UI/UX training | Figma, wireframing, prototyping, design systems, written examination and practical project      |
| 2024–2027      | B.E. Computer Science and Engineering, MSU Vadodara                                             |
| Current focus  | Software development, backend engineering, testing automation, databases and cloud technologies |

Your decision to choose training instead of an internship is perfectly explainable.

You weren't simply avoiding an internship. You wanted structured learning, practical exposure, assessments and a project that would strengthen your existing web-development fundamentals.

**How to explain why you don't have internship experience**

This is particularly important because one of the four interview experiences explicitly mentions questions about internships.

Question: Why haven't you completed an internship?

Interview-ready answer

During my diploma at Parul University, we had an opportunity to choose between an internship and industry-oriented training offered through their collaboration with Internshala.

At that stage, I had already started learning web development through YouTube, including HTML, CSS, JavaScript, PHP and MySQL.

I wanted to strengthen my foundation further, so I chose the UI/UX Design with AI training because it offered structured learning, practical exercises, written and practical examinations, and a final project.

I also wanted to understand the design side of web development, particularly Figma, wireframing, prototyping and converting designs into HTML and CSS.

I successfully completed the training and its assessments. Since then, I have focused on building technical projects to gain practical development experience.

I haven't completed a formal internship yet, but I have been continuously developing my technical skills through independent projects and hands-on implementation.

Remember: Don't apologize for not having an internship. Explain your decision, what you learned and how you developed practical experience afterward.

##### Your UI/UX training and final project

UI/UX Design with AI – Internshala

Completed · 2023

Six-week training

- Figma
- Wireframing and prototyping
- Design systems
- UI/UX principles
- Converting designs into web interfaces

Your uploaded final-project problem statement required redesigning the iOS version of Instagram from scratch.

It specified 16 screens, including:

- Signup and sign-in screens.
- Empty and completed profile information.
- Feed with stories, posts and navigation.
- Profile and camera screens.
- Onboarding and Explore.
- Messages and private chat.
- Settings.
- Analytics with five different charts.

The brief also required maintaining Instagram's brand colour scheme while introducing creative improvements. 

Final Project Problem Statement .pdf

**How you should explain this project**

Question: Tell me about your UI/UX training project.

I completed a UI/UX Design with AI training program through Internshala during my diploma.

For the final practical project, I was assigned to redesign the iOS version of Instagram.

The objective was to design multiple application screens using Figma while maintaining the original brand identity and improving the interface.

I worked with concepts such as wireframing, interface layouts, typography, colour selection, reusable design elements and prototyping.

The training also introduced me to Figma plugins that could help convert designs into basic HTML and CSS, which connected the design process with my existing web-development knowledge.

The training included written and practical examinations, and I completed the final project as part of the certification process.

One important distinction: I have the official problem statement, but not your actual Figma design or exported implementation. We'll avoid inventing design decisions you haven't confirmed.


<a id="phase-19-section-2"></a>

### Self-introduction — 60 to 90 seconds

##### Your self-introduction – prepared version

Here is a suggested introduction based on your resume and background.

Self-introduction – 60 to 90 seconds

Recommended version

"Good morning, and thank you for giving me this opportunity.

My name is Chirag Vasava. I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at Maharaja Sayajirao University of Baroda. Before that, I completed my Diploma in Information Technology from Parul University.

I am interested in full-stack development and building practical software applications. My technical skills include JavaScript, TypeScript, Python and Java, along with technologies such as React.js, Next.js, Node.js, Express.js, FastAPI and PostgreSQL.

I have worked on projects involving different areas of software development. For example, TestForge AI is a test automation platform, DOMLens is a browser extension for inspecting and generating UI code, and UniNest AI supports campus recruitment workflows. These projects helped me understand frontend and backend development, database management, API integration and application deployment.

I have also participated in hackathons, including Hack-A-Throne 2025, where I worked as a team leader, and Odoo × GCET Hackathon 2026, where our project RentFlow advanced to the offline final round.

I am now looking for an opportunity where I can apply my technical knowledge, work with experienced developers, learn industry practices and contribute to real-world software development.

Thank you."


<a id="phase-19-section-3"></a>

### Resume follow-ups and hackathon experience

**Question 1: Walk me through your resume.**

What the interviewer wants: A structured overview of your education, skills, projects and achievements.

Suggested answer:

"I started my technical education with a Diploma in Information Technology from Parul University. I am currently pursuing B.E. in Computer Science and Engineering at MSU Baroda.

My technical interests are full-stack development and AI-integrated applications. I have worked with JavaScript, TypeScript, Python, React, Next.js, Node.js, Express and databases such as PostgreSQL and MongoDB.

I have developed projects such as TestForge AI, DayFlow and UniNest AI, where I worked on different areas like test automation, HR management and campus recruitment.

I have also participated in hackathons, including Hack-A-Throne 2025 and Odoo × GCET Hackathon 2026. These experiences helped me improve my practical development, teamwork and problem-solving skills.

I am now looking forward to applying these skills in a professional software development environment."

Difference between this and Tell me about yourself:

- Tell me about yourself: Your overall introduction.
- Walk me through your resume: A chronological or structured explanation of the resume.

You can use similar information, but the second answer should follow the actual resume sections.

**Question 2: What are your strongest technical skills?**

Suggested answer:

"My strongest area is full-stack web development. I am comfortable working with JavaScript and TypeScript, React and Next.js on the frontend, and Node.js and Express.js on the backend. I also have experience working with relational and NoSQL databases, REST APIs and integrating AI services through APIs."

Why not say you are an expert in everything?

Because the interviewer can immediately test any technology you claim to know.

A safer approach is to describe your strongest areas honestly and explain where you have practical project experience.

**Question 3: Which programming language are you most comfortable with?**

This answer must reflect your real coding confidence.

A suitable structure:

"I am comfortable with [your strongest language]. I have used it for problem-solving and practical development. I understand its basic syntax, data structures, functions, OOP concepts and error handling. I have also used it in projects where I needed to implement application logic."

Do not claim equal expertise in Java, Python, JavaScript and TypeScript unless you can solve problems in all of them confidently.

**Question 4: Why do you have so many technologies in your resume?**

Suggested answer:

"My projects cover different areas of software development, so I learned technologies according to the requirements of each project. For example, I used Next.js and TypeScript in full-stack applications, FastAPI and Python in TestForge AI, and PostgreSQL with Prisma in UniNest AI. I try to understand why a technology is used and how it fits into the overall architecture instead of learning tools only by name."

**Question 5: Which project are you most confident discussing?**

Suggested answer:

"I can discuss TestForge AI confidently because it combines several areas I am interested in, including Python AST analysis, automated testing, AI integration and CI/CD. It helped me understand how a development tool can analyse source code and assist with test generation and quality checks."

You can choose UniNest AI instead if you can explain its implementation more confidently.

**Question 6: What makes you different from other candidates?**

Suggested answer:

"I focus on learning through practical implementation. Instead of limiting myself to theoretical concepts, I try to build complete applications and understand how their frontend, backend, database and deployment work together. I have also participated in hackathons, which gave me experience working with deadlines, collaborating with teammates and delivering functional solutions."

##### Explaining your hackathon achievements

Your resume lists two achievements.

**Hack-A-Throne 2025**

- MSU Baroda.
- Team leader.
- Built an AI-powered Event Management Portal.
- 32-hour hackathon.
- AI-based vendor recommendations.
- Image-based product search.
- Multi-role dashboards.

**Odoo × GCET Hackathon 2026**

- Built RentFlow, an ERP-style rental platform.
- Advanced from virtual screening to the offline final round.
- Multi-step checkout involving COD, UPI, Card and Razorpay.
- Quotation management, order lifecycle and PDF invoice generation.

Chirag_Vasava(10).pdf

**Question 11: Tell me about your hackathon experience.**

Suggested answer:

"I participated in Hack-A-Throne 2025 at MSU Baroda as a team leader. We developed an AI-powered Event Management Portal within a 32-hour hackathon. The project included features such as AI-based vendor recommendations, image-based product search and multi-role dashboards.

I also participated in Odoo × GCET Hackathon 2026, where our team developed RentFlow, an ERP-style rental platform. We advanced from virtual screening to the offline final round. These experiences helped me understand how to collaborate, prioritise features and develop working solutions under time constraints."

**Question 12: What did you learn as a team leader?**

Suggested answer:

"I learned that leadership is not only about assigning tasks. It also involves understanding team members' strengths, communicating clearly, resolving blockers and ensuring that everyone is working toward the same goal. During a hackathon, time is limited, so prioritising essential features and maintaining coordination are especially important."

**Question 13: What if your team disagreed about a technical decision?**

Suggested answer:

"I would first understand each person's reasoning and compare the available options based on requirements, complexity and time constraints. If we still disagree, I would suggest a practical solution based on the project's priorities and discuss it with the team before proceeding."

**Question 14: Why do you want to work as a software developer?**

Suggested answer:

"I enjoy solving problems through programming and building applications that people can actually use. Software development allows me to combine logical thinking, creativity and continuous learning. I want to improve my engineering skills by working on real-world applications and learning from experienced developers."

**Question 15: Where do you see yourself in five years?**

Suggested answer:

"In five years, I want to become a capable software engineer who can independently design, develop and maintain reliable applications. I also want to improve my understanding of system design, software architecture and cloud technologies, while gradually taking responsibility for larger technical tasks."

**Profile note:** Education dates, CGPA, hackathon outcomes and training history below are retained from your supplied notes. Update them to match your current resume. Company-specific Launchpad material is an optional historical application example; confirm the current role and terms before using it.




<a id="phase-19-section-4"></a>

### Understand the internship before answering HR questions

#### 1. What is Launchpad 2026?

The program information in your preparation documents describes:

| Item                       | Program information                                            |
| -------------------------- | -------------------------------------------------------------- |
| Program                    | Launchpad 2026                                                 |
| Companies                  | Taurus Technologies and Mocha Technologies                     |
| Location                   | On-site, Vadodara                                              |
| Duration                   | Approximately one semester / four months                       |
| Stipend                    | ₹20,000 per month                                              |
| Office hours               | 12:00 PM–8:30 PM                                               |
| Mentorship                 | Dedicated mentor or buddy                                      |
| Feedback                   | Regular one-to-one meetings and pull-request reviews           |
| Work                       | Web pages, features, dashboards, APIs, security and automation |
| Domain exposure            | Fintech and insurance workflows                                |
| Published interview window | November 2–4, 2026                                             |

These are details reported by the uploaded program flyer in your preparation material. They do not establish the actual interview sequence or guarantee any particular assessment. 

#### 2. Understand the two companies

![Taurus | P&C Insurance Software Solutions](https://images.openai.com/static-rsc-4/U1KINYzJ4N7o7lA_732mA3pucYP0t3pzhXaC_pizGRUV_6f8HiNTHLTW3Gnw_yxZ9HYw_N7JEHLUoCGo8nRsm-traeJWz5TzAHzvZeNGz-8cpJiukEFnfAE1i3O1BjNqX8sgESzqtrY50FWWURgdzumayhg6npIXxXl3ENQEw4Y?purpose=inline)

**Taurus Technologies**

The research describes its insurance software around:

- Underwriting.
- Claims.
- Billing and accounting.
- Policy servicing.
- Insurance integrations.

Company research: 
[Official website](https://www.thinktaurus.com?utm_source=chatgpt.com)

![Mocha: AI-Powered No‑Code App Builder for Entrepreneurs](https://images.openai.com/static-rsc-4/bO_yokbREKPb7fggRF2j5gE36OOytA-1KcY5qrsAm2vmUA4Si0RXdXM0hg9oktLIsZ1d5Tv4Yzu7c5kah9oR5Qge_J4wk1wNUmzk11DnIvps5TQseLsQWIlUycitfF_r1O1232QWURbUel1RDPTPV5fXWiR3JrG7AE-dFn4WeOc?purpose=inline)

**Mocha Technologies**

The research describes products around:

- Accounting and invoicing.
- Rental and property management.
- Subscription billing.
- E-signatures and workflow automation.
- Portfolio management.
- HRMS and CRM.

Company research: ![Official website](https://www.mochatechnologies.com?utm_source=chatgpt.com)

**What this means for your interview:** connect your full-stack projects to real business workflows. Explain data integrity, access permissions, payment correctness, document processing, auditability and reliability.

Do not confuse Mocha Technologies with iMocha or Interview Mocha. Your research explicitly warns about this name confusion. 

Interview__Research.md


<a id="phase-19-section-5"></a>

### Resume defence

#### 3. Your submitted profile: what you need to defend

Your preparation documents identify your profile as:

- B.E. Computer Science and Engineering student at Maharaja Sayajirao University of Baroda.
- Diploma in Information Technology from Parul University.
- Current CGPA reported in the application: 6.53.
- Diploma CGPA reported: 7.90.
- Programming languages listed: JavaScript, TypeScript, Python, Java and SQL.
- Overall coding proficiency selected: Intermediate.

Your submitted application also identifies strengths in full-stack development, rapid technical learning, problem-solving and ownership. 

**Source limitation:** I can read the profile and application information in the preparation documents, but I do not have readable access to the exact submitted resume PDF or every original form response here. I will not pretend to have audited their full contents or invent missing dates, achievements or descriptions.

#### 4. How to defend each technology on your resume

Use four experience categories:

| Category                | What it means                                   | How to describe it                                                                   |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| Hands-on implementation | You personally wrote and tested the code        | "I implemented this feature..."                                                      |
| Used with assistance    | You used documentation, AI or guidance          | "I implemented it with assistance and verified the behavior..."                      |
| Team experience         | Your team used it, but you didn't own all of it | "Our team used it; my contribution was..."                                           |
| Theoretical knowledge   | You understand it but haven't implemented it    | "I understand the fundamentals, but haven't used it in a production implementation." |

##### Resume technology defence matrix

| Technology     | Project connection      | Must be able to explain                              |
| -------------- | ----------------------- | ---------------------------------------------------- |
| JavaScript     | DOMLens, UniNest        | Closures, promises, event loop, async/await          |
| TypeScript     | UniNest, frontend work  | Types, interfaces, generics, compile-time checks     |
| Python         | TestForge AI            | Functions, classes, exceptions, AST                  |
| React          | Frontend projects       | Components, props, state, effects                    |
| Next.js        | UniNest, TestForge      | Routing, rendering, API integration                  |
| Node.js        | UniNest                 | Event loop, asynchronous I/O                         |
| Express        | UniNest                 | Middleware, routes, controllers                      |
| FastAPI        | TestForge               | Routers, Pydantic, dependencies                      |
| PostgreSQL     | UniNest                 | Relationships, joins, constraints, transactions      |
| Prisma         | UniNest                 | Schema, migrations, queries                          |
| Redis          | UniNest                 | Data structures, TTL, blacklist lookup               |
| PyTest         | TestForge               | Fixtures, assertions, parametrization                |
| Playwright     | TestForge               | Browser automation and locators                      |
| Docker         | Project deployment work | Dockerfile, image, container, ports                  |
| GitHub Actions | TestForge               | Workflow triggers, jobs, steps, artifacts            |
| AWS            | GramSaarthi AI          | Actual services used and deployment responsibilities |

**Interview rule:** Never allow a technology name to stand alone. Always attach it to a real feature or code path you can explain.

<a id="phase-19-section-6"></a>

### Defend the claims in your application

Your application selected several broad expertise areas. An experienced interviewer may ask follow-up questions about each.

#### 5. Claim: Full-stack development

**Question: Explain a complete request from frontend to database and back.**

**Model answer:**

In a full-stack application, the frontend collects user input and sends an HTTP request to the backend.

The backend receives the request through a route. Middleware can perform authentication, authorization and validation.

The controller coordinates the request, while the service layer handles the business logic.

The service interacts with the database layer to read or modify data.

The backend then returns an HTTP response, which the frontend processes and uses to update the interface.

For example, in a campus recruitment platform, a student submits an application for a placement drive. The frontend sends the application details to an Express API. The backend verifies the student and drive, checks the application rules, writes the record to PostgreSQL through Prisma and returns the result.

**Likely follow-up questions:**

- Where should business logic live?
- Why should the frontend not directly access the database?
- How do you handle validation errors?
- What happens if the database is unavailable?
- How do you prevent duplicate submissions?

#### 6. Claim: Microservices

**Question: Have you implemented microservices?**

This is a particularly important question because the earlier UniNest audit identifies its backend as a modular monolith.

**Recommended answer:**

> My UniNest project uses a modular backend architecture with separate routes, controllers, services and repositories. These modules represent different business responsibilities, but they are not independently deployed microservices. I understand microservice concepts such as independent deployment, service boundaries, inter-service communication and failure isolation. However, I would accurately describe my implementation as a modular monolith.

**What makes an architecture microservices-based?**

- Services have clearly defined responsibilities.
- They can be deployed independently.
- They communicate through defined interfaces.
- Failures can be isolated.
- Their data ownership and consistency are deliberately managed.

A separate frontend and backend deployment does not automatically make an application microservices-based.

#### 7. Claim: CI/CD

**Question: Explain the CI/CD pipeline you implemented.**

**Recommended answer:**

> In TestForge AI, I worked with a GitHub Actions workflow that runs on pushes and pull requests targeting the main branch. It installs the required Python dependencies, runs PyTest, generates coverage, executes the change-risk scanner and uploads reports as workflow artifacts. It can also publish pull-request feedback.

> I distinguish this from continuous deployment. The workflow provides continuous integration and automated quality checks; I would only claim automated deployment if I could demonstrate the deployment workflow itself.

**Follow-up:** What happens when a test fails?

The job reports a failure, allowing the pull request or commit to be investigated before the change is accepted. Artifacts and logs help identify the cause.

#### 8. Claim: Docker and cloud

**Question: Have you deployed applications using Docker and AWS?**

**Recommended answer structure:**

> I have worked with Docker and cloud deployment concepts through my project work. In GramSaarthi AI, I worked with Docker and AWS-related infrastructure. I can explain the deployment architecture and the services I personally configured. I also distinguish between infrastructure I operated directly and concepts I have studied.

When discussing UniNest, distinguish the existence of a Dockerfile from confirmed use of Docker in the actual deployment.

#### 9. Claim: Production codebases and pull requests

**Question: Have you worked on production codebases and reviewed pull requests?**

Do not give a broad yes without a real example.

Explain:

1. Which repository or team.
2. Which code you personally changed.
3. Whether the code was deployed or used by real users.
4. Whether you created a pull request.
5. What feedback you received.
6. What changed after review.

If your experience was project-level rather than enterprise production work, say so.

A good answer:

> I have worked with deployed applications and collaborative project codebases. I understand the importance of pull-request reviews, testing and controlled releases. I would distinguish that experience from working on a mature enterprise production system with an established engineering team.

This distinction is explicitly emphasized in your research. 

Interview__Research.md


<a id="phase-19-section-7"></a>

### HR and behavioral questions

#### 11. Why do you want to join Taurus and Mocha?

**Recommended answer:**

> I am interested in Taurus and Mocha because they build software around real business workflows, where backend engineering, data integrity, permissions and reliability are important.
>
> Taurus's insurance-related work involves areas such as underwriting, claims and policy servicing. Mocha's products cover business operations such as accounting, billing and rental management.
>
> I have worked on full-stack applications involving APIs, databases, authentication and automated testing. I see this internship as an opportunity to apply those foundations to real business software while learning professional engineering practices.
>
> I am particularly interested in the mentorship, regular feedback and pull-request review environment because I want to improve the quality of my engineering decisions, not just learn additional frameworks.

The company-specific positioning is supported by your research, but these are suggested answers—not confirmed company interview questions. 

Interview__Research.md


#### 12. Why Launchpad instead of another internship?

**Model answer:**

> I am looking for an internship where I can contribute to real software rather than only work on isolated learning tasks. Launchpad combines development, APIs, automation, Git, CI/CD and business workflows. It also offers mentorship and code reviews, which I consider valuable for developing professional engineering habits.
>
> The opportunity to work with insurance and financial workflows is especially interesting because it requires careful handling of data, permissions and failures.

#### 13. Why should we select you?

**Model answer:**

> I bring a combination of full-stack project experience, practical problem-solving and willingness to learn.
>
> I have worked with React, Next.js, Node.js, Express, Python, FastAPI, databases and testing tools across different projects.
>
> I also enjoy understanding how an entire feature works, from its user interface and API to its database behavior and testing.
>
> I don't claim to know every technology at an expert level, but I am comfortable learning unfamiliar tools, investigating problems and taking responsibility for well-defined tasks.
>
> I believe that combination would allow me to contribute while growing through the internship.

#### 14. What are your strengths?

Your application submitted three strengths. 

**Strength 1 — Full-stack and REST API development**

> I enjoy working across frontend and backend components. I try to understand how user interactions connect to API requests, business logic and database operations.

**Strength 2 — Rapid technical learning and problem-solving**

> When I encounter an unfamiliar technology, I break the problem into smaller parts, read documentation, build a small example and verify the behavior before integrating it.

**Strength 3 — Ownership and reliability**

> I like understanding the full lifecycle of a feature, including implementation, testing, error handling and deployment considerations.

**Important:** Back each strength with a real example from your projects. Do not simply repeat the three statements.

#### 15. What is your weakness?

Your submitted answer identifies a tendency to spend excessive time perfecting edge-case architecture before shipping an initial prototype. You said you have been improving through MVP milestones, iterative delivery and continuous feedback. 

Pasted markdown(20261101-172646).md


**Recommended answer:**

> Earlier, I sometimes spent too much time trying to design for every possible edge case before getting the initial version working. This could slow down the delivery of a prototype.
>
> I have been improving by defining an MVP first, dividing the work into smaller milestones and validating the basic workflow before adding more advanced cases.
>
> I still care about code quality, but I now try to balance quality with delivery priorities and feedback.

**Critical requirement:** Your research document explicitly says you need a real example. Prepare one using:

- What was the task?
- What did you overdesign?
- What delay did it cause?
- How did you reduce the scope?
- What did you change in your process?

Do not invent this story. 

Interview__Research.md


<a id="phase-19-section-8"></a>

### Difficult HR questions

#### 16. Why is your CGPA 6.53?

Your preparation source says to keep this answer factual, brief and non-defensive. It specifically warns against inventing an academic explanation. 

Interview__Research.md


**Recommended structure:**

> My current CGPA is 6.53. [One truthful sentence about the context.] Alongside academics, I have developed practical experience through my projects. I can demonstrate that through my implementation work and code, and I am working on [a genuine academic improvement].

The bracketed portions must come from your actual circumstances.

The research material notes that the stated CGPA meets the flyer’s numerical eligibility threshold of 6.5. That establishes eligibility against the stated minimum, not selection priority. 

Interview__Research.md


#### 17. Tell me about a difficult technical problem you solved.

Use this structure:

**Situation:** What was happening?

**Task:** What were you responsible for?

**Action:** How did you investigate and fix it?

**Result:** What changed?

Possible project areas to consider:

- DOMLens: selection behavior, DOM extraction or API response handling.
- TestForge: test execution, AST parsing or report processing.
- UniNest: authentication, database constraints or application workflows.
- GramSaarthi AI: deployment or AI fallback behavior.

Only use an incident you personally experienced. The project name alone is not a story.

#### 18. Tell me about a disagreement with a teammate.

**Model answer structure:**

> When a technical disagreement occurs, I first try to understand the reasoning behind the other person's approach. I compare the alternatives using requirements such as complexity, maintainability, delivery time and reliability. If needed, I suggest a small experiment or prototype to validate the decision. Once the team makes a decision, I support the agreed approach.

If asked for an example, use a real disagreement and explain your role rather than blaming another person.

#### 19. What did you learn from code review?

**Model answer:**

> Code review is not only about finding syntax errors. It helps improve readability, maintainability, security, test coverage and consistency with the team's conventions. I also see it as a learning process because feedback can reveal design issues that I may not have considered while implementing a feature.

If you have not personally received formal professional PR feedback, distinguish academic or project collaboration from professional workplace experience.

#### 21. How do you verify AI-generated code?

**Model answer:**

> I treat AI-generated code as a suggestion rather than a trusted implementation. I review the logic, check the APIs and dependencies, run the code, test normal and edge cases, and verify that it handles errors correctly. For security-sensitive code, I pay particular attention to authentication, authorization, input validation and secret handling.

#### 22. What would you do if you accidentally exposed an API key?

**Model answer:**

> I would treat the credential as compromised. I would revoke or rotate it immediately, identify where it was exposed, remove it from active code and configuration, and inspect logs or usage for suspicious activity. I would also move the replacement secret into the approved secret-management system and ensure it is not committed again.

Do not merely delete the visible string and assume the credential is safe. A leaked credential may remain in Git history or logs.

#### 23. What would you do if you made a mistake in a production system?

**Model answer:**

> I would first understand the impact and follow the team's incident process. I would notify the appropriate person, avoid making unreviewed changes and help contain the issue. After recovery, I would investigate the root cause, document the incident and identify preventive improvements such as validation, testing, monitoring or better release controls.

#### 24. How do you handle deadlines?

**Model answer:**

> I break the task into smaller deliverables, identify the most important functionality and estimate the work. I prioritize the minimum correct implementation first, communicate blockers early and keep time for testing. If the scope becomes unrealistic, I discuss trade-offs rather than silently sacrificing quality.

#### 25. What do you expect from your mentor?

**Model answer:**

> I would value clear expectations, technical feedback and opportunities to understand the reasoning behind engineering decisions. I don't expect a mentor to solve every problem for me. I would first investigate the issue, document what I tried and then ask focused questions so I can learn to solve similar problems independently.

<a id="phase-19-section-9"></a>

### Availability, commitment and professional conduct

#### 26. Can you commit to the internship schedule?

The flyer lists on-site work in Vadodara, with office hours from 12:00 PM to 8:30 PM for approximately four months. 

If this genuinely works with your academic schedule:

> I understand that the program is on-site and follows the published office hours. I have considered the commitment and am prepared to plan my academic responsibilities around it.

If there is a timetable conflict, be transparent and explain the actual constraint. Do not promise availability you cannot provide.

#### 27. Are you comfortable working on-site?

> Yes. I understand that the program is on-site in Vadodara. I see value in working directly with the team, discussing technical problems and learning through code reviews and regular feedback.

Only use this if it accurately reflects your circumstances.

#### 28. Are you comfortable signing an NDA?

> Yes. I understand that an NDA establishes confidentiality obligations. I would follow the company's policies regarding source code, customer data, credentials, documents and internal information. I would also clarify what tools and AI services are approved before using them with company material.

#### 29. Can you use ChatGPT or other AI coding tools at work?

> I use AI tools to accelerate learning and explore implementation options, but I don't treat their output as automatically correct. I review the code, verify documentation, test the behavior and check security implications. In a company environment, I would follow the organization's confidentiality and approved-tool policies and never upload restricted data without authorization.

<a id="phase-19-section-10"></a>

### Questions you should ask the interviewer

Good questions demonstrate that you are thinking about how to contribute.

Choose two or three that fit the conversation.

1. What kind of features or engineering tasks would interns typically work on during the first few weeks?
2. How are interns assigned mentors or technical buddies?
3. What does the code-review process look like for an intern's first pull request?
4. Which engineering practices are most important for interns to follow when working on business-critical workflows?
5. How does the team balance learning, independent implementation and delivery expectations?
6. What would a successful internship contribution look like by the end of the semester?

Avoid asking questions whose answers were already clearly provided in the flyer.

<a id="phase-19-section-11"></a>

### Resume and application audit checklist

Use this before any interview or recruiter discussion.

**Readiness checklist**


Project names and dates are consistent across resume, application and GitHub.

Documents

Every listed technology can be explained at the level claimed.

Technical claims

My individual contributions are separated from teammates' work.

Ownership

I can explain the architecture of each major project.

Projects

I can explain one real technical challenge and its resolution.

Evidence

I can explain which workflows are actually deployed.

Deployment

I can distinguish a modular monolith from microservices.

Architecture

I can explain the actual CI workflow and its triggers.

CI/CD

I can explain my testing strategy and its limitations.

Testing

I have a truthful example supporting my stated weakness.

Behavioral

I have a factual answer about my CGPA.

Academic

I have confirmed my actual schedule and on-site availability.

Commitment

I understand confidentiality and AI-tool restrictions.

Professional conduct

I have two or three relevant questions for the interviewer.

Interview


Checking an item means you have reviewed it yourself; it does not independently prove interview readiness.

<a id="phase-19-section-12"></a>

### Final readiness tracker

**Phase 19 status**

| Program and company understanding | Covered                    |
| --------------------------------- | -------------------------- |
| Resume technology defence         | Learning material provided |
| Application claim defence         | Learning material provided |
| HR and behavioral answers         | Learning material provided |
| CGPA and weakness examples        | Personal evidence needed   |
| Availability confirmation         | Not verified               |
| Resume consistency audit          | Exact PDF unavailable      |
| Mock HR performance               | Not assessed               |


<a id="phase-19-section-13"></a>

### Learning Unfamiliar Technologies

#### Q19.1. How do you learn a new technology?

**Model answer:**

"When I need to learn a new technology, I first understand what problem it solves and where it fits in the application. Then I refer to the official documentation, learn the core concepts, build a small working example and apply it to a real task. I test my understanding by debugging issues and explaining the implementation. I also take feedback from code reviews and improve my approach."


#### Q19.2. How do you decide whether to use AI or documentation?

**Model answer:**

"I use official documentation as the source of truth for API behaviour and configuration. AI can help explain unfamiliar concepts, suggest debugging directions and generate examples, but I verify the result by reading the documentation, testing the code and checking the edge cases."


#### Q19.3. How do you know that you have learned something properly?

**Model answer:**

"I consider a topic learned when I can explain the problem it solves, implement it without copying a tutorial, debug a failure, identify its limitations and apply it in a project."


#### Q19.4. What if a senior gives you feedback that your implementation is wrong?

**Model answer:**

"I first try to understand the reasoning behind the feedback. I compare it with the requirements, inspect the relevant code and ask questions if something is unclear. I then update the implementation, test it and remember the underlying lesson so that I do not repeat the same mistake."


#### Q19.5. What if you have a deadline but need to learn a new framework?

**Model answer:**

"I would focus on the minimum knowledge needed for the task, identify the most critical unknowns, build a small working prototype and deliver incrementally. I would communicate risks early rather than waiting until the deadline to reveal that I am blocked."

---

---

<a id="phase-20"></a>

## Phase 20 — Final Mock Interview and Readiness Check

**Objective:** Assess the earlier material with scenarios instead of another copy of the theory.

**Sections:** [Mock Interview — Questions With Evaluation Criteria](#phase-20-section-1) · [Final Practical Task](#phase-20-section-2) · [Readiness Rubric](#phase-20-section-3) · [Transcript-based interview delivery check](#phase-20-section-4) · [Consolidation and source map](#phase-20-section-5)

<a id="phase-20-section-1"></a>

### Mock Interview — Questions With Evaluation Criteria

Use this phase after studying the earlier material. Answer aloud before consulting the linked lesson. It is an assessment checklist, not another theory chapter.

| Scenario | A strong answer should cover | Review |
| --- | --- | --- |
| A responsive form overflows on a narrow screen | Inspect the box model and computed styles; fix layout; verify keyboard use | [Web foundations](#phase-1) |
| An async request fails inside a UI handler | Promise rejection handling, loading/error state and request cancellation | [JavaScript](#phase-3) |
| An API payload passes the TypeScript compiler but fails at runtime | Static checking versus boundary validation; model untrusted data | [TypeScript](#phase-4) |
| Choose a collection for unique values and explain lookup cost | Java collection behavior, equality and hashing; compare Python where relevant | [Java](#phase-5), [Python](#phase-6) |
| A Next.js component needs both secret data and a click handler | Server data access, client boundary, safe props and authorization | [Frontend](#phase-10) |
| A service fails during a cross-service operation | Timeouts, idempotency, durable work, compensation and observability | [Backend](#phase-11) |
| A FastAPI endpoint slows under concurrent load | Blocking versus awaitable work, driver/session behavior, evidence before changes | [FastAPI](#phase-12) |
| Two requests submit the same application | Database uniqueness, transaction boundary and conflict response | [Databases](#phase-8) |
| A report needs the top three distinct salaries per department | Window functions, ties, partitioning and deterministic ordering | [SQL exercises](#phase-8) |
| Redis returns stale data | Source of truth, invalidation, TTL and failure behavior | [Caching](#phase-9) |
| Changing a URL identifier exposes another user's record | Per-resource server authorization and a regression test | [Security](#phase-13) |
| A browser test sometimes fails in CI | Deterministic data, locator quality, waiting for observable state and traces | [Testing](#phase-14) |
| A deployment returns 502 | Process health, ports, container networking, proxy/target health and rollback evidence | [DevOps](#phase-16), [Debugging](#phase-15) |
| A payment provider sends a duplicate webhook | Signature verification, deduplication, state transitions and reconciliation | [Business workflows](#phase-17) |
| Explain your most substantial contribution | Actual code path, decision, trade-off, evidence and limitations | [Projects](#phase-18) |
| Learn an unfamiliar library under a deadline | Read the relevant docs, build a small experiment, test and seek focused review | [Learning strategy](#phase-19) |

<a id="phase-20-section-2"></a>

### Final Practical Task

Build or explain one complete student-application feature: accessible frontend, validated API, relational constraints, resource authorization, automated tests and deployment. Use the backend stack you know; compare the alternative stack verbally rather than duplicating the entire feature solely to claim breadth.

<a id="phase-20-section-3"></a>

### Readiness Rubric

- **Needs review:** Can name a tool but cannot explain the relevant execution flow.
- **Working knowledge:** Can implement the common case and describe failure behavior.
- **Interview-ready for this topic:** Can demonstrate it independently, test edge cases and explain trade-offs without inventing experience.

Record evidence per skill: a code location, test, query plan, deployment run or incident notes. Reading completion and independently demonstrated competence are different measurements.

---

<a id="phase-20-section-4"></a>

### Transcript-based interview delivery check

Use the technical lessons as answer keys; do not repeat the theory here.

| Practice prompt | Review | Assessment |
| --- | --- | --- |
| Empty-array truthiness versus loose equality | [JavaScript](#phase-3) | Explain the conversion path, not a memorized output |
| A block-scoped function and an incomplete code transcript | [JavaScript](#phase-3) | Identify missing code/runtime assumptions before predicting |
| Infinite currying with a zero input | [JavaScript](#phase-3) | Define termination and test edge cases |
| Nested promises and timers | [JavaScript](#phase-3) | Trace stack, tasks and microtasks in order |
| package.json, lockfile and production build tools | [Node.js](#phase-11) | Distinguish declared ranges, resolved tree, build and runtime requirements |
| An image needs a caption; an input needs a focus ring | [Web foundations](#phase-1) | Explain semantic figures and border versus outline |
| Describe a real project rather than list technologies | [Projects](#phase-18) | Trace a request, justify choices, acknowledge evidence limits |

Answer in a definition → concrete example → caveat structure. If you do not know, state what you know, identify the uncertainty and explain how you would check it. The transcript candidates' biographies are not your biography.

<a id="phase-20-section-5"></a>

### Consolidation and source map

| Source | Retained contribution | Consolidation treatment |
| --- | --- | --- |
| Original Interview Focused SE Study Material | Detailed language, web, database, backend, security, QA, cloud, business, coding and HR lessons | Reordered into the requested phases; theory and integration sections moved to their prerequisite owners |
| New Interview | TestForge, DOMLens and UniNest implementation walkthroughs, project follow-ups, supplementary concepts, education/training and hackathon answers | Duplicate technology surveys and second DOMLens lesson folded into canonical lessons and project dossiers; conflicting claims recorded explicitly |
| Interview Transcript | Interview pitfalls, JavaScript output exercises, execution context, currying, npm distinctions, HTML/CSS questions and delivery feedback | Distinct material merged beside its topic; repeated definitions use the existing canonical answer; incomplete-code uncertainty preserved |

The selected source files remain available as originals. DSA.md and Prompt.md are outside this consolidation. No completion percentages or unverified new production claims are assigned by this handbook.

---

