define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Talkmodel model");
		},

		defaults: {
            talk: "",
            "created": ""
        },

    });
});
