import { act } from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Sheet1 from './Sheet1/Sheet1'
import Sheet2 from './Sheet2/Sheet2'
import Sheet3 from './Sheet3/Sheet3'

function App() {

  const [data, setData] = useState(null)

  const spellItems = (level, count) => {

    let items = [];
    for (let index = 0; index < count; index++) {
      items.push(
        {
          checked: level == 0 ? true : document.getElementById("spell_checked" + level + "_" + index).checked,
          spell_name: document.getElementById("spell_name" + level + "_" + index).value,
        }
      );
    }

    return {
      level: level,
      slot_num: level == 0 ? 0 : document.getElementById("slot_num" + level).value,
      slot_spent: level == 0 ? 0 : document.getElementById("slot_spent" + level).value,
      spell_items: items,      
    };
  }

  const exportFile = () => {

    const saveData = {
      name: document.getElementById("Sheet1Name").value,

      level: document.getElementById('BasicInfoLevel').value,
      player_name: document.getElementById('BasicInfoPlayerName').value,
      species: document.getElementById('BasicInfoSpecies').value,
      alignment: document.getElementById('BasicInfoAlignment').value,
      xp: document.getElementById('BasicInfoXP').value,

      basic_info: {

        age: document.getElementById('BasicInfoAge').value,
        height: document.getElementById('BasicInfoHeight').value,
        weight: document.getElementById('BasicInfoWeight').value,
        eyes: document.getElementById('BasicInfoEyes').value,
        skin: document.getElementById('BasicInfoSkin').value,
        hair: document.getElementById('BasicInfoHair').value,
      },

      stats: {
        strength: document.getElementById('score_strength').value,
        dexterity: document.getElementById('score_dexterity').value,
        constitution: document.getElementById('score_constitution').value,
        intelligence: document.getElementById('score_intelligence').value,
        wisdom: document.getElementById('score_wisdom').value,
        charisma: document.getElementById('score_charisma').value,
      },

      saving_throws: {
        strength_save_checked: document.getElementById('strength_save_checked').checked,
        dexterity_save_checked: document.getElementById('dexterity_save_checked').checked,
        constitution_save_checked: document.getElementById('constitution_save_checked').checked,
        intelligence_save_checked: document.getElementById('intelligence_save_checked').checked,
        wisdom_save_checked: document.getElementById('wisdom_save_checked').checked,
        charisma_save_checked: document.getElementById('charisma_save_checked').checked,

        strength_save: document.getElementById('strength_save').value,
        dexterity_save: document.getElementById('dexterity_save').value,
        constitution_save: document.getElementById('constitution_save').value,
        intelligence_save: document.getElementById('intelligence_save').value,
        wisdom_save: document.getElementById('wisdom_save').value,
        charisma_save: document.getElementById('charisma_save').value,
      },

      proficiency_bonus: document.getElementById('proficiency_bonus').value,
      inspiration: document.getElementById('inspiration').checked,

      skills: {
        acrobatics_checked: document.getElementById('acrobatics_checked').checked,
        animal_handling_checked: document.getElementById('animal_handling_checked').checked,
        arcana_checked: document.getElementById('arcana_checked').checked,
        athletics_checked: document.getElementById('athletics_checked').checked,
        deception_checked: document.getElementById('deception_checked').checked,
        history_checked: document.getElementById('history_checked').checked,
        insight_checked: document.getElementById('insight_checked').checked,
        intimidation_checked: document.getElementById('intimidation_checked').checked,
        investigation_checked: document.getElementById('investigation_checked').checked,
        medicine_checked: document.getElementById('medicine_checked').checked,
        nature_checked: document.getElementById('nature_checked').checked,
        perception_checked: document.getElementById('perception_checked').checked,
        performance_checked: document.getElementById('performance_checked').checked,
        persuasion_checked: document.getElementById('persuasion_checked').checked,
        religion_checked: document.getElementById('religion_checked').checked,
        sleight_of_hand_checked: document.getElementById('sleight_of_hand_checked').checked,
        stealth_checked: document.getElementById('stealth_checked').checked,
        survival_checked: document.getElementById('survival_checked').checked,

        acrobatics: document.getElementById('acrobatics').value,
        animal_handling: document.getElementById('animal_handling').value,
        arcana: document.getElementById('arcana').value,
        athletics: document.getElementById('athletics').value,
        deception: document.getElementById('deception').value,
        history: document.getElementById('history').value,
        insight: document.getElementById('insight').value,
        intimidation: document.getElementById('intimidation').value,
        investigation: document.getElementById('investigation').value,
        medicine: document.getElementById('medicine').value,
        nature: document.getElementById('nature').value,
        perception: document.getElementById('perception').value,
        performance: document.getElementById('performance').value,
        persuasion: document.getElementById('persuasion').value,
        religion: document.getElementById('religion').value,
        sleight_of_hand: document.getElementById('sleight_of_hand').value,
        stealth: document.getElementById('stealth').value,
        survival: document.getElementById('survival').value,
      },

      passive_perception: document.getElementById('passive_perception').value,

      proficiency: {
        text: document.getElementById("proficiency").value,
      },

      armor_class: {
        value: document.getElementById('ArmorClassValue').value,
      },
      initiative: document.getElementById('initiative').value,
      speed: {
        walk: document.getElementById('speed').value,
      },

      hp: {
        value: document.getElementById('StatusHPCurrent').value,
        max: document.getElementById('StatusHPMax').value,
        temp: document.getElementById('StatusHPTemp').value,

        hit_dice: document.getElementById('StatusHitDiceMax').value,
        hit_dice_spent: document.getElementById('StatusHitDiceSpent').value
      },

      death_saves: {
        successes: [
          document.getElementById('DeathSavesSuccess1').checked,
          document.getElementById('DeathSavesSuccess2').checked,
          document.getElementById('DeathSavesSuccess3').checked
        ],
        failures: [
          document.getElementById('DeathSavesFailure1').checked,
          document.getElementById('DeathSavesFailure2').checked,
          document.getElementById('DeathSavesFailure3').checked
        ]
      },


      actions: [
        {
          name: document.getElementById('col_name0').value,
          attack_bonus: document.getElementById('col_attack_bonus0').value,
          damage_dice: document.getElementById('col_damage_dice0').value,
        },
        {
          name: document.getElementById('col_name1').value,
          attack_bonus: document.getElementById('col_attack_bonus1').value,
          damage_dice: document.getElementById('col_damage_dice1').value,
        },
        {
          name: document.getElementById('col_name2').value,
          attack_bonus: document.getElementById('col_attack_bonus2').value,
          damage_dice: document.getElementById('col_damage_dice2').value,
        },
        {
          name: document.getElementById('col_name3').value,
          attack_bonus: document.getElementById('col_attack_bonus3').value,
          damage_dice: document.getElementById('col_damage_dice3').value,
        },
        {
          name: document.getElementById('col_name4').value,
          attack_bonus: document.getElementById('col_attack_bonus4').value,
          damage_dice: document.getElementById('col_damage_dice4').value,
        },
      ],

      action_memo: document.getElementById('action_memo').value,

      equipment: {
        value: document.getElementById("Equipment").value,
        magic_item: [
          {
            name: document.getElementById("MagicItem1").value,
            checked: document.getElementById("MagicItemChecked1").checked,
          },
          {
            name: document.getElementById("MagicItem2").value,
            checked: document.getElementById("MagicItemChecked2").checked,
          },
          {
            name: document.getElementById("MagicItem3").value,
            checked: document.getElementById("MagicItemChecked3").checked,
          },
        ]
      },

      coins: {
        cp: document.getElementById("Coins_cp").value,
        sp: document.getElementById("Coins_sp").value,
        gp: document.getElementById("Coins_gp").value,
        ep: document.getElementById("Coins_ep").value,
        pp: document.getElementById("Coins_pp").value,
      },

      background: {
        type: document.getElementById('BasicInfoBackground').value,
        details: [
          document.getElementById("Background1").value,
          document.getElementById("Background2").value,
          document.getElementById("Background3").value,
          document.getElementById("Background4").value,
        ],
      },

      class_features: [
        document.getElementById('class_features1').value,
      ],

      appearance: {
        value: document.getElementById("Appearance").value,
        image_url: document.getElementById("ImageUrl").value,
      },

      organization: {
        symbol_name: document.getElementById("SymbolName").value,
        symbol: document.getElementById("SymbolText").value,
        image_url: document.getElementById("SymbolImageUrl").value,
        texts: [
          document.getElementById("OrganizationText1").value,
          document.getElementById("OrganizationText2").value,
        ],
      },


      backstory: document.getElementById('Backstory').value,

      species_traits: document.getElementById('species_traits').value,
      treasure: document.getElementById('Treasure').value,


      spell_class: document.getElementById('spell_class').value,
      spell_modifier: document.getElementById('spell_modifier').value,
      spell_dc: document.getElementById('spell_dc').value,
      spell_attack: document.getElementById('spell_attack').value,

      spells: [
        spellItems(0,9),
        spellItems(1,14),
        spellItems(2,13),
        spellItems(3,13),
        spellItems(4,13),
        spellItems(5,10),
        spellItems(6,9),
        spellItems(7,9),
        spellItems(8,8),
        spellItems(9,8),
      ],
      
    }

    const name = saveData.name.length > 0 ? saveData.name : "noname";
    const fileName = name + "_Lv" + saveData.level + ".json";

    const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);

  }

  const selectedFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const data = JSON.parse(reader.result);
        setData(data);
      }
    }
  }

  const handleBeforeUnload = () => {

    if (document.getElementById('autoSave').checked) {
      exportFile();
    }
  }
  
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [handleBeforeUnload])


  return (
    <div className="App">
      <div className="AppHeader">
        <div className="AppHeaderSave">
          <button onClick={(e) => { exportFile(e) }}>保存</button>
          <label className="AppHeaderAutoSave"><input type="checkbox" id="autoSave" ></input>自動保存</label>
        </div>
        <div className="AppHeaderLoad">
          <input type="file" accept=".json" onChange={(e) => { selectedFile(e) }}></input>
        </div>
      </div>
      <div className="Sheet Border">
        <div className="Content">
          <Sheet1 data={data}></Sheet1>
        </div>
      </div>
      <div className="Sheet Border">
        <div className="Content">
          <Sheet2 data={data}></Sheet2>
        </div>
      </div>
      <div className="Sheet Border">
        <div className="Content">
          <Sheet3 data={data}></Sheet3>
        </div>
      </div>
      <div className="AppFooter">
        このページはファンコンテンツ・ポリシーに沿った非公式のファンコンテンツです。ウィザーズ社の認可/許諾は得ていません。題材の一部に、ウィザーズ・オブ・ザ・コースト社の財産を含んでいます。©Wizards of the Coast LLC.
      </div>
    </div>
  );
}

export default App;
