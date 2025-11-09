// ฟังก์ชันหลักสำหรับการทำงานทั้งหมด
function initWebsite() {
    initClock();
    initMobileMenu();
    initCopyright();
    initColorMode(); // *** ฟังก์ชันควบคุมสีและวันที่ ***
    initScrollEffects();
    initDropdownMenu();
    initPreloader();
}

// ⚙️ ฟังก์ชันสำหรับตั้งค่าเว็บไซต์ให้เป็นโหมดสีปกติ (หลังจากครบกำหนด)
function applyNormalColorMode() {
    const root = document.documentElement;

    // 1. เปลี่ยน CSS Variables กลับไปเป็นสีปกติ (เขียว/ทอง)
    root.style.setProperty('--primary-color', '#43A047');
    root.style.setProperty('--primary-dark', '#388E3C');
    root.style.setProperty('--secondary-color', '#FFD700'); // กำหนดสีทองที่ใช้ใน ::selection
    root.style.setProperty('--background-gradient', 'linear-gradient(135deg, #f0f4f8, #d9e2ec)');
    
    // 2. **บังคับ** ลบ Filter ออก
    const elementsToReset = [
        document.body,
        ...document.querySelectorAll('img'), 
        ...document.querySelectorAll('.logo-link img'),
        ...document.querySelectorAll('.header-bg')
    ];
    
    elementsToReset.forEach(el => {
         el.style.setProperty('filter', 'none', 'important'); 
    });

    // 3. ลบแถบแจ้งเตือน #countdown ออกอย่างสมบูรณ์
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        countdownEl.remove();
    }
}

// ⚙️ ระบบขาว-ดำ 3 เดือน
function initColorMode() {
    // 📌 สำหรับใช้งานจริง: ใช้ new Date(2025, 9, 24); 
    const startDate = new Date(2025, 9, 24); 
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 90); // วันที่สิ้นสุด 22 มกราคม 2026

    const root = document.documentElement;
    
    // ตั้งค่า CSS Variables สำหรับโหมด Grayscale
    const applyGrayscaleMode = () => {
        root.style.setProperty('--primary-color', '#444444');
        root.style.setProperty('--primary-dark', '#222222');
        root.style.setProperty('--secondary-color', '#bbbbbb'); // กำหนดสีเทาอ่อนที่ใช้ใน ::selection
        root.style.setProperty('--background-gradient', 'linear-gradient(135deg, #f0f0f0, #cccccc)');

        // ตั้งค่า Grayscale Filter
        document.body.style.setProperty('filter', 'grayscale(100%)', 'important');
        const images = document.querySelectorAll('img');
        images.forEach(img => { img.style.setProperty('filter', 'grayscale(100%)', 'important'); });
        const headerBg = document.querySelector('.header-bg');
        if (headerBg) { headerBg.style.setProperty('filter', 'grayscale(100%)', 'important'); }
        const logoImg = document.querySelector('.logo-link img');
        if (logoImg) { logoImg.style.setProperty('filter', 'grayscale(100%)', 'important'); }
    };
    
    // ฟังก์ชันสำหรับตรวจสอบและแสดงสถานะ
    function updateModeStatus() {
        const now = new Date(); 
        let countdownEl = document.getElementById('countdown');
        
        // !!! บังคับลบ element #countdown ที่มีอยู่ (รวมถึงโค้ดเก่า) ก่อนเสมอ !!!
        if (countdownEl) {
            countdownEl.remove();
        }

        // 1. ถ้าผ่านวันที่สิ้นสุดแล้ว (กลับเป็นสีปกติ)
        if (now >= endDate) {
            applyNormalColorMode(); 
            return;
        }

        // 2. ถ้ายังไม่ถึงวันที่เริ่มต้น (สีปกติ + แจ้งเตือน)
        if (now < startDate) {
            applyNormalColorMode(); 
            // สร้างแถบแจ้งเตือนที่ถูกต้อง
            const countdownDiv = document.createElement('div');
            countdownDiv.id = 'countdown';
            countdownDiv.style.cssText = "position:fixed; top:0; left:50%; transform:translateX(-50%); background:#000; color:#fff; padding:10px 20px; z-index:9999; border-radius:0 0 10px 10px; font-family:'Prompt', sans-serif;";
            countdownDiv.innerHTML = `<p style="margin:0; font-size:16px;">โหมดขาว-ดำจะเริ่มต้นในวันที่ 24 ตุลาคม 2568</p>`;
            document.body.insertBefore(countdownDiv, document.body.firstChild);
            return;
        }

        // 3. ถ้าอยู่ในช่วงเวลา 3 เดือน (ขาว-ดำ + แจ้งเตือน)
        if (now >= startDate && now < endDate) {
            applyGrayscaleMode(); // ตั้งค่าเป็น Grayscale

            // สร้างแถบแจ้งเตือนที่ถูกต้อง
            const countdownDiv = document.createElement('div');
            countdownDiv.id = 'countdown';
            countdownDiv.style.cssText = "position:fixed; top:0; left:50%; transform:translateX(-50%); background:#000; color:#fff; padding:10px 20px; z-index:9999; border-radius:0 0 10px 10px; font-family:'Prompt', sans-serif;";
            countdownDiv.innerHTML = `<p style="margin:0; font-size:16px;">เว็บไซต์อยู่ในโหมดขาว-ดำ ตามกำหนดการ</p>`;
            document.body.insertBefore(countdownDiv, document.body.firstChild);
        } 
    }

    // เริ่มต้นและตั้ง interval
    updateModeStatus();
    setInterval(updateModeStatus, 1000); 
}

// -----------------------------------------------------------------------
// ฟังก์ชันอื่น ๆ (คงเดิม)
// -----------------------------------------------------------------------

function initClock() {
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
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.innerText = fullDateTimeString;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
}

function initCopyright() {
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

function initDropdownMenu() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'block';
            }
        });
        dropdown.addEventListener('mouseleave', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'none';
            }
        });
    });
}

function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
}

function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    });
}

// เริ่มต้นการทำงานเมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', initWebsite);
