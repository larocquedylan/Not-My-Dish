import {Request, Response} from 'express';
import { UserSignUpInput } from '../models/dtos/UserSignUp';
import HouseService from '../services/HouseService';
import House from '../models/House';
import { HouseCreationInput } from '../models/dtos/HouseCreation';

export class HouseController {
    public static HouseHandler(req: Request, res: Response) {
        const input: HouseCreationInput = req.body;

        if (!input.name) {
            res.status(400).send('Name is required');
        }

       

        // TODO: validate the password and make sure it is the correct format
        // ex: atleast x amount of characters, contains special characters etc...

        // TODO: validate the email and make sure it is the correct format

        var house: House = new House();
        house.name = input.name,
        house.description = input.description,
        house.createdOn = new Date(),
        house.updatedOn = new Date(),

        

        house = HouseService.getInstance().create(house)

        res.status(200).send(house);
    }
}