/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { useColorScheme,SafeAreaView} from 'react-native';
import Home from './Components/Home/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{ backgroundColor: '#3c4549ff', height: '100%', width: '100%' }}
    >
      <Home />
    </SafeAreaView>
  );
}

export default App;
