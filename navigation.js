/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */

	
jQuery(document).ready(function() {
	jQuery("#menu").click(function() {
		jQuery("#js-off-canvas").slideToggle("fast");
	});
});

