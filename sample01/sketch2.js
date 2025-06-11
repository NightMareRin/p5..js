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

let guideWave;
let creditsY;        // 시작 y 위치
let scrollSpeed = 1; // 기본 속도
//s3가이드?

// 전용 초기화 함수 추가
function initGuideForScene3(handX, handY, size) {
  guideWave = new GuideWaveButton(handX, handY, size);
  guideWave.visible = true;
}

// draw에서 가이드가 있을 경우만 업데이트
function draw() {
  // 배경 또는 씬 렌더링은 main.js에서 처리
  if (guideWave) {
    guideWave.updateAndDraw();
  }
}

// -------

function setup() {
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
  creditsY = height; // 화면 아래부터 시작
}

function draw() {
  background(0);

  showCredits();
  guideWave.updateAndDraw();
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

class GuideWaveButton {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.baseSize = size;
        this.size = size;
        this.visible = false;
        this.wave = null;
        this.started = false;
        this._pulseT = random(TWO_PI); // 진동 시작위치 랜덤
    }

    updateAndDraw() {
        // 자연스러운 진동 효과
        if (this.visible) {
            this._pulseT += 0.07; // 진동 속도 (값이 클수록 빠름)
            // 진폭 10~20px, baseSize 기준으로 부드럽게 변화
            this.size = this.baseSize + sin(this._pulseT) * (this.baseSize * 0.15);
            noStroke();
            fill(255, 0, 0, 150);
            ellipse(this.x, this.y, this.size);
        }

        if (this.wave) {
            this.wave.update();
            this.wave.draw();

            if (this.wave.isFinished()) {
                this.wave = null;
            }
        }
    }

    mousePressed(mx, my) {
        if (this.visible && dist(mx, my, this.x, this.y) < this.size / 2) {
            this.visible = false;
            this.started = true;
            this.wave = new Wave(this.x, this.y);
        }
    }

    isFinished() {
        return this.wave === null && this.started;
    }
}

class Wave {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.strokeWeight = 12; // 더 두껍게
        this.alpha = 255;
    }

    update() {
        this.radius += 8; // 더 빠르게 커짐
        this.alpha -= 6;  // 더 빠르게 사라짐
    }

    draw() {
        if (this.radius < 20) return;
        noFill();
        stroke(255, 150, 50, this.alpha);
        strokeWeight(this.strokeWeight);
        ellipse(this.x, this.y, this.radius * 2);
    }

    isFinished() {
        return this.alpha <= 0;
    }
}
