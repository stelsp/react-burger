import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import ModalOverlay from "./components/modal/modal";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <ModalOverlay>
      <Modal></Modal>
    </ModalOverlay>
  </React.StrictMode>,
  document.getElementById("modal-root")
);
