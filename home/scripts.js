// scripts.js

// Adiciona efeito 3D suave ao mover o mouse sobre a caixa de login
document.querySelectorAll('.home-box').forEach(box => {
  box.addEventListener('mousemove', function (e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  box.addEventListener('mouseleave', function () {
    this.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
});
