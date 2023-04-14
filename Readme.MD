In this small project i have use the redux concept 
- redux is a simple pattern and library which is used to manage state in js application


step to setup the Redux in this project
- create a initial component
- create the redux with the help of redux libabry with the help of import legacy_createStore
import { legacy_createStore} from the 'redux',legacy_createStore is a function which acept the reducer as parameter and function is store in some variable and export the variable
- provide acccess to all component with the help of Provider components with store property and Provider is import from the third party library which is react-redux
- to store data in redux we use the Reducer function Reducer function is simple js fn whixh take 2 parameter they are state(data) and action and its return the data reducer register with the redux store legacy_createStore take first argument as reducer
-now we required the action object.action object is special object which contain one mandatory property called type,action object is passed as argrument to the dispatch()
- dispatch is predefined fn which take the the argument that is action object and dispatch can be access with using redux-store or using useDispatch() hooks.it can be called directly from component


- how  to access redux store
 - using useSelector () hooks
 - useSelector take one callback fn with storedata as parameter and return storedata


 