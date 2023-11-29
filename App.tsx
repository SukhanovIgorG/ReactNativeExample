/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren, PropsWithRef, PropsWithoutRef} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function Btn(): JSX.Element {
  return (
    <Button
      title="press me"
      onPress={() =>
        Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {
              text: 'Cancel',
              onPress: () => Alert.alert('Cancel Pressed'),
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
            // onDismiss: () =>
            //   Alert.alert(
            //     'This alert was dismissed by tapping outside of the alert dialog.',
            //   ),
          },
        )
      }
    />
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Image
          style={styles.image}
          source={{
            uri: 'https://us.123rf.com/450wm/delwarbd/delwarbd1807/delwarbd180705789/104844407-beautiful-meticulously-designed-guarantee-medal-icon.jpg?ver=6',
          }}
        />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
        <Btn />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    marginTop: 0,
    marginBottom: 8,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '20%',
    height: '20%',
    position: 'absolute',
  },
});

export default App;
