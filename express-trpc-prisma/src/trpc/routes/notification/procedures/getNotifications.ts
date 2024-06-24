import { db } from "../../../../db";
import { procedure } from "../../../trpc";

const checkDatePast = (date: Date): string => {
  const today = new Date();
  const diffInTime = today.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Hoje";
  if (diffInDays === 1) return "Ontem";
  return `Há ${diffInDays} dias`;
};

const serializeNotifications = (
  notifications: any[]
): {
  date: Date;
  datePast: string;
  notifications: {
    title: string;
    created_at: Date;
    image: string;
  }[];
}[] => {
  let serializedNotifications: {
    date: Date;
    datePast: string;
    notifications: {
      title: string;
      created_at: Date;
      image: string;
    }[];
  }[] = [];

  let indexNotification = -1;

  notifications.forEach((notification, index) => {
    const notificationDate = notification.post.created_at;

    if (
      index === 0 ||
      serializedNotifications[indexNotification].date.getDate() !==
        notificationDate.getDate()
    ) {
      indexNotification++;
      serializedNotifications[indexNotification] = {
        date: notificationDate,
        datePast: checkDatePast(notificationDate),
        notifications: [],
      };
    }

    serializedNotifications[indexNotification].notifications.push({
      title: notification.post.title,
      created_at: notificationDate,
      image: notification.post.images[0]?.public_id,
    });
  });

  return serializedNotifications;
};

export const getNotifications = procedure.query(async () => {
  const notifications = await db.notification.findMany({
    include: {
      post: {
        include: {
          images: true,
        },
      },
    },
    orderBy: {
      post: {
        created_at: "desc",
      },
    },
  });

  const serializedNotifications = serializeNotifications(notifications);
  return serializedNotifications;
});
