const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var bg,bgImg
var a1,a1Img,a2,a2Img
function preload() {
 bgImg=loadImage("snow3.jpg")
 a1Img=loadImage("snow4.webp")
 a2Img=loadImage("snow5.webp")
}
function setup() {
  createCanvas(1200,800);
  bg=createSprite(800,600)
  bg.addImage(bgImg)
  a1=createSprite(200,200)
  a1.addImage(a1Img)
  a2=createSprite(1000,200)
  a2.addImage(a2Img)
  a2.scale=0.5
}

function draw() {
  background(255,255,255);  
  drawSprites();
}