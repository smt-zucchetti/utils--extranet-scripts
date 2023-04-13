import * as utils from './../../../lib/utils'

export function bgImageForGroupBe()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.groupId)
        {
            import('./styles/bg-image-for-group-be.scss');
        }
    })
}