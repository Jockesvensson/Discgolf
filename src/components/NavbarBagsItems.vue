<template>
    <div class="medium-menu-container">
        <li class="medium-menu-items">Mest köpta (30 dgr)</li>
        <li class="medium-menu-items">Bäst betyg</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Alla</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Starter (6-12 discs)</li>
        <li class="medium-menu-items">Medium (10-15 discs)</li>
        <li class="medium-menu-items">Tour (15-25 discs)</li>
        <li class="medium-menu-items">Tour Backpack (20-30 discs)</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Straps</li>
        <li class="medium-menu-items">Raincovers</li>
        <li class="medium-menu-items">Tillbehör Bags</li>
    </div>
</template>

<script>
export default {
    name: 'NavbarBagsItems',
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