'use server';

import { admindb } from "@/firebase-adim";
import { auth } from "@clerk/nextjs/server";

export async function CreateNewDocument() {
    (await auth());

    const { sessionClaims } = await auth();

    const docCollectionRef = admindb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc",
    });

    if (sessionClaims?.email) {
        await admindb.collection('users').doc(sessionClaims.email).collection('rooms').doc(docRef.id).set({
            userId: sessionClaims?.email ?? "unknown",
            role: "owner",
            createdAt: new Date(),
            roomId: docRef.id,
        })
    } else {
        throw new Error("Email is undefined");
    }

    return { docId: docRef.id };
}
