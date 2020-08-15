var max,max_img
var germ,germ2,germ_img,germ2_img
var bg,bg_img
var masks,masks_img,sanitizers,sanitizers_img,boosters,boosters_img


function preLoad(){
max_img=loadImage('images/max.jpg')
masks_img=loadImage('images/mask.jpg')
germ_img=loadImage('images/germ.jpg')
germ2_img=loadImage('images/germ2.jpg')
bg_img=loadImage('images/track.jpg')
sanitizers_img=loadImage('images/sanitizer.jpg')
boosters_img=loadImage('images/booster.jpg')
}
function setup() {
  createCanvas(400,800);
  max=createSprite(200,200,15,15)
  max.addImage("m1",max_img)
  germ=createSprite(250,340,15,15)
  germ.addImage("g1",germ_img)
  germ2=createSprite(290,470,15,15)
  germ2.addImage("g2",germ2_img)
  masks=createSprite(150,456,5,5)
  masks.addImage("ms",masks_img)
  boosters=createSprite(290,420,15,15)
  boosters.addImage("bst",boosters_img)
  sanitizers=createSprite(250,369,5,5)
  sanitizers.addImage("snt",sanitizers_img)

}

function draw() {
  background("yellow");  

  drawSprites();
}