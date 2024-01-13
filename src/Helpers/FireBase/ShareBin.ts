import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth, db } from '../../Config/Firebase';
import { TShareBinData } from '../../Components/ShareEditor/ShareEditorProps';
import { v4 as uuidv4 } from 'uuid';
import { getTime } from '../Time';
import { TSharedLinks } from '../../Pages/ShareBinPage/ShareBinPageProps';

const firebaseMiddlware = (callback: (userRef: any) => void) => {
  if (!auth.currentUser) {
    console.log('not auth', auth.currentUser);
    return;
  }
  const userRef = db.collection('users').doc(auth.currentUser!.email!);
  callback(userRef);
};
export const saveShareBinEntry = async (
  id: string,
  data: Omit<TShareBinData, 'code '>
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    firebaseMiddlware((userRef) => {
      const updateData = {
        [`share-bin`]: {
          [`${id}`]: {
            comment: data.comment,
            date: data.date,
            headline: data.headline,
          },
        },
      };

      userRef
        .set(updateData, { merge: true })
        .then(() => resolve())
        .catch((error: any) => reject(error));
    });
  });
};
export const getSharedEntryPerUser = async (): Promise<TSharedLinks | null> => {
  return new Promise<TSharedLinks | null>((resolve, reject) => {
    firebaseMiddlware((userRef) => {
      userRef
        .get()
        .then((doc: any) => {
          if (doc.exists) {
            const shareBinData: TSharedLinks =
              doc.data()?.['share-bin'] || null;
            resolve(shareBinData);
          } else {
            resolve(null);
          }
        })
        .catch(reject);
    });
  });
};

const generateShortId = () => {
  const fullUuid = uuidv4();
  const shortId = fullUuid.substring(0, 8);
  return shortId;
};

export const addShareBinData = (shareBinData: TShareBinData) => {
  const shortId = generateShortId();

  const shareBinCollection = db.collection('share-bin');

  const shareBinDocument = shareBinCollection.doc(shortId);
  return shareBinDocument
    .set({
      code: shareBinData.code,
      headline: shareBinData.headline,
      comment: shareBinData.comment,
      date: getTime(),
    })
    .then(() => {
      return shortId;
    })
    .catch((error) => {
      return 'Error adding share bin data: ';
    });
};
export const getSharedBinByID = (id: string): Promise<TShareBinData | null> => {
  const shareBinCollection = db.collection('share-bin');

  const shareBinDocument = shareBinCollection.doc(id);
  return shareBinDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data() as TShareBinData;
      } else {
        return null;
      }
    })
    .catch((error) => {
      throw new Error('Error getting share bin data: ' + error.message);
    });
};
