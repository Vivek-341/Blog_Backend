module.exports.SELECT_QUERY = 'SELECT * FROM THREAD';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM THREAD where ID = ?';
module.exports.INSERT_QUERY=`INSERT INTO THREAD (NAME, DESCRIPTION, CREATED_DATE, CREATE_BY, MODIFIED_DATE,BLOG_ID) 
                                    values  (?,?,?,?,?,?)`;
module.exports.UPDATE_QUERY=`UPDATE THREAD SET NAME=?, DESCRIPTION=? ,MODIFIED_DATE=?,BLOG_ID=? where ID = ?`;
module.exports.DELETE_QUERY='DELETE FROM THREAD where id=?';
