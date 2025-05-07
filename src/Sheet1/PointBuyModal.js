import './PointBuyModal.css';
import { useEffect } from 'react';

function PointBuyModal(props) {

  const resetValues = (e) => {
    document.getElementById("strength").value = 8;
    document.getElementById("dexterity").value = 8;
    document.getElementById("constitution").value = 8;
    document.getElementById("intelligence").value = 8;
    document.getElementById("wisdom").value = 8;
    document.getElementById("charisma").value = 8;

    document.getElementById("strength_race").value = 0;
    document.getElementById("dexterity_race").value = 0;
    document.getElementById("constitution_race").value = 0;
    document.getElementById("intelligence_race").value = 0;
    document.getElementById("wisdom_race").value = 0;
    document.getElementById("charisma_race").value = 0;

    document.getElementById("strength_other").value = 0;
    document.getElementById("dexterity_other").value = 0;
    document.getElementById("constitution_other").value = 0;
    document.getElementById("intelligence_other").value = 0;
    document.getElementById("wisdom_other").value = 0;
    document.getElementById("charisma_other").value = 0;

    document.getElementById("strength_total").value = 8;
    document.getElementById("dexterity_total").value = 8;
    document.getElementById("constitution_total").value = 8;
    document.getElementById("intelligence_total").value = 8;
    document.getElementById("wisdom_total").value = 8;
    document.getElementById("charisma_total").value = 8;

  }

  const closeModal = (e, needSave) => {

    if (needSave) {
      if (!window.confirm("能力値をキャラクターシートに反映しますか？")) {
        return;
      }
    }

    const values = {
      strength: Number(document.getElementById("strength_total").value),
      dexterity: Number(document.getElementById("dexterity_total").value),
      constitution: Number(document.getElementById("constitution_total").value),
      intelligence: Number(document.getElementById("intelligence_total").value),
      wisdom: Number(document.getElementById("wisdom_total").value),
      charisma: Number(document.getElementById("charisma_total").value),
    }
    props.onClose(needSave, values);
  }


  const costByPoint = (point) => {
    if (point > 15) {
      return 27;
    }

    const costTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 7, 9];
    return costTable[point]
  }

  const updateTotal = (prefix, value) => {
    document.getElementById(prefix + "_total").value = value + Number(document.getElementById(prefix + "_race").value) + Number(document.getElementById(prefix + "_other").value)
  }

  const updatePoint = (e) => {
    const strength = Number(document.getElementById("strength").value);
    const dexterity = Number(document.getElementById("dexterity").value);
    const constitution = Number(document.getElementById("constitution").value);
    const intelligence = Number(document.getElementById("intelligence").value);
    const wisdom = Number(document.getElementById("wisdom").value);
    const charisma = Number(document.getElementById("charisma").value);

    let total = 0;
    total += costByPoint(strength);
    total += costByPoint(dexterity);
    total += costByPoint(constitution);
    total += costByPoint(intelligence);
    total += costByPoint(wisdom);
    total += costByPoint(charisma);

    document.getElementById("pointValue").value = (27 - total).toString();
    if ((27 - total) < 0) {
      document.getElementById("pointValue").classList.add("PointBuyModalPointValueMinus");
    } else {
      document.getElementById("pointValue").classList.remove("PointBuyModalPointValueMinus");
    }

    updateTotal("strength", strength);
    updateTotal("dexterity", dexterity);
    updateTotal("constitution", constitution);
    updateTotal("intelligence", intelligence);
    updateTotal("wisdom", wisdom);
    updateTotal("charisma", charisma);

  }

  const abilitySet = (id, name) => {
    return (
      <tr className="PointBuyModalAbility">
        <td>{name}</td>
        <td>
          <input type="number" id={id} min="8" max="15" onChange={(e) => updatePoint(e)}></input>
        </td>
        <td>
          <input type="number" id={id + "_race"} min="-1" max="5" onChange={(e) => updatePoint(e)}></input>
        </td>
        <td>
          <input type="number" id={id + "_other"} min="-1" max="5" onChange={(e) => updatePoint(e)}></input>
        </td>
        <td>
          <input id={id + "_total"} readOnly className="PointBuyModalAbilityTotal"></input>
        </td>
      </tr>
    );
  }

  useEffect(() => {
    resetValues();
  }, [])

  
  if (!props.show) {
    return null;
  }

  return (
    <div className="PointBuyModal">

      <div className="PointBuyModalPoint">
        <label>残ポイント</label>
        <input id="pointValue" value="27" readOnly></input>
      </div>

      <div>
        <table className="PointBuyModalCostTable">
          <tbody>
            <tr>
              <th>割振</th>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
            </tr>
            <tr>
              <th>コスト</th>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>7</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="PointBuyModalTable">
        <tbody>
          <tr>
            <th>能力</th>
            <th>割振</th>
            <th>種族修正</th>
            <th>その他</th>
            <th>能力値</th>
          </tr>
          {abilitySet("strength", "筋力")}
          {abilitySet("dexterity", "敏捷力")}
          {abilitySet("constitution", "耐久力")}
          {abilitySet("intelligence", "知力")}
          {abilitySet("wisdom", "判断力")}
          {abilitySet("charisma", "魅力")}
        </tbody>
      </table>

      <div className="PointBuyModalButtons">
        <button onClick={(e) => resetValues(e)}>リセット</button>
        <button onClick={(e) => closeModal(e, false)}>取り消し</button>
        <button onClick={(e) => closeModal(e, true)}>決定</button>
      </div>
    </div>
  );

}

export default PointBuyModal;
