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


// 2. add blog form
const blogContainer = document.querySelector('.blog .content');
const addBlogButton = document.getElementById('add-blog');

addBlogButton.addEventListener('click', () => {
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;

    if (title && content) {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';

        blogCard.innerHTML = `
            <div class="icon">
                <i class="fas fa-blog"></i>
            </div>
            <div class="blog-info">
                <h3>${title}</h3>
                <p>${content}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;

        blogContainer.appendChild(blogCard);

        // Clear input fields
        document.getElementById('blog-title').value = '';
        document.getElementById('blog-content').value = '';
    } 
    else {
        alert('Please fill out both fields.');
    }
});

// 3. theme Toggle Button
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
