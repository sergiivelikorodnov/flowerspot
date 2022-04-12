import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavFlowerType, FlowersType } from '../../types/flower';
import { FlowersStateType } from '../../types/state';

const initialState: FlowersStateType = {
  posts: [],
  favPosts: [],
};

const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {
    getPosts(state, action: PayloadAction<FlowersType>) {
      state.posts = action.payload.flowers;
    },
    getFavPosts(state, action: PayloadAction<FavFlowerType[]>) {
      state.favPosts = action.payload;
    },
  },
});

export const { getPosts, getFavPosts } = flowersSlice.actions;

export default flowersSlice.reducer;
