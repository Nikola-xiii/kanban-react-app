import React from 'react';
import classnames from 'classnames';

const Editable = ({editing, value, onEdit, className, ...props}) => {
  if(editing) {
    return <Edit
      className={className}
      value={value}
      onEdit={onEdit}
      {...props} />;
  }

  return <span className={classnames('value', className)} {...props}>
    {value}
  </span>;
};

Editable.propTypes = {
  value: React.PropTypes.string,
  editing: React.PropTypes.bool,
  onEdit: React.PropTypes.func.isRequired
};

Editable.defaultProps = {
  value: '',
  editing: false,
  onEdit: () => {}
};

const Edit = ({className, value, onEdit = () => {}, ...props}) => {
  const checkEnter = e => e.key === 'Enter' && finishEdit(e);
  const finishEdit = e => onEdit(e.target.value);

  return <input
    type="text"
    className={classnames('edit', className)}
    autoFocus={true}
    defaultValue={value}
    onBlur={finishEdit}
    onKeyPress={checkEnter}
    {...props} />;
}

export default Editable;
