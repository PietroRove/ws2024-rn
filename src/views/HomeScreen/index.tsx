import { useRef } from "react";
import { styles } from "./index.styles";
import WebView from "react-native-webview";
import { Platform, View } from "react-native";
import NavigationBar from "../../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { APPLICATION_URL } from "../../config/constants";

const HomeScreen = () => {
  const webviewRef = useRef(null);

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <StatusBar style="light" translucent={false} />
      ) : (
        <StatusBar style="light" backgroundColor="#000000" />
      )}
      <WebView
        ref={webviewRef}
        style={{ flex: 1 }}
        source={{ uri: APPLICATION_URL }}
      />
      <NavigationBar
        onBack={() => webviewRef.current?.goBack()}
        onForward={() => webviewRef.current?.goForward()}
      />
    </View>
  );
};

export default HomeScreen;
