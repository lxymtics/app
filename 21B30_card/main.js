const App = {
  data() {
    return {
      message: "Hello Element Plus",
      show: 3,
      form: {
        to: "",
        from: "",
        content: "",
        isShowTime: true,
      }
    };
  },
  methods: {
    dele() {
      this.show = this.show - 1;
    },
    add() {
      this.show = this.show + 1;
    },
    render() {
      // let canvas = document.getElementById('mycanvas');
      // let ctx = canvas.getContext('2d');
      // ctx.fillRect(10, 10, 300, 420);
      this.add();
    },
    capture() {
      html2canvas(document.querySelector("#capture")).then(canvas => {
        console.log(canvas);
        document.body.appendChild(canvas)
      });
    }
  }
};


const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");