import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customerData: [
      {name: 'John Okafo Ibu', balance: 10.00},
      {name: 'Mary Anderson', balance: 9.00},
      {name: 'Emmanuel Andoh', balance: 2.40},
      {name: 'Johnson Cooker', balance: 5.40},
    ],
    currentCustomer: null,
  },
  reducers: {
    getUserByName(state, action) {
      console.log('This is the payload',action.payload);
      const t = state.customerData
        .find(c => c.name.toLowerCase() === action.payload.toLowerCase());
        console.log('We found this', t)
      if (t) {
        state.currentCustomer = t;
      }
    },
  }
})

export const { getUserByName } = customerSlice.actions;
export const selectCustomers = state => state.customers.customerData;

export const getUserByNameAsync = (name) => dispatch => {
  dispatch(getUserByName(name))
}

export const selectUserByName = state => state.customers.customerData[0]
export const selectCurrentCustomer = state => state.customers.currentCustomer;
export default customerSlice.reducer;
