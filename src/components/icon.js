import React from 'react';

export default class Icon extends React.Component {
  render() {
    return (
        <a href={this.props.url} target='_blank' className='three columns home-page-icons'>
          <i className={'text-theme-cyan fa ' + this.props.faIcon} />
          <h6>{this.props.title}</h6>
        </a>
    );
  }
};
