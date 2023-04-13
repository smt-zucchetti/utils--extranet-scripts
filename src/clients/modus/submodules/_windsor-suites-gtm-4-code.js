import * as utils from './../../../lib/utils';

export function windsorSuitesGtm4Code()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '17784') 
        {
            utils.gtm4StandardCode('GTM-P33F2W');
        }
    });
}