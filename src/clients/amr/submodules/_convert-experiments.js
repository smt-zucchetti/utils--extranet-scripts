import * as utils from './../../../lib/utils';
import * as common from './common_code/main';

export function convertExperiments()
{
    utils.populateBeAttributes().then(() => 
    {
        common.getBrandId().then(brandId =>
        {
            //Not Now!
            if(brandId !== 2)
            {
                utils.loadScript('https://cdn-3.convertexperiments.com/js/10034870-10032898.js');
        
                if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
                {
                    window._conv_q = window._conv_q || []
                    _conv_q.push([
                        'pushRevenue', 
                        utils.BE_ATTRIBUTES.cmWidgetValues.total, 
                        utils.BE_ATTRIBUTES.cmWidgetValues.rooms, 
                        '100310871'
                    ])
                } 
            } 
        });
    })
}