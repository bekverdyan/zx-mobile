import React from 'react';
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <WebView
        source={{ uri: 'https://bekverdyan.github.io/zx.github.io/' }}
        style={styles.container}
      />
  );
}

