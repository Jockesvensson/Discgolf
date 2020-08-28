<template>
    <div>
        <div class="navbar-top-container">
            <button class="navbar-top-btn"><i class="glyphicon glyphicon-ok"></i>Online sedan 2004</button>
            <button class="navbar-top-btn"><i class="glyphicon glyphicon-ok"></i>Stort utbud</button>
            <button class="navbar-top-btn"><i class="glyphicon glyphicon-ok"></i>Snabba leveranser</button>
            <button class="navbar-top-btn"><i class="glyphicon glyphicon-ok"></i>Fri frakt över 800 kr</button>
            <button class="navbar-top-btn"><i class="glyphicon glyphicon-ok"></i>Bonuspoäng på varje köp</button>
        </div>
        <div class="navbar-top-small-container">
            <div class="contact-number"><i class="glyphicon glyphicon-earphone"></i>08-653 28 30</div>
            <div class="contact-email"><i class="glyphicon glyphicon-envelope"></i>info@discsport.se</div>
        </div>
        <div class="line-breaker"></div>
    </div>
</template>

<script>
export default {
    name: 'NavbarTop',
    data() {
        return {

        }
    },
}
</script>

<style scoped>

@media only screen and (max-width: 767px) {
    .navbar-top-container {
        display: none !important;
    }
}

@media only screen and (min-width: 767px) {
    .navbar-top-small-container {
        display: none !important;
    }
    .line-breaker {
        display: none !important;
    }
}

.navbar-top-container {
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dcdcdc;
    border-bottom: 1px solid black;
}

.glyphicon-ok {
    color: lightgreen;
    margin-right: 5px;
}

.navbar-top-btn {
    margin: 0px 5px;
    font-size: 12px;
    border: none;
    background-color: #dcdcdc;
}

.navbar-top-small-container {
    display: flex;
    padding-top: 10px;
}

@media only screen and (max-width: 319px) {
    .navbar-top-small-container {
        font-size: 11px;
    }
}

.line-breaker {
    width: 93%;
    margin-left: 3%;
    margin-top: 10px;
    border-bottom: 1px solid grey;
}

.contact-number {
    display: inline;
    flex: 50%;
}

.contact-email {
    display: inline;
    flex: 50%;
    color: blue;
}

.glyphicon-envelope {
    margin-right: 10px;
    color: rgb(107, 107, 107);
}

.glyphicon-earphone {
    margin-right: 10px;
    color: rgb(107, 107, 107);
}

</style>