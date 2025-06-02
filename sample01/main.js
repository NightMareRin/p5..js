function preload() {
    sourceImage = loadImage('../image01/assets/편지.jpg');
}

function setup() {
    createCanvas(1600, 900);

    sceneManager = new SceneManager();

    let scene = new Scene();

    img = sourceImage.get(0, 0, width/2, height/2);

    // 1번 씬: "후회" 텍스트(중상단), "Start" 버튼(아래)
    scene.addObject(1, new SceneObject("후회", null, width / 2 - 200, height / 2 - 200, 400, 100));
    scene.addObject(1, new SceneButton("Start", null, width / 2 - 100, height / 2, 200, 80, () => {
        guideWave = new GuideWaveButton(width / 2 -100, height / 2, 30);
        sceneManager.setSceneNumber(2);
    }));

    // 2번 씬: 이미지
    scene.addObject(2, new SceneObject("Image", img, width / 2 - img.width / 2, height / 2 - img.height / 2, img.width, img.height));

    // 2번 씬: "Credit" 버튼
    scene.addObject(2, new SceneButton("Credit", null, width / 2 - 100, height / 2, 200, 80, () => {
        guideWave = new GuideWaveButton(width / 2 - 100, height / 2, 30);
        sceneManager.setSceneNumber(3);
        creditsY = height; // 크레딧 시작 위치 초기화
        loop();
    }));

    sceneManager.setScene(scene);
    sceneManager.setSceneNumber(1);

    creditsY = height; // 크레딧 시작 위치 초기화
}

function draw() {
    background(100);

    if (sceneManager.sceneNumber === 3) {
        showCredits();
    }
    else {
        sceneManager.display();
    }
    fill(255);
    noStroke();
    textSize(32);
    textAlign(LEFT, TOP);
    text(`Scene Number: ${sceneManager.sceneNumber}`, 20, 20);
}