import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitState } from "./types";
import { getBTCPrice } from "../asyncActions";

const initialState: InitState = {
    BTCPrice: 0,
    status: "success",
};

const tokens = createSlice({
    name: "tokens",
    initialState,
    // reducers: {
    //     setBTCPrice(state, action: PayloadAction<number>) {
    //         state.BTCPrice = action.payload;
    //     },
    // },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBTCPrice.fulfilled, (state, action) => {
            state.BTCPrice = action.payload;
            state.status = "success";
        });
        builder.addCase(getBTCPrice.rejected, (state) => {
            state.status = "error";
        });
    },
});

export default tokens.reducer;
