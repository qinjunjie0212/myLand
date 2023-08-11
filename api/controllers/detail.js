import {db} from '../connect.js'

export const detail = (req,res) => {
    // console.log(req.query.id);
    const id = req.query.id

    const q = "SELECT * FROM posts WHERE id = ?" 
    db.query(q, [id], (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        
        // console.log(data[0].userid);
        const u = "SELECT * FROM users WHERE id = ?";
        db.query(u, [data[0].userid], (err, userData) => {
            if (err) {
                return res.status(500).json(err);
            }
            
            // console.log(userData);
            return res.status(200).json({ data, userData }); // 返回一个包含 data 和 userData 的响应
        });
    });
}