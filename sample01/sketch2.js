let creditsText = [
  "Directed by You",
  "Written by You",
  "Produced by You",
  "",
  "Cast",
  "You as Yourself",
  "",
  "Special Thanks",
  "Your Friends",
  "Your Family",
  "",
  "The End"
];

let creditsY;        // 시작 y 위치
let scrollSpeed = 1; // 기본 속도

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
  creditsY = height; // 화면 아래부터 시작
}

function draw() {
  background(0);

  showCredits();
}

function showCredits() {
  let speed = scrollSpeed;
  if (mouseIsPressed) {
    speed *= 3; // 마우스를 누르면 빨라짐
  }

  creditsY -= speed;

  for (let i = 0; i < creditsText.length; i++) {
    let y = creditsY + i * 40;
    text(creditsText[i], width / 2, y);
  }

  // 종료 조건 예시 (마지막 줄이 화면 위로 사라짐)
  let lastY = creditsY + creditsText.length * 40;
  if (lastY < 0) {
    noLoop(); // 더 이상 그릴 필요 없으면 멈춤
  }
}