import * as utils from './../../../lib/utils'

export function autoShowPaymentMethod()
{
    import('./styles/auto-show-payment-method.scss');
    
    utils.waitForElement('.riga.condizioni.metodo_pagamento').then(el =>
    {   
        if(el && el.querySelector('.dettaglio_condizioni:last-of-type > .label') && el.querySelector('.dettaglio_condizioni:last-of-type > .label').textContent.trim() === 'balance due date:')
        {
            el.querySelector('.dettaglio_condizioni:last-of-type > .label').textContent = 'Balance due date:'
        }
    })
}