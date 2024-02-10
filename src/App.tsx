import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Header } from './components/Header';
import { Task } from './components/Task';
import styles from './App.module.css';

import { PlusCircle } from '@phosphor-icons/react';
import { EmptyScreen } from './components/EmptyScreen';

export function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();
    const newContent = newTaskText;

    if (newContent.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        content: newContent,
        isComplete: false,
      };

      // Adicione a nova tarefa ao estado de tasks
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  }

  function handleNewTaskChanged(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    const newContent = event.target.value;
    setNewTaskText(newContent);
  }

  // tenho que fazer meu isComplete entender que ao mudar ele no app, mude na msm hora no console.log
  function countedCompletedTasks() {
    const completedTasks = tasks.filter((task) => task.isComplete);
    const numCompletedTasks = completedTasks.length;

    const MadeTasks = tasks.filter((task) => task.id);
    const numMadeTasks = MadeTasks.length;

    return { numCompletedTasks, numMadeTasks };
  }

  const { numCompletedTasks, numMadeTasks } = countedCompletedTasks();

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  // fazer uma função para pegar a info do estado e transformar para fazer com que meu isComplete das minhas
  // novas tasks se altere

  function takingTheBoolean(taskId) {
    const newTaskComplete = tasks.map((task) => {
      if (task.id == taskId) {
        if (task.isComplete == false) {
          task.isComplete = true;
        } else {
          task.isComplete = false;
        }
      }
      return task;
    });
    console.log(newTaskComplete);
    setTasks(newTaskComplete);
  }

  return (
    <>
      <Header />
      <form onSubmit={handleCreateNewTask}>
        <div className={styles.newTask}>
          <input
            name="wrotetask"
            list="none"
            className={styles.writeTask}
            value={newTaskText}
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChanged}
            required
          />

          <button type="submit" className={styles.addTask}>
            <span>Criar</span>
            <PlusCircle />
          </button>
        </div>
      </form>
      <section className={styles.tasks}>
        <header>
          <div className={styles.createdTasks}>
            <p>Tarefas criadas</p>
            <span>{numMadeTasks}</span>
          </div>

          <div className={styles.completedTasks}>
            <p>Concluídas</p>
            {numMadeTasks == 0 && (
              <span className={styles.completedTasks}>{numCompletedTasks}</span>
            )}

            {numMadeTasks > 0 && (
              <span className={styles.concludedTasks}>
                {numCompletedTasks} de {numMadeTasks}
              </span>
            )}
          </div>
        </header>

        {numMadeTasks == 0 && <EmptyScreen />}

        <section className={styles.listOfTasks}>
          {tasks.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                content={task.content}
                isComplete={task.isComplete}
                onTaskDelete={deleteTask}
                takingBoolean={takingTheBoolean}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
