

function cleanIt(oldstring) {
	oldstring = escape(oldstring);
	oldstring = unescape(oldstring.replace(/%0A/gi,"<br>").replace(/%0D/gi,"<br>"));
	return oldstring;
				
}

///////////////////////////////////////////////////////////////////
function formatColor(clr) {
	clr = String(clr);
	if (clr.substring(0,2) == "0x") {
		clr = clr.substring(2);
	} else {
		clr = clr.substring(1);
	}
	clr =  ('00000' + clr);
	clr = '#' + clr.substr(-6); 
	return clr; 
}


function setupStyle(cssObj, styleObj) {
	//assign the new class
	$(cssObj).css('font-size', styleObj.size+"px");
	//check if needs formatted first
	if (styleObj.color.substring(0,2) == "0x") {
		styleObj.color = formatColor(styleObj.color);
	}
	$(cssObj).css('color', styleObj.color);
	$(cssObj).css('font-family', styleObj.face);
		
	if (styleObj.italic == 'true') {	
		$(cssObj).css('font-style', 'italic');
	} else {
		$(cssObj).css('font-style', 'normal');
	}
	
	if (styleObj.bold == 'true') {	
		$(cssObj).css('font-weight', 'bold');
	} else {
		$(cssObj).css('font-weight', 'normal');
	}
	$(cssObj).css('text-align', styleObj.align);


}

function changeTheme(newCSS, newHeader) {
	document.getElementById("cssFile").href = newCSS;
	document.getElementById("cssHeader").href = newHeader;
}



