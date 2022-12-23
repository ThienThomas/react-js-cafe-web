import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllProductAPI } from '../api/product';
import { actions } from '../store';

export function* callGetAllProductAPI(): any {
  console.log(2);
  yield put(actions.product.getAllProductStart());
  try {
    const response = yield call(getAllProductAPI);
    if (response.status === 200 && !response.hasErrors) {
      console.log(response);
      const productList = response.data.content;
      yield put(actions.product.getAllProductSuccess({ productList: productList }));
    } else {
      yield put(
        actions.product.getAllProductFailed({ getAllProductErr: JSON.stringify(response) })
      );
    }
  } catch (e) {
    yield put(actions.product.getAllProductFailed({ getAllProductErr: JSON.stringify(e) }));
  }
}

export function* actionProductWatcher() {
  yield takeLatest('product/getAllProduct', callGetAllProductAPI);
}
