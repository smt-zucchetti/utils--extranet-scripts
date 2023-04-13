import * as utils from './../../../../lib/utils';
import { props } from './../data/props';

export async function importStyleVars()
{
    utils.populateBeAttributes().then(() =>
    {
        import('./../styles/shared/colors-and-fonts.scss');
        
        const brand = props[parseInt(utils.BE_ATTRIBUTES.propId)].brand;
        
        if(brand === 'princess')
        {
            import('./../styles/shared/vars-princess.scss');
        }
        else if(brand === 'westmark')
        {
            import('./../styles/shared/vars-westmark.scss');
        }
    })
}