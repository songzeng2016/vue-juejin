<template>
  <div class="main">
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
  export default {
    data() {
      return {
        list: [],
      };
    },
    created() {
      this._getList();
    },
    methods: {
      _getList() {
        this.$get('/v1/getListByLastTime', {
          uid: '',
          client_id: '',
          token: '',
          src: 'web',
          alias: '',
          pageNum: 1,
        }).then(json => {
          console.log(json);
          this.list = json.d;
        });
      }
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .main
    height: 100%
    overflow: auto
    .list-wrapper
      .list
        display: flex
        .img
          width: 100px
          height: 140px
</style>
