<template>
  <tab-bar :tab-bar="tabBar" :initial-index='tabIndex'></tab-bar>
</template>

<script type="text/ecmascript-6">
  import TimeLine from 'components/timeline/timeline';
  import Activities from 'components/activities/activities';
  import Search from 'components/search/search';
  import Books from 'components/books/books';
  import User from 'components/user/user';
  import TabBar from 'components/tabbar/tabbar';

  export default {
    components: {
      TabBar,
    },
    data() {
      return {
        tabIndex: 3,
        tabBar: {
          color: '#a2a2a2',
          selectedColor: '#007aff',
          backgroundColor: '#ffffff',
          borderStyle: '#b2b2b2',
          position: 'bottom',
          list: [
            {
              component: TimeLine,
              text: '首页',
              iconPath: '',
              selectedIconPath: '',
            },
            {
              component: Activities,
              text: '动态',
              iconPath: '',
              selectedIconPath: '',
            },
            {
              component: Search,
              text: '发现',
              iconPath: '',
              selectedIconPath: '',
            },
            {
              component: Books,
              text: '小册',
              iconPath: '',
              selectedIconPath: '',
            },
            {
              component: User,
              text: '我',
              iconPath: '',
              selectedIconPath: '',
            },
          ],
        }
      };
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
