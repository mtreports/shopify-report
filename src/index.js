import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "rc-tree/assets/index.css";
import "@pathofdev/react-tag-input/build/index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Windmill } from "@windmill/react-ui";
import "./assets/css/custom.css";
import "./assets/css/tailwind.css";
import "./assets/css/tailwind.output.css";
import App from "./App";
import myTheme from "./assets/theme/myTheme";
import { AdminProvider } from "./context/AdminContext";
import { SidebarProvider } from "./context/SidebarContext";
import ThemeSuspense from "./components/theme/ThemeSuspense";
import { Provider } from "react-redux";
import store from "./redux/Store";
import "./i18n";


// import * as serviceWorker from './serviceWorker';
// const countData = shopify.api.rest.Product.count({
//   session: 'shpua_da37737532a8559c828ee4239c18c761',
// });
// console.log(countData);
// if (process.env.NODE_ENV !== "production") {
//   const axe = require("react-axe");
//   axe(React, ReactDOM, 1000);
// }

ReactDOM.render(
  
  <AdminProvider>
    <SidebarProvider>
      <Provider store={store}>
        <Suspense fallback={<ThemeSuspense />}>
          <Windmill usePreferences theme={myTheme}>
            <App />
          </Windmill>
        </Suspense>
      </Provider>
    </SidebarProvider>
  </AdminProvider>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();