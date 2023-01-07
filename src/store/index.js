import { createStore } from 'vuex'
import axios from 'axios'
import { useRoute } from 'vue-router';

const URL_API = 'https://www.pierrebriffaux.com/recipes';


export default createStore({
  state: {
    recipes:[]
  },
  getters: {
  },
  mutations: {
    setRecipes(state, recipes){
      state.recipes = recipes;
    }
  },
  actions: {
    async getRecipes(context){
      const recipes = (await axios.get(`${URL_API}`)).data
      context.commit('setRecipes', recipes);
    },
    async getOneRecipe(context){
      const route = useRoute();
      const recipe = (await axios.get(`${URL_API}/${route.params.id}`)).data
      context.commit('setRecipes',recipe)
    },
    async createRecipe(context,titre, cuisson, cout, recette) {
      const recipes = {cuisson, cout, recette, id : 127, name : "John Doe"}
      context.commit('SetRecipes', recipes)
    }
  },
  modules: {
  }
})
