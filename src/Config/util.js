/**
 * Util function to store token in sessin storage.
 */
const Session = ( () => {
    return {
              setToken : (token) => {
                sessionStorage.setItem("token",JSON.stringify(token));
              },
              getToken :  () => {
                const token = JSON.parse( sessionStorage.getItem("token") );
                return typeof token === 'object' ?  token : null;
              },
              clearToken : () => {
                sessionStorage.clear();
              }
            }
} )();
export default Session;

