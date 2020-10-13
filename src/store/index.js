import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shoppingCart: 0,
        phonelisting: [{
                name: "Galaxy A20",
                price: 300,
                image: {
                    source: "./images/galaxyA20.jpg",
                    alt: "galaxy A20",
                },
                quantity: 1,
            },
            {
                name: "Galaxy Flip",
                price: 500,
                image: {
                    source: "./images/galaxyFlip.jpg",
                    alt: "galaxy Flip",
                },
                quantity: 1
            },
            {
                name: "Galaxy S9",
                price: 450,
                image: {
                    source: "./images/galaxyS9.jpg",
                    alt: "galaxy S9",
                },
                quantity: 1
            },
            {
                name: "Galaxy S20",
                price: 900,
                image: {
                    source: "./images/galaxyS20.jpeg",
                    alt: "galaxy S20",
                },
                quantity: 1
            },
            {
                name: "Iphone 11",
                price: 850,
                image: {
                    source: "./images/Iphone11.jpg",
                    alt: "Iphone11",
                },
                quantity: 1
            },
            {
                name: "IphoneSe",
                price: 880,
                image: {
                    source: "./images/IphoneSe.jpg",
                    alt: "IphoneSe",
                },
                quantity: 1
            },
            {
                name: "IphoneXr",
                price: 770,
                image: {
                    source: "./images/IphoneXr.jpg",
                    alt: "IphoneXr",
                },
                quantity: 1
            },
            {
                name: "SonyXperiaZ1",
                price: 680,
                image: {
                    source: "./images/SonyXperiaZ1.jpg",
                    alt: "SonyXperiaZ1",
                },
                quantity: 1
            },
            {
                name: "XiaomiRedmi9S",
                price: 590,
                image: {
                    source: "./images/XiaomiRedmi9S.jpg",
                    alt: "XiaomiRedmi9S",
                },
                quantity: 1
            },
        ]


    },
    mutations: {
        ADD_ITEMS_TO_SHOPPING_CART(state, amount) {
            state.shoppingCart += amount
        }
    },
    actions: {
        updateShoppingCart({ commit }, amount) {
            commit('ADD_ITEM_TO_SHOPPING_CART', amount)
        }
    },
    modules: {}
})