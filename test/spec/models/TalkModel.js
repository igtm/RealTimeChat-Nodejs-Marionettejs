(function() {
	'use strict';

	var root = this;

	root.define([
		'models/TalkModel'
		],
		function( Talkmodel ) {

			describe('Talkmodel Model', function () {

				it('should be an instance of Talkmodel Model', function () {
					var TalkModel = new Talkmodel();
					expect( TalkModel ).to.be.an.instanceof( Talkmodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );