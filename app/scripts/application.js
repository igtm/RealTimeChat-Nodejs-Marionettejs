define([
	'backbone',
	'communicator',
    'views/composite/TalkCompositeView',
    'collections/TalkCollection',
    'socketio'
],

function( Backbone, Communicator, TalkCompositeView, TalkCollection, io ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        "container": "#container"
    });

	/* Add initializers here */
	App.addInitializer( function () {
        var TalkColl = new TalkCollection();
        App.container.show(new TalkCompositeView({collection: TalkColl }));

        /* socket.io  */
        var s = io.connect();
        s.on("count", function(data){
            Communicator.command.execute("COUNT:RENDER",data.count);
        });
        s.on("talk:toClient", function(data){
           Communicator.command.execute("TALK:RENDER", data.talk); //未実装
        });
        Communicator.command.setHandler("TALK:EMIT",function(talk){
            s.emit("talk:toServer",{talk: talk});
        },this);

	});

	return App;
});
