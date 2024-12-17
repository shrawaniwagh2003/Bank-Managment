'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try{
        // data
    }
    catch(error){
        console.log(error);
    }
}


export const SignUp = async (userData: SignUpParams) => {
    const {email,password,firstName,lastName} = userData;

    try{
        //   data 
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        `${firstName} ${lastName}`);

        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        
       return parseStringify(newUserAccount);

    }
    catch(error){
        console.log(error);
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  