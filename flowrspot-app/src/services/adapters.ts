import {
  AuthDataRegisterType,
  AuthTokenType,
  UserMeDataType,
} from '../types/auth-data';
import { FlowersType, FlowerType } from './../types/flower';
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
