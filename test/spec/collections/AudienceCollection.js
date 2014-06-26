(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/AudienceCollection'
		],
		function( Audiencecollection ) {

			describe('Audiencecollection Collection', function () {

				it('should be an instance of Audiencecollection Collection', function () {
					var AudienceCollection = new Audiencecollection();
					expect( AudienceCollection ).to.be.an.instanceof( Audiencecollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );