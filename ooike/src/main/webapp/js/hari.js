// script.js

const bike = document.getElementById("bike");
const passwordForm = document.getElementById("passwordForm");
const cancelButton = document.getElementById("cancelButton");
let x = 0;
let y = 0;
const minSpeed = 2; // 一番遅い速度
const maxSpeed = 3 * minSpeed; // 3倍速

// 初期速度を一番遅い速度に設定
let speedX = minSpeed * (Math.random() < 0.5 ? 1 : -1);
let speedY = minSpeed * (Math.random() < 0.5 ? 1 : -1);

// 状態管理用の変数
let isFast = false;
let isAnimating = true; // アニメーションの状態管理


function moveBike() {
    if (!isAnimating) return; // アニメーションが停止している場合は処理を中断

    // 現在の位置に基づいて移動
    x += speedX;
    y += speedY;

    // 画面の端に到達した場合の処理
    if (x + bike.clientWidth > window.innerWidth) {
        x = window.innerWidth - bike.clientWidth;
        speedX = -Math.abs(speedX); // 方向を反転
        toggleSpeed(); // 速度を切り替え
    }
    if (x < 0) {
        x = 0;
        speedX = Math.abs(speedX); // 方向を反転
        toggleSpeed(); // 速度を切り替え
    }
    if (y + bike.clientHeight > window.innerHeight) {
        y = window.innerHeight - bike.clientHeight;
        speedY = -Math.abs(speedY); // 方向を反転
        toggleSpeed(); // 速度を切り替え
    }
    if (y < 0) {
        y = 0;
        speedY = Math.abs(speedY); // 方向を反転
        toggleSpeed(); // 速度を切り替え
    }

    // 画像の位置を更新
    bike.style.left = x + "px";
    bike.style.top = y + "px";

    // 画像の更新
    updateBikeImage();

    // 次のフレームを要求
    requestAnimationFrame(moveBike);
}

function toggleSpeed() {
    // 速度を切り替える
    if (isFast) {
        speedX = minSpeed * (speedX < 0 ? -1 : 1);
        speedY = minSpeed * (speedY < 0 ? -1 : 1);
    } else {
        speedX = maxSpeed * (speedX < 0 ? -1 : 1);
        speedY = maxSpeed * (speedY < 0 ? -1 : 1);
    }
    isFast = !isFast; // 状態を反転
}

function updateBikeImage() {
    // 画像の切り替え
    const newSrc = isFast ? "./images/ログイン画面/hari_r.jpg" : "./images/ログイン画面/hari_l.jpg";
    const img = new Image();
    img.src = newSrc;
    img.onload = function() {
        bike.src = newSrc;
    };
    img.onerror = function() {
        console.error("Image failed to load:", newSrc);
    };
}

bike.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // 右クリックメニューを無効にする
    isAnimating = false; // アニメーションを停止
    passwordForm.style.display = "block"; // フォームを表示
});

cancelButton.addEventListener("click", function() {
    passwordForm.style.display = "none"; // フォームを非表示
    isAnimating = true; // アニメーションを再開
    moveBike(); // アニメーション再開
});

document.addEventListener("DOMContentLoaded", function() {
    moveBike(); // アニメーション開始
});

