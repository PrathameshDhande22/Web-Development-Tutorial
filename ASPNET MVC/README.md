# ASP.NET MVC Tutorial

These Repository contains the tutorial Files for the MVC Tutorial Framework later tutorial will be based on MVC Core supporting .NET 8 SDK Currently the Project supports or Tutorial File Supports the .NET 4.8 Framework which is older.

**Note:** Before Starting reading the Tutorial You must be familiar with **[Entity Framework](https://github.com/PrathameshDhande22/My-tutorial-References/tree/main/Entity%20Framework)** The whole tutorial is based on Entity Framework which is a ORM for the Database.

## Contents:

1. `Getting_Started` Folder 📂 Contains Tutorial For:

   - **`Controllers/HomeController.cs`** File Contains the Below Tutorial:

     1. Basic Routing using MVC
     2. Creating the Action Method.
     3. Attribute Based routing.
     4. Route Attribute
     5. RoutePrefix Attribute
     6. Getting the Query Parameters using **QueryString**
     7. Passing the Data from the Controller to the View using `ViewData` & `ViewBag`.
     8. Keeping the Data for the next subsequent Request using `TempData`.

   - **`Controllers/EmployeeController.cs`** :

     1. Usage of Scaffold Templates.
     2. `HttpGet` & `HttpPost` Attributes for action method.
     3. `FormCollection` class for getting the data from the HTML Form.
     4. `RedirectToAction` method for redirect to the other action or even to the other controller.
     5. Named Section in View and using the named section view.
     6. `ActionName` Attribute for the specifing the action name for the action method.
     7. `UpdateModel` method for updating the data returned from the post method to binding the data in the object passed inside the `UpdateModel` method.
     8. `TryUpdateModel` method works same as the `UpdateModel` method.
     9. `TryUpdateModel` method parameter and its overload and how to include and exclude the Properties from the Post Method.
     10. `Bind` Attribute method for specifing which properties should be updated and passed to the Model.
     11. Editor Templates and Specifying Layout Property to render the custom layout for the different Views.
     12. Passing the Model to the View and Accessing its data using `Model` Property in view.
     13. Understand the Razor Views and how to switch between C# and HTML within the `.cshtml` file.

   - **`Controllers/StudentController.cs`** :

     1. CRUD operations using Views and Action method in the controller.
     2. Html `ActionLink` helper method to create the anchor element by passing the Action Name, Conroller name, Route Values and Html Attributes.

   - **`Controllers/ProductController.cs`** :

     1. Url Helper method to create the URL.
     2. Custom Helper method to create our own custom Html Element covered Image method.
     3. `RenderPartial` method and `Partial` method to render the partial View in the View to Minimize the code and avoiding the Repetition of code.
     4. Returning the Partial View using the Action Method.

   - **`Controllers/HelperController.cs`** :

     1. Html Helpers method to create the input tags directly using the Helper method to write Strongly Typed Method.
     2. Creation of RadioButton & DropDownList using the Helper Method.
     3. Creating the Form using Html Helper Method `Html.BeginForm()`.
     4. Creation of CheckBox Button for the fields.
     5. `ListBox` helper method of Html.

   - **`Models/Product.cs`** :

     1. Various Data Annotation Attributes for the Properties like `Required`, `ScaffoldColumn`, `Display`, `DisplayName`, `DisplayColumn`, `DisplayFormat` & `DataType`.

   - **`Views/EditorTemplates/DateTime.cshtml`** :
     1. Creation of custom Editor Templates for the Specified DataType or Custom Objects.

2. `MVCBusinessModels` Folder 📂 Contains Tutorial For:</br></br> These is the Class Library for MVC which is used in `Getting_Started` Folder where the Employee Controller you can see actually accessed from these class library.

   - **`Employee.cs`** :

     1. Data Annotations Attribute used like `MetaDataType` for giving the more datatype without modifying the base class.

3. `MVC_Sheet_Tutorial` Folder 📂 Contains Tutorial For :

    - **`Controllers/HomeController.cs`** :
        1. Usage of `TempData` in more clear way with thier methods to persist to the next to next request. 
        2. Unobstrusive JavaScript to validate the input field using the Data Annotations applied to it with Html Helper method to display the error. 
        3. Custom Validation using `ModelState` adding the Error in the Model.
        4. `Remote` attribute for validation using Remote by ajax call. 
        5. Action Selectors in MVC like Usage of `NonAction` attribute, `AcceptVerbs` & `ActionName` attributes.
        6. `OutputCache` attribute Example for learning the caching. 
        7. `CustomAttributes` by inheriting the `ActionFilter` attribute. 
        8. Removing the Specific error using `ModelState` property.
     
     - **`Controllers/PagingController.cs`** : 
        1. Implementation of Paging using MVC.

    - **`Controllers/ResultContoller.cs`** : 
        1. Various Types of Result can be returned using Actionmethod or by specifying the Specific result like `JsonResult`, `ViewResult`, `ContentResult`, `PartialViewResult`, `HttpStatusCodeResult`, `JsResult`, `EmptyResult`, `FileResult`, `RedirectResult`, `RedirectToRouteResult`, etc. 

    - **`Controllers/EmployeeController.cs`** : 
        1. Bootstrap Dialog Modal Showing When Try to delete using MVC. 
        2. Writing the CSS StyleSheet in the `Content` Folder in MVC. 
        3. GET and POST method in same action method. 
    
    - **`Controllers/AuthController.cs`** :
        1. Using the Authorization to create the login and Signup using `FormsAuthentication` class. 
        2. Logging Out using `FormsAuthentication` class. 

    - **`Controllers/CustomAuthController.cs`** : 
        1. Creation of Custom Authorization using `FormsAuthentication` and `FormsAuthenticationTicket` and setting the Cookie Via `HttpCookie`
        2. Allowing the Action method if the User is Authorized. 
        3. Creating the Page of Denied Access. 
    
    - **`Controllers/UserController.cs`** : 
        1. Usage of `Authorize` attribute method to allow only authorized person. 
        2. `Authorize` attribute for setting the Roles. 
        3. `AllowAnonymous` Attribute to allow any unauthenticated user to view the Action method result.  
        
    - **`Controllers/UploadController.cs`** : 
        1. Implementation of the Upload file with Uploaded file validation and persistence of the Uploaded file if any error occurs. 

    - **`Controllers/TryExampleController.cs`** : 
        1. Encoding and Decoding of Html to Prevent XSS attack and SQL injection attacks. 
        2. Assigning C# Variable value to Javascript variable. 
        3. Ajax Call in MVC to prevent Page Refresh. 
        4. Serving the Files from the `App_Data` folder. 
        5. `HandleError` attribute to show the Error page whenever the Exception occurs in the Actioin Method. 
        6. Storing Custom Cookie using `HttpCookie` Class. 
        7. Storing Custom Session using `Request.Session` Property. 
        8. Get the Current Action and Controller Name in the View as well as in the Controller. 
        9. Get the Form Data using `Request.Form` Property. 
        10. Access the Form Data using `QueryString` Property. 
        11. Async and Await Views in MVC.
    
    - **`CustomFilters/CheckIfLoggedIn.cs`** :
         Custom Filter created to check if the user is already logged in then don't show the login or signup action implemented in `Controllers/AuthController.cs`. 

    - **`CustomFilters/CustomAuthorize.cs`** : 
        Custom Authorization Attribute created by inheriting `AuthorizeAttribute` class and overridden the method. 

    - **`CustomFilters/Headers.cs`** : 
        Creating the Custom ActionFilter for storing the Key/Value in the Request.Header by inheriting the `ActionFilterAttribute` class.

    - **`CustomHelpers/ListCreator.cs`** : 
        Can be used to Create the List either UL or OL in the View by creating as the extension method.

    - **`CustomValidators/NumberValidator.cs`** : 
        To create the Custom Validator attribute which can be applied to the Models Property by are the Server Side Validators created by Inheriting the `ValidationAttribute` class and overriding its method.

    - **`RoleProvider/UserRoles.cs`** : 
        Getting the Roles of the currently logged in user and implementing its method. 
    
    - **`App_Start/BundleConfig.cs`** : 
        Creating the Custom Bundle of our Js and Style files for Easiest Bundling. 

    - **`Areas/`** :
        Creating the Custom Area for easy maintainable of code. 

## Author: Prathamesh Dhande 