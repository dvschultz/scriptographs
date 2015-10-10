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
		
    	//Path.Circle(item.segments[i].point, 1);
    	pts.push(item.segments[i].point);
    	
		}
		
		item.remove();
		
		for (i = 0; i < pts.length; i++){
			for (z = 0; z < pts.length; z++){
				if (i != z){
					Path.Line(pts[i], pts[z]);
				}
			}
		}
		
	}
    
} else { 
    Dialog.alert('Please select something first!'); 
}

