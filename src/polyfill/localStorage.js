/* 
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2010-2012 Sebastian Werner
==================================================================================================
*/

(function(global) {
	
	// Native support with IE 8, Firefox 3.5, Safari 4.0, Chrome 9.0, Opera 10.6, iOS 3.2, Android 2.1
	// http://caniuse.com/#feat=namevalue-storage
	if (global.localStorage) {
		return;
	}
	
	/**
	 * Emulation for `localStorage` object to store text data on the browser.
	 *
	 */
	Object.declareNamespace("localStorage",
	{

		// TODO:
		// - Emulate localStorage using userData behavior (see: lawnchair)
		// - Emulate sessionStorage using window.name + rc4 crypt (+ cookies) (see: webreflection sessionstorage)

	});
	
})(this);
