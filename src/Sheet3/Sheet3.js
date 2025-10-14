import './Sheet3.css';
import Sheet3Header from './Sheet3Header'
import Spells from './Spells'

import { useEffect, useState } from 'react';


function Sheet3(props) {

  const [displayCard, setDisplayCard] = useState(false);

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);

  return (
    <div className="Sheet3">
      <Sheet3Header data={props.data}></Sheet3Header>

      <div className='Sheet3Checkbox'>
        <label><input type='checkbox' id="spell_card_display" onChange={(e) => setDisplayCard(e.target.checked)} />呪文カード表示</label>
      </div>

      <div className="Sheet3Body Row">
        <div className="Sheet3Col">
          <Spells spellLevel="0" count="9" data={props.data} displayCard={displayCard}></Spells>
          <Spells spellLevel="1" count="14" data={props.data} displayCard={displayCard}></Spells>
          <Spells spellLevel="2" count="13" data={props.data} displayCard={displayCard}></Spells>
        </div>
        <div className="Sheet3Col">
          <Spells spellLevel="3" count="13" data={props.data} displayCard={displayCard}></Spells>
          <Spells spellLevel="4" count="13" data={props.data} displayCard={displayCard}></Spells>
          <Spells spellLevel="5" count="10" data={props.data} displayCard={displayCard}></Spells>
        </div>
        <div className="Sheet3Col">
          <Spells spellLevel="6" count="9" data={props.data} displayCard={displayCard}></Spells>
          <Spells spellLevel="7" count="9" data={props.data} displayCard={displayCard}></Spells>
          <Spells spellLevel="8" count="8" data={props.data} displayCard={displayCard}></Spells>
          <Spells spellLevel="9" count="8" data={props.data} displayCard={displayCard}></Spells>
        </div>
      </div>
    </div>
  );
}

export default Sheet3;
