$(document).ready(function () {
    const user = [];
    $("#hide").click(function() {
        const passwordInput = $("#password");
    
        if (passwordInput.attr("type") === "password") {
          passwordInput.attr("type", "text");
        } else {
          passwordInput.attr("type", "password");
        }
      });
    const btnsubmit = $("#submit");
    btnsubmit.click(function (e) {
      e.preventDefault();
      const email = $("#email").val();
      const password = $("#password").val();
      const errorEmail = document.querySelector("#email-error");
      const error = document.querySelector("#pass-error");

      if(email){
        errorEmail.innerHTML="";
          if(passwordCheck()){
            error.innerHTML="";
              const profile = {
                  email: email,
                  password: password,
                };
                user.push(profile);
                console.log(JSON.stringify(user));
          }else{
             error.innerHTML=" password should be atleast 8 character with special charancter";
          }
      }else{
        errorEmail.innerHTML="enter valid email";
      }
      
    });
    function passwordCheck(){
        const password = $("#password").val();
        const pattern = /^(?=.*[$#@^])[\w$#@^]{8,16}$/;
        return pattern.test(password);
    }
  });