import { reactive } from 'vue';

export const store = reactive({
  apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  cardsList: [],
  archetypeToSearch:'Alien',
  isLoading : true,
  archetypeList : ['Alien' , 'Noble Knight' , 'Melodious']
})