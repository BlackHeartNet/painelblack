document.addEventListener('DOMContentLoaded', function () {
  // Manipulador do botão de alternância da barra lateral
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  toggleSidebar.addEventListener('click', function () {
    if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px';
    } else {
      sidebar.style.left = '0px';
    }
  });

  // Manipulador do botão de logout
  const logoutButton = document.getElementById('logout');
  logoutButton.addEventListener('click', function () {
    window.location.href = 'painel/index.html'; // Redireciona para a página de login
  });
});
