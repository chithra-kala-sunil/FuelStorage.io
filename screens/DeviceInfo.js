import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  NativeModules,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  console.log({NativeModules});
  const {ReactOneCustomMethod} = NativeModules;
  console.log({NativeModules, ReactOneCustomMethod});
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [device, setDevice] = useState('');
  const [model, setModel] = useState('');
  const [version, setVersion] = useState('');
  const [locale, setLocale] = useState('');
  const [buildNo, setBuildNumber] = useState('');
  const [bundleId, setBundleID] = useState('');

  const getId = () => {
    ReactOneCustomMethod.getPhoneID()
      .then((res: string) => {
        setId('ID: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getType = () => {
    ReactOneCustomMethod.getPhoneType()
      .then((res: string) => {
        setType('Type: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getDevice = () => {
    ReactOneCustomMethod.getDeviceName()
      .then((res: string) => {
        setDevice('Device: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getModel = () => {
    ReactOneCustomMethod.getDeviceModel()
      .then((res: string) => {
        setModel('Model: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getVersion = () => {
    ReactOneCustomMethod.getSystemVersion()
      .then((res: string) => {
        setVersion('Version: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getlocale = () => {
    ReactOneCustomMethod.getSystemLocale()
      .then((res: string) => {
        setLocale('Locale: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getBuildNo = () => {
    ReactOneCustomMethod.getBuildNumber()
      .then((res: string) => {
        setBuildNumber('Locale: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getBundleId = () => {
    ReactOneCustomMethod.getBuildNumber()
      .then((res: string) => {
        setBundleID('Locale: ' + res);
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.id}>{id}</Text>
      <Button title="Get Id" onPress={getId} />

      <Text style={styles.id}>{type}</Text>
      <Button title="Get Type" onPress={getType} />

      <Text style={styles.id}>{device}</Text>
      <Button title="Get Device" onPress={getDevice} />

      <Text style={styles.id}>{model}</Text>
      <Button title="Get Model" onPress={getModel} />

      <Text style={styles.id}>{version}</Text>
      <Button title="Get Version" onPress={getVersion} />

      <Text style={styles.id}>{locale}</Text>
      <Button title="Get Locale" onPress={getlocale} />

      <Text style={styles.id}>{buildNo}</Text>
      <Button title="Get Build No." onPress={getBuildNo} />

      <Text style={styles.id}>{bundleId}</Text>
      <Button title="Get Bundle Id" onPress={getBundleId} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  id: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
