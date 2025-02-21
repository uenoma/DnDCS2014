import './Symbol.css';
import bg from '../images/bg.png'
import { useState, useEffect } from 'react';

function Symbol(props) {

  const [image, setImage] = useState(bg);

  const changeImage = (e) => {
    const file = document.getElementById("SymbolImageUrl").value;
    if (file) {
      setImage(file);
    } else {
      setImage(bg);
    }
  }

  useEffect(() => {
    if (props.data) {
      document.getElementById("SymbolText").value = props.data.organization.symbol;
      document.getElementById("SymbolName").value = props.data.organization.symbol_name;
      if (props.data.organization.image_url) {
        document.getElementById("SymbolImageUrl").value = props.data.organization.image_url;
        setImage(props.data.organization.image_url);
      }
    }
  }, [props]);

  return (
    <div className="Symbol">
      <div className="SymbolTitle">
        <label>名前</label>
        <input id="SymbolName"></input>
      </div>
      <div className="SymbolContent">
        <img src={image} alt="シンボル"></img>
        <textarea id="SymbolText"></textarea>
      </div>
      <div className="SymbolTitle Center">
        <label>シンボル</label>
      </div>
      <div className="SymbolContentURL">
        <label>画像URL</label>
        <input id="SymbolImageUrl" onChange={(e) => changeImage(e)}></input>
      </div>
    </div>

  );
}

export default Symbol;
