import { User, UserStatus } from "../proto/users_pb";
import allUsers from "./all-users";
import createUsers from "./create-users";
import getUser from "./get-user";

async function run() {
  const user = await getUser(1);
  console.log(user.toString());

  const jim = new User();
  jim.setName("Jim");
  jim.setAge(10);
  jim.setId(20);
  jim.setStatus(UserStatus.OFFLINE);
  createUsers([jim]);
  console.log(`\nCreated user ${jim.toString()}`);

  const users = await allUsers();
  console.log(`\nLising all ${users.length} users:`);
  for (const user of users) {
    console.log(user.toString());
  }
}

run();
