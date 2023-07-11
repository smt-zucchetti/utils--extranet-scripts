import * as utils from './../../../lib/utils';



export async function wihpCode()
{
	const wihpId = '210372';
	const convId = '700261042';
	const convLabel = 'XCMbCLX-xbMBELLF9M0C';

	await utils.populateBeAttributes();
	if(utils.BE_ATTRIBUTES.page !== 'thank_you_page')
	{
		//WIHP Global Site Tag
		(function() {
			var wh = document.createElement('script'); 
			wh.type = 'text/javascript'; 
			wh.async = true;
			wh.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'p.relay-t.io/wh.js';
			var s = document.getElementsByTagName('script')[0]; 
			s.parentNode.insertBefore(wh, s);
		})();


		//Google Global Site Tag
		await loadScriptAsync(`https://www.googletagmanager.com/gtag/js?id=AW-${convId}`);
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments)};
		gtag('js', new Date());
		gtag('config', `AW-${convId}`);
		gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});
	}
	else
	{
		//WIHP Conversion Tag
		var _wic = _wic || [];
		_wic.push(['_setHotel', wihpId]);
		_wic.push(['_setRef', utils.BE_ATTRIBUTES.cmWidgetValues.code]); 
		_wic.push(['_setAmount', utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes]); 
		_wic.push(['_setCurrency', utils.BE_ATTRIBUTES.cmWidgetValues.currency]); 
		_wic.push(['_setIDBE', '3']);

		_wic.push(['_setCheckin', utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers]);
		_wic.push(['_setCheckout', utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers]);
		_wic.push(['_setDateFormat', 'YYYY-MM-DD']);

		(function() {
			var wh = document.createElement('script'); 
			wh.type = 'text/javascript'; 
			wh.async = true;
			wh.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'p.relay-t.io/conv.js';
			var s = document.getElementsByTagName('script')[0]; 
			s.parentNode.insertBefore(wh, s);
		})();


		//Google Conversion Tag
		
		//  GHA Global Site Tag (gtag.js) - GHA/Adwords
		await loadScriptAsync(`https://www.googletagmanager.com/gtag/js?id=AW-${convId}`);
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments)};
		gtag('js', new Date());
		gtag('config', `AW-${convId}`);
		gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});
		

		//  WIHP Global Site Tag (gtag.js) - GHA/Adwords 
		(function() {
			var wh = document.createElement('script'); 
			wh.type = 'text/javascript'; 
			wh.async = true;
			wh.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'p.relay-t.io/wh.js';
			var s = document.getElementsByTagName('script')[0]; 
			s.parentNode.insertBefore(wh, s);
		})();

		//  Event snippet for Conversion - GHA conversion page
		const rooms = document.querySelectorAll('.conversion-monitoring-widget-cycle');
		gtag('event', 'purchase', 
		{
			'send_to': [
				`AW-${convId}/${convLabel}`,
				'HA-75'
			],
			'transaction_id': utils.BE_ATTRIBUTES.cmWidgetValues.code,
			'value': utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
			'currency': utils.BE_ATTRIBUTES.cmWidgetValues.currency,
			items: [...rooms].map((room, idx) => 
			{
                return {
                	'id': wihpId,
                	'start_date': utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
					'end_date': utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers	
                };
            }); 
		});

	}
}