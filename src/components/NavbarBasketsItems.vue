<template>
    <div class="medium-menu-container">
        <li class="medium-menu-items">Mest köpta (2020)</li>
        <li class="medium-menu-items">Bäst betyg</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Alla</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Träning / Lättvikt</li>
        <li class="medium-menu-items">Tävling</li>
        <li class="medium-menu-items">Mini</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Basket Attachments</li>
        <li class="medium-menu-items">Course Equipment</li>
    </div>
</template>

<script>
export default {
    name: 'NavbarBasketsItems',
    data() {
        return {

        }
    },
}
</script>

<style scoped>

li {
    display: flex;
    list-style: none;
}

.medium-menu-container {
    justify-content: left;
    align-items: center;
    border: 1px solid lightgrey;
    background-color: white;
}

.medium-menu-items {
    padding: 5px 25px;
    margin: 5px 0px;
    cursor: pointer;
    font-size: 16px;
}

.line-breaker-grey {
    border: 1px solid lightgrey;
}

.line-breaker-black {
    border: 1px solid black;
}

.menu-title {
    font-size: 16px;
    font-weight: bold;
}

</style>