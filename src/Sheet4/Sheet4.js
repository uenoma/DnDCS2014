import './Sheet4.css';

import { useEffect, useState } from 'react';


function Sheet4(props) {

  const [displayCard, setDisplayCard] = useState(false);

  useEffect(() => {
    if (props.data) {
      document.getElementById('Sheet4Memo1').value = props.data.memos?.memo1 || "";
      document.getElementById('Sheet4Memo2').value = props.data.memos?.memo2 || "";
      document.getElementById('Sheet4Memo3').value = props.data.memos?.memo3 || ""; 
    }
  }, [props]);

  return (
    <div className="Sheet4">
      <div className="Sheet4Body Row">
        <div>
          <div className="Sheet4RowTextArea">
            <textarea id="Sheet4Memo1"></textarea>
            <div className="Sheet4RowTitle">
              <label>自由メモ１</label>
            </div>
          </div>
        </div>
        <div>
          <div className="Sheet4RowTextArea">
            <textarea id="Sheet4Memo2"></textarea>
            <div className="Sheet4RowTitle">
              <label>自由メモ２</label>
            </div>
          </div>
        </div>
        <div>
          <div className="Sheet4RowTextArea">
            <textarea id="Sheet4Memo3"></textarea>
            <div className="Sheet4RowTitle">
              <label>自由メモ３</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sheet4;
