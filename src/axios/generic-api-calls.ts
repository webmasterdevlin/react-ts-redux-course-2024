import { api } from "./api-config";

export async function getAxios<T>(endpoint: string) {
  return await api.get<T>(endpoint);
}

export async function deleteAxios<T>(endpoint: string, id: string) {
  return await api.delete<T>(`${endpoint}/${id}`);
}
