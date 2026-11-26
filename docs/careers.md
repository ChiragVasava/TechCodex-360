# Career and skill content

The representative corpus lives in [careers.ts](../content/careers.ts). It contains eleven documented role profiles and a larger searchable role taxonomy. Undocumented entries are visibly marked and do not link to invented articles.

Each profile separates required, common, optional, specialized and employer-dependent skills. Responsibilities, daily work, problems, prerequisites, languages, technologies, tools, hardware, networking, security, infrastructure, mathematics, roadmap milestones, related roles, career directions, projects, interview topics, misconceptions and official reading are explicit fields. Titles and advancement paths are not universal.

Six subject-specific skills include Beginner, Intermediate, Advanced, Expert and Mastery outcomes, exercises, problem classes, assessments and next directions. Mastery is original externally assessed contribution, not an automatic checklist reward. Profiles are **Needs review**, without invented verification dates. Knowledge articles hold technical sources and research provenance.

## Routes

- `/roles`: search documented profiles or the whole taxonomy by title, aliases or area.
- `/roles/[id]`: documented role details and canonical concept links.
- `/skills` and `/skills/[id]`: subject-specific five-level learning guides.
- `/roadmaps`: role selection, optional branches and saved article progress.
- `/roadmaps?role=frontend-developer`: open a role; saving remains explicit.
- `/roadmap`: preserved original roadmap, separate from the new builder.

## Personal state

The builder uses the shared workspace provider. `roadmap.selectedRole` and `roadmap.optionalSteps` are included in JSON backup. Selecting a role never marks articles learned. `Completed` and `Mastered` count toward displayed concept progress; proficiency is independent. Repeated concepts count once. Assessments require evidence in projects or notes; concept completion does not prove role qualification.

Skill journals share their underlying canonical concept state and explicitly identify that association. They do not update article reading position or mark every linked concept learned.

## Adding content

1. Reuse stable canonical concept IDs. Do not duplicate article definitions in profiles.
2. Add a structured role with all fields and its title in the relevant directory group.
3. Give roadmap milestones globally unique IDs and label optional branches explicitly.
4. Link related roles and skills to documented profiles.
5. Treat references as suggested reading until claim-level review supports verification.
6. Write subject-specific exercises and assessment criteria for each skill level.

## Prioritized backlog

- Review profiles against current primary sources and practitioner feedback.
- Expand missing roles from the taxonomy.
- Add deeper validated prerequisite paths and mathematical/electronics foundations.
- Add independent assessment evidence and custom milestone authoring.

The original research stays preserved. Hardware-security and JavaScript/Express discussions support learning themes. Role expectations and assessments are editorial synthesis, not verbatim research or verified hiring requirements.
