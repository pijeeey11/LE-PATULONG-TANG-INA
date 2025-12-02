import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated, Dimensions, PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function ServiceBottomSheet({ visible = true, onServiceSelect }) {
    const [modalVisible, setModalVisible] = useState(visible);

    const services = [
        { id: 'delivery', name: 'Delivery', icon: 'airplane', color: '#4A90E2' },
        { id: 'pickup', name: 'Pickup', icon: 'bag-handle', color: '#66BB6A' },
        { id: 'grocery', name: 'Grocery', icon: 'cart', color: '#FFA726' },
        { id: 'pharmacy', name: 'Pharmacy', icon: 'medical', color: '#EF5350' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.handle}>
                <View style={styles.handleBar} />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>Hello! How can we help?</Text>

                <View style={styles.servicesGrid}>
                    {services.map((service) => (
                        <TouchableOpacity
                            key={service.id}
                            style={styles.serviceCard}
                            onPress={() => onServiceSelect && onServiceSelect(service.id)}
                        >
                            <View style={[styles.iconContainer, { backgroundColor: service.color + '20' }]}>
                                <Ionicons name={service.icon} size={32} color={service.color} />
                            </View>
                            <Text style={styles.serviceName}>{service.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        paddingBottom: 20,
    },
    handle: {
        alignItems: 'center',
        paddingVertical: 12,
    },
    handleBar: {
        width: 40,
        height: 4,
        backgroundColor: '#D0D0D0',
        borderRadius: 2,
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceCard: {
        width: '48%',
        backgroundColor: '#F8F9FA',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        alignItems: 'center',
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});
