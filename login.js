document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // ป้องกันไม่ให้ฟอร์มส่งข้อมูลไปยังเซิร์ฟเวอร์ทันที

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ตัวอย่าง: ตรวจสอบข้อมูล username และ password
    if (username === "" || password === "") {
        document.getElementById("error-message").textContent = "กรุณากรอกข้อมูลให้ครบถ้วน!";
    } else {
        // ตรวจสอบ username และ password
        const validCredentials = [
            { username: "admin", password: "admin" },  // รหัสสำหรับ admin
            { username: "48698", password: "48698" },  // กฤตพร
            { username: "48699", password: "48699" },  // กุลนัฐฐา
            { username: "48700", password: "48700" },  // จอมขวัญ
            { username: "48701", password: "48701" },  // ชลดาวรรณ
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
            { username: "48714", password: "48714" },
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
        ];

        const user = validCredentials.find(cred => cred.username === username && cred.password === password);

        if (user) {
            // หากข้อมูลถูกต้อง
            window.location.href = "dashbord.html";  // ไปที่หน้าแดชบอร์ดหลังจากล็อกอินสำเร็จ
        } else {
            // หากข้อมูลไม่ถูกต้อง
            document.getElementById("error-message").textContent = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง!";
        }
    }
});
