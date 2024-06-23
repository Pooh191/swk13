document.addEventListener('DOMContentLoaded', function() {
    var loggedInUsername = localStorage.getItem('loggedInUsername');
    
    if (loggedInUsername) {
        document.getElementById('user-name').textContent = loggedInUsername;
    } else {
        // หากไม่มีชื่อผู้ใช้ที่เข้าสู่ระบบใน localStorage ให้ redirect ไปยังหน้า login.html
        window.location.href = 'login.html';
    }

    // เมื่อคลิกที่ปุ่ม Logout
    document.getElementById('logout-button').addEventListener('click', function() {
        // ลบชื่อผู้ใช้ที่เข้าสู่ระบบออกจาก localStorage
        localStorage.removeItem('loggedInUsername');
        // redirect ไปยังหน้า login.html
        window.location.href = 'login.html';
    });
});
