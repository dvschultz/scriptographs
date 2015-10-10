var selectedItems = document.getItems({ 
    type: Path,
    //type: Group,
    selected: true 
}); 

if (selectedItems.length > 0) {

	for (y = 0; y < selectedItems.length; y++){
		var item = selectedItems[y];
		item.smooth();
	}

} else { 
    Dialog.alert('Please select something first!'); 
}