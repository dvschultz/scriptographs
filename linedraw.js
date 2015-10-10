tool.minDistance = 15;

var path;

function onMouseDown (event) {
	//create new path, style it, and select it
	path = new Path();
	path.strokeColor = '#000000';
	path.selected = true;
	
	//add segment to path where you clicked
	path.add(event.point);
	
}

function onMouseDrag(event){
	path.add(event.point);
}
