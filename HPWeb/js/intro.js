// 鼠标滚动式导航栏效果
window.addEventListener("scroll",()=>{
    let header=document.querySelector("header nav");
    header.classList.toggle("sticky",window.scrollY>0);
})


// 组件切换
var com0={
    template:'<div class="shi"><div class="zi"><p style="text-indent:2em;font-size:30px">格兰芬多是《哈利·波特》系列中，霍格沃茨四学院之一。始建于9世纪。用创办人戈德里克·格兰芬多的姓氏命名的。这个学院培养出了诸如哈利的父母，麦格教授，邓布利多校长等优秀的巫师和女巫。</p><p>学院创办者：戈德里克·格兰芬多（Godric Gryffindor）</p><p>招生标准：英勇无畏，奋不顾身。大胆无畏，喜爱冒险。</p><p>著名人物：哈利波特、赫敏格兰杰、罗恩韦斯莱</p></div></div>'
}
var com1={
    template:'<div class="ying"><div class="zi"><p style="text-indent:2em;font-size:30px">拉文克劳（Ravenclaw），是魔幻系列小说《哈利·波特》中，霍格沃茨魔法学校的四大分院之一，象征四大元素中的风。由罗伊纳·拉文克劳创立，以智慧聪敏作择生条件。</p><p>学院创办者：罗伊纳·拉文克劳（Godric Gryffindor）</p><p>招生标准：睿智、公正、精明、博学、 聪明、有远见、好奇心很强，喜欢钻研事物。</p><p>著名人物：张秋、卢娜洛夫古德、菲利乌斯弗立维</p></div></div>'
}
var com2={
    template:'<div class="she"><div class="zi"><p style="text-indent:2em;font-size:30px">斯莱特林是《哈利波特》系列中霍格沃茨的四大学院之一。创始人为四巨头（The great four）之一的萨拉查·斯莱特林（Salazar Slytherin）。学院传统：有野心，精明，重视荣誉，审时度势，明哲保身，胜利至上。</p><p>学院创办者：萨拉查·斯莱特林</p><p>招生标准：精明强大的斯莱特林，来自那一片泥潭，而渴望权力的他最喜欢那些血统纯正、有野心的少年。</p><p>著名人物：德拉克马尔福、汤姆里德尔、卢修斯马尔福</p></div></div>'
}
var com3={
    template:'<div class="huan"><div class="zi"><p style="text-indent:2em;font-size:30px">赫奇帕奇学院（Hufflepuff）是奇幻小说《哈利·波特》系列中，霍格沃茨魔法学校的四大学院之一，赫奇帕奇以特别擅长与食物有关的咒语而闻名，也许是霍格沃茨魔法学校的四大学院里拥有学生最多，最好心的学院了。</p><p>学院创办者：赫尔加·赫奇帕奇（Helga Hufflepuff）</p><p>招生标准：具有勤劳忠诚的品质，并且对待他们一视同仁。</p><p>著名人物：纽特·斯卡曼德、塞德里克·迪戈里、尼法朵拉·唐克斯</p></div></div>'
}

var vm=new Vue({
    el:"#actor",
    data:{
        view:'com0',
        nowIndex:0,
        myItems:[{
            name:'格兰芬多',
            text:''
        },
        {
            name:'拉文克劳',
            text:''
        },
        {
            name:'斯莱特林',
            text:''
        },
        {
            name:'赫奇帕奇',
            text:''
        }
        ],
    },
    components:{
        com0,
        com1,
        com2,
        com3
    },
    methods:{
        toggleView(index){
            this.view = 'com' + index
            this.nowIndex = index
        }
    },
})

// 角色介绍
let Card = Vue.component('card', {

    template: '#card',
  
  });
  
  new Vue({
  
    // ELEMENT 
    el: '#infocard',
  
    // COMPONENTS
    components: [Card],
  
    // DATA
    data: {
      characters: [{
        name: '哈利波特',
        // actor: 'Felicity Jones',
        bio: '哈利从小受尽苦难，并没有被苦难压倒，而有志气做一名本事高强的巫师。他的善良、上进、毅力与勇气，都是非常可宝贵的，他要“惩恶扬善”，斗垮伏地魔，报杀父之仇，除奸佞恶霸，也让人振奋与崇敬。不过，作者并没有把哈利塑造成高大上的神一般的英雄，这个孩子也有缺点，比如不太喜欢学习，有时会偷懒，有成长中的各种问题。这种“不完满”却能赢得小读者的认可，他们在哈利身上看到了自己。',
        image: '../image/Harry.jpg',
        // phrase: 'Rebellions are built on hope',
        born: '1980.7.31',
        college: '格兰芬多'
  
      }, {
        name: '赫敏格兰杰',
        // actor: 'Felicity Jones',
        bio: '利的好友，生于1979年9月19日，出身一个麻瓜家庭。在书中以一个喜好钻研学术及无所不知的聪明女孩形象出现，有时显得独断专行，但她的知识在他们许多的冒险旅程中证明有用。她最不喜爱的一个主科是占卜学，认为是“不精确”的学问。赫敏到霍格沃茨不久就成为全年级最聪明的学生。她不仅知道每个问题的答案，还记得读过的每本书的内容，并乐于将自己的知识告诉别人。因此她的求学生涯开始不久就获得了“格兰芬多万事通”的绰号，她因每堂课都积极举手回答问题并乐此不疲而扬名',
        image: '../image/Hermione.jpg',
        // phrase: 'Rebellions are built on hope',
        born: '1979.9.19',
        college: '格兰芬多'
      }, {
        name: '罗恩韦斯莱',
        // actor: 'Felicity Jones',
        bio: '哈利的好友，书中的喜剧角色。出生于1980年3月1日。韦斯莱家族是古老的纯血统家族，他们都拥有一头火焰般的红发。罗恩的爸爸是魔法部禁止滥用麻瓜物品司的员工，薪金不高，孩子又多，所以罗恩家境不富，大多数的东西都是二手的，他很在意这一点。他和哈利是铁哥们，最后和赫敏结婚，并和哈利在魔法部成为同事。',
        image: '../image/Ron.jpg',
        // phrase: 'Rebellions are built on hope',
        born: '1980.3.1',
        college: '格兰芬多'
      }]
    }
  });