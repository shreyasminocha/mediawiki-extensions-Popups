/* Code adapted from Yair Rand's NavPopupsRestyled.js
 * https://en.wikipedia.org/wiki/User:Yair_rand/NavPopupsRestyled.js
 */

/*global mw:false */

(function ( $ ) {
	$( document ).ready( function() {

		var closeTimer, // The timer use to delay `closeBox`
			openTimer, // The timer used to delay sending the API request/opening the popup form cache
			currentLink, // DOM element of the current anchor tag
			cache = {},
			curRequest, // Current API request
			api = new mw.Api(),
			$box; // DOM element of the popup (defined at the end of the file)

		/**
		 * @method sendRequest
		 * Send an API request, create DOM elements and
		 * put them in the cache. Call `createBox`.
		 * @param {String} href
		 * @param {String} title
		 * @param {Object} $el
		 */
		function sendRequest ( href, title, $el ) {

			curRequest = api.get( {
				action: 'query',
				prop: 'extracts|pageimages|revisions|info',
				redirects: 'true',
				exintro: 'true',
				exsentences: 2,
				explaintext: 'true',
				piprop: 'thumbnail',
				pithumbsize: 300,
				rvprop: 'timestamp',
				inprop: 'watched',
				indexpageids: true,
				titles: decodeURI( title )
			} );

			curRequest.done( function ( re ) {
				curRequest = undefined;

				var $a,
					page = re.query.pages[re.query.pageids[0]],
					$contentbox = $( '<div>' ).addClass( 'mwe-popups-extract' ).text( page.extract ),
					thumbnail = page.thumbnail,
					tall = thumbnail && thumbnail.height > thumbnail.width,
					$thumbnail = createThumbnail( thumbnail, tall ),
					timestamp = new Date( page.revisions[ 0 ].timestamp ),
					timediff = new Date() - timestamp,
					oneDay = 1000 * 60 * 60 * 24,
					timestampclass = ( timediff < oneDay ) ?
						'mwe-popups-timestamp-recent' :
						'mwe-popups-timestamp-older',
					$timestamp = $( '<div>' )
						.addClass( timestampclass )
						.append(
							$( '<span>' ).text( timeAgo( timediff ).text() )
						);

				$a = $( '<a>' ).append( $thumbnail, $contentbox, $timestamp).attr( 'href', href );
				cache[ href ] = { box: $a, thumbnail: thumbnail, tall: tall	};
				createBox( href, $el );
			});

			return true;
		}

		/**
		 * @method createThumbnail
		 * Returns a thumbnail object based on the ratio of the image
		 * @param {Object} thumbnail
		 * @param {boolean} tall
		 * @return {Object} jQuery DOM element of the thumbnail
		 */
		function createThumbnail ( thumbnail, tall ) {
			if ( !thumbnail ) {
				return $( '<span>' );
			}

			var $thumbnail;

			if ( tall ) {
				// This is to mask and center the image within a given size
				$thumbnail = $( '<div>' )
					.removeClass( 'mwe-popups-is-tall mwe-popups-is-not-tall' )
					.addClass( 'mwe-popups-is-tall' )
					.css( 'background-image', 'url(' + thumbnail.source + ')');
			} else {
				$thumbnail = $( '<img>' )
					.attr( 'src', thumbnail.source )
					.removeClass( 'mwe-popups-is-tall mwe-popups-is-not-tall' )
					.addClass( 'mwe-popups-is-not-tall' );
			}


			return $thumbnail;
		}

		/**
		 * @method createBox
		 * Looks into the `cache` and uses the href to render the popup
		 * and offsets it to the link. Rebinds the `mouseleave` event
		 * for the anchor element to `leaveActive`.
		 * @param {String} href
		 * @param {Object} $el
		 */
		function createBox ( href, $el ) {
			var bar = cache[ href ],
				offsetTop = $el.offset().top + $el.height() + 5,
				offsetLeft = $el.offset().left;
			$box
				.children()
				.detach()
				.end() // avoid .empty() to keep event handlers
				.removeClass( 'mwe-popups-is-tall mwe-popups-is-not-tall' )
				.addClass( bar.tall ? 'mwe-popups-is-tall' : 'mwe-popups-is-not-tall' )
				.css({
					top: offsetTop,
					left: offsetLeft
				})
				.append( bar.box )
				.show()
				.removeClass( 'mwe-popups-fade-out mwe-popups-fade-in' )
				.addClass( 'mwe-popups-fade-in' );
			$el
				.off( 'mouseleave', leaveInactive )
				.on( 'mouseleave', leaveActive );
		}

		/**
		 * @method leaveActive
		 * Closes the box after a delay of 100ms
		 * Delay to give enough time for the use to move the pointer from
		 * the link to the popup box. Also avoids closing the popup by accident.
		 */
		function leaveActive () {
			closeTimer = setTimeout( closeBox, 100 );
		}

		/**
		 * @method leaveInactive
		 * Unbinds events on the anchor tag and aborts AJAX request.
		 */
		function leaveInactive () {
			$( currentLink ).off( 'mouseleave', leaveInactive );
			clearTimeout( openTimer );
			if ( curRequest ) {
				curRequest.abort();
			}
			currentLink = openTimer = curRequest = undefined;
		}

		/**
		 * @method closeBox
		 * Removes the hover class from the link and unbinds events
		 * Hides the popup, clears timers and sets it and the
		 * `currentLink` to undefined.
		 */
		function closeBox () {
			$( currentLink ).removeClass( 'mwe-popups-anchor-hover' ).off( 'mouseleave', leaveActive );

			$box
				.removeClass( 'mwe-popups-fade-out mwe-popups-fade-in' )
				.addClass( 'mwe-popups-fade-out' )
				.on( 'webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
					if ( $( this ).hasClass( 'mwe-popups-fade-out' ) ) {
						$( this )
						.off( 'webkitAnimationEnd oanimationend msAnimationEnd animationend' )
						.removeClass( 'mwe-popups-fade-out' )
						.hide();
					}
				} );

			if ( closeTimer ){
				clearTimeout( closeTimer );
			}
			currentLink = closeTimer = undefined;
		}

		// Remove title attribute to remove the default yellow tooltip
		// Put the title back after the hover
		$( '#mw-content-text a' )
			.not( '.extiw' )
			.not( '.image' )
			.not( '.new' )
			.not( '[title=""]' )
			.hover(
				function () {
					$( this )
						.attr( 'data-original-title', $( this ).attr( 'title' ) )
						.attr( 'title', '');
				},
				function () {
					$( this )
						.attr( 'title', $( this ).attr( 'data-original-title' ) )
						.attr( 'data-original-title', '');
				}
			);


		$( '#mw-content-text a' ).on( 'mouseenter', function () {
			var $this = $( this ),
				href = $this.attr( 'href' ),
				title = $this.attr( 'data-original-title' );

			// If a popup for the following link can't be shown
			if ( !title ||
				$this.hasClass( 'extiw' ) ||
				$this.hasClass( 'image' ) ||
				$this.hasClass( 'new' ) ||
				href.indexOf( '?' ) !== -1 ||
				href.indexOf( location.origin + location.pathname + '#' ) === 0
			) {
				return;
			}

			// This will happen when the mouse goes from the popup box back to the
			// anchor tag. In such a case, the timer to close the box is cleared.
			if ( currentLink === this ) {
				clearTimeout( closeTimer );
				return;
			}

			// If the mouse moves to another link (we already check if its the same
			// link in the previous condition), then close the popup.
			if ( currentLink ) {
				closeBox();
			}

			currentLink = this;
			$this.on( 'mouseleave', leaveInactive );

			if ( cache[ href ] ){
				openTimer = setTimeout( function () {
					createBox( href, $this );
				}, 150 );
			} else {
				openTimer = setTimeout( function () {
					sendRequest( href, title, $this );
				}, 50 ); // sendRequest sooner so that it *hopefully* shows up in 150ms
			}
			// Delay to avoid triggering the popup and AJAX requests on accidental
			// hovers (likes ones during srcolling or moving the pointer elsewhere).

		} );

		// Container for the popup
		$box = $( '<div>' )
			.addClass( 'mwe-popups' )
			.on( {
				mouseleave: leaveActive,
				mouseenter: function () {
					if ( closeTimer ) {
						clearTimeout( closeTimer );
					}
				}
			} )
			.appendTo( document.body );


	} );

	// Util functions that should be separated out into their own files at some point

	/**
	 * @method timeAgo
	 * Formats a given time duration (in ms) into a relative string.
	 *
	 * @param {number} ms The time duration to convert to a relative string, in ms
	 * @return {Object} A mw.message object with the appropriate relative string.
	 */
	function timeAgo( ms ) {
		var i, ts, timeSegments = [
			{
				factor: 1000,
				min: 60,
				message: 'popups-edited-seconds'
			},
			{
				factor: 60,
				min: 60,
				message: 'popups-edited-minutes'
			},
			{
				factor: 60,
				min: 24,
				message: 'popups-edited-hours'
			},
			{
				factor: 24,
				min: 365,
				message: 'popups-edited-days'
			},
			{
				factor: 365,
				message: 'popups-edited-years'
			}
		], curDuration = ms;

		for ( i = 0; i <= timeSegments.length; i++ ) {
			ts = timeSegments[ i ];
			curDuration = Math.floor( curDuration / ts.factor );
			if ( typeof ts.min === 'undefined' || curDuration < ts.min ) {
				return mw.message( ts.message, curDuration );
			}
		}
	}
} ) ( jQuery );
