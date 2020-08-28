<template>
<div class="help-container">
    <div class="help-wrapper">
        <div class="left-container help">
            <img :src="items[0].image">
            <div class="help-text-container">
                <div class="help-text-title">{{items[0].title}}</div>
                <div class="help-text-description">{{items[0].description}}</div>
                <button class="help-btn">Läs Mer</button>
            </div>
        </div>
        <div class="middle-container help">
            <img :src="items[1].image">
            <div class="help-text-container">
                <div class="help-text-title">{{items[1].title}}</div>
                <div class="help-text-description">{{items[1].description}}</div>
                <button class="help-btn">Läs Mer</button>
            </div>
        </div>
        <div class="right-container help">
            <img :src="items[2].image">
            <div class="help-text-container">
                <div class="help-text-title">{{items[2].title}}</div>
                <div class="help-text-description">{{items[2].description}}</div>
                <button class="help-btn">Läs Mer</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Help',
    data() {
        return {

        }
    },
    computed: {
        items() {
            return this.$store.getters.getHelp
        }
    }
}
</script>

<style scoped>

.help-container {
    margin-top: 40px;
}

.help-wrapper {
    margin-bottom: 30px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 411px));
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 479px) {
    .help-wrapper {
        padding: 0px 10px;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 411px));
    }
    img {
        max-width: 100%;
        height: auto;
    }
}

.help-text-container {
    max-width: 409px;
    background-color: rgba(211, 211, 211, 0.445);
}

.help-text-title {
    padding-top: 20px;
    font-size: 24px;
}

.help-text-description {
    padding: 10px;
    font-size: 16px;
}

.help-btn {
    margin: 20px 0px 30px 0px;
    cursor: pointer;
    height: 44px;
    width: 106px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: #008CBA;
}

</style>