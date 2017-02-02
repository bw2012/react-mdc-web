import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  temporary: PropTypes.bool,
};

const DrawerContent = ({ className, children, temporary, ...otherProps }) => {
  const childs = React.Children.map(children, child => React.cloneElement(child, { temporary }));
  return (
    <div
      className={classnames(
        'mdc-temporary-drawer__content',
        'mdc-list-group',
        className,
      )}
      {...otherProps}
    >
      {childs}
    </div>
  );
};
DrawerContent.propTypes = propTypes;
export default DrawerContent;
