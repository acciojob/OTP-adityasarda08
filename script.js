const inputs = document.querySelectorAll(".code");

// Cypress expects first input focused
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {

    // Allow only digits
    if (e.key >= "0" && e.key <= "9") {
      input.value = "";
      setTimeout(() => {
        if (inputs[index + 1]) {
          inputs[index + 1].focus();
        }
      }, 0);
    }

    // Backspace behavior
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (inputs[index - 1]) {
          inputs[index - 1].focus();
        }
      } else {
        input.value = "";
      }
    }
  });
});
