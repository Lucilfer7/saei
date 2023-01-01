import store from '../app/store';
import Layout from '../components/UI/Layout';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
};

export default MyApp;