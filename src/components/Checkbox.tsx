import { useState } from 'react';
import styles from './Checkbox.module.css';

interface checkBoxProps {
  checked: (isComplete: boolean) => void;
}

export const Checkbox = ({
  checked,
  takingBoolean,
  taskId,
  isComplete,
}: checkBoxProps) => {
  const handleCheckboxChange = () => {
    takingBoolean(taskId);
  };

  return (
    <div className={styles.checkboxcontainer}>
      <input
        type="checkbox"
        id="roundcheckbox"
        className={styles.roundcheckbox}
        onClick={handleCheckboxChange}
      />
      <label className={styles.checkLabel} htmlFor="roundcheckbox">
        {isComplete}
      </label>
    </div>
  );
};
