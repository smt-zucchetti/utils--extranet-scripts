import * as utils from './../../../lib/utils';

export function sojernScript()
{
    utils.populateBeAttributes().then(() => 
    {
        if(!['results', 'guest_info', 'thank_you_page'].includes(utils.BE_ATTRIBUTES.page))
        {
            return;    
        }
        
        const params = 
        {
            hpid: '25153',
            hc1: 'Vancouver', 
            hs1: 'British Columbia', 
            hn1: 'Canada',
            hpr: '2400 Motor Court', 
        }

        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            Object.assign(params, 
            {
                pt: 'SEARCH',
                hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
            })
        }
        else if(utils.BE_ATTRIBUTES.page === 'guest_info')
        {
            Object.assign(params, 
            {
                pt: 'SHOPPING_CART',
                hcu: utils.BE_ATTRIBUTES.cmWidgetValues.currency
            })
        }
        else if(BE_ATTRIBUTES.page === 'thank_you_page')
        {
            Object.assign(params,
            {
                pt: 'CONVERSION',
                hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                hr: utils.BE_ATTRIBUTES.cmWidgetValues.rooms, 
                hc: utils.BE_ATTRIBUTES.cmWidgetValues.roomCodName,  
                tch: utils.BE_ATTRIBUTES.cmWidgetValues.children,
                tad: utils.BE_ATTRIBUTES.cmWidgetValues.adults,
                t: utils.BE_ATTRIBUTES.cmWidgetValues.occupancy,
                hp: utils.BE_ATTRIBUTES.cmWidgetValues.total,
                hcu: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                hconfno: utils.BE_ATTRIBUTES.cmWidgetValues.code,
            })
        }
        
        // Please do not modify the below code. 
        params.et = {"HOME_PAGE":null,"SEARCH":"hs","PRODUCT":"hpr","SHOPPING_CART":"hcart","CONVERSION":"hc","TRACKING":null}[params.pt] || '';
        var paramsArr = [];
        for(let key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) };
    
        var pl = document.createElement('script');
        pl.type = 'text/javascript';
        pl.async = true;
        pl.src = "https://beacon.sojern.com/pixel/cp/27?f_v=cp_v3_js&p_v=1&" + paramsArr.join('&');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
    })
}