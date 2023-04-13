import * as utils from './../../../lib/utils'

export function addSojernCode()
{
    utils.populateBeAttributes().then(() => 
    {
        const page = utils.BE_ATTRIBUTES.page
        if(page === 'results'|| page === 'guest_info' || page === 'thank_you_page')
        {
            utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js').then(() =>
            {
                let params = {} 
    
                switch(page)
                {
                    case 'results':
                        params = 
                        {
                            hpid: '24311', /* Property ID */
                            pt: 'SEARCH', /* Page Type */
                            hd1: utils.BE_ATTRIBUTES.cmValues.cmStartDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                            hd2: utils.BE_ATTRIBUTES.cmValues.cmEndDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                            hc1: 'West Virginia', /* Destination City */
                            hs1: 'WV', /* Destination State or Region */
                            hn1: 'US', /* Destination Country */
                            hpr: 'The Schoolhouse Hotel' /* Hotel Property */
                        }
                        break;
                    
                    case 'guest_info':
                            params =
                            {
                                hpid: '24311', /* Property ID */
                                pt: 'SHOPPING_CART', /* Page Type */
                                hc1: 'West Virginia', /* Destination City */
                                hs1: 'WV', /* Destination State or Region */
                                hn1: 'US', /* Destination Country */
                                hpr: 'The Schoolhouse Hotel', /* Hotel Property */
                                hcu: 'USD' /* Purchase Currency */
                            }
                        break;
                
                
                    case 'thank_you_page':
                        params =
                        {
                            hpid: '24311', /* Property ID */
                            pt: 'CONVERSION', /* Page Type */
                            hd1: utils.BE_ATTRIBUTES.cmValues.cmStartDateNumbers, /* Check In Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                            hd2: utils.BE_ATTRIBUTES.cmValues.cmEndDateNumbers, /* Check Out Date. Format yyyy-mm-dd. Ex: 2015-02-14 */
                            hc1: 'West Virginia', /* Destination City */
                            hs1: 'WV', /* Destination State or Region */
                            hn1: 'US', /* Destination Country */
                            hpr: 'The Schoolhouse Hotel', /* Hotel Property */
                            hr: utils.BE_ATTRIBUTES.cmValues.cmRooms, /* Number of Rooms */
                            hc: utils.BE_ATTRIBUTES.cmValues.cmRoomType, /* Room type */
                            tch: utils.BE_ATTRIBUTES.cmValues.cmChildren, /* Number of Children */
                            tad: utils.BE_ATTRIBUTES.cmValues.cmAdults, /* Number of Adults */
                            t: utils.BE_ATTRIBUTES.cmValues.cmOccupancy, /* Number of Travelers */
                            hp: utils.BE_ATTRIBUTES.cmValues.cmTotal, /* Purchase Price */
                            hcu: 'USD', /* Purchase Currency */
                            hconfno: utils.BE_ATTRIBUTES.cmValues.cmCode /* Confirmation Number */   
                        }
                        break;
                }
    
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
            })
        }
    })
}

