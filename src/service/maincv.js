import { get } from "../until/request";

export const getInfomationCV = async (slug) => {
  const response = await get(`/maincv/information/${slug}`);
  return response;
};
