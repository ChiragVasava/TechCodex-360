# Advanced Python techniques

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 11487–11777](/research?document=interview&start=11487&end=11777). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Advanced Python

### 42. Iterable and iterator

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

#### How does a for loop work?

This:

```python
for number in [10, 20, 30]:    print(number)
```

Conceptually uses the iterator protocol:

```python
numbers = [10, 20, 30]iterator = iter(numbers)while True:    try:        number = next(iterator)        print(number)    except StopIteration:        break
```

This is an important interview concept.

### 43. Generators

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

#### Why use generators?

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

#### Generator function example

```python
def even_numbers(limit):    number = 0    while number <= limit:        yield number        number += 2for number in even_numbers(10):    print(number)
```

**Interview question: Generator vs list?**

A list stores its elements in memory. A generator produces elements lazily, one at a time, and maintains its execution state between yields. Generators are useful for large datasets and streaming operations.

### 44. Decorators

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

#### Decorator with arguments

```python
def my_decorator(func):    def wrapper(*args, **kwargs):        print("Executing function")        result = func(*args, **kwargs)        return result    return wrapper@my_decoratordef add(a, b):    return a + bprint(add(10, 20))
```

#### functools.wraps

Use `wraps` to preserve useful metadata from the original function.

```python
from functools import wrapsdef decorator(func):    @wraps(func)    def wrapper(*args, **kwargs):        return func(*args, **kwargs)    return wrapper
```

#### Real-world use

Decorators are used for:

- Authentication and authorization checks.
- Logging.
- Performance measurement.
- Caching.
- Route definitions in web frameworks.

For example, FastAPI uses decorators to define API routes.

### 45. Context managers

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

### 46. Regular expressions

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

### 47. Type hints

Python is dynamically typed, but it supports optional type annotations.

```python
def add(a: int, b: int) -> int:    return a + b
```

This communicates the expected types.

It does not automatically enforce runtime type checking.

#### Common type hints

```python
name: str = "Chirag"age: int = 20marks: float = 85.5is_student: bool = True
```

#### Collection annotations

Modern Python:

```python
numbers: list[int] = [1, 2, 3]student: dict[str, int] = {    "age": 20}coordinates: tuple[int, int] = (10, 20)
```

#### Optional values

```python
def find_user(user_id: int) -> str | None:    if user_id == 1:        return "Chirag"    return None
```

#### Union types

```python
def process(value: int | str):    print(value)
```

#### Generic types

Generics allow code to work with multiple types while retaining useful type information.

```python
from typing import TypeVarT = TypeVar("T")def first_item(items: list[T]) -> T:    return items[0]
```

#### Protocol

A `Protocol` defines a structural interface for type checking.

```python
from typing import Protocolclass Drawable(Protocol):    def draw(self) -> None:        ...def render(shape: Drawable):    shape.draw()
```

Any object implementing the required method can satisfy this protocol structurally.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
