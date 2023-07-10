import * as utils from './../../../lib/utils';

export async function sojernCode()
{
	await utils.populateBeAttributes();

	const page = utils.BE_ATTRIBUTES.page;

	if(page === "thank_you_page")
	{
		return;
	}

	await utils.loadScriptAsync("https://static.sojern.com/utils/sjrn_autocx.js");
  	
  	
	const pt = page === "first_page" ? "HOME_PAGE" : page === "results" ? "PRODUCT" : "TRACKING";

  	(function () 
  	{
	    var params = 
	    {
			hpr: "Rosedale Inn", /* Hotel Property */
			hpid: "24814", /* Property ID */
			sha256_eml: "", /* Hashed Email SHA256 */
			sha1_eml: "", /* Hashed Email SHA1 */
			md5_eml: "", /* Hashed Email MD5 */
			ccid: "", /* Client Cookie id */
			pt: pt /* Page Type - CONVERSION or HOME_PAGE or PRODUCT or SEARCH or SHOPPING_CART or TRACKING */
	    };

		/* Please do not modify the below code. */
		params.et = {"HOME_PAGE":null,"SEARCH":"hs","PRODUCT":"hpr","SHOPPING_CART":"hcart","CONVERSION":"hc","TRACKING":null}[params.pt] || '';
		try{params = Object.assign({}, sjrn_params, params);}catch(e){}
		var paramsArr = [];
		for(key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };

		var pl = document.createElement('iframe');
		pl.type = 'text/html';
		pl.setAttribute('style','height:0; width: 0; display:none;');
		pl.async = true;
		pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v3_js&p_v=1&" + paramsArr.join('&');
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
  	})();
}



// import * as utils from './../../../lib/utils';

// export async function sojernCode()
// {
// 	await utils.populateBeAttributes();

// 	if(utils.BE_ATTRIBUTES.page === 'results')
// 	{
// 		await utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js');
// 		(function () 
// 		{
// 			var params = 
// 			{
// 				hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
// 				hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
// 				hc1: "Pacific Grove", /* Destination City */
// 				hs1: "CA", /* Destination State or Region */
// 				hn1: "US", /* Destination Country */
// 				hb: "", /* Hotel Brand */
// 				hr: utils.BE_ATTRIBUTES.cmWidgetValues.rooms, /* Number of Rooms */
// 				hc: utils.BE_ATTRIBUTES.cmWidgetValues.roomCodName, /* Room type */
// 				tch: utils.BE_ATTRIBUTES.cmWidgetValues.children, /* Number of Children */
// 				tad: utils.BE_ATTRIBUTES.cmWidgetValues.adults, /* Number of Adults */
// 				t: utils.BE_ATTRIBUTES.cmWidgetValues.occupancy, /* Number of Travelers */
// 				hd: utils.BE_ATTRIBUTES.cmWidgetValues.nights, /* Length of Travel in Nights */
// 				hp: utils.BE_ATTRIBUTES.cmWidgetValues.total, /* Purchase Price */
// 				hcu: utils.BE_ATTRIBUTES.cmWidgetValues.currency, /* Purchase Currency */
// 				hconfno: utils.BE_ATTRIBUTES.cmWidgetValues.code, /* Confirmation Number */
// 				hdc: "", /* Discount Code */
// 				sha256_eml: "", /* Hashed Email SHA256 */
// 				sha1_eml: "", /* Hashed Email SHA1 */
// 				md5_eml: "", /* Hashed Email MD5 */
// 				ccid: "", /* Client Cookie ID */
// 				hpr: "Rosedale Inn", /* Hotel Property */
// 				hpid: "24814", /* Property ID */
// 				pt: "SEARCH" /* Page Type - CONVERSION or HOME_PAGE or PRODUCT or SEARCH or SHOPPING_CART or TRACKING */
// 			};

// 			/* Please do not modify the below code. */
// 			params.et = {"HOME_PAGE":null,"SEARCH":"hs","PRODUCT":"hpr","SHOPPING_CART":"hcart","CONVERSION":"hc","TRACKING":null}[params.pt] || '';
// 			try{params = Object.assign({}, sjrn_params, params);}catch(e){}
// 			var paramsArr = [];
// 			for(key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };

// 			var pl = document.createElement('iframe');
// 			pl.type = 'text/html';
// 			pl.setAttribute('style','height:0; width: 0; display:none;');
// 			pl.async = true;
// 			pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v3_js&p_v=1&" + paramsArr.join('&');
// 			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
// 		})();


// 	}
// 	else if(utils.BE_ATTRIBUTES.page === 'summary')
// 	{
		
// 		await utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js');
// 		(function () 
// 		{	
// 			var params = 
// 			{
// 				hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
// 				hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
// 				hc1: "Pacific Grove", /* Destination City */
// 				hs1: "CA", /* Destination State or Region */
// 				hn1: "US", /* Destination Country */
// 				hb: "", /* Hotel Brand */
// 				hr: utils.BE_ATTRIBUTES.cmWidgetValues.numRooms, /* Number of Rooms */
// 				hc: utils.BE_ATTRIBUTES.cmWidgetValues.roomCodName, /* Room type */
// 				tch: utils.BE_ATTRIBUTES.cmWidgetValues.children, /* Number of Children */
// 				tad: utils.BE_ATTRIBUTES.cmWidgetValues.adults, /* Number of Adults */
// 				t: utils.BE_ATTRIBUTES.cmWidgetValues.occupancy, /* Number of Travelers */
// 				hd: utils.BE_ATTRIBUTES.cmWidgetValues.nights, /* Length of Travel in Nights */
// 				hp: utils.BE_ATTRIBUTES.cmWidgetValues.total, /* Purchase Price */
// 				hcu: utils.BE_ATTRIBUTES.cmWidgetValues.currency, /* Purchase Currency */
// 				hconfno: utils.BE_ATTRIBUTES.cmWidgetValues.code, /* Confirmation Number */
// 				hdc: "", /* Discount Code */
// 				sha256_eml: "", /* Hashed Email SHA256 */
// 				sha1_eml: "", /* Hashed Email SHA1 */
// 				md5_eml: "", /* Hashed Email MD5 */
// 				ccid: "", /* Client Cookie ID */
// 				hpr: "Rosedale Inn", /* Hotel Property */
// 				hpid: "24814", /* Property ID */
// 				pt: "SHOPPING_CART" /* Page Type - CONVERSION or HOME_PAGE or PRODUCT or SEARCH or SHOPPING_CART or TRACKING */
// 			};

// 			/* Please do not modify the below code. */
// 			params.et = {"HOME_PAGE":null,"SEARCH":"hs","PRODUCT":"hpr","SHOPPING_CART":"hcart","CONVERSION":"hc","TRACKING":null}[params.pt] || '';
// 			try{params = Object.assign({}, sjrn_params, params);}catch(e){}
// 			var paramsArr = [];
// 			for(key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };

// 			var pl = document.createElement('iframe');
// 			pl.type = 'text/html';
// 			pl.setAttribute('style','height:0; width: 0; display:none;');
// 			pl.async = true;
// 			pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v3_js&p_v=1&" + paramsArr.join('&');
// 			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
// 	  	})();

// 	}
// 	else if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
// 	{
		
// 		await utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js');

// 		(function () 
// 		{
// 			var params = 
// 			{
// 				hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
// 				hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
// 				hc1: "Pacific Grove", /* Destination City */
// 				hs1: "CA", /* Destination State or Region */
// 				hn1: "US", /* Destination Country */
// 				hb: "", /* Hotel Brand */
// 				hr: utils.BE_ATTRIBUTES.cmWidgetValues.rooms, /* Number of Rooms */
// 				hc: utils.BE_ATTRIBUTES.cmWidgetValues.roomCodName, /* Room type */
// 				tch: utils.BE_ATTRIBUTES.cmWidgetValues.children, /* Number of Children */
// 				tad: utils.BE_ATTRIBUTES.cmWidgetValues.adults, /* Number of Adults */
// 				t: utils.BE_ATTRIBUTES.cmWidgetValues.occupancy, /* Number of Travelers */
// 				hd: utils.BE_ATTRIBUTES.cmWidgetValues.nights, /* Length of Travel in Nights */
// 				hp: utils.BE_ATTRIBUTES.cmWidgetValues.total, /* Purchase Price */
// 				hcu: utils.BE_ATTRIBUTES.cmWidgetValues.currency, /* Purchase Currency */
// 				hconfno: utils.BE_ATTRIBUTES.cmWidgetValues.code, /* Confirmation Number */
// 				hdc: `${utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto}${utils.BE_ATTRIBUTES.cmWidgetValues.codiceCliente}${utils.BE_ATTRIBUTES.cmWidgetValues.codiceConvenzione}`, /* Discount Code */
// 				sha256_eml: "", /* Hashed Email SHA256 */
// 				sha1_eml: "", /* Hashed Email SHA1 */
// 				md5_eml: "", /* Hashed Email MD5 */
// 				ccid: "", /* Client Cookie ID */
// 				hpr: "Rosedale Inn", /* Hotel Property */
// 				hpid: "24814", /* Property ID */
// 				pt: "CONVERSION" /* Page Type - CONVERSION or HOME_PAGE or PRODUCT or SEARCH or SHOPPING_CART or TRACKING */
// 			};

// 			/* Please do not modify the below code. */
// 			params.et = {"HOME_PAGE":null,"SEARCH":"hs","PRODUCT":"hpr","SHOPPING_CART":"hcart","CONVERSION":"hc","TRACKING":null}[params.pt] || '';
// 			try{params = Object.assign({}, sjrn_params, params);}catch(e){}
// 			var paramsArr = [];
// 			for(key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };

// 			var pl = document.createElement('iframe');
// 			pl.type = 'text/html';
// 			pl.setAttribute('style','height:0; width: 0; display:none;');
// 			pl.async = true;
// 			pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v3_js&p_v=1&" + paramsArr.join('&');
// 			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
// 		})();


// 	}
// }