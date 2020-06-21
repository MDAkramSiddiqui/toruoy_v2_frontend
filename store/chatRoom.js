export const state = () => ({
  chatRoomCreatedList: [],
  chatRoomJoinedList: []
});

export const mutations = {
  async UPDATE_CHATROOM_LIST(state, payload) {
    state.chatRoomCreatedList = [];
    state.chatRoomJoinedList = [];
    for (let i = 0; i < payload.length; i++) {
      if (payload[i].owner.handle === this.$auth.user.handle) {
        state.chatRoomCreatedList.push(payload[i]);
      } else {
        state.chatRoomJoinedList.push(payload[i]);
      }
    }
  }
};

export const actions = {
  async updateChatRoomList({ commit }) {
    const result = await this.$axios.$get("users/my-chatrooms");
    commit("UPDATE_CHATROOM_LIST", result.data.rooms);
  },

  async leaveChatRoom({ commit }, id) {
    await this.$axios.$get(`chat-room/leave/${id}`);
    const result = await this.$axios.$get("users/my-chatrooms");
    commit("UPDATE_CHATROOM_LIST", result.data.rooms);
  },

  async deleteChatRoom({ commit }, id) {
    await this.$axios.$delete(`chat-room/delete/${id}`);
    const result = await this.$axios.$get("users/my-chatrooms");
    commit("UPDATE_CHATROOM_LIST", result.data.rooms);
  }
};

export const getters = {};
