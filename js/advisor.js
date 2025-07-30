document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("table img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const downloadBtn = document.getElementById("downloadBtn");
  const shareBtn = document.getElementById("shareBtn");
  const closeBtn = document.querySelector(".close-btn");

  images.forEach(img => {
    img.addEventListener("click", function () {
      openModal(img);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  shareBtn.addEventListener("click", async function () {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ครูที่ปรึกษา',
          text: 'ดูภาพครูที่ปรึกษา',
          url: modalImg.src
        });
      } catch (err) {
        alert("ไม่สามารถแชร์ได้: " + err);
      }
    } else {
      alert("เบราว์เซอร์ของคุณไม่รองรับการแชร์");
    }
  });
});

function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const downloadBtn = document.getElementById("downloadBtn");

  modal.style.display = "flex";
  modalImg.src = imgElement.src;

  const filename = imgElement.src.split("/").pop();
  downloadBtn.onclick = () => {
    const a = document.createElement("a");
    a.href = imgElement.src;
    a.download = filename;
    a.click();
  };
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
