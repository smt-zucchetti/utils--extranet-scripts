import * as utils from './../../../lib/utils'

export function insertGaCode()
{
    const obj = 
    {
        23962: 'UA-89764005-1',
        23963: 'UA-30953306-1'    
    }

     utils.populateBeAttributes().then(() => 
    {
        utils.googleAnalyticsCode(obj[parseInt(utils.BE_ATTRIBUTES.propId)])
    })
}