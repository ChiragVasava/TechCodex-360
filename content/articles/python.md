# Python

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 9228–9994](/research?document=interview&start=9228&end=9994). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Python Foundations

### 1. What is Python?

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

#### Where is Python used?

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

### 2. How does Python execute code?

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

#### Important terms

- **Source code:** The Python code written by the developer.
- **Interpreter:** The program that processes and executes Python code.
- **Bytecode:** An intermediate representation of the program.
- **PVM:** Python Virtual Machine, which executes Python bytecode.
- **CPython:** The most widely used implementation of Python, written primarily in C.

Python is often called an interpreted language. However, CPython also compiles source code into bytecode before executing it.

**Interview question: Is Python compiled or interpreted?**

Python is commonly described as interpreted. In CPython, source code is first compiled into bytecode, and that bytecode is executed by the Python Virtual Machine. Therefore, it uses both compilation and interpretation stages.

### 3. Installing and running Python

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

#### Your first Python program

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

### 4. Python syntax and indentation

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

#### Indentation example

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

### 5. Variables in Python

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

#### Dynamic typing

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

#### Multiple variable assignment

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

#### Variable naming rules

Valid:

```python
student_name = "Chirag"age2 = 20_total = 500
```

Invalid:

```python
2age = 20       # Cannot start with a numberstudent-name = "A"  # Hyphen is not allowed
```

Python conventionally uses `snake_case` for variables and functions.

### 6. Python data types

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

#### 6.1 Integer — int

Stores whole numbers.

```python
age = 20salary = 50000negative = -100print(type(age))
```

Output:

```text
<class 'int'>
```

Python integers can grow beyond the usual fixed-width limits of Java's `int`, subject to available memory.

#### 6.2 Float — float

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

#### 6.3 Complex — complex

Stores complex numbers with real and imaginary components.

```python
number = 3 + 4jprint(number.real)print(number.imag)
```

Output:

```text
3.0
4.0
```

#### 6.4 Boolean — bool

Represents either `True` or `False`.

```python
is_student = Trueis_employed = Falseprint(type(is_student))
```

Output:

```text
<class 'bool'>
```

Notice that Boolean values begin with capital letters.

#### 6.5 String — str

Stores text.

```python
name = "Chirag"city = 'Vadodara'print(name)print(type(name))
```

Strings can use single quotes, double quotes or triple quotes.

```python
text1 = 'Hello'text2 = "Hello"description = """This isa multilinestring."""
```

#### 6.6 None — NoneType

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

#### Checking data types

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

### 7. Type conversion (type casting)

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

#### Implicit and explicit conversion

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

### 8. Input and output

#### Taking input

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

#### Printing output

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

#### String formatting

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

### 9. Operators in Python

Operators perform operations on values and variables.

#### 9.1 Arithmetic operators

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

#### 9.2 Comparison operators

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

#### 9.3 Logical operators

Python has three logical operators:

- `and`
- `or`
- `not`

```python
age = 20has_id = Trueprint(age >= 18 and has_id)print(age < 18 or has_id)print(not has_id)
```

Unlike Java and JavaScript, Python uses words rather than `&&`, `||` and `!`.

#### 9.4 Assignment operators

```python
x = 10x += 5print(x)  # 15x -= 2print(x)  # 13x *= 2print(x)  # 26x /= 2print(x)  # 13.0
```

Other operators include `//=`, `%=`, `**=`, `&=`, `|=` and `^=`.

#### 9.5 Membership operators

Check whether a value exists in a sequence or collection.

```python
languages = ["Python", "Java", "JavaScript"]print("Python" in languages)      # Trueprint("C++" not in languages)     # True
```

#### 9.6 Identity operators

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

### 10. Conditional statements

Conditional statements allow a program to make decisions.

#### 10.1 if

```python
age = 20if age >= 18:    print("Eligible to vote")
```

#### 10.2 if-else

```python
age = 16if age >= 18:    print("Adult")else:    print("Minor")
```

#### 10.3 if-elif-else

```python
marks = 85if marks >= 90:    print("Grade A")elif marks >= 75:    print("Grade B")elif marks >= 50:    print("Grade C")else:    print("Fail")
```

Execution flow:

1. Python checks the first condition.
2. If true, its block executes and the remaining branches are skipped.
3. Otherwise, Python checks the next condition.
4. If no condition is true, the `else` block executes.

#### 10.4 Nested conditions

```python
age = 20has_id = Trueif age >= 18:    if has_id:        print("Entry allowed")    else:        print("ID required")else:    print("Underage")
```

#### 10.5 Ternary conditional expression

A short way to write a simple `if-else`.

```python
age = 20result = "Adult" if age >= 18 else "Minor"print(result)
```

#### 10.6 match-case

Python 3.10 and later supports structural pattern matching.

```python
day = 2match day:    case 1:        print("Monday")    case 2:        print("Tuesday")    case 3:        print("Wednesday")    case _:        print("Invalid day")
```

`case _` acts as a catch-all pattern.



## Practice programs

These small programs combine the concepts you have learned.

#### Program 1: Add two numbers

```python
a = int(input("Enter first number: "))b = int(input("Enter second number: "))result = a + bprint(f"Sum = {result}")
```

#### Program 2: Even or odd

```python
number = int(input("Enter a number: "))if number % 2 == 0:    print("Even")else:    print("Odd")
```

Explanation:

- `%` returns the remainder.
- If a number divided by 2 has remainder 0, it is even.
- Otherwise, it is odd.

#### Program 3: Find the largest of three numbers

```python
a = 10b = 25c = 15if a >= b and a >= c:    print("A is largest")elif b >= a and b >= c:    print("B is largest")else:    print("C is largest")
```

#### Program 4: Simple calculator

```python
a = float(input("Enter first number: "))operator = input("Enter operator (+, -, *, /): ")b = float(input("Enter second number: "))if operator == "+":    print(a + b)elif operator == "-":    print(a - b)elif operator == "*":    print(a * b)elif operator == "/":    if b != 0:        print(a / b)    else:        print("Cannot divide by zero")else:    print("Invalid operator")
```

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
