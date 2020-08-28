<template>
    <div class="medium-menu-container">
        <li class="medium-menu-items">Hundfrisbee Start</li>
        <div class="line-breaker-grey"></div>
        <li class="medium-menu-items">Frisbees</li>
        <li class="medium-menu-items">Träningpack</li>
        <li class="medium-menu-items">Mjuka Gummi</li>
        <li class="medium-menu-items">Pup Models</li>
        <li class="medium-menu-items">Accessoires</li>
    </div>
</template>

<script>
export default {
    name: 'NavbarDogsItems',
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