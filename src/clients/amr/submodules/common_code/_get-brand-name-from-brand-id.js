import * as data from './../data/client';

export function getBrandNameFromBrandId(brandId)
{
    if(isNaN(brandId))
    {
        return null;
    }
    
    return Object.keys(data.brands).find(key => data.brands[key] === parseInt(brandId))
}