import * as utils from './../../lib/utils';



export async function wihpCode()
{

	(function() {
	var wh = document.createElement('script'); wh.type = 'text/javascript'; wh.async = true;
	wh.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'p.relay-t.io/wh.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wh, s);
	})();

	await loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=AW-{{ConversionID}}')
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments)};
	gtag('js', new Date());
	gtag('config', 'AW-{{ConversionID}}');
	gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});




}