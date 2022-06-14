import { db } from '../db/firebase';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

async function getContents() {
  const contents = collection(db, 'contents');
  const contentsSnapshot = await getDocs(contents);
  const contentsList = contentsSnapshot.docs.map((doc) => doc.data());

  return contentsList;
}

function ReadContents() {
  useEffect(() => {
    console.log(getContents());
  });

  return <div>firebase 확인해보기!</div>;
}

export default ReadContents;
