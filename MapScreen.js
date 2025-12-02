import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import ServiceBottomSheet from './components/ServiceBottomSheet';

const { width, height } = Dimensions.get('window');

export default function MapScreen({ navigation }) {
    // Mock drone data
    const drones = [
        { id: 1, latitude: 14.7011, longitude: 120.9830, name: "Drone 1" }, // Approx Valenzuela area
        { id: 2, latitude: 14.6950, longitude: 120.9900, name: "Drone 2" },
        { id: 3, latitude: 14.6880, longitude: 120.9800, name: "Drone 3" },
        { id: 4, latitude: 14.6800, longitude: 120.9950, name: "Drone 4" },
    ];

    const handleServiceSelect = (serviceId) => {
        console.log('Selected service:', serviceId);
        if (serviceId === 'delivery') {
            // Navigate to delivery flow
            navigation.navigate('DeliveryFlow');
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 14.6911,
                    longitude: 120.9830,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
            >
                {drones.map((drone) => (
                    <Marker
                        key={drone.id}
                        coordinate={{ latitude: drone.latitude, longitude: drone.longitude }}
                    >
                        <View style={styles.markerContainer}>
                            <View style={styles.droneIconContainer}>
                                <MaterialCommunityIcons name="quadcopter" size={24} color="black" />
                                <View style={styles.centerDot} />
                            </View>
                        </View>
                    </Marker>
                ))}
            </MapView>

            {/* Search Bar Overlay */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Ionicons name="menu" size={24} color="black" />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Where to?"
                        placeholderTextColor="#666"
                    />

                    <View style={styles.rightIcons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="mic" size={20} color="#666" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <MaterialCommunityIcons name="scan-helper" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Bottom Sheet with Services */}
            <ServiceBottomSheet onServiceSelect={handleServiceSelect} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    searchContainer: {
        position: 'absolute',
        top: 50, // Adjust for status bar
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconButton: {
        padding: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: '#000',
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    markerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    droneIconContainer: {
        backgroundColor: 'rgba(135, 206, 250, 0.5)', // Light blue transparent
        borderRadius: 30,
        padding: 10,
        borderWidth: 2,
        borderColor: 'rgba(135, 206, 250, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerDot: {
        position: 'absolute',
        width: 6,
        height: 6,
        backgroundColor: '#007AFF',
        borderRadius: 3,
    }
});
