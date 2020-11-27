import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    customerData: [
      {id: 1, name: 'John Okafo Ibu', balance: 10.00},
      {id: 2, name: 'Mary Anderson',  balance: -9.00},
      {id: 3, name: 'Emmanuel Andoh', balance: 2.40},
      {id: 4, name: 'Johnson Cooker', balance: 5.40},
    ],
    currentCustomer: null,
  },
  reducers: {
    getUserByName(state, action) {
      const t = state.customerData
        .find(c => c.name.toLowerCase() === action.payload.toLowerCase());
        console.log('We found this', t)
      if (t) {
        state.currentCustomer = t;
      }
    },

    addNewCustomer(state, action) {
      if (action.payload) {
        if (action.payload.name.length > 0) {
          const existing = state.customerData
            .find((x) => x.name === action.payload.name);

          if (!existing) {
            state.customerData.push(action.payload);
          }
        }
      }
    },

    deleteCustomer(state, action) {
      if (action.payload) {
        const id = action.payload;
        const customers = state.customerData.find((x) => x.id !== id);
        state.customerData = customers;
      }
    }
  }
})

export const { getUserByName, addNewCustomer } = customerSlice.actions;
export const selectCustomers = state => state.customers.customerData;

export const getUserByNameAsync = (name) => dispatch => {
  dispatch(getUserByName(name))
}

export const selectUserByName = state => state.customers.customerData[0]
export const selectCurrentCustomer = state => state.customers.currentCustomer;

export const selectTotalPayable = (state) => {
  let total = 0;
  const customers = state.customers.customerData;
  for (const customer of customers) {
    if (customer.balance > 0) {
      total += customer.balance;
    }
  }
  return total.toFixed(2);
}

export const selectTotalReceivable = (state) => {
  let total = 0;
  const customers = state.customers.customerData;
  for (const customer of customers) {
    if (customer.balance < 0) {
      total += customer.balance;
    }
  }
  return total.toFixed(2);
}

export default customerSlice.reducer;
