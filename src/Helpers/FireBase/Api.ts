import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { auth, db } from '../../Config/Firebase';
import { ITab, apiTabs } from '../../Constant/Mock';
import { toast } from 'react-toastify';
import { apiMessages } from '../../Constant/FirbaseMessages';

export const removeUnUsedVars = (tab: ITab) => {
    tab.res.response = null;
    tab.res.error = null;
    tab.res.errorMessage = null;
    tab.res.size = null;
    tab.res.time = null;
    return tab;
};

const firebaseMiddleware = (
    message: string,
    callback: (
        userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    ) => Promise<any>
) => {
    if (!auth.currentUser) {
        toast.error('Please logged in order to save your work.')
        return;
    }
    const userRef = db.collection('users').doc(auth.currentUser!.email!);
    callback(userRef)
        .then(() => toast.success(apiMessages[message]))
        .catch(() => toast.error('Operation failed'));
};

export const deleteTabByCollection = (collection: string) => {
    firebaseMiddleware("deleteCollection", async (userRef) => {
        const doc = await userRef.get();
        if (doc.exists) {
            const apiData = doc.data()?.api || {};
            const deletePromises: Promise<void>[] = [];
            Object.entries(apiData).forEach(([key, tab]: any) => {
                if (tab.collection === collection) {
                    deletePromises.push(userRef.update({
                        [`api.${key}`]: firebase.firestore.FieldValue.delete()
                    }));
                }
            });
            return Promise.all(deletePromises);
        }
    });
};
export const saveTab = (tabId: string, tab: ITab) => {
    firebaseMiddleware("addTab", (userRef) => {
        const updateData = {
            [`api`]: {
                [`${tabId}`]: { ...removeUnUsedVars(tab) },
            },
        };
        return userRef.set(updateData, { merge: true });
    });
};
export const deleteTabFB = (tabId: string) => {
    firebaseMiddleware("removeTab", (userRef) => {
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
                    userRef.set({ sections: {} }).then(() => resolve({}));
                }
            })
            .catch(reject);
    });
};
