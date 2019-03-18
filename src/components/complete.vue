<template>
<div class="container">
    <h1 class="text-center">お問い合わせ</h1>
    <div class="step">
        <ul class="step-list">
            <li class=""><span class="mark-ku"><span class="line2-text1">STEP1</span><span class="line2-text2">お問い合わせ内容のご入力</span></span></li>
            <li class=""><span class="mark-ku"><span class="line2-text1">STEP2</span><span class="line2-text2">ご入力内容のご確認</span></span></li>
            <li class=""><span class="active complete"><span class="line2-text1">STEP3</span><span class="line2-text2">お問い合わせ完了</span></span></li>
        </ul>
    </div>
    <div class="message-area">
        <p>お問い合わせありがとうございました。</p>
        <p>ご入力頂いたメールアドレス（{{ email }}）宛に返信いたします。</p>
        <p><router-link to="/">お問い合わせTOPへ</router-link></p>
    </div>
</div>
</template>
<script>
export default {
    beforeCreate() {
        if (!this.$route.params.email) {
            this.$router.push({ name: 'input' });
        }
    },
    data() {
        return {
            email: this.$route.params.email
        }
    }
}
</script>
