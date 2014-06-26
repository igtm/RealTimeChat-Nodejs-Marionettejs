(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/AudienceCompositeView'
		],
		function( Audiencecompositeview ) {

			describe('Audiencecompositeview Compositeview', function () {

				it('should be an instance of Audiencecompositeview Compositeview', function () {
					var AudienceCompositeView = new Audiencecompositeview();
					expect( AudienceCompositeView ).to.be.an.instanceof( Audiencecompositeview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );