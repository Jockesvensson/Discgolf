<template>
    <div class="right-container">
        <div class="right-wrapper">
            <div class="first">
                <div class="line-breaker"></div>
                <div class="promotions text-text"><i class="glyphicon glyphicon-bullhorn"></i>Kampanjer</div>
                <div class="heart-list text-text"><i class="glyphicon glyphicon-heart"></i>Heart List</div>
                <div class="line-breaker"></div>
            </div>
            <div class="charts-wrapper">
                <div class="charts-title text-title">Topplistor</div>
                <div class="charts-text text-text"><i class="glyphicon glyphicon-forward"></i>Mest köpta</div>
                <div class="charts-text text-text"><i class="glyphicon glyphicon-forward"></i>Bäst betyg</div>
                <div class="line-breaker"></div>
            </div>
            <div class="product-wrapper">
                <div class="product-title text-title">Veckans Vara</div>
                <img :src="require(`@/assets/dealoftheweek.png`)" alt="Deal picture">
                <div class="product-text text-text">Star Invictus First Run</div>
                <div class="product-price text-title">149:- <span class="product-old-price">199:-</span></div>
                <button class="sale-btn">Mer på Rea<i class="glyphicon glyphicon-forward" style="margin-left: 5px;"></i></button>
            </div>
            <div class="discgolf-container">
                <div class="discgolf-wrapper">
                    <img :src="require(`@/assets/startwithdiscgolf.png`)" alt="Discgolf picture">
                    <div class="discgolf-title text-title">Börja med Discgolf</div>
                    <div class="line-breaker-discgolf"></div>
                    <div class="discgolf-text discgolf-text"><i class="glyphicon glyphicon-forward"></i>Komigång-Set</div>
                    <div class="discgolf-text discgolf-text"><i class="glyphicon glyphicon-forward"></i>Discar för nybörjare</div>
                    <div class="discgolf-text discgolf-text"><i class="glyphicon glyphicon-forward"></i>Discar för ungdom</div>
                </div>
            </div>
            <div class="delivery-container">
                <div class="delivery-wrapper">
                    <div class="delivery-title">Snabba leveranser</div>
                    <div class="line-breaker-delivery"></div>
                    <div class="delivery-price-text text-text">Frakt från</div>
                    <div class="delivery-price">29:-</div>
                    <div class="delivery-free text-text">Fri frakt över 800 kr</div>
                </div>
            </div>
            <div class="own-print-container">
                <div class="own-print-wrapper">
                    <img :src="require(`@/assets/ownprint.png`)" alt="Own print picture">
                    <div class="own-print-title text-link">Eget tryck!</div>
                </div>
            </div>
            <div class="school-container">
                <div class="school-wrapper">
                    <img :src="require(`@/assets/school.png`)" alt="School picture">
                    <div class="school-title text-link">Orderformulär Skola!</div>
                </div>
            </div>
            <div class="team-discsport-container">
                <div class="team-discsport-wrapper">
                    <img :src="require(`@/assets/teamdiscsport.png`)" alt="Team picture">
                    <div class="team-discsport-title text-link">TEAM DISCSPORT</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightContainer',
    data() {
        return {

        }
    },
}
</script>

<style scoped>


.line-breaker {
    margin: 10px 0px 10px 15px;
    width: 90%;
    border-bottom: 1px solid grey;
}

@media only screen and (max-width: 1023px) {
    .line-breaker {
        margin: 10px 0px 10px 15px;
        width: 92%;
        border-bottom: 1px solid grey;
    }
}

.glyphicon-bullhorn {
    padding-right: 10px;
}

.glyphicon-heart {
    padding-right: 10px;
}

.text-text {
    font-size: 18px;
}

.text-title {
    font-size: 26px;
}

.glyphicon-forward {
    font-size: 14px;
}

.product-old-price {
    position: relative;
    bottom: 1px;
    text-decoration: line-through;
    font-size: 20px;
}

.sale-btn {
    margin: 20px 0px 30px 0px;
    padding: 5px 10px;
    background-color: white;
    border: 1px solid red;
    color: red;
    border-radius: 4px;
    font-size: 18px;
}

.discgolf-container {
    display: flex;
    justify-content: center;
}

.discgolf-wrapper {
    width: 70%;
    text-align: left;
    margin: 20px 0px 20px;
    padding: 10px;
    background-color: #8fbc8f;
}

.discgolf-title {
    margin: 10px 0px;
    line-height: 1;
    color: white;
}

.discgolf-text {
    color: white;
    font-size: 18px;
}

.line-breaker-discgolf {
    margin-bottom: 10px;
    width: 100%;
    border-bottom: 1px solid white;
}

.delivery-container {
    display: flex;
    justify-content: center;
}

.delivery-wrapper {
    text-align: left;
    padding: 10px;
    width: 70%;
    background-color: #ffd700;
}

.delivery-title {
    line-height: 1.1;
    font-size: 26px;
}

.line-breaker-delivery {
    margin: 10px 0px 20px 0px;
    border-bottom: 1px solid black;
}

.delivery-price {
    margin: 8px auto 15px;
    padding: 4px 0px;
    border: 1px dotted white;
    border-width: 1px 0;
    font-size: 40px;
}

.own-print-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.own-print-wrapper {
    width: 70%;
    padding: 10px;
    background-color: #dcdcdc;
}

.school-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.school-wrapper {
    width: 70%;
    padding: 10px;
    background-color: #dcdcdc;
}

.team-discsport-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.team-discsport-wrapper {
    width: 70%;
    padding: 10px;
    background-color: #dcdcdc;
}

.text-link {
    margin: 10px auto 0;
    line-height: 1;
    font-size: 18px;
    color: blue;
}

img {
    max-width: 100%;
    height: auto;
}

</style>