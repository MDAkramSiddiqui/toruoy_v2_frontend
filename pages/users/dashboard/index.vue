<template>
  <div>
    <Dashboard
      :show="show"
      :chatRoomJoinedList="chatRoomJoinedList"
      :chatRoomCreatedList="chatRoomCreatedList"
      :onLeave="onLeave"
    />
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";
export default {
  async fetch() {
    this.show = true;
    // const result = await this.$axios.$get("users/my-chatrooms");
    // this.$store.commit("chatroom/UPDATE_CHATROOM_LIST", result.data.rooms);
    this.$store.dispatch("chatroom/updateChatRoomList");
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
  middleware: ["auth", "preDashboard"],
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
    }
  }
};
</script>
