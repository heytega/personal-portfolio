import React from 'react';
import Style from './PageTag.module.css';

const PageTag = ({ icon, tag }) => {
  return (
    <div className={Style.pageTagContainer}>
      <i class={`fa-solid ${icon}`}></i>
      <p className={Style.tag}>{tag}</p>
    </div>
  );
};

export default PageTag;
