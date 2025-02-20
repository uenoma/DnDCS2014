import './Sheet3Header.css';
import { useEffect } from 'react';

function Sheet3Header(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('spell_class').value = props.data.spell_class;
      document.getElementById('spell_modifier').value = props.data.spell_modifier;
      document.getElementById('spell_dc').value = props.data.spell_dc;
      document.getElementById('spell_attack').value = props.data.spell_attack;

    }
  }, [props]);

  return (
    <div className="Sheet3Header">
      <div className="Sheet3HeaderName">
        <input className="Sheet2Name" id="spell_class"></input>
        <label>呪文発動クラス</label>
      </div>

      <div className="Sheet3HeaderInfo">
        <div className="Sheet3HeaderInfoItem"><input id="spell_modifier"></input><label>呪文発動能力値</label></div>
        <div className="Sheet3HeaderInfoItem"><input id="spell_dc"></input><label>呪文セーヴ難易度</label></div>
        <div className="Sheet3HeaderInfoItem"><input id="spell_attack"></input><label>呪文攻撃ボーナス</label></div>
      </div>

    </div>



  );
}

export default Sheet3Header;
