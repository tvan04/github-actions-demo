# GitHub Actions Workshop

Welcome to the GitHub Actions Workshop! This repository is designed to help you learn about GitHub Actions through hands-on exercises.

## 🎯 Learning Objectives

- Understand the basics of Continuous Integration (CI)
- Learn how to create and customize GitHub Actions workflows
- Experience real-world CI scenarios
- Master GitHub Actions concepts through practical exercises

## 🎓 Workshop Exercises

### Exercise 1: Fix the Failing Tests (30 mins)
1. Fork this repository
2. Look at the failing tests in the Actions tab
3. Fix the Calculator class in `app.js`:
   - The `add` function should add numbers (not subtract)
   - The `multiply` function should multiply (not add)
   - The `divide` function should return 'Cannot divide by zero' when b is 0
4. Commit your changes and watch the Actions tab
5. All tests should pass when you're done

### Exercise 2: Enhance the Workflow (45 mins)
1. Open `.github/workflows/main.yml`
2. Add a new job called `lint` that:
   - Runs after the test job
   - Uses the `eslint/action` to check code style
   - Only runs when files in `src/` or `tests/` change
3. Add these environment variables to the workflow:
   - `NODE_ENV: 'test'`
   - `LOG_LEVEL: 'debug'`
4. Add a step that creates a comment on the PR with the test results

### Exercise 3: Create a Deployment Workflow (45 mins)
1. Create a new file `.github/workflows/deploy.yml`
2. This workflow should:
   - Run only when code is pushed to `main`
   - Build the application
   - Create a release using GitHub's API
   - Upload the built code as a release asset
3. Add branch protection rules:
   - Require the CI workflow to pass
   - Require code review
   - No direct pushes to main

## 🚀 Getting Started

1. Fork this repository
2. Clone your fork locally
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run tests locally:
   ```bash
   npm test
   ```

## 📝 Notes

- Watch the Actions tab in your GitHub repository to see your workflows in action
- Each failed test provides hints about what needs to be fixed
- Try to complete each exercise before looking at the solutions branch




