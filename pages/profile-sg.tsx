import React from 'react';
import Layout from 'components/Layout';
import useUser from 'lib/useUser';

// Make sure to check https://nextjs.org/docs/basic-features/layouts for more info on how to use layouts
export default function SgProfile() {
  const { user } = useUser({
    redirectTo: '/login',
  });

  return (
    <Layout>
      <h1>Your GitHub profile</h1>
      <h2>
        This page uses{' '}
        <a href='https://nextjs.org/docs/basic-features/pages#static-generation-recommended'>
          Static Generation (SG)
        </a>
      </h2>
      <div>
        <p style={{ fontSize: '2rem', textTransform: 'capitalize' }}>{user?.email}</p>
      </div>
    </Layout>
  );
}
