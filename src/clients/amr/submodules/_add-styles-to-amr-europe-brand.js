//import * as utils from './../../../lib/utils';
import * as common from './common_code/main';

export function addStylesToAmrEuropeBrand()
{
    common.getBrandId().then(brandId =>
    {
        if(brandId && brandId === 125)
        {
            import('./styles/add-styles-to-amr-europe-brand.scss');
        }
    });
}