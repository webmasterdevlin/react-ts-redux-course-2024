import { api } from "./api-config";

export async function getAxios<T>(endpoint: string) {
  return await api.get<T>(endpoint);
}
