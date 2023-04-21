import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  databaseURL: 'https://portfolio-fortae-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize real database service
const database = getDatabase();

export default function useFirebase(person) {
  const { firstName, lastName, email, message } = person;
  const date = new Date();
  return set(ref(database, `${date}`), {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  });
}
