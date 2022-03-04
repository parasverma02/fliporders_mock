/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import AccordionContentItem from './AccordionContentItem';

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`${'accordion-container'} ${active ? 'active' : ''}`}
    >
      <div className="accordion-heading">
        {active ? (
          <img src={require('../../../../Assets/minus-icons-01.png')} alt="" />
        ) : (
          <img src={require('../../../../Assets/plus-icon-01.png')} alt="" />
        )}

        <h2>{title}</h2>
      </div>
      {content && content.length > 0 && (
        <div className="accordion-content">
          {content
            && content.length > 0
            && content.map((item) => <AccordionContentItem png={item.png} title={item.title} />)}
        </div>
      )}
    </div>
  );
};

export default Accordion;
