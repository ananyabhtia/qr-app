import './App.css';
import Banner from './components/banner';
import CourseList from './components/courselist';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useJsonQuery } from './utilities/fetch';

const Main = () => {
  const [ data, isLoading, error ] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>'An error occurred while loading class data: {error}'</h1>;
  if (isLoading) return <h1>'Please wait, class data is loading...'</h1>
  if (!data) return <h1>'No class data found.'</h1>

  return <div><Banner title={data.title} /><CourseList courses={data.courses} /></div>
}

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Main />
    </QueryClientProvider>
  )
};

export default App;
