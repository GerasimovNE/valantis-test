import { getItemsAxios } from '../biz/getItemsAxios';
import { cleaner } from './cleaner';

export const getItemsFunc = async (offset, filterIds, isFilt) => {
    const ids = isFilt
        ? filterIds.slice(offset, offset + 50)
        : await getItemsAxios('get_ids', {
              limit: 50,
              offset: offset,
          });

    const result = await getItemsAxios('get_items', {
        ids: ids ? ids : [],
    });
    cleaner(result);
    return result;
};
