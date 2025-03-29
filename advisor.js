document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("table img");

    // เปิด Modal เมื่อคลิกที่รูปภาพ
    images.forEach(img => {
        img.addEventListener("click", function () {
            openModal(img);
        });
    });

    // ปิด Modal เมื่อคลิกที่ปุ่ม X หรือคลิกที่พื้นที่ว่าง
    document.querySelector(".close-btn").addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
        let modal = document.getElementById("imageModal");
        if (event.target === modal) {
            closeModal();
        }
    });
});

// เปิด Modal และแสดงรูปภาพ
function openModal(imgElement) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "flex"; // เปลี่ยนเป็น 'flex' เพื่อแสดง modal
    modalImg.src = imgElement.src;
}

// ปิด Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
