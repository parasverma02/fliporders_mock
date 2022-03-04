import React from 'react';

const LinkColumn = ({ LinkHeading, allLinks }) => (
  <div className="column-container">
    <h2>{LinkHeading}</h2>
    {allLinks
        && allLinks.length > 0
        && allLinks.map((link, index) => (
          <a key={index} href={link.value} className="single-quick-link">
            {link.title}
          </a>
        ))}
  </div>
);

export default LinkColumn;
