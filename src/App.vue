<template>
  <div id="app">
    <mybanner v-on:submitlang="changelang"></mybanner>
    <mynav></mynav>
    <myslidebar></myslidebar>
    <transition name="fade">
        <router-view class="view body" name="body"></router-view>
    </transition>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Vue from 'vue'
import router from './router'
import mynav from './components/nav.vue'
import myslidebar from './components/slidebar.vue'
import mybanner from './components/banner.vue'
import myfooter from './components/footer.vue'
// 判断改变路由
var firstindex
router.beforeEach((to, from, next) => {
  var href = to.path.split('/')[1]
  if (href === '') {
    firstindex = 0
  } else if (href === 'a') {
    firstindex = 1
  } else if (href === 'b') {
    firstindex = 2
  } else if (href === 'c') {
    firstindex = 3
  }
  next()
})
export default {
  name: 'app',
  components: {
    mynav: mynav,
    myslidebar: myslidebar,
    mybanner: mybanner,
    myfooter: myfooter
  },
  mounted: function () {
    console.info(
      '去我的github查看更多 https://github.com/ERVeepp/ERVeeVue \n' +
      '王伟'
    )
    // 调用判断banner图高度方法
    this.setwindowheight()
    // 判断当前语言
    this.judelang()
    // 判断初始路由
    this.judefirstpath()
    // 判断改变路由
    this.judepath()
  },
  methods: {
    judefirstpath: function () {
      this.changecss(firstindex)
    },
    judepath: function () {
      var that = this
      router.beforeEach((to, from, next) => {
        var href = to.path.split('/')[1]
        var thisindex
        if (href === '') {
          thisindex = 0
        } else if (href === 'a') {
          thisindex = 1
        } else if (href === 'b') {
          thisindex = 2
        } else if (href === 'c') {
          thisindex = 3
        }
        next()
        that.changecss(thisindex)
      })
    },
    changelang: function (arr) {
      // console.log(arr)
    },
    setwindowheight: function () {
      let windowh = window.innerHeight
      var banner = document.getElementsByClassName('banner')[0]
      banner.style.height = (windowh / 2) + 'px'
    },
    changecss: function (index) {
      // 改变导航栏下划线
      var nav = document.querySelectorAll('.navbtnborder')
      for (var i = 0; i < nav.length; i++) {
        nav[i].style.opacity = 0
      }
      nav[index].style.opacity = 1
    },
    judelang: function () {
      // 读取localstorage，假如没值的话,赋值为0，即默认英文
      let lang = window.localStorage.getItem('lang')
      if (lang) {
        Vue.set(this.$store.state, 'choicelang', lang)
      } else {
        let thislang = this.$store.state.choicelang
        window.localStorage.setItem('lang', thislang)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.body{
    background: #fff;
    font-size: 1.6rem;
    padding:2rem 0;
}
.title{
    font-size: 2rem;
    padding:0 0 2rem 0;
}
.p-box{
    padding:1rem 0;
}

.ti0{
    text-indent: 1em;
}

.ti1{
    text-indent: 2em;
}
</style>
