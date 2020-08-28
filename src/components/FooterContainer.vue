<template>
    <div class="footer-container">
        <div class="footer-wrapper">
            <div class="contact-container section section-border">
                <div class="contact-phone-icon title-size" style="margin-bottom: 15px;"><i class="glyphicon glyphicon-earphone icon-style"></i></div>
                <div class="contact-title title-size" style="margin-bottom: 8px;">Kontakt</div>
                <div class="contact-number title-size">08-653 28 30</div>
                <div class="contact-email title-size" style="margin-bottom: 15px;">info@discsport.se</div>
                <div class="contact-email-icon title-size"><i class="glyphicon glyphicon-envelope icon-style"></i></div>
                <div class="contact-email-link title-size text-blue" style="margin-bottom: 25px;">Skriv till oss!</div>
                <div class="contact-address-title title-size" style="margin-bottom: 10px;">Adress</div>
                <div class="contact-address-info text-size">Skeberga 200, 747 94 Alunda</div>
                <div class="contact-address-link text-size text-blue">Hitta till oss</div>
                <div class="line-breaker"></div>
                <div class="contact-social-media-text text-size" style="margin-top: 50px;">News, Stock Updates, Vouchers and more..</div>
                <div class="contact-social-media-wrapper" style="margin-top: 10px;">
                    <i class="glyphicon glyphicon-facetime-video title-size icon-style"></i>
                    <i class="glyphicon glyphicon-facetime-video title-size icon-style"></i>
                    <i class="glyphicon glyphicon-facetime-video title-size icon-style"></i>
                </div>
            </div>
            <div class="store-container section section-border">
                <img :src="require(`@/assets/storepicture.png`)" alt="Store picture">
                <div class="store-warehouse-title title-size" style="margin-top: 10px;">Lagerbutik Skeberga</div>
                <div class="store-warehouse-hours-title text-size" style="margin-top: 10px;">Öppettider:</div>
                <div class="store-warehouse-hours-text text-size" style="margin-top: 5px;">På grund av coronaviruset håller vi lagerbutiken stängd tillsvidare. Online-butiken öppen som vanligt. Kom ihåg att tvätta händerna och ta hand om dina äldre släktingar!</div>
                <div class="line-breaker"></div>
                <div class="store-warehouse-days-closed text-blue" style="margin-top: 5px;">Stängt helgdagar & aftnar</div>
                <div class="store-sthlm-title title-size" style="margin-top: 25px;">Butiken Sthlm</div>
                <div class="store-sthlm-hours-title text-size">Öppettider:</div>
                <div class="store-sthlm-hours-text text-size">Stängt</div>
                <div class="store-sthlm-address text-blue">Johan Printz väg 8. Mer info</div>
            </div>
            <div class="info-container section section-border">
                <i class="glyphicon glyphicon-info-sign title-size icon-style" style="margin-bottom: 15px;"></i>
                <div class="info-shop-title title-size" style="margin-bottom: 8px;">Handla</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Kundtjänst</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Leveransinfo</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Returer</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 8px;">Köpvillkor</div>
                <div class="info-title title-size" style="margin-bottom: 8px;">Info</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Köpråd</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Vanliga frågor</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Om oss</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Team Discsport</div>
                <div class="info-text text-size text-blue" style="margin-bottom: 3px;">Klubbrabatt</div>
                <div class="info-text text-size text-blue">Logos</div>
            </div>
            <div class="account-container section section-border">
                <i class="glyphicon glyphicon-user title-size icon-style" style="margin-bottom: 15px;"></i>
                <div class="account-title title-size" style="margin-bottom: 8px;">Mitt konto</div>
                <div class="account-text text-size text-blue" style="margin-bottom: 3px;">Logga in</div>
                <div class="account-text text-size text-blue">Skapa konto</div>
            </div>
            <div class="rest-container section">
                <i class="glyphicon glyphicon-ok title-size icon-style" style="margin-bottom: 15px;"></i>
                <div class="discsport-title title-size" style="margin-bottom: 8px;">DISCSPORT x 5</div>
                <div class="discsport-text text-size" style="margin-bottom: 3px;"><i class="glyphicon glyphicon-ok"></i>Online sedan 2004</div>
                <div class="discsport-text text-size" style="margin-bottom: 3px;"><i class="glyphicon glyphicon-ok"></i>Stort utbud (+25.000 discar)</div>
                <div class="discsport-text text-size" style="margin-bottom: 3px;"><i class="glyphicon glyphicon-ok"></i>Snabba leveranser</div>
                <div class="discsport-text text-size" style="margin-bottom: 3px;"><i class="glyphicon glyphicon-ok"></i>Fri frakt över 800 kr</div>
                <div class="discsport-text text-size" style="margin-bottom: 15px;"><i class="glyphicon glyphicon-ok"></i>Bonuspoäng på varje köp</div>
                <div class="discsport-description text-size" style="margin-bottom: 25px;">Discsport.se är en discgolfbutik på nätet med huvudlager/lagerbutik 3 mil utanför Uppsala. Vi finns även i Hammarbyhöjden, Stockholm med kontor och <span class="text-blue">mindre butik</span>.</div>
                <div class="news-letter-title title-size" style="margin-bottom: 10px;">Nyhetsbrev</div>
                <div class="" style="margin-bottom: 10px;">
                    <input class="" type="text" placeholder="Email.."><button>Skicka</button>
                </div>
                <div class="news-letter-text" >Nyhetsbrevet skickas ca en gång i månaden.</div>
                <div class="new-letter-link text-blue" style="margin-bottom: 25px;">Tidigare utskick</div>
                <div class="brands-title title-size" style="margin-bottom: 8px;">Våra varumärken</div>
                <div v-for="item in items" :key="item.id" class="brands-company">{{item.title}}<span class="brands-country">[{{item.country}}]</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterContainer',
    data() {
        return {

        }
    },
    computed: {
        items() {
            return this.$store.getters.getAllBrands
        }
    }
}
</script>


<style scoped>

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    background-color: #f5f5f5;
}

.footer-wrapper {
    display: flex;
    flex-wrap: wrap;
}

@media only screen and (max-width: 1023px) {
    .footer-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .section {
        margin-top: 30px;
    }
}

@media only screen and (min-width: 1024px) {

.contact-container {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.store-container {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.info-container {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}   

.account-container {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.rest-container {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}
}


.line-breaker {
    width: 90%;
    margin-top: 15px;
    border-bottom: 1px solid lightgrey;
}

.section {
    margin-top: 30px;
    padding: 0px 30px;
    text-align: left;
}

@media only screen and (max-width: 767px) {
    .section {
        text-align: center;
    }
}


.section-border {
    border-right: 1px dotted lightgrey;
}

.title-size {
    font-size: 22px;
}

.text-size {
    font-size: 16px;
}

.store-warehouse-hours-text {
    color: red;
}

.store-sthlm-hours-text {
    padding: 4px 0px;
    margin: 5px 0px;
    border: 1px solid #CCC;
    border-width: 1px 0;
}

.text-blue {
    color: blue
}

.glyphicon-ok {
    color: green;
}

.brands-company {
    display: inline-block;
    padding: 1px 3px 1px 3px;
    font-size: 12px;
    color: blue;
}

.brands-country {
    padding: 1px 3px 1px 3px;
    color: #999;
}

img {
    max-width: 100%;
    height: auto;
}

.icon-style {
    position: relative;
    padding-top: 5px;
    padding-left: 1px;
    height: 34px;
    width: 36px;
    border-radius: 50%;
    border: none;
    background-color: grey;
    color: white;
}

@media only screen and (min-width: 767px) {
    .icon-style {
        padding-left: 7px;
    }
}

</style>