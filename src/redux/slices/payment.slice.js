import { createSlice } from '@reduxjs/toolkit';


export const paymentSclice = createSlice({
  name: 'payments',
  initialState: [
      { amount: 5.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, id: 2, },
      { amount: 9.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, id: 2, },
      { amount: 15.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, id: 2, },
      { amount: 3.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, id: 2, },
      { amount: 0.80, userID: 1, newBalance: 23.3, oldBalance: 34.3, id: 2, },
      { amount: 1.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, id: 2, },
      { amount: 4.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, id: 2, },
    ],

  reducers: {
    newPayment(state, action) {
      const { amount, user } = action.payload;
      if ( user && amount ) {
        state.push({
          amount: amount,
          id: user.id,
          oldBalance: user.balance,
          newBalance: (user.balance +  amount),
        })
      }
    }
  }
})

export const { newPayment } = paymentSclice.actions;
export const selectPayments = state => state.payments;

export default paymentSclice.reducer;
