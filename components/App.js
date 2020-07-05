import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {Images} from './images.js';
import configureStore from '../api/redux/store.js';
import * as appActions from '../api/redux/actions/appActions/changeRoot';

import {registerScreens} from './screens';


const storage = configureStore();


export default class App extends Component {
    constructor(props) {
        super(props);

        // NOTE: uncomment following line to purge state of app and run app once
        registerScreens(storage.store, Provider);

        storage.persistor.purge().then(r => {});
        storage.store.subscribe(this.onStoreUpdate.bind(this));
        storage.store.dispatch(appActions.appInitialized());

        /*Navigation.events().registerAppLaunchedListener(() => {
           this.startApp('app');
        });*/
    }

    onStoreUpdate() {
        let {root} = storage.store.getState().app;
        console.log("****************************" + root)
        if ( root != null )
            this.startApp(root);

        // if (this.currentRoot != root) {
        //     console.log("****************************1")
        //     this.currentRoot = root;
        //     console.log("****************************2")
        //     this.startApp(root);
        // }
    }

    startApp(root) {
        console.log("****************************" + "startApp")
            switch (root) {
                case 'app':
                    console.log("****************************" + "app")
                    Navigation.setRoot({
                        root: {
                            bottomTabs: {
                                children: [
                                    {
                                        component: {
                                            name: 'pingd.Contacts',
                                        },
                                        options: {
                                            bottomTab: {
                                                text: 'Contacts',
                                                icon: Images.contacts_nor,
                                                selectedIcon: Images.contacts_sel,
                                                testID: 'CONTACTS_TAB',
                                            }
                                        }
                                        // stack: {
                                        //     children: [{
                                        //         component: {
                                        //             name: 'pingd.Contacts',
                                        //         }
                                        //     }],
                                        //     options: {
                                        //         bottomTab: {
                                        //             text: 'Contacts',
                                        //             icon: Images.contacts_nor,
                                        //             selectedIcon: Images.contacts_sel,
                                        //             testID: 'CONTACTS_TAB',
                                        //         }
                                        //     }
                                        // }
                                    },
                                    {
                                        component: {
                                            name: 'pingd.PingList',
                                        },
                                        options: {
                                            bottomTab: {
                                                text: 'Ping List',
                                                icon: Images.ping_list_nor,
                                                selectedIcon: Images.ping_list_sel,
                                                testID: 'PING_LIST_TAB',
                                            }
                                        }
                                        // stack: {
                                        //     children: [{
                                        //         component: {
                                        //             name: 'pingd.PingList',
                                        //         }
                                        //     }],
                                        //     options: {
                                        //         bottomTab: {
                                        //             text: 'Ping List',
                                        //             icon: Images.ping_list_nor,
                                        //             selectedIcon: Images.ping_list_sel,
                                        //             testID: 'PING_LIST_TAB',
                                        //         }
                                        //     }
                                        // }
                                    },
                                    // {
                                    //     stack: {
                                    //         children: [{
                                    //             component: {
                                    //                 name: 'pingd.Calendar',
                                    //             }
                                    //         }],
                                    //         options: {
                                    //             bottomTab: {
                                    //                 text: 'Calendar',
                                    //                 icon: Images.calendar_nor,
                                    //                 selectedIcon: Images.calendar_sel,
                                    //                 testID: 'CALENDAR_TAB',
                                    //             }
                                    //         }
                                    //     }
                                    // }
                                ]
                            }
                        }
                    }).then(r => {});
                    break;

                case 'login':
                    console.log("****************************" + "login")
                    Navigation.setRoot({

                        root: {
                            component: {
                                name: 'pingd.OnBoarding',
                            }
                        }
                    }).then(r => {});
                    console.log("****************************" + "end")
                    break;

                case 'importing': {
                    console.log("****************************" + "importing")
                    Navigation.setRoot({
                        root: {
                            component: {
                                name: 'pingd.OnBoardingContacts',
                            }
                        },
                    }).then(r => {
                    });
                    break;
                }

                case 'addNew': {
                    console.log("****************************" + "addNew")
                    Navigation.setRoot({
                        root: {
                            component: {
                                name: 'pingd.AddContacts',
                            }
                        }
                    }).then(r => {
                    });
                    break;
                }

                default:
                    console.log("****************************" + "default")
                    Navigation.setRoot({
                        root: {
                            component: {
                                name: 'pingd.AddContacts',
                            }
                        }
                    }).then(r => {
                    });
                    //console.log('Error occurred');
            }
    }

    render() {
        return (
            <View />
        )
    }
}

