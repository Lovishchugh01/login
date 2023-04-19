import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components/Button';
// import {CountryPicker} from "react-native-country-codes-picker";
import { PhoneView, Heading, Main, Subheading, TextView, Wrapper, BorderView, PhoneInputView, SignupView } from '../styles/styles';
import CountryPicker from 'react-native-country-picker-modal'
export const LoginScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [callingCode, setCallingCode] = useState('+91')
  const [countryCode, setCountryCode] = useState('IN');
  const [phone, setPhone] = useState('')
  return (
    <Main flex={1}>
      <Wrapper>
        <AntDesign name="arrowleft" size={24} color="white" onPress={()=>navigation.goBack()} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Subheading>Register</Subheading>
        </TouchableOpacity>
      </Wrapper>
      <TextView>
        <Heading>Sign in</Heading>
        <Subheading marginVertical={20}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsa exercitationem excepturi et</Subheading>
      </TextView>

      <PhoneView flex={1}>
        <BorderView>

          <Text  style={{color:'#808080'}}>Phone</Text>
        <PhoneInputView>
            <CountryPicker
              withFilter
              countryCode={countryCode}
              withFlag
              // withCountryNameButton
              withAlphaFilter={false}
              withCallingCode
              withCurrencyButton={false}
              onSelect={country =>{
                console.log(country)
                const { cca2, callingCode} = country;
                setCountryCode(cca2)
                setCallingCode(callingCode[0])

              }}
              containerButtonStyle={{
                alignItems:"center",
                marginRight:-10,
              }}
            />
            <Text style={{fontSize:20}}> <AntDesign name="down" size={12} color="black" /> | </Text>
          <TextInput value={phone} flex={1} onChangeText={text => setPhone(text)} mode="outlined" keyboardType={'phone-pad'} maxLength={10} placeholder='Number' />
        </PhoneInputView>
        </BorderView>
        <Button onPress={()=>navigation.navigate('OTP')} title="Sign in" />


      </PhoneView>
      <SignupView justifyContent="center" flexDirection="row">

        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={{ color: 'orange' }}> Sign up </Text>
        </TouchableOpacity>
      </SignupView>
      <StatusBar style="light" />

      

    </Main>
  )
}