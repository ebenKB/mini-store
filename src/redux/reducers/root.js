import { combineReducers } from 'redux';
import counterReducer from '../../features/counter/counterSlice';
import paymentReducer from '../slices/payment.slice';
import customerReducer from '../slices/customers.slice';

const reducers = combineReducers({
    counter: counterReducer,
    payments: paymentReducer,
    customers: customerReducer,
  }
)

export default reducers;
