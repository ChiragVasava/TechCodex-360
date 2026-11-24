# AI, ML & Data Analytics

A working index for datasets, models, and analytics workflows.

```text
ai-ml-data/
├── statistics/
├── datasets/
├── notebooks/
├── models/
└── dashboards/
```

## Evaluation checklist

- Start with a reproducible baseline
- Separate training, validation, and test data
- Track metrics and failure modes
- Document assumptions and data lineage

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.2, random_state=42
)
```
