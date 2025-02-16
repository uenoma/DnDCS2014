import { act } from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Sheet1 from './Sheet1/Sheet1'
import Sheet2 from './Sheet2/Sheet2'

function App() {

  const [data, setData] = useState(null)

  const exportFile = () => {

    const saveData = {
      name: document.getElementById("Sheet1Name").value,
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
      <div className="Sheet">
        <div className="Content">
          <Sheet1 data={data}></Sheet1>

        </div>
      </div>
      <div className="Sheet">
        <div className="Content">
          <Sheet2></Sheet2>
        </div>
      </div>
      <div className="Sheet">
        <div className="Content">
        </div>
      </div>
      <div className="AppFooter">
        このページはファンコンテンツ・ポリシーに沿った非公式のファンコンテンツです。ウィザーズ社の認可/許諾は得ていません。題材の一部に、ウィザーズ・オブ・ザ・コースト社の財産を含んでいます。©Wizards of the Coast LLC.
      </div>
    </div>
  );
}

export default App;
