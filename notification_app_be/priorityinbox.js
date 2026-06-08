require("dotenv").config();
const axios = require("axios");

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const TYPE_WEIGHT = {
  Placement: 300,
  Result: 200,
  Event: 100,
};

function calculatePriority(notification) {
  const weight = TYPE_WEIGHT[notification.Type] || 0;

  const currentTime = Date.now();
  const notificationTime = new Date(notification.Timestamp).getTime();

  const ageInMinutes =
    (currentTime - notificationTime) / (1000 * 60);

  const recencyBonus = Math.max(0, 100 - ageInMinutes);

  return weight + recencyBonus;
}

async function getTopNotifications(limit = 10) {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const notifications = response.data.notifications;

    const topNotifications = notifications
      .map((notification) => ({
        ...notification,
        priority: calculatePriority(notification),
      }))
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit);

    console.table(
      topNotifications.map((item) => ({
        Type: item.Type,
        Message: item.Message,
        Timestamp: item.Timestamp,
        Priority: item.priority,
      }))
    );

    return topNotifications;
  } catch (error) {
    console.error(
      "Error:",
      error.response?.data || error.message
    );
  }
}

getTopNotifications();