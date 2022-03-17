import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlowersType } from '../../types/flower';
import { FlowersState } from '../../types/state';

const initialState:FlowersState = {
  posts: [],
};

const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers:{
    getPosts(state, action: PayloadAction<FlowersType>) {
      state.posts = action.payload;
    },
  },
});

export const {
  getPosts,
} = flowersSlice.actions;

export default flowersSlice.reducer;
