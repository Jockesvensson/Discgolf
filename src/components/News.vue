<template>
    <div class="news-container">
        <div v-for="item in items" :key="item.id" class="">
            <img :src="item.image" alt="product image">
            <div class="news-title">{{item.title}}</div>
            <div class="news-type-exp-wrapper">
                <div class="news-type">{{item.type}}</div>
                <div class="news-experience">{{item.experience}}</div>
                <div class="news-favorite"><i class="glyphicon glyphicon-heart"></i></div>
            </div>
            <div class="news-price">{{item.price}}:-</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {

        }
    },
    computed: {
        items() {
            return this.$store.getters.getNews
        }
    }
}
</script>

<style scoped>

.news-container {
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
    .news-container {
        grid-template-columns: repeat(auto-fit, minmax(min-content, 140px));
    }
}

img {
    max-width: 100%;
    height: auto;
}

.news-title {
    text-align: center;
    font-size: 16px;
}

.news-type-exp-wrapper {
    text-align: center;
    width: 60%;
    margin: 8px auto 0;
    padding: 4px 0px;
    border: 1px solid #CCC;
    border-width: 1px 0;
}

.news-type {
    display: inline;
    margin-left: 2px;
    padding: 1px 3px 1px 3px;
    background-color: #999;
    color: #fff;
}

.news-experience {
    display: inline;
    margin-left: 2px;
    padding: 1px 3px 1px 3px;
    background-color: #32CD32;
    color: #fff;
}

.news-favorite {
    display: inline;
    margin-left: 2px;
}

.news-price {
    text-align: center;
    margin-top: 2px;
    font-size: 18px;
    color: #999;
}



</style>