<template>
    <div class="medium-menu-container">
        <li class="medium-menu-items">Mest köpta (2020)</li>
        <li class="medium-menu-items">Bäst betyg</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Alla</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Kepsar</li>
        <li class="medium-menu-items">Mössor</li>
        <li class="medium-menu-items">T-Shirts</li>
        <li class="medium-menu-items">Golf Shirts</li>
        <li class="medium-menu-items">Shorts</li>
        <li class="medium-menu-items">Socks</li>
        <li class="medium-menu-items">Shoes</li>
        <li class="medium-menu-items">Kläder Övrigt</li>
        <li class="medium-menu-items menu-title">Golftillbehör</li>
        <div class="line-breaker-black"></div>
        <li class="medium-menu-items">Mest köpta (2020)</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Minidiscar</li>
        <li class="medium-menu-items">Golfhanddukar</li>
        <li class="medium-menu-items">Patches</li>
        <li class="medium-menu-items">Stickers</li>
        <li class="medium-menu-items">Sport Sacks/Dirt Bags</li>
        <li class="medium-menu-items">Led Lights</li>
        <li class="medium-menu-items">Vattenflaska</li>
        <li class="medium-menu-items">Golfstolar</li>
        <li class="medium-menu-items">Paraplyer</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Tillbehör Övrigt</li>
    </div>
</template>

<script>
export default {
    name: 'NavbarClothesItems',
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