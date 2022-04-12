type FlowersMeta = {
  currentPage?: number;
  ['current_page']?: number;
  nextPage?: number;
  ['next_page']?: number;
  prevPage?: null | number;
  ['prev_page']?: null | number;
  totalPages?: number;
  ['total_pages']?: number;
};

export type FlowerType = {
  id: number;
  name: string;
  latinName?: string;
  ['latin_name']?: string;
  sightings: number;
  profilePicture?: string;
  ['profile_picture']?: string;
  favorite: boolean;
};

export type FlowersBackType = {
  id: number;
  name: string;
  latinName: string;
  sightings: number;
  profilePicture: string;
  favorite: boolean;
  currentPage: number;
  nextPage: number;
  prevPage: null | number;
  totalPages: number;
};

export type FlowersType = {
  flowers: FlowerType[];
  meta: {
    pagination: FlowersMeta;
  };
};

export type FlowerMockType = {
  id: number;
  name: string;
  latinName?: string;
  ['latin_name']?: string;
  sightings: number;
  profilePicture?: string;
  ['profile_picture']?: string;
  favorite: boolean;
};

type FlowersMockMeta = {
  currentPage?: number;
  ['current_page']?: number;
  nextPage?: number;
  ['next_page']?: number;
  prevPage?: number;
  ['prev_page']?: null | number;
  totalPages?: number;
  ['total_pages']?: number;
};

export type FlowersMockType = {
  flowers: FlowerMockType[];
  meta: {
    pagination: FlowersMockMeta;
  };
};

export type FavFlowerType = {
  id: number;
  userId?: number;
  ['user_id']?: number;
  flower: {
    id: number;
    name: string;
    latinName?: string;
    ['latin_name']?: string;
    sightings: number;
    profilePicture?: string;
    ['profile_picture']?: string;
    favorite: boolean;
    features: string[];
    description: string;
  };
};

export type FavFlowersType = {
  favFlowers: FavFlowerType[];
  ['fav_flowers']?: FavFlowerType[];
  meta: {
    pagination: FlowersMockMeta;
  };
};
