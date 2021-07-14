import React, {useState} from 'react'

function InputUrl(props) {

  const [input, setInput] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();
    props.getLinks(input)
  };

  return (
    <div>
      <h2>Проверка внутренних и исходящих ссылок на странице</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" onChange={(e) => setInput(e.target.value)}/>
          <button type="submit">Проверить</button>
        </form>
      </div>
    </div>
  );
}

export default InputUrl;
