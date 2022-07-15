
function info(message){
  cuteAlert({ type: "info", title: "Alerta", buttonText: "Aceptar", message: message })
}

function question(text){
  return cuteAlert({
      type: "question",
      title: "Alerta de confirmación",
      message: text,
      confirmText: "Aceptar",
      cancelText: "Cancelar"
  }).then((e)=>{
      if ( e == ("confirm")){
        return true;
    } else {
      return false;
    }
  });
}

// Alert box design by Igor Ferrão de Souza: https://www.linkedin.com/in/igor-ferr%C3%A3o-de-souza-4122407b/
function cuteAlert({
  type,
  title,
  message,
  buttonText = "OK",
  confirmText = "OK",
  cancelText = "Cancel",
  closeStyle,
}) {
  return new Promise((resolve) => {
    setInterval(() => {}, 5000);
    const body = document.querySelector("body");

    const scripts = document.getElementsByTagName("script");
    let currScript = "";

    for (let script of scripts) {
      if (script.src.includes("cute-alert.js")) {
        currScript = script;
      }
    }

    let src = currScript.src;

    src = src.substring(0, src.lastIndexOf("/"));

    let closeStyleTemplate = "alert-close";
    if (closeStyle === "circle") {
      closeStyleTemplate = "alert-close-circle";
    }

    let btnTemplate = `
    <button class="alert-button ${type}-bg ${type}-btn">${buttonText}</button>
    `;
    if (type === "question") {
      btnTemplate = `
      <div class="question-buttons">
        <button class="confirm-button ${type}-bg ${type}-btn">${confirmText}</button>
        <button class="cancel-button error-bg error-btn">${cancelText}</button>
      </div>
      `;
    }

    const template = `
    <div class="alert-wrapper">
      <div class="alert-frame">
        <div class="alert-header ${type}-bg">
          <span class="${closeStyleTemplate}">X</span>
          <img class="alert-img" src="${src}/img/${type}.svg" />
        </div>
        <div class="alert-body">
          <span class="alert-title">${title}</span>
          <span class="alert-message">${message}</span>
          ${btnTemplate}
        </div>
      </div>
    </div>
    `;

    body.insertAdjacentHTML("afterend", template);

    const alertWrapper = document.querySelector(".alert-wrapper");
    const alertFrame = document.querySelector(".alert-frame");
    const alertClose = document.querySelector(`.${closeStyleTemplate}`);

    if (type === "question") {
      const confirmButton = document.querySelector(".confirm-button");
      const cancelButton = document.querySelector(".cancel-button");

      confirmButton.addEventListener("click", () => {
        alertWrapper.remove();
        resolve("confirm");
      });

      cancelButton.addEventListener("click", () => {
        alertWrapper.remove();
        resolve();
      });
    } else {
      const alertButton = document.querySelector(".alert-button");

      alertButton.addEventListener("click", () => {
        alertWrapper.remove();
        resolve();
      });
    }

    alertClose.addEventListener("click", () => {
      alertWrapper.remove();
      resolve();
    });

    alertWrapper.addEventListener("click", () => {
      alertWrapper.remove();
      resolve();
    });

    alertFrame.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}

function cuteToast({ type, message, timer = 5000 }) {
  return new Promise((resolve) => {
    if (document.querySelector(".toast-container")) {
      document.querySelector(".toast-container").remove();
    }
    const body = document.querySelector("body");

    const scripts = document.getElementsByTagName("script");
    let currScript = "";

    for (let script of scripts) {
      if (script.src.includes("cute-alert.js")) {
        currScript = script;
      }
    }

    let src = currScript.src;

    src = src.substring(0, src.lastIndexOf("/"));

    const template = `
    <div class="toast-container ${type}-bg">
      <div>
        <div class="toast-frame">
          <img class="toast-img" src="${src}/img/${type}.svg" />
          <span class="toast-message">${message}</span>
          <div class="toast-close">X</div>
        </div>
        <div class="toast-timer ${type}-timer" style="animation: timer ${timer}ms linear;"/>
      </div>
    </div>
    `;

    body.insertAdjacentHTML("afterend", template);

    const toastContainer = document.querySelector(".toast-container");

    setTimeout(() => {
      toastContainer.remove();
      resolve();
    }, timer);

    const toastClose = document.querySelector(".toast-close");

    toastClose.addEventListener("click", () => {
      toastContainer.remove();
      resolve();
    });
  });
}


/*
***   EXAMPLES CALLS ***

            <button class="btn btn-success" id="success">Success</button>
            <button class="btn btn-error" id="error">error</button>
            <button class="btn btn-warning" id="warning">Warning</button>
            <button class="btn btn-info" id="info">Info</button>
            <button class="btn btn-danger" id="confirm">Confirm</button>
            <button class="btn btn-primary" id="toast">Toast</button>

<script>
var success = document.getElementById("success");
success.addEventListener("click", ()=>{
  cuteAlert({
      type: "success",
      title: "Success Title",
      message: "Success Message",
      buttonText: "Okay"
  })
})

var error = document.getElementById("error");
error.addEventListener("click", ()=>{
  cuteAlert({
      type: "error",
      title: "Error Title",
      message: "Error Message",
      buttonText: "Okay"
  })
})

var warning = document.getElementById("warning");
warning.addEventListener("click", ()=>{
  cuteAlert({
      type: "warning",
      title: "Warning Title",
      message: "Warning Message",
      buttonText: "Okay"
  })
})

var info = document.getElementById("info");
info.addEventListener("click", ()=>{
  cuteAlert({
      type: "info",
      title: "Info Title",
      message: "Info Message",
      buttonText: "Okay"
  })
})

var confirm = document.getElementById("confirm");
confirm.addEventListener("click", ()=>{
  cuteAlert({
      type: "question",
      title: "Confirm Title",
      message: "Confirm Message",
      confirmText: "Okay",
      cancelText: "Cancel"
  }).then((e)=>{
    if ( e == ("Thanks")){
  } else {
    alert(":-(");
  }
  })
})

var toast = document.getElementById("toast");
toast.addEventListener("click", ()=>{
  cuteToast({
      type: "success",
      message: "Info Message",
      timer: 5000
  })
})
</script>
*/
