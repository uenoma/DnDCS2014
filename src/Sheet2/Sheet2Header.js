import './Sheet2Header.css';
import { useEffect } from 'react';

function Sheet2Header(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('Sheet2Name').value = props.data.name;
      document.getElementById('BasicInfoAge').value = props.data.basic_info.age;
      document.getElementById('BasicInfoHeight').value = props.data.basic_info.height;
      document.getElementById('BasicInfoWeight').value = props.data.basic_info.weight;
      document.getElementById('BasicInfoEyes').value = props.data.basic_info.eyes;
      document.getElementById('BasicInfoSkin').value = props.data.basic_info.skin;
      document.getElementById('BasicInfoHair').value = props.data.basic_info.hair;
    }
  }, [props]);

  return (
    <div className="Sheet2Header">
      <div className="Sheet2HeaderName">
        <input className="Sheet2Name" id="Sheet2Name" readOnly></input>
        <label>キャラクター名</label>
      </div>

      <div className="Sheet2HeaderInfo Col">
        <div className="Row">
          <div className="Sheet2HeaderInfoItem Col">
            <input id="BasicInfoAge"></input>
            <label>年齢</label>
          </div>
          <div className="Sheet2HeaderInfoItem Col">
            <input id="BasicInfoHeight"></input>
            <label>身長</label>
          </div>
          <div className="Sheet2HeaderInfoItem Col">
            <input id="BasicInfoWeight"></input>
            <label>体重</label>
          </div>
        </div>
        <div className="Row">
          <div className="Sheet2HeaderInfoItem Col">
            <input id="BasicInfoEyes"></input>
            <label>目</label>
          </div>
          <div className="Sheet2HeaderInfoItem Col">
            <input id="BasicInfoSkin"></input>
            <label>肌</label>
          </div>
          <div className="Sheet2HeaderInfoItem Col">
            <input id="BasicInfoHair"></input>
            <label>髪</label>
          </div>
        </div>
      </div>

    </div>



  );
}

export default Sheet2Header;
