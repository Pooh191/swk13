function countdownToOpenSemester() {
    const openSemesterDate = new Date("May 16, 2025 00:00:00").getTime();
    
    setInterval(function () {
        const now = new Date().getTime();
        let timeLeft = openSemesterDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById("countdown");

        if (timeLeft <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

        countdownElement.innerHTML = 
            `⏳ เหลือเวลาอีก <b>${days}</b> วัน <b>${hours.toString().padStart(2, '0')}</b> ชั่วโมง <b>${minutes.toString().padStart(2, '0')}</b> นาที <b>${seconds.toString().padStart(2, '0')}</b> วินาที`;
    }, 1000);
}

// เรียกใช้งานฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
window.onload = countdownToOpenSemester;