import jwt, { JwtPayload } from "jsonwebtoken";

import { Request, Response, NextFunction } from "express";
import prisma from "../db/prisma";

interface DecodedToken extends JwtPayload {
    userId: string;
}

declare global {
    namespace Express {
        export interface Request {
            user: {
                id: string;
            };
        }
    }
}

const protectRoute = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const token = req.cookies.jwt;

        if (!token)
            return res
                .status(401)
                .json({ error: "Unautorized - No token provided" });

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as DecodedToken;

        if (!decoded)
            return res
                .status(401)
                .json({ error: "Unautorized - No token provided" });

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                username: true,
                fullName: true,
                profilePicture: true,
            },
        });

        if (!user) return res.status(404).json({ error: "User not found" });

        req.user = user;

        next();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;
