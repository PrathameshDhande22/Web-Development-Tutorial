$(function () {
    //#region Theme Toggle
    let themetoggle$ = $("#theme-toggle");  // Theme toggle

    // Save the theme in the localstorage
    let current_theme = localStorage.getItem("notewell-theme");
    if (current_theme) {
        $("html").attr("data-theme", current_theme);
    } else {
        localStorage.setItem("notewell-theme", "light");
    }

    themetoggle$.on("click", function () {
        current_theme = localStorage.getItem("notewell-theme");
        let changethemeto = current_theme == "light" ? "dark" : "light";
        $("html").attr("data-theme", changethemeto);
        localStorage.setItem("notewell-theme", changethemeto);
    })
    //#endregion
})