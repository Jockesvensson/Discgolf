<template>
    <div class="brand-container">
        <div v-for="item in brands" :key="item.id" class="">
            <img :src="item.image" alt="product image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'brands',
    data() {
        return {

        }
    },
    computed: {
        brands() {
            return this.$store.getters.getBrand
        }
    },
}
</script>

<style scoped>

.brand-container {
    margin-bottom: 30px;
    margin-top: 20px;
    /* padding-left: 50px; */
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 170px));
    justify-content: left;
    align-items: left;
}

@media only screen and (max-width: 1100px) {
    .brand-container {
        grid-template-columns: repeat(auto-fit, minmax(min-content, 140px));
    }
}

img {
    max-width: 100%;
    height: auto;
}

</style>