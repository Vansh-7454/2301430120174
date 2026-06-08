import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { getPriorityNotifications } from "../utils/notificationSorter";

import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";

function PriorityNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data =
          await getNotifications();

        const sorted =
          getPriorityNotifications(
            data.notifications
          );

        setNotifications(sorted);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <Navbar />

      <h1>
        Priority Notifications
      </h1>

      <h3>
        Total:
        {notifications.length}
      </h3>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}
    </div>
  );
}

export default PriorityNotifications;