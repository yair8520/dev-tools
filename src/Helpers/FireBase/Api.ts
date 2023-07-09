import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth, db } from '../../Config/Firebase';
import { ITab, apiTabs } from '../../Constant/Mock';

const firebaseMiddlware = (callback: (userRef: any) => void) => {
    if (!auth.currentUser) {
        console.log('not auth', auth.currentUser);
        return;
    }
    const userRef = db.collection('users').doc(auth.currentUser!.email!);
    callback(userRef);
};
export const saveTab = (tabId: string, tab: ITab) => {
    console.log(tabId, tab)
    firebaseMiddlware((userRef) => {
        const updateData = {
            [`api`]: {
                [`${tabId}`]: { ...tab },
            },
        };
        return userRef.set(updateData, { merge: true });
    });
}
export const getAllTabs = (email: string) => {
    return new Promise((resolve, reject) => {
        const userRef = db.collection('users').doc(email);
        userRef
            .get()
            .then((doc: any) => {
                if (doc.exists) {
                    resolve(doc.data()?.api);
                } else {
                    userRef
                        .set({ sections: apiTabs })
                        .then(() => resolve(apiTabs));
                }
            })
            .catch(reject);
    });
};
