import { Login } from '@/components/login';
import { gql, useQuery } from '@apollo/client';

const USER_QUERY = gql(`
  query users {
    users {
      id
      name
    }
  }
`);

const IndexPage = () => {
  const { data } = useQuery(USER_QUERY, {});

  return (
    <>
      <h1>Users</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Login />
    </>
  );
};

export default IndexPage;
