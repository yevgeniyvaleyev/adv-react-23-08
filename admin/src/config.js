import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import fbConf from './adv-react-23-08-firebase-private'

export const appName = 'adv-react-23-08-yv'

firebase.initializeApp(fbConf)
