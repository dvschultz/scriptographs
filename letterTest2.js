var selectedItems = document.getItems({ 
    type: Path,
    //type: Group,
    selected: true 
}); 



//print(selectedItems[0].children[0].children.length);

if (selectedItems.length > 0) { 

	var pts = new Array();

	for (y = 0; y < selectedItems.length; y++){
		var item = selectedItems[y];
		var s = item.segments.length;
		print(s);
		for (i = 0; i < s; i++){
			print(item.segments[i].point);
    	Path.Circle(item.segments[i].point, 1);
    	pts.push(item.segments[i].point);
		}
		
		selectedItems[y].remove();
		
	}
	
	for (i = 0; i < pts.length; i++){
		for (z = 0; z < pts.length; z++){
			if (i != z){
				Path.Line(pts[i], pts[z]);
			}
		}
	}
    
} else { 
    Dialog.alert('Please select something first!'); 
}

