<template>
  <div class="m-4">
    <b-overlay :show="load" rounded="lg">
      <b-row>
        <b-col sm="3">
          <div class="no-scrollbar">
            <h2><b-badge>ChatRooms Created</b-badge></h2>
            <Dashboard
              :chatRoomList="chatRoomCreatedList"
              :func="onDelete"
              type="Delete"
              :isActive="active"
              :setActive="setActive"
            />
            <h2 class="mt-3"><b-badge>ChatRooms Joined</b-badge></h2>
            <Dashboard
              :chatRoomList="chatRoomJoinedList"
              :func="onLeave"
              type="Leave"
              :isActive="active"
              :setActive="setActive"
            />
            <div class="mt-4" style="text-align:center">
              <b-button variant="light">
                Drop Everything
              </b-button>
            </div>
          </div>
        </b-col>

        <b-col>
          <b-overlay :show="chatLoad">
            <div v-if="active === null"></div>
            <div v-else>
              <h3>
                Chatroom: <b-badge>{{ active }}</b-badge>
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
export default {
  async fetch() {
    this.load = true;
    await this.$store.dispatch("chatroom/updateChatRoomList");
    this.load = false;
  },
  components: {
    Dashboard,
    ChatBox
  },
  data: () => {
    return {
      load: false,
      chatLoad: false,
      active: null
    };
  },
  middleware: ["auth"],
  computed: {
    chatRoomCreatedList: function() {
      return this.$store.state.chatroom.chatRoomCreatedList;
    },
    chatRoomJoinedList: function() {
      return this.$store.state.chatroom.chatRoomJoinedList;
    },
    messages: function() {
      return this.$store.state.chat.messages;
    }
  },
  methods: {
    async onLeave(id) {
      this.load = true;
      await this.$store.dispatch("chatroom/leaveChatRoom", id);
      this.active = null;
      this.load = false;
    },

    async onDelete(id) {
      this.load = true;
      await this.$store.dispatch("chatroom/deleteChatRoom", id);
      this.active = null;
      this.load = false;
    },

    async setActive(chatRoomHandle, message) {
      this.active = chatRoomHandle;
      this.chatLoad = true;
      await this.$store.dispatch("chat/getChatRoomChat", this.active);
      this.chatLoad = false;
    },

    async postMessage(message) {
      this.chatLoad = true;
      const data = {
        message,
        chatRoomHandle: this.active
      };
      await this.$store.dispatch("chat/postMessage", data);
      this.chatLoad = false;
    }
  }
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
