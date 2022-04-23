import React, { useState } from 'react';
import useUser from 'lib/useUser';
import Layout from 'components/Layout';
import Form from 'components/Form';
import fetchJson, { FetchError } from 'lib/fetchJson';
import { Box } from '@chakra-ui/react';

export default function Login() {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const body = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error('An unexpected error happened:', error);
      }
    }
  };

  return (
    <Layout>
      <Box maxW='35vw' m='0 auto' p='1rem' border='1px solid #ccc' borderRadius='4px'>
        <Form errorMessage={errorMsg} isLogin={false} onSubmit={handleSubmit} />
      </Box>
    </Layout>
  );
}
