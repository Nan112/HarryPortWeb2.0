// 鼠标滚动式导航栏效果
window.addEventListener("scroll",()=>{
    let header=document.querySelector("header nav");
    header.classList.toggle("sticky",window.scrollY>0);
});

// part1
var vm = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [
            {
                "title": "霍格沃茨遗产：官方游戏指南即将从Scholastic推出",
                "image": "../image/31.png"
            },
            {
                "title": "连人带盒不到5斤，头发没几根（别点我，点第一条，不然打不开）",
                "image": "../image/32.jpg"
            },
            {
                "title": "狮院和蛇院又打起来啦，点击速看（别点我，点第一条，不然打不开）",
                "image": "../image/33.jpg"
            },
            {
                "title": "这网站什么时候能敲完QAQ（别点我，点第一条，不然打不开）",
                "image": "../image/34.jpeg"
            },
            {
                "title": "累了，已经连续通宵一周了（别点我，点第一条，不然打不开）",
                "image": "../image/34.jpeg"
            }
        ]
    },
    computed: {
        //searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
            return articles_array;;
        }
    }
});
//   part2
var app = new Vue({
    el: '#app',
    data: {
      currentMessage: '',
      messages: [
        { text: "拽根马尔福", date: "1天前"},
        { text: "三强争霸赛", date: "5天前"}]
    },
    computed: {
      currentMessageValid:  function() {
        return (this.currentMessage.length > 4) 
      }
    },
    methods: {
      sendText : function() {
        if (!this.currentMessageValid) return;
        this.messages.push({
          text: this.currentMessage,
          date: "1秒前"})
        this.currentMessage = ""
      },
      deleteMessage : function(idx) {
        this.messages.splice(idx, 1)
      }
    }
  })

// 弹出框
let header__login = this.document.querySelector('.header__login');
let close = this.document.querySelector('.close-icon');
let x2 = this.document.getElementById('x2');
let login = this.document.getElementById('login');

header__login.addEventListener('click',function(){
    login.style.display = 'block'
  });
  close.addEventListener('click',function(){
    login.style.display = 'none'
  });
  x2.addEventListener('click',function(){
    login.style.display = 'none'
  });


