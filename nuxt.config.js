export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/socket.client.js", mode: "client" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  /*
   ** Axios Options
   */
  axios: {
    baseURL: process.env.API_URL || "http://localhost:8080/api/v1/",
  },

  /*
   ** Auth Options
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          //     const result = await this.$axios.$get("users/create-handle");
          login: {
            url: "users/create-handle",
            method: "get",
            propertyName: "token",
          },
          logout: { url: "users/leave", method: "delete" },
          user: { url: "users/me", method: "get", propertyName: "data.user" },
        },
      },
    },
  },

  // server: {
  //   port: 3000, // default: 3000
  //   host: "0.0.0.0" // default: localhost
  // }
};
