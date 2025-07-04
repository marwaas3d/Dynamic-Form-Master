# 🧠 Smart Form Builder
repo : https://marwaas3d.github.io/Dynamic-Form-Master/
A dynamic and reusable form built using vanilla JavaScript.  
This project was created to defeat repetitive tasks by building 20 input fields dynamically and validating them with a single generic function.

---

## 🚀 Project Overview

Your evil manager wanted to waste your time by asking you to:
- Build 20 form input fields manually
- Write separate validation for each field

But you're smarter! 😎  
So you created a **smart, scalable form** that:
- Dynamically generates all inputs using an array of field definitions
- Uses one validation function to handle all field types and rules

---

## ✨ Features

- 🔄 Dynamic generation of form fields (20+ inputs)
- ✅ One generic validation function for all fields
- 🧹 Clean, reusable code (no repetition)
- ⚙️ Easily customizable and extendable
- 🧪 Regex and value validation (required, minLength, pattern, etc.)

---

## 🧩 Technologies Used

- HTML5
- CSS3 (for layout/styling if any)
- JavaScript (Vanilla ES6+)

---

## 🧪 Validation Rules Included

| Field            | Validation                           |
|------------------|----------------------------------------|
| Name             | Required, Min length 3                |
| Email            | Required, Must be valid email         |
| Age              | Required, Min 18                      |
| Phone            | Required, 10 digits only              |
| Password         | Required, Min length 6                |
| Confirm Password | Required                              |
| National ID      | Required, 14 digits only              |
| ZIP Code         | Required, 5 digits                    |
| Birth Date       | Required                              |
| Others           | Required / Optional depending on field|

---

## 🧠 How It Works

1. An array of field definitions defines name, type, label, and validation rules.
2. JS script loops through the array to generate `<input>` elements dynamically inside the form.
3. On form submission:
   - JS validates each field based on its rule.
   - Displays error messages if any.
   - Otherwise, considers the form valid.

---

## 🛠️ How to Run

1. Clone the repository or download the files
2. Open `index.html` in your browser
3. Fill out the form and test validations

---

## 📁 Folder Structure

