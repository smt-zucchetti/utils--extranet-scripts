import * as utils from './../../../lib/utils';

export function testing()
{
    utils.populateBeAttributes().then(() =>
    {
        console.log(utils.BE_ATTRIBUTES.cmWidgetValues); 
    });
}