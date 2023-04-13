import * as utils from './../../../lib/utils';
import * as common from './common_code/main';

export function tealiumScript()
{
    utils.populateBeAttributes().then(() =>
    {
        common.getBrandId().then(bid =>
        {
            const brandNames = 
            {
                1: 'sunscape', 
                2: 'now',
                3: 'secrets',
                4: 'dreams', 
                5: 'zoetry',
                6: 'breathless'
            }
            
            const brandName = brandNames[bid];
            if(brandName === undefined)
            {
                return;
            }
            
            window.utag_data = {};
            
            if(utils.BE_ATTRIBUTES.page === 'first_page')
            {
                utag_data['sc_page_title'] = 'VBE:Resv:ChooseYourDates';
                utag_data['page_type'] = 'choose_dates';
                utag_data['site_id'] = 'hyalgcom';
                utag_data['site_type'] = 'Inclusive Collection';
                utag_data['page_url'] = 'booking.amrcollection.com/premium/index.html';
                utag_data['hotel_name'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyName;
                utag_data['product_brand_id'] = brandName;
                utag_data['product_id'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
                utag_data['special_offer_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto;
                utag_data['corporate_group_number'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceCliente;
                
            }
            else if(utils.BE_ATTRIBUTES.page === 'results')
            {
                utag_data['sc_page_title'] = 'VBE:Resv:Rates:DailyRateDisplay';
                utag_data['page_type'] = 'rooms_and_rates';
                utag_data['site_type'] = 'Inclusive Collection';
                utag_data['site_id'] = 'hyalgcom';
                utag_data['product_id'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
                utag_data['hotel_name'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyName;
                utag_data['product_brand_id'] = brandName;
                utag_data['number_of_adults'] = utils.BE_ATTRIBUTES.cmWidgetValues.adults;
                utag_data['number_of_children'] = utils.BE_ATTRIBUTES.cmWidgetValues.children;
                utag_data['number_of_travelers'] = utils.BE_ATTRIBUTES.cmWidgetValues.occupancy;
                utag_data['date_checkin'] = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers;
                utag_data['date_checkout'] = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers;
                utag_data['number_of_nights'] = utils.BE_ATTRIBUTES.cmWidgetValues.nights;
            }
            else if(utils.BE_ATTRIBUTES.page === 'summary')
            {
                utag_data['sc_page_title'] = 'VBE:Resv:AddServices';
                utag_data['site_type'] = 'Inclusive Collection';
                utag_data['site_id'] = 'hyalgcom';
                utag_data['product_id'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
                utag_data['hotel_name'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyName;
                utag_data['product_brand_id'] = brandName;
                utag_data['page_type'] = 'add_services';
                utag_data['event_name'] = 'prod_view_addon';
                utag_data['event_name'] = 'add_to_cart_addon';
                utag_data['onsite_click_element'] = 'Continue';
                
            }
            else if(utils.BE_ATTRIBUTES.page === 'guest_info')
            {
                utag_data['page_type'] = 'checkout_summary';
                utag_data['site_type'] = 'Inclusive Collection';
                utag_data['site_id'] = 'hyalgcom';
                utag_data['sc_page_title'] = 'VBE:Resv:Checkout';
                utag_data['product_list'] = `${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode},${utils.BE_ATTRIBUTES.cmWidgetValues.servicesCod}`;
                utag_data['product_price'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                utag_data['purchase_amount'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                utag_data['room_type'] = utils.BE_ATTRIBUTES.cmWidgetValues.roomName;
                utag_data['number_of_rooms'] = utils.BE_ATTRIBUTES.cmWidgetValues.numRooms;
                utag_data['total_revenue_local_currency'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                utag_data['subtotal_revenue_local_currency'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                utag_data['date_checkin'] = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers;
                utag_data['date_checkout'] = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers;
                utag_data['currency_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
                utag_data['product_id'] = `${utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode},${utils.BE_ATTRIBUTES.cmWidgetValues.servicesCod}`;
                utag_data['hotel_name'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyName;
                utag_data['product_brand_id'] = brandName;
                utag_data['number_of_adults'] = utils.BE_ATTRIBUTES.cmWidgetValues.adults;
                utag_data['number_of_children'] = utils.BE_ATTRIBUTES.cmWidgetValues.children;
                utag_data['number_of_travelers'] = utils.BE_ATTRIBUTES.cmWidgetValues.occupancy;
                utag_data['event_name'] = 'checkout';
                utag_data['selected_currency_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
                utag_data['rate_plan'] = utils.BE_ATTRIBUTES.cmWidgetValues.productCode;
                
            }
            else if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                
                utag_data['page_type'] = 'purchase_confirmation';
                utag_data['site_type'] = 'Inclusive Collection';
                utag_data['site_id'] = 'hyalgcom';
                utag_data['sc_page_title'] = 'VBE:Resv:Confirmation';
                utag_data['product_list'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
                utag_data['product_price'] = utils.BE_ATTRIBUTES.cmWidgetValues.priceNight;
                utag_data['purchase_amount'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                utag_data['room_type'] = utils.BE_ATTRIBUTES.cmWidgetValues.roomName;
                utag_data['number_of_nights'] = utils.BE_ATTRIBUTES.cmWidgetValues.nights;
                utag_data['number_of_rooms'] = utils.BE_ATTRIBUTES.cmWidgetValues.rooms;
                utag_data['total_revenue_local_currency'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                utag_data['subtotal_revenue_local_currency'] = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                utag_data['date_checkin_resv'] = utils.BE_ATTRIBUTES.cmWidgetValues.startDateYyyyddmm;
                utag_data['date_checkout_resv'] = utils.BE_ATTRIBUTES.cmWidgetValues.endDateYyyyddmm;
                utag_data['confirmation_number'] = utils.BE_ATTRIBUTES.cmWidgetValues.code;
                utag_data['currency_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
                utag_data['product_id'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
                utag_data['hotel_name'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyName;
                utag_data['product_brand_id'] = brandName;
                utag_data['number_of_adults'] = utils.BE_ATTRIBUTES.cmWidgetValues.adults;
                utag_data['number_of_children'] = utils.BE_ATTRIBUTES.cmWidgetValues.children;
                utag_data['number_of_travelers'] = utils.BE_ATTRIBUTES.cmWidgetValues.occupancy;
                utag_data['event_name'] = 'purchase';
                utag_data['selected_currency_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
                utag_data['rate_plan'] = utils.BE_ATTRIBUTES.cmWidgetValues.productCode;
                utag_data['special_offer_code'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto;
                utag_data['corporate_group_number'] = utils.BE_ATTRIBUTES.cmWidgetValues.codiceCliente;
                utag_data['customer_email'] = utils.BE_ATTRIBUTES.cmWidgetValues.referentEmail;
                utag_data['confirmation_number_ecomfix'] = utils.BE_ATTRIBUTES.cmWidgetValues.code;
                utag_data['addon_names'] = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode;
                utag_data['addon_quantity_list'] = utils.BE_ATTRIBUTES.cmWidgetValues.nights;
                utag_data['addon_category_list'] = 'hotel';
                let addon_total_price = null;
                //totalIncludedTaxes + totalNoTaxes also works
                if(utils.BE_ATTRIBUTES.cmWidgetValues.priceNight && !isNaN(utils.BE_ATTRIBUTES.cmWidgetValues.priceNight) && utils.BE_ATTRIBUTES.cmWidgetValues.nights && !isNaN(utils.BE_ATTRIBUTES.cmWidgetValues.nights))
                {
                    const priceNight = parseInt(utils.BE_ATTRIBUTES.cmWidgetValues.priceNight);
                    const nights = parseInt(utils.BE_ATTRIBUTES.cmWidgetValues.nights);
                    addon_total_price = priceNight * nights;
                }
                utag_data['addon_total_price'] = addon_total_price; 
                utag_data['addon_codes'] = utils.BE_ATTRIBUTES.cmWidgetValues.roomCod;
                utag_data['addon_price'] = utils.BE_ATTRIBUTES.cmWidgetValues.priceNight;
                
                
            }
            
            
            (function(a, b, c, d) {
                a = 'https://tags.tiqcdn.com/utag/hyatt/minisites/prod/utag.js';
                b = document;
                c = 'script';
                d = b.createElement(c);
                d.src = a;
                d.type = 'text/java' + c;
                d.async = true;
                a = b.getElementsByTagName(c)[0];
                a.parentNode.insertBefore(d, a);
            })(); 
        });
    });
}