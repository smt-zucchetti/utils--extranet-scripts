import * as utils from './../../../lib/utils';

export function changeToBookNowResultsPage()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.waitForElement('#dx .campo .tariffa', true, 4000).then(els =>
            {
                els.forEach(el => el.textContent = 'Book Now');
                import('./styles/change-to-book-now-results-page.scss');
            });
        }
    });
}

  