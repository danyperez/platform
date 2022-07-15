import {LoginModel} from './loginModel.js';

//CONTROLADOR DE RUTAS
export class Login{
   constructor() {
      this.loginModel = new LoginModel();
      this.inputs = login_form.querySelectorAll('input');
      this.advertices = window.document.getElementsByClassName('advertice');
   }

   validateform(){
      let result = true;
      let setterInputs = function(elem, display) {
         window.login.advertices[elem].style.display = display;
         result = (display == 'inline-block') ? false : result; 
      }
      this.inputs[0].value.trim() == '' ? setterInputs('0', 'inline-block') : setterInputs('0', 'none');
      this.inputs[1].value.trim() == '' ? setterInputs('1', 'inline-block') : setterInputs('1', 'none');
      if (result) {
         this.senderData();
      }
   }

   senderData(){
      this.loginModel.validate_user();
      console.log('Enviando');
   }



}

window.login = new Login();