import React, { PropTypes } from 'react';
import classnames from 'classnames';
import isDefined from '../utils/isDefined';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

const ROOT = 'mdc-toolbar';

const Toolbar = ({ className, title, children, ...otherProps }) => (
  <header className={classnames(ROOT, className)} >
    { isDefined(title) &&
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
        <i className="material-icons">menu</i>
        <span className="mdc-toolbar__title">{title}</span>
      </section>
    }

    {children}
  </header>
);
Toolbar.propTypes = propTypes;
export default Toolbar;
