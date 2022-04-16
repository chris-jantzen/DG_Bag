import { FormEvent } from 'react';

export default function Form({
  errorMessage,
  isLogin,
  onSubmit,
}: {
  errorMessage: string;
  isLogin: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <div className='email'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' required />
      </div>
      <div className='password'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' required />
      </div>

      <button type='submit'>Login</button>

      {errorMessage && <p className='error'>{errorMessage}</p>}

      <style jsx>{`
        h2 {
          padding: 0.5rem 0 1rem;
          margin: 0;
        }
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
    </form>
  );
}
