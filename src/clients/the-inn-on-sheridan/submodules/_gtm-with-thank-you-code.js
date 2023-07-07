import * as utils from './../../../lib/utils';

export async function gtmWithThankYouCode()
{
	utils.googleTagManager('GTM-5DP6HXV');

	await utils.populateBeAttributes();

	if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
	{
		dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.

		const rooms = document.querySelectorAll('.conversion-monitoring-widget-cycle');
		dataLayer.push({
			event: "purchase",
			ecommerce: 
			{
				transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code, // mandatory
			 	affiliation: utils.BE_ATTRIBUTES.cmWidgetValues.propertyName, // optional. A product affiliation to designate a supplying company
			 	value: utils.BE_ATTRIBUTES.cmWidgetValues.total, // mandatory. The total order value in numeric
			 	tax: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes, //optional. Tax cost associated with a transaction.
			 	currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency, //mandatory
			 	//coupon: "SUMMER_SALE", //optional. The coupon name/code associated with the item
					
				items: [...rooms].map((room, idx) => 
                {
                    return {
                        item_id: room.dataset['roomCod'],
                        item_name: room.dataset['roomName'],
                        price: parseInt(room.dataset['total']),
                        item_category: room.dataset['productName'],
                        quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
                        index: ++idx
                    };
                })
			}
		});
	}
}