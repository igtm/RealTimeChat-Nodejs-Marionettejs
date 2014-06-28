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
            //ドラッグするデータのid名をDataTransferオブジェクトにセット
            e.dataTransfer = e.originalEvent.dataTransfer;
            console.log(e.dataTransfer);
            console.log("onDragStart:");
            e.dataTransfer.setData("text", $(this).val());
        },
        onDragOver: function(e) {
            //自分でドロップ処理を行うため、
            //イベントをキャンセルし既定の処理をスキップする
            console.log(e);
            e.preventDefault();
            console.log("onDragOver");
        },

        onDrop: function(e) {
            console.log("onDrop:"+$(this).text());
            var text = e.dataTransfer.getData("text");
            $(this).text(text);

            //自分でドロップ処理を行い、ドロップ処理が完結しているので、
            //イベントをキャンセルし既定の処理をスキップする
            e.preventDefault();
        },
		/* on render callback */
		onRender: function() {}
	});
});
