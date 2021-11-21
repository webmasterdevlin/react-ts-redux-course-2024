import { api } from "./api-config";

export async function getAxios<T>(endpoint: string) {
  return await api.get<T>(endpoint);
}

export async function deleteAxios(endpoint: string, id: string) {
  return await api.delete(`${endpoint}/${id}`);
}
