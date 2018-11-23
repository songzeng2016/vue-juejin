<template>
  <div class="main">
    <keep-alive>
      <component :is="tabBar.list[tabIndex].component"></component>
    </keep-alive>
    <ul class="tabs" :style="tabsStyle">
      <li
        class="tab"
        v-for="(tab, index) in tabBar.list"
        :key="index"
        @click="switchTab(index)">
        <span :style="{color: index === tabIndex ? tabBar.selectedColor : tabBar.color}">{{tab.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      tabBar: {
        type: Object,
        default() {
          return {
            color: '#a2a2a2',
            selectedColor: '#007aff',
            backgroundColor: '#ffffff',
            borderStyle: '#b2b2b2',
            position: 'bottom',
            list: [],
          };
        },
      },
      initialIndex: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        tabIndex: this.initialIndex,
      };
    },
    computed: {
      tabsStyle() {
        const {backgroundColor, borderStyle} = this.tabBar;
        return {
          background: backgroundColor,
          'border-top': `1px solid ${borderStyle}`,
        };
      }
    },
    methods: {
      switchTab(index) {
        this.tabIndex = index;
      },
    },
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  .main
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
    .tabs
      display: flex
      height: 50px
      .tab
        flex: 1
        display: flex
        justify-content center
        align-items: center
</style>
