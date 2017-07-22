import React from 'react';
import Icon from './icon'

export default class IconsRow extends React.Component {
  /**
   * Gets all the icons to be displayed. Each icon in the returned array will
   * include the url the icons should link to, the fa class, along with a title.
   *
   * @return  { Array }  - Array of objects containing icon information.
   */
  getIcons() {
    return [
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
        title: 'Twitter',
        url: 'https://twitter.com/ahycw',
        faIcon: 'fa-twitter',
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/aaron-williams-2a7902134/',
        faIcon: 'fa-linkedin',
      },
    ];
  }

  render() {
    return (
      <div className='row home-page-icons-container'>
        {this.getIcons().map((item, index) => {
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
};
