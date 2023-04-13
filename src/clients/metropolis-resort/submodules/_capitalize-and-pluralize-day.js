import * as utils from './../../../lib/utils'

export function capitalizeAndPluralizeDay()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'summary')
        {
            utils.replaceTextInElement('.giorno', 'Days')   
        }
    })
}
