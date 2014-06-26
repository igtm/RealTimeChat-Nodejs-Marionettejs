(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/AudienceItemView'
		],
		function( Audienceitemview ) {

			describe('Audienceitemview Itemview', function () {

				it('should be an instance of Audienceitemview Itemview', function () {
					var AudienceItemView = new Audienceitemview();
					expect( AudienceItemView ).to.be.an.instanceof( Audienceitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );