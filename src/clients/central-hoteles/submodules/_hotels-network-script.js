import * as utils from './../../../lib/utils';

export async function hotelsNetworkScript()
{
    let hotelId = null;
    let propertyId = null;
    let accountKey = null;
    
    await utils.populateBeAttributes();

    if(utils.BE_ATTRIBUTES.cmWidgetValues.propId === '17417')
    {
        hotelId = '1131817';
        propertyId = '1033405'
        accountKey = 'D1C361F2814AC33862B3944F5C348837';
    }
    else if(utils.BE_ATTRIBUTES.cmWidgetValues.propId === '17418')
    {
        hotelId = '1131804';
        propertyId = '1033407';
        accountKey = 'D1C361F2814AC33862B3944F5C348837';
    }
    else if(utils.BE_ATTRIBUTES.cmWidgetValues.propId === '22383')
    {
        hotelId = '1663996';
        propertyId = '1033406';
        accountKey = 'D1C361F2814AC33862B3944F5C348837';
    }
    
    await utils.loadScriptAsync(`https://www.thehotelsnetwork.com/js/hotel_price_widget.js?hotel_id=${hotelId}&property_id=${propertyId}&account_key=${accountKey}`);

    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        (function() 
        {
            function thn_booking() 
            {
                thn.widgets.booking.reset().init(
                {
                    booking_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                    date_begin: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    date_end: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    price: utils.BE_ATTRIBUTES.cmWidgetValues.total,
                    currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                    promocode: utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto + utils.BE_ATTRIBUTES.cmWidgetValues.codiceCliente + utils.BE_ATTRIBUTES.cmWidgetValues.codiceConvenzione,  
                    rooms: utils.BE_ATTRIBUTES.cmWidgetValues.rooms,
                    adults: utils.BE_ATTRIBUTES.cmWidgetValues.adults,
                    children: utils.BE_ATTRIBUTES.cmWidgetValues.children,
                    mode: 'manual'
                });
            }
            
            if (!window.thn) 
            {
                window.addEventListener('thn_start', thn_booking, true);
            } 
            else 
            {
                thn_booking();
            }
        }());
    }

}