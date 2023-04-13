import * as utils from './../../../lib/utils';

export function test()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            console.log(utils.BE_ATTRIBUTES.cmWidgetValues);
        }
    });
    
}