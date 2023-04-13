import * as utils from './../../../lib/utils';

export function changeResultsPageCancellationPolicyText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.changeResultsPageCancellationPolicyText();   
        }
    });
}