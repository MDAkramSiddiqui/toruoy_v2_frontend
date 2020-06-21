<template>
  <div>
    <Dashboard
      :show="show"
      :chatRoomJoinedList="chatRoomJoinedList"
      :chatRoomCreatedList="chatRoomCreatedList"
      :onLeave="onLeave"
      :onDelete="onDelete"
    />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";
export default {
  async fetch() {
    this.show = true;
    await this.$store.dispatch("chatroom/updateChatRoomList");
    this.show = false;
  },
  components: {
    Dashboard
  },
  data: () => {
    return {
      show: false
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
    }
  }
};
</script>
