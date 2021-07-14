import React from 'react'
import {getHTML, putLinksToObject} from '../../functions/getHTML.js'
import CheckingInternal from '../checking-internal/checking_internal'
import CheckingExternal from '../checking-external/checking_external'

const getLinks = (url) => { // передаём тот url, который ввёл юзер
  getHTML(url).then(res => {console.log(res); return res}) // вернёт document страницы с нужным нам url'ом
              .then(doc => {putLinksToObject(doc)})
  // const objectWithLinks = putLinksToObject(doc);
  // return objectWithLinks; // функция по итогу вернет объект с тремя ключами, 
                          // значения которых - массивы с 3 типами ссылок, соответственно
};

function App() {
  return (
    <div>
      <CheckingInternal getLinks={getLinks}/>
      <CheckingExternal/>
    </div>
  );
}

export default App;
