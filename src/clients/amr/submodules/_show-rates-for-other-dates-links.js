import * as utils from './../../../lib/utils'

export function showRatesForOtherDatesLinks()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '14569')
        {
            import('./styles/show-rates-for-other-dates-links.scss');   
        }
    })
}