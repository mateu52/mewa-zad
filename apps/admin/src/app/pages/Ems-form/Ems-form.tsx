import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createEmployee, } from '../../api/backend';
import { EmployeeInput } from '../Ems/Ems';

// interface EmsFormProps {
//   reloadEmployees: () => Promise<void>;
// }

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  position: yup.string().required('Position is required'),
});


export const EmsForm: React.FC = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<EmployeeInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<EmployeeInput> = async (data) => {
    await createEmployee(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
        
        <label>Position</label>
        <input {...register('position')} />
        <p>{errors.position?.message}</p>
        
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};
