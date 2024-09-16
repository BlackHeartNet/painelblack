document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.getElementById('username');
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

            const target = link.getAttribute('href').substring(1);
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

    window.toggleSidebar = function() {
        document.querySelector('.sidebar').classList.toggle('closed');
        document.querySelector('.main-content').classList.toggle('sidebar-closed');
    };

    window.showSection = function(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('visible');
        });
        document.getElementById(sectionId).classList.add('visible');
    };

    window.changeProfilePic = function() {
        document.getElementById('profile-pic-input').click();
    };

    window.updateProfilePic = function() {
        const input = document.getElementById('profile-pic-input');
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector('.profile-pic').src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    window.editProfile = function() {
        const formElements = document.querySelectorAll('#profile-form input');
        formElements.forEach(input => {
            input.removeAttribute('readonly');
        });
        document.querySelector('#profile-form button').textContent = 'Salvar Perfil';
    };
});
