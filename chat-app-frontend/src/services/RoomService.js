import { HttpClient } from "../config/AxiosHelper";

export const createRoom = async (roomDetails) => {
  try {
    const response = await HttpClient.post("api/v1/rooms", roomDetails);
    return response.data;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};
