# Data structures

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 12270–12363](/research?document=interview&start=12270&end=12363). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Essential Data Structures

Choosing the right data structure can change an inefficient solution into an efficient one.

### 3.1 Array / Python list

An array stores elements in an ordered sequence.

```python
numbers = [10, 20, 30]numbers.append(40)numbers[0] = 5print(numbers)
```

Output:

```text
[5, 20, 30, 40]
```

Typical complexity:

| Operation             | Complexity           |
| --------------------- | -------------------- |
| Access by index       | \\(O(1)\\)           |
| Append at end         | \\(O(1)\\) amortized |
| Search by value       | \\(O(n)\\)           |
| Insert at beginning   | \\(O(n)\\)           |
| Delete from beginning | \\(O(n)\\)           |

### 3.2 Dictionary / hash map

A dictionary stores key-value pairs.

```python
student = {    "name": "Chirag",    "age": 21,    "department": "CSE"}print(student["name"])
```

Output: `Chirag`

Average lookup, insertion and deletion are \\(O(1)\\).

Useful for:

- Counting frequencies
- Detecting duplicates
- Finding matching values
- Caching results
- Looking up records by ID

### 3.3 Set

A set stores unique elements.

```python
numbers = [1, 2, 2, 3, 4, 4]unique_numbers = set(numbers)print(unique_numbers)
```

Output (order is not guaranteed):

```text
{1, 2, 3, 4}
```

Membership testing is typically \\(O(1)\\) on average.

### 3.4 Stack

A stack follows **LIFO — Last In, First Out**.

```python
stack = []stack.append(10)stack.append(20)stack.append(30)print(stack.pop())  # 30print(stack)        # [10, 20]
```

Applications include:

- Balanced parentheses
- Undo functionality
- Browser history patterns
- Function calls and recursion

### 3.5 Queue

A queue follows **FIFO — First In, First Out**.

```python
from collections import dequequeue = deque()queue.append("A")queue.append("B")queue.append("C")print(queue.popleft())  # Aprint(queue)
```

Use `deque` rather than repeatedly removing the first element of a Python list. `deque.popleft()` is \\(O(1)\\).

Applications include task queues, job processing and breadth-first search.

## Connected study

Continue with [algorithms](/knowledge/algorithms) and the [complete study library](/study).
