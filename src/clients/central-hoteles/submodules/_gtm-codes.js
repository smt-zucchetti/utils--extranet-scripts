import * as utils from './../../../lib/utils';

export async function gtmCodes()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.cmWidgetValues.propId === '22383')
    {
        utils.googleTagManager('GTM-M6XZFZ7');
    }
    else
    {
        utils.googleTagManager('GTM-NM42WCW');
    }
}