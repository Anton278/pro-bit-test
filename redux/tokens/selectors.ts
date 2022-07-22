import { RootState } from "../store";

export const selectBTC = (state: RootState) => state.tokens.BTCPrice;
export const selectStatus = (state: RootState) => state.tokens.status;
