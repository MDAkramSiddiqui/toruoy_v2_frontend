// import Vue from "vue";
// import VueSocketIO from "vue-socket.io";

// export default function() {
//   Vue.use(
//     new VueSocketIO({
//       debug: false,
//       connection: "http://localhost:8080"
//     })
//   );
// }

// import Vue from "vue";
// import VueSocketIO from "vue-socket.io";
// import SocketIO from "socket.io-client";

// export default function() {
//   Vue.use(
//     new VueSocketIO({
//       debug: true,
//       connection: SocketIO("http://localhost:8080")
//     })
//   );
// }

import SocketIO from "socket.io-client";
import VueSocketIoExtended from "vue-socket.io-extended";
import Vue from "vue";

export default ({ store, env }) => {
  const socket = SocketIO("http://localhost:8080", {
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: Infinity,
    autoConnect: true
  });

  Vue.use(VueSocketIoExtended, socket);
};
