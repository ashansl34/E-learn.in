# EduStream - Curated Learning Platform

EduStream is a modern, single-page web application for watching curated educational videos. It features a sleek, dark-mode SaaS interface and is designed to be hosted for free on static platforms like GitHub Pages.

---

## 🚀 Live Demo

A live version of this project is deployed on GitHub Pages.

**(You can add the link to your live site here once it's deployed!)**

---

## 📁 About The Files in This Repository

This repository contains two ways to run the project:

*   **`index.html`**: This is the main, self-contained static website. It includes all the necessary HTML, CSS, and JavaScript to run directly in a browser. **This is the file used for the live GitHub Pages deployment.**

*   **`server.js`**: This is a simple Node.js Express server. It is **only for running the project on your local machine** for development or testing purposes. It is **not** used by the live GitHub Pages site.

*   **`readme.md`**: This instruction file.

---

## 🛠️ How to Use This Project

You can either view the live site or run the project locally on your machine.

### Option 1: Deploying Your Own Live Version on GitHub Pages

This is the easiest way to host your own version of the site for free.

1.  **Create a Repository:** Create a new public repository on your GitHub account.
2.  **Upload Files:** Upload the `index.html`, `server.js`, and `readme.md` files to your new repository.
3.  **Enable GitHub Pages:**
    *   In the repository `Settings`, go to the `Pages` tab.
    *   Set the `Source` to **"Deploy from a branch"**.
    *   Select the `main` branch and `/ (root)` folder. Click **Save**.
4.  **Done!** After a few minutes, your site will be live at `https://<your-username>.github.io/<your-repository-name>/`. GitHub Pages will automatically use the `index.html` file.

### Option 2: Running the Project Locally with Node.js

This is useful if you want to modify the code on your own computer.

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) installed.

2.  **Clone or Download:** Get the files from this repository onto your computer.

3.  **Install Dependencies:**
    *   Open a terminal or command prompt in the project's folder.
    *   Run the command:
      ```bash
      npm install express
      ```

4.  **Start the Server:**
    *   In the same terminal, run:
      ```bash
      node server.js
      ```

5.  **View the Site:**
    *   Open your web browser and go to **[http://localhost:3000](http://localhost:3000)**.
