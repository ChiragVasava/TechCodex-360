# Python functions

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 10660–10919](/research?document=interview&start=10660&end=10919). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Functions and Programming Techniques

### 19. Python functions

A function is a reusable block of code that performs a specific task.

```python
def greet():    print("Hello, Python")
```

Calling it:

```python
greet()
```

#### Function with parameters

```python
def greet(name):    print(f"Hello, {name}")greet("Chirag")
```

Here, `name` is a parameter and `"Chirag"` is an argument.

#### Function with return value

```python
def add(a, b):    return a + bresult = add(10, 20)print(result)
```

`return` sends a value back to the caller and terminates the function.

#### print() vs return

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

### 20. Types of function arguments

#### 20.1 Positional arguments

```python
def student(name, age):    print(name, age)student("Chirag", 20)
```

Values are assigned based on position.

#### 20.2 Keyword arguments

```python
student(age=20, name="Chirag")
```

Values are assigned by parameter name.

#### 20.3 Default arguments

```python
def greet(name="Student"):    print(f"Hello {name}")greet()greet("Chirag")
```

#### 20.4 Variable-length positional arguments: args

Use `*args` when a function should accept an arbitrary number of positional arguments.

```python
def add(*args):    print(args)    return sum(args)print(add(10, 20, 30, 40))
```

Inside the function, `args` is a tuple.

#### 20.5 Variable-length keyword arguments: kwargs

Use `**kwargs` when a function should accept arbitrary keyword arguments.

```python
def student(**kwargs):    print(kwargs)student(name="Chirag", age=20, branch="CSE")
```

Inside the function, `kwargs` is a dictionary.

#### 20.6 Combining arguments

```python
def example(name, *args, **kwargs):    print(name)    print(args)    print(kwargs)example("Chirag", 10, 20, city="Vadodara", age=20)
```

#### Important interview point: Mutable default arguments

Avoid this:

```python
def add_item(item, items=[]):    items.append(item)    return items
```

The same default list is reused across calls.

Better:

```python
def add_item(item, items=None):    if items is None:        items = []    items.append(item)    return items
```

### 21. Scope of variables

Scope defines where a variable can be accessed.

Python follows the LEGB lookup rule:

1. Local
2. Enclosing
3. Global
4. Built-in

#### Local variable

```python
def test():    x = 10    print(x)test()
```

`x` exists in the function's local scope.

#### Global variable

```python
x = 100def test():    print(x)test()
```

The function can read the global variable.

#### global keyword

```python
count = 0def increment():    global count    count += 1increment()print(count)
```

#### nonlocal keyword

Used to modify a variable in an enclosing function's scope.

```python
def outer():    count = 0    def inner():        nonlocal count        count += 1    inner()    print(count)outer()
```

### 22. Lambda functions

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

### 23. Recursion

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

### 24. Higher-order functions

A higher-order function is a function that accepts another function as an argument or returns a function.

#### map()

Applies a function to each element.

```python
numbers = [1, 2, 3, 4]result = map(lambda x: x * 2, numbers)print(list(result))
```

Output:

```text
[2, 4, 6, 8]
```

#### filter()

Selects elements based on a condition.

```python
numbers = [1, 2, 3, 4, 5, 6]result = filter(lambda x: x % 2 == 0, numbers)print(list(result))
```

Output:

```text
[2, 4, 6]
```

#### reduce()

Combines elements into a single result.

```python
from functools import reducenumbers = [1, 2, 3, 4]result = reduce(lambda a, b: a + b, numbers)print(result)
```

Output:

```text
10
```

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
