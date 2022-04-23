var starImg, bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fairy, imgFairy;
var fairyAnimation
var sonzinho_ruin

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    starImg = loadImage("star.png");
    bgImg = loadImage("starNight.png");
    imgFairy = loadImage("fairy.png");
    fairyAnimation = loadAnimation("fairyImage1.png", "fairyImage2.png");
    sonzinho_ruin = loadSound("JoyMusic.mp3");
    //xebélébédeuson
    

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    sonzinho_ruin.play()

    //criar sprite de fada e adicionar animação para fada
    fairy = createSprite(108, 608)
    fairy.addAnimation("will_wheaton", fairyAnimation)
    fairy.scale = 0.25
    star = createSprite(650, 30);
    star.addImage(starImg);
    star.scale = 0.2;

    engine = Engine.create();
    world = engine.world;

    starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
    World.add(world, starBody);

    Engine.run(engine);
}
function draw() {
    background(bgImg)
    star.x = starBody.position.x
    star.y = starBody.position.y
    if(starBody.position.y > 470)
    Matter.Body.setStatic(starBody,true)


    drawSprites()

}

function keyPressed() {

    if(keyCode === 65 ) 
    fairy.x -= 20

    if(keyCode === 68 )
    fairy.x += 20

    if(keyCode === 83)
    Matter.Body.setStatic(starBody,false)

}
