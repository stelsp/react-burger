import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import store from "./services/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
