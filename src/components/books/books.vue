<template>
  <div class="books" ref="books" v-loading="loading">
    <ul class="list-wrapper">
      <li class="list" v-for="(item, index) in list" :key="index">
        <img class="img" :src="item.url" alt="">
        <div>
          <span>{{item.title}}</span>
        </div>
        <span>{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {requestParameters} from 'common/js/api';
  import BScroll from 'better-scroll';

  export default {
    data() {
      return {
        loading: false,
        list: [],
      };
    },
    created() {
      this._getList();
    },
    methods: {
      _getList() {
        this.loading = true;
        this.$get(requestParameters.url_getListByLastTime, {
          ...requestParameters.arg_getListByLastTime,
          pageNum: 1,
        }).then(json => {
          console.log(json);
          this.list = json.d;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.books, {
              scrollbar: {
                fade: true,
                interactive: false,
              },
              pullDownRefresh: {
                threshold: 90,
                stop: 40
              },
              pullUpLoad: {
                threshold: 50
              }
            });

            this.scroll.on('pullingDown', () => {
              // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
              // RefreshData()
              //   .then((newData) => {
              //     this.data = newData
              //     // 在刷新数据完成之后，调用 finishPullDown 方法，回弹到顶部
              //     this.scroll.finishPullDown()
              //   })
              console.log(0);
              setTimeout(() => {
                this.scroll.finishPullDown();
              }, 1000);
            });
          })
        }).finally(() => {
          this.loading = false;
        });
      },
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .books
    position: relative
    height: 100%
    overflow: hidden
    .list-wrapper
      height: 120%
      .list
        display: flex
        .img
          width: 100px
          height: 140px
</style>
