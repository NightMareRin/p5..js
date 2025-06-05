function preload() {
    sourceImage = loadImage('../image01/assets/편지.jpg');
    spriteSheet = loadImage('../image01/assets/Screenshot_20250602_134342_Samsung Notes.png');
    spriteSheet2 = loadImage('../image01/assets/Screenshot_20250602_134447_Samsung Notes.png');
    spriteSheet3 = loadImage('../image01/assets/Screenshot_20250602_134707_Samsung Notes.png');
    spriteSheet4 = loadImage('../image01/assets/Screenshot_20250602_134841_Samsung Notes.png');
    
    spriteSheet6 = loadImage('../image01/assets/Screenshot_20250602_135024_Samsung Notes.png');
    spriteSheet7 = loadImage('../image01/assets/Screenshot_20250602_135054_Samsung Notes.png');
    spriteSheet8 = loadImage('../image01/assets/Screenshot_20250602_135329_Samsung Notes.png');
    spriteSheet9 = loadImage('../image01/assets/Screenshot_20250602_135606_Samsung Notes.png');
    spriteSheet10 = loadImage('../image01/assets/Screenshot_20250602_135837_Samsung Notes.png');

    // 손, 뒷통수 등 추가 파일입니다
    spriteSheet11 = loadImage('../image01/assets/1000002436.png');
    spriteSheet12 = loadImage('../image01/assets/1000002437.png');
    
}

function setup() {
    createCanvas(1600, 900);

    sceneManager = new SceneManager();

    let scene = new Scene();

    let boyS2, boy2S2, girlS2, girl2S2, boyS4, boy2S4, girlS3;
    let boyS5, girlS5, friendMs1, boy2S5, girl2S5, friendMs2;
    let boy3S5, girl3S5, friendBoyHs1, friendBoyHs2;
    let friendGirlHs1, friendGirlHs2, boy4S5, girl4S5, friend;

    let boyBack6, boyArm6, boy6;
    let boyArm3
    
    //여기서부터 지후님 파트
    let boyS6, girlS7,girl2S7,girl3S7,girl4S7,girl5S7;
    let boyS8, boy2S8, boy3S8, boy4S8;
    let boyS9, boy2S9, boy3S9, letter;
    let boyS10, boy2S10, boy3S10;

    img = sourceImage.get(0, 0, width/2, height/2);

    boyS2 = spriteSheet.get(0, 0, 256, 413);
    boy2S2 = spriteSheet.get(256, 0, 256, 413);
    girlS2 = spriteSheet.get(0, 413, 256, 413);
    girl2S2 = spriteSheet.get(256, 413, 256, 413);

    girlS3 = spriteSheet.get(512, 826, 256, 512);
    
    boyS4 = spriteSheet.get(0, 826, 256, 512);
    boy2S4 = spriteSheet.get(256, 826, 256, 512);

    boyS5 = spriteSheet2.get(0, 0, 256, 384);
    girlS5 = spriteSheet2.get(256, 0, 256, 384);
    friendMs1 = spriteSheet2.get(512, 0, 256, 384);
    boy2S5 = spriteSheet2.get(0, 768, 256, 512);
    girl2S5 = spriteSheet2.get(256, 768, 256, 512);
    friendMs2 = spriteSheet2.get(512, 768, 256, 512);

    boy3S5 = spriteSheet3.get(0, 0, 256, 384);  
    girl3S5 = spriteSheet3.get(256, 0, 256, 384); 
    friendBoyHs1 = spriteSheet3.get(512, 0, 256, 384);  
    friendBoyHs2 = spriteSheet3.get(0, 768, 256, 512);

    friendGirlHs1 = spriteSheet3.get(0, 0, 256, 512);        
    friendGirlHs2 = spriteSheet3.get(256, 0, 256, 512);      
    boy4S5 = spriteSheet3.get(0, 512, 256, 512);          
    girl4S5 = spriteSheet3.get(256, 512, 256, 512);     
    friend = spriteSheet3.get(512, 512, 256, 512);   

    boyBack6 = spriteSheet12.get(240, 40, 250, 180); 
    boyArm6 = spriteSheet12.get(250, 900, 230, 850);
    boy6 = spriteSheet6.get(40, 0, 690, 940);

    boyArm3 = spriteSheet11.get(250, 20, 500, 1660);
// 이지후
    boyS6 = spriteSheet6.get(0, 0, 256, 384);
    girlS7 = spriteSheet7.get(0, 0, 256, 384);
    girl2S7 = spriteSheet7.get(0, 0, 256, 384);
    girl3S7 = spriteSheet7.get(0, 0, 256, 384);
    girl4S7 = spriteSheet7.get(0, 0, 256, 384);
    girl5S7 = spriteSheet7.get(0, 0, 256, 384);

    boyS8 = spriteSheet8.get(0, 0, 256, 384);
    boy2S8 = spriteSheet8.get(0, 0, 256, 384);
    boy3S8 = spriteSheet8.get(0, 0, 256, 384);
    boy4S8 = spriteSheet8.get(0, 0, 256, 384);

    boyS9 = spriteSheet6.get(0, 0, 256, 384);
    boy2S9 = spriteSheet9.get(0, 0, 256, 384);
    boy3S9 = spriteSheet9.get(0, 0, 256, 384);
    letter = spriteSheet9.get(0, 0, 256, 384);

    boyS10 = spriteSheet10.get(0, 0, 256, 384);
    boy2S10 = spriteSheet10.get(0, 0, 256, 384);
    boy3S10 = spriteSheet10.get(0, 0, 256, 384);

    


    // 1번 씬: "후회" 텍스트(중상단), "Start" 버튼(아래)
    scene.addObject(1, new SceneObject("후회", null, width / 2 - 200, height / 2 - 200, 400, 100));
    scene.addObject(1, new SceneButton("Start", null, width / 2 - 100, height / 2, 200, 80, () => {
        guideWave = new GuideWaveButton(width / 2 -100, height / 2, 30);
        sceneManager.setSceneNumber(2);
    }));

    // 2번 씬: 7살
    scene.addObject(2, new SceneObject("boyS2", boyS2, 100, 100, boyS2.width, boyS2.height));
    scene.addObject(2, new SceneObject("boy2S2", boy2S2, 100, 100, boy2S2.width, boy2S2.height));

    scene.addObject(2, new SceneObject("girlS2", girlS2, 400, 100, girlS2.width, girlS2.height));
    scene.addObject(2, new SceneObject("girl2S2", girl2S2, 700, 100, girl2S2.width, girl2S2.height));
    scene.addObject(2, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(3);
}));

    // 3번 씬:여자아이 뒷모습 바라봄
    scene.addObject(3, new SceneObject("girlS3", girlS3, 400, 100, girlS3.width, girlS3.height));
    scene.addObject(3, new SceneObject("boyArm3", boyArm3, 700, 100, boyArm3.width, boyArm3.height));
    scene.addObject(3, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(4);
}));


    // 4번 씬: 남자아이 러브레터 전달하려다 맘
    scene.addObject(4, new SceneObject("boyS4", boyS4, 100, 100, boyS4.width, boyS4.height));
    scene.addObject(4, new SceneObject("boy2S4", boy2S4, 100, 100, boy2S4.width, boy2S4.height));
    scene.addObject(4, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(5);
}));
    
    // 5번 씬: 성장 몽타주
    scene.addObject(5, new SceneObject("boyS5", boyS5, 100, 100, boyS5.width, boyS5.height));
    scene.addObject(5, new SceneObject("girlS5", girlS5, 400, 100, girlS5.width, girlS5.height));
    scene.addObject(5, new SceneObject("friendMs1", friendMs1, 700, 100, friendMs1.width, friendMs1.height));

    scene.addObject(5, new SceneObject("boy2S5", boy2S5, 100, 500, boy2S5.width, boy2S5.height));
    scene.addObject(5, new SceneObject("girl2S5", girl2S5, 400, 500, girl2S5.width, girl2S5.height));
    scene.addObject(5, new SceneObject("friendMs2", friendMs2, 700, 500, friendMs2.width, friendMs2.height));

    scene.addObject(5, new SceneObject("boy3S5", boy3S5, 100, 100, boy3S5.width, boy3S5.height));
    scene.addObject(5, new SceneObject("girl3S5", girl3S5, 450, 100, girl3S5.width, girl3S5.height));

    scene.addObject(5, new SceneObject("friendBoyHs1", friendBoyHs1, 100, 1050, friendBoyHs1.width, friendBoyHs1.height));
    scene.addObject(5, new SceneObject("friendBoyHs2", friendBoyHs2, 450, 1050, friendBoyHs2.width, friendBoyHs2.height));

    scene.addObject(5, new SceneObject("friendGirlHs1", friendGirlHs1, 100, 100, friendGirlHs1.width, friendGirlHs1.height));
    scene.addObject(5, new SceneObject("friendGirlHs2", friendGirlHs2, 450, 100, friendGirlHs2.width, friendGirlHs2.height));

    scene.addObject(5, new SceneObject("boy4S5", boy4S5, 50, 550, boy4S5.width, boy4S5.height));
    scene.addObject(5, new SceneObject("girl4S5", girl4S5, 400, 550, girl4S5.width, girl4S5.height));
    scene.addObject(5, new SceneObject("friend", friend, 750, 550, friend.width, friend.height));
    scene.addObject(5, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(6);
}));

    // 6번 씬:주인공의 회상
    scene.addObject(6, new SceneObject("boyBack6", boyBack6, 300, 200, boyBack6.width, boyBack6.height));
    scene.addObject(6, new SceneObject("boyArm6", boyArm6, 600, 400, boyArm6.width, boyArm6.height));
    scene.addObject(6, new SceneObject("boy6", boy6, 400, 150, boy6.width, boy6.height));

    scene.addObject(6, new SceneObject("boyS6", boyS6, 100, 100, boyS6.width, boyS6.height));
    scene.addObject(6, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(7);
}));
    // 7번 씬: if? 여자 주인공 학생 시절
    scene.addObject(7, new SceneObject("girlS7", girlS7, 100, 100, girlS7.width, girlS7.height));
    scene.addObject(7, new SceneObject("girl2S7", girl2S7, 400, 100, girl2S7.width, girl2S7.height));
    scene.addObject(7, new SceneObject("girl3S7", girl3S7, 700, 100, girl3S7.width, girl3S7.height));
    scene.addObject(7, new SceneObject("girl4S7", girl4S7, 100, 500, girl4S7.width, girl4S7.height));
    scene.addObject(7, new SceneObject("girl5S7", girl5S7, 400, 500, girl5S7.width, girl5S7.height));
    scene.addObject(7, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(8);
}));
    // 8번 씬: if? 남자 주인공 학생 시절
    scene.addObject(8, new SceneObject("boyS8", boyS8, 100, 100, boyS8.width, boyS8.height));
    scene.addObject(8, new SceneObject("boy2S8", boy2S8, 400, 100, boy2S8.width, boy2S8.height));
    scene.addObject(8, new SceneObject("boy3S8", boy3S8, 700, 100, boy3S8.width, boy3S8.height));
    scene.addObject(8, new SceneObject("boy4S8", boy4S8, 100, 500, boy4S8.width, boy4S8.height));
    scene.addObject(8, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(9);
}));
    // 9번 씬: if? 편지를 전달했다면?
    scene.addObject(9, new SceneObject("boyS9", boyS9, 100, 100, boyS9.width, boyS9.height));
    scene.addObject(9, new SceneObject("boy2S9", boy2S9, 400, 100, boy2S9.width, boy2S9.height));
    scene.addObject(9, new SceneObject("boy3S9", boy3S9, 700, 100, boy3S9.width, boy3S9.height));
    scene.addObject(9, new SceneObject("letter", letter, 100, 500, letter.width, letter.height));
    scene.addObject(9, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(10);
}));
    // 10번 씬: 현재로 돌아온 남자
    scene.addObject(10, new SceneObject("boyS10", boyS10, 100, 100, boyS10.width, boyS10.height));
    scene.addObject(10, new SceneObject("boy2S10", boy2S10, 400, 100, boy2S10.width, boy2S10.height));
    scene.addObject(10, new SceneObject("boy3S10", boy3S10, 700, 100, boy3S10.width, boy3S10.height));
    scene.addObject(10, new SceneButton("Credit", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(11);
        loop();
}));

    sceneManager.setScene(scene);
    sceneManager.setSceneNumber(1);

    creditsY = height; // 크레딧 시작 위치 초기화
}

function draw() {
    background(100);

    if (sceneManager.sceneNumber === 11) {
        showCredits();
    }
    else {
        sceneManager.display();
        if(guideWave) {
            guideWave.updateAndDraw();
        }
    }
    fill(255);
    noStroke();
    textSize(32);
    textAlign(LEFT, TOP);
    text(`Scene Number: ${sceneManager.sceneNumber}`, 20, 20);    
}
