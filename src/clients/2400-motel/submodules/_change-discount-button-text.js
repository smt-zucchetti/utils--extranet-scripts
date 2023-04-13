import * as utils from './../../../lib/utils'

export function changeDiscountButtonText()
{
    utils.populateBeAttributes().then(() =>
    {
        const discountBtn = document.querySelector('#discount-code-button')
        if(discountBtn)
        {
            discountBtn.innerHTML = 'Enter promo or group code'
        }
    })
}