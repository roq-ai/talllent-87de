import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  job_posting_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
