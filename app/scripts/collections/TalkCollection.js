define([
	'backbone',
	'models/TalkModel'
],
function( Backbone, Talkmodel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Talkcollection collection");
		},

		model: Talkmodel
		
	});
});
