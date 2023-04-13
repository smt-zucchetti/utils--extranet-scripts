import * as utils from './../../../lib/utils';

export function roomUpgradeBoxStyle()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '18179')
        {
            import('./styles/room-upgrade-box-style.scss');             
        }
    })

}