import * as utils from './../../../lib/utils';

export async function sojernScript()
{
    await utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js');
    await utils.populateBeAttributes();
    
    if(!['results', 'guest_info', 'thank_you_page'].includes(utils.BE_ATTRIBUTES.page))
    {
        return;
    }
    
    var params = {};
            
    if(utils.BE_ATTRIBUTES.page === 'results')
    {
        params.hpid = utils.BE_ATTRIBUTES.cmWidgetValues.propertyId; /* Property ID */
        params.pt = 'SEARCH'; /* Page Type */
        params.hd1 = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers; /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
        params.hd2 = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers; /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
        params.ccid = localStorage.sjrn_ccid;
    }
    if(utils.BE_ATTRIBUTES.page === 'guest_info')
    {
        params.hpid = utils.BE_ATTRIBUTES.cmWidgetValues.propertyId; /* Property ID */
        params.pt = 'SHOPPING_CART'; /* Page Type */
        params.hcu = utils.BE_ATTRIBUTES.cmWidgetValues.currency; /* Purchase Currency */
        params.ccid = localStorage.sjrn_ccid;
    }
    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        params.hpid = utils.BE_ATTRIBUTES.cmWidgetValues.propertyId; /* Property ID */
        params.pt = 'CONVERSION'; /* Page Type */
        params.hd1 = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers; /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
        params.hd2 = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers; /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
        params.hr = utils.BE_ATTRIBUTES.cmWidgetValues.rooms; /* Number of Rooms */
        params.hc = utils.BE_ATTRIBUTES.cmWidgetValues.roomType; /* Room type */
        params.tch = utils.BE_ATTRIBUTES.cmWidgetValues.children; /* Number of Children */
        params.tad = utils.BE_ATTRIBUTES.cmWidgetValues.adults; /* Number of Adults */
        params.t = utils.BE_ATTRIBUTES.cmWidgetValues.occupancy; /* Number of Travelers */
        params.hp = utils.BE_ATTRIBUTES.cmWidgetValues.total; /* Purchase Price */
        params.hcu = utils.BE_ATTRIBUTES.cmWidgetValues.currency; /* Purchase Currency */
        params.hconfno = utils.BE_ATTRIBUTES.cmWidgetValues.code; /* Confirmation Number */    
        params.ccid = localStorage.sjrn_ccid;
        params.eml = sjrn_eml.auto_email;
    }

    /* Please do not modify the below code. */ 
    try {params = Object.assign({}, sjrn_params, params);}catch(e){}
    var cid = [];
    var paramsArr = [];
    var cidParams = [];
    var pl = document.createElement('iframe');
    var defaultParams = {"vid":"tou"};
    for(let key in defaultParams) { params[key] = defaultParams[key]; }
    for(let key in cidParams) { cid.push(params[cidParams[key]]); }
    params.cid = cid.join('|');
    for(let key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) }
    pl.type = 'text/html';
    pl.setAttribute('style','height:0; width: 0; display:none;');
    pl.async = true;
	pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v1_js&p_v=1&" + paramsArr.join('&'); 
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);     
}