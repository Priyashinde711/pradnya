

        function validation(form) {
            
           
            // only alphnumeric characters
            var re = /^[\w ]+$/;
             if(!re.test(form.Name.value))  {
                alert("Symobls are not allowed");
                
                return false;
            }
             //password validation
             var password = document.getElementById("password");
            if(form.password.value.length <= 6){
                alert("password must be greater than 6 digit");
                return false;
            }

            }
        