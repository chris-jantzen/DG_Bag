import { Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
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
  const label = isLogin ? 'Log In' : 'Sign Up';
  return (
    <form onSubmit={onSubmit}>
      <Heading as='h2' py={2} fontSize='2rem'>
        {label}
      </Heading>
      <FormControl py={2}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input type='text' name='email' placeholder='example@email.com' required />
      </FormControl>
      <FormControl py={2}>
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input type='password' name='password' required />
      </FormControl>

      <Button type='submit' my={2}>
        {label}
      </Button>

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
