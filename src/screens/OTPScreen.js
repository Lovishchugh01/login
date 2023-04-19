import { Text, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components/Button';
import { ContinueView, Heading, Main, OtpInput, OtpInputView, OtpView, ResendView, Subheading, TextView, Wrapper } from '../styles/styles';


export const OtpScreen = () => {
    const navigation = useNavigation();
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);

    const handleTextChange = (text, ref) => {
      if (text.length === 1 && ref && ref.current) {
        ref.current.focus();
      }
    };
  
    const handleBackspace = (event, ref) => {
      if (event.nativeEvent.key === 'Backspace' && ref && ref.current) {
        ref.current.focus();
      }
    };
      
    return (
      <Main flex={1}>
          <Wrapper>
              <AntDesign name="arrowleft" size={24} color="white" onPress={()=>navigation.goBack()} />
              {/* <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Subheading>Register</Subheading>
              </TouchableOpacity> */}
          </Wrapper>
          <TextView>
              <Heading>Verification</Heading>
              <Subheading marginVertical={20}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsa exercitationem excepturi et</Subheading>
          </TextView>

          <OtpView flex={1}>
              <OtpInputView>
            <OtpInput
              maxLength={1}
              keyboardType="number-pad"
              ref={input1}
              onChangeText={(text) => handleTextChange(text, input2)}
              onKeyPress={(event) => handleBackspace(event, null)}
            />
            <OtpInput
              maxLength={1}
              keyboardType="number-pad"
              ref={input2}
              onChangeText={(text) => handleTextChange(text, input3)}
              onKeyPress={(event) => handleBackspace(event, input1)}
            />
          <OtpInput
              maxLength={1}
              keyboardType="number-pad"
              ref={input3}
              onChangeText={(text) => handleTextChange(text, input4)}
              onKeyPress={(event) => handleBackspace(event, input2)}
          />
          <OtpInput
              maxLength={1}
              keyboardType="number-pad"
              ref={input4}
              onChangeText={(text) => handleTextChange(text, input5)}
              onKeyPress={(event) => handleBackspace(event, input3)}
          />
          <OtpInput
              maxLength={1}
              keyboardType="number-pad"
              ref={input5}
              onChangeText={(text) => handleTextChange(text, input6)}
              onKeyPress={(event) => handleBackspace(event, input4)}
          />
          <OtpInput
              maxLength={1}
              keyboardType="number-pad"
              ref={input6}
              onChangeText={(text) => handleTextChange(text, null)}
              onKeyPress={(event) => handleBackspace(event, input5)}
          />
          </OtpInputView>
              <ResendView justifyContent="center" flexDirection="row" flex={1}>
                  <Text>Didn’t receive the code? </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                      <Text style={{ color: '#0C8A7B' }}> Click here </Text>
                  </TouchableOpacity>
              </ResendView>
              <ContinueView>
                  <Button title="Continue" />
              </ContinueView>

          </OtpView>


          <StatusBar style="light" />

      </Main>
    )
}