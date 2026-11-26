# Machine learning

Machine learning develops models whose behavior is fitted from data rather than specified entirely as explicit rules. Learning a useful pattern is different from demonstrating that the pattern generalizes.

## The learning problem

A supervised model learns from examples paired with target values. An unsupervised method looks for structure without that same target labeling. The task determines what data, objective, and evaluation are appropriate; “AI” is not a synonym for one particular algorithm.

For a sensor-quality classifier, the input might contain recent measurements and device metadata. The target records a confirmed fault. A timestamp or maintenance flag written only after the fault can accidentally reveal the answer during training.

## Training and evaluation

Define a simple baseline before fitting a more complicated model. Separate fitting data from evaluation data, and choose a split that reflects deployment: future observations or previously unseen devices may require time-based or grouped separation.

Fit preprocessing on training data and apply the fitted transformation to held-out data. Fitting normalization or feature selection on the complete dataset can leak information into evaluation. See the [scikit-learn pitfalls guide](https://scikit-learn.org/stable/common_pitfalls.html).

```text
question → data contract → split → fit on training data
                                  ↓
                         evaluate on held-out data
                                  ↓
                    inspect errors and deployment limits
```

## Reliability and limitations

An average score can hide poor results for uncommon cases. Record errors by meaningful groups, compare costs of false positives and false negatives, and document uncertain labels. A distribution change can invalidate a previously useful model.

Treat sensitive training examples as protected data. Model output still needs checks appropriate to its downstream use.

## Practice and progression

Build a small reproducible baseline, keep the held-out examples separate, and report both its metric and three failure cases. Assessment: explain why your evaluation estimates the intended deployment behavior. [Data engineering](/knowledge/data-engineering) supplies dependable inputs; [testing](/knowledge/testing) checks the surrounding system; [observability](/knowledge/observability) helps detect changes after deployment. Continue to [embeddings](/knowledge/embeddings) and [recommendation systems](/knowledge/recommendation-systems).
