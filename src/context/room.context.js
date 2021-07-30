import { createContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref(`rooms`);
    roomListRef.on('value', snap => {
      const data = transformToArrWithId(snap.val());
      setRooms(data);
    });

    return () => {
      roomListRef.off();
    };
  }, []);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <RoomContext.Provider value={rooms}>{children}</RoomContext.Provider>;
};
