import * as utils from './../../../lib/utils';

export function wihpTrackingScripts()
{
    utils.populateBeAttributes().then(() =>
    {
        //Google
        utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=AW-436195525').then(() =>
        {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'AW-436195525');
            gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});
                
        
            //Bing
            (function(w,d,t,r,u){
                var f,n,i;
                w[u]=w[u]||[],
                f=function(){
                    var o={ti:"13006875"};
                    o.q=w[u],w[u]=new UET(o),
                    w[u].push("pageLoad")
                },
                n=d.createElement(t),n.src=r,n.async=1,
                n.onload=n.onreadystatechange=function(){
                    var s=this.readyState;
                    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
                },
                i=d.getElementsByTagName(t)[0],
                i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
    
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                //Generic
                let url = 'https://secure-hotel-tracker.com/tics/log.php?';
        
                const obj = 
                {
                    act: 'conversion',
                    ref: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                    amount: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                    currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                    idbe: '3',
                    idwihp: '208320',
                    checkin: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    checkout: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    date_format: 'YYYY-MM-DD'
                };
                
                for (const [key, value] of Object.entries(obj)) 
                {
                    url += `${key}=${value}&`;
                }
                url = url.substring(0, url.length - 1);
                
                utils.loadScriptAsync(url).then(() => 
                {
                    //Google
                    gtag('event', 'purchase', {
                        send_to: [ 'AW-436195525/vz3pCPyf_fIBEMWh_88B', 'HA-75' ],
                        transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                        value: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                        currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                        items: [{
                            id: '208320',
                            start_date: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                            end_date: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers
                        }]
                    });
        
                    //Bing
                    window.uetq.push('event', 'my_hotel_event_action', {
                        hct_total_price: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes,
                        hct_base_price: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                        currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                        hct_checkin_date: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                        hct_checkout_date: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                        hct_length_of_stay: utils.BE_ATTRIBUTES.cmWidgetValues.nights,
                        hct_partner_hotel_id: '208320',
                        hct_booking_xref: utils.BE_ATTRIBUTES.cmWidgetValues.code
                    }); 
                });
            }
        });
    });
}