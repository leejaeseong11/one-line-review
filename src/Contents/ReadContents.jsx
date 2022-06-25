import { db } from '../db/firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

function ReadContents() {
  async function getContents() {
    const contents = collection(db, 'contents');
    const contentsSnapshot = await getDocs(contents);
    const contentsList = contentsSnapshot.docs.map((doc) => doc.data());
    // console.log(contentsList);
    return contentsList;
  }

  const [review, setReview] = useState([]);
  useEffect(() => {
    console.log(getContents());
  }, []);

  return <div>{review}</div>;
}

export default ReadContents;
