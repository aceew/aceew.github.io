import React from 'react';

const Icon = ({ url, faIcon, title }) => {
  return (
    <a href={ url } target='_blank' rel="noreferrer" className='four columns home-page-icons'>
      <i className={'text-theme-cyan fa ' + faIcon} />
        <h6>{ title }</h6>
    </a>
  )
}

export default Icon;