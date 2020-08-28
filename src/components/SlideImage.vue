<template>
    <div class="image-container">
        <transition-group tag="div" class="img-slider" name="slide">
            <div v-for="number in [currentImg]" :key="number" >
                <img :src="currentImage"/>
            </div>
        </transition-group>
        <button class="prev" @click="prev"><i class="glyphicon glyphicon-chevron-left"></i></button>
        <button class="next" @click="next"><i class="glyphicon glyphicon-chevron-right"></i></button>
    </div>
</template>

<script>
export default {
    name: 'SlideImage',
    data() {
        return {
        imgList: [
            require(`@/assets/slidingimage1.png`),
            require(`@/assets/slidingimage2.png`),
            require(`@/assets/slidingimage3.png`),
            require(`@/assets/slidingimage4.png`),
            require(`@/assets/slidingimage5.png`),
            require(`@/assets/slidingimage6.png`),
            require(`@/assets/slidingimage7.png`),
            require(`@/assets/slidingimage8.png`),
            require(`@/assets/slidingimage9.png`),
            require(`@/assets/slidingimage10.png`),
            require(`@/assets/slidingimage11.png`),
        ],
        currentImg: 0,
        }
    },
    mounted() {
        setInterval(() => {
            this.currentImg  = this.currentImg  + 1;
        }, 10000);
    },
    computed: {
        currentImage() {
            return this.imgList[Math.abs(this.currentImg) % this.imgList.length];
        }
    },
    methods: {
        next() {
            this.currentImg += 1;
        },
        prev() {
            this.currentImg -= 1;
        }
    }
}
</script>

<style scoped>

.container {
    overflow: hidden;
}

.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}

.img-slider{
    overflow: hidden;
    position: relative;
    height: 590px;
    width: 100%;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
    .img-slider {
        height: 180px;
    }
}

.img-slider img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
}

img {
    max-width: 100%;
}

.prev {

}

.next {

}

</style>