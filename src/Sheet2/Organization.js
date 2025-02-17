import './Organization.css';
import { useEffect } from 'react';
import Symbol from './Symbol'

function Organization(props) {

  useEffect(() => {
    if (props.data && props.data.organization) {
      document.getElementById('OrganizationText1').value = props.data.organization.texts[0];
      document.getElementById('OrganizationText2').value = props.data.organization.texts[1];
    }
  }, [props]);

  return (
    <div className="Organization">
      <div className="OrganizationContent">
        <div className="OrganizationContentItem">
          <textarea id="OrganizationText1"></textarea>
        </div>
        <div className="OrganizationContentItem Right">
          <Symbol data={props.data}></Symbol>
          <textarea id="OrganizationText2"></textarea>
        </div>
      </div>
      <div className="OrganizationTitle">
        <label>仲間や組織</label>
      </div>
    </div>
  );
}

export default Organization;
