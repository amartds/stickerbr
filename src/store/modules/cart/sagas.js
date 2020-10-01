import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addCartSuccess, updateAmountSuccess } from './actions';
import { priceFormat } from '../../../util/format';
import history from '../../../services/history';

function* addToCart({ id }) {
  const productExist = yield select((state) =>
    state.cart.find((product) => product.id === id)
  );
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Estoque finalizado');
    return;
  }
  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormat: priceFormat(response.data.price),
    };
    yield put(addCartSuccess(data));
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    toast.error('Você não pode reduzir para menor que zero');
    return;
  }
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Estoque finalizado');
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}
export default all([
  takeLatest('ADD_TO_CART', addToCart),
  takeLatest('UPDATE_AMOUNT_REQUEST', updateAmount),
]);
