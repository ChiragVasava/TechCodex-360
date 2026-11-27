# Playwright

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 25638–26057](/research?document=interview&start=25638&end=26057). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Playwright Browser Automation

### Q14.31. What is Playwright?

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

### Q14.32. How does Playwright work internally?

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

### Q14.33. Install Playwright with Python

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

### Q14.34. Write your first Playwright test

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

### Q14.35. What are locators?

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

### Q14.36. CSS selectors vs XPath

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

### Q14.37. What are auto-waits?

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

### Q14.38. Browser vs browser context vs page

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

### Q14.39. Headless vs headed execution

**Headed:** Browser opens visibly.

```bash
pytest --headed
```

**Headless:** Browser executes without displaying a visible window.

```bash
pytest
```

Headless execution is useful in CI/CD pipelines because it does not require a user to interact with a desktop browser.

### Q14.40. Screenshots and failure recording

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



## Advanced Playwright Automation

### Q14.41. Automate a login workflow

Assume your application has:

```text
http://localhost:3000/login
```

The page contains email, password and a Login button.

```python
from playwright.sync_api import Page, expectdef test_valid_login(page: Page):    page.goto("http://localhost:3000/login")    page.get_by_label("Email").fill(        "chirag@example.com"    )    page.get_by_label("Password").fill(        "ValidPassword123"    )    page.get_by_role(        "button",        name="Login"    ).click()    expect(page).to_have_url(        "http://localhost:3000/dashboard"    )    expect(        page.get_by_text("Welcome")    ).to_be_visible()
```

A real test should use a controlled test account and a test environment—not production user credentials.

### Q14.42. Dropdowns, checkboxes and file uploads

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

### Q14.43. Handle alerts and dialogs

Use a dialog event handler:

```python
def test_confirmation_dialog(page):    page.goto("http://localhost:3000")    page.on(        "dialog",        lambda dialog: dialog.accept()    )    page.get_by_role(        "button",        name="Delete"    ).click()
```

To dismiss:

```python
page.on(    "dialog",    lambda dialog: dialog.dismiss())
```

### Q14.44. Intercept network requests

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

### Q14.45. What is Page Object Model (POM)?

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

### Q14.46. What is conftest.py?

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

### Q14.47. Implicit vs explicit waiting

Implicit waiting is a term commonly used in Selenium for configuring a global element lookup wait.

Explicit waiting means waiting for a specific condition.

Playwright uses auto-waiting and web-first assertions rather than Selenium-style implicit waits.

Example:

```python
expect(    page.get_by_text("Order confirmed")).to_be_visible(timeout=10000)
```

Avoid unnecessary fixed sleeps.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
