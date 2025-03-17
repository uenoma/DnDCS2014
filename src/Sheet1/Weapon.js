import './Weapon.css';
import { useEffect } from 'react';

function Weapon(props) {

  useEffect(() => {
    if (props.data && props.data.actions) {
      props.data.actions.forEach((action, index) => {
        if (index < 5) {
          document.getElementById('col_name' + index).value = action.name;
          document.getElementById('col_attack_bonus' + index).value = action.attack_bonus;
          document.getElementById('col_damage_dice' + index).value = action.damage_dice;
        }
        index++;
      });
      document.getElementById('action_memo').value = props.data.action_memo;

    }
  }, [props]);

  const action = (index) => {
    const action = (
      <tr>
        <td className="WeaponTableName"><input id={"col_name" + index}></input></td>
        <td className="WeaponTableBonus"><input id={"col_attack_bonus" + index}></input></td>
        <td className="WeaponTableDamage"><input id={"col_damage_dice" + index}></input></td>
      </tr>
    );

    return (action);
  }

  return (
    <div className="Weapon">
      <table className="WeaponTable">
        <tbody>
          <tr>
            <th className="WeaponTableName"><label>名前</label></th>
            <th className="WeaponTableBonus"><label>攻撃ボーナス</label></th>
            <th className="WeaponTableDamage"><label>ダメージ/種別</label></th>
          </tr>
          {action(0)}
          {action(1)}
          {action(2)}
          {action(3)}
          {action(4)}
        </tbody>
      </table>
      <textarea className="WeaponMemo" id="action_memo"></textarea>
      <div className="WeaponTitle">
        <label>攻撃＆呪文</label>
      </div>

    </div>
  );
}

export default Weapon;
