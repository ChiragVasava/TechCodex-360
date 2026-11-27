# Static analysis

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 12059–12161](/research?document=interview&start=12059&end=12161). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Static analysis and subprocess boundaries

#### What is AST?

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

#### What is subprocess in Python?

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




## Static-analysis follow-ups

**ast.parse versus ast.walk:** parse creates a syntax tree; walk visits its nodes. Static analysis inspects code without executing the target program. Dynamic analysis observes a running program. Parsing can find invalid syntax and reveal structure, but does not establish business correctness or discover every logical bug.

---

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
