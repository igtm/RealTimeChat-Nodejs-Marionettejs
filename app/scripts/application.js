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
        var s = io.connect("http://localhost:3000");
        s.on("count", function(count){
            Communicator.command.execute("COUNT:RENDER",count.count);
        });
	});

	return App;
});
