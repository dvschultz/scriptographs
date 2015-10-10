tool.minDistance = 45;
tool.maxDistance = 105;

var path;

function onMouseDown (event) {
	//create new path, style it, and select it
	path = new Path();
	path.fillColor = document.swatches.pick().color;
	path.selected = true;
	
	//add segment to path where you clicked
	path.add(event.point);
	
}

function onMouseDrag(event){
	
	var step = event.delta;
	step.angle += 90;
	
	var top = event.middlePoint + step;
	var bottom = event.middlePoint - step;
	
	/*var line = new Path();
	line.strokeColor = '#000000';
	line.add(top);
	line.add(bottom);*/
	
	path.add(top);
	path.insert(0, bottom);
	
	path.smooth();
	
}

function onMouseUp(event) {
	path.add(event.point);
	path.closed = true;
	path.smooth();
}