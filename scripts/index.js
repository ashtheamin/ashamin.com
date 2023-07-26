function applytheme() {
    if (localStorage.getItem("theme") === "light") {
        const html = document.getElementById("html");
        html.style.color = "#2C1728";
        html.style.backgroundColor = "#FFDDF2";
    }

    if (localStorage.getItem("theme") === "dark") {
        const html = document.getElementById("html");
        html.style.color = "#FFDDF2";
        html.style.backgroundColor = "#2C1728";
    }
}

function init() {
    function toggleTheme() {
        console.log('button hit');
        if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
        }
        else {
            localStorage.setItem("theme", "light");
        }
        applytheme();
    }
    document.getElementById("toggleTheme").addEventListener("click", toggleTheme, true)
}

if (localStorage.getItem("theme") == "") {
    localStorage.setItem("theme") = "dark";
}

document.addEventListener('DOMContentLoaded', init, init);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const colorScheme = e.matches ? "dark" : "light";
    localStorage.setItem("theme", colorScheme);
    applytheme();
});
applytheme();

