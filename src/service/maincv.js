import { get } from "../until/request";

export const getInfomationCV = async (slug) => {
  const response = await get(`/maincv/information/${slug}`);
  return response;
};

export const getFeatureCV = async (slug) => {
  const response = await get(`/maincv/feature/${slug}`);
  return response;
};

export const getProjectCV = async (slug) => {
  const response = await get(`/maincv/project/${slug}`);
  return response;
};

export const getResumeCV = async (slug) => {
  const response = await get(`/maincv/resume/${slug}`);
  return response;
};
