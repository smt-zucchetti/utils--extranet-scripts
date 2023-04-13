import * as utils from './../../../lib/utils';

export function addSojernCode()
{
    const propIdArr = 
    [
        '13202','11094','23143','10570','24957','23931','10568','17154','12070','11302','23253','10574','10575','14098','10569','10573','10572','13491','20640','20967','10562','14161','11095','10934','14311','14100','10578','23142','24244','10583','10343','10584','19903','14099','10577','12069','10345','10579','10342','10586','18179','14101','24784','21074','11353','10582','10581','10344','24762','12346','14097','20971'
    ];
    
    utils.populateBeAttributes().then(() =>
    {
        const propId = utils.BE_ATTRIBUTES.propId;
        
        if(propIdArr.includes(propId))
        {
            if(utils.BE_ATTRIBUTES.page === 'results')
            {
                utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js').then(() =>
                {
                    (function () {
                        /* Please fill the following values. */
                        var params = {
                          hpid: propId, /* Property ID */
                          pt: "SEARCH", /* Page Type */
                          hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                          hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                        };
                        
                        /* Please do not modify the below code. */
                        params.et = {}[params.pt] || '';
                        try{params = Object.assign({}, sjrn_params, params);}catch(e){}
                        var paramsArr = [];
                        for(var key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) }
                    
                        var pl = document.createElement('iframe');
                        pl.type = 'text/html';
                        pl.setAttribute('style','height:0; width: 0; display:none;');
                        pl.async = true;
                        pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v3_js&p_v=2&" + paramsArr.join('&');
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
                    })();  
                })
            }
            
            if(utils.BE_ATTRIBUTES.page === 'guest_info')
            {
                utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js').then(() =>
                {
                    (function () {
                        /* Please fill the following values. */
                        var params = {
                            hpid: propId, /* Property ID */
                            pt: "SHOPPING_CART", /* Page Type */
                            hcu: "USD" /* Purchase Currency */
                        };
                    
                        /* Please do not modify the below code. */
                        params.et = {}[params.pt] || '';
                        try{params = Object.assign({}, sjrn_params, params);}catch(e){}
                        var paramsArr = [];
                        for(var key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) }
                    
                        var pl = document.createElement('iframe');
                        pl.type = 'text/html';
                        pl.setAttribute('style','height:0; width: 0; display:none;');
                        pl.async = true;
                        pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v3_js&p_v=2&" + paramsArr.join('&');
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
                    })();
                })
            }
            
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js').then(() =>
                {
                    (function () {
                        /* Please fill the following values. */
                        var params = {
                            hpid: propId, /* Property ID */
                            pt: "CONVERSION", /* Page Type */
                            hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                            hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                            hr: utils.BE_ATTRIBUTES.cmWidgetValues.rooms, /* Number of Rooms */
                            hc: utils.BE_ATTRIBUTES.cmWidgetValues.roomType, /* Room type */
                            tch: utils.BE_ATTRIBUTES.cmWidgetValues.children, /* Number of Children */
                            tad: utils.BE_ATTRIBUTES.cmWidgetValues.adults, /* Number of Adults */
                            t: utils.BE_ATTRIBUTES.cmWidgetValues.occupancy, /* Number of Travelers */
                            hp: utils.BE_ATTRIBUTES.cmWidgetValues.total, /* Purchase Price */
                            hcu: utils.BE_ATTRIBUTES.cmWidgetValues.currency, /* Purchase Currency */
                            hconfno: utils.BE_ATTRIBUTES.cmWidgetValues.code /* Confirmation Number */    
                        };
                        
                        /* Please do not modify the below code. */
                        
                        params.et = {}[params.pt] || '';
                        try{params = Object.assign({}, sjrn_params, params);}catch(e){}
                        var paramsArr = [];
                        for(var key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) }
                        
                        var pl = document.createElement('iframe');
                        pl.type = 'text/html';
                        pl.setAttribute('style','height:0; width: 0; display:none;');
                        pl.async = true;
                        pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v3_js&p_v=2&" + paramsArr.join('&');
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
                    })();  
                })
            }
        }
    })
}