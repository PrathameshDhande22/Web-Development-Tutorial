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
 * Used by the Register and Reset Password pages.
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
