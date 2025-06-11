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
    animeManager.add(sceneManager.scene.objectByNumber[7][0], t => swapTwoImagesInOrder(t, {
      img1: t.altImg1,
      img2: t.altImg2,
      frame1: 80,
      frame2: 80,
      onFinish: (t) => {
        animeManager.add(sceneManager.scene.objectByNumber[7][1], t => waitForSpaceAndSwap(t,
          t.altImg5, t.altImg6, 80, 80, (t) => 
            animeManager.add(t, t => swapTwoImagesInOrder(t, {
              img1: t.altImg7,
              img2: t.altImg8,
              frame1: 80,
              frame2: 80,
              onFinish: (t) => {
                animeManager.add(sceneManager.scene.objectByNumber[7][0], t => swapTwoImagesInOrder(t, {
                  img1: t.altImg3,
                  img2: t.altImg4,
                  frame1: 80,
                  frame2: 80
                }))
              }
            }))
        ))
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

function swapTwoImagesInOrder(target, {
  img1,
  img2,
  frame1 = 30,
  frame2 = 30,
  onFinish = null
}) {
  // 프레임 변수 강제 초기화
  if (target._swap2Frame === undefined) {
    target._swap2Frame = 0;
    target._originalImg = target.img;
    target._swappedOnce = false;
  }
  target._swap2Frame++;

  if (!target._swappedOnce && target._swap2Frame >= frame1) {
    target.img = img1;
    target._swappedOnce = true;
  }

  if (target._swappedOnce && target._swap2Frame >= frame1 + frame2) {
    target.img = img2;
    delete target._swap2Frame;
    delete target._originalImg;
    delete target._swappedOnce;
    if (onFinish) onFinish(target);
    return true;
  }
  return false;
}

function waitForSpaceAndSwap(target, img1, img2, frame1 = 30, frame2 = 30, onFinish = null) {
  if (!waitingForSpace) {
    waitingForSpace = true;
    return false; // 아직 끝나지 않음
  }
  if (waitingForSpace === 'ready') {
    waitingForSpace = false;
    animeManager.add(target, t => swapImageOnce(t, {
      newImg: img1,
      frame: frame1,
      onFinish: (t) => {
        animeManager.add(t, t2 => swapImageOnce(t2, {
          newImg: img2,
          frame: frame2,
          onFinish
        }));
      }
    }));
    return true;
  }
  return false;
}

// 씬 진입 시 애니메이션 등록
function onSceneEnter(sceneNumber, scene) {
  if (sceneNumber === 2) {
   
 const objs = sceneManager.scene.objectByNumber[2];
    const boy2 = objs.find(o => o.name === "boyS2");
    const girl2 = objs.find(o => o.name === "girlS2");

    // boy 이미지 순차 전환
    animeManager.add(boy2, t => swapImageOnce(t, {
      newImg: t.altImg1, // boy2S2
      frame: 40,
      onFinish: (target) => {
       
      }
    }));

    // girl 이미지 순차 전환
    animeManager.add(girl2, t => swapImageOnce(t, {
      newImg: t.altImg1, // girl2S2
      frame: 40,
      onFinish: (target) => {
        
    }));
  }
}


  if (sceneNumber === 4) {
  const boy = scene.objectByNumber[4].find(obj => obj.name === "boyS4");
  boy.altImg = boy2S4; // 교체 이미지 등록

  animeManager.add(
    boy,
    t => swapImageOnce(t, {
      newImg: t.altImg,
      frame: 40,
      onFinish: (target) => {
        
      }
    })
  );
}

if (sceneNumber === 5) {
    const objs = sceneManager.scene.objectByNumber[5];
    const boy5 = objs.find(o => o.name === "boyS5");
    const girl5 = objs.find(o => o.name === "girlS5");

    // boy 이미지 순차 전환
    animeManager.add(boy5, t => swapImageOnce(t, {
      newImg: t.altImg1, // boy2S5
      frame: 40,
      onFinish: (target) => {
        animeManager.add(target, t2 => swapImageOnce(t2, {
          newImg: t2.altImg2, // boy3S5
          frame: 40,
          onFinish: (target2) => {
            animeManager.add(target2, t3 => swapImageOnce(t3, {
              newImg: t3.altImg3, // boy4S5
              frame: 40
            }));
          }
        }));
      }
    }));

    // girl 이미지 순차 전환
    animeManager.add(girl5, t => swapImageOnce(t, {
      newImg: t.altImg1, // girl2S5
      frame: 40,
      onFinish: (target) => {
        animeManager.add(target, t2 => swapImageOnce(t2, {
          newImg: t2.altImg2, // girl3S5
          frame: 40,
          onFinish: (target2) => {
            animeManager.add(target2, t3 => swapImageOnce(t3, {
              newImg: t3.altImg3, // girl4S5
              frame: 40
            }));
          }
        }));
      }
    }));
  }
}

function keyPressed() {
  if ((key === 'a' || key === 'A' || keyCode === LEFT_ARROW) && sceneManager.sceneNumber === 7) {
    // 캐릭터 오브젝트에 애니메이션 등록
    animeManager.add(sceneManager.scene.objectByNumber[7][1], moveLeftWithWalkAnim);
  }
  if (key === ' ' || keyCode === 32) {
    if (waitingForSpace) waitingForSpace = 'ready';
  }
}
