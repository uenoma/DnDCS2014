import './Sheet1.css';
import Sheet1Header from './Sheet1Header';
import Ability from './Ability';
import Proficiency from './Proficiency';
import Status from './Status';
import Weapon from './Weapon';
import { useState, useEffect } from 'react';

function Sheet1(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);

  return (
    <div className="Sheet1">
      <Sheet1Header data={props.data}></Sheet1Header>
      <div className="Sheet1Body Row">
        <div className="Sheet1Col Col">
          <Ability data={props.data}></Ability>
          <Proficiency data={props.data}></Proficiency>
        </div>
        <div className="Sheet1Col Col">
          <Status></Status>
          <Weapon></Weapon>
          <div>Equipment</div>
        </div>
        <div className="Sheet1Col Col">
        <Status></Status>
         <div>Background</div>
          <div>Feats</div>
        </div>
      </div>

    </div>
  );
}

export default Sheet1;
