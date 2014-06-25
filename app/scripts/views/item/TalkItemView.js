define([
	'backbone',
	'hbs!tmpl/item/TalkItemView_tmpl'
],
function( Backbone, TalkitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Talkitemview ItemView");
		},
		
    	template: TalkitemviewTmpl,

        tagName: "marquee",
        

    	/* ui selector cache */
    	ui: {
        },

		/* Ui events hash */
		events: {
        },

		/* on render callback */
		onRender: function() {}
	});

});
