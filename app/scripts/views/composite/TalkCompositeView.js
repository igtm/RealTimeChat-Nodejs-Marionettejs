define([
	'backbone',
	'views/item/TalkItemView',
	'hbs!tmpl/composite/TalkCompositeView_tmpl',
    'models/TalkModel',
    'communicator',
    'jquery',
    'jquery.marquee'
],
function( Backbone, Talkitemview, TalkcompositeviewTmpl, TalkModel, Communicator, $  ) {
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
            "dragstart .talk":"onDragStart",
            "dragover #drop":"onDragOver",
            "drop #drop":"onDrop"
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
        onDragStart: function(e){
            e.dataTransfer = e.originalEvent.dataTransfer;
            var talk = $("#"+e.target.id).text();
            console.log("talk:"+talk);
            e.dataTransfer.setData("text",talk);
        },
        onDragOver: function(e) {
            //自分でドロップ処理を行うため、
            //イベントをキャンセルし既定の処理をスキップする
            e.preventDefault();
        },

        onDrop: function(e) {
            e.dataTransfer = e.originalEvent.dataTransfer;
            var talk = e.dataTransfer.getData("text");
            $("#drop").text(talk);
            e.preventDefault();
        },
		/* on render callback */
		onRender: function() {}
	});
});
