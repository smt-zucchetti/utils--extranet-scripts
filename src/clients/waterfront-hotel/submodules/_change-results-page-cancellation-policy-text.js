import * as utils from './../../../lib/utils';

export function changeResultsPageCancellationPolicyText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.waitForElement('.cond .pay-cond-short:first-child', true, 5000).then(els =>
            {
                els.forEach(el =>
                {
                    el.textContent = '48 Hour Cancellation';
                });
            });
        }
    });
}

