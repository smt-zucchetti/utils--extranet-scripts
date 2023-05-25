import * as utils from './../../../lib/utils';

export async function showAddOnDescForInsurance()
{
    await utils.populateBeAttributes();

    if(utils.BE_ATTRIBUTES.page === 'summary') 
    {
        utils.waitForElement('ul.tabs_nav_servizi', false, 10000).then(ul =>
        {
            const res = document.querySelectorAll('ul.tabs_nav_servizi > li');

            res.forEach((li, idx) =>
            {
                if(li.querySelector('.tabs-servizi-link') && !li.querySelector('.tabs-servizi-link').textContent.includes('Travel Protection'))
                {
                    return;
                }
                else
                {
                    const res2 = li.querySelectorAll('ul.elenco > li');
                    res2.forEach((li2, idx) =>
                    {
                        if(!li2.querySelector('.service-details-link').textContent.includes('Travel Protection'))
                        {
                            return;
                        }
                        
                        const shortDescP = li2.querySelector('.descrizione_servizio > p');
                        shortDescP.classList.add('service-short-desc');
                        shortDescP.style.backgroundColor = '#fff';
                        shortDescP.style.padding = '9px 14px 5px';
                        shortDescP.style.lineHeight = '1.4em';
                        shortDescP.style.margin = '10px 0 0';
                    
                        const serviceLabel = li2.querySelector('.nome_servizio');
                        serviceLabel.appendChild(shortDescP);
                    });
                }
            });

        });
    }
}