import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

import { auth, db } from '../../Config/Firebase';
import { ITab, apiTabs } from '../../Constant/Mock';
import { toast } from 'react-toastify';

const firebaseMiddleware = (
    callback: (
        userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    ) => Promise<any>
) => {
    if (!auth.currentUser) {
        console.log('not auth', auth.currentUser);
        return;
    }

    const userRef = db.collection('users').doc(auth.currentUser!.email!);
    callback(userRef)
        .then(() => toast.success('Operation succeeded'))
        .catch(() => toast.error('Operation failed'));
};
export const saveTab = (tabId: string, tab: ITab) => {
    firebaseMiddleware((userRef) => {
        const updateData = {
            [`api`]: {
                [`${tabId}`]: { ...removeUnUsedVars(tab) },
            },
        };
        return userRef.set(updateData, { merge: true });
    });
};
export const deleteTabFB = (tabId: string) => {
    firebaseMiddleware((userRef) => {
        const updateData = {
            [`api.${tabId}`]: firebase.firestore.FieldValue.delete(),
        };
        return userRef.update(updateData);
    });
};

export const getAllTabs = (email: string) => {
    return new Promise((resolve, reject) => {
        const userRef = db.collection('users').doc(email);
        userRef
            .get()
            .then((doc: any) => {
                if (doc.exists) {
                    resolve(doc.data()?.api ?? {});
                } else {
                    userRef.set({ sections: apiTabs }).then(() => resolve(apiTabs));
                }
            })
            .catch(reject);
    });
};
const removeUnUsedVars = (tab: ITab) => {
    tab.res.response = null;
    tab.res.error = null;
    tab.res.errorMessage = null;
    return tab;
};
