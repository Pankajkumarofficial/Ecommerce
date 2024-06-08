import { NextFunction, Request, Response } from "express";

export interface newUserRequestBody {
    name: string;
    email: string;
    photo: string;
    gender: string;
    _id: string;
    dob: Date;
}

export type contollerType = (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>

export interface newProductRequestBody {
    name: string;
    category: string;
    price: number;
    stock: number
}

export type searchRequestQuery = {
    search?: string;
    price?: string;
    category?: string;
    sort?: string;
    page?: string
}

export interface BaseQuery {
    name?: {
        $regex: string,
        $options: string
    },
    price?: {
        $lte: number
    },
    category?: string
}