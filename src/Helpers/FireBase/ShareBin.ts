import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { db } from '../../Config/Firebase';
import { TShareBinData } from '../../Components/ShareEditor/ShareEditorProps';
import { v4 as uuidv4 } from 'uuid';

// Function to generate a short ID from a UUID
const generateShortId = () => {
  const fullUuid = uuidv4();
  // Truncate the UUID to get a shorter ID
  const shortId = fullUuid.substring(0, 8); // You can adjust the length as needed
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
    })
    .then(() => {
      return shortId;
    })
    .catch((error) => {
      return 'Error adding share bin data: ';
    });
};
