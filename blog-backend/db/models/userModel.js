module.exports.SELECT_QUERY = 'SELECT * FROM USER';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM USER where ID = ?';
module.exports.INSERT_QUERY=`INSERT INTO USER (NAME, PASSWORD, EMAIL, PHONE_NO, AGE, GENDER, DOB) 
                                                values  (?,?,?,?,?,?,?)`;
module.exports.UPDATE_QUERY=`UPDATE USER SET NAME=?, PASSWORD=? , EMAIL=? , PHONE_NO=?, DOB=? where ID = ?`;
module.exports.DELETE_QUERY='DELETE FROM USER where id=?';
