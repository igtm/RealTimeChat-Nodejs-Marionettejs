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

		},
		
    	itemView: Talkitemview,
    	
    	template: TalkcompositeviewTmpl,
    	

    	/* ui selector cache */
    	ui: {
            enter: "#enter",
            input: "#input",
            count: "#count"
        },

    	/* where are we appending the items views */
    	itemViewContainer: "#talk",

		/* Ui events hash */
		events: {
            "click #enter": "onPost"
        },

        onPost: function(){
            var text = this.ui.input.val();
            console.log(text);
            this.ui.input.val("");
            this.collection.set(new TalkModel({name: text}));

        },
        countRender: function(count) {
            console.log("countRender");
            console.log(count);
            this.ui.count.text("現在"+count+"人が観覧中");
        },
		/* on render callback */
		onRender: function() {}
	});

});
