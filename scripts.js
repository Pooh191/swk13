function updateClock() {
    var now = new Date();
    var days = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
    var day = days[now.getDay()];

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;
    var dateString = 'วัน' + day + 'ที่ ';

    var months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear() + 543;

    var fullDateTimeString = dateString + date + ' ' + month + ' ' + year + ' เวลา ' + timeString;
    
    document.getElementById('clock').innerText = fullDateTimeString;
}



setInterval(updateClock, 1000); 

// เมนู

document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
});

// scripts.js

// จำลองการตรวจสอบสิทธิ์ผู้ใช้
// สมมุติว่าผู้ใช้ที่ล็อกอินมีข้อมูลสิทธิ์ในตัวแปร userRole
// ในการใช้งานจริง ค่านี้จะถูกตั้งค่าจากฝั่งเซิร์ฟเวอร์
const userRole = 'admin'; // หรือ 'user' ถ้าผู้ใช้ไม่มีสิทธิ์แอดมิน

document.addEventListener('DOMContentLoaded', () => {
    // แสดงเมนูแอดมินเฉพาะเมื่อผู้ใช้มีสิทธิ์แอดมิน
    if (userRole === 'admin') {
        document.getElementById('admin-menu').style.display = 'block';
    }
});

// ลิขสิทธิ์ปัจจุบัน

document.getElementById("currentYear").textContent = new Date().getFullYear();

        document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    (function() {
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get() {
                alert('DevTools Detected');
            }
        });
        console.log(element);
    })();
