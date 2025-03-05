import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const HomeScreen = ({ navigation }) => {
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setCapturedPhoto(data.uri);
    console.log(data.uri);
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}>
        {({ camera }) => (
          <View>
            <Button title="Capture" onPress={() => takePicture(camera)} />
            {capturedPhoto && <Text>Photo captured: {capturedPhoto}</Text>}
          </View>
        )}
      </RNCamera>
    </View>
  );
};

export default HomeScreen;
