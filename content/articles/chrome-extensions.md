# Chrome extensions

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 1799–2143](/research?document=interview&start=1799&end=2143). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Chrome extension platform and browser isolation

#### What is a Chrome Extension?

Interview question: What is a Chrome Extension?

Interview-ready answer

A Chrome Extension is a small software application that extends the functionality of the Google Chrome browser.

It can interact with browser tabs, webpages, browser events, and other extension APIs depending on its permissions.

Examples include ad blockers, password managers, screenshot tools, and developer utilities.

DOMLens is a Chrome Extension that adds UI inspection and AI-assisted editing functionality to webpages.

**Examples of browser extensions**

[Source image reference: Beautifully Designed Chrome Extension Popups](https://images.openai.com/static-rsc-4/_Fr1JUsu27aqujjS8mIR5kP2l3Ot2HHD0pWmBSf9dCMq7lKDc1uSSxUZAAxB6XMbeIjEei1cni0IakionWKUT-TvnDk7QDy6ulC6UeWXyOWd5QO_ZzU81FurcV1uqo0E3fW2f6sPNjCAkO9JpvQvImAE7PskXzMdG7oqbhAl0Es?purpose=inline)

Grammar tools

Help improve writing on webpages.

[Source image reference: Troubleshooting Autosave Issues in Bitdefender SecurePass](https://images.openai.com/static-rsc-4/R57Q7AM2rF_asnCGPLPOTMa-ACNjbWrJQszVi1QeJqZmP5C-5nadYS9Rt6k3SricpLKGoByncGl3ixFCC7l0KxgQ5kWKN0x8F7eWxrQPThXRLv9V4kF37NUaCdvXFRh9CnVwoPE-fZ7x6UBvmMnxGd1y9A2lsTWLQ49qNQ8Ahqg?purpose=inline)

Password managers

Manage login credentials.

[Source image reference: 8 Best Ad Blockers for Web Browsers | Beebom](https://images.openai.com/static-rsc-4/_cFyOLT0tTaIfXI7DXkEnSR79TXPr2BlaaYMUJlwctU_0gz4zNSiSMLNP7_W_6hnCu0Z9H5nkIR3Kt3ANZ5LQEhEEm9HZckZcDrat6vZFtrFHeW8YVB0DSWeB2fUKgaLWS8xvUb6BpulkgseDu7L2aYxDerm49gpBREor2Y7sr4?purpose=inline)

Ad blockers

Control unwanted advertisements.

[Source image reference: Mode d'inspection: analyser rapidement les propriétés des éléments  |  Chrome DevTools  |  Chrome for Developers](https://images.openai.com/static-rsc-4/SpVHJSDIKf_xF8M-SO62eZgzn9P6H6_zsOvCWepd1rDntqVVUcFeBZioPzqQUE5cyAz0xcQNbC2XqUWXB8XBl7Js9GBbGnyqlW7wTSoLKRiiqABYu8bQ9sRZ9Q8cD8nFx8CRFuw12AHPBCJIz5_M7bfAZJMr0X79PpFrfdFRmjA?purpose=inline)

Developer tools

Inspect and modify webpages.

#### What is Manifest V3?

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

#### What are content scripts?

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

#### What is a background service worker?

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

#### What is Chrome runtime messaging?

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

#### What is an iframe?

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

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
