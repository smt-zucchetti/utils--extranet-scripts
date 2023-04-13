import * as utils from './../../../lib/utils'

export function changeDiscountCodeBtnText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'first_page' || utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.waitForElement('#discount-code-button', false, 5000).then((el) =>
            {
                el.textContent = 'Enter Corporate/Promo Code';
            });
           
        }
    });
}