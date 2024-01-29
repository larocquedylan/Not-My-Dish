import {Request, Response} from 'express';
import { UserSignUpInput } from '../models/dtos/UserSignUp';
import UserService from '../services/UserService';
import User from '../models/User';

export class UserController {
    public static SignUpHandler(req: Request, res: Response) {
        const input: UserSignUpInput= req.body;

        if (!input.name) {
            res.status(400).send('Name is required');
        }

        if (!input.email) {
            res.status(400).send('Email is required');
        }

        if (!input.password) {
            res.status(400).send('Password is required');
        }

        // TODO: validate the password and make sure it is the correct format
        // ex: atleast x amount of characters, contains special characters etc...

        // TODO: validate the email and make sure it is the correct format

        var user: User = new User();
        user.name = input.name,
        user.email = input.email,
        user.password = input.password,
        user.createdOn = new Date(),
        user.updatedOn = new Date(),
        

        user = UserService.getInstance().create(user)

        res.status(200).send(user);
    }
}