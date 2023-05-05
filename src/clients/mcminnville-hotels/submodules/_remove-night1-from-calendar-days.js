import * as utils from './../../../lib/utils';

export function removeNight1FromCalendarDays()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'first_page')
        {
            import('./styles/remove-night1-from-calendar-days.scss');     
        }
    });
}