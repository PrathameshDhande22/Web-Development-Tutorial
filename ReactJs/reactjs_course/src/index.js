import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import HelloWorld from "./HelloWorld";
// import App from "./App";
// import { PropTutorial } from "./PropTutorial";
// import { IfElseInReact } from "./IfElseInReact";
// import { Hooks1 } from "./Hooks1";
// import Project1 from "./Project1";
// import { Hooks2 } from "./Hooks1";
// import { RouterTut } from "./RouterTut";
// import { NavLinkTut } from "./NavLinkTut";
// import { DynamicRouter } from "./DynamicRouter";
// import { ContextTut } from "./ContextTut";
// import { Hooks3 } from "./Hooks1";
// import { Hooks4 } from "./Hooks1";
// import { CustomHooks } from "./CustomHooks";
// import { Hooks5 } from "./Hooks1";
// import { ExtraTutorial } from "./ExtraTutorial";
// import ClassComponents from "./ClassComponents";
import { ReduxTutorial } from "./ReduxTutorial";
import { Provider } from "react-redux";
import Store from "./States/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HelloWorld/> */}
    {/* <App /> */}
    {/* <PropTutorial /> */}
    {/* <IfElseInReact/> */}
    {/* <Hooks1/> */}
    {/* <Project1 /> */}
    {/* <Hooks2/> */}
    {/* <RouterTut/> */}
    {/* <NavLinkTut/> */}
    {/* <DynamicRouter/> */}
    {/* <ContextTut /> */}
    {/* <Hooks3/> */}
    {/* <Hooks4/> */}
    {/* <CustomHooks/> */}
    {/* <Hooks5/> */}
    {/* <ExtraTutorial/> */}
    {/* <ClassComponents /> */}
    {/* using the provider function of the redux to pass the state it enables that data should be available to the rest of the app */}
    {/* here the store is the store we configured previously */}
    <Provider store={Store}>
      <ReduxTutorial />
    </Provider>
  </React.StrictMode>
);
