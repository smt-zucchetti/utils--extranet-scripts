import * as utils from './../../../lib/utils';

export async function universalAnalytics()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.propId === '25596') //Rockhouse
    {
        utils.universalAnalytics('G-FDGWZT99XP');    
    }
    else if(utils.BE_ATTRIBUTES.propId === '25597') //Skylark
    {
        utils.universalAnalytics('G-Z2Z78V7EFB');
    }    
}