import * as React from 'react';

import {AuthContext} from 'src/utils/auth-context';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Text from 'src/components/Text';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import ThemeView from 'src/components/ThemeView';

function LoginScreen() {
  const {t} = useTranslation();
  const [username, setUsername] = React.useState('driver2@weeyay.com');
  const [password, setPassword] = React.useState('123456');

  const {signIn, isLoading, theme} = React.useContext(AuthContext);
  const urlImage =
    theme === 'dark'
      ? require('src/assets/images/login_dark.png')
      : require('src/assets/images/login.png');
  return (
    <ThemeView
      Component={KeyboardAvoidingView}
      behavior="padding"
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar hidden />
        <Image source={urlImage} style={styles.image} resizeMode="cover" />
        <View style={styles.content}>
          <Text medium h1 style={styles.text}>
            {t('login:text_login')}
          </Text>
          <Input
            label={t('inputs:text_email')}
            value={username}
            onChangeText={setUsername}
            secondary
          />
          <Input
            label={t('inputs:text_password')}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            secondary
          />
          <Button
            loading={isLoading}
            title={t('login:text_button_login')}
            onPress={() => signIn({username, password})}
            containerStyle={styles.button}
          />
        </View>
      </ScrollView>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  image: {
    marginVertical: 40,
    marginHorizontal: 26,
  },
  text: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    marginVertical: 15,
  },
});

export default LoginScreen;
