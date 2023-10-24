// User interface definition goes here

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdOn: Date;
    updatedOn: Date;
}

export default User;