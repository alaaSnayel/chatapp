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

export const joinChatApi = async (roomId) => {
  try {
    const response = await HttpClient.get(`api/v1/rooms/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error joining room:", error);
    throw error;
  }
};

export const getMessages = async (roomId, size = 50, page = 0) => {
  const response = await HttpClient.get(
    `api/v1/rooms/${roomId}/messages?size=${size}&page=${page}`
  );
  return response.data;
};
