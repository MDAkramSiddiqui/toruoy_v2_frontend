<template>
  <div class="m-4">
    <b-overlay :show="show" rounded="lg">
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
            />
            <div class="mt-4" style="text-align:center">
              <b-button variant="light">
                Drop Everything
              </b-button>
            </div>
          </div>
        </b-col>

        <b-col>
          <b-card no-body text-variant="dark" title="ChatRoom">
            <div class="msger">
              <main class="msger-chat">
                <Message
                  v-for="(msg, index) in messages"
                  :key="index"
                  :message="msg"
                  :pkey="index"
                />
              </main>
            </div>

            <div>
              <form class="msger-inputarea">
                <input
                  type="text"
                  class="msger-input"
                  placeholder="Enter your message..."
                />
                <button type="submit" class="msger-send-btn">Send</button>
              </form>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";
import Message from "@/components/Message";
export default {
  async fetch() {
    this.show = true;
    await this.$store.dispatch("chatroom/updateChatRoomList");
    this.show = false;
  },
  components: {
    Dashboard,
    Message
  },
  data: () => {
    return {
      show: false,
      messages: [
        "Game is the best lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero quae saepe unde officia corporis doloribus dolores harum exercitationem minus non velit suscipit quas et, consectetur beatae magnam quos expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero quae saepe unde officia corporis doloribus dolores harum exercitationem minus non velit suscipit quas et, consectetur beatae magnam quos expedita?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero quae saepe unde officia corporis doloribus dolores harum exercitationem minus non velit suscipit quas et, consectetur beatae magnam quos expedita? ",
        "Human Beings are the best."
      ],
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
    }
  },
  methods: {
    async onLeave(id) {
      this.show = true;
      await this.$store.dispatch("chatroom/leaveChatRoom", id);
      this.show = false;
    },

    async onDelete(id) {
      this.show = true;
      await this.$store.dispatch("chatroom/deleteChatRoom", id);
      this.show = false;
    },

    async setActive(id) {
      this.active = id;
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

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.msger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
}

.msger-chat {
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
}

.msger-chat::-webkit-scrollbar {
  width: 6px;
}
.msger-chat::-webkit-scrollbar-track {
  background: #ddd;
}
.msger-chat::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background: #bdbdbd;
}

.msger-inputarea {
  display: flex;
  padding: 10px;
  background: #eee;
}

.msger-inputarea * {
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
}

.msger-input {
  flex: 1;
  background: #ddd;
}

.msger-send-btn {
  margin-left: 10px;
  background: rgb(0, 196, 65);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.23s;
}

.msger-send-btn:hover {
  background: rgb(1, 161, 46);
}
</style>
