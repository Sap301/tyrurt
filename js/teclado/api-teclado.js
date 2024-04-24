/**
 * Usa jquery UI Keyboard plugin. 
 */
var CHARS = "aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_";
var CHARSNUMERODOCUMENO = "aabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function activadorDeDom(idElemActivador) {
	var jqElemActivador = jQuery("#" + idElemActivador);
	
	// Devuelve un activador.
	return {
		controlar: function(activable) {
			if (jqElemActivador.is(':checkbox')) {
				jqElemActivador.change(function() {
					return (jqElemActivador.is(":checked")) 
							? activable.activar()
							: activable.desactivar();
				});
			} else if (jqElemActivador.is('a')) {
				jqElemActivador.click(function() {
					return activable.activar();
				});
			} else {
				throw "Tipo de elemento no soportado como activador: id=" + idElemActivador; 
			}
		}
	};
}

function tecladoVirtualDeDom(idElemInput) {
	var jqElem = jQuery("#" + idElemInput);
	
	jqElem.keyboard(defaultConfig()).addScramble({
		byRow         : true,     // randomize by row, otherwise randomize all keys
		randomizeOnce : false     // if false, randomize every time the keyboard opens
	});
	jqElem.keyboard(defaultConfig());

	// privada
	var keyboard = jqElem.getkeyboard();
	
	// Devolver un un activable
	return {
		activar: function() {
			keyboard.reveal();
		},
		
		desactivar: function() {
			keyboard.close();
		}
	}
	
	// private
	
	function defaultConfig() {
		return {
			// *** choose layout ***
			layout: 'qwerty',
			
			position: {
				of:null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
				//my: 'right middle',
			    my : 'center top',
			    at : 'center top',
			    at2: 'center bottom'
				//at2: 'left middle' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
			},
			
			// preview added above keyboard if true, original input/textarea used if false
			usePreview: true,
			
			// if true, the keyboard will always be visible
			alwaysOpen: false,
			
			// give the preview initial focus when the keyboard becomes visible
			initialFocus: true,
			
			// if true, keyboard will remain open even if the input loses focus.
			stayOpen: true,
			
			// *** change keyboard language & look ***
			display: {
				'a': '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
				'accept': 'Aceptar:Aceptar (Shift-Enter)',
				'alt': 'AltGr:Alternate Graphemes',
				'b': '\u2190:Backspace',    // Left arrow (same as &larr;)
				'bksp': 'Bksp:Backspace',
				'c': '\u2716:Cancel (Esc)', // big X, close - same action as cancel
				'cancel': 'Cerrar:Cerrar (Esc)',
				'clear': 'C:Clear',             // clear num pad
				'combo': '\u00f6:Toggle Combo Keys',
				'dec': '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
				'e': '\u21b5:Enter',        // down, then left arrow - enter symbol
				'enter': 'Enter:Enter',
				'lock': '\u21ea Lock:Caps Lock', // caps lock
				'next': 'Next',
				'prev': 'Prev',
				's': '\u21e7:Shift',        // thick hollow up arrow
				'shift': 'Shift:Shift',
				'sign': '\u00b1:Change Sign',  // +/- sign for num pad
				'space': '&nbsp;:Space',
				't': '\u21e5:Tab', // right arrow to bar (used since this virtual keyboard works with one
							// directional tabs)
				'tab': '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
			},
			
			// Message added to the key title while hovering, if the mousewheel plugin exists
			wheelMessage: 'Use mousewheel to see other keys',
			
			css: {
				input: '', // input & preview
				container: '', // keyboard container
				buttonDefault: '', // default state
				buttonHover: '',  // hovered button
				buttonAction: '', // Action keys (e.g. Accept, Cancel, Tab, etc); replaces "actionClass"
				buttonDisabled: '' // used when disabling the decimal button {dec}
			},
			
			// *** Useability ***
			// Auto-accept content when clicking outside the keyboard (popup will close)
			autoAccept: true,
			
			// Prevents direct input in the preview window when true
			lockInput: false,
			
			// Prevent keys not in the displayed keyboard from being typed in
			restrictInput: false,
			
			// Check input against validate function, if valid the accept button is clickable;
			// if invalid, the accept button is disabled.
			acceptValid: true,
			
			// Use tab to navigate between input fields
			tabNavigation: false,
			
			// press enter (shift-enter in textarea) to go to the next input field
			enterNavigation: true,
			// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
			enterMod: 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous
			
			// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
			// if false, the next button will wrap to target the first input/textarea; prev will go to the last
			stopAtEnd: true,
			
			// Set this to append the keyboard immediately after the input/textarea it is attached to.
			// This option works best when the input container doesn't have a set width and when the
			// "tabNavigation" option is true
			appendLocally: false,
			
			// If false, the shift key will remain active until the next key is (mouse) clicked on;
			// if true it will stay active until pressed again
			stickyShift: true,
			
			// Prevent pasting content into the area
			preventPaste: true,
			
			// Set the max number of characters allowed in the input, setting it to false disables this option
			maxLength: 16,
			
			// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key
			// will start repeating
			repeatDelay: 500,
			
			// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
			// key is repeated. Added to simulate holding down a real keyboard key and having it repeat. I haven't
			// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
			// the keys. And for me, in Firefox, it's around 20.
			repeatRate: 20,
			
			// resets the keyboard to the default keyset when visible
			resetDefault: false,
			
			// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
			openOn: '',
			
			// When the character is added to the input
			keyBinding: 'mousedown',
			
			// combos (emulate dead keys: http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
			// if user inputs `a the script converts it to Ã , ^o becomes Ã´, etc.
			useCombos: true,
			
			// *** Methods ***
			// Callbacks - add code inside any of these callback functions as desired
			initialized: function(e, keyboard, el) {},
			visible: function(e, keyboard, el) {
				jqElem.prop("readonly", true);
			},
			change: function(e, keyboard, el) {
			
			},
			beforeClose: function(e, keyboard, el, accepted) {
				jqElem.prop("readonly", false);
			},
			accepted: function(e, keyboard, el) {
			 if(el.type != "password"){
				 if(el.name === "numDocumento"){
						
						try {
							sText = el.value;
							sNewText = "";
							for (i = 0; i < sText.length; i++) {
								if(CHARSNUMERODOCUMENO.indexOf(sText[i]) >=0){
									sNewText+=sText[i];
								}
							}
							el.value = sNewText.trim(); 
						} catch(e){
							//solo para que no falle por esta validacion
						}
				 }else{
				 try {
					sText = el.value;
					sNewText = "";
					for (i = 0; i < sText.length; i++) {
						if(CHARS.indexOf(sText[i]) >=0){
							sNewText+=sText[i];
						}
					}
					el.value = sNewText.trim(); 
				} catch(e){
					//solo para que no falle por esta validacion
				}
			 }
			 }
			},
			canceled: function(e, keyboard, el) {},
			hidden: function(e, keyboard, el) {
				
			},
			
			switchInput: null, // called instead of base.switchInput
			
			// this callback is called just before the "beforeClose" to check the value
			// if the value is valid, return true and the keyboard will continue as it should
			// (close if not always open, etc)
			// if the value is not value, return false and the clear the keyboard value
			// ( like this "keyboard.$preview.val('');" ), if desired
			// The validate function is called after each input, the "isClosing" value will be false;
			// when the accept button is clicked, "isClosing" is true
			validate: function(keyboard, value, isClosing) { return true; }
		};
	}
	
	
}


//MISMO METODO CON PARAMETROS

function tecladoVirtualDeDom(idElemInput, maxLen) {
	var jqElem = jQuery("#" + idElemInput);
	
	jqElem.keyboard(defaultConfig()).addScramble({
		byRow         : true,     // randomize by row, otherwise randomize all keys
		randomizeOnce : false     // if false, randomize every time the keyboard opens
	});
	jqElem.keyboard(defaultConfig());

	// privada
	var keyboard = jqElem.getkeyboard();
	
	// Devolver un un activable
	return {
		activar: function() {
			keyboard.reveal();
		},
		
		desactivar: function() {
			keyboard.close();
		}
	}
	
	// private
	
	function defaultConfig() {
		return {
			// *** choose layout ***
			layout: 'qwerty',
			
			position: {
				of:null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
				//my: 'right middle',
			    my : 'center top',
			    at : 'center top',
			    at2: 'center bottom'
				//at2: 'left middle' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
			},
			
			// preview added above keyboard if true, original input/textarea used if false
			usePreview: true,
			
			// if true, the keyboard will always be visible
			alwaysOpen: false,
			
			// give the preview initial focus when the keyboard becomes visible
			initialFocus: true,
			
			// if true, keyboard will remain open even if the input loses focus.
			stayOpen: true,
			
			// *** change keyboard language & look ***
			display: {
				'a': '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
				'accept': 'Aceptar:Aceptar (Shift-Enter)',
				'alt': 'AltGr:Alternate Graphemes',
				'b': '\u2190:Backspace',    // Left arrow (same as &larr;)
				'bksp': 'Bksp:Backspace',
				'c': '\u2716:Cancel (Esc)', // big X, close - same action as cancel
				'cancel': 'Cerrar:Cerrar (Esc)',
				'clear': 'C:Clear',             // clear num pad
				'combo': '\u00f6:Toggle Combo Keys',
				'dec': '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
				'e': '\u21b5:Enter',        // down, then left arrow - enter symbol
				'enter': 'Enter:Enter',
				'lock': '\u21ea Lock:Caps Lock', // caps lock
				'next': 'Next',
				'prev': 'Prev',
				's': '\u21e7:Shift',        // thick hollow up arrow
				'shift': 'Shift:Shift',
				'sign': '\u00b1:Change Sign',  // +/- sign for num pad
				'space': '&nbsp;:Space',
				't': '\u21e5:Tab', // right arrow to bar (used since this virtual keyboard works with one
							// directional tabs)
				'tab': '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
			},
			
			// Message added to the key title while hovering, if the mousewheel plugin exists
			wheelMessage: 'Use mousewheel to see other keys',
			
			css: {
				input: '', // input & preview
				container: '', // keyboard container
				buttonDefault: '', // default state
				buttonHover: '',  // hovered button
				buttonAction: '', // Action keys (e.g. Accept, Cancel, Tab, etc); replaces "actionClass"
				buttonDisabled: '' // used when disabling the decimal button {dec}
			},
			
			// *** Useability ***
			// Auto-accept content when clicking outside the keyboard (popup will close)
			autoAccept: true,
			
			// Prevents direct input in the preview window when true
			lockInput: false,
			
			// Prevent keys not in the displayed keyboard from being typed in
			restrictInput: false,
			
			// Check input against validate function, if valid the accept button is clickable;
			// if invalid, the accept button is disabled.
			acceptValid: true,
			
			// Use tab to navigate between input fields
			tabNavigation: false,
			
			// press enter (shift-enter in textarea) to go to the next input field
			enterNavigation: true,
			// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
			enterMod: 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous
			
			// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
			// if false, the next button will wrap to target the first input/textarea; prev will go to the last
			stopAtEnd: true,
			
			// Set this to append the keyboard immediately after the input/textarea it is attached to.
			// This option works best when the input container doesn't have a set width and when the
			// "tabNavigation" option is true
			appendLocally: false,
			
			// If false, the shift key will remain active until the next key is (mouse) clicked on;
			// if true it will stay active until pressed again
			stickyShift: true,
			
			// Prevent pasting content into the area
			preventPaste: true,
			
			// Set the max number of characters allowed in the input, setting it to false disables this option
			maxLength: maxLen,
			
			// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key
			// will start repeating
			repeatDelay: 500,
			
			// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
			// key is repeated. Added to simulate holding down a real keyboard key and having it repeat. I haven't
			// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
			// the keys. And for me, in Firefox, it's around 20.
			repeatRate: 20,
			
			// resets the keyboard to the default keyset when visible
			resetDefault: false,
			
			// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
			openOn: '',
			
			// When the character is added to the input
			keyBinding: 'mousedown',
			
			// combos (emulate dead keys: http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
			// if user inputs `a the script converts it to Ã , ^o becomes Ã´, etc.
			useCombos: true,
			
			// *** Methods ***
			// Callbacks - add code inside any of these callback functions as desired
			initialized: function(e, keyboard, el) {},
			visible: function(e, keyboard, el) {
				jqElem.prop("readonly", true);
			},
			change: function(e, keyboard, el) {
			
			},
			beforeClose: function(e, keyboard, el, accepted) {
				jqElem.prop("readonly", false);
			},
			accepted: function(e, keyboard, el) {
			 if(el.type != "password"){
				 if(el.name === "numDocumento"){
						
						try {
							sText = el.value;
							sNewText = "";
							for (i = 0; i < sText.length; i++) {
								if(CHARSNUMERODOCUMENO.indexOf(sText[i]) >=0){
									sNewText+=sText[i];
								}
							}
							el.value = sNewText.trim(); 
						} catch(e){
							//solo para que no falle por esta validacion
						}
				 }else{
				 try {
					sText = el.value;
					sNewText = "";
					for (i = 0; i < sText.length; i++) {
						if(CHARS.indexOf(sText[i]) >=0){
							sNewText+=sText[i];
						}
					}
					el.value = sNewText.trim(); 
				} catch(e){
					//solo para que no falle por esta validacion
				}
			 }
			 }
			},
			canceled: function(e, keyboard, el) {},
			hidden: function(e, keyboard, el) {
				
			},
			
			switchInput: null, // called instead of base.switchInput
			
			// this callback is called just before the "beforeClose" to check the value
			// if the value is valid, return true and the keyboard will continue as it should
			// (close if not always open, etc)
			// if the value is not value, return false and the clear the keyboard value
			// ( like this "keyboard.$preview.val('');" ), if desired
			// The validate function is called after each input, the "isClosing" value will be false;
			// when the accept button is clicked, "isClosing" is true
			validate: function(keyboard, value, isClosing) { return true; }
		};
	}
	
	
}