import './Treasure.css';
import { useEffect } from 'react';

function Treasure(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('Treasure').value = props.data.treasure;
    }
  }, [props]);

  return (
    <div className="Treasure">
      <div className="TreasureContent">
        <textarea id="Treasure"></textarea>
      </div>
      <div className="TreasureTitle">
        <label>財宝</label>
      </div>

    </div>
  );
}

export default Treasure;
