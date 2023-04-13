import * as utils from './../../../lib/utils';

export function losCabosRemovePackageCalRates()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '18508')
        {
            import('./styles/los-cabos-remove-package-cal-rates.scss');     
        }
    });
}