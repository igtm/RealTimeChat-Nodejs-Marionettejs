(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/TalkItemView'
		],
		function( Talkitemview ) {

			describe('Talkitemview Itemview', function () {

				it('should be an instance of Talkitemview Itemview', function () {
					var TalkItemView = new Talkitemview();
					expect( TalkItemView ).to.be.an.instanceof( Talkitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );