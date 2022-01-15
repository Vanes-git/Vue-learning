const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
            vueLink: 'https://veujs.org/',
        };
    },
});

app.mount("#user-goal");