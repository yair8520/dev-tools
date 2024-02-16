import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth, db } from '../../Config/Firebase';
import {
  TCodeSnippiest,
  TSnippiest,
} from '../../Components/CodeSnippestPage/CodeSnippestPageProps';
import { toast } from 'react-toastify';

const firebaseMiddleware = (callback: (userRef: any) => void) => {
  if (!auth.currentUser) {
    return;
  }
  const userRef = db.collection('users').doc(auth.currentUser!.email!);
  callback(userRef);
};

export const addNewSnippet = (id: string, item: TCodeSnippiest) => {
  if (!auth.currentUser) {
    toast.error('Please logged in order to save your work.');
    return;
  }
  const userRef = db.collection('users').doc(auth.currentUser!.email!);

  const updateData = {
    [`snippets.${id}`]: item,
  };
  return userRef.update(updateData);
};
export const editSnippet = (id: string, updatedItem: TCodeSnippiest) => {
  firebaseMiddleware((userRef) => {
    const updateData = {
      [`snippets.${id}`]: updatedItem,
    };
    return userRef.update(updateData);
  });
};
export const deleteSnippet = (id: string) => {
  firebaseMiddleware((userRef) => {
    const updateData = {
      [`snippets.${id}`]: firebase.firestore.FieldValue.delete(),
    };
    return userRef.update(updateData);
  });
};
export const getAllSnippets = (email: string): Promise<TSnippiest> => {
  return new Promise((resolve, reject) => {
    const userRef = db.collection('users').doc(email);
    userRef
      .get()
      .then((doc: any) => {
        if (doc.exists) {
          const snippets = doc.data()?.snippets || {};
          resolve(snippets);
        } else {
          const initialSections = {};
          userRef
            .set({ snippets: initialSections })
            .then(() => resolve(initialSections))
            .catch(reject);
        }
      })
      .catch(reject);
  });
};
