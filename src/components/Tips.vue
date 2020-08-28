<template>
    <div class="tips-container">
        <div v-for="item in items" :key="item.id" class="">
            <img :src="item.image" alt="product image">
            <div class="tips-title">{{item.title}}</div>
            <div class="tips-type-exp-wrapper">
                <div class="tips-type">{{item.type}}</div>
                <div class="tips-experience">{{item.experience}}</div>
                <div class="tips-favorite"><i class="glyphicon glyphicon-heart"></i></div>
            </div>
            <div class="tips-price">{{item.price}}:-</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tips',
    data() {
        return {

        }
    },
    computed: {
        items() {
            return this.$store.getters.getTips
        }
    }
}
</script>

<style scoped>

.tips-container {
    margin-bottom: 30px;
    margin-top: 30px;
    /* padding-left: 50px; */
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 160px));
    justify-content: left;
    align-items: left;
}

@media only screen and (max-width: 1100px) {
    .tips-container {
        grid-template-columns: repeat(auto-fit, minmax(min-content, 140px));
        margin-bottom: 0px;
    }
}

img {
    max-width: 100%;
    height: auto;
}

.tips-title {
    text-align: center;
    font-size: 16px;
}

.tips-type-exp-wrapper {
    text-align: center;
    width: 60%;
    margin: 8px auto 0;
    padding: 4px 0px;
    border: 1px solid #CCC;
    border-width: 1px 0;
}

.tips-type {
    display: inline;
    margin-left: 2px;
    padding: 1px 3px 1px 3px;
    background-color: #999;
    color: #fff;
}

.tips-experience {
    display: inline;
    margin-left: 2px;
    padding: 1px 3px 1px 3px;
    background-color: #32CD32;
    color: #fff;
}

.tips-favorite {
    display: inline;
    margin-left: 2px;
}

.tips-price {
    text-align: center;
    margin-top: 2px;
    font-size: 18px;
    color: #999;
}

</style>