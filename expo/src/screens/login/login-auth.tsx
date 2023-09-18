import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import * as A from 'expo-apple-authentication';
import React, { useEffect, useState } from 'react';

import { View } from '@/ui';

GoogleSignin.configure();

// Google
const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();

    // {
    //   idToken:
    //     'eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjMGI2OTEzZmUxMzgyMGEzMzMzOTlhY2U0MjZlNzA1MzVhOWEwYmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3NDc4OTUwOTM4MjktczNzN2xqZDE5OTVpZjJrNXR1NmxlYjZ1cWZoNzEzajEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NDc4OTUwOTM4MjktczNzN2xqZDE5OTVpZjJrNXR1NmxlYjZ1cWZoNzEzajEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTY4MDcyNDgzODc0ODM2MDc3NjkiLCJlbWFpbCI6ImRyYWZ0YWkyMDIzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiT3NlVEpSdHEzREZxMjZqMVB5LWFhZyIsIm5vbmNlIjoidURjbl9RWGltcHgtakNRVWFERl9OSk1HZmEyS0M5Wmd5aGpDUGRkM2VOTSIsIm5hbWUiOiJkcmFmdGFpIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0s5VThJMXR5aDNrdFpvMFlMbUduR1VoMGdjRGNZdy1PVWtJWExqcWJtYj1zOTYtYyIsImdpdmVuX25hbWUiOiJkcmFmdGFpIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2OTUwNDg0NTYsImV4cCI6MTY5NTA1MjA1Nn0.awHnCaoKi4JD9gQEXYP0Fai55GKwWM6DdDZtqo08PBx9y3jI39hcMnOCuy7Uo3po4hLdYIbjJ0qjlad36EPFAyXGoz9YfEGusJ_WGa5zqzRk9sPqehK8hnKjYdk7rm71scg9ODpme6Yb7o2c1N9OAomEhmfcFpkumr7wlnOfBlQQgdxh1F604W3QVX3YiewpDt3McngloDLqIqqe6KqHKVVLCXKWWTR_iNskjisRB9HegsvgjtV0KmGXwmTfpavdLl8fd3moC_XYPepS--tpAdpZaESI6l8Mvide1wsaAgmnZdZt-aFx3coJzcIooiivfhXAiCHy4q6Zf2vADK_h1A',
    //   scopes: [
    //     'https://www.googleapis.com/auth/userinfo.email',
    //     'https://www.googleapis.com/auth/userinfo.profile',
    //     'openid',
    //   ],
    //   serverAuthCode: null,
    //   user: {
    //     email: 'draftai2023@gmail.com',
    //     familyName: null,
    //     givenName: 'draftai',
    //     id: '116807248387483607769',
    //     name: 'draftai',
    //     photo: 'https://lh3.googleusercontent.com/a/ACg8ocK9U8I1tyh3ktZo0YLmGnGUh0gcDcYw-OUkIXLjqbmb=s120',
    //   },
    // };

    console.log(`->userInfo`, userInfo);
  } catch (error) {
    console.warn(error);
  }
};

// Apple
const singInWithApple = async () => {
  try {
    const credential = await A.signInAsync({
      requestedScopes: [A.AppleAuthenticationScope.FULL_NAME, A.AppleAuthenticationScope.EMAIL],
    });
    // {
    //   authorizationCode: 'c781c7037c6c3430f990ffb2784084c73.0.srrqw.jecZk6ab1kSR3yi3RTd1Kw',
    //   email: null,
    //   fullName: {
    //     familyName: null,
    //     givenName: null,
    //     middleName: null,
    //     namePrefix: null,
    //     nameSuffix: null,
    //     nickname: null,
    //   },
    //   identityToken:
    //     'eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiYWkuZHJhZnRhaS5hcHAuY2hhdG9uY2UuZGV2ZWxvcG1lbnQiLCJleHAiOjE2OTUxMzQ0MzQsImlhdCI6MTY5NTA0ODAzNCwic3ViIjoiMDAxMTA2LmM5ZGRiMWViMjZlZTRjMzRhNTcxNDliZjgzMTJkNDM2LjEwMjQiLCJjX2hhc2giOiJiV1VVekdVN2ZCMmdKWXU4UVo2NW9nIiwiZW1haWwiOiJ5aG9zdGNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJ0cnVlIiwiYXV0aF90aW1lIjoxNjk1MDQ4MDM0LCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.EXQrhjWHMgx5fOLyOjJj3Um57iec4ioV1jwwx_tGEtNys_B7VmVP-sVlDmhiUwChGSBgEM2YDra-mK5b0AdQk24oQjvzMyroXyLk0eAvgN5skOTqQGpR3kxeJPohNSMaFFJageoqX1EV0IBLsV2qZ0atpELBT0JmECg5Uvw53gUf_76PxvUY_CHcGS3vl4XHVhBUlox_KpZZ86IGY6n_U359K5XYuP2HLQwv-b8DX8yZYruYWeoSX-gkpmL-FHR4RXqRpX66IcPWZXxCKihJo_Yu8PIuCfHHVSkw9i7HKOKdGeYlF1hRt9vJ4ABFRG40Bp3Lit-O7WN5WN_bXadKqg',
    //   realUserStatus: 1,
    //   state: null,
    //   user: '001106.c9ddb1eb26ee4c34a57149bf8312d436.1024',
    // };

    console.log(`->userInfo`, credential);
    // signed in
  } catch (e) {
    console.warn(`[apple]`, e);
  }
};

export const LoginAuth = () => {
  const [isAppleAuthAvailable, setAppleAuthAvailable] = useState(false);

  useEffect(() => {
    const checkAppleAvailability = async () => {
      const isAvailable = await A.isAvailableAsync();
      setAppleAuthAvailable(isAvailable);
    };
    checkAppleAvailability();
  }, []);

  return (
    <View className="flex-1 justify-center p-2">
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInWithGoogle}
        style={{ width: '48%', height: 50, display: 'flex' }}
        disabled={false}
      />
      {isAppleAuthAvailable ? (
        <A.AppleAuthenticationButton
          buttonType={A.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={A.AppleAuthenticationButtonStyle.BLACK}
          style={{ width: '46%', height: 44, display: 'flex' }}
          onPress={singInWithApple}
        />
      ) : (
        <></>
      )}
    </View>
  );
};
