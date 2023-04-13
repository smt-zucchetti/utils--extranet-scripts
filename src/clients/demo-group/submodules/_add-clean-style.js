import * as utils from './../../../lib/utils'

//12812: The Vertical Hotel
//19357: The Simple Vertical Hotel
//19356: The Vertical Hotel Maximized
//17964 (group id): The Vertical Group


export function addCleanStyle()
{
    import('./styles/add-clean-style/main.scss');
 
    utils.populateBeAttributes().then(() =>
    {
        const propId = parseInt(utils.BE_ATTRIBUTES.propId)
        const groupId = parseInt(utils.BE_ATTRIBUTES.groupId)
        
        if((propId && propId === 12812) || (groupId && groupId === 17964))
        {
            import('./styles/add-clean-style/minimum/main.scss');
        }
        else if(propId && [19356, 19357].includes(propId))
        {
            import('./styles/add-clean-style/maximum/main.scss');
        }
    })
}