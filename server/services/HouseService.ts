import House from "../models/House";
import {v4 as uuidv4} from 'uuid';

class HouseService {
    private static instance: HouseService;
    
    private constructor() {}

    public static getInstance(): HouseService {
        if (!HouseService.instance) {
            HouseService.instance = new HouseService();
        }
        return HouseService.instance;
    }

    public create(house: House) : House {
        house._id = uuidv4();
        
        return house;

    }
}
export default HouseService;