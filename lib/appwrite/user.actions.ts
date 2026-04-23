"use server"
import { appwriteConfig } from "./appwriteConfig";
import { ID, Query } from "node-appwrite";
import { createAdminClient } from ".";


export const getUserByEmail = async (email: string) => {
    const {databases} = await createAdminClient();

    const result = await databases.listRows({
        databaseId: appwriteConfig.databaseId,
        tableId: appwriteConfig.usersCollectionId,
        queries: [Query.equal("email", [email])],
    });

    return result.total > 0 ? result.rows[0] : null;
}

export const sendEmailOTP = async ({email}: {email: string}) => {
    const {account} = await createAdminClient();
    try {
        const session = await account.createEmailToken({
            userId: ID.unique(),
            email,
        });
        return session.userId;
    } catch (error) {
        console.log("Failed to send email OTP", error);
    }
}



export const createAccount = async({fullName, email}: {fullName: string, email: string}) => {
    const existingUser = await getUserByEmail(email);
    const accountId = await sendEmailOTP({email});

    if (!accountId) {
        return { accountId: null, message: "Failed to send OTP"};
    }

    if (!existingUser) {
        const {databases} = await createAdminClient();
        
        await databases.createRow({
            databaseId: appwriteConfig.databaseId,
            tableId: appwriteConfig.usersCollectionId,
            rowId: ID.unique(),
            data: {
                fullName,
                email,
                avatar: "",
                accountId,
            },
        });
    }
    return { accountId, message: "OTP sent successfully"};
}