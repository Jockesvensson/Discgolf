<template>
    <div>
        <div id="navbar-large" class="navbar-wrapper">
            <div class="navbar-container">
                <div class="top-container">
                    <div class="top-wrapper">
                        <button class="top-btn">Kundtjänst</button>
                        <button class="top-btn">Skapa konto</button>
                        <button class="top-btn">Logga in</button>
                    </div>
                </div>
                <div class="middle-container">
                    <div class="home-image-container">
                        <img :src="require(`@/assets/discsport-logo.png`)" alt="Logo picture">
                    </div>
                    <div class="search-container">
                        <input class="search-items" type="text" placeholder="Search...">
                        <button class="search-btn"><i class="glyphicon glyphicon-search"></i></button>
                        <button class="filter-btn"><i class="glyphicon glyphicon-triangle-bottom" style="margin-left: 0px; color: grey;"></i></button>
                    </div>
                    <div class="cart-container">
                        <button class="cart-btn"><i class="glyphicon glyphicon-shopping-cart"></i>0 kr</button>
                        <button class="change-lang"><img :src="require(`@/assets/swedishflag.png`)" alt="Swedish flag"></button>
                    </div>
                </div>
                <div class="bottom-container">
                    <button class="bottom-btn">Discar<i class="glyphicon glyphicon-triangle-bottom bottom-triangle"></i></button>
                    <button class="bottom-btn">Väskor<i class="glyphicon glyphicon-triangle-bottom"></i></button>
                    <button class="bottom-btn">Korgar<i class="glyphicon glyphicon-triangle-bottom"></i></button>
                    <button class="bottom-btn">Kläder & Annat<i class="glyphicon glyphicon-triangle-bottom"></i></button>
                    <button class="bottom-btn">Frisbee & Flying Fun<i class="glyphicon glyphicon-triangle-bottom"></i></button>
                    <button class="bottom-btn">Hundfrisbees<i class="glyphicon glyphicon-triangle-bottom"></i></button>
                    <div class="text-right">
                        <div class="test">Allt för Discgolf & Frisbee!</div>
                    </div>
                </div>
                <!-- <div class="">{{navItems[0].subheading.text2}}</div> -->
                <div class="bottom-container-medium">
                    <img @click="toggleMediumMenu()" :src="require(`@/assets/hamburgericon.png`)" class="hamburger-medium-btn" alt="Hamburger picture">
                </div>
                <div v-show="showMediumMenu" class="medium-container-items">
                    <li @click="toggleDiscsComponent()" class="bottom-medium-btn">Discar<i class="glyphicon glyphicon-triangle-bottom bottom-triangle medium-triangle"></i></li>
                    <NavbarDiscsItems v-if="showDiscComponent"/>
                    <li @click="toggleBagsComponent()" class="bottom-medium-btn">Väskor<i class="glyphicon glyphicon-triangle-bottom medium-triangle"></i></li>
                    <NavbarBagsItems v-if="showBagsComponent"/>
                    <li @click="toggleBasketsComponent()" class="bottom-medium-btn">Korgar<i class="glyphicon glyphicon-triangle-bottom medium-triangle"></i></li>
                    <NavbarBasketsItems v-if="showBasketsComponent"/>
                    <li @click="toggleClothesComponent()" class="bottom-medium-btn">Kläder & Annat<i class="glyphicon glyphicon-triangle-bottom medium-triangle"></i></li>
                    <NavbarClothesItems v-if="showClothesComponent"/>
                    <li @click="toggleFrisbeeComponent()" class="bottom-medium-btn">Frisbee & Flying Fun<i class="glyphicon glyphicon-triangle-bottom medium-triangle"></i></li>
                    <NavbarFrisbeeItems v-if="showFrisbeeComponent"/>
                    <li @click="toggleDogsComponent()" class="bottom-medium-btn">Hundfrisbees<i class="glyphicon glyphicon-triangle-bottom medium-triangle"></i></li>
                    <NavbarDogsItems v-if="showDogsComponent"/>
                </div>
            </div>
        </div>
        <div id="navbar-small" class="">
            <div class="middle-container-small">
                <div class="hamburger-wrapper">
                    <img @click="toggleSmallMenu()" :src="require(`@/assets/hamburgericon.png`)" alt="Hamburger picture">
                </div>
                <div class="image-wrapper">
                    <img :src="require(`@/assets/discsport-logo.png`)" alt="Logo picture">
                </div>
                <div class="cart-wrapper">
                    <button @click="toggleCartComponent()" class="cart-small-btn"><i class="glyphicon glyphicon-shopping-cart"></i></button>
                </div>
            </div>
            <div class="search-container">
                <input class="search-items" type="text" placeholder="Search...">
                <button class="search-btn"><i class="glyphicon glyphicon-search"></i></button>
                <button class="filter-btn"><i class="glyphicon glyphicon-triangle-bottom" style="margin-left: 0px; color: grey;"></i></button>
            </div>
        </div>
        <div v-show="showCartComponent" class="cart-info-container">
            <CartModal v-if="showCartComponent"/>
        </div>
        <div v-show="showSmallMenu" class="small-menu-items">
            <NavbarDiscsItems/>
            <NavbarBagsItems/>
            <NavbarBasketsItems/>
            <NavbarClothesItems/>
            <NavbarFrisbeeItems/>
            <NavbarDogsItems/>
        </div>
    </div>
</template>

<script>
import NavbarDiscsItems from './NavbarDiscsItems'
import NavbarBagsItems from './NavbarBagsItems'
import NavbarBasketsItems from './NavbarBasketsItems'
import NavbarClothesItems from './NavbarClothesItems'
import NavbarFrisbeeItems from './NavbarFrisbeeItems'
import NavbarDogsItems from './NavbarDogsItems'
import CartModal from './CartModal'
export default {
    name: 'NavBar',
    components: {NavbarDiscsItems, NavbarBagsItems, NavbarBasketsItems, NavbarClothesItems, NavbarFrisbeeItems, NavbarDogsItems, CartModal},
    data() {
        return {
            showMediumMenu: false,
            showSmallMenu: false,
            showDiscComponent: false,
            showBagsComponent: false,
            showBasketsComponent: false,
            showClothesComponent: false,
            showFrisbeeComponent: false,
            showDogsComponent: false,
            showCartComponent: false,
        }
    },
    methods: {
        toggleMediumMenu() {
            this.showMediumMenu = !this.showMediumMenu;
        },
        toggleDiscsComponent() {
            this.showDiscComponent = !this.showDiscComponent;
            this.showBagsComponent = false
            this.showBasketsComponent = false
            this.showClothesComponent = false
            this.showFrisbeeComponent = false
            this.showDogsComponent = false
        },
        toggleBagsComponent() {
            this.showBagsComponent = !this.showBagsComponent;
            this.showDiscComponent = false
            this.showBasketsComponent = false
            this.showClothesComponent = false
            this.showFrisbeeComponent = false
            this.showDogsComponent = false
        },
        toggleBasketsComponent() {
            this.showBasketsComponent = !this.showBasketsComponent;
            this.showBagsComponent = false
            this.showDiscComponent = false
            this.showClothesComponent = false
            this.showFrisbeeComponent = false
            this.showDogsComponent = false
        },
        toggleClothesComponent() {
            this.showClothesComponent = !this.showClothesComponent;
            this.showBagsComponent = false
            this.showBasketsComponent = false
            this.showDiscComponent = false
            this.showFrisbeeComponent = false
            this.showDogsComponent = false
        },
        toggleFrisbeeComponent() {
            this.showFrisbeeComponent = !this.showFrisbeeComponent;
            this.showBagsComponent = false
            this.showBasketsComponent = false
            this.showDiscComponent = false
            this.showClothesComponent = false
            this.showDogsComponent = false
        },
        toggleDogsComponent() {
            this.showDogsComponent = !this.showDogsComponent;
            this.showBagsComponent = false
            this.showBasketsComponent = false
            this.showDiscComponent = false
            this.showClothesComponent = false
            this.showFrisbeeComponent = false
        },
        toggleSmallMenu() {
            this.showSmallMenu = !this.showSmallMenu;
        },
        toggleCartComponent() {
            this.showCartComponent = !this.showCartComponent;
        }
    },
    computed: {
        navItems() {
            return this.$store.getters.getNavItems
        }
    }
}
</script>

<style scoped>

@media only screen and (max-width: 767px) {
    #navbar-large {
        display: none !important;
    }
}

@media only screen and (min-width: 768px) {
    #navbar-small {
        display: none !important;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
    .bottom-container {
        display: none !important;
    }
}

@media only screen and (min-width: 1024px) {
    .bottom-container-medium {
        display: none !important;
    }
    .medium-container-items {
        display: none !important;
    }
}

li {
    display: flex;
    list-style: none;
}

.navbar-container {
    position: relative;
    max-width: 1400px;
    padding-left: 45px;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
}

@media only screen and (max-width: 1023px) {
    .navbar-container {
        padding: 0px 10px;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1100px){
    .navbar-container {
        padding: 0px 20px;
    }
}

.top-container {
    margin-top: 20px;
}

.top-wrapper {
    text-align: right;
}

.top-btn {
    margin: 0px 3px;
    border: none;
    color: blue;
    background-color: white;
}

.middle-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100px;
}

.middle-container-small {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100px;
}

.hamburger-wrapper {
    width: 28px;
    height: 26px;
    border: none;
    border-radius: 50%;
    background-color: rgb(47, 190, 190);
}

.image-wrapper {
    max-width: 60%;
}

@media only screen and (max-width: 767px) {
    img {
        max-width: 80%;
        height: auto;
    }
}

.cart-small-btn {
    width: 28px;
    height: 26px;
    border: none;
    border-radius: 50%;
    background-color: rgb(47, 190, 190);
}

input[type="text"] {
    width: 75%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px 0px 0px 4px;
    box-sizing: border-box;
    resize: vertical;
    font-weight: 700;
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
    input[type="text"] {
        width: 60%;
    }
}

@media only screen and (max-width: 319px) {
    input[type="text"] {
        width: 60%;
    }
}

.search-btn {
    height: 38px;
    width: 38px;
    border: 1px solid #ccc;
    background-color: white;
}

.glyphicon-search {
    color: grey;
} 

.filter-btn {
    height: 38px;
    width: 30px;
    border-radius: 0px 4px 4px 0px;
    border: 1px solid #ccc;
    background-color: white;
}

.home-image-container {
    flex-grow: 1;
	flex: 33%;
    text-align: left;
}

.search-container {
    flex-grow: 1;
	flex: 33%;
}

.cart-container {
    flex-grow: 1;
	flex: 33%;
    text-align: right;
}

@media only screen and (max-width: 767px) {
    .home-image-container {
        flex: 100%;
    }
    .search-container {
        flex: 100%;
        padding: 0px 20px;
    }
    .cart-container {
        flex: 100%;
        margin-bottom: 20px;
    }
}

@media only screen and (max-width: 319px) {
    .search-container {
        padding: 0px 10px;
    }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
    .search-container {
        padding: 0px 0px;
    }
}

.cart-btn {
    height: 50px;
    min-width: 112px;
    font-size: 22px;
    background-color: white;
    border: 1px solid rgb(151, 151, 151);
    border-radius: 6px 6px 6px 6px;
}

.change-lang {
    padding: 0px 20px;
    border: none;
    font-size: 28px;
    background-color: white;
}

.glyphicon-shopping-cart {
    margin-right: 10px;
    opacity: 0.7;
    font-size: 16px;
}

@media only screen and (max-width: 767px) {
    .glyphicon-shopping-cart {
        color: black;
        opacity: 1;
    }
}

.bottom-container {
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    min-height: 50px;
    background-color: #f0f0f0;
}

.bottom-container-medium {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 20px;
    min-height: 50px;
    background-color: #f0f0f0;
}

.medium-container-items {
    justify-content: left;
    align-items: center;
    padding: 0px 15px 15px 15px;
    min-height: 50px;
    background-color: #f0f0f0;
}

.bottom-btn {
    margin: 0px 10px;
    background-color: #f0f0f0;
    border: none;
}

.bottom-medium-btn {
    padding: 5px;
    cursor: pointer;
    font-size: 18px;
}

.medium-triangle {
    position: relative;
    top: 7px;
    left: 2px;
    height: 10px;
}

.glyphicon-triangle-bottom{
    margin-left: 3px;
    font-size: 10px;
}

.text-right {
    position: absolute;
    right: 1%;
    font-size: 20px;
    font-weight: bold;
    color: #4682b4;
}

.hamburger-medium-btn {
    cursor: pointer;
}

.small-menu-items {
    position: relative;
    bottom: 38px;
}

.cart-info-container {
    position: relative;
    display: flex;
    text-align: left;
    left: 47%;
    bottom: 60px;
    width: 50%;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 4px 4px 4px 4px;
}

</style>