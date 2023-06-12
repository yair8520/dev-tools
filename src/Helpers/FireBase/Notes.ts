import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth, db } from '../../Config/Firebase';
import { ISection, Inote } from '../../Components/Notes/NotesList/helper';

export const handleGoogleLogin = () => {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        resolve(user);
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        reject(error);
      });
  });
};
export const saveUserSections = (userId: string, sections: ISection) => {
  const userRef = db.collection('users').doc(userId);
  return userRef.set({ sections });
};
export const getUserSections = (userId: string) => {
  const userRef = db.collection('users').doc(userId);
  return new Promise((resolve, reject) => {
    userRef.get().then((doc) => {
      if (doc.exists) {
        resolve(doc.data()?.sections);
      } else {
        const initialSections = {};
        userRef.set({ sections: initialSections }).then(() => initialSections);
        resolve(initialSections);
      }
    });
  });
};
export const updateNote = (
  userId: string,
  sectionId: string,
  noteId: string,
  updatedNote: Inote
) => {
  const userRef = db.collection('users').doc(userId);

  return userRef.update({
    [`sections.${sectionId}.notes.${noteId}`]: updatedNote,
  });
};
export const addNote = (userId: string, sectionId: string, newNote: Inote) => {
  const userRef = db.collection('users').doc(userId);
  const updateData = {
    [`sections`]: {
      [`${sectionId}`]: {
        notes: newNote,
      },
    },
  };
  return userRef.set(updateData, { merge: true });
};
export const editNote = (
  userId: string,
  sectionId: string,
  noteId: string,
  newText: string
) => {
  const userRef = db.collection('users').doc(userId);
  const updateData = {
    [`sections`]: {
      [`${sectionId}`]: {
        notes: {
          [`${noteId}`]: {
            text: newText,
          },
        },
      },
    },
  };
  return userRef.set(updateData, { merge: true });
};

export const addSection = (
  userId: string,
  title: string,
  sectionId: string
) => {
  const userRef = db.collection('users').doc(userId);
  const updateData = {
    [`sections`]: {
      [`${sectionId}`]: {
        subject: title,
        notes: {},
      },
    } as ISection,
  };
  return userRef.set(updateData, { merge: true });
};
export const renameSection = (
  userId: string,
  newtitle: string,
  sectionId: string
) => {
  const userRef = db.collection('users').doc(userId);
  const updateData = {
    [`sections`]: {
      [`${sectionId}`]: {
        subject: newtitle,
      },
    } as ISection,
  };
  return userRef.set(updateData, { merge: true });
};
export const removeSection = (userId: string, sectionId: string) => {
  const userRef = db.collection('users').doc(userId);
  const updateData = {
    [`sections.${sectionId}`]: firebase.firestore.FieldValue.delete(),
  };
  return userRef.update(updateData);
};
export const removeNote = (
  userId: string,
  sectionId: string,
  noteId: string
) => {
  const userRef = db.collection('users').doc(userId);
  const updateData = {
    [`sections.${sectionId}.notes.${noteId}`]:
      firebase.firestore.FieldValue.delete(),
  };
  return userRef.update(updateData);
};
