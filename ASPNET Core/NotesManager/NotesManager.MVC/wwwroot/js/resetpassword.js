$(function () {
    const $password = $("#Password");

    $password.on("input", function () {
        updatePasswordHints($(this).val());
    });

    updatePasswordHints($password.val());
});
