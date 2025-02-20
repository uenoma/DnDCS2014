import './Sheet2.css';
import Sheet2Header from './Sheet2Header'
import Appearance from './Appearance'
import { useEffect } from 'react';
import Backstory from './Backstory';
import SpeciesTraits from './SpeciesTraits';
import Treasure from './Treasure';
import Organization from './Organization';


function Sheet2(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);

  return (
    <div className="Sheet2">
      <Sheet2Header data={props.data}></Sheet2Header>
      <div className="Sheet2Body Row">
        <div className="Sheet2Left">
          <Appearance data={props.data}></Appearance>
          <Backstory data={props.data}></Backstory>
        </div>
        <div className="Sheet2Right">
          <Organization data={props.data}></Organization>
          <SpeciesTraits data={props.data}></SpeciesTraits>
          <Treasure data={props.data}></Treasure>
        </div>
      </div>
    </div>
  );
}

export default Sheet2;
