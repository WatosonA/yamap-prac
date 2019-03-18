<template>
<div class="form-container container">
  <h1 class="text-center">お問い合わせ</h1>
  <div class="step">
    <ul class="step-list">
      <li class=""><span class="active"><span class="line2-text1">STEP1</span><span class="line2-text2">お問い合わせ内容のご入力</span></span></li>
      <li class=""><span class="mark-ku"><span class="line2-text1">STEP2</span><span class="line2-text2">ご入力内容のご確認</span></span></li>
      <li class=""><span><span class="line2-text1">STEP3</span><span class="line2-text2">お問い合わせ完了</span></span></li>
    </ul>
  </div>
  <form class="form-group text-left">
    <fieldset>
      <div class="form-group">
        <label for="inputLastName" class="control-label">お名前<span class="form-required">必須</span></label>
        <div class="form-row">
          <div class="col">
            <input id="inputLastName" name="form[lastName]" type="text"
              class="form-control" :class="{'has-error': errors.has('form[lastName]')}"
              maxlength="20" placeholder="姓"
              v-model="form.lastName" v-validate="'required|kanji-hiragana'" data-vv-as="名"
            >
            <small class="form-text text-info" :class="{'is-hide': !errors.has('form[lastName]')}">{{ errors.first('form[lastName]') }}</small>
          </div>
          <div class="col">
            <input id="inputFirstName" name="form[firstName]" type="text"
              class="form-control" :class="{'has-error': errors.has('form[firstName]')}"
              maxlength="20" placeholder="名"
              v-model="form.firstName" v-validate="'required|kanji-hiragana'" data-vv-as="名"
            >
            <small class="form-text text-info" :class="{'is-hide': !errors.has('form[firstName]')}">{{ errors.first('form[firstName]') }}</small>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="inputLastNameKana" class="control-label">お名前（フリガナ）<span class="form-required">必須</span></label>
        <div class="form-row">
          <div class="col">
            <input id="inputLastNameKana" name="form[lastNameKana]" type="text"
              class="form-control" :class="{'has-error': errors.has('form[lastNameKana]')}"
              maxlength="20" placeholder="姓（フリガナ）"
              v-model="form.lastNameKana" v-validate="'required|katakana-full-width'" data-vv-as="姓（フリガナ）"
            >
            <small class="form-text text-info" :class="{'is-hide': !errors.has('form[lastNameKana]')}">{{ errors.first('form[lastNameKana]') }}</small>
          </div>
          <div class="col">
            <input id="inputFirstNameKana" name="form[firstNameKana]" type="text"
              class="form-control" :class="{'has-error': errors.has('form[firstNameKana]')}"
              maxlength="20" placeholder="名（フリガナ）"
              v-model="form.firstNameKana" v-validate="'required|katakana-full-width'" data-vv-as="名（フリガナ）"
            >
            <small class="form-text text-info" :class="{'is-hide': !errors.has('form[firstNameKana]')}">{{ errors.first('form[firstNameKana]') }}</small>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="inputCompanyName" class="control-label">社名</label>
        <input id="inputCompanyName" name="form[companyName]" type="text"
          class="form-control"
          maxlength="137" placeholder="社名"
          v-model="form.companyName"
        >
      </div>
      <div class="form-group">
        <label for="inputEmail" class="control-label">メールアドレス<span class="form-required">必須</span></label>
        <input id="inputEmail" name="form[email]" type="text"
         class="form-control" :class="{'has-error': errors.has('form[email]')}"
         maxlength="60" placeholder="メールアドレス"
         v-model="form.email" v-validate="'required|email'" data-vv-as="メールアドレス">
        <small class="form-text text-info" :class="{'is-hide': !errors.has('form[email]')}">{{ errors.first('form[email]') }}</small>
      </div>
      <div class="form-group">
        <label for="inputPostalCode" class="control-label">郵便番号<span class="hint">※ハイフンなし</span></label>
        <input id="inputPostalCode" name="form[postalCode]" type="text"
          class="form-control" :class="{'has-error': errors.has('form[postalCode]')}"
          maxlength="7" placeholder="郵便番号"
          v-model="form.postalCode" v-validate="'numeric|length:7'" data-vv-as="郵便番号">
        <small class="form-text text-info" :class="{'is-hide': !errors.has('form[postalCode]')}">{{ errors.first('form[postalCode]') }}</small>
      </div>
      <div class="form-group">
        <label for="inputLocation" class="control-label">住所</label>
        <input id="inputLocation" name="form[location]" type="text"
          class="form-control"
          maxlength="200" placeholder="住所"
          v-model="form.location"
        >
      </div>
      <div class="form-group">
        <label for="inputTel" class="control-label">電話番号<span class="hint">※ハイフンなし</span></label>
        <input id="inputTel" name="form[tel]" type="tel" class="form-control" :class="{'has-error': errors.has('form[tel]')}"
         maxlength="11" placeholder="電話番号"
         v-model="form.tel" v-validate="'numeric|tel'" data-vv-as="電話番号">
        <small class="form-text text-info" :class="{'is-hide': !errors.has('form[tel]')}">{{ errors.first('form[tel]') }}</small>
      </div>
      <div class="form-group">
        <label for="inputProduct" class="control-label">どの製品について</label>
        <v-select id="inputProduct"
          placeholder="製品"
          v-model="form.product" :value.sync="form.product" :options="products.options">
        </v-select>
      </div>
      <div class="form-group">
        <label for="inputTitle" class="control-label">お問い合わせ（件名）<span class="form-required">必須</span></label>
        <input id="inputTitle" name="form[title]" type="text"
          class="form-control" :class="{'has-error': errors.has('form[title]')}"
          max="40" placeholder="お問い合わせ（件名）"
          v-model="form.title" v-validate="'required'" data-vv-as="お問い合わせ（件名）"
        >
        <small class="form-text text-info" :class="{'is-hide': !errors.has('form[title]')}">{{ errors.first('form[title]') }}</small>
      </div>
      <div class="form-group">
        <label for="inputContent" class="control-label">お問い合わせ（内容）<span class="form-required">必須</span></label>
        <textarea id="inputContent" name="form[content]"
          class="form-control" :class="{'has-error': errors.has('form[content]')}"
          rows="5" maxlength="300" placeholder="お問い合わせ（内容）"
          v-model="form.content" v-validate="'required'" data-vv-as="お問い合わせ（内容）"
        ></textarea>
        <small class="form-text text-info" :class="{'is-hide': !errors.has('form[content]')}">{{ errors.first('form[content]') }}</small>
      </div>
      <div class="form-group">
        <label class="control-label">個人情報の取扱いについて<span class="form-required">必須</span></label>
        <div class="checkbox check-approval" :class="{'has-error': errors.has('form[approval]')}">
          <label for="inputApproval">
              <input id="inputApproval" name="form[approval]" type="checkbox"
               v-model="form.approval" v-validate="'required'"
              > <a href="https://yamap.com/terms/privacy" target="_blank">個人情報の取扱い</a>について同意します
          </label>
        </div>
         <small class="form-text text-info" :class="{'is-hide': !errors.has('form[approval]')}">個人情報の取扱いについて同意が必要です</small>
      </div>
      <div class="form-group text-center mt-5">
        <button
          @click="doSubmit"
          type="button"
          class="btn btn-primary center-block"
        >入力確認</button>
      </div>
    </fieldset>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        options: [
          {value: 1, label: 'Aサービスについて'},
          {value: 2, label: 'Bサービスについて'},
          {value: 3, label: 'Cサービスについて'},
          {value: 9, label: 'その他'}
        ]
      },
      form: {
        firstName: !this.$route.params.firstName ? '' : this.$route.params.firstName,
        lastName: !this.$route.params.lastName ? '' : this.$route.params.lastName,
        firstNameKana: !this.$route.params.firstNameKana ? '' : this.$route.params.firstNameKana,
        lastNameKana: !this.$route.params.lastNameKana ? '' : this.$route.params.lastNameKana,
        companyName: !this.$route.params.companyName ? '' : this.$route.params.companyName,
        email: !this.$route.params.email ? '' : this.$route.params.email,
        postalCode: !this.$route.params.postalCode ? '' : this.$route.params.postalCode,
        location: !this.$route.params.location ? '' : this.$route.params.location,
        tel: !this.$route.params.tel ? '' : this.$route.params.tel,
        product: !this.$route.params.product ? null : this.$route.params.product,
        title: !this.$route.params.title ? '' : this.$route.params.title,
        content: !this.$route.params.content ? '' : this.$route.params.content,
        approval: false
      }
    }
  },
  methods: {
    doSubmit() {
      this.$validator.validate().then(result => {
        if (result) {
          this.$router.push({ name: 'confirm', params: this.form });
        }
      })
    }
  }
}
</script>

<style>
#app .container {
    margin-bottom: 100px;
    max-width: 1020px;
}
#app .container .table,
#app .container .form-group {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
}
.form-required {
  border-radius: 7px;
  color: white;
  font-size: 12px;
  padding: 5px 10px;
  margin-left: 10px;
  line-height: 12px;
  text-align: center;
  background-color: #EA3323;
  box-sizing: border-box;
}
.alert-danger {
  color: red;
}
.has-error {
  border-color: red;
}
.checkbox.has-error {
  border: 1px solid red;
}
.is-hide {
  display : none;
}
.hint {
  margin-left: 10px;
  font-size: 14px;
}
#inputPostalCode {
  width: 240px;
}
.check-approval {
  background-color: #D9D9D9;
  padding: 20px 0;
  text-align: center;
  font-weight: bold;
  clear: both;
  border: none;
  border-radius: 0.25rem;
}
.dropdown-toggle::after {
  display: none;
}
.step {
  margin-bottom: 50px;
  display: block;
  width: 100%;
  position: relative;
  height: 60px;
  overflow: hidden;
  border-top: solid 2px #FFF;
  background-color: #efefef;
  max-width: 1230px;
}
.step-list {
  width: 100%;
  display: table;
  list-style: none;
  margin: 0;
  padding: 0;
}
.step-list li {
  line-height: 1.2em;
  vertical-align: middle;
  height: 60px;
  box-sizing: border-box;
  display: table;
  table-layout: fixed;
  float: left;
  width: 32.33%;
}
.step-list li:last-child {
  width: 35.34%;
}
.step-list li span {
  background-color: transparent;
  position: relative;
  display: table-cell;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 0 0 0 0;
  padding-left: 10%;
  max-width: none;
  height: 60px;
  overflow: visible;
}
.step-list li span.active {
  background-color: green;
  color: #FFF;
}
.step-list li span.line2-text1 {
  padding-left: 40px;
  padding-left: 0;
  z-index: 2;
  position: relative;
  white-space: nowrap;
  max-width: 20em;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1.4em;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 0 0 0 40px;
}
.step-list li span.line2-text2 {
  overflow: visible;
  height: 2.5em;
  padding-right: 30px;
  padding-left: 40px;
  max-width: none;
  z-index: 2;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  box-sizing: border-box;
  padding: 0 0 0 40px;
}
.step-list li span.active:not(.complete):after {
  width: 0px;
  height: 60px;
  box-sizing: border-box;
  border: 30px solid transparent;
  border-left: 30px solid green;
  top: 0;
  right: -60px;
  position: absolute;
  content: "";
  z-index: 1;
  background-color: #EFEFEF;
}
.step-list li span.mark-ku:after {
  top: 9px;
  right: -20px;
  width: 42px;
  height: 42px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  content: "";
  z-index: 1;
  background-color: #EFEFEF;
}
@media (max-width: 1250px) {
  .step-list li span {
    font-size: 16px;
  }
  .step-list li span.line2-text1 {
    padding-left: 10px;
  }
  .step-list li span.line2-text2 {
    padding-right: 20px;
    padding-left: 20px;
  }
}
@media (max-width: 767px) {
  .step {
    display: block;
    height: auto;
    background-color: transparent;
    margin-bottom: 0;
  }
  .step-list li,
  .step-list li:last-child {
    float: none;
    width: 100%;
    margin-bottom: 20px;
    background-color: #efefef;
  }
  .step-list li span {
    padding-left: 0;
    text-align: center;
    font-size: 16px;
  }
}
@media (min-width: 992px) {
  body .container {
    max-width: 920px;
  }
}
@media (max-width: 992px) {
  .step-list li span {
    text-align: center;
    font-size: 14px;
  }
}
</style>