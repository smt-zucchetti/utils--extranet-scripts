import * as utils from './../../../lib/utils'

export function discountCodeOptionalTextEsp()
{   
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.propId === '18510' && utils.BE_ATTRIBUTES.lang === 'esp')
        {
            import('./styles/discount-code-optional-text-esp.scss');
        }
    })
}