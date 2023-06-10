const btnDarkMode = document.querySelector(".dark-mode__btn");

// 1. Checking the dark theme at the level of system settings
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode__btn--active");
	document.body.classList.add("dark");
}

// 2. Dark theme test
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode__btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode__btn--active");
    document.body.classList.remove("dark");
}

// If system settings change, change theme
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode__btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode__btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

// Turn on night mode by button
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode__btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("current");
  navMenu.classList.toggle("current");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("current");
    navMenu.classList.remove("current");
  })
);