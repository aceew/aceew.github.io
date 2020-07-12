import React from 'react';
import Icon from './icon';

const icons = [
  {
    title: 'Github',
    url: 'https://github.com/aceew',
    faIcon: 'fa-github-alt',
  },
  {
    title: 'Medium',
    url: 'https://medium.com/@aceew',
    faIcon: 'fa-medium',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aaron-williams-2a7902134/',
    faIcon: 'fa-linkedin',
  },
]

const IconsRow = () => {
  return (
    <div className='row home-page-icons-container'>
      {icons.map((item, index) => {
        return (
          <Icon
            key={index}
            url={item.url}
            title={item.title}
            faIcon={item.faIcon} />
        );
      })}
    </div>
  );
}

export default IconsRow;