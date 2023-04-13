import * as utils from './../../../lib/utils';

export function sojernTag()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '18508')
        {
            let params = {};
            
            if(utils.BE_ATTRIBUTES.page === 'results')
            {
                params.hpid = '18508';
                params.pt = 'SEARCH';
                params.hd1 = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers;
                params.hd2 = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers;
                params.hc1 = 'Cabo San Lucas';
                params.hs1 = 'Baja California Sur';
                params.hn1 = 'Mexico';
                params.hpr = 'Tesoro Los Cabos a la Carte All Inclusive Optional';
                params.t =  '';
                params.ccid = '';
                params.eml = '';
                params.md5_eml = '';
                params.sha1_eml = '';
                params.sha256_eml = '';
            }
            else if(utils.BE_ATTRIBUTES.page === 'guest_info')
            {
                params.hpid = '18508';
                params.pt = 'SHOPPING_CART';
                params.hc1 = 'Cabo San Lucas';
                params.hs1 = 'Baja California Sur';
                params.hn1 = 'Mexico';
                params.hpr = 'Tesoro Los Cabos a la Carte All Inclusive Optional';
                params.t = '';
                params.hr = '';
                params.hp = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                params.hcu = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
                params.ccid = '';
                params.eml = '';
                params.md5_eml = '';
                params.sha1_eml = '';
                params.sha256_eml = '';
            }
            else if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                params.hpid = '18508';
                params.pt = 'CONVERSION';
                params.hd1 = utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers;
                params.hd2 = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers;
                params.hc1 = 'Cabo San Lucas';
                params.hs1 = 'Baja California Sur';
                params.hn1 = 'Mexico';
                params.hpr = 'Tesoro Los Cabos a la Carte All Inclusive Optional';
                params.hr = utils.BE_ATTRIBUTES.cmWidgetValues.rooms;
                params.hc = utils.BE_ATTRIBUTES.cmWidgetValues.roomType;
                params.tch = utils.BE_ATTRIBUTES.cmWidgetValues.children;
                params.tad = utils.BE_ATTRIBUTES.cmWidgetValues.adults;
                params.t = utils.BE_ATTRIBUTES.cmWidgetValues.occupancy;
                params.hp = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                params.hcu = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
                params.hconfno = utils.BE_ATTRIBUTES.cmWidgetValues.code;   
                params.ccid = '';
                params.eml = '';
                params.md5_eml = '';
                params.sha1_eml = '';
                params.sha256_eml = '';
            }   
            
            utils.loadScriptAsync('https://static.sojern.com/utils/sjrn_autocx.js').then(() =>
            {
                params.et = {}[params.pt] || '';
                try{params = Object.assign({}, sjrn_params, params);}catch(e){}
                const paramsArr = [];
                for(let key in params) { paramsArr.push(key + '=' + encodeURIComponent(params[key])) }
    
                const pl = document.createElement('iframe');
                pl.type = 'text/html';
                pl.setAttribute("style","height:0; width: 0; display:none;");
                pl.async = true;
                pl.src = "https://static.sojern.com/cip/c/27.html?f_v=cp_v1_js&p_v=1&"+paramsArr.join('&');
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(pl);    
            });
        }
    });
}