import { createAction } from 'redux-actions';
import { Network } from 'utils';
export const fetchMostviewData = createAction(
  'FETCH_MOSTVIEW_DATA',
  async (page: number) => {
    let result = await Network().get('vehicle-ads/mostView/?page=' + page);
    return result;
  },
);

export const fetchLatestData = createAction(
  'FETCH_LATEST_DATA',
  async (page: number) => {
    let result = await Network().get('vehicle-ads/latest/?page=' + page);
    return result;
  },
);
