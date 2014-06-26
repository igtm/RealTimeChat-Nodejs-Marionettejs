define([
	'backbone',
	'views/item/TalkItemView',
	'hbs!tmpl/composite/TalkCompositeView_tmpl',
    'models/TalkModel',
    'communicator'
],
function( Backbone, Talkitemview, TalkcompositeviewTmpl, TalkModel, Communicator  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Talkcompositeview CompositeView");
            Communicator.command.setHandler("COUNT:RENDER",this.countRender,this);
            Communicator.command.setHandler("TALK:RENDER",this.talkRender,this);
        },
		
    	itemView: Talkitemview,
    	
    	template: TalkcompositeviewTmpl,
    	

    	/* ui selector cache */
    	ui: {
            count: "#count"
        },

    	/* where are we appending the items views */
    	itemViewContainer: "#talk",

		/* Ui events hash */
		events: {
        },
        countRender: function(count) {
            console.log(count+"人");
            this.ui.count.text("現在"+count+"人が観覧中");
        },
        talkRender: function(talk){
            console.log(talk);
            this.collection.add({talk: talk});
            console.log("talkRender");
        },
		/* on render callback */
		onRender: function() {}
	});
});
