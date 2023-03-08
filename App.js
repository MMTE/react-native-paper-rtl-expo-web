import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';
import {I18nManager} from "react-native";
import {I18nManager as I18nManagerWeb } from "react-native-web";

export default function App() {

    I18nManager.forceRTL(true);
    I18nManagerWeb.forceRTL(true);

    return (
        <PaperProvider>
            <View>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => {
                    }}/>
                    <Appbar.Content title="سلام!"/>
                    <Appbar.Action icon="calendar" onPress={() => {
                    }}/>
                    <Appbar.Action icon="magnify" onPress={() => {
                    }}/>
                </Appbar.Header>
            </View>
        </PaperProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
