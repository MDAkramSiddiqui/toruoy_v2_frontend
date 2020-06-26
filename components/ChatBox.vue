<template>
  <div>
    <b-card no-body text-variant="dark" title="ChatRoom">
      <div class="msger">
        <main class="msger-chat scroll-no-div">
          <Message
            v-for="msg in messages"
            :key="msg.id"
            :message="msg.message"
            :time="msg.createdAt"
            :userHandle="msg.userHandle"
          />
          <div id="anchor"></div>
        </main>
      </div>

      <div>
        <form class="msger-inputarea">
          <input
            type="text"
            class="msger-input"
            placeholder="Enter your message..."
            ref="msg"
          />
          <button type="submit" class="msger-send-btn" @click="getMessage">
            Send
          </button>
        </form>
      </div>
    </b-card>
  </div>
</template>

<script>
import Message from "@/components/Message";
export default {
  components: {
    Message
  },
  props: ["messages", "postMessage"],
  methods: {
    getMessage(e) {
      e.preventDefault();
      const message = this.$refs.msg.value;
      this.$refs.msg.value = "";
      this.postMessage(message);
    }
  }
};
</script>

<style>
#anchor {
  overflow-anchor: auto;
  height: 1px;
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
  height: 65vh;
}

.msger-chat {
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
}

.scroll-no-div * {
  overflow-anchor: none;
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
