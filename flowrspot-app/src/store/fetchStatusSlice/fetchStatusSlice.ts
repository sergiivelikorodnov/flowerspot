import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import { FetchStatusType } from '../../types/state';

const initialState:FetchStatusType = {
  fetchStatus: FetchStatus.InProgress,
};

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState,
  reducers:{
    getStatus(state, action: PayloadAction<FetchStatus>) {
      state.fetchStatus = action.payload;
    },
  },
});

export const {
  getStatus,
} = fetchStatusSlice.actions;

export default fetchStatusSlice.reducer;
