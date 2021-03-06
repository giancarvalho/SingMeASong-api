/* eslint-disable no-unused-vars */
import { GeneralError } from '../utils/errors.js';

function handleErrors(error, req, res, next) {
  if (error instanceof GeneralError) {
    return res.status(error.getCode()).send(error.message);
  }

  res.sendStatus(500);
}

export default handleErrors;
