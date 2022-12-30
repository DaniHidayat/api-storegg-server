
const db = require('../../db')
module.exports = {
    index: async (req, res) => {
        try {
            const banners = 'SELECT * FROM banners';
            db.query(banners, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                // jika request berhasil
                res.status(200).json({ success: true, data: rows });
            });
        } catch (err) {

            console.log(err);
        }
    },
  
}


