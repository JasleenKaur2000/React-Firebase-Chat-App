import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItem = () => {
  const vari = 0;
  // eslint-disable-next-line no-console
  console.log(vari);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">Room name</h3>
        <TimeAgo datetime={new Date()} className="font-normal text-black-45" />
      </div>

      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet.....</span>
      </div>
    </div>
  );
};

export default RoomItem;
