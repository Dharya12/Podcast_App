import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPodData } from "interfaces/DataInterface";

interface itemDataInterFace {
    id : number,
    itemDetail: IPodData[]
}

const initialState: itemDataInterFace = {
    id : 0, 
    itemDetail: [],
}

export const PodCastSlice = createSlice(
    {
        name: 'Podcast',
        initialState,
        reducers: {
            getItemDetails: (state = initialState, action: PayloadAction<IPodData>) => {
                state.itemDetail = [{ ...action.payload }];
            },
            addItemId : (state = initialState , action : PayloadAction<number>)=>{

                state.id = action.payload;
            }
        }

    },
);
export const { getItemDetails , addItemId } = PodCastSlice.actions;
export default PodCastSlice.reducer;