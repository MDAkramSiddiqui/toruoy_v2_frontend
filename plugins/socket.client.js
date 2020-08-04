import SocketIO from "socket.io-client";
import VueSocketIoExtended from "vue-socket.io-extended";
import Vue from "vue";

export default ({ store, env }) => {
  const socket = SocketIO("https://app-toruoy.herokuapp.com", {
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: Infinity,
    autoConnect: true,
  });

  Vue.use(VueSocketIoExtended, socket);
};
