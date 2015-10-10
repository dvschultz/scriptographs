var selectedItems = document.getItems({ 
    type: Path,
    //type: Group,
    selected: true 
}); 


if (selectedItems.length > 0) { 

	for (y = 0; y < selectedItems.length; y++){
		var pts = new Array();
		var item = selectedItems[y];
		
		for (i = 0; i < item.segments.length; i++){
		
    	Path.Circle(item.segments[i].point, 1);
    	pts.push(item.segments[i].point);
    	
		}
		
		item.remove();
		
		for (i = 0; i < pts.length; i++){
			if (pts[i+1] != null){
				Path.Line(pts[i], pts[i+1]);
			}
			else {
				Path.Line(pts[i], pts[0]);
			}
		}
		
	}
    
} else { 
    Dialog.alert('Please select something first!'); 
}

