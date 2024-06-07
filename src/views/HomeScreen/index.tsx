
import { useRef } from "react";
import { styles } from "./index.styles";
import WebView from "react-native-webview";
import { View } from "react-native";
const HomeScreen = () => {
    const webviewRef = useRef(null);
   
    return (
      <View style={styles.container}>
        <WebView
          ref={webviewRef}
          style={{ flex: 1 }}
          source={{ uri: 'https://www.evoluzione.agency' }}
        />
      </View>
    );
  }

  export default HomeScreen;