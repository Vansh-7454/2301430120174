import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

console.log("TOKEN =", TOKEN);
console.log(
  "AUTH HEADER =",
  `Bearer ${TOKEN}`
);

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/notifications`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        params: {
          page,
          limit,
          notification_type: type,
        },
      }
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.response?.data);
    console.log(error.response?.status);
    throw error;
  }
};