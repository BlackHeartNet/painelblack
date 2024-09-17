// Alterna a visibilidade da barra lateral
document.getElementById('toggleSidebar').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  const sidebarPosition = sidebar.style.left === '0px' ? '-250px' : '0px';
  sidebar.style.left = sidebarPosition;
  
  // Ajusta a margem do conteúdo principal
  document.querySelector('.dashboard-main').style.marginLeft = sidebarPosition === '0px' ? '250px' : '0px';
});
