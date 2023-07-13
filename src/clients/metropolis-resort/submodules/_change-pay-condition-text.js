import * as utils from './../../../lib/utils'

export async function changePayConditionText()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.page === 'results')
    {
        const txt = '48 hour Cancellation Payment at the hotel Excludes Pay Now & Save Bookings'

        utils.getElementBySelector('.cond .pay-cond-short').then(() =>
        {
            const allEls = document.querySelectorAll('.cond .pay-cond-short')
            const arr = [...allEls]
            arr.forEach(el => {
                el.innerHTML = txt
                el.setAttribute('title', txt)
            })
        })
        
        import('./styles/change-pay-condition-text.scss');   
    }
}
