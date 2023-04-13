import * as utils from './../../../lib/utils'

export function sojernCode()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js').then(() =>
            {
                (function () {
                    /* Please fill the following values. */
                    var params = 
                    {
                        hpid: '24490', /* Property ID */
                        pt: 'SEARCH', /* Page Type */
                        hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                        hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                        hc1: 'Lake Geneva', /* Destination City */
                        hs1: 'WI', /* Destination State or Region */
                        hn1: 'US', /* Destination Country */
                        hpr: 'Harbor Shores on Lake Geneva', /* Hotel Property */
                        ccid: '', /* Client Cookie ID */
                        eml: '', /* Raw Email */
                        md5_eml: '', /* Hashed Email (MD5) */
                        sha1_eml: '', /* Hashed Email (SHA1) */
                        sha256_eml: '' /* Hashed Email (SHA256) */
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
                    pl.src = 'https://static.sojern.com/cip/c/27.html?f_v=cp_v1_js&p_v=1&' + paramsArr.join('&');
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
                        hpid: '24490', /* Property ID */
                        pt: "SHOPPING_CART", /* Page Type */
                        hc1: 'Lake Geneva', /* Destination City */
                        hs1: 'WI', /* Destination State or Region */
                        hn1: 'US', /* Destination Country */
                        hpr: 'Harbor Shores on Lake Geneva', /* Hotel Property */
                        ccid: '', /* Client Cookie ID */
                        eml: '', /* Raw Email */
                        md5_eml: '', /* Hashed Email (MD5) */
                        sha1_eml: '', /* Hashed Email (SHA1) */
                        sha256_eml: '' /* Hashed Email (SHA256) */
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
                    pl.src = 'https://static.sojern.com/cip/c/27.html?f_v=cp_v1_js&p_v=1&' + paramsArr.join('&');
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
                        hpid: '24490', /* Property ID */
                        pt: 'CONVERSION', /* Page Type */
                        hd1: utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                        hd2: utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                        hc1: 'Lake Geneva', /* Destination City */
                        hs1: 'WI', /* Destination State or Region */
                        hn1: 'US', /* Destination Country */
                        hpr: 'Harbor Shores on Lake Geneva', /* Hotel Property */
                        hr: utils.BE_ATTRIBUTES.cmWidgetValues.rooms, /* Number of Rooms */
                        hc: utils.BE_ATTRIBUTES.cmWidgetValues.roomType, /* Room type */
                        tch: utils.BE_ATTRIBUTES.cmWidgetValues.children, /* Number of Children */
                        tad: utils.BE_ATTRIBUTES.cmWidgetValues.adults, /* Number of Adults */
                        t: utils.BE_ATTRIBUTES.cmWidgetValues.occupancy, /* Number of Travelers */
                        hp: utils.BE_ATTRIBUTES.cmWidgetValues.total, /* Purchase Price */
                        hcu: utils.BE_ATTRIBUTES.cmWidgetValues.currency, /* Purchase Currency */
                        hconfno: utils.BE_ATTRIBUTES.cmWidgetValues.code, /* Confirmation Number */   
                        ccid: '', /* Client Cookie ID */
                        eml: '', /* Raw Email */
                        md5_eml: '', /* Hashed Email (MD5) */
                        sha1_eml: '', /* Hashed Email (SHA1) */
                        sha256_eml: '' /* Hashed Email (SHA256) */
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
                    pl.src = 'https://static.sojern.com/cip/c/27.html?f_v=cp_v1_js&p_v=1&' + paramsArr.join('&');
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);
                })();  
            })
        }
    });
}