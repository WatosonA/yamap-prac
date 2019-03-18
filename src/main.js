// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueSelect from 'vue-select'
import VeeValidate, { Validator } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('v-select', VueSelect)
Validator.localize('ja', ja)
Vue.use(VeeValidate, { locale: ja, events: 'change' })
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Validator.extend('tel', {
  getMessage: field => '電話番号の形式が不正です。',
  validate: value => !(!!value && !value.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/))
})
Validator.extend('kanji-hiragana', {
  getMessage: field => '漢字とひらがなで入力してください。',
  validate: value => !(!!value && !value.match(/^[一-龥ぁ-ん]/))
})
Validator.extend('katakana-full-width', {
  getMessage: field => '全角カタカナで入力してください。',
  validate: value => !(!!value && !value.match(/^([ァ-ン]|ー)+$/))
})
