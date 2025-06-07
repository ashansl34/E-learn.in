# EduStream - Curated Learning Platform

EduStream is a modern, web-based application designed to provide a structured learning experience by organizing educational YouTube videos into subjects, units, and daily lessons. It features a sleek, dark-mode SaaS interface with a focus on usability and a great user experience.

This project comes in two versions:
1.  A **static `index.html`** file that can be hosted for free on services like GitHub Pages.
2.  A **dynamic version using `server.js`** for local development or hosting on a Node.js-capable server.

---

## ✨ Features

- **Structured Curriculum**: Content is organized into 4 subjects (Physics, Chemistry, Biology, Maths), 15 units per subject, and 10 daily lessons per unit.
- **Sleek SaaS UI**: A professional, dark-themed design with gradient colors, micro-animations, and a responsive layout.
- **Embedded Video Player**: Watch videos directly on the site in a clean, distraction-free modal.
- **Fully Static & Deployable**: The primary `index.html` file is self-contained and ready for easy hosting.
- **Ad Placeholders**: Pre-defined slots for banner ads are integrated into the design.

---

## 🚀 How to Run and Deploy

You have two options for running this project.

### Option 1: Deploy to GitHub Pages (Recommended & Easiest)

This method hosts your website online for free. It uses the static `index.html` file and does **not** require `server.js`.

1.  **Create a GitHub Repository:**
    - Log in to GitHub and create a new **public** repository. You can name it whatever you like (e.g., `edustream-website`).

2.  **Upload the File:**
    - In your new repository, click `Add file` > `Upload files`.
    - Drag and drop the **`index.html`** file into the box.
    - Commit the changes.

3.  **Enable GitHub Pages:**
    - In your repository, go to the `Settings` tab.
    - On the left menu, click on `Pages`.
    - Under "Build and deployment", set the `Source` to **"Deploy from a branch"**.
    - Under "Branch", select `main` and keep the folder as `/ (root)`. Click **Save**.

4.  **Visit Your Live Site:**
    - Wait a minute or two for GitHub to build and deploy your site. The status banner on the Pages screen will turn green when it's ready.
    - Your site will be live at: `https://<your-username>.github.io/<your-repository-name>/`

### Option 2: Run Locally with Node.js

This method runs the project on your personal computer using the `server.js` file. This is useful for development and testing.

#### Prerequisites
- You must have [Node.js](https://nodejs.org/) installed (which includes npm).

#### Local Setup
1.  **Create a Project Folder:**
    - Create a new folder on your computer and place the `index.html` and `server.js` files inside it.

2.  **Install Dependencies:**
    - Open a terminal or command prompt in your project folder.
    - Run the following command to install the `express` library:
      ```bash
      npm install express
      ```

3.  **Start the Server:**
    - In the same terminal, run this command:
      ```bash
      node server.js
      ```

4.  **View in Browser:**
    - You will see a message: `🚀 Server is running at http://localhost:3000`.
    - Open your web browser and navigate to **[http://localhost:3000](http://localhost:3000)** to see the application.
