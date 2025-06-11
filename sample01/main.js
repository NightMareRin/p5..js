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
    // 방
    spriteSheet13 = loadImage('../image01/assets/KakaoTalk_20250609_135759284.jpg');
    spriteSheet14 = loadImage('../image01/assets/KakaoTalk_20250609_135759284_01.jpg');
    spriteSheet15 = loadImage('../image01/assets/KakaoTalk_20250609_141249636.jpg');
    

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
    let girlS7,girl2S7,girl3S7,girl4S7,girl5S7;
    let boyS8, boy2S8, boy3S8, boy4S8;
    let boyS9, boy2S9, boy3S9, letter;
    let boyS10, boy2S10, boy3S10;

    img = sourceImage.get(0, 0, width/2, height/2);

    boyS2 = spriteSheet.get(0, 0, 600, 780);
    boy2S2 = spriteSheet.get(600, 0, 850, 780);
    girlS2 = spriteSheet.get(0, 800, 650, 780);
    girl2S2 = spriteSheet.get(650, 800, 650, 780);

    girlS3 = spriteSheet.get(1000, 1500, 518, 1645);
    boyArm3 = spriteSheet11.get(0, 0, 1002, 2191);

    boyS4 = spriteSheet.get(0, 1700, 500, 945);
    boy2S4 = spriteSheet.get(500, 1700, 500, 945);
//S5
    boyS5 = spriteSheet2.get(0, 0, 500, 1300);
    girlS5 = spriteSheet2.get(500, 0 , 500, 1300);
    friendMs1 = spriteSheet2.get(1000, 0 , 500, 1300);
    boy2S5 = spriteSheet2.get(0, 1300, 500, 1300);
    girl2S5 = spriteSheet2.get(500, 1300, 500, 1300);
    friendMs2 = spriteSheet2.get(1000, 1300, 500, 1300);
//img

    boy3S5 = spriteSheet3.get(0, 0, 650, 1300);  
    girl3S5 = spriteSheet3.get(650, 0, 650, 1300); 
    friendBoyHs1 = spriteSheet3.get(0, 1400, 650, 1239);  
    friendBoyHs2 = spriteSheet3.get(650, 1400, 650, 1239);
//img
    friendGirlHs1 = spriteSheet4.get(0, 0, 718, 1230);        
    friendGirlHs2 = spriteSheet4.get(718, 0, 718, 1230);      
    boy4S5 = spriteSheet4.get(0, 1230, 475, 1290);          
    girl4S5 = spriteSheet4.get(475, 1230, 475, 1290);     
    friend = spriteSheet4.get(1000, 1230, 475, 1290);   

    boyBack6 = spriteSheet12.get(0, 0, 910, 750); 
    boyArm6 = spriteSheet12.get(0, 750, 910, 1641);
    boy6 = spriteSheet6.get(0, 0, 1086, 1357);
//background
    room1 = spriteSheet13.get(0, 0, 1387, 1051);
    room2 = spriteSheet14.get(0, 0, 1186, 876);
    room3 = spriteSheet15.get(0, 0, 1174, 876 );

// 이지후

    girlS7 = spriteSheet7.get(0, 0, 424, 1344);
    girl2S7 = spriteSheet7.get(450, 0, 424, 1344);
    girl3S7 = spriteSheet7.get(830, 0, 424, 1344);
    girl4S7 = spriteSheet7.get(0, 1344, 424, 1344);
    girl5S7 = spriteSheet7.get(848, 1344, 424, 1344);

    boyS8 = spriteSheet8.get(0, 0, 515.5, 1360.5);
    boy2S8 = spriteSheet8.get(650, 0, 515.5, 1360.5);
    boy3S8 = spriteSheet8.get(0, 1360.5, 515.5, 1360.5);
    boy4S8 = spriteSheet8.get(515.5, 1360.5 , 550, 1360.5);

    boyS9 = spriteSheet9.get(0, 0, 630, 1280);
    boy2S9 = spriteSheet9.get(630, 0, 645, 1280);
    boy3S9 = spriteSheet9.get(0, 1350, 1270, 1330);
    letter = spriteSheet9.get(0, 1300, 150, 100);

    boyS10 = spriteSheet10.get(0, 0, 1170, 800);
    boy2S10 = spriteSheet10.get(0, 910, 545, 1804);
    boy3S10 = spriteSheet10.get(585, 910, 585, 1804);




    // 1번 씬: "후회" 텍스트(중상단), "Start" 버튼(아래)
    scene.addObject(1, new SceneObject("후회", null, width / 2 - 200, height / 2 - 200, 400, 100));
    scene.addObject(1, new SceneButton("Start", null, width / 2 - 100, height / 2, 200, 80,  function() {
        animeManager.add(this, moveRight); // 버튼에 오른쪽 이동 애니메이션 적용
        animeManager.add(scene.objectByNumber[1][0], moveRight); // "후회" 오브젝트도 이동
        setTimeout(() => {
            sceneManager.setSceneNumber(2);
        }, 500); // 0.5초 후 씬 전환
    }, 0));
    scene.addObject(1, new SceneDraggable(
        "드래그로 넘기기", // 이름
        null,             // 이미지 (없으면 null)
        width / 2 - 100,  // x
        height / 2 + 120, // y (Start 버튼 아래쪽 등 원하는 위치)
        200,              // w
        80,               // h
        (dir, obj) => {   // onDragAction: 오른쪽 드래그 성공 시 실행
          if (dir === "right") {
            sceneManager.setSceneNumber(2);
          }
        },
        100,              // dragDistance: 최소 드래그 거리(px)
        "right"           // allowedDirection: 오른쪽만 허용
      ));

    // 2번 씬: 7살
    scene.addObject(2, new SceneObject("boyS2", boyS2, 100, 60, 300, 400));
    scene.addObject(2, new SceneObject("boy2S2", boy2S2, 100, 60, 400, 400));

    scene.addObject(2, new SceneObject("girlS2", girlS2, 1200, 60, 300, 400));
    scene.addObject(2, new SceneObject("girl2S2", girl2S2, 1200, 60, 300, 400));
    scene.addObject(2, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80,   () => {
        sceneManager.setSceneNumber(3);
    }, 1000))

    // 3번 씬:여자아이 뒷모습 바라봄
    scene.addObject(3, new SceneObject("girlS3", girlS3, 800, 60, 200, 600));
    scene.addObject(3, new SceneObject("boyArm3", boyArm3, 1400, 100, 200, 400));
    scene.addObject(3, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80,  () => {
        sceneManager.setSceneNumber(4);
    }, 1000));


    // 4번 씬: 남자아이 러브레터 전달하려다 맘
    scene.addObject(4, new SceneObject("boyS4", boyS4, 300, 60, 300, 400));
    scene.addObject(4, new SceneObject("boy2S4", boy2S4, 700, 60, 300, 400));
    scene.addObject(4, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80,   () => {
        sceneManager.setSceneNumber(5);
    }, 1000));

    // 5번 씬: 성장 몽타주
    scene.addObject(5, new SceneObject("boyS5", boyS5, 100, 60, 100, 200));
    scene.addObject(5, new SceneObject("girlS5", girlS5, 200, 60, 100, 200));
    scene.addObject(5, new SceneObject("friendMs1", friendMs1, 300, 60, 100, 200));

    scene.addObject(5, new SceneObject("boy2S5", boy2S5, 400, 60, 100, 200));
    scene.addObject(5, new SceneObject("girl2S5", girl2S5, 500, 60, 100, 200));
    scene.addObject(5, new SceneObject("friendMs2", friendMs2, 600, 100, 100, 200));

    scene.addObject(5, new SceneObject("boy3S5", boy3S5, 700, 60, 100, 200));
    scene.addObject(5, new SceneObject("girl3S5", girl3S5, 800, 60, 100, 200));

    scene.addObject(5, new SceneObject("friendBoyHs1", friendBoyHs1, 100, 400, 100, 200));
    scene.addObject(5, new SceneObject("friendBoyHs2", friendBoyHs2, 200, 400, 100, 200 ));

    scene.addObject(5, new SceneObject("friendGirlHs1", friendGirlHs1, 300, 400, 100, 200));
    scene.addObject(5, new SceneObject("friendGirlHs2", friendGirlHs2, 400, 400, 100, 200));

    scene.addObject(5, new SceneObject("boy4S5", boy4S5, 500, 400, 100, 200));
    scene.addObject(5, new SceneObject("girl4S5", girl4S5, 600, 400, 100, 200));
    scene.addObject(5, new SceneObject("friend", friend, 700, 400, 100, 200));
    scene.addObject(5, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80,  () => {
        sceneManager.setSceneNumber(6);
    }, 1000));

    // 6번 씬:주인공의 회상
    scene.addObject(6, new SceneObject("room1", room1, 0, 0, 1600, 900));
    scene.addObject(6, new SceneObject("room2", room2, 0 , 0, 1600, 900));
    scene.addObject(6, new SceneObject("boyBack6", boyBack6, 600, 60, 300, 300));
    scene.addObject(6, new SceneObject("boyArm6", boyArm6, 200, 400, 200, 500));
    scene.addObject(6, new SceneObject("boy6", boy6, 100, 60, 300, 200));
    


    scene.addObject(6, new SceneButton("next", null, width / 2 - 100, height / 2, 200, 80,  () => {
        sceneManager.setSceneNumber(7);
    }, 1000));

    // 7, 8, 9번 씬 통합: if?  학생 시절
    let girl = new SceneObject("girlS7", girlS7, 400, 100, 300, 600);
    girl.altImg1 = girl2S7;
    girl.altImg2 = girl3S7;
    girl.altImg3 = girl4S7;
    girl.altImg4 = girl5S7;
    scene.addObject(7, girl);
    // scene.addObject(7, new SceneObject("girl2S7", girl2S7, 200, 60, 100, 200));
    // scene.addObject(7, new SceneObject("girl3S7", girl3S7, 300, 60, 100, 200));
    // scene.addObject(7, new SceneObject("girl4S7", girl4S7, 400, 60, 100, 200));
    // scene.addObject(7, new SceneObject("girl5S7", girl5S7, 500, 60, 100, 200));

    
    
    let boyWalk = new SceneObject("boyS8", boyS8, 1400, 100, 300, 600);
    boyWalk.altImg = boy2S8;
    scene.addObject(7, boyWalk);
    // scene.addObject(7, new SceneObject("boy2S8", boy2S8, 700, 60, 100, 200));
    scene.addObject(7, new SceneObject("boy3S8", boy3S8, 800, 60, 100 , 200));
    scene.addObject(7, new SceneObject("boy4S8", boy4S8, 900, 60, 100, 200));
   
    
    scene.addObject(7, new SceneObject("boyS9", boyS9, 100, 400, 100, 200));
    scene.addObject(7, new SceneObject("boy2S9", boy2S9, 200, 400, 100, 200));
    
    scene.addObject(7, new SceneButton("Credit", null, width / 2 - 100, height / 2, 200, 80,  () => {
        sceneManager.setSceneNumber(8);
        loop();
    }, 1000));
    
    // 10번 씬: 현재로 돌아온 남자
    scene.addObject(8, new SceneObject("room3",room3, 0, 0 , 1600, 900));
    scene.addObject(8, new SceneObject("boyS10", boyS10, 400, 100, 400, 420));
    scene.addObject(8, new SceneObject("boy2S10", boy2S10, 200, 450, 150, 450 ));
    scene.addObject(8, new SceneObject("boy3S10", boy3S10, 900, 450, 150, 450));
    scene.addObject(8, new SceneObject("boy3S9", boy3S9, 1000, 400, 400, 420));
    scene.addObject(8, new SceneObject("letter", letter, 600, 500, 100, 200));
    scene.addObject(8, new SceneButton("Credit", null, width / 2 - 100, height / 2, 200, 80,  () => {
        sceneManager.setSceneNumber(9);
        loop();
    }, 1000));

    sceneManager.setScene(scene);
    sceneManager.setSceneNumber(7);

    // 반드시 이 아래에 래핑!
    const originalSetSceneNumber = sceneManager.setSceneNumber.bind(sceneManager);
    sceneManager.setSceneNumber = function(num) {
      originalSetSceneNumber(num);
      onSceneEnter(num, scene); // 씬 진입 시마다 실행
    };

    creditsY = height; // 크레딧 시작 위치 초기화
}

function draw() {
    background(100);

    animeManager.update();

    if (sceneManager.sceneNumber === 9) {
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
