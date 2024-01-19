import { createSlice } from "@reduxjs/toolkit";

const selectUnitCounterSlice = createSlice({
    name: "selectunit",                 // ManageUnitsSelection.jsx => #ref3
    initialState: {                     // state haye reducer
        selectedList: [],
        count: 0
    },
    reducers: {                         // function haye reducer
        // state baraye inja, action az unvar miyad. action.payload = selectedItem. ManageUnitsSelection.jsx => #ref4
        select: (state, action) =>{      
            const numberOfUnits = action.payload.selectedItem.numberOfUnits;
            state.count += Number(numberOfUnits);
            state.selectedList.push(action.payload.selectedItem);
        },
        unselect: (state, action) =>{
            var result = state.selectedList.find(obj => {
                return obj.courseId === action.payload.selectedItem.courseId
            });
            state.count -= Number(result.numberOfUnits);
            const index = state.selectedList.indexOf(result); // age peyda nakone -1 miyare    
            state.selectedList.splice(index, 1);
        },
        getselect:(state, action)=>{
            state.selectedList = action.payload.list;       // action az unvar miyad. state haminvar hast
            state.count = action.payload.count;
        }
    },
});

export default selectUnitCounterSlice.reducer;      // .reducer
export const {select, unselect, getselect} = selectUnitCounterSlice.actions;  // .actions