import './Spells.css';
import { useEffect } from 'react';

function Spells(props) {

  useEffect(() => {
    if (props.data && props.data.spells) {

      const spellItem = props.data.spells[Number(props.spellLevel)];
      if (props.spellLevel !== 0) {
        document.getElementById('slot_num' + props.spellLevel).value = spellItem.slot_num;
        document.getElementById('slot_spent' + props.spellLevel).value = spellItem.slot_spent;
      }

      spellItem.spell_items.forEach((item, index) => {
        document.getElementById("spell_name" + props.spellLevel + "_" + index).value = item.spell_name;
        if (props.spellLevel !== 0) {
          document.getElementById("spell_checked" + props.spellLevel + "_" + index).checked = item.checked;
        }
        index++;
      });
    }
  }, [props]);

  const header = () => {
    if (props.spellLevel !== 0) {
      return (
        <div className="SpellsHeader">
          <div className="SpellsHeaderLevel">{props.spellLevel}</div>
          <div className="SpellsHeaderSlot"><input id={"slot_num" + props.spellLevel}></input></div>
          <div className="SpellsHeaderSpent"><input id={"slot_spent" + props.spellLevel}></input></div>
        </div>
      );
    } else {
      return (
        <div className="SpellsHeader">
          <div className="SpellsHeaderLevel">{props.spellLevel}</div>
          <div className="SpellsHeaderCantrip"><label>初級呪文</label></div>
        </div>
      );
    }
  }

  const content = () => {

    let items = [];
    for (let index = 0; index < props.count; index++) {

      let check = props.spellLevel !== 0 ? <input type="checkbox" id={"spell_checked" + props.spellLevel + "_" + index}></input> : "";

      items.push(
        <div className="SpellsItem" key={"spell_name" + props.spellLevel + "_" + index}>
          {check}
          <div className="SpellsItemName"><input id={"spell_name" + props.spellLevel + "_" + index}></input></div>
        </div>
      );
    }

    return items;
  }

  return (
    <div className="Spells">
      {header()}
      {content()}
    </div>
  );
}

export default Spells;
