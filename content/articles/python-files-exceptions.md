# Python files and exceptions

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 11170–11333](/research?document=interview&start=11170&end=11333). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Exception Handling and Files

### 35. Errors and exceptions

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

#### 35.1 try-except

```python
try:    number = int(input("Enter number: "))    print(10 / number)except ValueError:    print("Please enter a valid integer")except ZeroDivisionError:    print("Cannot divide by zero")
```

#### 35.2 else

Executes if no exception occurs.

```python
try:    number = int("100")except ValueError:    print("Invalid number")else:    print("Conversion successful")
```

#### 35.3 finally

Executes whether an exception occurs or not, normally used for cleanup.

```python
try:    file = open("data.txt", "r")except FileNotFoundError:    print("File not found")finally:    print("Operation completed")
```

#### 35.4 Raising exceptions

Use `raise` to explicitly generate an exception.

```python
def withdraw(balance, amount):    if amount > balance:        raise ValueError("Insufficient balance")    return balance - amount
```

#### 35.5 Custom exceptions

```python
class InsufficientBalanceError(Exception):    passdef withdraw(balance, amount):    if amount > balance:        raise InsufficientBalanceError("Not enough balance")    return balance - amount
```

Custom exceptions help represent meaningful application-specific failures.

### 36. File handling

Python supports reading and writing files.

#### 36.1 Opening a file

```python
file = open("data.txt", "r")content = file.read()print(content)file.close()
```

#### 36.2 File modes

| Mode | Meaning                            |
| ---- | ---------------------------------- |
| `r`  | Read                               |
| `w`  | Write; overwrites existing content |
| `a`  | Append                             |
| `x`  | Create; fails if file exists       |
| `b`  | Binary mode                        |
| `t`  | Text mode                          |
| `r+` | Read and write                     |

#### 36.3 Using with

Recommended approach:

```python
with open("data.txt", "r") as file:    content = file.read()print(content)
```

The context manager automatically closes the file when the block exits.

#### 36.4 Reading methods

```python
file.read()file.readline()file.readlines()
```

#### 36.5 Writing

```python
with open("data.txt", "w") as file:    file.write("Learning Python\n")    file.write("Learning FastAPI")
```

#### 36.6 Appending

```python
with open("data.txt", "a") as file:    file.write("\nNew line")
```

### 37. JSON handling

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

### 38. CSV handling

CSV means Comma-Separated Values.

Python provides the `csv` module.

```python
import csvwith open("students.csv", "w", newline="") as file:    writer = csv.writer(file)    writer.writerow(["Name", "Age"])    writer.writerow(["Chirag", 20])    writer.writerow(["Amit", 21])
```

Reading:

```python
import csvwith open("students.csv", "r") as file:    reader = csv.reader(file)    for row in reader:        print(row)
```

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
