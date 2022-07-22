import { createAsyncThunk } from "@reduxjs/toolkit";

type getBTCPriceT = {
    bpi: {
        EUR: {
            code: string;
            description: string;
            rate: string;
            rate_float: number;
            symbol: string;
        };
        GBP: {
            code: string;
            description: string;
            rate: string;
            rate_float: number;
            symbol: string;
        };
        USD: {
            code: string;
            description: string;
            rate: string;
            rate_float: number;
            symbol: string;
        };
    };
    chartName: string;
    disclaimer: string;
    time: {
        updated: string;
        updatedISO: string;
        updateduk: string;
    };
};

export const getBTCPrice = createAsyncThunk(
    "tokens/BTCPrice",
    async (_, { rejectWithValue }) => {
        try {
            const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
            const response: Response = await fetch(url);
            const data: getBTCPriceT = await response.json();
            return data.bpi.USD.rate_float;
        } catch (_) {
            return rejectWithValue(null);
        }
    }
);
