import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "64c137dc2813be3953efb6e4"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzEzN2RjMjgxM2JlMzk1M2VmYjZlNCIsImlhdCI6MTY5MDM4NDg0NSwiZXhwIjoxNjkwNDY3NjQ1fQ.nTUx5jN-W8VDe4KEdGzalzm2ny0XFhVhRMXHB4W2FZy";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}