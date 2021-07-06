document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState == "interactive") {
        document.querySelector("body").classList.add("js");

        // Form
        const formButton = document.querySelector(".forms form button");

        document.querySelector(".forms form").addEventListener("submit", function (event) {

            let username = document.querySelector("#form_username").value;
            let email = document.querySelector("#form_email").value;
            let password = document.querySelector("#form_password").value;
            let password2 = document.querySelector("#form_password_ver").value;
            let age_8 = document.querySelector("#age-8");
            let age_9_17 = document.querySelector("#age-9-17");
            let age_26_30 = document.querySelector("#age-26-30");
            let age_30 = document.querySelector("#age-30");

            let response1 = document.querySelector("#username_resp");
            let response2 = document.querySelector("#email_resp");
            let response3 = document.querySelector("#password_resp");
            let response4 = document.querySelector("#passwordVer_resp");
            let response5 = document.querySelector("#age_resp");

            let complete = false;

            if (username != "" && email != "" && password != "" && password == password2 && (age_8.checked || age_9_17.checked || age_26_30.checked || age_30.checked)) {
                complete = true;
            }

            if (username == "") {
                response1.innerHTML = "Username cannot be empty!"
                document.getElementById("form_username").style.backgroundColor = "red";
            }

            if (email == "") {
                response2.innerHTML = "Email cannot be empty!"
                document.getElementById("form_email").style.backgroundColor = "red";
            }

            if (password == "") {
                response3.innerHTML = "Password cannot be empty!"
                document.getElementById("form_password").style.backgroundColor = "red";
            }

            if (password2 != password) {
                response4.innerHTML = "Password doesn't matched!"
                document.getElementById("form_password_ver").style.backgroundColor = "red";
            }

            if (!age_8.checked && !age_9_17.checked && !age_26_30.checked && !age_30.checked) {
                response5.innerHTML = "Choose one!"
            }

            if (complete) {
                formButton.innerHTML = "All Done!";
                let response = document.querySelector("#sum_response");
                response.innerHTML = "Congrats! Your account has been registered!"
                document.getElementById("sum_response").style.backgroundColor = "green";

                response1.innerHTML = ""
                document.getElementById("form_username").style.backgroundColor = "";
                response2.innerHTML = ""
                document.getElementById("form_email").style.backgroundColor = "";
                response3.innerHTML = ""
                document.getElementById("form_password").style.backgroundColor = "";
                response4.innerHTML = ""
                document.getElementById("form_password_ver").style.backgroundColor = "";
                response5.innerHTML = ""
                document.getElementById("form_username").style.backgroundColor = "";

            } else {
                let response = document.querySelector("#sum_response");
                response.innerHTML = "Invalid Input!"
                document.getElementById("sum_response").style.backgroundColor = "red";
                formButton.innerHTML = "Try Again";
            }

            event.preventDefault();
        });
    }
});