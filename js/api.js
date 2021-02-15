export const getArticles = async () => {
   const div = document.querySelector('#destination');
   let data;
   div.innerHTML = ''
   // const options = {
   //    method: 'GET',
   //    url: 'http://127.0.0.1:3000',
   // };


   await axios.get('http://api.mediastack.com/v1/news?access_key=04d6f22cdb21ab71cdddc1ffac4fc750&languages=en&search=abc')

      .then(function (res) {
         console.log(data)
         data = JSON.stringify(res.data.data)
      }).catch(function (error) {
         console.error(error);
      });

   if (data && data != '') {
      localStorage.setItem('articles', data)
   }
   data = JSON.parse(localStorage.getItem('articles'))

   for (const x in data) {
      if (Object.hasOwnProperty.call(data, x)) {
         if (x < 10) {
            const el = data[x];
            const a = document.createElement('a')
            let {author, description, published_at, title, url} = el
            if (author == null) {
               author = 'Anonymous'
            }
            a.href=url;
            a.innerHTML=`<div>
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="meta"><span>${author}</span>
            <span>${published_at}</span></div>
            </div>`
            div.appendChild(a)
         }
      }
   }
}




