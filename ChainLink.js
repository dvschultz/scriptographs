var myPoints=new Array();

function onMouseUp(event) {
	//print(event.point);
	myPoints.push(event.point);
	drawPoints();
	
}

function drawPoints() {
	var tempPath

	if(myPoints.length > 2){
		
		var newestPoint = myPoints.length;
		var myPath = new Path();
		myPath.selected = false;
		
		myPath.add(myPoints[(newestPoint-1)]);
		myPath.add(myPoints[(newestPoint-2)]);
		myPath.add(myPoints[(newestPoint-3)]);
		
		myPath.closed= true;
		myPath.selected = true;
		print(myPath);
		//myPath.smooth();
		
		
		
		//myPoints.clear();
		
	}
	
}