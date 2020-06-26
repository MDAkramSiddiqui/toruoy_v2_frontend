<template>
  <div>
    <div class="text item">
      <div class="msg left-msg" v-if="userHandle !== this.$auth.user.handle">
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">{{ userHandle }}</div>
            <div class="msg-info-time">
              {{ time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1") }}
            </div>
          </div>

          <div class="msg-text">
            {{ message }}
          </div>
        </div>
      </div>

      <div class="msg right-msg" v-else>
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">{{ userHandle }}</div>
            <div class="msg-info-time">
              {{ time }}
            </div>
          </div>

          <div class="msg-text">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "userHandle", "time"]
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin: 18px 0;
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
  height: 55vh;
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
.msg {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.msg:last-of-type {
  margin: 0;
}

.msg-bubble {
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background: rgb(118, 221, 118);
}
.msg-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.msg-info-name {
  margin-right: 10px;
  font-weight: bold;
}
.msg-info-time {
  font-size: 0.85em;
}

.left-msg .msg-bubble {
  border-bottom-left-radius: 0;
}

.right-msg {
  flex-direction: row-reverse;
}
.right-msg .msg-bubble {
  background: rgb(107, 183, 235);
  color: #fff;
  border-bottom-right-radius: 0;
}

.right-msg .msg-img {
  margin: 0 0 0 10px;
}
</style>
