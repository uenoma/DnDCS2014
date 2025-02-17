import './SpeciesTraits.css';
import { useEffect } from 'react';

function SpeciesTraits(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('species_traits').value = props.data.species_traits;
    }
  }, [props]);

  return (
    <div className="SpeciesTraits">
      <div className="SpeciesTraitsContent">
        <textarea id="species_traits"></textarea>
      </div>
      <div className="SpeciesTraitsTitle">
        <label>その他の特徴</label>
      </div>

    </div>
  );
}

export default SpeciesTraits;


