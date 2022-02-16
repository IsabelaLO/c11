var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
  path=createSprite(200,200);
  path.addImage(pathImg);
//dar velocidade ao chão
  path.velocityY= 10;
// mudar o tamanho do chão
  path.scale = 1.2;

//criando menino que corre
  boy=createSprite(180, 340);
// mudar o tamanho do chão
  boy.scale = 1.0;
// dar uma animação ao menino
  boy.addAnimation("JakeRunning", boyImg);
  
// crie Boundary (Limite) esquerdo
  leftBoundary=createSprite(0,0,100,800);
//criando borda esquerda invisivel
  leftBoundary.visible = false;
//crie Boundary direito (limite)
  rightBoundary=createSprite(400,0,100,800);
// criando borda invisivel direita
  rightBoundary.visible = false;
}

function draw() {
  background(0);
   
  // menino se movendo no eixe X com o mouse
  boy.x = World.mouseX;
  //criando as bordas
  edges = createEdgeSprites();
  //fazendo o menino colidir com as bordas no indice 3
  boy.collide(edges);
  // fazendo o menino colidir com a borda invisivel esquerda

  // fazendo o menino colidir com a borda invisivel direita

  
  //código para reiniciar o fundo
  if(path.y > 400){
    path.y=height/2;
 }
  
  drawSprites();
}
