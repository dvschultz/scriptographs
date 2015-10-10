var myPath;
function onMouseDown(event) {
	myPath = new Path();
}

function onMouseDrag(event) {
	myPath.add(event.point);
}

function onMouseUp(event) {
	var myRadius = event.delta.length;
	var myCircle = new Path.Circle(event.downPoint, myRadius); 
}