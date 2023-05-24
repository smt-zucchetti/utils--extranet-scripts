import * as companyData from './_company-data';

export function getBrandNameFromBrandId(brandId)
{
    if(isNaN(brandId))
    {
        return null;
    }
    
    return Object.keys(companyData.brands).find(key => companyData.brands[key] === parseInt(brandId))
}