//TODO: Fix for previous Scriptographer versions
//TODO: Create UI for adding a class name to elements 

var selectedItems = document.getItems({
	    type: Group,
	    selected: true 
	});
	
	if (selectedItems.length > 0) {
	
		
		for (obj = 0; obj < selectedItems.length; obj++){
			item = selectedItems[obj];
			
			
			
			item.strokeWidth = 0.5;
		}
	}