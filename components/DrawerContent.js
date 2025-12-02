import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function DrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={32} color="#4A90E2" />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Welcome!</Text>
                        <Text style={styles.userEmail}>user@apusfly.com</Text>
                    </View>
                </View>
            </View>

            <View style={styles.menuItems}>
                <DrawerItemList {...props} />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => {
                    // Handle logout
                    console.log('Logout pressed');
                }}>
                    <Ionicons name="log-out-outline" size={24} color="#FF5252" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfo: {
        marginLeft: 16,
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    userEmail: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    menuItems: {
        flex: 1,
        paddingTop: 8,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        padding: 16,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    logoutText: {
        fontSize: 16,
        color: '#FF5252',
        marginLeft: 32,
        fontWeight: '500',
    },
});
