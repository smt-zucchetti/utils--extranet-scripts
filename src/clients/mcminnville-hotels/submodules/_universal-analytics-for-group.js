import * as utils from './../../../lib/utils'

export function universalAnalyticsForGroup()
{
    utils.populateBeAttributes().then(() => 
    {
        const uaCodeObj = 
        {
            '23962' : 'UA-89764005-1',
            '23963' : 'UA-30953306-1'
        };
        
        const uaCode = uaCodeObj[utils.BE_ATTRIBUTES.propId];
        
        if(uaCode)
        {
            utils.universalAnalytics(uaCode);
        }
    });
}