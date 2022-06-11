import NextLink from 'next/link';
import useUser from 'lib/useUser';
import { useRouter } from 'next/router';
import Image from 'next/image';
import fetchJson from 'lib/fetchJson';
import { Box, Heading, Link, List, ListItem } from '@chakra-ui/react';

export default function Header() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  return (
    <Box
      as='header'
      h='50px'
      p='0.2rem'
      color='#fff'
      bgColor='#48a6e9'
      display='flex'
      alignItems='center'
      justifyContent='flex-end'
      position='static'
    >
      <Heading as='h1' position='absolute' color='#fff' left='50%' transform='translateX(-50%)' fontSize='3xl'>
        Disc Storage
      </Heading>
      <Box as='nav'>
        <List display='flex' flexDirection='row' alignItems='center' fontWeight='600'>
          <ListItem px='1rem'>
            <NextLink href='/' passHref>
              <Link>Home</Link>
            </NextLink>
          </ListItem>
          {user?.isLoggedIn === false && (
            <>
              <ListItem px='1rem'>
                <NextLink href='/login' passHref>
                  <Link>Login</Link>
                </NextLink>
              </ListItem>
              <ListItem px='1rem'>
                <NextLink href='/signup' passHref>
                  <Link>Sign Up</Link>
                </NextLink>
              </ListItem>
            </>
          )}
          {user?.isLoggedIn === true && (
            <>
              <ListItem px='1rem'>
                <Link
                  href='/api/logout'
                  onClick={async (e) => {
                    e.preventDefault();
                    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false);
                    router.push('/login');
                  }}
                >
                  Log Out
                </Link>
              </ListItem>
            </>
          )}
          {/* <ListItem px='1rem'>
            <Link>
              <Image src='/GitHub-Mark-Light-32px.png' width='32' height='32' alt='' />
            </Link>
          </ListItem> */}
        </List>
      </Box>
    </Box>
  );
}
