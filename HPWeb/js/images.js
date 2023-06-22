// 鼠标滚动式导航栏效果
window.addEventListener("scroll",()=>{
    let header=document.querySelector("header nav");
    header.classList.toggle("sticky",window.scrollY>0);
})

// vue部分
Vue.use(Lightbox);

var photoDir = 
  '../image/';

var imageList = 
  [{'name':'01.jpg', 
    'alt':'弗雷德·韦斯莱和乔治·韦斯莱', 
    'filter':'Stills',
    'id':'image1' },
   
   {'name':'02.jpg', 
    'alt':'霍格沃兹列车', 
    'filter':'Stills',
    'id':'image2'  }, 
   
   {'name':'03.jpg', 
    'alt':'阿不思·邓布利多', 
    'filter':'Stills',
    'id':'image3'  },
   
   {'name':'04.jpg', 
    'alt':'打人柳', 
    'filter':'Stills',
    'id':'image4'  },
   
   {'name':'05.jpg', 
    'alt':'卢娜·洛夫古德', 
    'filter':'Behindstage',
    'id':'image5'  },
   
   {'name':'06.jpg', 
    'alt':'舞蹈宴会上', 
    'filter':'Behindstage',
    'id':'image6'  },
   
   {'name':'07.jpg', 
    'alt':'桃金娘', 
    'filter':'Stills',
    'id':'image7'  } ];

new Vue({
  el: '#photo',
  data() {
    return {
      thumbnailDir: photoDir,
      images: imageList,
      galleryFilter: 'all'
    }
  },
  methods: {
    showLightbox: function(imageName) {
      this.$refs.lightbox.show(imageName);
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName;
    }
  },
  computed: {
    filteredImages: function() {
      if (this.galleryFilter === 'all') {
        return this.images;
      } else {
        return this.images.filter(image => image.filter === this.galleryFilter);
      }
    }
  }
})