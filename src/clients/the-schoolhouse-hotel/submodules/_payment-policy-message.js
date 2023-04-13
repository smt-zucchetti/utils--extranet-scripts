import * as utils from './../../../lib/utils'

export function paymentPolicyMessage()
{
utils.waitForElement('.cond', false, 5000).then(el => {
    
    const payCondArr = document.querySelectorAll('.cond .pay-cond-short')
    payCondArr.forEach((el, idx) => 
    {
        if(idx % 2 === 0)
        {
            el.innerHTML = 'Check Cancel and Payment Policy'   
        }
        else
        {
            el.innerHTML = ''
        }
    })
})
}