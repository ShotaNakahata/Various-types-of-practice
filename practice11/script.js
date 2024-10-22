const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu'); // IDで取得

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');  // メニューの表示・非表示を切り替え
});
