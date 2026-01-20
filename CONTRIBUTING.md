Here's the updated `CONTRIBUTION.md` file with the correct license information (Apache License 2.0) and a few refinements to make it more polished.

---

# 📚 **Jaipur National University Virtual Classroom - Contribution Guide**

Welcome to the **Jaipur National University Virtual Classroom** project! 🎉 We’re excited to have you here. Your contributions will help make this platform a better, more accessible virtual classroom for everyone.

Please take a moment to review this guide to understand how you can contribute effectively.

---

## 📝 **Table of Contents**
1. [Code of Conduct](#-code-of-conduct)
2. [How Can I Contribute?](#-how-can-i-contribute)
3. [Setting Up the Development Environment](#-setting-up-the-development-environment)
4. [Pull Request Process](#-pull-request-process)
5. [Reporting Issues](#-reporting-issues)
6. [Community and Support](#-community-and-support)

---

## 🤝 **Code of Conduct**
We are committed to providing a welcoming and inclusive experience for everyone. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful and professional in all interactions.

---

## 💡 **How Can I Contribute?**
There are many ways to contribute to Jaipur National University:
- **Bug Fixes:** Identify and fix bugs in the frontend or backend.
- **New Features:** Propose and implement new features (e.g., student-teacher chat, quiz improvements).
- **Documentation:** Improve the README or other documentation files.
- **Testing:** Add unit or integration tests to ensure stability.
- **Styling:** Improve the user interface and user experience (UI/UX).

---

## ⚙️ **Setting Up the Development Environment**

1. **Fork the Repository:**
   Click the **Fork** button at the top right of the github page.

2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/yours7himanshu/Jaipur-National-University-Virtual-Classroom.git
   cd Jaipur-National-University-Virtual-Classroom
   ```

3. **Install Dependencies:**
   - **Backend:** `cd server && npm install`
   - **Student Client:** `cd ../client && npm install`
   - **Admin Panel:** `cd ../admin && npm install`

4. **Add Environment Variables:**
   Create a `.env` file in the `server` directory and add your keys (see [README.md](README.md) for more details).

5. **Run Locally:**
   Execute `npm run dev` in each of the three directories (`server`, `client`, and `admin`).

---

## 🚀 **Pull Request Process**

1. **Create a Branch:**
   Use a descriptive name: `git checkout -b feature/your-feature-name` or `git checkout -b fix/bug-description`.

2. **Make Changes:**
   Write clean, documented, and well-tested code.

3. **Commit Your Changes:**
   Follow meaningful commit message conventions:
   `git commit -m "feat: add real-time notification system"`

4. **Sync with Upstream:**
   Before pushing, ensure your local main branch is up-to-date with the original repository and merge it into your feature branch.

5. **Push and Open a PR:**
   Push your changes to your fork and open a Pull Request against the `main` branch of the original repository.

---

## 🐛 **Reporting Issues**
If you find a bug or have a feature request:
1. Search the [Issues](https://github.com/yours7himanshu/JNU-Jaipur-Virtual-Classroom/issues) tab to see if it has already been reported.
2. If not, open a new issue.
3. Provide as much detail as possible: steps to reproduce, screenshots, and expected results.

---

## ❤️ **Thank You!**
We appreciate your contributions! 💖 Let’s build **Jaipur National University Virtual Classroom** together! 🚀
following branch naming conventions:

| Branch Type  | Naming Convention       | Example                     |
|--------------|-------------------------|-----------------------------|
| Feature      | `feature/feature-name`  | `feature/user-authentication` |
| Bug Fix      | `fix/bug-description`   | `fix/login-error`            |

---

## ✍️ **Coding Standards**
- Use **ESLint** for linting.  
- Follow **Prettier** formatting rules.  
- Write clean, well-documented code.  
- Ensure your code passes all tests before submitting a pull request.

---

## 📄 **License**
This project is licensed under the **Apache License 2.0**. By contributing, you agree that your contributions will be licensed under the same license.

For more details, see the [LICENSE](LICENSE) file.

---

We appreciate your contributions! 💖 Let’s build **Jaipur National University Virtual Classroom** together! 🚀

--- 

