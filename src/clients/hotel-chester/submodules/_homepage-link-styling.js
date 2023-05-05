import * as utils from './../../../lib/utils';

export function homepageLinkStyling()
{
    import('./styles/homepage-link-styling.scss');

    utils.waitForElement('#hp > .animsition-link').then(el =>
    {
        el.childNodes[1].textContent = ' BACK TO HOME PAGE';
    }) 
    
}


