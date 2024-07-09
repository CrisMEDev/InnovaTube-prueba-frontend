export const getFavoritesByTitle = ({ query = '', favs = [] }) => {

   if ( query === '' ) return [];
   
   query = query.toLocaleLowerCase();
   
   return favs.filter( ({ id, snippet }, index) => snippet.title.toLowerCase().includes( query ) );

}