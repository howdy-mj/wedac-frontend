import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";
import theme from "./style/theme";
import GlobalStyle from "./style/global";

const store = createStore(rootReducer, composeWithDevTools());
const track = store.subscribe(() => console.log("action!", store.getState()));
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
