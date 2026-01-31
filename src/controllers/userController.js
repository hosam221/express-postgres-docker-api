//Standarized controller to handle user related requests
import {
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService
} from '../models/userMod.js';

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export const createUser = (req, res, next) => {

    const { name,email}=req.body;

    try {
        if(!name || !email){
            return handleResponse(res,400,"Name and Email are required");
        }
    } catch (err) {
        next(err);
    }

    const newuser={name,email};
    handleResponse(res, 201, 'User created successfully', newuser);

}

export const getAllUsers = async (req, res, next) => {
    console.log(process.env.DB_NAME);

    try {
        const users = await getAllUsersService();
        handleResponse(res, 200, 'Users retrieved successfully', users);
    } catch (err) {
        next(err);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await getUserByIdService(id);
        if (!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User retrieved successfully', user);
    } catch (err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name,email } = req.body;
        const updatedUser = await updateUserService(id,name,email);
        if (!updatedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User updated successfully', updatedUser);
    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserService(id);
        if (!deletedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User deleted successfully', deletedUser);
    } catch (err) {
        next(err);
    }
}
   