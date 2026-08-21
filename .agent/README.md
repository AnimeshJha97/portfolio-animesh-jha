# .agent

Working folder for the portfolio rebuild. Sprint plan, task specs, and the
reference material every task depends on.

## Layout

```
.agent/
  README.md                     you are here
  decisions.md                  locked architectural decisions + rationale
  sprint-01-studio-rebuild.md   the sprint: task index, order, status board
  tasks/T01..T15.md             one spec per task
  reference/
    design-spec.md              tokens + per-section spec from the Claude Design
    content-inventory.md        every piece of real copy that must survive teardown
```

## How to run a task

1. Open `sprint-01-studio-rebuild.md`, take the first task whose status is
   `READY` (dependencies all `DONE`).
2. Open `tasks/T##-*.md`. Work only what that file scopes. Anything you notice
   outside the scope goes in the sprint file's **Parking lot**, not into the diff.
3. Satisfy every line of the task's **Acceptance criteria**.
4. Run the verification commands in the task. `npx tsc --noEmit` and
   `npx next build` must both pass before a task is `DONE`.
5. Flip the task's status in the sprint file and commit.

## Conventions

- One task, one commit. Commit message: `T##: <task title>`.
- Content never gets hardcoded into a component. It lives in `src/content/`
  and is imported. If a section needs a new field, add it to the content type
  first.
- No new runtime dependency without noting it in the task file.
- Design values come from `reference/design-spec.md`, not from eyeballing the
  old code.
