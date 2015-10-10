var myPath = new Path();

myPath.add(new Point(0, 0)); 
myPath.add(new Point(100, 100));
myPath.add(new Point(200, 0)); 
myPath.add(new Point(300, 100)); 
myPath.add(new Point(400, 0)); 
myPath.add(new Point(500, 100));

if (myPath.segments.length == 6){
	var linkPath = new Path();
	linkPath.add(myPath.segments[0]);
	linkPath.add(myPath.segments[5]);
}



print(myPath.segments.length);