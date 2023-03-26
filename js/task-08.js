const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", newTextSub);

function newTextSub(elem) {
  elem.preventDefault();
  const { email, password } = elem.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    elem.currentTarget.reset();
  }
}
