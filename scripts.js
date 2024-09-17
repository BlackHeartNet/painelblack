// Adiciona efeito 3D suave ao mover o mouse sobre a caixa de login
document.querySelector('.login-box').addEventListener('mousemove', function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.login-box').addEventListener('mouseleave', function () {
  this.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Funcionalidade para mostrar/ocultar senha
const togglePassword = document.querySelector('.toggle-password');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

// Validação de login
document.querySelector('#loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const errorMessage = document.querySelector('#error-message');

  if (username === 'BlackHeart' && password === 'BlackHeart') {
    window.location.href = 'home/home.html'; // Corrige o caminho para home.html
  } else {
    errorMessage.style.display = 'block'; // Exibe mensagem de erro
  }
});
