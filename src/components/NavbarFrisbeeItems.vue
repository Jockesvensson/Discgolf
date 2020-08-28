<template>
    <div class="medium-menu-container">
        <li class="medium-menu-items">Frisbee Start</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Mest köpta (30 dgr)</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Strand & Park 150g</li>
        <li class="medium-menu-items">Strand & Park 200g</li>
        <li class="medium-menu-items">Frisbee Minis</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Lysande Frisbees</li>
        <li class="medium-menu-items">Speciella Egenskaper</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Flying Rings</li>
        <li class="medium-menu-items">Aerobie</li>
        <li class="medium-menu-items">Dodgebee</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items menu-title">Competition:</li>
        <li class="medium-menu-items">Ultimate Frisbee</li>
        <li class="medium-menu-items">Frisbee Freestyle</li>
        <li class="medium-menu-items">Discathon & Accuracy</li>
        <li class="medium-menu-items">Self Caught Flights (SCF)</li>
        <li class="medium-menu-items">Double Disc Court (DDC)</li>
        <li class="medium-menu-items">GUTS</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Skola/Företag: Beställningsformulär Online</li>
    </div>
</template>

<script>
export default {
    name: 'NavbarFrisbeeItems',
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