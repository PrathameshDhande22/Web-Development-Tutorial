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
        changeLogo(changethemeto);
        localStorage.setItem("notewell-theme", changethemeto);
    })

    /**
     * Change the logo of the navbar based on the theme Provided
     * theme: 'dark' or 'light' only supported. 
     */
    function changeLogo(theme) {
        let image_url = theme === "dark" ? "/images/logo-dark.png" : "/images/logo.png"
        $("#nav-logo > img").attr("src", image_url);
    }
    //#endregion

    //#region Toast hide
    setTimeout(() => {
        $("#toast-message").addClass("hidden");
    }, 3000)
    //#endregion
})