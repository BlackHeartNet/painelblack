document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.getElementById('profile-name');
    const savedName = getCookie('username');
    if (savedName) {
        profileName.textContent = savedName;
    }

    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.section');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            sections.forEach(section => {
                section.classList.remove('visible');
            });

            const target = link.getAttribute('data-target');
            document.getElementById(target).classList.add('visible');
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('sidebar-closed');
        sidebar.style.opacity = '1'; /* Garante que a barra lateral esteja visível */
        sidebar.style.visibility = 'visible'; /* Garante que a barra lateral esteja visível */
    });

    sidebar.addEventListener('mouseover', () => {
        sidebar.style.opacity = '1'; /* Garante que a barra lateral esteja visível */
        sidebar.style.visibility = 'visible'; /* Garante que a barra lateral esteja visível */
    });

    sidebar.addEventListener('mouseout', () => {
        if (!sidebar.classList.contains('closed')) {
            sidebar.style.opacity = '0'; /* Torna a barra lateral invisível */
            sidebar.style.visibility = 'hidden'; /* Torna a barra lateral invisível */
        }
    });

    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            setCookie('username', username, 365);
            profileName.textContent = username;
        });
    }

    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ''}${expires}; path=/`;
    }

    function getCookie(name) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
