import React from 'react';
import './MissionVision.scss';
import { useTranslation } from 'react-i18next';

const MissionVision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mission-vision container">
      <header className="mission-vision__header">
        <h2>{t('our_mission_vision', { defaultValue: 'Our Mission, Vision & Values' })}</h2>
        <p>{t('mission_vision_intro', {
          defaultValue: 'We are committed to delivering exceptional care through our core principles.',
        })}</p>
      </header>
      <div className="mission-vision__cards">
        <div className="mission-vision__card">
          <h3>{t('mission', { defaultValue: 'Mission' })}</h3>
          <p>{t('mission_val', { defaultValue: 'To provide personalized, continuous, and efficient care, focusing on the individual with mutual respect and collaboration. We are passionate about what we do.' })}</p>
        </div>
        <div className="mission-vision__card">
          <h3>{t('vision', { defaultValue: 'Vision' })}</h3>
          <p>{t('vision_val', { defaultValue: 'To be the team of professionals you choose for yourself or your family, delivering high-quality care with continuous improvement.' })}</p>
        </div>
        <div className="mission-vision__card">
          <h3>{t('values', { defaultValue: 'Values' })}</h3>
          <p>{t('values_val', { defaultValue: 'We value the commitment to care as a lifestyle, emphasizing continuous training and excellence in service.' })}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
