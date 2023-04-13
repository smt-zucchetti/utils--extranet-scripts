import * as utils from './../../../lib/utils';

export function showFirstRoomsRates()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '12812')
        {
            import('./styles/show-first-rooms-rates.scss');
        }
    });
}