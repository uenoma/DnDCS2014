import './Sheet1Header.css';
import { useEffect } from 'react';

function Sheet1Header(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('Sheet1Name').value = props.data.name;
      document.getElementById('BasicInfoLevel').value = props.data.level;
      document.getElementById('BasicInfoBackground').value = props.data.background.type;
      document.getElementById('BasicInfoPlayerName').value = props.data.player_name;
      document.getElementById('BasicInfoSpecies').value = props.data.species;
      document.getElementById('BasicInfoAlignment').value = props.data.alignment;
      document.getElementById('BasicInfoXP').value = props.data.xp;
    }
  }, [props]);

  return (
    <div className="Sheet1Header">
      <div className="Sheet1HeaderName">
        <input id="Sheet1Name"></input>
        <label>キャラクター名</label>
      </div>

      <div className="Sheet1HeaderInfo Col">
        <div className="Row">
          <div className="Sheet1HeaderInfoItem Col">
            <input id="BasicInfoLevel"></input>
            <label>クラス＆レベル</label>
          </div>
          <div className="Sheet1HeaderInfoItem Col">
            <input id="BasicInfoBackground"></input>
            <label>背景</label>
          </div>
          <div className="Sheet1HeaderInfoItem Col">
            <input id="BasicInfoPlayerName"></input>
            <label>プレイヤー名</label>
          </div>
        </div>
        <div className="Row">
          <div className="Sheet1HeaderInfoItem Col">
            <input id="BasicInfoSpecies"></input>
            <label>種族</label>
          </div>
          <div className="Sheet1HeaderInfoItem Col">
            <input id="BasicInfoAlignment"></input>
            <label>属性</label>
          </div>
          <div className="Sheet1HeaderInfoItem Col">
            <input id="BasicInfoXP"></input>
            <label>経験点(XP)</label>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Sheet1Header;
