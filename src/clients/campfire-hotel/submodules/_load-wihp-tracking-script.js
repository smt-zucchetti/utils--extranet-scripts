import * as utils from './../../../lib/utils';

export function loadWihpTrackingScript()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            utils.loadWihpTrackingScript('206304');
        }
    });
} 