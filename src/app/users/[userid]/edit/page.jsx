import { updateUser } from "@/app/lib/action";
import { getUserById } from "@/app/lib/data";
import { Button, Card, Input, Label, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
  const { userid } = await params;
  const user = await getUserById(userid);
  const updateUserActionWrapper = async (formData) => {
    "use server";
    return updateUser(formData, userid);
  };
  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h1 className="text-2xl font-bold text-center my-5">Edit User</h1>

      <form  className="flex flex-col gap-4" action={updateUserActionWrapper}>
        <TextField
          className="w-full"
          name="name"
          type="text"
          defaultValue={user.name}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          className="w-full"
          name="email"
          type="email"
          defaultValue={user.email}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField className="w-full" name="role" defaultValue={user.role}>
          <Label>Role</Label>
          <Input placeholder="Enter your company name" />
        </TextField>
        <div className="flex justify-between ">
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserEditPage;
