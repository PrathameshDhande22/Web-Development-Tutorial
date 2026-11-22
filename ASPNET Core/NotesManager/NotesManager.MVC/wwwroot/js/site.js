$(function () {
    //#region Theme Toggle
    let themetoggle$ = $("#theme-toggle");  // Theme toggle

    // Save the theme in the localstorage
    let current_theme = localStorage.getItem("notewell-theme");
    if (current_theme) {
        $("html").attr("data-theme", current_theme);
        changeLogo(current_theme);
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

    //#region Toast
    const toastClasses = {
        success: "alert-success",
        info: "alert-info",
        error: "alert-error"
    };

    const toastIcons = {
        success: '<svg xmlns="http://www.w3.org/2000/svg" class="size-5 text-green-500" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" /></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" class="size-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor"><g fill="currentColor"><path fill-rule="evenodd" d="M10 7a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V9a2 2 0 0 1 2-2Z" clip-rule="evenodd" /><path d="M12 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" /></g></svg>',
        error: '<svg xmlns="http://www.w3.org/2000/svg" class="size-5 text-red-600" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z" /></svg>'
    };

    function dismissToast(toast) {
        setTimeout(() => {
            $(toast).fadeOut(200, function () {
                $(this).remove();
            });
        }, 3000);
    }

    window.showToast = function (message, type = "info") {
        const $container = $(".toast").first();
        if (!$container.length || !message) {
            return;
        }

        const alertClass = toastClasses[type] || toastClasses.info;
        const iconHtml = toastIcons[type] || toastIcons.info;

        const $toast = $("<div>", {
            class: `alert ${alertClass} z-9999 bg-white text-gray-800`,
            "data-toast": ""
        }).html(`${iconHtml}<span>${message}</span>`);

        $container.append($toast);
        dismissToast($toast);
    };

    $(".toast [data-toast]").each(function () {
        dismissToast(this);
    });
    //#endregion
})
