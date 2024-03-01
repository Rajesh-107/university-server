import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedmessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: err.keyvalue,
      message: `${extractedmessage} is already exist`,
    },
  ];
  const statusCode = 400;

  return {
    statusCode,
    messsage: 'Invalid ID',
    errorSources,
  };
};
export default handleDuplicateError;
