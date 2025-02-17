import './Features.css';
import { useEffect } from 'react';

function Features(props) {

  useEffect(() => {
    if (props.data && props.data.class_features) {
      document.getElementById('class_features1').value = props.data.class_features[0];
    }
  }, [props]);

  return (
    <div className="Features">
      <div className="FeaturesItem">
        <textarea id="class_features1"></textarea>
        <label>特徴</label>
      </div>
    </div>

  );
}

export default Features;
