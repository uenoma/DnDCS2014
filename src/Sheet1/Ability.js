import './Ability.css';
import { useEffect } from 'react';

function Ability(props) {

  useEffect(() => {
    if (props.data) {
      document.getElementById("score_strength").value = props.data.stats.strength;
      document.getElementById("score_dexterity").value = props.data.stats.dexterity;
      document.getElementById("score_constitution").value = props.data.stats.constitution;
      document.getElementById("score_intelligence").value = props.data.stats.intelligence;
      document.getElementById("score_wisdom").value = props.data.stats.wisdom;
      document.getElementById("score_charisma").value = props.data.stats.charisma;

      document.getElementById("strength_save_checked").checked = props.data.saving_throws.strength_save_checked;
      document.getElementById("dexterity_save_checked").checked = props.data.saving_throws.dexterity_save_checked;
      document.getElementById("constitution_save_checked").checked = props.data.saving_throws.constitution_save_checked;
      document.getElementById("intelligence_save_checked").checked = props.data.saving_throws.intelligence_save_checked;
      document.getElementById("wisdom_save_checked").checked = props.data.saving_throws.wisdom_save_checked;
      document.getElementById("charisma_save_checked").checked = props.data.saving_throws.charisma_save_checked;

      document.getElementById("strength_save").value = props.data.saving_throws.strength_save;
      document.getElementById("dexterity_save").value = props.data.saving_throws.dexterity_save;
      document.getElementById("constitution_save").value = props.data.saving_throws.constitution_save;
      document.getElementById("intelligence_save").value = props.data.saving_throws.intelligence_save;
      document.getElementById("wisdom_save").value = props.data.saving_throws.wisdom_save;
      document.getElementById("charisma_save").value = props.data.saving_throws.charisma_save;

      document.getElementById("proficiency_bonus").value = props.data.proficiency_bonus;
      document.getElementById("inspiration").checked = props.data.inspiration;

      document.getElementById("acrobatics_checked").checked = props.data.skills.acrobatics_checked;
      document.getElementById("animal_handling_checked").checked = props.data.skills.animal_handling_checked;
      document.getElementById("arcana_checked").checked = props.data.skills.arcana_checked;
      document.getElementById("athletics_checked").checked = props.data.skills.athletics_checked;
      document.getElementById("deception_checked").checked = props.data.skills.deception_checked;
      document.getElementById("history_checked").checked = props.data.skills.history_checked;
      document.getElementById("insight_checked").checked = props.data.skills.insight_checked;
      document.getElementById("intimidation_checked").checked = props.data.skills.intimidation_checked;
      document.getElementById("investigation_checked").checked = props.data.skills.investigation_checked;
      document.getElementById("medicine_checked").checked = props.data.skills.medicine_checked;
      document.getElementById("nature_checked").checked = props.data.skills.nature_checked;
      document.getElementById("perception_checked").checked = props.data.skills.perception_checked;
      document.getElementById("performance_checked").checked = props.data.skills.performance_checked;
      document.getElementById("persuasion_checked").checked = props.data.skills.persuasion_checked;
      document.getElementById("religion_checked").checked = props.data.skills.religion_checked;
      document.getElementById("sleight_of_hand_checked").checked = props.data.skills.sleight_of_hand_checked;
      document.getElementById("stealth_checked").checked = props.data.skills.stealth_checked;
      document.getElementById("survival_checked").checked = props.data.skills.survival_checked;

      document.getElementById("acrobatics").value = props.data.skills.acrobatics;
      document.getElementById("animal_handling").value = props.data.skills.animal_handling;
      document.getElementById("arcana").value = props.data.skills.arcana;
      document.getElementById("athletics").value = props.data.skills.athletics;
      document.getElementById("deception").value = props.data.skills.deception;
      document.getElementById("history").value = props.data.skills.history;
      document.getElementById("insight").value = props.data.skills.insight;
      document.getElementById("intimidation").value = props.data.skills.intimidation;
      document.getElementById("investigation").value = props.data.skills.investigation;
      document.getElementById("medicine").value = props.data.skills.medicine;
      document.getElementById("nature").value = props.data.skills.nature;
      document.getElementById("perception").value = props.data.skills.perception;
      document.getElementById("performance").value = props.data.skills.performance;
      document.getElementById("persuasion").value = props.data.skills.persuasion;
      document.getElementById("religion").value = props.data.skills.religion;
      document.getElementById("sleight_of_hand").value = props.data.skills.sleight_of_hand;
      document.getElementById("stealth").value = props.data.skills.stealth;
      document.getElementById("survival").value = props.data.skills.survival;

      document.getElementById('passive_perception').value = props.data.passive_perception;

      updateModifier();
    }
  }, [props]);

  const modifier = (score) => {

    if (!score) {
      return "";
    }
    const value = Math.floor((score - 10) / 2);
    return value > 0 ? "+" + value : value;
  }

  const changeScore = (e, type) => {
    if (document.getElementById("score_" + type)) {
      document.getElementById("modifier_" + type).value = modifier(document.getElementById("score_" + type).value);
    }
  }

  const updateModifier = () => {
    document.getElementById("modifier_strength").value = modifier(document.getElementById("score_strength").value);
    document.getElementById("modifier_dexterity").value = modifier(document.getElementById("score_dexterity").value);
    document.getElementById("modifier_constitution").value = modifier(document.getElementById("score_constitution").value);
    document.getElementById("modifier_intelligence").value = modifier(document.getElementById("score_intelligence").value);
    document.getElementById("modifier_wisdom").value = modifier(document.getElementById("score_wisdom").value);
    document.getElementById("modifier_charisma").value = modifier(document.getElementById("score_charisma").value);
  }

  const savingThrow = (type, typeJP) => {
    return (
      <div className="SavingThrowSet">
        <input id={type + "_save_checked"} type="checkbox"></input>
        <input id={type + "_save"} className="SavingThrowSetValue"></input>
        <div>
          <label>【{typeJP}】</label>
        </div>
      </div>
    )
  }

  const skill = (type, typeJP, abilityJP) => {
    return (
      <div className="SkillSet">
        <input id={type + "_checked"} type="checkbox"></input>
        <input id={type} className="SkillSetValue"></input>
        <div className="Row">
          <label>{"<"}{typeJP}{">"}</label>
          <label className="SkillAbility">【{abilityJP}】</label>
        </div>
      </div>
    )
  }

  const abilitySet = (type, typeJP) => {

    return (
      <div className="AbilitySet">
        <div className="AbilitySetModifier">
          <div><label>【{typeJP}】</label></div>
          <input id={"modifier_" + type}></input>
        </div>
        <div className="AbilitySetScore">
          <input id={"score_" + type} onChange={(e) => { changeScore(e, type) }}></input>
        </div>
      </div>
    );
  }

  return (
    <div className="Ability Col">
      <div className="Row">
        <div className="AbilitySets Col">
          {abilitySet("strength", "筋力")}
          {abilitySet("dexterity", "敏捷力")}
          {abilitySet("constitution", "耐久力")}
          {abilitySet("intelligence", "知力")}
          {abilitySet("wisdom", "判断力")}
          {abilitySet("charisma", "魅力")}
        </div>
        <div className="Col">
          <div className="AbilityInspiration Row">
            <div className="AbilityInspirationValue"><input type="checkbox" id="inspiration"></input></div>
            <div className="AbilityInspirationCaption"><label>インスピレーション</label></div>
          </div>
          <div className="AbilityInspiration Row">
            <div className="AbilityProficiencyValue"><input id="proficiency_bonus"></input></div>
            <div className="AbilityInspirationCaption"><label>習熟ボーナス</label></div>
          </div>
          <div className="SavingThrows">
            {savingThrow("strength", "筋力")}
            {savingThrow("dexterity", "敏捷力")}
            {savingThrow("constitution", "耐久力")}
            {savingThrow("intelligence", "知力")}
            {savingThrow("wisdom", "判断力")}
            {savingThrow("charisma", "魅力")}
            <label>セーヴィング・スロー</label>
          </div>
          <div className="Skills">
            {skill("intimidation", "威圧", "筋力")}
            {skill("medicine", "医術", "判断力")}
            {skill("athletics", "運動", "筋力")}
            {skill("stealth", "隠密", "敏捷力")}
            {skill("acrobatics", "軽業", "敏捷力")}
            {skill("insight", "看破", "判断力")}
            {skill("performance", "芸能", "魅力")}
            {skill("nature", "自然", "知力")}
            {skill("religion", "宗教", "知力")}
            {skill("survival", "生存", "判断力")}
            {skill("persuasion", "説得", "魅力")}
            {skill("investigation", "捜査", "知力")}
            {skill("perception", "知覚", "判断力")}
            {skill("sleight_of_hand", "手先の早業", "敏捷力")}
            {skill("animal_handling", "動物使い", "判断力")}
            {skill("deception", "ペテン", "魅力")}
            {skill("arcana", "魔法学", "知力")}
            {skill("history", "歴史", "知力")}
            <label>技能</label>
          </div>
        </div>
      </div>
      <div className="AbilityPerception Row">
        <div className="AbilityPerceptionValue"><input id="passive_perception"></input></div>
        <div className="AbilityPerceptionCaption"><label>受動【判断力】{"<"}知覚{">"}値</label></div>
      </div>
    </div>
  );
}

export default Ability;
