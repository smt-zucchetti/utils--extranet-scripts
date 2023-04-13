import * as utils from './../../../lib/utils';

export function IxtapaOtaComparisonColors()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '18509' && ['results', 'summary'].includes(utils.BE_ATTRIBUTES.page))
        {
            import('./styles/ixtapa-ota-comparison-colors.scss');   
        }
    });
}