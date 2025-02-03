import React from 'react';
import './AdminDashboard.scss';
import { useTranslation } from 'react-i18next';

const AdminDashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="admin-dashboard container">
      <h2>{t('admin_panel')}</h2>
      <div className="admin-dashboard__sections">
        <div className="admin-dashboard__card">
          <h3>{t('admin_products')}</h3>
          <p>{t('manage_products')}</p>
          <button className="btn-primary">{t('go_to_products')}</button>
        </div>
        <div className="admin-dashboard__card">
          <h3>{t('admin_orders')}</h3>
          <p>{t('manage_orders')}</p>
          <button className="btn-primary">{t('go_to_orders')}</button>
        </div>
        <div className="admin-dashboard__card">
          <h3>{t('admin_users')}</h3>
          <p>{t('manage_users')}</p>
          <button className="btn-primary">{t('go_to_users')}</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
