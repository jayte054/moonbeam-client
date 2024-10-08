import { deleteRequests, fetchRequests } from "../services/requestServices/requestServices"

export const requestStores = {
  fetchRequests: async (accessToken: string) => {
    return await fetchRequests(accessToken);
  },

  deleteRequest: async(accessToken: string, requestId: string) => {
    return await deleteRequests(accessToken, requestId)
  },
};