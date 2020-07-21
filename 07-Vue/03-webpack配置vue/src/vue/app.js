export default {
  template: `
    <div>
      <h1>{{ msg }}</h1>
      <button @click="btnClick">按钮</button>
      <h1>{{ name }}</h1>
    </div>
  `,
  data() {
    return {
      msg: 'hello webpack',
      name: 'sunny'
    };
  },
  methods: {
    btnClick() {
      console.log('hello vue');
    }
  }
};
