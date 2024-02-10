import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from './Checkbox';
import styles from './Tasks.module.css';
import { Trash } from '@phosphor-icons/react';

interface tasksProps {
  content: string;
  isComplete?: boolean;
  task: [{ id: uuidv4; content: string; isComplete: boolean }];
}

export function Task({
  content,
  isComplete,
  onTaskDelete,
  takingBoolean,
  id,
}: tasksProps) {
  function handleDeleteTask() {
    onTaskDelete(id);
  }

  return (
    <div className={styles.addedTask}>
      <Checkbox
        isComplete={isComplete}
        taskId={id}
        takingBoolean={takingBoolean}
      />
      <p className={isComplete ? styles.sublinedTasks : styles.contentStandard}>
        {content}
      </p>
      <Trash onClick={handleDeleteTask} size={23} />
    </div>
  );
}
