import * as utils from './../../../lib/utils'

export function wihpTrackingScripts()
{
    utils.populateBeAttributes().then(() => 
    {
        const wihpId = '208002'
        const adWordsId = 'AW-436195525'
        
        function gtag(){dataLayer.push(arguments)}
        
        //Google
        utils.loadScriptAsync(`https://www.googletagmanager.com/gtag/js?id=${adWordsId}`).then(() =>
        {
            window.dataLayer = window.dataLayer || [];
            gtag('js', new Date());
            gtag('config', adWordsId);
            gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});
        });
        
        //Bing
        //Global Site Tag (Bing) - Bing Hotel Ads
        (function(w,d,t,r,u)
        {
            var f,n,i
            w[u] = w[u] || [],
            f = function()
            {
                var o = { ti: '13006875' }
                o.q = w[u],
                w[u] = new UET(o),
                w[u].push('pageLoad')
            },
            n = d.createElement(t),
            n.src = r,
            n.async = 1,
            n.onload = n.onreadystatechange = function()
            {
                var s = this.readyState
                s&&s!=='loaded'&&s!=='complete' || (f(),n.onload = n.onreadystatechange = null)
            },
            i = d.getElementsByTagName(t)[0],
            i.parentNode.insertBefore(n,i)
        })(window, document, 'script', '//bat.bing.com/bat.js', 'uetq');
        
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            //Generic
            let url = `https://secure-hotel-tracker.com/tics/log.php?act=conversion&idbe=3&date_format=YYYY-MM-DD&idwihp=${wihpId}`
    
            const obj = 
            {
                ref: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                amount: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                checkin: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                checkout: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers
            }
            
            for (const [key, value] of Object.entries(obj)) 
            {
                url += `&${key}=${value}`;
            }
            
            utils.loadScript(url);
            
            //Bing
            window.uetq.push('event', 'my_hotel_event_action', 
            {
                hct_total_price: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes,
                hct_base_price:  utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                currency:  utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                hct_checkin_date: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                hct_checkout_date: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                hct_length_of_stay: utils.BE_ATTRIBUTES.cmWidgetValues.nights,
                hct_partner_hotel_id: wihpId,
                hct_booking_xref: utils.BE_ATTRIBUTES.cmWidgetValues.code
            });
            
            //Google
            gtag('event', 'purchase', 
            {
                send_to: [ adWordsId, 'HA-75' ],
                transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                value: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                items: 
                [{
                    id: wihpId,
                    start_date: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    end_date: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers
                }]
            });
        }
    })
}