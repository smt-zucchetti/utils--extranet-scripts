import * as utils from './../../../lib/utils'

export function hideRoomsAndChildrenResultsPage()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            import('./styles/hide-rooms-and-children-results-page.scss');            
        }
    })

}