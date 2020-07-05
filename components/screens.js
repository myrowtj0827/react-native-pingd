import {Navigation} from 'react-native-navigation';

import ContactsPage from './ContactsPage/ContactsPage';
import PingList from './PingList/PingList';
import Calendar from './Calendar/Calendar';
import OnBoarding from './OnBoarding/OnBoarding';
import OnBoardingContactsPage
    from './OnBoardingContactsPage/OnBoardingContactsPage';
import AddContactsPage from './ContactsPage/AddContactsPage';

export function registerScreens(store, Provider) {
    console.log("******************************* registerScreens")
    Navigation.registerComponentWithRedux ('pingd.Contacts', () =>
        ContactsPage, store, Provider
    );
    Navigation.registerComponentWithRedux ('pingd.Calendar', () =>
        Calendar, store, Provider
    );
    Navigation.registerComponentWithRedux ('pingd.PingList', () =>
        PingList, store, Provider
    );
    Navigation.registerComponentWithRedux ('pingd.OnBoarding', () =>
        OnBoarding, store, Provider
    );
    Navigation.registerComponentWithRedux ('pingd.OnBoardingContacts', () =>
        OnBoardingContactsPage, store, Provider
    );
    Navigation.registerComponentWithRedux ('pingd.AddContacts', () =>
        AddContactsPage, store, Provider
    );
}
