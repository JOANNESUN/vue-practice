let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: "John",
          message: "Hello world!",
        },
        {
          name: "Rick",
          message: "I like pie.",
        },
        {
          name: "Amy",
          message: "Skydiving is fun!",
        },
      ],
      degrees: [
        {
          degree: "BA",
          name: "UC santa Cruz",
        },
        {
          degree: "JD",
          name: "vermont law school",
        },
      ],
    };
  },
  methods: {
    move() {
      const first = this.people.shift();
      this.people.push(first);
    },
    move1() {
      const first = this.degrees.shift();
      this.degrees.push(first);
    },
  },
}).mount("#app");
