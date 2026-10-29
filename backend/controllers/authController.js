const { insertData, checkUser } = require("../model/authModel");
const jwt = require("jsonwebtoken");

const secret_key = "hjgjhbgkjdxfdzbnbjb";

function signupController(request, response) {
    insertData(request.body)
        .then((data) => {
            return response.status(201).send({
                ok: true,
                message: "Created account",
                data: data,
            });
        })
        .catch((error) => {
            return response.status(500).send({
                ok: false,
                message: "failed to create account",
                error: error.message,
            });
        });
}

function signinController(request, response) {
    const data = request.body;
    const requestEmail = data.email;

    checkUser(requestEmail)
        .then((user) => {
            if (!user) {
                return response.status(401).send({
                    ok: false,
                    statusCode: 401,
                    message: "user is invalid",
                });
            }

            if (data.password !== user.password) {
                return response.status(401).send({
                    ok: false,
                    statusCode: 401,
                    message: "password is incorrect",
                });
            }

            return jwt.sign({ email: user.email }, secret_key, (error, token) => {
                if (error) {
                    return response.status(403).send({
                        ok: false,
                        message: "failed to create token",
                        statusCode: 403,
                    });
                }

                return response.status(200).send({
                    ok: true,
                    message: "valid user",
                    data: user,
                    token: token,
                });
            });
        })
        .catch((error) => {
            console.log(error);
            return response.status(401).send({
                ok: false,
                statusCode: 401,
                message: "user is invalid",
            });
        });
}

function loginController(request, response) {
    const data = request.body;
    const requestEmail = data.email;

    checkUser(requestEmail)
        .then((user) => {
            if (!user) {
                return response.status(401).send({
                    ok: false,
                    statusCode: 401,
                    message: "user is invalid",
                });
            }

            if (data.password !== user.password) {
                return response.status(401).send({
                    ok: false,
                    statusCode: 401,
                    message: "password is incorrect",
                });
            }

            return jwt.sign({ email: user.email }, secret_key, (error, token) => {
                if (error) {
                    return response.status(403).send({
                        ok: false,
                        message: "loginController: failed to create token",
                        statusCode: 403,
                    });
                }

                return response.status(200).send({
                    ok: true,
                    message: "loginController: valid user",
                    data: user,
                    token: token,
                });
            });
        })
        .catch((error) => {
            return response.status(401).send({
                ok: false,
                statusCode: 401,
                message: "loginController: user is invalid",
            });
        });
}

module.exports = { signupController, signinController, loginController };