/*grep = /^[0-9]+$/g;

if ( app.documents.length > 0 ) {

// Iterate through all text art and apply font 0
	var str="Hello world!";
	var patt=/Hello/g;
	var result=grep.test(str);
	alert(result);
	for ( i = 0; i< app.activeDocument.textFrames.length; i++) {

		var textRange = app.activeDocument.textFrames[i].textRange;

		if (textRange.characterAttributes.textFont.name == "FreightMicro-Book"){
			
			var words = textRange.words;
			for (i = 0; i < words.length; i++){
					//if (grep.test(words[i]) == true){
							alert(words[i].contents);
					//}
			}
		}

	}

}*/

var textItems = document.getItems({
    type: 'TextItem'
});

if (textItems.length > 0) {
	print(textItems);
}