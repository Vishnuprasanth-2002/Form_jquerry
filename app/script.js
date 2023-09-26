$(document).ready(function () {
    const user = [];
    const btnsubmit = $("#submit");
    btnsubmit.click(function (e) {
      e.preventDefault();
      const email = $("#email").val();
      const password = $("#password").val();
      if(email){
          if(passwordCheck()){
              const profile = {
                  email: email,
                  password: password,
                };
                user.push(profile);
                console.log(JSON.stringify(user));
          }else{
              alert(" password should be atleast 8 character")
          }
      }else{
          alert("enter valid email")
      }
      
    });
    function passwordCheck(){
        const password = $("#password").val();
        const pattern = /^(?=.*[$#@^])[\w$#@^]{8,16}$/;
        return pattern.test(password);
    }
  });