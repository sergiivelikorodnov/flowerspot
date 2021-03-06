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
    setStatus(state, action: PayloadAction<FetchStatus>) {
      state.fetchStatus = action.payload;
    },
  },
});

export const {
  setStatus,
} = fetchStatusSlice.actions;

export default fetchStatusSlice.reducer;
