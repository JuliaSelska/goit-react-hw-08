import { createSlice, createSelector } from "@reduxjs/toolkit";

const authSlice = createSlice(
    {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchContacts.pending, handlePending)
    //         .addCase(fetchContacts.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.items = action.payload;
    //         })
    //         .addCase(fetchContacts.rejected, handleRejected)

    //         .addCase(addContact.pending, handlePending)
    //         .addCase(addContact.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.items.push(action.payload);
    //         })
    //         .addCase(addContact.rejected, handleRejected)

    //         .addCase(deleteContact.pending, handlePending)
    //         .addCase(deleteContact.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.items = state.items.filter(contact => contact.id !== action.payload.id);
    //         })
    //         .addCase(deleteContact.rejected, handleRejected);
    // },
);

export default authSlice.reducer;