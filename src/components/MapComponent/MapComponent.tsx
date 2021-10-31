import React, { useState } from 'react';
import { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './MapComponentStyle';
import MapView from 'react-native-maps';
import { ILocation } from 'src/context/stoneContext/stoneContextTypes';
import { useStone } from '../../context/stoneContext/stoneContext';

export type Props = {
	name?: string;
};

const MapComponent: React.FC<Props> = ({ ...props }) => {
	const { setLocation } = useStone();
	const [marker, setMarker] = useState<ILocation | null>(null);
	const handleOnLongPress = (e: MapEvent) => {
		setMarker(e.nativeEvent.coordinate);
		setLocation(e.nativeEvent.coordinate);
	};
	return (
		<MapView
			provider={PROVIDER_GOOGLE}
			showsUserLocation
			style={styles.map}
			// onPress={e => console.log(e.nativeEvent)}
			onLongPress={e => handleOnLongPress(e)}
			region={{
				latitude: 49.2251056,
				longitude: 16.6236118,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{marker !== null && (
				<Marker
					coordinate={{
						latitude: marker.latitude,
						longitude: marker.longitude,
					}}
				/>
			)}
		</MapView>
	);
};

export default MapComponent;
