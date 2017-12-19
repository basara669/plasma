import cx from 'classnames';
import { map } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';
import OverflowMenuItem from './OverflowMenuItem.jsx';
import style from './style.scss';

const direction = { RIGHT: 'right', LEFT: 'left' };

class OverflowMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      revealed: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ revealed: true });
  }

  handleMouseLeave = () => {
    this.setState({ revealed: false });
  }

  handleClick = (event) => {
    this.setState({ revealed: false });
    this.props.onClick(event);
  }

  render() {
    const revealableStyle = cx(style.revealable, {
      [style.revealed]: this.state.revealed,
    });
    const revealableListStyle = cx(style.revealableList, {
      [style.openLeft]: this.props.openDirection &&
        this.props.openDirection === direction.LEFT,
    });
    return (
      <div
        {...getDataAttrs(this.props.data)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={style.container}
      >
        <div
          ref={(c) => { this.title = c; }}
          className={style.action}
        >
          <div className={style.overflow} />
        </div>
        <div
          ref={(c) => { this.revealable = c; }}
          className={revealableStyle}
        >
          <div className={style.revealableTopWrapper}>
            <div
              className={style.revealableTop}
            >
              <div className={style.overflow} />
            </div>
          </div>
          <ol className={revealableListStyle}>
            { map(this.props.options, (option) => {
              return (
                <OverflowMenuItem
                  key={option.key}
                  optionKey={option.key}
                  text={option.text}
                  onClick={this.handleClick}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

OverflowMenu.defaultProps = {
  options: {},
  openDirection: direction.RIGHT,
};

OverflowMenu.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
  openDirection: PropTypes.oneOf([direction.LEFT, direction.RIGHT]),
  ...getDataProps(),
};

OverflowMenu.displayName = 'Plasma@OverflowMenu';

export default OverflowMenu;