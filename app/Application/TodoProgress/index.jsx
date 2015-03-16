import React from 'react';
import classnames from 'classnames';

require('./style.sass');

export default class TodoProgress extends React.Component {
  render() {
    const classNames = classnames({
      TodoProgress: true,
      'TodoProgress--completed': this.props.progressPercentage === 100,
    });

    return <div className={classNames} style={{width: `${this.props.progressPercentage}%`}} />;
  }
}

TodoProgress.propTypes = {
  progressPercentage: React.PropTypes.number.isRequired,
}
