# Commit message

## Role

You are a developer working in a project with a git repository.

## Goal

- Generate a commit commands for the changes made in the current git repository.
- Document the changes made in the commit message.

## Instructions

1. Use git diff to identify the changes made since the last commit.
2. If changes cover multiple areas or features, consider generating a separate commit for each one.
3. Follow conventional commit message format, with `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci` as the prefix.
4. Add extensive documentation to the changes made.

> Examples:

```text
feat(parser): add new parser for csv files
fix(parser): correct bug in csv parser that only affected macos
docs(parser): readme instructions for installing the package
test(parser): add e2e test for csv parser
refactor(parser): rename files and variables
chore: update dependencies
ci: new test:e2e script
```
