<template>
  <div class="home">
    <NavbarTop/>
    <Navbar/>
    <div class="home-container">
      <div class="left-container">
          <div class="slide-image">
          <SlideImage/>
          </div>
          <div class="news-section title">
            Nyheter!
            <div class="line-breaker"></div>
          </div>
          <News/>
          <div class="brands-section title">
            Brands (top 10)
            <div class="line-breaker"></div>
          </div>
          <Brands/>
          <div class="filled-section title">
            Påfyllt
            <div class="line-breaker"></div>
          </div>
          <Filled/>
          <div class="tips-section title">
            Discsport tipsar
            <div class="line-breaker"></div>
          </div>
          <Tips/>
      </div>
      <div class="right-container">
        <RightContainer/>
      </div>
    </div>
    <div class="help-section"></div>
    <Help/>
    <div class="bonus-points-section">
      <div class="test">
        <div class="bonus-title-wrapper">
          <div class="bonus-title">Bonuspoäng på allt du handlar!</div>
        </div>
        <div class="bonus-text-wrapper">
          <div class="bonus-text">Signa upp hos oss och du får bonuspoäng på allt du handlar. För dina poäng kan du köpa rabattkuponger. <span class="read-more">Läs mer</span></div>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <FooterContainer/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import NavbarTop from '../components/NavbarTop'
import SlideImage from '../components/SlideImage'
import News from '../components/News'
import Brands from '../components/Brands'
import Filled from '../components/Filled'
import Tips from '../components/Tips'
import Help from '../components/Help'
import FooterContainer from '../components/FooterContainer'
import RightContainer from '../components/RightContainer'
export default {
    name: 'Home',
    components: {Navbar, NavbarTop, SlideImage, News, Brands, Filled, Tips, Help, FooterContainer, RightContainer},
    data() {
        return {

        }
    },
}
</script>

<style scoped>

.footer-container {
  background-color: #f5f5f5;
}

.home-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
}

.left-container {
  flex-grow: 1;
	/* width: 83%; */
  flex: 0 0 80%;
  padding-left: 45px;
  margin-top: 50px;
  border-right: 1px solid lightgrey;
}

.right-container {
  /* width: 17%; */
  flex: 0 0 20%;
  text-align: center;
  margin-top: 50px;
  /* border: 1px solid green; */
}

@media only screen and (max-width: 1023px) {
    .left-container {
      flex: 100%;
      padding: 0px 10px;
      border: none;
    }
    .right-container {
      flex: 100%;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1100px){
  .left-container {
    padding: 0px 20px;
  }
}

.slide-image {
  /* padding-right: 10px; */
  margin-right: 10px;
}

@media only screen and (max-width: 1100px){
  .slide-image {
    margin-right: 0px;
  }
}

.title {
  max-width: 1063px;
  margin-top: 20px;
  /* padding-left: 50px; */
  font-size: 28px;
}

.line-breaker {
  border-bottom: 1px solid black;
}

.help-section {
  position: relative;
  max-width: 1400px;
  margin: 40px auto;
  border-top: 1px solid lightgrey;
}

.bonus-points-section {
  min-height: 126px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #8FBC8F;
  border: 3px solid #333;
  border-width: 4px 0 2px;
}

.test {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1023px) {
  .test {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    text-align: left;
  }
}

.bonus-title-wrapper {
  flex: 0 0 16%;
}

@media only screen and (max-width: 1023px) {
  .bonus-title-wrapper {
    width: 100%;
    margin-bottom: 10px;
  }
}

.bonus-title {
  font-size: 26px;
  color: white;
}

.bonus-text-wrapper {
  flex: 0 0 45%;
}

.bonus-text {
  font-size: 20px;
  color: white;
}

.read-more {
  color: blue;
}

</style>
