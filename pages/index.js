import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppContext } from '../components/AppContext';

export default function App(props) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: 'videosFetch', data: 'Beginning Boutique' });
  }, []);

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        {state.videos[0] && state.videos[0].url}
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
        A universal link
      </Text>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  link: {
    color: 'blue'
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24
  }
});
