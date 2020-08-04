<template>
  <div class="m-4">
    <b-overlay :show="load" rounded="lg">
      <b-row>
        <b-col sm="3">
          <div class="no-scrollbar">
            <h2>
              <b-badge>ChatRooms Created</b-badge>
            </h2>
            <Dashboard
              :chatRoomList="chatRoomCreatedList"
              :func="onDelete"
              type="Delete"
              :isActive="active"
              :setActive="setActive"
            />
            <h2 class="mt-3">
              <b-badge>ChatRooms Joined</b-badge>
            </h2>
            <Dashboard
              :chatRoomList="chatRoomJoinedList"
              :func="onLeave"
              type="Leave"
              :isActive="active"
              :setActive="setActive"
            />
            <div class="mt-4" style="text-align:center">
              <b-button variant="light">Drop Everything</b-button>
            </div>
          </div>
        </b-col>

        <b-col>
          <b-overlay :show="chatLoad">
            <div v-if="active === null"></div>
            <div v-else>
              <h3>
                Chatroom:
                <b-badge>{{ active }}</b-badge>
              </h3>
              <ChatBox :messages="messages" :postMessage="postMessage" />
            </div>
          </b-overlay>
        </b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";
import ChatBox from "@/components/ChatBox";
import { mapGetters } from "vuex";
export default {
  async fetch() {
    this.load = true;
    await this.$store.dispatch("chatroom/updateChatRoomList");
    this.load = false;
  },
  components: {
    Dashboard,
    ChatBox,
  },
  data: () => {
    return {
      load: false,
      chatLoad: false,
      active: null,
    };
  },
  middleware: ["auth"],
  computed: {
    ...mapGetters({
      chatRoomCreatedList: "chatroom/getChatRoomCreatedList",
      chatRoomJoinedList: "chatroom/getChatRoomJoinedList",
      messages: "chat/getMessages",
    }),
  },

  sockets: {
    connected(id) {
      // console.log("Connected to the socket", id);
    },

    newMessage(data) {
      if (data.chatRoomHandle === this.active) {
        // console.log("message emit reiceved", data);
        this.$store.commit("chat/UPDATE_CHATROOM_CHAT", data);
      }
    },

    async roomDeleted(data) {
      // console.log("roomDeleted emit reiceved", data);
      this.load = true;
      await this.$store.dispatch("chatroom/updateChatRoomList");
      this.active = null;
      this.load = false;
    },

    roomJoined(data) {
      // console.log("roomJoined emit reiceved", data);
    },
  },
  mounted() {
    this.chatRoomCreatedList.forEach(room => {
      this.$socket.client.emit("joinRomm", room.chatRoomHandle);
    });

    this.chatRoomJoinedList.forEach(room => {
      this.$socket.client.emit("joinRomm", room.chatRoomHandle);
    });
  },
  methods: {
    async onLeave(id) {
      this.load = true;
      const chatRoomHandleForSocket = this.active;
      await this.$store.dispatch("chatroom/leaveChatRoom", id);
      this.$socket.client.emit("leaveChatRoom", chatRoomHandleForSocket);
      this.active = null;
      this.load = false;
    },

    async onDelete(id) {
      this.load = true;
      const chatRoomHandleForSocket = this.active;
      await this.$store.dispatch("chatroom/deleteChatRoom", id);
      this.$socket.client.emit("deleteChatRoom", chatRoomHandleForSocket);
      this.active = null;
      this.load = false;
    },

    async setActive(chatRoomHandle) {
      this.active = chatRoomHandle;
      this.chatLoad = true;
      await this.$store.dispatch("chat/getChatRoomChat", this.active);
      this.$socket.client.emit("joinRoom", chatRoomHandle);
      this.chatLoad = false;
    },

    async postMessage(message) {
      if (message.trim().length > 0) {
        const data = {
          message,
          chatRoomHandle: this.active,
        };
        await this.$store.dispatch("chat/postMessage", data);
      }
    },
  },
};
</script>

<style scoped>
.no-scrollbar {
  height: 80vh;
  overflow-y: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
.no-scrollbar {
  -ms-overflow-style: none;
}
</style>
