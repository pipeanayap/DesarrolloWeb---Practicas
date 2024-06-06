// roles.js
function checkUserRole() {
    const userRole = localStorage.getItem('userRole');

    if (userRole === 'admin') {
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');
    } else if (userRole === 'vendedor') {
        document.querySelectorAll('.vendedor-only').forEach(el => el.style.display = 'block');
    } else if (userRole === 'usuario') {
        document.querySelectorAll('.usuario-only').forEach(el => el.style.display = 'block');
    } else {
        // Default behavior if no role is found
        console.warn('No user role found');
    }
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', checkUserRole);
