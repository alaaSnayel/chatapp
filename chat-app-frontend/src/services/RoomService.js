import { HttpClient } from "../config/AxiosHelper";

export const createRoom = async (roomDetails) => {
  try {
    const response = await HttpClient.post("api/v1/rooms", roomDetails, {
      headers: { "Content-Type": "text/plain" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating room:", error);
    throw error;
  }
};

export const joinChatApi = async (roomid) => {
  try {
    const response = await HttpClient.get(`api/v1/rooms/${roomid}`);
    return response.data;
  } catch (error) {
    console.error("Error joining room:", error);
    throw error;
  }
};
