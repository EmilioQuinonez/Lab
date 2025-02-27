function checkPassword() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("strength");
  const strengthMessage = document.getElementById("strengthMessage");

  if (password === "") {
    strengthMessage.textContent = "";
    strengthBar.style.background = "#dddddd";
  } else {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const colors = ["red", "orange", "yellow", "blue", "green"];
    strengthBar.style.width = strength * 20 + "%";
    strengthBar.style.background = colors[strength - 1] || "red";

    const messages = ["Muy débil", "Débil", "Regular", "Fuerte", "Muy fuerte"];
    strengthMessage.textContent = messages[strength - 1] || "Muy débil";
  }
}

function checkMatch() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const matchMessage = document.getElementById("matchMessage");

  if (confirmPassword === "") {
    matchMessage.textContent = "";
  } else if (password === confirmPassword) {
    matchMessage.textContent = "Las contraseñas coinciden";
    matchMessage.className = "message match";
  } else {
    matchMessage.textContent = "Las contraseñas no coinciden";
    matchMessage.className = "message mismatch";
  }
}
