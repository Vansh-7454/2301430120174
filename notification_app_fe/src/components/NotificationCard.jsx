import "../App.css";

function NotificationCard({
  notification,
}) {
  const isViewed =
    localStorage.getItem(
      notification.ID
    ) === "viewed";

  const handleClick = () => {
    localStorage.setItem(
      notification.ID,
      "viewed"
    );

    window.location.reload();
  };

  return (
    <div
      className="card"
      onClick={handleClick}
    >
      <span
        className="badge"
        style={{
          background: isViewed
            ? "#757575"
            : "#2e7d32",
        }}
      >
        {isViewed
          ? "VIEWED"
          : "NEW"}
      </span>

      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>
        {notification.Timestamp}
      </small>
    </div>
  );
}

export default NotificationCard;