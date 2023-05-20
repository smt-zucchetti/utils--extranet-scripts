import * as utils from './../../../lib/utils';

export function updateCancellationText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.waitForElement('#box-risultati', false, 10000).then(() =>
            {
                const sections = document.querySelectorAll('.section_classicamere');
                sections.forEach(section =>
                {
                    const texts = section.querySelectorAll('.pay-cond-short');
                    texts[0].textContent = 'See Rate Information for';
                    texts[1].textContent = 'Payment and Cancel Policy';
                });
            });
        }
    });

}