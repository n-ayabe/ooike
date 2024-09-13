const bike = document.getElementById("bike");
const passwordForm = document.getElementById("passwordForm");
const cancelButton = document.getElementById("cancelButton");
let x = 0;
let y = 0;
const minSpeed = 2;
const maxSpeed = 3;

let speedX = minSpeed * (Math.random() < 0.5 ? 1 : -1);
let speedY = minSpeed * (Math.random() < 0.5 ? 1 : -1);

let isFast = false;
let isAnimating = true;

function moveBike(){
	if (!isAnimating) return; //アニメーションが停止の場合は処理を中断
	
	x += speedX;
	y += speedY;
	
	// 画面端部での処理
	if (x + bike.clientWidth > window.innerWidth) {
		x = window.innerWidth - bike.clientWidth;
		speedX = -Math.abs(speedX); // 反転
		toggleSpeed(); // 速度切り替え
	}
	if (x < 0) {
		x = 0;
		speedX = Math.abs(speedX); // 反転
		toggleSpeed(); // 速度切り替え
	}
	if ( y + bike.clientHeight > window.innerHeight) {
		y = window.innerHeight - bike.clientHeight;
		speedY = -Math.abs(speedY); // 反転
		toggleSpeed(); // 速度切り替え
	}
	if (y < 0) {
		y = 0;
		speedY = Math.abs(speedY); //　反転
		toggleSpeed(); // 速度切り替え
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
	// 速度切り替え
	if (isFast) {
		speedX = minSpeed * (speedX < 0 ? -1 : 1);
		speedY = minSpeed * (speedY < 0 ? -1 : 1);
	} else {
		speedX = maxSpeed * (speedX < 0 ? -1 : 1);
		speedY = maxSpeed * (speedY < 0 ? -1 : 1);
	}
	isFast = ! isFast; // 状態反転
}

function updateBikeImage() {
	// 画像切り替え
	if (isFast) {
		bike.src = "book.png";
	} else {
		bike.src = "book.png";
	}
}





moveBike(); //アニメーション開始