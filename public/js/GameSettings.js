
//constants

const dilationRate = 0.2
const backgroundColor = 'rgb(10,182,245)'; //AquaBlue
const frameRateControl = 30; //30fps

const blockStartX = 100;
const blockStartY = 100;
const blockStrokeWidth = 2;
const blockStrokeColor = 255;//white

const blockLongXCount = 20;
const blockShortXCount = blockLongXCount-1;
const blockYCount = 15;

const blockRadius = 150;
const blockHeight = blockRadius*Math.sin(Math.PI/3);
const adjacentVertexX = blockRadius*Math.cos(Math.PI/3)


const baseBlockGapDistanceX = blockRadius*2*dilationRate + blockStrokeWidth*dilationRate; //300 + 2(the whiteStroke)
const blockGapDistanceX = baseBlockGapDistanceX + blockRadius*dilationRate + (blockStrokeWidth*dilationRate*Math.cos(Math.PI/4))
const blockGapDistanceY = blockHeight * 2 * dilationRate

const blockOffSetY = blockHeight*dilationRate + blockStrokeWidth*dilationRate;
const blockOffSetX = blockOffSetY/Math.tan(Math.PI/6)

