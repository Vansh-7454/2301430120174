import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

import NotificationCard from "../components/NotificationCard";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

function AllNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [selectedType, setSelectedType] =
    useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data =
          await getNotifications(
            page,
            10,
            selectedType
          );

        setNotifications(
          data.notifications || []
        );
      } catch (error) {
        console.error(
          "API ERROR =>",
          error
        );
      }
    };

    loadData();
  }, [page, selectedType]);

  const filteredNotifications =
    selectedType
      ? notifications.filter(
          (item) =>
            item.Type === selectedType
        )
      : notifications;

  return (
    <div className="container">
      <Navbar />

      <h1 className="page-title">
        All Notifications
      </h1>

      <div className="controls">
        <FilterBar
          selectedType={selectedType}
          setSelectedType={(value) => {
            setSelectedType(value);
            setPage(1);
          }}
        />

        <p>
          Page: <strong>{page}</strong>
        </p>
      </div>

      <h3>
        Total:
        {filteredNotifications.length}
      </h3>

      {filteredNotifications.map(
        (item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
          />
        )
      )}

      <div className="pagination">
        <button
          onClick={() =>
            setPage(page - 1)
          }
          disabled={page === 1}
        >
          Previous
        </button>

        <button
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllNotifications;