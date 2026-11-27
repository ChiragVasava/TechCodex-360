# Object-oriented Python

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 10920–11169](/research?document=interview&start=10920&end=11169). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Object-Oriented Programming in Python

### 25. What is OOP?

Object-oriented programming is a programming approach in which software is organized around objects containing data and behavior.

Four main pillars:

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

Python supports OOP using classes and objects.

### 26. Classes and objects

A class is a blueprint for creating objects.

An object is an instance of a class.

```python
class Student:    def display(self):        print("I am a student")student1 = Student()student1.display()
```

Here:

- `Student` is the class.
- `student1` is an object.
- `display()` is a method.

#### Constructor: __init__()

The `__init__()` method initializes an object when it is created.

```python
class Student:    def __init__(self, name, age):        self.name = name        self.age = age    def display(self):        print(self.name, self.age)student1 = Student("Chirag", 20)student1.display()
```

#### What is self?

`self` refers to the current instance.

```python
class Student:    def __init__(self, name):        self.name = name
```

When you call:

```python
student1 = Student("Chirag")
```

Python passes the newly created instance to the initializer as its first argument, conventionally named `self`.

`self` is a convention, not a reserved keyword.

### 27. Instance, class and static methods

#### Instance method

Works with an object and receives `self`.

```python
class Student:    def display(self):        print("Instance method")
```

#### Class method

Receives the class as its first argument, conventionally named `cls`.

```python
class Student:    college = "MSU"    @classmethod    def show_college(cls):        print(cls.college)
```

#### Static method

Does not automatically receive `self` or `cls`.

```python
class Calculator:    @staticmethod    def add(a, b):        return a + b
```

Use a static method for functionality logically related to a class but not requiring its instance or class state.

### 28. Encapsulation

Encapsulation means grouping data and methods together and controlling how internal state is accessed or modified.

Python does not enforce traditional private access modifiers like Java.

Conventions:

- `name`: public.
- `_name`: internal-use convention.
- `__name`: name mangling.

Example:

```python
class BankAccount:    def __init__(self, balance):        self.__balance = balance    def deposit(self, amount):        if amount > 0:            self.__balance += amount    def get_balance(self):        return self.__balanceaccount = BankAccount(1000)account.deposit(500)print(account.get_balance())
```

The double underscore triggers name mangling. It does not provide absolute security.

### 29. Inheritance

Inheritance allows a child class to reuse or extend the functionality of a parent class.

```python
class Animal:    def eat(self):        print("Eating")class Dog(Animal):    def bark(self):        print("Barking")dog = Dog()dog.eat()dog.bark()
```

#### Types of inheritance

**Single inheritance**

One child class inherits from one parent class.

**Multiple inheritance**

One child class inherits from multiple parent classes.

```python
class Father:    def skill(self):        print("Driving")class Mother:    def hobby(self):        print("Reading")class Child(Father, Mother):    pass
```

**Multilevel inheritance**

A class inherits from a child class.

```python
class A:    passclass B(A):    passclass C(B):    pass
```

**Hierarchical inheritance**

Multiple child classes inherit from the same parent.

**Hybrid inheritance**

A combination of inheritance patterns.

#### Method overriding

A child class provides its own implementation of a parent method.

```python
class Animal:    def sound(self):        print("Animal sound")class Dog(Animal):    def sound(self):        print("Bark")dog = Dog()dog.sound()
```

#### super()

Calls functionality from the parent class according to Python's method resolution order.

```python
class Animal:    def __init__(self, name):        self.name = nameclass Dog(Animal):    def __init__(self, name, breed):        super().__init__(name)        self.breed = breeddog = Dog("Tommy", "Labrador")
```

### 30. Polymorphism

Polymorphism means that a common interface can be used with different underlying implementations.

Example:

```python
class Dog:    def sound(self):        return "Bark"class Cat:    def sound(self):        return "Meow"def make_sound(animal):    print(animal.sound())make_sound(Dog())make_sound(Cat())
```

The same function works with different object types.

Python commonly uses duck typing: if an object supports the required behavior, code can use it without requiring a particular inheritance relationship.

#### Method overloading

Traditional compile-time method overloading by signature is not supported in the same way as Java.

You can achieve similar behavior using default arguments or variable-length arguments.

```python
class Calculator:    def add(self, a, b, c=0):        return a + b + c
```

### 31. Abstraction

Abstraction means exposing essential functionality while hiding unnecessary implementation details.

Python provides abstract classes through the `abc` module.

```python
from abc import ABC, abstractmethodclass Payment(ABC):    @abstractmethod    def pay(self, amount):        passclass UpiPayment(Payment):    def pay(self, amount):        print(f"Paid {amount} using UPI")payment = UpiPayment()payment.pay(500)
```

You cannot normally instantiate `Payment` while it has an unimplemented abstract method.

### 32. Composition vs inheritance

Inheritance expresses an "is-a" relationship.

Composition expresses a "has-a" relationship.

Example:

```python
class Engine:    def start(self):        print("Engine started")class Car:    def __init__(self):        self.engine = Engine()    def start(self):        self.engine.start()car = Car()car.start()
```

A car has an engine. Composition is often preferable when you want to combine reusable components without creating deep inheritance hierarchies.

### 33. Special methods / Dunder methods

Dunder means double underscore.

Examples:

| Method      | Purpose                           |
| ----------- | --------------------------------- |
| `__init__`  | Initialize object                 |
| `__str__`   | Human-readable string             |
| `__repr__`  | Developer-oriented representation |
| `__len__`   | Supports `len()`                  |
| `__eq__`    | Supports equality comparison      |
| `__add__`   | Supports `+`                      |
| `__iter__`  | Supports iteration                |
| `__next__`  | Retrieves next iterator item      |
| `__enter__` | Context manager entry             |
| `__exit__`  | Context manager exit              |

Example:

```python
class Student:    def __init__(self, name):        self.name = name    def __str__(self):        return f"Student: {self.name}"student = Student("Chirag")print(student)
```

### 34. SOLID principles

These are important for software engineering interviews.

| Principle                 | Meaning                                                       |
| ------------------------- | ------------------------------------------------------------- |
| S — Single Responsibility | A class should have one primary responsibility                |
| O — Open/Closed           | Open for extension, closed for modification                   |
| L — Liskov Substitution   | Subtypes should be usable where their base types are expected |
| I — Interface Segregation | Prefer focused interfaces over large interfaces               |
| D — Dependency Inversion  | High-level modules should depend on abstractions              |

For example, avoid putting payment processing, email notifications and report generation into one large class. Separate responsibilities into different services.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
