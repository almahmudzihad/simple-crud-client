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
export const createUser = async (formData) => {
    "use server";
    const user = Object.fromEntries(formData.entries());
    console.log('before create', user);
    const res = await fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();
    console.log('after create', data);
    if(data.insertedId){
        revalidatePath("/users");
    }
    return data;
}

export const updateUser = async (formData, userid) => {
    "use server";
    const user = Object.fromEntries(formData.entries());
    console.log('before update', user);
    const res = await fetch(`http://localhost:5000/users/${userid}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();
    console.log('after update', data);
    if(data.modifiedCount > 0){
        revalidatePath("/users");
    }
    return data;
}