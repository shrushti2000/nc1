import React from 'react'

const stateReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': return { ...state, products: action.payload }

        case 'SET_CATEGORIES': return { ...state, categories: action.payload }

        case 'SET_PRICE_RANGE': return { ...state, priceRange: action.payload }

        case 'SET_SORT_TYPE': return { ...state, sortBy: action.payload }

        case 'SET_CATEGORY': return state.sortByFilters.sortByCategory.includes(action.payload) ? { ...state, sortByFilters: { ...state.sortByFilters, sortByCategory: state.sortByFilters.sortByCategory.filter(item => item !== action.payload) } } :
            { ...state, sortByFilters: { ...state.sortByFilters, sortByCategory: state.sortByFilters.sortByCategory.concat(action.payload) } }

        case 'SET_SUB_CATEGORY': return { ...state, subCategory: action.payload }
        case 'SET_RATING': return { ...state, rating: action.payload }
        case 'SET_BRAND': return state.sortByFilters.sortByBrands.includes(action.payload) ? { ...state, sortByFilters: { ...state.sortByFilters, sortByBrands: state.sortByFilters.sortByBrands.filter(item => item !== action.payload) } } :
            { ...state, sortByFilters: { ...state.sortByFilters, sortByBrands: state.sortByFilters.sortByBrands.concat(action.payload) } }
        case 'CLEAR_ALL_FILTERS': return {
            ...state,
            sortBy: null,
            priceRange: 0,
            rating: 0,
            sortByFilters: {
                sortByCategory: [],
                sortByBrands: [],

            },
            subCategory: null,
            tag:null
        }
        case 'SET_CART':return {...state,cart:action.payload}
        case 'SET_WISHLIST':return {...state,wishlist:action.payload}
        case 'SET_TAG':return {...state,tag:action.payload}
        default: return state
    }

}

export default stateReducer