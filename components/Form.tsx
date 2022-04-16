import { FormEvent } from 'react'

export default function Form({
  errorMessage,
  onSubmit,
}: {
  errorMessage: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className='userName'>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' required />
      </div>
      <div className='password'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' required />
      </div>

      <button type='submit'>Login</button>

      {errorMessage && <p className='error'>{errorMessage}</p>}

      <style jsx>{`
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
