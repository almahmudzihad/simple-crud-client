import { revalidatePath } from "next/cache";

export const deleteUser = async (userid) => {
    "use server";
    const res = await fetch(`http://localhost:5000/users/${userid}`, {method: "DELETE"});
    const data = await res.json();
    console.log('after delete', data);
    if(data.deletedCount > 0){
        revalidatePath("/users");
    }
    return data;
}