// this function requires 2 circle shaped paths
function intersectCircles(c1, c2) {
	var delta = c1.position - c2.position
	var dist = delta.length;
	var dSquared = dist * dist;
	var r1 = c1.bounds.width / 2;
	var r2 = c2.bounds.width / 2;
	var rs1 = r1 * r1;
	var rs2 = r2 * r2;
	if (!dist || dist > r1 + r2
	    || dist < Math.abs(r1 - r2)) {
		return; // no solution	
	}
	
	var a = (rs1 - rs2 + dSquared) / (2 * dist);
	var h = Math.sqrt(rs1 - a * a);

	var middle = c1.position - delta * a / dist;
	var vector = (c2.position - c1.position) * h / dist;
	vector.angle += (90).toRadians();
	var pointA = middle + vector;
	var pointB = middle - vector;
	return [pointA, pointB]
}

var lastCircle, circle;
function onMouseDrag(event) {
	circle = new Path.Circle(event.point, 30);
	circle.removeOnDrag();
	if(lastCircle) {
		var points = intersectCircles(lastCircle, circle);
		if(points) {
			var first = new Path.Circle(points[0], 5);
			first.fillColor = '#ff0000';
			first.removeOnDrag();
			var second = new Path.Circle(points[1], 5);
			second.fillColor = '#ff0000';
			second.removeOnDrag();
		}
	}
}

function onMouseUp(event) {
	lastCircle = circle;
}