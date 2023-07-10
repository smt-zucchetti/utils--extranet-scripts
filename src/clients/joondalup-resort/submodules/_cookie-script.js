import * as utils from './../../../lib/utils';

export async function cookieScript()
{
	await utils.populateBeAttributes();

	const script = document.createElement('script');

	script.id = "__policy_cookie";
	script.setAttribute('hotel_lang', utils.BE_ATTRIBUTES.cmWidgetValues.language);
	script.setAttribute('hotel_id', utils.BE_ATTRIBUTES.cmWidgetValues.propertyId);
	script.setAttribute('src', '/js/policy/cookie.js');


	document.head.appendChild(script);

}