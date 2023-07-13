import * as utils from './../../../lib/utils';

export async function loadWihpTrackingScript()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        utils.legacyWihpConversionOnly('206304');
    }
} 