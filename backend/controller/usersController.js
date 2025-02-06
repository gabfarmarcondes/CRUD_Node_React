import { db } from "../database/database";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return  res.status(200).json(data); 
    });
};
