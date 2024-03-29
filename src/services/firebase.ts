import firebase from 'firebase';

// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyCyTjKvTyI-qdvaHEnXzeR1c-sauRmgICQ',
  authDomain: 'overhaul-4f905.firebaseapp.com',
  projectId: 'overhaul-4f905',
  storageBucket: 'overhaul-4f905.appspot.com',
  messagingSenderId: '848283346526',
  appId: '1:848283346526:web:5af6bd5851f79a0c6436cf',
  measurementId: 'G-K86QHVSF5S',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Player Groups

type PlayerGroup = {
  displayName: string,
  gameMasterId: string,
  playerIds: Array<string>,
  clocks: {[corporationName: string]: number},
  missionIds: Array<string>,
}

type CreatePlayerGroupProps = {
  gameMasterId: string,
  displayName: string,
  playerIds?: Array<string>,
}

function createPlayerGroup(props: CreatePlayerGroupProps): any {
  return db.collection('playerGroups').add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    ...props,
  });
}

async function fetchPlayerGroup(playerGroupId: string): Promise<any> {
  const output = await db.collection('playerGroups').doc(playerGroupId).get();
  if (output.exists) return output.data();
  console.error(`Couldn't fetch playerGroup with id: ${playerGroupId}`);
  return null;
}

// Missions

type Mission = {
  displayName: string,
  description: string,
  actionClock: number,
  legworkClock: number,
  directives: {[description: string]: boolean},
}

type CreateMissionProps = {
  actionClock: number,
  legworkClock: number,
  directives: {[description: string]: boolean},
}

const defaultMissionProps: CreateMissionProps = {
  actionClock: 0,
  legworkClock: 0,
  directives: {
    missionAccepted: false,
    missionCompleted: false,
  },
};

function createMission(
  playerGroupId: string,
  props: CreateMissionProps = defaultMissionProps,
): any {
  return db.collection('playerGroups').add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    ...props,
  });
}

async function fetchMission(missionId: string): Promise<any> {
  const output = await db.collection('missions').doc(missionId).get();
  if (output.exists) return output.data();
  console.error(`Couldn't fetch mission with id: ${missionId}`);
  return null;
}

function streamMission(missionId: string, observer: any): any {
  return db.collection('missions').doc(missionId).onSnapshot(observer);
}

export type { PlayerGroup, Mission };
export { createMission, fetchMission, streamMission };
export { createPlayerGroup, fetchPlayerGroup };
