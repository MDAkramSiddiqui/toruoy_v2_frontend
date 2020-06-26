export const state = () => ({
  messages: []
});

export const mutations = {
  SET_CHATROOM_CHAT(state, payload) {
    console.log(payload);
    state.messages = payload;
  }
};

export const actions = {
  async getChatRoomChat({ commit }, chatRoomHandle) {
    const result = await this.$axios.$get(
      `/chats/${chatRoomHandle}/get-all-chats`
    );
    commit("SET_CHATROOM_CHAT", result.data.messages);
  },

  async postMessage({ commit }, data) {
    console.log(data);
    await this.$axios.$post("/chats/post-message", data);
    const result = await this.$axios.$get(
      `/chats/${data.chatRoomHandle}/get-all-chats`
    );
    commit("SET_CHATROOM_CHAT", result.data.messages);
  }
};

export const getters = {};
