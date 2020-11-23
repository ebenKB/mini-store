import { createSlice } from '@reduxjs/toolkit';


export const paymentSclice = createSlice({
  name: 'payments',
  initialState: [
      { amount: 5.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, ID: 2, },
      { amount: 9.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, ID: 2, },
      { amount: 15.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, ID: 2, },
      { amount: 3.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, ID: 2, },
      { amount: 0.80, userID: 1, newBalance: 23.3, oldBalance: 34.3, ID: 2, },
      { amount: 1.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, ID: 2, },
      { amount: 4.00, userID: 1, newBalance: 23.3, oldBalance: 34.3, ID: 2, }
    ],

  reducers: {

  }
})


export const selectPayments = state => state.payments;

export default paymentSclice.reducer;
