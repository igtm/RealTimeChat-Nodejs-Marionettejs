(function() {
	'use strict';

	var root = this;

	root.define([
		'models/AudienceModel'
		],
		function( Audiencemodel ) {

			describe('Audiencemodel Model', function () {

				it('should be an instance of Audiencemodel Model', function () {
					var AudienceModel = new Audiencemodel();
					expect( AudienceModel ).to.be.an.instanceof( Audiencemodel );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );