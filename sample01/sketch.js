let sceneManager;


function mousePressed() {
    if (guideWave) {
        guideWave.mousePressed(mouseX, mouseY);
    }
    sceneManager.scene.handleMousePressed(mouseX, mouseY, sceneManager.sceneNumber);
}

function mouseReleased() {
  sceneManager.scene.handleMouseReleased(sceneManager.sceneNumber);
}

function mouseDragged() {
  sceneManager.scene.handleMouseDragged(mouseX, mouseY, sceneManager.sceneNumber);
}


class Scene {
  constructor() {
      this.objectByNumber = {};
  }

  addObject(sceneNumber, object){
      if (!this.objectByNumber[sceneNumber]) {
          this.objectByNumber[sceneNumber] = [];
      }
      this.objectByNumber[sceneNumber].push(object);
  }

  display(sceneNumber) {
      if (this.objectByNumber[sceneNumber]) {
          for (let obj of this.objectByNumber[sceneNumber]) {
              obj.display();
          }
      }
  }

  handleClick() {
      if (this.objectByNumber[sceneNumber]) {
          for (let obj of this.objectByNumber[sceneNumber]) {
              if (obj.isClicked()) obj.handleClick();
          }
      }
  }

  handleMousePressed(mx, my, sceneNumber) {
  let objs = this.objectByNumber[sceneNumber];
  if (!objs) return;
  for (let obj of objs) {
    if (obj.pressed) obj.pressed(mx, my);
    if (obj.handleClick && obj.handleClick(mx, my)) {
      break; // 클릭된 버튼이 있으면 반복 종료
    }
  }
}

  handleMouseReleased(sceneNumber) {
    let objs = this.objectByNumber[sceneNumber];
    if (!objs) return;
    for (let obj of objs) {
      if (obj.released) obj.released();
    }
  }

  handleMouseDragged(mx, my, sceneNumber) {
    let objs = this.objectByNumber[sceneNumber];
    if (!objs) return;
    for (let obj of objs) {
      if (obj.dragged) obj.dragged(mx, my);
    }
  }
}

class SceneManager {
    constructor() {
        this.scene = null;
        this.sceneNumber = 0;
    }

    setScene(scene) {
        this.scene = scene;
    }

    setSceneNumber(number) {
        this.sceneNumber = number;
    }

    display() {
        if (this.scene) {
            this.scene.display(this.sceneNumber);
        }
    }

    handleClick() {
        if (this.scene) {
            this.scene.handleClick(this.sceneNumber);
        }
    }
}

class SceneObject {
  constructor(name, img, x, y, w, h) {
    this.name = name;
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    if (this.img) {
      image(this.img, this.x, this.y, this.w, this.h);
    } else {
      fill(200);
      rect(this.x, this.y, this.w, this.h, 10);
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(24);
      text(this.name, this.x + this.w / 2, this.y + this.h / 2);
      textAlign(LEFT, BASELINE);
    }
  }
}

class SceneButton extends SceneObject {
  constructor(name, img, x, y, w, h, onClick, delay = 0) {
    super(name, img, x, y, w, h);
    this.onClick = onClick;
    this.delay = delay;
    this.guide = new GuideWaveButton(this.x + this.w / 2, this.y + this.h / 2, Math.min(this.w, this.h) * 0.8);
    this.guide.visible = true;
  }

  display() {
    if (this.img) {
      image(this.img, this.x, this.y, this.w, this.h);
    } else {
      super.display();
    }
    // 가이드/파동 효과 그리기
    if (this.guide) {
      this.guide.updateAndDraw();
    }
  }

  handleClick(mx, my) {
    // 가이드가 보일 때만 클릭 허용
    if (this.guide && this.guide.visible && dist(mx, my, this.guide.x, this.guide.y) < this.guide.size / 2) {
      this.guide.mousePressed(mx, my);
      if (this.delay > 0) {
        setTimeout(() => this.onClick(), this.delay);
      } else {
        this.onClick();
      }
      return true; // 클릭된 경우 true 반환
    }
    return false; // 클릭 안 된 경우 false 반환
  }
}
class SceneDraggable extends SceneObject {
  constructor(name, img, x, y, w, h, onDragAction = null, dragDistance = 100, allowedDirection = "right") {
    super(name, img, x, y, w, h);
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.startX = 0;
    this.startY = 0;
    this.onDragAction = onDragAction;
    this.dragDistance = dragDistance;
    this._dragged = false;
    this.allowedDirection = allowedDirection; // ← 추가
  }

  display() {
    if (this.img) {
      image(this.img, this.x, this.y, this.w, this.h);
    } else {
      super.display();
    }
  }

  pressed(mx, my) {
    if (mx > this.x && mx < this.x + this.w &&
        my > this.y && my < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x - mx;
      this.offsetY = this.y - my;
      this.startX = mx;
      this.startY = my;
      this._dragged = false;
    }
  }

  released() {
    if (this.dragging && !this._dragged) {
      // 드래그가 충분히 안 됐으면 원위치
      this.x = this.x;
      this.y = this.y;
    }
    this.dragging = false;
  }

  dragged(mx, my) {
    if (!this.dragging) return;
    // 드래그 방향 및 거리 계산
    const dx = mx - this.startX;
    const dy = my - this.startY;
    const distDragged = dist(mx, my, this.startX, this.startY);

    // 방향별로 거리 체크
    let valid = false;
    if (this.allowedDirection === "right" && dx > this.dragDistance && abs(dx) > abs(dy)) valid = true;
    if (this.allowedDirection === "left" && dx < -this.dragDistance && abs(dx) > abs(dy)) valid = true;
    if (this.allowedDirection === "down" && dy > this.dragDistance && abs(dy) > abs(dx)) valid = true;
    if (this.allowedDirection === "up" && dy < -this.dragDistance && abs(dy) > abs(dx)) valid = true;

    if (!this._dragged && valid) {
      this._dragged = true;
      this.dragging = false;

      // 부드럽게 이동 애니메이션 (animeManager 필요)
      let moveAnim = (target => {
        let frames = 20;
        let moved = 0;
        let moveX = 0, moveY = 0;
        if (this.allowedDirection === "right") moveX = this.dragDistance;
        if (this.allowedDirection === "left") moveX = -this.dragDistance;
        if (this.allowedDirection === "down") moveY = this.dragDistance;
        if (this.allowedDirection === "up") moveY = -this.dragDistance;
        const startX = target.x, startY = target.y;
        return function (t) {
          moved++;
          t.x = startX + moveX * (moved / frames);
          t.y = startY + moveY * (moved / frames);
          if (moved >= frames) {
            t.x = startX + moveX;
            t.y = startY + moveY;
            if (typeof t.onDragAction === "function") t.onDragAction(t.allowedDirection, t);
            return true;
          }
          return false;
        };
      })(this);

      animeManager.add(this, moveAnim);
    }
  }
}

