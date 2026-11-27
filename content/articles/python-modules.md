# Python modules and packages

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 11334–11486](/research?document=interview&start=11334&end=11486). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Modules, Packages and Project Structure

### 39. Modules

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

#### Aliases

```python
import math as mprint(m.sqrt(25))
```

#### Common standard library modules

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

### 40. Packages

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

### 41. pip and virtual environments

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

#### Why virtual environments?

Different projects may require different package versions.

For example:

- Project A requires library version 1.
- Project B requires library version 2.

Virtual environments isolate dependencies so that projects do not unnecessarily interfere with one another.

#### if __name__ == "__main__"

A common Python pattern:

```python
def main():    print("Program started")if __name__ == "__main__":    main()
```

When the file is executed directly, `__name__` is set to `"__main__"`.

When it is imported as a module, `__name__` is set to the module's name.

This allows code to be reusable without automatically executing the main program during import.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
