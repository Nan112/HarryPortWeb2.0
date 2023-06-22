// 鼠标滚动式导航栏效果
window.addEventListener("scroll",()=>{
    let header=document.querySelector("header nav");
    header.classList.toggle("sticky",window.scrollY>0);
});



// vue
new Vue({
    el: '#app',
    data: {
      groupWrapper: 'list-group-item',
      isShowingCart: false,
      cart: {
        items: []
      }, 
      products: [
       {
        id: 1,
        name: "霍格沃兹校服",
        description:
        "测试字数，范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围",
         price: 2999,
         inStock: 50
       },
        {
        id: 2,
        name: "霍格沃兹校服",
        description:
        "测试字数，范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围",
         price: 299,
         inStock: 755
        },
        {
        id: 3,
        name: "霍格沃兹校服",
        description:
        "测试字数，范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围",
         price: 149,
         inStock: 5
        },
        {
        id: 4,
        name: "霍格沃兹校服",
        description:
        "测试字数，范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围",
         price: 149,
         inStock: 5
        },
        { 
          id: 5,
          name: "霍格沃兹校服",
          description: "测试字数，范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围",
          price: 599,
          inStock: 0
          
        },
        {
          id: 6,
          name: "霍格沃兹校服",
          description:"测试字数，范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围测试字数范围",
          price: 19,
          inStock: 81
        }
      ]
    },
    computed:{
      cartTotal: function() {
        var total = 0;
        this.cart.items.forEach(function(item) {
          total += item.quantity * item.product.price;
        });
        return total;
      },
      taxAmount: function() {
        return this.cartTotal * 10 / 100;
      }
    },
    filters: {
      currency: function(value) {
        var formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        })
        return formatter.format(value);
      }
    },
    methods:{
      removeItensFromCart: function(cartItem) {
        var index = this.cart.items.indexOf(cartItem);
        
        if (index !== -1) {
          this.cart.items.splice(index, 1);
        }
      },
      checkout: function() {
        if (confirm('购买成功')) {
          this.cart.items.foreach(function(item) {
            item.product.inStock += item.quantity
          });
          this.cart.items = [];
        }
      },
      addProductToCart: function(product) {
        var cartItem = this.getCartItem(product);
        
        if (cartItem != null) {
          cartItem.quantity++;
        } else {
          this.cart.items.push({
            product: product,
            quantity: 1
          });
        }
        product.inStock--;
        },
      increaseQuantity: function(cartItem) {
        cartItem.product.inStock--;
        cartItem.quantity++;
      },
      decreaseQuantity: function(cartItem) {
      cartItem.quantity--;
        cartItem.product.inStock++;
        if (cartItem.quantity == 0) {
          this.removeItensFromCart(cartItem);
        }
    },
      
      getCartItem: function(product) {
        for (var i = 0; i < this.cart.items.length; i++) {
          if (this.cart.items[i].product.id === product.id) {
            return this.cart.items[i];
          }
        }
        return null;
      }, 
      


      
    }
   
  })