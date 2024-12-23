# My-Portofolio
A simple and responsive portfolio website showcasing projects, skills, and contact information, built with HTML, CSS, JavaScript, and Bootstrap.

# Muhammed Ibrahim Portfolio Website

This repository contains the source code for my personal portfolio website. The website is designed to showcase my skills, projects, and provide ways to connect with me. It is built using HTML, CSS, Bootstrap and JavaScript.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [JavaScript Features](#javascript-features)
- [Contact Information](#contact-information)

## Features

- **Responsive Design**: Optimized for various screen sizes and devices.
- **Skills Section**: Displays key skills with icons and descriptions.
- **Projects Section**: Highlights significant projects with brief descriptions and links for more details.
- **Contact Section**: Includes contact information such as phone and email with clickable links.
- **Social Media Links**: Direct links to my LinkedIn, GitHub, Instagram, and YouTube profiles.
- **Downloadable CV**: Provides an option to download my CV.

## Technologies Used

- **HTML5**: Structure of the website.
- **CSS3**: Styling, including responsive design.
- **JavaScript**: Interactive features and functionality.
- **Font Awesome**: Icons for visual enhancements.
- **BootStrap**: Framework for responsive design, layout, and pre-built components such as buttons to enhance the user interface
- **Google Fonts**: Poppins font for a modern look.

## Setup Instructions

1. Clone this repository:
   ```bash
  (https://github.com/muhmdibrahim/My-Portofolio.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Open the `index.html` file in your browser to view the website locally.

## Project Structure

```
portfolio-website/
├── index.html        # Main HTML file
├── style.css         # CSS file for styling
├── main.js           # JavaScript file for interactivity
└── README.md         # Documentation
```

## JavaScript Features

### 1. Navigation Scroll Effect
- Smooth scrolling to sections when navigation links are clicked.

### 2. Dynamic Project Details
- JavaScript dynamically enhances project descriptions and links.

### 3. Interactive Animations
- Hover effects and transitions for buttons and cards.

### Example Code Snippets from `main.js`:
```javascript
// theme Toggle Button
const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = "🌙 Dark";
themeToggleButton.classList.add('theme-toggle');
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = "☀️ Light";
    } else {
        themeToggleButton.textContent = "🌙 Dark";
    }
});
```

## Contact Information

- **Phone**: +20 101 393 7518
- **Email**: [mibrahimmanagement@gmail.com](mailto:mibrahimmanagement@gmail.com)
- **LinkedIn**: [linkedin.com/in/hemaa-ai](https://www.linkedin.com/in/hemaa-ai/)
- **GitHub**: [github.com/muhmdibrahim](https://github.com/muhmdibrahim)

---
Feel free to explore the code and suggest improvements or report issues. Contributions are always welcome!
