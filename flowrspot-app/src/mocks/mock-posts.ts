import { FlowersType } from '../types/flower';

export const fakeAllPostsFlowers: FlowersType = {
  flowers: [
    {
      id: 7,
      name: "Alpski volcin",
      latin_name: "Daphne alpina",
      sightings: 17,
      profile_picture: "//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/007/medium/L_00010.jpg?1527514226",
      favorite: false
    },
    {
      id: 28,
      name: "bb",
      latin_name: "bb",
      sightings: 1,
      profile_picture: "https://flowrspot-api.herokuapp.com/images/medium/missing.jpg",
      favorite: false
    },
    {
      id: 14,
      name: "Bee orchid",
      latin_name: "Ophrys apifera",
      sightings: 4,
      profile_picture: "//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/014/medium/L_00010.jpg?1527514642",
      favorite: false
    },
  ],
  meta: {
    pagination: {
      current_page: 1,
      prev_page: null,
      next_page: 2,
      total_pages: 4
    }
  }
}
