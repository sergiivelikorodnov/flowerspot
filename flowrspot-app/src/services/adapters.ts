import {
  AuthDataRegisterType,
  AuthTokenType,
  UserMeDataType,
} from '../types/auth-data';
import {
  FavFlowersType,
  FavFlowerType,
  FlowersType,
  FlowerType,
} from './../types/flower';

export const adaptPostsBackToFront = (backData: FlowersType): FlowersType => {
  const adaptedData = backData.flowers.map(
    (item): FlowerType =>
      Object.assign(
        {},
        item,
        {
          latinName: item.latin_name,
          profilePicture: item.profile_picture,
        },
        delete item.latin_name,
        delete item.profile_picture
      )
  );

  const adaptedDataWithMeta = Object.assign(
    {},
    {
      flowers: adaptedData,
    },
    {
      meta: {
        pagination: backData.meta.pagination,
      },
    }
  );

  return adaptedDataWithMeta;
};

export const adaptUserRegister = (
  backData: AuthDataRegisterType
): AuthDataRegisterType => {
  const adaptedRegisterData = Object.assign(
    {},
    backData,
    {
      first_name: backData.firstName,
      last_name: backData.lastName,
      date_of_birth: backData.dateOfBirth,
    },
    delete backData.firstName,
    delete backData.lastName,
    delete backData.dateOfBirth
  );

  return adaptedRegisterData;
};

export const adaptAuthToken = (backData: AuthTokenType): AuthTokenType => {
  const adaptedRegisterData = Object.assign(
    {},
    backData,
    {
      authToken: backData.auth_token,
    },
    delete backData.auth_token
  );

  return adaptedRegisterData;
};

export const adaptUserInfo = (backData: UserMeDataType): UserMeDataType => {
  const adaptedRegisterData = Object.assign(
    {},
    backData,
    {
      firstName: backData.first_name,
      lastName: backData.last_name,
    },
    delete backData.first_name,
    delete backData.last_name
  );

  return adaptedRegisterData;
};

export const adaptFavPostsBackToFront = (
  backData: FavFlowersType
): FavFlowersType => {
  const adoptedFlowers = Object.assign(
    {},
    backData,
    {
      favFlowers: backData.fav_flowers,
    },
    delete backData.fav_flowers
  );

  const adaptedData = adoptedFlowers.favFlowers.map(
    (item): FavFlowerType =>
      Object.assign(
        {},
        item,
        item.flower.latinName = item.flower.latin_name,
        item.flower.profilePicture = item.flower.profile_picture,
        {userId: item.user_id},
        {id: item.id},
        {flower: item.flower},
        delete item.user_id,
        delete item.flower.profile_picture,
        delete item.flower.latin_name,
      )
  );

  const adaptedFavDataWithMeta = Object.assign(
    {},
    {
      favFlowers: adaptedData,
    },
    {
      meta: {
        pagination: backData.meta.pagination,
      },
    }
  );

  return adaptedFavDataWithMeta;
};
