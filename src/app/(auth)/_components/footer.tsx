import React from "react";
import HomeLink from "./homelink";
import NotificationLink from "./notificationlink";
import EventLink from "./eventlink";

function Hooter() {
  return (
    <div className="flex justify-around fixed bottom-0 w-full bg-green-300 pt-4 pb-4 rounded-t-md">
      <HomeLink />
      <NotificationLink />
      <EventLink />
    </div>
  );
}

export default Hooter;
