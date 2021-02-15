import { getArticles} from './api.js';

const button = document.querySelector('button');

// button.onclick(()=>{
//    getArticles()
//    console.log('I worked')
// })


button.addEventListener("click", function () {
   getArticles()
})