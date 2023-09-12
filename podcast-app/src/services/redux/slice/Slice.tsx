import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPodData } from "interfaces/DataInterface";

interface itemDataInterFace {
    itemDetail: IPodData[]
}

const initialState: itemDataInterFace = {
    itemDetail: [],
}

export const PodCastSlice = createSlice(
    {
        name: 'Podcast',
        initialState,

        reducers: {
            getItemDetails: (state = initialState, action: PayloadAction<IPodData>) => {
                state.itemDetail = [{ ...action.payload }];
            }
        }

    }
);
export const { getItemDetails } = PodCastSlice.actions;
export default PodCastSlice.reducer;