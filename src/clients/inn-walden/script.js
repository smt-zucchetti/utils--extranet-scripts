import * as utils from './../../lib/utils'


utils.populateBeAttributes().then(() =>
{
    if(utils.BE_ATTRIBUTES.page === 'results')
    {
        const txt = '10 Day Cancellation Policy'

        utils.getElementBySelector('.cond .pay-cond-short').then(() =>
        {
            const allEls = document.querySelectorAll('.cond .pay-cond-short:first-of-type')
            const arr = [...allEls]
            arr.forEach(el => {
                el.innerHTML = txt
                el.setAttribute('title', txt)
            })
        })
        
        import('./submodules/styles/change-pay-condition-text.scss');   
    }
})

