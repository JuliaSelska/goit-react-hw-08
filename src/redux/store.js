import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactsReducer from "./contacts/contactsSlice";
import filtersReducer from "./filters/filtersSlice";
import authReducer from '../redux/auth/slice'




const persistedAuthReducer = persistReducer({
    key: 'user-token',
    storage,
    whitelist: ['token']
},
    authReducer
);


const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export default configureStore;
export const persistor = persistStore(store);

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['items'],
// };

// const filterPersistConfig = {
//     key: 'filters',
//     storage,
//     whitelist: ['name'],
// };


// const store = configureStore({
//     reducer: {
//         contacts: persistReducer(contactsPersistConfig, contactsReducer),
//         filters: persistReducer(filterPersistConfig, filtersReducer),
//     },

//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
