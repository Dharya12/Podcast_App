import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Data } from "interfaces/DataInterface";

interface itemDataInterFace {
    itemDetail: Data[]
}

const initialState: itemDataInterFace = {
    itemDetail: [],
}

export const PodCastSlice = createSlice(
    {
        name: 'Podcast',
        initialState,

        reducers: {
            getItemDetails: (state = initialState, action: PayloadAction<Data>) => {
                console.log("state is  : ", state);
                console.log(action);
                state.itemDetail = [{ ...action.payload }];
            }
        }

    }
);
export const { getItemDetails } = PodCastSlice.actions;
export default PodCastSlice.reducer;