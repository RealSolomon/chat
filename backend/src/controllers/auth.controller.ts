import { Request, Response } from "express";
import prisma from "../db/prisma";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
    try {
        const { fullName, username, password, confirmPassword, gender } =
            req.body;

        if (
            !fullName ||
            !username ||
            !password ||
            !confirmPassword ||
            !gender
        ) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }

        if (password !== confirmPassword)
            return res.status(400).json({ error: "Password doesnt mutch" });

        const user = await prisma.user.findUnique({ where: { username } });

        if (user) return res.status(400).json({ error: "There is an error" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                password: hashedPassword,
                gender,
                profilePicture:
                    gender === "male" ? boyProfilePic : girlProfilePic,
            },
        });

        if (newUser) {
            generateToken(newUser.id, res);

            res.status(201).json({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicture: newUser.profilePicture,
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user)
            return res.status(400).json({ error: "Invalid credentials" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect)
            return res.status(400).json({ error: "Invalid credentials" });

        generateToken(user.id, res);

        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged Out Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMe = async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
        });

        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
