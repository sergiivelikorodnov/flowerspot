import { FlowersType, FlowerType } from './../types/flower';
export const adaptPostsBackToFront = (backData: FlowersType): FlowersType => {
  const adaptedData = backData.flowers.map((item): FlowerType => (
    Object.assign(
      {},
      item,
      {
        latinName: item.latin_name,
        profilePicture: item.profile_picture,
      },
      delete item.latin_name,
      delete item.profile_picture,
    )
  ));


  const adaptedDataWithMeta =Object.assign(
    {},
    {
      flowers:adaptedData
    },
    {
      meta: {
        pagination: backData.meta.pagination
      }
    }
    )

  return adaptedDataWithMeta;
};
