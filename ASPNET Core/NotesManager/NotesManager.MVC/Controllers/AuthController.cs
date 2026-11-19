using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.Models.Auth;

namespace NotesManager.MVC.Controllers
{
    [Route("[action]")] // Specifies that the route for this controller will be based on the action name
    public class AuthController : Controller
    {
        // injected using the validator
        private IValidator<RegisterUser> _validator;

        public AuthController(
            IValidator<RegisterUser> validator
        )
        {
            this._validator = validator;
        }

        #region Login
        public IActionResult Login()
        {
            return View(new LoginUser());
        }
        #endregion

        #region Register User
        [HttpGet]
        public IActionResult Register()
        {
            return View(new RegisterUser());
        }

        // Action method with Fluent Validation
        [HttpPost]
        public IActionResult Register(RegisterUser registeruser)
        {
            // using the Validator by injected
            var result = _validator.Validate(registeruser);
            if (result.IsValid)
            {
                return RedirectToAction("Index", "Home");
            }

            result.Errors.ForEach(err => ModelState.AddModelError(err.PropertyName, err.ErrorMessage));

            return View(registeruser);
        }
        #endregion

        #region Forgot Password
        [HttpGet]
        public IActionResult ForgotPassword()
        {
            return View(new ForgotPasswordViewModel());
        }

        [HttpPost]
        public IActionResult ForgotPassword(ForgotPasswordViewModel model)
        {
            return View(model);
        }
        #endregion
    }
}
