import * as utils from './../../../lib/utils';

export function tealiumScript()
{
    utils.populateBeAttributes().then(() =>
    {
        const page_data = {};
        
        if(utils.BE_ATTRIBUTES.page === 'first_page')
        {
            page_data['sc_page_title'] = 'VBE:Resv:ChooseYourDates';
            page_data['page_type'] = 'choose_dates';
            page_data['page_url'] = 'booking.amrcollection.com/premium/index.html',
            page_data['special_offer_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto;
            page_data['corporate_group_number'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceCliente;
            
        }
        else if(utils.BE_ATTRIBUTES.page === 'results')
        {
            page_data['sc_page_title'] = 'VBE:Resv:Rates:DailyRateDisplay';
            page_data['page_type'] = 'rooms_and_rates';
        }
        else if(utils.BE_ATTRIBUTES.page === 'summary')
        {
            page_data['sc_page_title'] = 'VBE:Resv:AddServices';
            page_data['page_type'] = 'add_services';
            page_data['event_name'] = 'prod_view_addon';
            page_data['event_name'] = 'add_to_cart_addon';
            page_data['onsite_click_element'] = 'Continue';
        }
        else if(utils.BE_ATTRIBUTES.page === 'guest_info')
        {
            page_data['sc_page_title'] = 'VBE:Resv:Checkout';
            page_data['page_type'] = 'checkout_summary';
            page_data['event_name'] = 'checkout';
            page_data['product_price'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
            page_data['product_id'] = `${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode},${utils.BE_ATTRIBUTES.cmWidgetValues.servicesCod}`;
            page_data['product_list'] = `${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode},${utils.BE_ATTRIBUTES.cmWidgetValues.servicesCod}`;
        }
        else if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            page_data['sc_page_title'] = 'VBE:Resv:Confirmation';
            page_data['page_type'] = 'purchase_confirmation';
            page_data['event_name'] = 'purchase';
            page_data['addon_category_list'] = 'hotel';
            page_data['product_list'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
            page_data['product_price'] = utils.BE_ATTRIBUTES.cmWidgetValues.priceNight;
            page_data['special_offer_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto;
            page_data['corporate_group_number'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceCliente;
            page_data['customer_email'] = utils.BE_ATTRIBUTES.cmWidgetValues.referentEmail;
            page_data['confirmation_number_ecomfix'] = utils.BE_ATTRIBUTES.cmWidgetValues.code;
            page_data['addon_names'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
            page_data['addon_quantity_list'] = utils.BE_ATTRIBUTES.cmWidgetValues.nights;
            
            
            let addon_total_price = null;
            if(utils.BE_ATTRIBUTES.cmWidgetValues.priceNight && !isNaN(utils.BE_ATTRIBUTES.cmWidgetValues.priceNight) && utils.BE_ATTRIBUTES.cmWidgetValues.nights && !isNaN(utils.BE_ATTRIBUTES.cmWidgetValues.nights))
            {
                addon_total_price = parseInt(utils.BE_ATTRIBUTES.cmWidgetValues.priceNight) * parseInt(utils.BE_ATTRIBUTES.cmWidgetValues.nights);
            }
            page_data['addon_total_price'] = addon_total_price; 
            page_data['addon_codes'] = utils.BE_ATTRIBUTES.cmWidgetValues.roomCod;
            page_data['addon_price'] = utils.BE_ATTRIBUTES.cmWidgetValues.priceNight;
            page_data['confirmation_number'] = utils.BE_ATTRIBUTES.cmWidgetValues.code;
            page_data['date_checkin_resv'] = utils.BE_ATTRIBUTES.cmWidgetValues.startDateYyyyddmm;
            page_data['date_checkout_resv'] = utils.BE_ATTRIBUTES.cmWidgetValues.endDateYyyyddmm;
        }
            
        if(['first_page', 'results', 'summary', 'thank_you_page'].includes(utils.BE_ATTRIBUTES.page))
        {
            page_data['product_id'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
        }
        
        if(['results', 'guest_info', 'thank_you_page'].includes(utils.BE_ATTRIBUTES.page))
        {
            page_data['number_of_adults'] = utils.BE_ATTRIBUTES.cmWidgetValues.adults;
            page_data['number_of_children'] = utils.BE_ATTRIBUTES.cmWidgetValues.children;
            page_data['number_of_travelers'] = utils.BE_ATTRIBUTES.cmWidgetValues.occupancy;
            page_data['date_checkin'] = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers;
            page_data['date_checkout'] = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers;
        }
        
        if(['results', 'thank_you_page'].includes(utils.BE_ATTRIBUTES.page))
        {
            page_data['number_of_nights'] = utils.BE_ATTRIBUTES.cmWidgetValues.nights;
        }
        
        if(['guest_info', 'thank_you_page'].includes(utils.BE_ATTRIBUTES.page))
        {
             page_data['purchase_amount'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
             page_data['room_type'] = utils.BE_ATTRIBUTES.cmWidgetValues.roomName;
             page_data['number_of_rooms'] = utils.BE_ATTRIBUTES.cmWidgetValues.rooms ?? utils.BE_ATTRIBUTES.cmWidgetValues.numRooms;
             page_data['rate_plan'] = utils.BE_ATTRIBUTES.cmWidgetValues.productCode;
             page_data['subtotal_revenue_local_currency'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
             page_data['total_revenue_local_currency'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
             page_data['currency_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
             page_data['selected_currency_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
        }
        
        const common_data = {
            'site_id': 'hyalgcom',
            'site_type': 'Inclusive Collection',
            'hotel_name': utils.BE_ATTRIBUTES.cmWidgetValues.propertyName,
            'product_brand_id': 'breathless',
        };
        
        var utag_data = { ...common_data, ...page_data }; 
        
        console.log('utag_data', utag_data);
        
        // (function(a, b, c, d) {
        //     a = 'https://tags.tiqcdn.com/utag/hyatt/minisites/prod/utag.js';
        //     b = document;
        //     c = 'script';
        //     d = b.createElement(c);
        //     d.src = a;
        //     d.type = 'text/java' + c;
        //     d.async = true;
        //     a = b.getElementsByTagName(c)[0];
        //     a.parentNode.insertBefore(d, a);
        // })();
    });
}