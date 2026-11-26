# Recommendation systems

A recommendation system selects and orders items for a user or context using an explicit objective and available evidence. Its behavior depends on data, candidate selection, scoring, constraints, and feedback.

## Retrieval and ranking

Candidate retrieval narrows a large collection to a tractable set. Ranking then scores or orders those candidates for the current request. A further stage can apply eligibility, diversity, or product constraints. This division is illustrated by the [TensorFlow retrieval tutorial](https://www.tensorflow.org/recommenders/examples/basic_retrieval).

Content-based approaches use item characteristics. Collaborative approaches learn from patterns across interactions. [Embeddings](/knowledge/embeddings) can represent users or items for similarity-based retrieval, but a system need not use a neural model to recommend useful material.

## Example: next topics in the codex

A transparent baseline recommends documented prerequisites that a learner has not completed. It can then suggest a connected concept relevant to a chosen engineering role. This uses the knowledge graph and explicit learning state rather than inferring ability from clicks alone.

Compare that baseline with a learned ranker only when there is enough appropriate data and a meaningful evaluation objective.

## Feedback is imperfect evidence

A click can mean curiosity, confusion, or accidental selection. More engagement does not necessarily mean more learning or satisfaction. Exposure also affects which feedback is observed: unseen items cannot receive the same interaction opportunities.

Avoid treating a vendor's illustrative system description as disclosure of its complete current implementation. Research claims about social-media behavior and legal disputes remain in the original archive pending separate verification.

## Practice

Build a small recommendation list with an explanation for every item. Compare relevance, coverage, and duplicate content against a simple chronological baseline. Assessment: describe cold-start behavior and one feedback loop that could narrow recommendations. Related concepts include [machine learning](/knowledge/machine-learning), [data engineering](/knowledge/data-engineering), and [testing](/knowledge/testing).
