import { removeUser } from "../session/user.session.js";

export const onEnd = (socket) => () => {
  console.log("클라이언트와의 연결이 종료되었습니다.");
  removeUser(socket);
  socket.end();
};
