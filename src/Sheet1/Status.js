import './Status.css';
import { useState, useEffect } from 'react';

function Status(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById('StatusHPCurrent').value = props.data.hp.value;
      document.getElementById('StatusHPTemp').value = props.data.hp.temp;
      document.getElementById('StatusHPMax').value = props.data.hp.max;
      document.getElementById('StatusHitDiceSpent').value = props.data.hp.hit_dice_spent;
      document.getElementById('StatusHitDiceMax').value = props.data.hp.hit_dice;
      if (props.data.death_saves) {
        document.getElementById('DeathSavesSuccess1').checked = props.data.death_saves.successes[0];
        document.getElementById('DeathSavesSuccess2').checked = props.data.death_saves.successes[1];
        document.getElementById('DeathSavesSuccess3').checked = props.data.death_saves.successes[2];
        document.getElementById('DeathSavesFailure1').checked = props.data.death_saves.failures[0];
        document.getElementById('DeathSavesFailure2').checked = props.data.death_saves.failures[1];
        document.getElementById('DeathSavesFailure3').checked = props.data.death_saves.failures[2];
      }
    }
  }, [props]);


  return (
    <div className="Status Col">
      <div className="StatusItems">
        <div className="StatusItem ac">
          <input></input>
          <label>アーマークラス<br></br>(AC)</label>
        </div>
        <div className="StatusItem">
          <input></input>
          <label>イニシアチブ</label>
        </div>
        <div className="StatusItem">
          <input></input>
          <label>移動速度</label>
        </div>
      </div>

      <div className="HitPointSet">
        <div className="HitPointSetItem Upper">
          <div className="HitPointMax"><label>最大ヒット・ポイント</label><input id="StatusHPMax"></input></div>
          <textarea id="StatusHPCurrent">
          </textarea>
          <label>現在ヒット・ポイント</label>
        </div>
        <div className="HitPointSetItem Lower">
          <textarea id="StatusHPTemp">
          </textarea>
          <label>一時的ヒット・ポイント</label>
        </div>
      </div>
      <div className="StatusLowerItemSet">
        <div className="StatusLowerItem">
          <div className="BorderBottom">
            <label>計</label><input className="StatusHitDice"></input>
          </div>
          <textarea className="StatusHitDiceSpent"></textarea>
          <label>ヒットダイス</label>
        </div>
        <div className="StatusLowerItem DeathSave">
          <div>
            <label>成功</label>
            <input type="checkbox" id="DeathSavesSuccess1"></input>
            <input type="checkbox" id="DeathSavesSuccess2"></input>
            <input type="checkbox" id="DeathSavesSuccess3"></input>
          </div>
          <div>
            <label>失敗</label>
            <input type="checkbox" id="DeathSavesFailure1"></input>
            <input type="checkbox" id="DeathSavesFailure2"></input>
            <input type="checkbox" id="DeathSavesFailure3"></input>
          </div>
          <label>死亡セーヴ</label>
        </div>
      </div>

    </div>
  );
}

export default Status;
