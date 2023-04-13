import { importStyleVars } from './shared/import-style-vars';
import * as utils from './../../../lib/utils';

export function cancelChangeBookingText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'first_page')
        {
            importStyleVars().then(() =>
            {
                import('./styles/cancel-change-booking-text.scss');
            });
        }
    });
}