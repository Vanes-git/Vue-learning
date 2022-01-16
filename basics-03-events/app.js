const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
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
    },
    cofirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
