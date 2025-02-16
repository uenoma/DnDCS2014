import './Proficiency.css';
import { useState, useEffect } from 'react';

function Proficiency(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById("proficiency").value = props.data.proficiency.text;
    }
  }, [props]);


  return (
    <div className="Proficiency Col">
      <textarea id="proficiency"></textarea>
      <label>その他の習熟と言語</label>
    </div>
  );
}

export default Proficiency;
