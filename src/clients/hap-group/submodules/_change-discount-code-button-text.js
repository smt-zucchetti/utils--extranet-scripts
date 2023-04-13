import * as utils from './../../../lib/utils';

export function changeDiscountCodeButtonText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(['first_page', 'results'].includes(utils.BE_ATTRIBUTES.page))
        {
            import('./styles/change-discount-code-button-text.scss');     
        }
    });
}