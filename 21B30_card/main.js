const App = {
  data() {
    return {
      message: "Hello Element Plus",
      show: 1,
      form: {
        to: "",
        from: "",
        content: "",
        isShowTime: true,
      },
      cards: 1,
      isShowBox: false,
      imgData: "",
      nowDate: "",
      isShowAlert: false,
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
      if (this.form.from == '' || this.form.to == '' || this.form.content == '') {
        // ElMessage('请先填写内容')
        // this.$message({
        //   message: "请填写完整",
        //   type: 'error'
        // })
        this.isShowAlert = true;
      } else {
        let date = new Date();
        console.log(date);
        this.nowDate = date.getFullYear() + "年" + (date.getUTCMonth() + 1) + "月" + date.getUTCDate() + "日"
        this.isShowAlert = false;
        this.add();
      }
    },
    changeCard() {
      let box = document.getElementById('capture');
      box.style.backgroundImage = "url(./cards/" + this.cards + ".jpg) ";
      box.style.backgroundSize = "cover";
      this.cards = this.cards == 7 ? 1 : this.cards + 1;
    },
    capture() {
      html2canvas(document.querySelector("#capture")).then(canvas => {
        // document.body.appendChild(canvas)
        // let image = new Image();
        this.imgData = canvas.toDataURL();
        // console.log(image);
        this.isShowBox = true;
      });
    },
    closeBox() {
      this.isShowBox = false;
    }
  }
};


const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");