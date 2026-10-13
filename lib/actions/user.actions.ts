'use server'

import { signInFormSchema } from "../validators";
import { signIn, signOut} from "@/auth";
 import { unstable_rethrow } from "next/navigation";

export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        });
        
        await signIn('credential', user);

        return { success: true, message: 'Signed in successfully'}
    } catch(error) {
        unstable_rethrow(error);
        return { success: false, message: 'Invalid email or password' };
    }
}

export async function signOutUser() {
    await signOut();
}