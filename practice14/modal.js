const openModalBtn = document.getElementById("openModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");

function openModal() {
    modalOverlay.classList.add("show");     // 表示用クラスを追加
    modalOverlay.classList.remove("hidden"); // 非表示クラスを削除
}

function closeModal() {
    modalOverlay.classList.remove("show");   // 表示用クラスを削除
    modalOverlay.classList.add("hidden");    // 非表示クラスを追加
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// モーダルの外側クリックで閉じる
modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {    // クリック対象がオーバーレイの場合のみ閉じる
        closeModal();
    }
});
