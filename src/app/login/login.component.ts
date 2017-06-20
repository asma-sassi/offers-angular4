import {Component, OnInit} from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }



  showLoginForm = () => {
    $('#loginModal .registerBox').fadeOut('fast', function () {
      $('.loginBox').fadeIn('fast');
      $('.register-footer').fadeOut('fast', function () {
        $('.login-footer').fadeIn('fast');
      });

      $('.modal-title').html('Login with');
    });
    $('.error').removeClass('alert alert-danger').html('');
  };

  openLoginModal = () => {
    this.showLoginForm();
    setTimeout(function () {
      $('#loginModal').modal('show');
    }, 230);
  }


  showRegisterForm = () => {
    $('.loginBox').fadeOut('fast', function () {
      $('.registerBox').fadeIn('fast');
      $('.login-footer').fadeOut('fast', function () {
        $('.register-footer').fadeIn('fast');
      });
      $('.modal-title').html('Register with');
    });
    $('.error').removeClass('alert alert-danger').html('');
  };

  openRegisterModal = () => {
    this.showRegisterForm();
    setTimeout(function () {
      $('#loginModal').modal('show');
    }, 230);

  };

  shakeModal = () => {
    $('#loginModal .modal-dialog').addClass('shake');
    $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
    $('input[type="password"]').val('');
    setTimeout(function () {
      $('#loginModal .modal-dialog').removeClass('shake');
    }, 1000);
  };

  loginAjax = () => {
    this.shakeModal();
  };

  ngOnInit() {
  }

}
