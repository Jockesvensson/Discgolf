import Vue from 'vue'
import Vuex from 'vuex'
import news from './news'
import brands from './brands'
import filled from './filled'
import tips from './tips'
import help from './help'
import allbrands from './allbrands'
import navitems from './navitems'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        news: news,
        brands: brands,
        filled: filled,
        tips: tips,
        help: help,
        allbrands: allbrands,
        navitems: navitems,
    },
    getters: {
        getNews: state => {
            return state.news
        },
        getBrand: state => {
            return state.brands
        },
        getFilled: state => {
            return state.filled
        },
        getTips: state => {
            return state.tips
        },
        getHelp: state => {
            return state.help
        },
        getAllBrands: state => {
            return state.allbrands
        },
        getNavItems: state => {
            return state.navitems
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})