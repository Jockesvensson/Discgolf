<template>
    <div class="">
        <div class="text-wrapper">
            <div class="cart-cost text">Kundvagn : 0 kr</div>
            <div class="cash-out text">Till kassan</div>
            <div class="line-breaker-grey"></div>
            <div class="support text">Kundtjänst</div>
            <div class="line-breaker-grey"></div>
            <div class="login text">Logga in</div>
            <div class="register text">Skapa konto</div>
            <div class="line-breaker-grey"></div>
        </div>
        <button class="change-lang"><img :src="require(`@/assets/swedishflag.png`)" alt="Swedish flag"></button>
    </div>
</template>

<script>
export default {
    name: 'CartModal',
    data() {
        return {

        }
    },
}
</script>

<style scoped>

.text-wrapper {
    margin-left: 20px;
    margin-top: 5px;
}

.text {
    padding: 3px 0px;
}

.line-breaker-grey {
    border: 1px solid lightgrey;
}

.change-lang {
    padding: 0px 20px;
    border: none;
    font-size: 28px;
    background-color: white;
}

</style>