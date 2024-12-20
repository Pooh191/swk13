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

document.getElementById('logout-button').addEventListener('click', function() {
        
    // เช่น เรียกฟังก์ชัน logout() หรือ redirect ไปยังหน้าออกจากระบบ
    alert('คุณได้ออกจากระบบแล้ว');
    // ตัวอย่างการ redirect ไปยังหน้าออกจากระบบ
    // window.location.href = 'logout.php';
});

window.addEventListener('load', function() {
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        var fullName = `${loggedInUser.prefix} ${loggedInUser.firstName} ${loggedInUser.lastName}`;
        document.getElementById('welcomeMessage').innerText = `ยินดีต้อนรับ, ${fullName}`;
    }
});


