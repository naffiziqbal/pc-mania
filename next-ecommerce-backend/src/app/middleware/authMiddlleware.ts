import { NextFunction, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config";
import { IUser } from "../module/shared/interface";

const authenticationToken = (req: any, res: Response, next: NextFunction) => {
 

};

export const UserAuthentication = authenticationToken;

const createToken: RequestHandler = async (req, res) => {
 
};

export const UserToken = { authenticationToken, createToken };
