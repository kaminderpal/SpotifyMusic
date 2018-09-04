
const Session = ( () => {
    return {
              setToken : (token) => {
                sessionStorage.setItem("token",JSON.stringify(token));
              },
              getToken :  () => {
                const token = JSON.parse( sessionStorage.getItem("token") );
                return typeof token === 'object' ?  token : null;
              }
            }
} )();
export default Session;

