# Weather_Shopper_Automation_Framework

## 🌟 Overview
This project automates end-to-end testing for the **Weather Shopper** web application using **Cypress**. The framework is designed with the **Page Object Model (POM)** design pattern, providing modular and reusable components.

---

## 📋 Features
- Comprehensive test coverage for product selection, cart validation, and checkout.
- Modular design with reusable components using Page Object Model.
- Parallel testing support for improved efficiency.
- Cross-browser compatibility.
- Fully documented setup and execution instructions.

---

## 🛠️ Prerequisites
1. **Node.js**: Install from [Node.js Official Website](https://nodejs.org/).
2. **Cypress**: Installed automatically via `npm install`.

---

## 🚀 Setup Instructions

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Weather_Shopper_Automation_Framework
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Tests
- **Headed Mode**:
  ```bash
  npx cypress open
  ```
- **Headless Mode**:
  ```bash
  npx cypress run
  ```

---

## 🧪 Test Structure
### Directory Layout
```
Weather_Shopper_Automation_Framework/
├── cypress/
│   ├── integration/         # Test scripts
│   │   └── weatherShopper/  # Weather Shopper test cases
│   │       └── endToEnd.spec.js
│   ├── support/             # Reusable helpers and Page Objects
│   │   └── pages/           # Page Object files
│   ├── plugins/             # Plugins for Cypress
│   ├── fixtures/            # Test data (if needed)
├── cypress.json             # Cypress configuration file
├── package.json             # Project metadata and dependencies
├── README.md                # Documentation
└── node_modules/            # Node.js dependencies
```

---

## 🧑‍💻 Contribution
Feel free to fork this repository and submit pull requests. For queries or suggestions, reach out to:
**[alirezaaedalat@gmail.com](mailto:alirezaaedalat@gmail.com)**.

---

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
