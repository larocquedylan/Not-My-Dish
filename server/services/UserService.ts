import User from "../models/User";

class UserService {
    private static instance: UserService;
    private users: User[] = [];

    private constructor() {}

    // Call this method whenever you want to get a hold of the UserService.
    // This ensures that there is only one UserService ever made
    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    public create(user: User): User {
        this.users.push(user);
        return user;
    }

    public getUserById(userID: string): User | undefined {
        return this.users.find(user => user._id === userID);
    }

    public getUsers(): User[] {
        return this.users;
    }

    public populateMockUsers(): void {
        for (let i = 0; i < mockUsers.length; i++) {
            this.create(mockUsers[i]);
        }
    }
}

const mockUsers : User[ ]= [
    {
            _id: "1",
            name: "Ben",
            email: "ben@ben.com",
            password: "password",
            createdOn: new Date(),
            updatedOn: new Date(),
    },
    {
        _id: "2",
        name: "T-George",
        email: "t@t.com",
        password: "password",
        createdOn: new Date(),
        updatedOn: new Date(),
},
{
    _id: "3",
    name: "Tyson",
    email: "tyson@tyson.com",
    password: "password",
    createdOn: new Date(),
    updatedOn: new Date(),
},
{
    _id: "4",
    name: "Dylan",
    email: "dylan@dylan.com",
    password: "password",
    createdOn: new Date(),
    updatedOn: new Date(),
},
{
    _id: "5",
    name: "Ryan",
    email: "ryan@ryan.com",
    password: "password",
    createdOn: new Date(),
    updatedOn: new Date(),
},
{
    _id: "6",
    name: "Jet",
    email: "jet@jet.com",
    password: "password",
    createdOn: new Date(),
    updatedOn: new Date(),
},
{
    _id: "7",
    name: "Carson",
    email: "carson@carson.com",
    password: "password",
    createdOn: new Date(),
    updatedOn: new Date(),
},
]

export default UserService;

