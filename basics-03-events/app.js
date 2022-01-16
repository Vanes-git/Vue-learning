const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
    },
    submitForm() {      
      alert('Submitted!');
    }
  }
});

app.mount('#events');
