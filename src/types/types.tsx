export interface PeopleListProps{
  users: IUser[];
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
}

interface UserAddress{
    street:string;
    suite: string;
    city: string;
    zipcode:string;
}

export interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactChild | React.ReactNode;
  backgrounColor?: string;
}