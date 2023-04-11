export const IfElseInReact = () => {
  // you can also use javascript here also
  let login = true;
  return (
    <div>
      {
        // javascript is written here only
        //  we will be using the ternary operator in this block
        login === false ? <h1>You are not login</h1> : <h2>You are login</h2>
      }

      {
        // same thing using the if else using the iife function means Immediately invoked Function Expression
        (() => {
          if (login) {
            return (
              <div>
                <h2>Your name is</h2>
                <h5>Your age is</h5>
              </div>
            );
          } else {
            return (
              <div>
                <h1>Login first</h1>
              </div>
            );
          }
        })()
      }
    </div>
  );
};
