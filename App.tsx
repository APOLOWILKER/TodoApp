import { StatusBar } from 'react-native';
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Home />
    </>
  );
}
