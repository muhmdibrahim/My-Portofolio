// 1. Scroll to Top Button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "↑";
scrollToTopButton.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// 2. theme Toggle Button
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