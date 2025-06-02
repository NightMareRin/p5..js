let sceneManager;

function setup() {
    createCanvas(1600, 900);

    sceneManager = new SceneManager();

    let scene = new Scene()

    scene.addObject(1, new SceneText("1. SceneManager", 100, 100));
    scene.addObject(2, new SceneText("2. SceneManager", 100, 200));
    scene.addObject(2, new SceneButton("Next", 100, 400, () => {
        sceneManager.setSceneNumber(3);
    }))
    scene.addObject(3, new SceneText("3. SceneManager", 100, 300));

    sceneManager.setScene(scene);
    sceneManager.setSceneNumber(1);
}

function draw() {
    background(20);
    sceneManager.display();
}

function mousePressed() {
    sceneManager.handleClick();
}


class Scene {
    consturctor() {
        this.objectByNumber = {};
    }

    addObject(sceneNumber, object){
        if (!this.objectByNumber[sceneNumber]) {
            this.objectbyNumber[sceneNumber] = [];
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

    handleClcick() {
        if (this.scene) {
            this.scene.handleClick(this.sceneNumber);
        }
    }
}