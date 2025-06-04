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


    // 1번 씬: "후회" 텍스트(중상단), "Start" 버튼(아래)
    scene.addObject(1, new SceneObject("후회", null, width / 2 - 200, height / 2 - 200, 400, 100));
    scene.addObject(1, new SceneButton("Start", null, width / 2 - 100, height / 2, 200, 80, () => {
        sceneManager.setSceneNumber(2);
    }));

    // 2번 씬: 7살
    scene.addObject(2, new SceneObject("boyS2", boyS2, 100, 100, boyS2.width, boyS2.height));
    scene.addObject(2, new SceneObject("boy2S2", boy2S2, 100, 100, boy2S2.width, boy2S2.height));

    scene.addObject(2, new SceneObject("girlS2", girlS2, 400, 100, girlS2.width, girlS2.height));
    scene.addObject(2, new SceneObject("girl2S2", girl2S2, 700, 100, girl2S2.width, girl2S2.height));

    // 3번 씬:여자아이 뒷모습 바라봄
    scene.addObject(3, new SceneObject("girlS3", girlS3, 400, 100, girlS3.width, girlS3.height));
    scene.addObject(3, new SceneObject("boyArm3", boyArm3, 700, 100, boyArm3.width, boyArm3.height));


    // 4번 씬: 남자아이 러브레터 전달하려다 맘
    scene.addObject(4, new SceneObject("boyS4", boyS4, 100, 100, boyS4.width, boyS4.height));
    scene.addObject(4, new SceneObject("boy2S4", boy2S4, 100, 100, boy2S4.width, boy2S4.height));
    
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

    // 6번 씬:주인공의 회상
    scene.addObject(6, new SceneObject("boyBack6", boyBack6, 300, 200, boyBack6.width, boyBack6.height));
    scene.addObject(6, new SceneObject("boyArm6", boyArm6, 600, 400, boyArm6.width, boyArm6.height));
    scene.addObject(6, new SceneObject("boy6", boy6, 400, 150, boy6.width, boy6.height));
        

    

    



    // 11번 씬: "Credit" 버튼
    scene.addObject(11, new SceneButton("Credit", null, width / 2 - 100, height / 2, 200, 80, () => {
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

    if (sceneManager.sceneNumber === 11) {
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
