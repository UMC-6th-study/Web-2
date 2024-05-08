const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.querySelector(".modal-wrapper");

// '버튼 열기'를 누르면 보이도록
openBtn.onclick = () => {
    modal.style.display = "flex";
}

// '닫기'를 누르면 다시 보이지 않도록
closeBtn.onclick = () => {
    modal.style.display = "none";
}
