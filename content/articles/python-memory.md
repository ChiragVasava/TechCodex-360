# Python memory management

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 11778–11892](/research?document=interview&start=11778&end=11892). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Memory Management and Python Internals

### 48. Mutable vs immutable objects

This is one of the most frequently asked Python interview topics.

#### Immutable

Cannot be changed after creation.

Examples:

- `int`
- `float`
- `bool`
- `str`
- `tuple`
- `frozenset`

#### Mutable

Can be modified after creation.

Examples:

- `list`
- `dict`
- `set`
- `bytearray`

Example:

```python
a = "Hello"b = aa = a + " World"print(a)print(b)
```

The original string was not modified. `a` now refers to another string object.

Compare with:

```python
a = [1, 2]b = aa.append(3)print(a)print(b)
```

Both names refer to the same list object.

### 49. Shallow copy vs deep copy

Already introduced for lists, but remember the distinction:

- Shallow copy creates a new outer object while retaining references to nested objects.
- Deep copy recursively copies nested objects.

```python
import copyoriginal = [[1, 2], [3, 4]]shallow = copy.copy(original)deep = copy.deepcopy(original)
```

Use deep copying when nested objects must be independent. It can be more expensive and is not appropriate for every object type.

### 50. Memory management

Python manages object memory automatically.

In CPython, important mechanisms include:

1. Reference counting.
2. Cyclic garbage collection.

#### Reference counting

Objects maintain references to them.

When an object's reference count reaches zero, CPython can generally reclaim it immediately.

#### CPython garbage collection

Reference counting alone cannot reclaim unreachable reference cycles.

Example:

```python
a = []a.append(a)
```

The list refers to itself. Python's cyclic garbage collector can identify unreachable cycles and reclaim them.

The `gc` module provides access to the garbage collector.

#### del

```python
x = [1, 2, 3]del x
```

`del` removes a name binding or deletes an item. It does not necessarily mean the underlying object is immediately destroyed if other references still exist.

### 51. The Global Interpreter Lock (GIL)

In traditional GIL-enabled CPython builds, the Global Interpreter Lock allows only one thread at a time to execute Python bytecode within a given interpreter.

This affects CPU-bound multithreaded Python programs.

Important distinctions:

- Threads can be useful for I/O-bound tasks.
- Multiprocessing can use multiple processes for CPU-bound work.
- Asynchronous programming is useful for coordinating many I/O operations.
- Modern Python also has optional free-threaded CPython builds, so avoid saying that every Python implementation or build always has a GIL.

**Interview question: Why doesn't Python threading always improve CPU performance?**

In traditional GIL-enabled CPython, only one thread at a time executes Python bytecode in an interpreter. Therefore, CPU-bound tasks may not gain parallel execution from ordinary threads. Multiprocessing or a suitable native extension can provide parallelism.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
