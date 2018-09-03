import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import fireBaseConf from './adv-react-23-08-firebase-private'

export const appName = 'adv-react-23-08'

firebase.initializeApp(fireBaseConf)

export const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
