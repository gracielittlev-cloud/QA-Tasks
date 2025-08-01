# Playwright Automated Testing Suite

## 📌 Project Overview

This project contains automated tests written with **Playwright** covering both:

- **Part 1: Web UI Testing** — validating file upload functionality  
- **Part 2: API Testing** — validating REST API endpoints of the public JSONPlaceholder service

The goal is to demonstrate skills in UI test design, API testing, automation scripting, and reporting.

---

## 🔧 Tech Stack

- [Playwright](https://playwright.dev/) (Test runner + API request support)  
- Node.js (v16 or above)  
- TypeScript  

---

## 📁 Project Structure

QA-Tasks/
├── test-files/ # Sample files for UI upload tests
│ ├── sample.txt
│ ├── image.png
│ ├── empty.txt
│ └── test@#$.txt
├── tests/
│ ├── fileUpload.spec.ts # Part 1: UI tests for file upload
│ └── apiPosts.spec.ts # Part 2: API tests for JSONPlaceholder endpoints
├── playwright.config.ts
├── package.json
└── README.md # This file


---

## ✅ Part 1: Web UI Testing

### Tested Feature

File upload page on [https://the-internet.herokuapp.com/upload](https://the-internet.herokuapp.com/upload)

### Covered Scenarios

| Test Case ID | Description                                | Type       |
|--------------|--------------------------------------------|------------|
| TC01         | Upload a valid `.txt` file                 | Positive   |
| TC02         | Upload a `.png` image file                 | Positive   |
| TC03         | Submit without selecting any file          | Negative   |
| TC04         | Upload an empty file (0 bytes)             | Boundary   |
| TC05         | Upload a file with special characters in filename | Boundary   |

---

## ✅ Part 2: API Testing

### Tested API

Public API from JSONPlaceholder: [https://jsonplaceholder.typicode.com/]

### Covered Endpoints

| Endpoint           | Description                       |
|--------------------|----------------------------------|
| `GET /posts`       | Retrieve list of posts            |
| `GET /posts/{id}`  | Retrieve a single post by ID      |
| `POST /posts`      | Create a new post                 |
| `PUT /posts/{id}`  | Update an existing post           |
| `DELETE /posts/{id}` | Delete a post                    |

---

## 🚀 How to Run Tests

### 1. Install dependencies

```bash
npm install

2. Run all tests (UI + API)
bash

npx playwright test

3. Run UI tests only
bash

npx playwright test tests/fileUpload.spec.ts

4. Run API tests only
bash

npx playwright test tests/apiPosts.spec.ts

5. View HTML report after test run
bash

npx playwright show-report

📝 Notes
UI tests use Playwright’s powerful browser automation features.

API tests leverage Playwright’s built-in request API to perform HTTP operations and validate responses.

Tests are designed with maintainability and extensibility in mind, using test.describe() for logical grouping.

Test data files for upload are stored under test-files/.

This suite can be integrated into CI pipelines and extended with additional cases as needed.

📎 Author
Grace Ju
QA Engineer Candidate
