import './Background.css';
import { useEffect } from 'react';

function Background(props) {

  useEffect(() => {
    if (props.data && props.data.background.details) {
      document.getElementById("Background1").value = props.data.background.details[0];
      document.getElementById("Background2").value = props.data.background.details[1];
      document.getElementById("Background3").value = props.data.background.details[2];
      document.getElementById("Background4").value = props.data.background.details[3];
    }

  }, [props]);

  return (
    <div className="Background">
      <div className="BackgroundItems">
        <div className="BackgroundItem Top">
          <textarea id="Background1"></textarea>
          <label>人格的特徴</label>
        </div>
        <div className="BackgroundItem">
          <textarea id="Background2"></textarea>
          <label>尊ぶもの</label>
        </div>
        <div className="BackgroundItem">
          <textarea id="Background3"></textarea>
          <label>関わり深いもの</label>
        </div>
        <div className="BackgroundItem Bottom">
          <textarea id="Background4"></textarea>
          <label>弱み</label>
        </div>

      </div>
    </div>

  );
}

export default Background;
