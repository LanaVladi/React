import React, { useEffect } from 'react';
import { FormProps, SignInFormFields } from '../../types';
import { Confirmation } from './confirmation/Confirmation';
import './form.css';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { addNewCard } from '../../store/formSlice';

const defaultValues: SignInFormFields = {
  username: '',
  birthday: '',
  gender: '',
  country: '',
  remember: false,
  avatar: '',
};
const Form = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm<SignInFormFields, FormProps>({
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (values: SignInFormFields) => {
    const { avatar, birthday, country, gender, remember, username } = values;
    const formCard: SignInFormFields = {
      avatar: URL.createObjectURL(avatar?.[0] as unknown as Blob),
      birthday,
      country,
      gender,
      remember,
      username,
    };

    dispatch(addNewCard(formCard));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">Name: </label>
      <input
        type="text"
        placeholder="Enter your name"
        {...register('username', {
          required: true,
          minLength: 4,
          pattern: /^([a-zA-ZА-Яа-я '-])+$/,
        })}
      />
      {errors.username && (
        <p className="form-warning">
          Please enter correct name! Length of name should be more 3 characters
        </p>
      )}
      <label className="form-label">Birthday: </label>
      <input type="date" {...register('birthday', { required: true })} />
      {errors.birthday && <p className="form-warning">Please enter correct birthday!</p>}

      <div className="radio-btn">
        <label className="form-label">Male</label>
        <input type="radio" value="Male" {...register('gender', { required: true })} />
        <label className="form-label">Female</label>
        <input type="radio" value="Female" {...register('gender', { required: true })} />
        {errors.gender && <p className="form-warning">Please select gender!</p>}
      </div>

      <div>
        <label className="form-label">
          Choose a country:
          <select
            defaultValue="Select country"
            className="form-input-sign-in"
            {...register('country', { required: true })}
          >
            <option value="" disabled>
              Select country
            </option>
            <option value={'Uzbekistan'}>Uzbekistan</option>
            <option value={'Belarus'}>Belarus</option>
            <option value={'Japan'}>Japan</option>
            <option value={'Australia'}>Australia</option>
          </select>
          {errors.country && <p className="form-warning">Please select country!</p>}
        </label>
      </div>

      <label className="form-label">
        Add image:
        <input
          className="form-input-sign-in"
          type="file"
          {...register('avatar', {
            required: true,
          })}
          accept="image/**"
        />
        {errors.avatar && <p className="form-warning">Please upload image with jpeg type!</p>}
      </label>

      <label className="form-label">
        Remember me:
        <input
          className="form-input-sign-in checkbox-input"
          type="checkbox"
          {...register('remember')}
        />
      </label>

      <button className="btn-sign-in" type="submit">
        Sign in
      </button>
      {isSubmitSuccessful && <Confirmation />}
    </form>
  );
};

export { Form };
