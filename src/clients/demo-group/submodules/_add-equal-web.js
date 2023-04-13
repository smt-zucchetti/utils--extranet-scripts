import * as utils from './../../../lib/utils';

export function addEqualWeb()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '19356')
        {
            utils.equalWebPlugin();
            utils.equalWebStyles();
        }
    });
}