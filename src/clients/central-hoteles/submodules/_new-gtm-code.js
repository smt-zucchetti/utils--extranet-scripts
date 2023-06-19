import * as utils from './../../../lib/utils';

export async function newGtmCode()
{
    await utils.populateBeAttributes();
    
    gtag_enabled = false;
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    
    var allowedOrigins = [];
    allowedOrigins = [/\.(com|net|it|ru)$/];
    
    const pageMap = {
        first_page: '/premium/index.html',
        results_page: '/premium/index2.html',
        summary: '/premium/index4.html',
        thank_you_page: '/premium/thanks_page.html'
    }
    
    ga('create', 'UA-51817018-1', 'auto', { 'allowLinker': true });
    ga('require', 'linker');
    ga('linker:autoLink', allowedOrigins, true, true);
    ga('require', 'displayfeatures');
    ga('require', 'linkid', 'linkid.js');
    ga('send', 'pageview', {
        'page': pageMap[utils.BE_ATTRIBUTES.page]
    });
    
    await utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-J0QBDVD27H');
    
    window.dataLayer = window.dataLayer || [];
    function gtagJ0QBDVD27H(){dataLayer.push(arguments);}
    gtagJ0QBDVD27H('js', new Date());
    gtagJ0QBDVD27H('config', 'G-J0QBDVD27H');
    
    var allowedOrigins = [/\.(com|net|it|ru)$/];
    

    gtagJ0QBDVD27H('config', 'G-J0QBDVD27H', {
        'allow_google_signals': true,
        'linker': {
            'domains': allowedOrigins
        }
    });
    gtagJ0QBDVD27H('config', 'G-J0QBDVD27H', {
        'send_page_view': false,
        'page_path': pageMap[utils.BE_ATTRIBUTES.page]
    });
    
    const idArr = utils.BE_ATTRIBUTES.cmWidgetValues.roomCod.split(' - ');
    const nameArr = utils.BE_ATTRIBUTES.cmWidgetValues.roomName.split(' - ');
    const rateArr = utils.BE_ATTRIBUTES.cmWidgetValues.productName.split(' - ');
    const itemArr = [];
    for(let i = 0; i < idArr.length; i++)
    {
        itemArr.push(
        {
            id: idArr[i], 
            name: nameArr[i], 
            sku: rateArr[i],
            category: utils.BE_ATTRIBUTES.cmWidgetValues.propertyName,
            price: utils.BE_ATTRIBUTES.cmWidgetValues.priceNight,
            quantity: utils.BE_ATTRIBUTES.cmWidgetValues.nights
        });
    }
    
    

    if(utils.BE_ATTRIBUTES.page === 'results')
    {
        // Para Cada habitación seleccionada  se debe generar el siguiente codigo
        gtagJ0QBDVD27H('event', 'view_item_list', 
        {
            'event_category': 'ecommerce',
            'items': itemArr
        });
    }
    else if(utils.BE_ATTRIBUTES.page === 'summary')
    {
        // Para Cada habitación seleccionada se debe generar el siguiente codigo
        gtagJ0QBDVD27H('event', 'begin_checkout', 
        {
            'event_category': 'ecommerce',
            'items': itemArr
        });
        
        // Este codigo debe generarse solo una vez, contiene el total de la reserva y la moneda a cobrar
        gtagJ0QBDVD27H('event', 'add_payment_info', 
        {
            'event_category': 'ecommerce',
            'value': utils.BE_ATTRIBUTES.cmWidgetValues.total, // Grand Total.
            'currency': utils.BE_ATTRIBUTES.cmWidgetValues.currency // Transaction currency
        });
    }
    else if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        ga('require', 'ecommerce', 'ecommerce.js');
        
        ga('ecommerce:addTransaction', 
        {
            'id': utils.BE_ATTRIBUTES.cmWidgetValues.code, // Transaction ID. Required.
            'affiliation': 'Booking Engine', // Affiliation or store name.
            'revenue': utils.BE_ATTRIBUTES.cmWidgetValues.total, // Grand Total.
            //'shipping': '0', // Shipping.
            'tax': utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes     // Tax.
        });
     
        ga('ecommerce:send');
        
        // Este codigo debe generarse solo una vez, contiene la informacion de la compra
        gtagJ0QBDVD27H('event', 'purchase', 
        {
            'event_category': 'ecommerce',
            'transaction_id': utils.BE_ATTRIBUTES.cmWidgetValues.code, // Transaction ID
            'affiliation': 'Booking Engine', // Affiliation or store name.
            'value': utils.BE_ATTRIBUTES.cmWidgetValues.total, // Grand Total.
            'currency': utils.BE_ATTRIBUTES.cmWidgetValues.currency,  // Transaction currency
            'tax': utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes,  // Tax.
            //'shipping': '0', // Shipping.
            // Para Cada habitación seleccionada se debe generar el siguiente codigo
            'items': itemArr
        });
 
    }
}