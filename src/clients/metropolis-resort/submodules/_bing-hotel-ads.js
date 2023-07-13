import * as utils from './../../../lib/utils' 

export function bingHotelAds()
{
    utils.populateBeAttributes().then(() =>
    {
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
        })(window, document, 'script', '//bat.bing.com/bat.js', 'uetq')
        
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            window.uetq.push('event', 'my_hotel_event_action', 
            {
                hct_total_price: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes,
                hct_base_price:  utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                currency:  utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                hct_checkin_date: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                hct_checkout_date: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                hct_length_of_stay: utils.BE_ATTRIBUTES.cmWidgetValues.nights,
                hct_partner_hotel_id: '186559',
                hct_booking_xref: utils.BE_ATTRIBUTES.cmWidgetValues.code
            })
        }
    })

}