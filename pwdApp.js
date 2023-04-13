btnEl = document.querySelector(".btn");
inputEl = document.querySelector("#input");
copyEl = document.querySelector(".copy-icon");
alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  genPwd();
});

copyEl.addEventListener("click", () => {
 if(inputEl.value){
    copyPwd();
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 2000);
 }});

function genPwd() {
  const char =
    "0123456789'-!#>$%&()*<,./:;?@[]^_`{|}~€+=AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  const pwdLength = 9;
  let password = "";
  for (let index = 0; index < pwdLength; index++) {
    const randomNum = Math.floor(Math.random() * char.length);
    password += char.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
}

function copyPwd() {
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
    alertEl.innerText = `${inputEl.value} copied!`;
}
