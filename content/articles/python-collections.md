# Python collections

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 9995–10659](/research?document=interview&start=9995&end=10659). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Loops and Data Structures

### 11. Loops in Python

Loops are used to execute a block of code repeatedly.

Python mainly provides two loops:

1. `for` loop
2. `while` loop

#### 11.1 for loop

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

#### Understanding range()

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

#### Iterating over a string

```python
name = "Python"for character in name:    print(character)
```

#### Iterating over a list

```python
languages = ["Python", "Java", "JavaScript"]for language in languages:    print(language)
```

#### 11.2 while loop

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

#### 11.3 break

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

#### 11.4 continue

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

#### 11.5 pass

`pass` does nothing. It is used as a placeholder when Python syntax requires a statement but you haven't implemented the block yet.

```python
def future_function():    pass
```

#### 11.6 Nested loops

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

#### 11.7 Loop else

Python supports an `else` block with loops.

It executes when the loop finishes normally, not when it terminates through `break`.

```python
for number in range(1, 4):    print(number)else:    print("Loop completed")
```

This feature is particularly useful when searching for an element.

```python
numbers = [10, 20, 30, 40]target = 50for number in numbers:    if number == target:        print("Found")        breakelse:    print("Not found")
```

### 12. Strings in Python

A string is an immutable sequence of Unicode characters.

```python
name = "Python Programming"
```

#### 12.1 Indexing

Each character has an index.

```python
text = "PYTHON"print(text[0])   # Pprint(text[1])   # Yprint(text[-1])  # Nprint(text[-2])  # O
```

Positive indexing starts from zero.

Negative indexing starts from the end.

#### 12.2 Slicing

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

#### 12.3 Important string methods

```python
text = "  Hello Python  "print(text.upper())print(text.lower())print(text.title())print(text.capitalize())print(text.strip())print(text.replace("Python", "Java"))print(text.find("Python"))print(text.count("o"))print(text.startswith("  Hello"))print(text.endswith("  "))
```

Other useful methods:

```python
"hello".isalpha()      # True"123".isdigit()        # True"hello123".isalnum()   # True"   ".isspace()        # True
```

#### 12.4 Splitting and joining

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

#### 12.5 Strings are immutable

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

### 13. Lists

A list is an ordered, mutable collection that can contain duplicate values and elements of different data types.

```python
numbers = [10, 20, 30, 40]
```

#### 13.1 Creating lists

```python
numbers = [1, 2, 3]names = ["Amit", "Rahul", "Chirag"]mixed = [10, "Python", True, 20.5]empty = []
```

#### 13.2 Accessing elements

```python
numbers = [10, 20, 30, 40]print(numbers[0])   # 10print(numbers[-1])  # 40
```

#### 13.3 Modifying elements

```python
numbers = [10, 20, 30]numbers[1] = 100print(numbers)
```

Output:

```text
[10, 100, 30]
```

#### 13.4 List methods

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

#### 13.5 Sorting

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

#### 13.6 List comprehension

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

#### 13.7 Copying lists: shallow copy vs reference

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

### 14. Tuples

A tuple is an ordered, immutable collection.

```python
coordinates = (10, 20)
```

#### Features

- Ordered.
- Allows duplicates.
- Supports indexing and slicing.
- Immutable.
- Can contain different data types.

```python
data = (10, "Python", True)print(data[0])print(data[1])
```

#### Single-element tuple

```python
a = (10,)print(type(a))
```

The comma is important.

Without the comma:

```python
a = (10)print(type(a))
```

This is an integer, not a tuple.

#### Tuple unpacking

```python
student = ("Chirag", 20, "CSE")name, age, branch = studentprint(name)print(age)print(branch)
```

#### Why use tuples?

Tuples are useful when a group of values should remain unchanged, such as coordinates, fixed configuration values or a database record representation.

**Interview question: List vs tuple?**

A list is mutable, while a tuple is immutable. Lists are suitable for collections that need modification. Tuples are useful for fixed collections of values.

### 15. Sets

A set is an unordered collection of unique hashable elements.

```python
numbers = {10, 20, 30, 20}print(numbers)
```

Output contains each distinct element once:

```text
{10, 20, 30}
```

The display order is not guaranteed.

#### Creating an empty set

```python
empty_set = set()
```

Do not use `{}` for an empty set. It creates an empty dictionary.

#### Set methods

```python
numbers = {10, 20, 30}numbers.add(40)numbers.update([50, 60])numbers.remove(20)numbers.discard(100)
```

Difference:

- `remove()` raises `KeyError` if the value does not exist.
- `discard()` does not raise an error for a missing value.

#### Set operations

```python
a = {1, 2, 3}b = {3, 4, 5}print(a | b)  # Unionprint(a & b)  # Intersectionprint(a - b)  # Differenceprint(a ^ b)  # Symmetric difference
```

| Operation            | Result            |
| -------------------- | ----------------- |
| Union                | `{1, 2, 3, 4, 5}` |
| Intersection         | `{3}`             |
| Difference `a - b`   | `{1, 2}`          |
| Symmetric difference | `{1, 2, 4, 5}`    |

#### Practical use: Remove duplicates

```python
numbers = [1, 2, 2, 3, 3, 4]unique_numbers = list(set(numbers))print(unique_numbers)
```

Note: This does not guarantee preservation of the original order.

If order matters:

```python
unique_numbers = list(dict.fromkeys(numbers))
```

### 16. Dictionaries

A dictionary stores data as key-value pairs.

```python
student = {    "name": "Chirag",    "age": 20,    "branch": "CSE"}
```

This is one of the most important Python data structures.

#### 16.1 Accessing values

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

#### 16.2 Adding and updating

```python
student["city"] = "Vadodara"student["age"] = 21
```

#### 16.3 Removing values

```python
student.pop("age")
```

Other methods:

```python
student.popitem()student.clear()
```

#### 16.4 Iterating over dictionaries

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

#### 16.5 Dictionary comprehension

```python
squares = {    number: number ** 2    for number in range(1, 6)}print(squares)
```

Output:

```text
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

#### 16.6 Dictionary characteristics

- Stores key-value pairs.
- Keys must be hashable.
- Values can be any objects.
- Keys are unique.
- Dictionaries preserve insertion order in modern Python.

**Interview question: Why are dictionaries fast?**

Python dictionaries are implemented using hash tables. A hash function helps locate the storage position associated with a key. Lookup, insertion and deletion are typically average-case \\(O(1)\\), although worst-case behavior can be slower.

### 17. Comparing Python collections

| Feature    | List | Tuple | Set                 | Dictionary      |
| ---------- | ---- | ----- | ------------------- | --------------- |
| Ordered    | Yes  | Yes   | No guaranteed order | Yes             |
| Mutable    | Yes  | No    | Yes                 | Yes             |
| Duplicates | Yes  | Yes   | No                  | Keys are unique |
| Indexing   | Yes  | Yes   | No                  | By key          |
| Syntax     | `[]` | `()`  | `{}`                | `{key: value}`  |

### 18. Useful collection functions

```python
numbers = [10, 20, 30, 40]print(len(numbers))print(max(numbers))print(min(numbers))print(sum(numbers))print(sorted(numbers))
```

#### enumerate()

Provides both index and value.

```python
names = ["Amit", "Rahul", "Chirag"]for index, name in enumerate(names):    print(index, name)
```

#### zip()

Combines elements from multiple iterables.

```python
names = ["Amit", "Rahul"]marks = [80, 90]for name, mark in zip(names, marks):    print(name, mark)
```

#### any() and all()

```python
numbers = [2, 4, 6]print(all(number % 2 == 0 for number in numbers))print(any(number > 5 for number in numbers))
```

- `all()` returns true if all elements are truthy.
- `any()` returns true if at least one element is truthy.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
