import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsSlice";
import filtersReducer from "./filters/filtersSlice";
import authReducer from '../redux/auth/slice'


const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: authReducer,
    },
});

export { store };

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
