# Object-oriented programming

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 8021–8634](/research?document=interview&start=8021&end=8634). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Methods and OOP

### 16. Methods in Java

A method is a block of code that performs a specific operation.

Syntax:

```java
returnType methodName(parameters) {
    // Statements
}
```

Example:

```java
public class Main {

    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {

        int result = add(10, 20);

        System.out.println(result);
    }
}
```

#### Parameters and arguments

```java
static void greet(String name) {
    System.out.println("Hello " + name);
}

greet("Chirag");
```

- `name` is a parameter.
- `"Chirag"` is an argument.

#### Return types

```java
static int getAge() {
    return 20;
}
```

A `void` method does not return a value.

#### Java is pass-by-value

Java always passes arguments by value.

For object arguments, the copied value is the reference. This allows a method to modify the referenced object's state, but reassigning the parameter does not change the caller's reference.

Example:

```java
class Student {
    String name;
}

public class Main {

    static void changeName(Student student) {
        student.name = "Amit";
    }

    public static void main(String[] args) {

        Student s = new Student();
        s.name = "Chirag";

        changeName(s);

        System.out.println(s.name);
    }
}
```

Output:

```text
Amit
```

The method received a copy of the reference, but both references identify the same object.

### 17. Classes and objects

A class is a blueprint. An object is an instance of a class.

```java
class Student {

    String name;
    int age;

    void display() {
        System.out.println(name);
        System.out.println(age);
    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();

        s1.name = "Chirag";
        s1.age = 20;

        s1.display();
    }
}
```

#### Constructor

A constructor initializes an object.

```java
class Student {

    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println(name + " " + age);
    }
}
```

Create an object:

```java
Student s1 = new Student("Chirag", 20);

s1.display();
```

#### Constructor characteristics

- Constructor name matches the class name.
- It has no return type, not even `void`.
- It executes during object creation.
- Constructors can be overloaded.
- Constructors are not inherited.

#### Default constructor vs no-argument constructor

If you do not declare any constructor, Java provides a default constructor.

If you declare a constructor yourself, Java does not automatically provide that default constructor.

A programmer can also explicitly declare a no-argument constructor.

### 18. this keyword

`this` refers to the current object.

```java
class Student {

    String name;

    Student(String name) {
        this.name = name;
    }
}
```

It distinguishes the instance field from the constructor parameter.

It can also call another constructor using `this()`.

```java
class Student {

    String name;
    int age;

    Student() {
        this("Unknown", 0);
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

A `this()` constructor call must be the first statement in the constructor.

### 19. The four pillars of OOP

### Four pillars of object-oriented programming

**1. Encapsulation**

Protecting internal state through controlled access.

**2. Abstraction**

Exposing essential functionality and hiding implementation details.

**3. Inheritance**

Reusing and extending parent-class functionality.

**4. Polymorphism**

One interface or method call can represent different implementations.

#### 19.1 Encapsulation

Encapsulation combines data and methods in a class and controls access to the internal state.

```java
class BankAccount {

    private double balance;

    public void deposit(double amount) {

        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}
```

Usage:

```java
BankAccount account = new BankAccount();

account.deposit(1000);

System.out.println(account.getBalance());
```

The `balance` field is private, so external code cannot directly modify it.

#### 19.2 Inheritance

Inheritance allows a child class to acquire accessible behavior and state from a parent class.

```java
class Animal {

    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {

    void bark() {
        System.out.println("Barking");
    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.eat();
        dog.bark();
    }
}
```

Java supports:

- Single inheritance.
- Multilevel inheritance.
- Hierarchical inheritance.

Java classes do not support multiple inheritance of classes. A class can implement multiple interfaces.

#### 19.3 Polymorphism

Polymorphism means one interface can represent different behaviors.

There are two commonly discussed forms:

- Compile-time polymorphism — method overloading.
- Runtime polymorphism — method overriding and dynamic method dispatch.

#### 19.4 Abstraction

Abstraction hides unnecessary implementation details.

Java provides:

- Abstract classes.
- Interfaces.

### 20. Method overloading

Multiple methods have the same name but different parameter lists.

```java
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

Usage:

```java
Calculator calculator = new Calculator();

System.out.println(calculator.add(10, 20));
System.out.println(calculator.add(10, 20, 30));
System.out.println(calculator.add(10.5, 20.5));
```

Changing only the return type is not sufficient to overload a method.

### 21. Method overriding

A child class provides its own implementation of an inherited method.

```java
class Animal {

    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    @Override
    void sound() {
        System.out.println("Bark");
    }
}
```

Usage:

```java
Animal animal = new Dog();

animal.sound();
```

Output:

```text
Bark
```

Why?

The actual object is a `Dog`, so Java uses the overridden method at runtime.

#### Overloading vs overriding

| Overloading                                    | Overriding                                              |
| ---------------------------------------------- | ------------------------------------------------------- |
| Same method name, different parameters         | Same inherited method signature, compatible return type |
| Usually within the same class                  | Inheritance is required                                 |
| Resolved at compile time                       | Runtime dispatch for instance methods                   |
| Return type alone cannot distinguish overloads | Return type must be compatible                          |

### 22. Abstract classes

An abstract class is declared using `abstract`.

It cannot be instantiated directly.

```java
abstract class Payment {

    abstract void pay(double amount);

    void receipt() {
        System.out.println("Receipt generated");
    }
}
```

Child class:

```java
class UpiPayment extends Payment {

    @Override
    void pay(double amount) {
        System.out.println("Paid using UPI: " + amount);
    }
}
```

Usage:

```java
Payment payment = new UpiPayment();

payment.pay(500);
payment.receipt();
```

An abstract class can contain:

- Abstract methods.
- Concrete methods.
- Fields.
- Constructors.
- Static methods.

### 23. Java interfaces

An interface defines a contract that implementing classes agree to follow.

```java
interface Payment {

    void pay(double amount);
}
```

Implementation:

```java
class CardPayment implements Payment {

    @Override
    public void pay(double amount) {
        System.out.println("Paid using card: " + amount);
    }
}
```

Usage:

```java
Payment payment = new CardPayment();

payment.pay(1000);
```

Interfaces can contain abstract methods, default methods, static methods and constants. Modern Java also supports private helper methods in interfaces.

#### Abstract class vs interface

| Abstract class                            | Interface                                              |
| ----------------------------------------- | ------------------------------------------------------ |
| Declared using `abstract class`           | Declared using `interface`                             |
| A class extends one class                 | A class can implement multiple interfaces              |
| Can have instance fields                  | Fields are implicitly `public static final`            |
| Can have constructors                     | Cannot have constructors                               |
| Can contain abstract and concrete methods | Can have abstract, default, static and private methods |

**Interview question: Why does Java use interfaces?**

Interfaces define contracts between components. They allow different classes to provide different implementations of the same behavior, which helps with abstraction, loose coupling and flexible application design.

### 24. Access modifiers

Access modifiers control visibility.

| Modifier                | Same class | Same package | Subclass in another package             | Other package |
| ----------------------- | ---------- | ------------ | --------------------------------------- | ------------- |
| `private`               | Yes        | No           | No                                      | No            |
| Default/package-private | Yes        | Yes          | No, unless through package-access rules | No            |
| `protected`             | Yes        | Yes          | Yes, subject to protected-access rules  | No            |
| `public`                | Yes        | Yes          | Yes                                     | Yes           |

Example:

```java
class Student {

    private int age;

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
```

### 25. static, final and super

#### static

Belongs to the class rather than an individual object.

```java
class Student {

    static String college = "MSU";

    String name;
}
```

Access:

```java
System.out.println(Student.college);
```

#### final

The meaning depends on what it modifies.

**Final variable:** Cannot be reassigned.

```java
final int MAX = 100;
```

**Final method:** Cannot be overridden.

```java
class Parent {

    final void display() {
        System.out.println("Hello");
    }
}
```

**Final class:** Cannot be subclassed.

```java
final class Utility {
}
```

A final reference cannot be reassigned, but the referenced object may still be mutable.

#### super

Refers to the parent-class portion of the current object.

Calling parent constructor:

```java
class Animal {

    Animal(String name) {
        System.out.println(name);
    }
}

class Dog extends Animal {

    Dog() {
        super("Dog");
    }
}
```

Calling parent method:

```java
class Animal {

    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    void sound() {
        super.sound();
        System.out.println("Bark");
    }
}
```

---

> Imported lesson from [Full-stack interview handbook, lines 9138–9219](/research?document=interview&start=9138&end=9219). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Applied Object-Oriented Design

### Q5.1. Difference between abstraction and encapsulation?

| Abstraction                          | Encapsulation                                    |
| ------------------------------------ | ------------------------------------------------ |
| Hides implementation complexity      | Protects internal state                          |
| Focuses on what an object does       | Focuses on how data and behaviour are controlled |
| Uses interfaces and abstract classes | Uses access control and methods                  |
| Example: Payment interface           | Example: Private account balance                 |

A simple way to remember:

- Abstraction: Hide complexity.
- Encapsulation: Control access to data.


### Q5.2. Explain Single Responsibility Principle with an example.

A class should have one primary responsibility.

Poor design:

```python
class Student:    def save_to_database(self):        pass    def send_email(self):        pass    def generate_pdf(self):        pass
```

Better separation:

```python
class StudentRepository:    def save(self, student):        passclass EmailService:    def send(self, student):        passclass PdfService:    def generate(self, student):        pass
```

This makes each component easier to test and modify.


### Q5.3. What is dependency injection?

Dependency injection means providing a class with its dependencies from outside instead of making it construct every dependency itself.

```typescript
interface PaymentGateway {
    charge(amount: number): void;
}

class OrderService {
    constructor(private gateway: PaymentGateway) {}

    checkout(amount: number) {
        this.gateway.charge(amount);
    }
}
```

This makes it easier to substitute a real payment provider with a mock during testing.


### Q5.4. What is coupling and cohesion?

- **Coupling:** How strongly one component depends on other components.
- **Cohesion:** How closely related the responsibilities inside a component are.

Good software design generally aims for:

- Low coupling.
- High cohesion.


### Q5.5. Give an OOP example from a real business application.

**Model answer:**

"In a university placement platform, I can model Student, Company, Drive and Application as domain objects. An application belongs to a student and a placement drive. Different user roles can implement different permissions, and services can use interfaces for notifications or document storage. This keeps business responsibilities separated."

Treat this as a design explanation, not a claim that every part of UniNest was implemented using a formal OOP design pattern.

---

---

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
