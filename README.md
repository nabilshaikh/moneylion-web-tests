# moneylion-web-tests

This Cypress + Cucumber based sample test automation project is implemented with the help of JavaScript and uses the [BDD](https://cucumber.io/docs/bdd/) approach. This project aims to test the [MoneyLion](https://www.moneylion.com) page and the [Reqres](https://reqres.in/) APIs.

## Description

#### Project Folder Structure:

```
├── allure-report (folder to support and generate allure based HTML report)
├── allure-results (contains all the tests results in json format)
├── cypress
│   └── /e2e/ui/specs (feature files)
│   └── /e2e/ui/step-definitions (tests code)
│   └── /e2e/ui-identifiers (all page's elements/locators goes here)
│   └── /fixtures (All test data goes here if any)
│   └── /screenshots (capture screenshots on failure)
│   └── /support (contains all the supporting test files)
├── cypress.config.js (cypress global configuration)

```

Note:<br> 
The <ins>allure-report</ins> & <ins>allure-results</ins> directories get created only after the first test run, and these two will get reset and recreated each time the test execution starts.<br>

#### Salient Features:

- Implemented using the latest version of Cypress [(v13.14.2)](https://docs.cypress.io/guides/references/changelog#13-14-2) as of today.
- Based on Cucumber / Gherkin standard.
- Cross-browser support.
- Support various viewports such as desktop, tablet, and mobile.
- Based on POM design pattern.
- Fully automated and provides both console and HTML report using [Allure](https://www.npmjs.com/package/@shelex/cypress-allure-plugin).
- Ability to take screenshots on failure.
- Ability to retry failed tests to help reduce test flakiness.
- Configured [linter](https://www.npmjs.com/package/eslint-plugin-cypress) to check for errors, syntax issues, and potential bugs that could cause the program to break or behave unexpectedly.
- Moreover, to learn how this project evolves throughout the development stage, please refer to the [PRs](https://github.com/nabilshaikh/moneylion-web-tests/pulls?q=is%3Apr+is%3Aclosed) in chronological order.

### But, why BDD?

Behaviour-Driven Development (BDD) is a way for software teams to work that closes the gap between business people and technical people by increasing the collaboration so that they can manage and deliver software development projects more effectively. BDD ensures that the development projects remain focused on the actual needs of the business while, at the same time, meeting the requirements of the user.

The BDD approach is often divided into two main parts:

- The first part involves using examples that are written in ubiquitous language as a way to illustrate behaviors or the different ways users interact with the product.
- The second part is the practice of utilizing those examples as a basis for automated tests. In addition to allowing developers to check functionality for the user, it also ensures that the overall system works precisely as defined by the business for the project’s entire lifetime.

...You can also check the [documentation](https://cucumber.io/docs/bdd/) to learn more about the BDD approach.


<right><p align="right">(<a href="#moneylion-web-tests">back to top</a>)</p></right>

## Getting Started

### Installation:

** *Please read the [prerequisites](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) if you encounter any issues during installation.*

1. Clone the project.
2. Open the project using [Visual Studio Code](https://code.visualstudio.com/download) or any IDE of your choice.
3. Now, go to terminal and run `npm install`.<br>

### How To Run Tests?

(A) Headed Mode:

- To run tests in browser/headed mode, run `npm run cy:open` command in terminal. This will open an interactive cypress test runner.

(B) Headless Mode:

- To run tests in headless mode, <br>
        * `npm run cy:run` - run tests locally. <br>
        * `npm run cy:run:report` - run tests locally + generates the allure report. <br>
        * `npm run cy:run:report:open` - run tests locally + generates the allure report + opens the report automatically in browser using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). <br>
        **(To view all possible scripts, navigate to the 'package.json' file in the project).**

<ins>Note</ins>:-<br>
To view allure based HTML report, expand `allure-report` directory and open the `index.html` file using Live Server.</br>

Once the test execution is complete, this is how the test report(s) would look like,

<ins>Console report</ins>:

<kbd><img src="https://github.com/user-attachments/assets/d1d7506e-ff56-4af8-a0d9-042a96e40ccc" alt="Console Report" border="1" width=800></kbd>

<br>

<ins>Allure report</ins>:

<kbd><img src="https://github.com/user-attachments/assets/d9a23147-9bed-4bd6-817f-71a0b7e307d4" alt="Allure HTML Report" border="1" width=800></kbd>

<br>

<right><p align="right">(<a href="#moneylion-web-tests">back to top</a>)</p></right>

## Miscellaneous

**Some of the best practices writing features:**

1. Each scenario should be short & independent of each other. If the scenario is bit complex, split them into two.
2. The scenarios should be concise and to the point, so that the reader can quickly grasp the intent of the test.
3. Avoid “I” in step definitions. It is recommend writing steps in third person as this will remind you about the user's role in the application. 
4. Don’t use both first-person and third-person pronouns together in one scenario.
5. When you encounter a step which contains two actions, break them into two using 'And' keyword. There may be reasons for conjunctive steps. However, most of the time it’s better to avoid them.
6. If you are using the same steps at the beginning of all scenarios of a feature, put them into the feature’s Background as Background steps are run before each scenario. However, if you want to run a block of code before/after every scenario then cucumber hooks (such as `@Before` & `@After`) would be the ideal choice.
7. Make use of 'Scenario Outline' if there is a need to re-run the same scenario on multiple test data. But scenario outlines should focus on one behaviour at a time and use only the necessary variations.
8. Cucumber features/scenarios should be tagged properly so that they can be selected / grouped for automated test runs.

<right><p align="right">(<a href="#moneylion-web-tests">back to top</a>)</p></right>

## Contact

<a href="mailto:nabilshaikh26@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /> &nbsp; <a href="https://www.github.com/nabilshaikh"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/> &nbsp; <a href="https://www.gitlab.com/nabilshaikh26"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white"/> &nbsp; <a href="https://www.linkedin.com/in/nabil-shaikh-5362b71b3/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>

<right><p align="right">(<a href="#moneylion-web-tests">back to top</a>)</p></right>