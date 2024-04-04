import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Home() {
    return (
        <WebView
          style={styles.container}
          originWhitelist={['*']}
          source={{ uri: 'https://dev.bitsafve.com?mobile=true' }}
          javaScriptEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});