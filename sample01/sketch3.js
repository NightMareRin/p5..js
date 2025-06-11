let waitingForSpace = false;
class AnimeManager {
  constructor() {
    this.anims = []; // {target, func, done}
  }

  add(target, animFunc) {
    this.anims.push({ target, animFunc, done: false });
  }

  update() {
    for (let anim of this.anims) {
      if (!anim.done) {
        anim.done = anim.animFunc(anim.target);
      }
    }
    // 끝난 애니메이션 제거
    this.anims = this.anims.filter(anim => !anim.done);
  }
}

// 전역 animeManager 인스턴스
const animeManager = new AnimeManager();


function moveRight(target) {
  console.log("moveRight 실행", target.x);
  if (target._moveFrame === undefined) {
    target._moveFrame = 0;
    target._startX = target.x;
  }
  target.x = target._startX + (target._moveFrame / 60) * 200;
  target._moveFrame++;
  if (target._moveFrame >= 60) {
    target.x = target._startX + 200;
    delete target._moveFrame;
    delete target._startX;

    return true;
  }
  return false;
}

function moveLeftWithWalkAnim(target) {
  if (target._moveFrame === undefined) {
    target._moveFrame = 0;
    target._startX = target.x;
    target._imgA = target.img;      // 현재 이미지
    target._imgB = target.altImg;   // 걷기용 다른 이미지 (main.js에서 altImg로 지정)
  }
  // 50프레임마다 이미지 교체
  if (Math.floor(target._moveFrame / 50) % 2 === 0) target.img = target._imgA;
  else target.img = target._imgB;

  target.x = target._startX - target._moveFrame * 2; // 2px씩 왼쪽 이동
  target._moveFrame++;

  // 목표 좌표 도달 시
  if (target.x <= 1000) {
    target.img = target._imgA; // 멈출 때 원래 이미지로
    delete target._moveFrame;
    delete target._startX;
    delete target._imgA;
    delete target._imgB;
    animeManager.add(sceneManager.scene.objectByNumber[7][0], t => swapImageOnce(t, {
      newImg: t.altImg1,
      frame: 80,
      onFinish: (target) => {
        animeManager.add(sceneManager.scene.objectByNumber[7][0], t => swapImageOnce(t, {
          newImg: t.altImg2,
          frame: 80
        }))
      }
    }))
    return true;
  }
  return false;
}

function swapImageOnce(target, {
  newImg,
  frame = 15,
  onFinish = null
}) {
  if (target._swapFrame === undefined) {
    target._swapFrame = 0;
    target._originalImg = target.img;
  }
  target._swapFrame++;
  // 지정된 프레임이 되면 이미지 교체
  if (target._swapFrame === frame) {
    target.img = newImg;
  }
  // 애니메이션 종료: 교체 후 10프레임 뒤
  if (target._swapFrame >= frame + 10) {
    delete target._swapFrame;
    delete target._originalImg;
    if (onFinish) onFinish(target);
    return true;
  }
  return false;
}

// 씬 진입 시 애니메이션 등록
function onSceneEnter(sceneNumber, scene) {
  if (sceneNumber === 2) {
    console.log("애니메이션 등록");
    animeManager.add(scene.objectByNumber[2][0], moveRight);
  }
  if (sceneNumber === 5) {
    
  }
}

function keyPressed() {
  if ((key === 'a' || key === 'A' || keyCode === LEFT_ARROW) && sceneManager.sceneNumber === 7) {
    // 캐릭터 오브젝트에 애니메이션 등록
    animeManager.add(sceneManager.scene.objectByNumber[7][1], moveLeftWithWalkAnim);
  }
}