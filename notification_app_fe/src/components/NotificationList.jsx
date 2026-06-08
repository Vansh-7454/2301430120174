import NotificationCard from "./NotificationCard";
import { notifications } from "../data/notification";
import { getTopNotifications } from "../utils/notificationSorter";

function NotificationList() {
  const sortedNotifications =
    getTopNotifications(notifications);

  return (
    <>
      {sortedNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </>
  );
}

export default NotificationList;