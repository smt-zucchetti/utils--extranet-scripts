import * as utils from './../../../lib/utils';
import * as common from './common_code/main';

export function adobeTmScript()
{
    const adobeIds = 
    {
        1: '3762f6b9b2733fb74ac11e5de919a971d2bb8705',
        2: 'b5a813d0396345132f0f68006d869471c1a98cc8',
        3: 'e1bfa8761645251626840b75bfcb0edc0fff5821',
        4: 'd1f63070bafebcaab50859787a3cf754266f106a',
        5: '4dbef1a0bd04b8589f7ae1c913d3b2160807715a',
        6: '7dbfc7d9e2165d9e91a82a28fac12fe41d6eb793',
        163: 'd1f63070bafebcaab50859787a3cf754266f106a'
    }
    
    common.getBrandId().then(brandId =>
    {
        const adobeId = adobeIds[brandId];
        if(brandId && adobeId)
        {
            utils.loadScriptAsync(`//assets.adobedtm.com/5011d6fe9c3a465ebe160339d2b354e6184a92b9/satelliteLib-${adobeId}.js`).then(() =>
            {
                utils.populateBeAttributes().then(() =>
                {
                    if(utils.BE_ATTRIBUTES.page !== 'results')
                    {
                        _satellite.pageBottom();     
                    }
                });
            });
        }
    });
}



