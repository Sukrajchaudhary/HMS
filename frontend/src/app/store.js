import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../features/Auth/authSlice";
import doctorReducres from "../features/Doctors/doctorSlice"
import appoinmentReducers from "../features/Appoinments/appoinmentSlice"
import userReducers from "../features/UserUpdate/UserUpdateSlice"
import admineReducer from "../features/Userdashboard copy/adminSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    doctor:doctorReducres,
    appoinment:appoinmentReducers,
    user:userReducers,
    admin:admineReducer
  },
});
