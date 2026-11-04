$(function () {
    //#region Theme Toggle
    var themetoggle$ = $("#theme-toggle");  // Theme toggle

    themetoggle$.on("click", function () {
        var current_theme = $("body").data("theme")
        console.log(current_theme);
    })
   //#endregion
})