<template>
  <div class="container">
    <h1 class="text-center">お問い合わせ</h1>
    <div class="step">
      <ul class="step-list">
        <li class>
          <span class="mark-ku">
            <span class="line2-text1">STEP1</span>
            <span class="line2-text2">お問い合わせ内容のご入力</span>
          </span>
        </li>
        <li class>
          <span class="active">
            <span class="line2-text1">STEP2</span>
            <span class="line2-text2">ご入力内容のご確認</span>
          </span>
        </li>
        <li class>
          <span>
            <span class="line2-text1">STEP3</span>
            <span class="line2-text2">お問い合わせ完了</span>
          </span>
        </li>
      </ul>
    </div>
    <table class="table table-responsive text-left">
      <tbody>
        <tr>
          <th>お名前</th>
          <td>{{ form.lastName + ' ' + form.firstName }}</td>
        </tr>
        <tr>
          <th>お名前（フリガナ）</th>
          <td>{{ form.lastNameKana + ' ' + form.firstNameKana }}</td>
        </tr>
        <tr>
          <th>社名</th>
          <td>{{ form.companyName }}</td>
        </tr>
        <tr>
          <th>メールアドレス</th>
          <td>{{ form.email }}</td>
        </tr>
        <tr>
          <th>郵便番号</th>
          <td>{{ form.postalCode }}</td>
        </tr>
        <tr>
          <th>住所</th>
          <td>{{ form.location }}</td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td>{{ form.tel }}</td>
        </tr>
        <tr>
          <th>どの製品について</th>
          <td>{{ !form.product ? '' : form.product.label }}</td>
        </tr>
        <tr>
          <th>問い合わせ件名</th>
          <td>{{ form.title }}</td>
        </tr>
        <tr>
          <th>問い合わせ内容</th>
          <td>
            <p>{{ form.content }}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="message-area">
      <p>上記内容でよろしければ送信ボタンを押下してください。</p>
    </div>
    <div class="form-row text-center mt-5 mb-5">
      <div class="col">
        <button @click="doBack" type="button" class="btn btn-primary center-block">戻る</button>
      </div>
      <div class="col">
        <button @click="doSave" type="button" class="btn btn-primary center-block">送信</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate () {
    if (!this.$route.params.lastName) {
      this.$router.push({ name: 'input' })
    }
  },
  data () {
    return {
      form: this.$route.params
    }
  },
  methods: {
    doBack () {
      this.$router.push({ name: 'input', params: this.form })
    },
    doSave () {
      console.log('お問い合わせ内容の保存')
      console.log(this.form)
      this.$router.push({
        name: 'complete',
        params: { email: this.form.email }
      })
    }
  }
}
</script>
<style>
.container .table {
  width: 100%;
}
.container .table th {
  min-width: 120px;
  width: 25%;
}
.container .table td {
  width: 100%;
}
.btn {
  width: 100px;
}
</style>
