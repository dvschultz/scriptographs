var circlePath = new Path.Circle(new Point(150, 150), 25); 
var clones = 30; 
var angle = 360 / clones; 
 
for(var i = 0; i < clones; i++) { 
    var clonedPath = circlePath.clone(); 
    clonedPath.rotate(angle * i, circlePath.bounds.bottomRight); 
};