import './Backstory.css';
import { useEffect } from 'react';

function Backstory(props) {

  useEffect(() => {
    if (props.data && props.data.backstory) {
      document.getElementById('Backstory').value = props.data.backstory;
    }
  }, [props]);

  return (
    <div className="Backstory">
      <div className="BackstoryItem">
        <textarea id="Backstory"></textarea>
        <label>過去の経歴</label>
      </div>
    </div>

  );
}

export default Backstory;
