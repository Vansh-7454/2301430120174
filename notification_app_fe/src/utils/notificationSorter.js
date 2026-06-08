const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getPriorityNotifications = (
  notifications
) => {
  return [...notifications].sort((a, b) => {
    if (
      priority[b.Type] !==
      priority[a.Type]
    ) {
      return (
        priority[b.Type] -
        priority[a.Type]
      );
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });
};