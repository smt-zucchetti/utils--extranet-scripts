import * as utils from './../../../lib/utils';

export function changeCreditCardIFrame()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'guest_info')
        {
            console.log('farts');   
        }
    });
    
}
