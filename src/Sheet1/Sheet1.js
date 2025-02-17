import './Sheet1.css';
import Sheet1Header from './Sheet1Header';
import Ability from './Ability';
import Proficiency from './Proficiency';
import Status from './Status';
import Weapon from './Weapon';
import Equipment from './Equipment';
import Background from './Background';
import Features from './Features';
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
          <Status data={props.data}></Status>
          <Weapon data={props.data}></Weapon>
          <Equipment data={props.data}></Equipment>
        </div>
        <div className="Sheet1Col Col">
          <Background data={props.data}></Background>
          <Features data={props.data}></Features>
        </div>
      </div>

    </div>
  );
}

export default Sheet1;
