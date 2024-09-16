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

    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('closed');
        document.querySelector('.main-content').classList.toggle('sidebar-closed');
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

    // Mostrar a barra lateral quando o mouse está sobre o botão hamburger
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('mouseover', () => {
        sidebar.classList.add('show');
    });

    sidebar.addEventListener('mouseover', () => {
        sidebar.classList.add('show');
    });

    sidebar.addEventListener('mouseout', () => {
        sidebar.classList.remove('show');
    });
});
