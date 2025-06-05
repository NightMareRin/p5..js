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
    if (obj.handleClick) obj.handleClick(mx, my);
  }
}

  handleMouseReleased(sceneNumber) {
    let objs = this.objectByNumber[sceneNumber];
    if (!objs) return;
    for (let obj of objs) {
      if (obj.released) obj.release();
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
    // GuideWaveButton 인스턴스 사용
    this.guide = new GuideWaveButton(this.x + this.w / 2, this.y + this.h / 2, Math.min(this.w, this.h) * 0.8);
    this.guide.visible = true; // 버튼 생성 시 가이드 표시
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
      this.guide.mousePressed(mx, my); // 가이드 숨기고 wave 시작
      if (this.delay > 0) {
        setTimeout(() => this.onClick(), this.delay);
      } else {
        this.onClick();
      }
    }
  }
}
class SceneDraggable extends SceneObject {
  constructor(name, img, x, y, w, h) {
    super(name, img, x, y, w, h);
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
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
    }
  }

  released() {
    this.dragging = false;
  }

  dragged(mx, my) {
    if (this.dragging) {
      this.x = mx + this.offsetX;
      this.y = my + this.offsetY;
    }
  }
}