// Define the values object, declaring default values and also
// receiving the user changes, for simpler further reference:
var values = {
    strokeWidth: 50,
    dashAmt: 10,
    dashWidth: 1,
    color: '#ff0000'
};

// Define the interface components to edit each value. Note that they
// need to use the same names as the properties in the values object:
var components = {
    strokeWidth: { type: 'number', label: 'Stroke Width (percent of shape: 0 - 200%)',
    			range: [0, 200], steppers: true, increment: 10
    			 },
    			 
    dashAmt: { type: 'number', label: 'Number of Dashes',
    			steppers: true, fractionDigits: 0
    	},
    
    dashWidth: { type: 'number', label: 'Dash Width',
    			units: 'point'
     			},
     			
    color: { 
        type: 'color', label: 'Stroke Color'
    },


    // Define button:
    doItToIt: {
        type: 'button', value: 'Do It',
        onClick: function() {
        
			letsDoThis(values.strokeWidth, values.dashAmt, values.dashWidth, values.color);
        
        }
    }
};

// Now we create the palette window using the components
// and values definitions:
var palette = new Palette('Irradiate', components, values);



function letsDoThis(width, dashAmt, dashWidth, myColor) {

	var widthPercent = width/100;
	var dashWidth = dashWidth;
	var dashAmt = dashAmt;
	
	var selectedItems = document.getItems({ 
	    type: Path,
	    //type: Group,
	    selected: true 
	});

	
	if (selectedItems.length > 0) {
		for (y = 0; y < selectedItems.length; y++){
			
			var item = selectedItems[y];
			Dialog.print(item.style);
			var itemD = item.bounds.width;
			var itemCircumference = itemD * Math.PI;
			
			var strokeWidth = (itemD/2) * widthPercent;
			var dashSpace = (itemCircumference - (dashAmt * dashWidth))/dashAmt;
			
			item.style.strokeColor = myColor;
			item.style.strokeWidth = strokeWidth;
			item.style.dashArray = [dashWidth, dashSpace];
		}
	} else {
		Dialog.alert('You must select a circle first!')
	}
}