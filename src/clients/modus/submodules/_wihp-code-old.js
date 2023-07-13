import * as utils from './../../../lib/utils';

export function wihpCode()
{
    utils.populateBeAttributes().then(() => 
    {
        // Hotel Hive, Windsor Suites, and The River Inn
        if( utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.Premium && ['17781','17783','17784'].includes(utils.BE_ATTRIBUTES.propId)) 
        {
            const propIdToWihpCode = 
            {
                '17781': '198179',
                '17783': '198180',
                '17784': '198178'
            };
            const wihpCode = propIdToWihpCode[utils.BE_ATTRIBUTES.propId];
            
            //GHA
            const gtag = function() {
                const dataLayer = window.dataLayer || []
                dataLayer.push(arguments)
            }
            utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=AW-436195525').then(() =>
            {
                gtag('js', new Date());
                gtag('config', 'AW-436195525');
                gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});        
            });
            
            //Bing
            (function(w,d,t,r,u) {
                var f,n,i;
                w[u]=w[u]||[],
                f=function() {
                    var o={ti:"13006875"}
                    o.q=w[u],
                    w[u]=new UET(o),
                    w[u].push("pageLoad")
                },
                n=d.createElement(t),
                n.src=r,
                n.async=1,
                n.onload=n.onreadystatechange=function() {
                    var s=this.readyState;
                    s&&s!=="loaded"&&s!=="complete"||(f(),
                    n.onload=n.onreadystatechange=null)
                },
                i=d.getElementsByTagName(t)[0],
                i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
            
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                //GHA
                const purchObj = 
                {
                    send_to: [
                        'AW-436195525/vz3pCPyf_fIBEMWh_88B',
                        'HA-75'
                    ],
                    transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                    value: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
                    currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                    items: [
                    {
                        id: data.dataObj[utils.BE_ATTRIBUTES.propId],
                        start_date: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                        end_date: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers
                    }]
                }
                
                gtag('event', 'purchase', purchObj)
            
                // Bing
                const bingObj = 
                {
                    hct_total_price: utils.BE_ATTRIBUTES.cmWidgetValues.total, //'@@TOTAL@@',
                    hct_base_price: utils.BE_ATTRIBUTES.cmWidgetValuestotalNoTaxes, //'@@TOTAL_NO_TAXES@@',
                    currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency, //'@@CURRENCY@@',
                    hct_checkin_date: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, //'@@START_DATE_NUMBERS@@',
                    hct_checkout_date: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, //'@@END_DATE_NUMBERS@@',
                    hct_length_of_stay: utils.BE_ATTRIBUTES.cmWidgetValues.nights, //'@@NIGHTS@@',
                    hct_partner_hotel_id: wihpCode,
                    hct_booking_xref: utils.BE_ATTRIBUTES.cmWidgetValues.code //'@@CODE@@'
                }
                window.uetq.push('event', 'my_hotel_event_action', bingObj);
                
                const url = `https://secure-hotel-tracker.com/tics/log.php?
                act=conversion
                &ref=${utils.BE_ATTRIBUTES.cmWidgetValues.code}
                &amount=${utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes}
                &currency=${utils.BE_ATTRIBUTES.cmWidgetValues.currency}
                &idbe=3
                &idwihp=${wihpCode}
                &checkin=${utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers}
                &checkout=${utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers}
                &date_format=YYYY-MM-DD`
            
                utils.loadScript(url);
            }
        }
    });
}

