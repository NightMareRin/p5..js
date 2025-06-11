// 클래스와 함수 생성시 AI 도움을 받음, 이후 코드 통합은 직접 함(credit 수정 포함)

let creditsText = [
  "(ai 사용 비율 80%)",
  "이지후 - 장면 5~6 애니메이션, 엔딩 크레딧 함수, 버튼 파동 함수, 이미지 조정 작업",
  "소감: 팀원들 간 소통이 유연하고, 활발해서 좋았다. 끝까지 포기하지 않아서 다행이다.",
  "다음에는 더 완성도 있게 만들어보고 싶다.",
  "(ai 사용 비율 70%)",
  "김동건 - 한 학기 동안 배운 코딩 능력을 시각적인 스토리로 표현할 수 있어 뜻깊었음.".
  "캐릭터 비주얼 디자인을 주도적으로 맡아, 직접 그린 그림들이 코드와 어우러져 하나의 작품이 되는 과정이 뿌듯했음.",
  '‘직접 그려서 삽입하고 싶다’는 막연한 생각이 있었는데, 이를 실제로 구현할 수 있어 의미 있었음",
  '인문 계열 수업 위주로 대학생활을 해온 터라 p5.js나 GitHub가 낯설고 어렵게 느껴졌지만,",
  "수업과 팀원들의 도움 덕분에 점차 익숙해졌고, 많은 것을 배울 수 있었음",
  "안강원 - 자바스크립트를 본격적으로 사용해 볼 수 있었음.",
  "p5.js에 외부 라이브러리를 추가하지 않고 게임을 개발한 경험을 살려, 게임 개발환경과 비슷한 환경 구성 위해 AI의 도움을 받으며 class와 함수들을 적극 사용함.",
  "어려운 문법을 많이 사용했지만 팀원들이 고집에 어울려 열심히 하였기에 만족스러운 개발 환경을 완성할 수 있었음.",
  "머리를 많이 쓰느라 고생했을 팀원들이 너무 고마웠고, 코딩에서 최적의 Ai의 활용을 한 것 같아 좋은 경험이 되었음.",

  "The End"
];

let guideWave;
let creditsY;        // 시작 y 위치
let scrollSpeed = 1; // 기본 속도

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
  textAlign(CENTER, CENTER)
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
