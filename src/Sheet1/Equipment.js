import './Equipment.css';
import { useEffect } from 'react';

function Equipment(props) {

  useEffect(() => {
    if (props.data && props.data.coins) {
      document.getElementById("Coins_cp").value = props.data.coins.cp;
      document.getElementById("Coins_sp").value = props.data.coins.sp;
      document.getElementById("Coins_gp").value = props.data.coins.gp;
      document.getElementById("Coins_ep").value = props.data.coins.ep;
      document.getElementById("Coins_pp").value = props.data.coins.pp;
    }

    if (props.data && props.data.equipment && props.data.equipment.magic_item) {
      document.getElementById("Equipment").value = props.data.equipment.value;
      document.getElementById("MagicItem1").value = props.data.equipment.magic_item[0].name;
      document.getElementById("MagicItem2").value = props.data.equipment.magic_item[1].name;
      document.getElementById("MagicItem3").value = props.data.equipment.magic_item[2].name;
      document.getElementById("MagicItemChecked1").checked = props.data.equipment.magic_item[0].checked;
      document.getElementById("MagicItemChecked2").checked = props.data.equipment.magic_item[1].checked;
      document.getElementById("MagicItemChecked3").checked = props.data.equipment.magic_item[2].checked;
    }
  }, [props]);

  return (
    <div className="Equipment">
      <div className="EquipmentTitle">
        <label>装備</label>
      </div>
      <div className="EquipmentContent Row">
        <div className="EquipmentContentItem">
          <div className="EquipmentContentCoins">
            <div className="EquipmentContentCoin"><label>CP</label><input id="Coins_cp"></input></div>
            <div className="EquipmentContentCoin"><label>SP</label><input id="Coins_sp"></input></div>
            <div className="EquipmentContentCoin"><label>EP</label><input id="Coins_ep"></input></div>
            <div className="EquipmentContentCoin"><label>GP</label><input id="Coins_gp"></input></div>
            <div className="EquipmentContentCoin"><label>PP</label><input id="Coins_pp"></input></div>
          </div>
        </div>
        <textarea id="Equipment"></textarea>
      </div>
      <div className="EquipmentMagicItems">
        <div className="EquipmentMagicItemsCaption"><label>魔法のアイテムの同調</label></div>
        <div><label><input type="checkbox" id="MagicItemChecked1"></input><input className="EquipmentMagicItemName" id="MagicItem1"></input></label></div>
        <div><label><input type="checkbox" id="MagicItemChecked2"></input><input className="EquipmentMagicItemName" id="MagicItem2"></input></label></div>
        <div><label><input type="checkbox" id="MagicItemChecked3"></input><input className="EquipmentMagicItemName" id="MagicItem3"></input></label></div>
      </div>
    </div>

  );
}

export default Equipment;
