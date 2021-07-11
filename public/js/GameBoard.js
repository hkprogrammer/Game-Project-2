
class GameBoard{

    constructor(width,height,boardBlocks,boardItems,boardStatus){
        this.boardWidth = width;
        this.boardHeight = height;
        this.boardBlocks = boardBlocks;
        this.boardItems = boardItems;
        this.boardStatus = boardStatus;
    }
}



var gameBoard;
var blockArray = []

//setup function
function setup(){

    //creating canvas to the browser width height
    createCanvas(displayWidth,displayHeight)
    
    for(let s=0;s<blockYCount;s++){

        let arrayLong =[];
        
        for(let i = 0;i <blockLongXCount;i++){
            var x = (i*blockGapDistanceX) + blockStartX;
            var y = (s*blockGapDistanceY) + blockStartY
            arrayLong.push([x,y])
        }

        let arrayShort = [];
        for(let i = 0;i<blockShortXCount;i++){
            var x = arrayLong[i][0] + blockOffSetX;
            var y = arrayLong[i][1] - blockOffSetY;
            arrayShort.push([x,y])
        }
        blockArray.push([arrayLong,arrayShort])
    }
    
    let extraArray = [];
    for(let i = 0;i<blockShortXCount;i++){
        var x = blockArray[blockArray.length-1][0][i][0] + blockOffSetX;
        var y = blockArray[blockArray.length-1][0][i][1] + blockOffSetY;
        extraArray.push([x,y])
    }
    blockArray.push(extraArray)

    console.log(blockArray)
    
    


    //gameBoard = new GameBoard(displayWidth,displayHeight, , s)
}

//drawing function 
function draw(){
    //framerates
    frameRate(10)
    //background
    background(backgroundColor)
    
    drawHexagons();
    

}

function drawHexagons(){
    for(let s=0;s<blockArray.length;s++){
        //extraArrayExceptionHandler
        if(s == blockArray.length-1){
            for(let i of blockArray[s]){
                hexagon(i[0],i[1],dilationRate)
            }
            break
        }
        for(let i of blockArray[s][0]){
            hexagon(i[0],i[1],dilationRate)
            
        }
    
        for(let i of blockArray[s][1]){
            hexagon(i[0],i[1],dilationRate)
        }
    
    }
   
    
}


function hexagon(transX, transY, s) {
    stroke(blockStrokeColor);
    strokeWeight(blockStrokeWidth);
    fill('rgb(125, 125, 125)');
    push();
    translate(transX, transY);
    scale(s);
    beginShape();
      vertex(-adjacentVertexX, -blockHeight);
      vertex(adjacentVertexX, -blockHeight);
      vertex(blockRadius, 0);
      vertex(adjacentVertexX, blockHeight);
    vertex(-adjacentVertexX, blockHeight);
      vertex(-blockRadius, 0);
      endShape(CLOSE); 
      pop();
}