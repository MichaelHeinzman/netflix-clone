import { db } from "@/lib/firebase";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Movie } from "../../typings";

const useList = (uid: string | undefined) => {
  const [list, setList] = useState<DocumentData[] | Movie[]>([]);

  useEffect(() => {
    if (!uid) return;

    return onSnapshot(
      collection(db, "customers", uid, "myList"),
      (snapshot) => {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, [uid]);

  return list;
};

export default useList;
