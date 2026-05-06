import { getUserById } from "@/app/lib/data";
import { CircleDollar } from "@gravity-ui/icons";
import { Card } from "@heroui/react";


const UserDetelsPage = async ({params}) => {
    const {userid} = await params;
    const user = await getUserById(userid);
  return (
    <div className="max-w-6xl mx-auto mt-5">
        <Card className="w-[400px]">
      
      <Card.Header>
        <Card.Title>Name : {user.name}</Card.Title>
        <Card.Description>Email : {user.email}</Card.Description>
      </Card.Header>
      <Card.Content>
        <Card.Description>Role : {user.role}</Card.Description>
      </Card.Content>
    </Card>
        
    </div>
  )
}

export default UserDetelsPage