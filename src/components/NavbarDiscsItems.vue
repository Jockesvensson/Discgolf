<template>
    <div class="medium-menu-container">
        <li class="medium-menu-items" style="color:blue;">Kampanjer</li>
        <li class="medium-menu-items" style="color:red;">Sale</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Märken</li>
        <li class="medium-menu-items">Topplistor</li>
        <li class="medium-menu-items">Nyheter</li>
        <li class="medium-menu-items">Påfyllt</li>
        <li class="medium-menu-items menu-title">VÄLJ DISC-TYP</li>
        <div class="line-breaker-black"></div>
        <li class="medium-menu-items">1. Putt & Approach (up to 70 m)</li>
        <li class="medium-menu-items">2. Midrange (50 - 100 m)</li>
        <li class="medium-menu-items">3. Fairway Drivers (70 - 120 m)</li>
        <li class="medium-menu-items">4. Distance Drivers (over 90 m)</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Komigång-Set</li>
        <li class="medium-menu-items">Discar för nybörjare</li>
        <li class="medium-menu-items menu-title">Special-discar</li>
        <div class="line-breaker-black"></div>
        <li class="medium-menu-items">Lightweight</li>
        <li class="medium-menu-items">Full Dyes</li>
        <li class="medium-menu-items">Color Dyes</li>
        <li class="medium-menu-items">Glow</li>
        <li class="medium-menu-items">Blanks</li>
        <li class="medium-menu-items">Special Stamps</li>
        <li class="medium-menu-items">Collectable</li>
        <li class="medium-menu-items">First Run</li>
        <li class="medium-menu-items">X-Outs</li>
        <li class="medium-menu-items">Mer..</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Alla disc-molds</li>
        <li class="medium-menu-items">Plast</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Köpråd och Info-sidor</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Skola/Företag: Beställningsformulär Online</li>
        <li class="medium-menu-items">Bulk Orders Discs</li>
    </div>
</template>

<script>
export default {
    name: 'NavbarDiscsItems',
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