# Python concurrency

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 11893–12001](/research?document=interview&start=11893&end=12001). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Concurrency and Asynchronous Programming

### 52. Threading

A thread is a unit of execution within a process.

Python provides the `threading` module.

```python
import threadingimport timedef task():    print("Task started")    time.sleep(2)    print("Task completed")thread = threading.Thread(target=task)thread.start()thread.join()print("Main program completed")
```

- `start()` starts the thread.
- `join()` waits for the thread to finish.

#### Race conditions

A race condition occurs when multiple threads access shared state and the result depends on execution timing.

Use synchronization mechanisms such as locks when required.

```python
import threadingcounter = 0lock = threading.Lock()def increment():    global counter    for _ in range(1000):        with lock:            counter += 1threads = [    threading.Thread(target=increment)    for _ in range(5)]for thread in threads:    thread.start()for thread in threads:    thread.join()print(counter)
```

### 53. Multiprocessing

Multiprocessing uses separate processes.

```python
from multiprocessing import Processdef task():    print("Process running")if __name__ == "__main__":    process = Process(target=task)    process.start()    process.join()
```

Processes have separate memory spaces by default and can execute CPU-bound work in parallel.

Use the `if __name__ == "__main__"` guard, especially on platforms that use process spawning.

### 54. Asynchronous programming with asyncio

Asynchronous programming allows a program to coordinate operations that may wait for external events without blocking the entire execution flow.

```python
import asyncioasync def task():    print("Task started")    await asyncio.sleep(2)    print("Task completed")asyncio.run(task())
```

#### Important terms

- `async`: Defines a coroutine function.
- `await`: Suspends the coroutine until the awaited operation completes.
- Coroutine: An object representing an asynchronous computation.
- Event loop: Coordinates asynchronous tasks and I/O operations.

#### Running multiple tasks

```python
import asyncioasync def task(name):    print(f"{name} started")    await asyncio.sleep(2)    print(f"{name} completed")async def main():    await asyncio.gather(        task("Task 1"),        task("Task 2"),        task("Task 3")    )asyncio.run(main())
```

These tasks can overlap while waiting for the sleep operations.

#### Threading vs multiprocessing vs asyncio

| Feature        | Threading                                 | Multiprocessing           | Asyncio                                            |
| -------------- | ----------------------------------------- | ------------------------- | -------------------------------------------------- |
| Execution unit | Thread                                    | Process                   | Coroutine/task                                     |
| Memory         | Shared within process                     | Separate by default       | Usually same process                               |
| CPU-bound work | GIL can limit Python bytecode parallelism | Good fit                  | Not a solution by itself                           |
| I/O-bound work | Useful                                    | Possible but heavier      | Excellent for many async-compatible I/O operations |
| Coordination   | Locks and synchronization                 | IPC and shared mechanisms | Event loop and async primitives                    |

**Interview question: What is the difference between concurrency and parallelism?**

Concurrency means multiple tasks make progress during overlapping periods. Parallelism means multiple tasks execute at the same instant, typically on multiple CPU cores.




## Practical Python for Backend Development

These concepts connect Python programming to actual software engineering work.

### 59. HTTP requests

Python can communicate with web APIs using libraries such as `requests`.

Install:

```bash
python -m pip install requests
```

Example:

```python
import requestsresponse = requests.get(    "https://jsonplaceholder.typicode.com/users",    timeout=10)print(response.status_code)print(response.json())
```

Important response properties:

- `status_code`: HTTP status code.
- `headers`: Response headers.
- `text`: Response body as text.
- `json()`: Parses JSON response content.

Always consider timeouts and errors when calling external APIs.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
