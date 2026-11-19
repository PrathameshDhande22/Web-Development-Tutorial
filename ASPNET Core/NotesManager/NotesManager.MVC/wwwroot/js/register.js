$(function () {
    const $form = $("#register-form");
    const $fullName = $("#FullName");
    const $email = $("#Email");
    const $password = $("#Password");
    const $confirmPassword = $("#ConfirmPassword");

    const crossIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 15.5l-10-10zm0-10l-10 10" /></svg>`;
    const tickIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m5 12l5 5L20 7" /></svg>`;

    const passwordRules = [
        { hintId: "#character-hint", isValid: (value) => value.length >= 8 },
        { hintId: "#uppercase-hint", isValid: (value) => /[A-Z]/.test(value) },
        { hintId: "#lowercase-hint", isValid: (value) => /[a-z]/.test(value) },
        { hintId: "#number-hint", isValid: (value) => /[0-9]/.test(value) },
        { hintId: "#symbol-hint", isValid: (value) => /[^A-Za-z0-9]/.test(value) }
    ];

    /**
     * Updates each password hint to show a green tick when its rule passes, or a cross when it fails.
     * @param {String} password - The password typed by the user
     * @returns {Boolean} True when every password rule passes
     */
    function updatePasswordHints(password) {
        let allRulesPassed = true;

        passwordRules.forEach((rule) => {
            const passed = rule.isValid(password);
            const $hint = $(rule.hintId);

            $hint.toggleClass("hint-valid", passed);
            $hint.find("svg").replaceWith(passed ? tickIcon : crossIcon);

            if (!passed) {
                allRulesPassed = false;
            }
        });

        return allRulesPassed;
    }

    /**
     * Shows an error message under a field, or clears it when the message is empty.
     * @param {String} fieldName - Name of the model property, e.g. "Email"
     * @param {String} message - Error message to show, or an empty string to clear it
     */
    function setFieldError(fieldName, message) {
        $(`[data-valmsg-for="${fieldName}"]`).text(message);
    }

    /**
     * Checks every field of the register form and shows an error under each invalid field.
     * The rules match RegisterValidator on the server.
     * @returns {Boolean} True when all fields are valid
     */
    function validateForm() {
        const fullName = $fullName.val().trim();
        const email = $email.val().trim();
        const password = $password.val();
        const confirmPassword = $confirmPassword.val();

        let fullNameError = "";
        if (!fullName) {
            fullNameError = "Full Name is required";
        } else if (fullName.length < 5 || fullName.length > 50) {
            fullNameError = "Full name must be between 5 to 50 characters only";
        }
        setFieldError("FullName", fullNameError);

        let emailError = "";
        if (!email) {
            emailError = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError = "Valid email address is required";
        }
        setFieldError("Email", emailError);

        let passwordError = "";
        if (!password) {
            passwordError = "Password is required";
        } else if (password.length > 40) {
            passwordError = "Password must be 40 characters or less";
        } else if (!updatePasswordHints(password)) {
            passwordError = "Password must meet all the requirements above";
        }
        setFieldError("Password", passwordError);

        let confirmPasswordError = "";
        if (!confirmPassword) {
            confirmPasswordError = "Confirm Password is required";
        } else if (confirmPassword !== password) {
            confirmPasswordError = "Confirm password must be same as password";
        }
        setFieldError("ConfirmPassword", confirmPasswordError);

        return !fullNameError && !emailError && !passwordError && !confirmPasswordError;
    }

    // Entering the password
    $password.on("input", function () {
        updatePasswordHints($(this).val());
        setFieldError("Password", "");
    });

    // Submit the form
    $form.on("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    updatePasswordHints($password.val());
});
