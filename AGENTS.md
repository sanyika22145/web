# Repository Guidelines

## Project Structure & Module Organization
- Current root contents: `README.md` only. There is no `src/`, `tests/`, or `assets/` directory yet.
- When adding code, prefer a clear top-level layout such as `src/` for application code, `tests/` for test code, and `assets/` for static files. Keep top-level clutter minimal.

## Build, Test, and Development Commands
- No build, test, or dev commands are defined in this repository yet (no `package.json`, `Makefile`, or similar).
- If you add tooling, document the canonical commands here and in `README.md`. Example patterns:
  - `npm run dev` for local development
  - `npm test` or `pytest` for tests
  - `npm run lint` or `ruff check` for linting

## Coding Style & Naming Conventions
- No style guide or formatter is configured yet.
- If you introduce a language/toolchain, add a formatter and linter early (e.g., `prettier`/`eslint` for JS, `ruff`/`black` for Python) and record the config files in-repo.
- Use consistent naming with the chosen language conventions (e.g., `camelCase` for JS variables, `snake_case` for Python).

## Testing Guidelines
- No test framework or coverage requirements are defined yet.
- When tests are introduced, keep them close to the code they verify (`tests/` or alongside modules), and use a predictable naming scheme (e.g., `*.test.js`, `test_*.py`).
- Document the primary test command and any required setup.

## Commit & Pull Request Guidelines
- Git history is currently minimal (`Initial commit` only), so there is no established commit message convention.
- Recommended: short, imperative commit messages (e.g., “Add README”).
- PRs should include:
  - A clear description of changes
  - Any related issue references
  - Screenshots or output samples when UI or behavior changes are involved

## Configuration & Security Notes
- No environment or secret management is present. If you add configuration files, avoid committing secrets.
- Prefer `.env.example` for documenting required environment variables.
