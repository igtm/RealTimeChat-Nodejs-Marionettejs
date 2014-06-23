(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/TalkCompositeView'
		],
		function( Talkcompositeview ) {

			describe('Talkcompositeview Compositeview', function () {

				it('should be an instance of Talkcompositeview Compositeview', function () {
					var TalkCompositeView = new Talkcompositeview();
					expect( TalkCompositeView ).to.be.an.instanceof( Talkcompositeview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );