import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth, db } from '../../Config/Firebase';
import { ITodoList, TodoItem } from '../../Pages/ToDoPage/Todo';


const firebaseMiddlware = (callback: (userRef: any) => void) => {
  if (!auth.currentUser) {
    console.log("not auth", auth.currentUser)
    return;
  }
  const userRef = db.collection('users').doc(auth.currentUser!.email!);
  callback(userRef);
};

export const addTask = (taskId: string, task: TodoItem) => {
  firebaseMiddlware((userRef) => {
    const updateData = {
      [`tasks`]: {
        [`${taskId}`]: { ...task }
      },
    };
    return userRef.set(updateData, { merge: true });
  });
};
export const sendList = (list: ITodoList) => {
  firebaseMiddlware((userRef) => {
    const updateData = {
      tasks: { ...list }
    };
    return userRef.set(updateData, { merge: true });
  });
};

export const deleteTask = (taskId: string) => {
  firebaseMiddlware((userRef) => {
    const updateData = {
      [`tasks.${taskId}`]: firebase.firestore.FieldValue.delete(),
    };
    return userRef.update(updateData);
  });
};

export const addToFav = (taskId: string, favValue: boolean) => {
  firebaseMiddlware((userRef) => {
    const updateData = {
      [`tasks.${taskId}.favorite`]: favValue,
    };
    return userRef.update(updateData);
  });
};
export const addToComplete = (taskId: string, completedValue: boolean) => {
  firebaseMiddlware((userRef) => {
    const updateData = {
      [`tasks.${taskId}.completed`]: completedValue,
    };
    return userRef.update(updateData);
  });
};
export const getAllTasks = (email: string) => {
  return new Promise((resolve, reject) => {
    const userRef = db.collection('users').doc(email);
    userRef.get().then((doc: any) => {
      if (doc.exists) {
        resolve(doc.data()?.tasks);
      } else {
        const initialSections = {};
        userRef.set({ sections: initialSections }).then(() => resolve(initialSections));
      }
    }).catch(reject);

  });
};
