# pytest

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 25217–25498](/research?document=interview&start=25217&end=25498). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Python Testing with PyTest

### Q14.16. What is PyTest?

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

### Q14.17. How do you install PyTest?

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

### Q14.18. How does PyTest discover test files?

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



## Advanced PyTest Concepts

### Q14.19. What are fixtures?

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

#### Fixture scopes

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

### Q14.20. What is parametrization?

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

### Q14.21. What is mocking?

Mocking replaces a real dependency with a controlled test double.

Suppose a service calls an external payment provider. You don't necessarily want every unit test to make a real payment API request.

```python
from unittest.mock import Mockdef process_payment(payment_gateway, amount):    return payment_gateway.charge(amount)def test_process_payment():    gateway = Mock()    gateway.charge.return_value = {"status": "success"}    result = process_payment(gateway, 1000)    assert result["status"] == "success"    gateway.charge.assert_called_once_with(1000)
```

Mocking is useful for testing third-party APIs, email services, payment gateways, error conditions and expensive external calls.

**Important:** Mocking does not prove that the real payment provider works. Integration tests must verify the actual integration separately.

### Q14.22. Stub vs mock vs fake

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

### Q14.23. How do you test exceptions?

Use `pytest.raises()`.

```python
import pytestdef validate_age(age):    if age < 18:        raise ValueError("Must be 18 or older")    return Truedef test_invalid_age():    with pytest.raises(        ValueError,        match="Must be 18 or older"    ):        validate_age(16)
```

This verifies both the exception type and its message.

### Q14.24. How do you skip tests?

```python
import pytest@pytest.mark.skip(reason="Feature not implemented")def test_future_feature():    assert True
```

Conditionally skip:

```python
import sysimport pytest@pytest.mark.skipif(    sys.platform == "win32",    reason="Not supported on Windows")def test_linux_feature():    assert True
```

### Q14.25. What are PyTest markers?

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

### Q14.26. How do you generate coverage reports?

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

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
