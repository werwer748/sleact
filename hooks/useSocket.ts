import { io, Socket } from 'socket.io-client';
import { useCallback } from 'react';

const backUrl = 'http://localhost:3095';

let socket: Socket | undefined;

const useSocket = (workspace?: string): [Socket | undefined, () => void] => {
  //   console.log('rerender', workspace);
  const disconnect = useCallback(() => {
    if (socket) {
      socket.disconnect();
      socket = undefined;
    }
  }, []);
  if (!socket) {
    socket = io(`${backUrl}/ws-${workspace}`, {
      transports: ['websocket'],
    });
  }
  return [socket, disconnect];
};

export default useSocket;
