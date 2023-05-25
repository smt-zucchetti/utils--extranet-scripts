import * as common from './common_code/main';

export async function brandTest()
{
    const bid = await common.getBrandId();
    //console.log('bid', bid);
    const bidName = common.getBrandNameFromBrandId(bid);
    //console.log('bidName', bidName);
}