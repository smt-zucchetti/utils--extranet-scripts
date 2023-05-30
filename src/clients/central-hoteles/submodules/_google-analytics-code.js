import * as utils from './../../../lib/utils';

export async function googleAnalyticsCode()
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
    
    ga('create', 'UA-51817018-1', 'auto', 
    {
        'allowLinker': true
    });
    ga('require', 'linker');
    ga('linker:autoLink', allowedOrigins, true, true);
    ga('require', 'displayfeatures');
    ga('require', 'linkid', 'linkid.js');
    
    const pageValMap = 
    {
        'first_page': '/premium/index.html',
        'results': '/premium/index2.html',
        'summary': '/premium/index4.html',
        'thank_you_page': '/premium/thanks_page.html'
    }

    ga('send', 'pageview', 
    {
        'page': pageValMap[utils.BE_ATTRIBUTES.page]
    });

    await utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-J0QBDVD27H');
    
    window.dataLayer = window.dataLayer || [];
    
    function gtagJ0QBDVD27H()
    {
        dataLayer.push(arguments);
    }
 
    gtagJ0QBDVD27H('js', new Date());

    var allowedOrigins = [/\.(com|net|it|ru)$/];

    gtagJ0QBDVD27H('config', 'G-J0QBDVD27H', 
    {
        'allow_google_signals': true,
        'linker': 
        {
            'domains': allowedOrigins
        }
    });
  
    gtagJ0QBDVD27H('config', 'G-J0QBDVD27H', 
    {
        'send_page_view': false,
        'page_path': pageValMap[utils.BE_ATTRIBUTES.page]
    });
    
    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        gtagJ0QBDVD27H('event', 'purchase', 
        {
            event_category: 'ecommerce', 
            item_brand: BE_ATTRIBUTES.cmWidgetValues.propertyName, 
            affiliation: 'Vertical Booking',
            transaction_id: BE_ATTRIBUTES.cmWidgetValues.code,
            currency: BE_ATTRIBUTES.cmWidgetValues.currency,
            coupon: BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
            arrival_date: BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
            depart_date: BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
            nights_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights),
            rooms_qty: parseInt(BE_ATTRIBUTES.cmWidgetValues.rooms),
            adults: parseInt(BE_ATTRIBUTES.cmWidgetValues.adults),
            children: parseInt(BE_ATTRIBUTES.cmWidgetValues.children),
            value: parseInt(BE_ATTRIBUTES.cmWidgetValues.total),
            tax: parseInt(BE_ATTRIBUTES.cmWidgetValues.totalTaxes),
            items: [...rooms].map((room, idx) => 
            {
                return {
                    item_category: 'Rooms',
                    item_id: room.dataset['roomCod'], // Codice camera
                    item_name: room.dataset['roomName'], // Tipo di camera
                    item_variant: room.dataset['productName'], //Rate code
                    price: parseInt(room.dataset['total']), // Prezzo medio per notte
                    //promotion_id: '@@OFFER_CODE@@',
                    //promotion_name: '@@OFFER_NAME@@',
                    quantity: parseInt(BE_ATTRIBUTES.cmWidgetValues.nights), // Numero notti
                    index: ++idx
                };
            })
        })
    }

}