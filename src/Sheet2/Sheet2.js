import './Sheet2.css';
import Sheet2Header from './Sheet2Header'
import { useState, useEffect } from 'react';

function Sheet2(props) {

  useEffect(() => {
    if (props.data) {
    }
  }, [props]);

  return (
    <div className="Sheet2">
      <Sheet2Header data={props.data}></Sheet2Header>
    </div>
  );
}

export default Sheet2;
