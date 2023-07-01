import { User, UserStatus } from "../proto/users_pb";

export function userToClass({ id, name, age, status }: User.AsObject) {
  const user = new User();
  user.setId(id);
  user.setName(name);
  user.setAge(age);
  user.setStatus(status);
  return user;
}

export const users: User[] = [
  { id: 1, name: "Rabbi", age: 72, status: UserStatus.BUSY },
  { id: 2, name: "Julina", age: 51, status: UserStatus.OFFLINE },
  { id: 3, name: "Tedd", age: 77, status: UserStatus.AVAILABLE },
  { id: 4, name: "Esta", age: 24, status: UserStatus.AVAILABLE },
  { id: 5, name: "Remington", age: 63, status: UserStatus.OFFLINE },
  { id: 6, name: "Drake", age: 27, status: UserStatus.AVAILABLE },
  { id: 7, name: "Adah", age: 69, status: UserStatus.AVAILABLE },
  { id: 8, name: "Burch", age: 34, status: UserStatus.BUSY },
  { id: 9, name: "Maryjane", age: 96, status: UserStatus.BUSY },
  { id: 10, name: "Willdon", age: 96, status: UserStatus.OFFLINE },
].map(userToClass);
