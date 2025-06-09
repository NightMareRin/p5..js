// AnimeManager 클래스
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

// 예시 애니메이션 함수들

// 60프레임 동안 오른쪽으로 200px 이동
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

// 30프레임 동안 투명도 0까지 fade out
function fadeOut(target) {
  if (target.alpha === undefined) target.alpha = 255;
  target.alpha -= 255 / 30;
  if (target.alpha <= 0) {
    target.alpha = 0;
    return true;
  }
  return false;
}

// 40프레임 동안 크기 1.5배로 scale up
function scaleUp(target) {
  if (target._scaleFrame === undefined) {
    target._scaleFrame = 0;
    target._startScale = target.scale || 1;
  }
  target.scale = target._startScale + (target._scaleFrame / 40) * 0.5;
  target._scaleFrame++;
  if (target._scaleFrame >= 40) {
    target.scale = target._startScale + 0.5;
    delete target._scaleFrame;
    delete target._startScale;
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
  // ... 등등
}

// 필요하다면 export (ESM 환경에서)
// export { animeManager, moveRight, fadeOut, scaleUp };