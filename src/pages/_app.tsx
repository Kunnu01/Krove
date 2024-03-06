import 'reflect-metadata';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useApolloClient } from '@/common/graphql/client';
import { SessionProvider } from "next-auth/react"

const AppPage = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const apollo = useApolloClient();

  return (
    <ApolloProvider client={apollo}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
};

export default AppPage;
