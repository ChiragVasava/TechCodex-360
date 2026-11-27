# SQLAlchemy

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 14951–15000](/research?document=interview&start=14951&end=15000). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## SQLAlchemy — Python Persistence After SQL

### Core, ORM, Engine and Session

SQLAlchemy Core builds SQL expressions; its ORM maps Python classes to tables. The engine manages database connectivity. A session tracks ORM objects and coordinates a transaction. A session is not a global cache and should not be shared across concurrent threads or asyncio tasks. [Session basics](https://docs.sqlalchemy.org/en/20/orm/session_basics.html).

The following self-contained example uses SQLAlchemy 2.x-style mappings and an in-memory SQLite database. It illustrates insert, commit and a parameterized expression-based query.

```python
from sqlalchemy import String, create_engine, select
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column

class Base(DeclarativeBase):
    pass

class Student(Base):
    __tablename__ = "students"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))

engine = create_engine("sqlite:///:memory:")
Base.metadata.create_all(engine)

with Session(engine) as session:
    with session.begin():
        session.add(Student(name="Aarav"))

with Session(engine) as session:
    statement = select(Student).where(Student.name == "Aarav")
    for student in session.scalars(statement):
        print(student.id, student.name)
```

The first transaction commits on successful exit and rolls back on an exception. The second session reads mapped objects. The database exists only for this example's engine lifetime. See the [ORM quick start](https://docs.sqlalchemy.org/en/20/orm/quickstart.html) for mapping details.

### Flush, Commit and Migrations

A flush sends pending changes to the database transaction; commit completes the transaction. After a failed flush, roll back before reusing that session. Closing a session releases its resources. Keep transaction boundaries explicit in the service layer. [Session lifecycle reference](https://docs.sqlalchemy.org/en/20/orm/session_basics.html).

Creating tables with metadata is useful in a disposable example; production schema evolution needs reviewed migrations. Alembic is a common migration tool for SQLAlchemy. Review generated changes, backfill data where needed and plan compatibility during rollout.

### ORM Interview Exercise

Explain an N+1 query and inspect generated SQL before choosing relationship loading. Compare Prisma's schema/client workflow with SQLAlchemy's Python mappings and sessions. Both still require knowledge of indexes, constraints and transactions.

**Practice:** Replace the FastAPI example's dictionary with a session-backed service. Test rollback and duplicate constraints against the target engine. Keep request validation models separate from persistence models, and use a compatible async driver/session only if adopting an asynchronous persistence path.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
