/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import LinkColumn from './LinkColumn';
import '../../CSS/QuickLinks.css';

const QuickLink = () => {
  const quickLinks = [
    {
      LinkHeading: 'Quick Links',
      allLinks: [
        { title: 'Company', value: '#' },
        { title: 'Products', value: '#' },
        { title: 'Events', value: '#' },
        { title: 'Resources', value: '#' },
        { title: 'API', value: '#' },
      ],
    },
    {
      LinkHeading: 'Quick Links',
      allLinks: [
        { title: 'Company', value: '#' },
        { title: 'Products', value: '#' },
        { title: 'Events', value: '#' },
        { title: 'Resources', value: '#' },
        { title: 'API', value: '#' },
      ],
    },
    {
      LinkHeading: 'Quick Links',
      allLinks: [
        { title: 'Company', value: '#' },
        { title: 'Products', value: '#' },
        { title: 'Events', value: '#' },
        { title: 'Resources', value: '#' },
        { title: 'API', value: '#' },
      ],
    },
  ];
  return (
    <div className="quick-links-main-container">
      <div className="quick-links-container">
        <div>
          {quickLinks
                        && quickLinks.length > 0
                        && quickLinks.map((links, index) => (
                          <LinkColumn
                            key={index}
                            LinkHeading={links.LinkHeading}
                            allLinks={links.allLinks}
                          />
                        ))}
          <form>
            <h2>Join Our Mailing List</h2>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <img src={require('../../../../Assets/logo-small.png')} alt="" />
      <div className="term-policy-section">
        <a href="#" className="t-p-link">
          Privacy Policy
        </a>
        <a href="#" className="t-p-link">
          Terms
        </a>
        <a href="#" className="t-p-link">
          Cookie Policy
        </a>
      </div>
    </div>
  );
};

export default QuickLink;
