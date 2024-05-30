var email_textbox = document.querySelector("#about textarea");

email_textbox.addEventListener("input", function(){
    let send_button = document.querySelector("#email-button");
    send_button.href = "mailto:danielstevanus88@gmail.com?subject=Daniel's Portfolio Website Message&body="+ email_textbox.value
}
);