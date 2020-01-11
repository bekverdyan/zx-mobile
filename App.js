import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <WebView
        source={{ uri: 'https://bekverdyan.github.io/zx.github.io/' }}
        style={styles.container}
      />
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
