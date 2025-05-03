const form = document.querySelector("form"),
  next_btn = document.querySelector(".next_btn"),
  back_btn = document.querySelector(".back_btn"),
  submit_btn = document.querySelector(".submit_btn")
  allInput = document.querySelectorAll(".form_one input, .form_one select");
  console.log(allInput);

next_btn.addEventListener("click", ()=> {
  let allFilled = true;
    allInput.forEach(input => {
        if (input.value === "") {
            allFilled = false;
        }
    });
    if (allFilled) {
        form.classList.add('secActive');
    } else {
        alert("Por favor, complete todos los campos requeridos.");
    }
});

back_btn.addEventListener("click", () => form.classList.remove('secActive'));

submit_btn.addEventListener("click", () => {
  alert("Formulario enviado correctamente.");
  form.submit();
});

//Contador de usuarios registrados

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const registroKey = 'usuariosRegistrados';

  let contadorRegistros = localStorage.getItem(registroKey);
  if (contadorRegistros === null) {
    contadorRegistros = 0;
  } else {
    contadorRegistros = parseInt(contadorRegistros);
  }

  actualizarContador(contadorRegistros);

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    contadorRegistros++;

    localStorage.setItem(registroKey, contadorRegistros);

    actualizarContador(contadorRegistros);


    alert('Registro simulado exitoso. Usuarios registrados: ' + contadorRegistros);

    form.reset();
  });
});
