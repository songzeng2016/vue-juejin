import Vue from 'vue';
import Vloading from 'base/loading/loading';

const Loading = Vue.extend(Vloading);

const toggleLoading = (el, binding) => {
  // 显示并且没有该组建时创建组件
  if (binding.value && !el.hasLoading) {
    Vue.nextTick(() => {
      el.hasLoading = true;
      el.appendChild(el.loading);
    });
  }
  // 解绑并且已经创建组件，则移除组件
  if (binding.unbind && el.hasLoading) {
    el.removeChild(el.loading);
  }
  // 改变组件状态
  el.instance.visible = binding.value;
};

export default {
  loading: {
    bind(el, binding, vnode) {
      const loading = new Loading({
        el: document.createElement('div'),
        data: {
          visible: false,
        },
      });
      el.instance = loading;
      el.loading = loading.$el;
      binding.value && toggleLoading(el, binding);
    },
    update(el, binding, vnode) {
      toggleLoading(el, binding);
    },
    unbind(el, binding, vnode) {
      toggleLoading(el, {value: false, unbind: false});
    }
  }
}
