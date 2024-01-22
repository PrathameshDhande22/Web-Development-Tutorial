import { Schema, model } from "mongoose";
import { ServiceInterface } from "../models";


const serviceSchema = new Schema<ServiceInterface>({
    description: { type: "string", required: true },
    price: { type: "string", required: true },
    provider: { type: "string", required: true },
    service: { type: "string", required: true },
})

const Service = model<ServiceInterface>("service", serviceSchema);

export default Service;