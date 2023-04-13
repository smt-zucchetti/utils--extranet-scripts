import * as utils from './../../../lib/utils';

export function addCreditCardText()
{
    utils.populateBeAttributes().then(() =>
    {   
        if(['18509', '18510'].includes(utils.BE_ATTRIBUTES.propId) && utils.BE_ATTRIBUTES.page === 'guest_info')
        {
            const li = document.createElement('li');
            li.classList.add('text-to-cc-form');
            if(utils.BE_ATTRIBUTES.lang === 'usa')
            {
                li.textContent = 'Credit card information: for Guarantee (card will not be charged at time of booking)';   
            }
            else if(utils.BE_ATTRIBUTES.lang === 'esp')
            {
                li.textContent = 'El pago del importe total será realizado a su llegada al hotel. Los datos de la tarjeta son para garantizar la reserva.';
            }
            
            const el = document.getElementById('contenitore_secure');
            el.prepend(li);
            
            import('./styles/add-credit-card-text.scss');
        }
    });
}