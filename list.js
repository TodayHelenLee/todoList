var vm = new Vue({
    el: "#app",
    data: {
      lists: [
        {
          checked: true,
          value: "a",
          id: 123,
          justify: "",
          text: "",
          date: "2020/8/1",
        },
        {
          checked: false,
          value: "b",
          id: 122,
          justify: "",
          text: "",
          date: "",
        },
        {
          checked: false,
          value: "b",
          id: 121,
          justify: "",
          text: "",
          date: "",
        },
      ],
      yetItem: [],
      unshowone: "show",
      unshowtwo: "hidden",
      unshowthree: "hidden",
      all: "",
      yet: "",
      already: "",
      text: "",
      date:'',
    },
    watch: {
      lists: {
        handler(val, old) {
          var ids = [];
          for (let item of this.yetItem) {
            ids.push(item.id);
          }

          this.yetItem = [];

          for (var i = 0; i < val.length; i++) {
            if (!val[i].checked) {
              this.yetItem.push({
                checked: val[i].checked,
                value: val[i].value,
                justify: "",
                text: "",
                id: val[i].id,
                date: val[i].date,
              });
            }
          }
        },
        deep: true,
      },
    },
    methods: {
      editDate: function (event) {
        for (let i = 0; i < this.lists.length; i++) {
          if (this.lists[i].id === parseFloat(event.currentTarget.id)) {
            if (this.lists[i].date !== "") {
              this.lists[i].value = this.lists[i].text;
              this.lists[i].date = this.lists[i].date;
            } else {
              this.lists[i].justify = "";
            }
            this.lists[i].justify = "";
            break;
          }
        }
      },

      editValue: function (event) {
        for (let i = 0; i < this.lists.length; i++) {
          if (this.lists[i].id === parseFloat(event.currentTarget.id)) {
            if (this.lists[i].text !== "") {
              this.lists[i].value = this.lists[i].text;
              this.lists[i].date = this.lists[i].date;
            } else {
              this.lists[i].justify = "";
            }
            this.lists[i].justify = "";
            break;
          }
        }
      },

      editDateYet: function (event) {
        for (let i = 0; i < this.yetItem.length; i++) {
          if (this.yetItem[i].id === parseFloat(event.currentTarget.id)) {
            if (this.yetItem[i].date !== "") {
              let yetDate = this.yetItem[i].date;
              let yetText = this.yetItem[i].text;
              let findId = parseFloat(event.currentTarget.id);
              for (let i = 0; i < this.lists.length; i++) {
                if (this.lists[i].id === findId) {
                  this.lists[i].date = yetDate;
                  this.lists[i].value = yetText;
                } else {
                  this.lists[i].justify = "";
                }
                this.lists[i].justify = "";
              }

              this.yetItem[i].date = this.yetItem[i].date;
              this.yetItem[i].value = this.yetItem[i].text;
            } else {
              this.yetItem[i].justify = "";
            }
            this.lists[i].justify = "";
            this.yetItem[i].justify = "";
            break;
          }
        }
      },

      editValueYet: function (event) {
        for (let i = 0; i < this.yetItem.length; i++) {
          if (this.yetItem[i].id === parseFloat(event.currentTarget.id)) {
            if (this.yetItem[i].text !== "") {
              let findId = parseFloat(event.currentTarget.id);
              let yetText = this.yetItem[i].text;
              let yetDate = this.yetItem[i].date;
              for (let i = 0; i < this.lists.length; i++) {
                if (this.lists[i].id === findId) {
                  this.lists[i].date = yetDate;
                  this.lists[i].value = yetText;
                } else {
                  this.lists[i].justify = "";
                }
                this.lists[i].justify = "";
              }

              this.yetItem[i].date = this.yetItem[i].date;
              this.yetItem[i].value = this.yetItem[i].text;
            } else {
              this.yetItem[i].justify = "";
            }
            this.lists[i].justify = "";
            this.yetItem[i].justify = "";
            break;
          }
        }
      },

      editAll: function (event) {
        for (let i = 0; i < this.lists.length; i++) {
          if (this.lists[i].id === parseFloat(event.currentTarget.id)) {
            this.lists[i].text = this.lists[i].value;
            this.lists[i].justify = "have";
            break;
          }
        }
      },

      editYet: function (event) {

        for (let i = 0; i < this.yetItem.length; i++) {
          if (this.yetItem[i].id === parseFloat(event.currentTarget.id)) {
            this.yetItem[i].text = this.yetItem[i].value;
            this.yetItem[i].justify = "have";
            break;
          }
        }
      },

      removeAll: function (event) {
        for (let i = 0; i < this.lists.length; i++) {
          if (this.lists[i].id === parseFloat(event.currentTarget.id)) {
            this.lists.splice(i, 1);
          }
        }
      },

      removeYet: function (event) {
        for (let i = 0; i < this.lists.length; i++) {
          if (this.lists[i].id === parseFloat(event.currentTarget.id)) {
            this.lists.splice(i, 1);
          }
        }
      },

      submit: function () {
        if (this.text !== "") {
          this.lists.push({
            justify: "",
            text: "",
            date: this.date,
            checked: false,
            value: this.text,
            id: Math.random(),
          });
          this.text = "";
        }
      },
      hiddensAll: function () {
        this.unshowone = "show";
        this.unshowtwo = "hidden";
        this.unshowthree = "hidden";
        this.all = "bgc-light";
        this.yet = "";
        this.already = "";
      },

      hiddensYet: function () {
        this.unshowone = "hidden";
        this.unshowtwo = "show";
        this.unshowthree = "hidden";
        this.all = "";
        this.yet = "bgc-light";
        this.already = "";
      },

      hiddensAlready: function () {
        this.unshowone = "hidden";
        this.unshowtwo = "hidden";
        this.unshowthree = "show";
        this.all = "";
        this.yet = "";
        this.already = "bgc-light";
      },
    },

    computed: {
      sortLists: function () {
        return this.lists.sort(function (a, b) {
          var myDate = new Date();
          var today =
            myDate.getFullYear() +
            "/" +
            myDate.getMonth() +
            "/" +
            myDate.getDate();
          let A =
            Date.parse(a.date).valueOf() < Date.parse(today).valueOf()
              ? 1000
              : 0;
          let B =
            Date.parse(b.date).valueOf() < Date.parse(today).valueOf()
              ? 1000
              : 0;

          if (A > B) {
            return -1;
          } else if (A < B) {
            return 1;
          } else {
            return 0;
          }
        });
      },
      alreadyItem: function () {
        var arr = [];
        for (var i = 0; i < this.lists.length; i++) {
          if (this.lists[i].checked) {
            arr.push({
              checked: this.lists[i].checked,
              value: this.lists[i].value,
              justify: "",
              text: "",
              id: this.lists[i].id,
              date: this.lists[i].date,
            });
          }
        }
        return arr;
      },
    },
    beforeMount() {
      var self = this;
      function time() {
        var myDate = new Date();
        var combine =
          myDate.getFullYear() +
          "/" +
          myDate.getMonth() +
          "/" +
          myDate.getDate();

        var lis = document.querySelectorAll("li.lists");
        for (var i = 0; i < self.lists.length; i++) {
          if (
            Date.parse(combine).valueOf() >
            Date.parse(self.lists[i].date).valueOf()
          ) {
            lis[i].style.backgroundColor = "#FF5151";
          }
        }
      }
    },
    mounted() {
      var self = this;
      function timeYet() {
        var myDate = new Date();
        var combine =
          myDate.getFullYear() +
          "/" +
          myDate.getMonth() +
          "/" +
          myDate.getDate();

        var lis = document.querySelectorAll("li.yetItem");
        for (var i = 0; i < self.yetItem.length; i++) {
          if (
            Date.parse(combine).valueOf() >
            Date.parse(self.yetItem[i].date).valueOf()
          ) {
            lis[i].style.backgroundColor = "#FF5151";
          }
        }
      }

      function timeAlready() {
        var myDate = new Date();
        var combine =
          myDate.getFullYear() +
          "/" +
          myDate.getMonth() +
          "/" +
          myDate.getDate();

        var lis = document.querySelectorAll("li.alreadyItem");
        for (var i = 0; i < self.alreadyItem.length; i++) {
          if (
            Date.parse(combine).valueOf() >
            Date.parse(self.alreadyItem[i].date).valueOf()
          ) {
            lis[i].style.backgroundColor = "#FF5151";
          }
        }
      }
      timeYet();
      timeAlready();
      time();
      setInterval(time, 600000);

      function time() {
        var myDate = new Date();
        var combine =
          myDate.getFullYear() +
          "/" +
          myDate.getMonth() +
          "/" +
          myDate.getDate();

        var lis = document.querySelectorAll("li.lists");
        for (var i = 0; i < self.lists.length; i++) {
          if (
            Date.parse(combine).valueOf() >
            Date.parse(self.lists[i].date).valueOf()
          ) {
            lis[i].style.backgroundColor = "#FF5151";
          }
        }
      }

      for (var i = 0; i < this.lists.length; i++) {
        if (!this.lists[i].checked) {
          this.yetItem.push({
            checked: this.lists[i].checked,
            value: this.lists[i].value,
            justify: "",
            text: "",
            id: this.lists[i].id,
            date: this.lists[i].date,
          });
        }
      }
    },
    updated() {
      var self = this;
      function timeYet() {
        var myDate = new Date();
        var combine =
          myDate.getFullYear() +
          "/" +
          myDate.getMonth() +
          "/" +
          myDate.getDate();

        var lis = document.querySelectorAll("li.yetItem");
        for (var i = 0; i < self.yetItem.length; i++) {
          lis[i].style.backgroundColor = "";
          if (
            Date.parse(combine).valueOf() >
            Date.parse(self.yetItem[i].date).valueOf()
          ) {
            lis[i].style.backgroundColor = "#FF5151";
          }
        }
      }

      function timeAlready() {
        var myDate = new Date();
        var combine =
          myDate.getFullYear() +
          "/" +
          myDate.getMonth() +
          "/" +
          myDate.getDate();

        var lis = document.querySelectorAll("li.alreadyItem");
        for (var i = 0; i < self.alreadyItem.length; i++) {
          lis[i].style.backgroundColor = "";
          if (
            Date.parse(combine).valueOf() >
            Date.parse(self.alreadyItem[i].date).valueOf()
          ) {
            lis[i].style.backgroundColor = "#FF5151";
          }
        }
      }

      function time() {
        var myDate = new Date();
        var combine =
          myDate.getFullYear() +
          "/" +
          myDate.getMonth() +
          "/" +
          myDate.getDate();

        var lis = document.querySelectorAll("li.lists");
        for (var i = 0; i < self.lists.length; i++) {
          lis[i].style.backgroundColor = "";
          if (
            Date.parse(combine).valueOf() >
            Date.parse(self.lists[i].date).valueOf()
          ) {
            lis[i].style.backgroundColor = "#FF5151";
          }
        }
      }
      timeYet();
      timeAlready();
      time();
    },
  });