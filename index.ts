import 'expo-router/entry';
import { Amplify } from 'aws-amplify';
import awsExports from './app/aws-exports';
Amplify.configure(awsExports);