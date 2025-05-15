document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        try {
            // ดึงข้อมูลจาก Google Sheets (JSON API)
            const response = await fetch("https://script.google.com/macros/s/AKfycbxMbu17H8nkrrCThS8tuquNDcLVOj_XrXxK1u3B-lOjCHNFhVlyyo5kkGfdWI2DlHBFmg/exec"); // ใช้ URL ที่ได้จากการ Deploy Web App

            // ตรวจสอบสถานะการเชื่อมต่อ
            if (!response.ok) {
                throw new Error("ไม่สามารถเชื่อมต่อกับ API ได้, รหัสสถานะ: " + response.status);
            }

            const validCredentials = await response.json();

            // ตรวจสอบ username และ password
            const user = validCredentials.find(cred => cred.username === username && cred.password === password);

            if (user) {
                // ถ้าเข้าสู่ระบบสำเร็จ
                document.getElementById("welcomePopup").style.display = "flex";

                // รอ 2 วินาทีแล้วเปลี่ยนหน้าไปที่ dashbord.html
                setTimeout(function() {
                    window.location.href = "/html/member/dashbord.html"; // เปลี่ยนหน้าไปที่ dashboard
                }, 1000);
            } else {
                document.getElementById("error-message").textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
            }
        } catch (error) {
            // หากเกิดข้อผิดพลาด จะแสดงข้อความใน UI
            document.getElementById("error-message").textContent = "เกิดข้อผิดพลาดในการเชื่อมต่อ! กรุณาลองใหม่อีกครั้ง. " + error.message;
        }
    });

    // ปิดป็อปอัพเมื่อคลิกปุ่ม X
    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("welcomePopup").style.display = "none";
    });
});
