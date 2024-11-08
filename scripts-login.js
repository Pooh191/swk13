document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันฟอร์มส่งข้อมูล

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // เช็ค username และ password ในที่นี้เราจะใช้ข้อมูลจากอาร์เรย์ (ในทางปฏิบัติ ควรเก็บข้อมูลนี้ในฐานข้อมูลหรือที่ปลอดภัยกว่านี้)
    var users = [
        { username: "admin", password: "admin", title: "นาย", firstName: "เทสที่สร้าง", lastName: "ร่างที่เป็น" },
        { username: "00000", password: "00000" },
        { username: "48698", password: "48698" },
        { username: "48699", password: "48699" },
        { username: "48700", password: "48700" },
        { username: "48701", password: "48701" },
        { username: "48703", password: "48703" },
        { username: "48704", password: "48704" },
        { username: "48705", password: "48705" },
        { username: "48706", password: "48706" },
        { username: "48707", password: "48707" },
        { username: "48708", password: "48708" },
        { username: "48709", password: "48709" },
        { username: "48710", password: "48710" },
        { username: "48711", password: "48711" },
        { username: "48712", password: "48712" },
        { username: "48713", password: "48713" },
        { username: "48715", password: "48715" },
        { username: "48716", password: "48716" },
        { username: "48717", password: "48717" },
        { username: "48718", password: "48718" },
        { username: "48719", password: "48719" },
        { username: "48720", password: "48720" },
        { username: "48721", password: "48721" },
        { username: "48722", password: "48722" },
        { username: "48723", password: "48723" },
        { username: "48724", password: "48724" },
        { username: "48725", password: "48725" },
        { username: "48726", password: "48726" },
        { username: "48727", password: "48727" },
        { username: "48728", password: "48728" },
        { username: "48729", password: "48729" },
        { username: "48730", password: "48730" },
        { username: "48731", password: "48731" },
        { username: "48732", password: "48732" },
        { username: "48733", password: "48733" },
        { username: "48734", password: "48734" },
        { username: "48735", password: "48735" },
        { username: "48736", password: "48736" },
        { username: "48737", password: "48737" }
        
        // สามารถเพิ่ม username และ password ตามต้องการเพิ่มได้
    ];

    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        // ถ้าเข้าสู่ระบบสำเร็จ บันทึกชื่อผู้ใช้ใน localStorage
        localStorage.setItem('loggedInUsername', authenticatedUser.username);
        // แสดงป็อปอัพเมื่อเข้าสู่ระบบสำเร็จ
        alert("เข้าสู่ระบบสำเร็จ!");
        // ไปยังหน้าหลัก (index.html)
        window.location.href = 'data.html';
    } else {
        // แสดงป็อปอัพเมื่อรหัสผ่านไม่ถูกต้อง
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }

});
