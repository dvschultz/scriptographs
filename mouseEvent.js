function onMouseDown(event) { 
    // Check whether an item was clicked on: 
    if(event.item) { 
        // If so, scale it: 
        event.item.scale(1.1); 
    } 
}