import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React from 'react';

import { View } from '@/ui';

export const LoginAuth = () => {
  // Somewhere in your code
  GoogleSignin.configure({
    // scopes: ['https://accounts.google.com/o/oauth2/auth'], // what API you want to access on behalf of the user, default is email and profile
    // webClientId: '747895093829-vl5p4ijs20ak270jvnkgq6ci5pjos38q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    // offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '747895093829-s3s7ljd1995if2k5tu6leb6uqfh713j1.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // googleServicePlistPath: './GoogleService-Info.plist', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log(`->userInfo`, userInfo);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View className="flex-1 justify-center p-4">
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={false}
      />
    </View>
  );
};
