import * as utils from './../../../lib/utils';

export function changeEspDiscountCodeText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.beType === 1 && utils.BE_ATTRIBUTES.lang === 'esp')
        {
            import('./styles/change-esp-discount-code-text.scss');
        }
    })
} 