(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/TalkCollection'
		],
		function( Talkcollection ) {

			describe('Talkcollection Collection', function () {

				it('should be an instance of Talkcollection Collection', function () {
					var TalkCollection = new Talkcollection();
					expect( TalkCollection ).to.be.an.instanceof( Talkcollection );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );