import { User, Parking, Statistics, Device } from '../model';
import { getUserObj } from './user';

export const getParkingObj = async parking => {
	const owner = await User.findById(parking.owner);
	return await {
		name: parking.name,
		city: parking.city,
		address: parking.address,
		location: parking.location,
		seats: parking.seats,
		price: parking.price,
		type: parking.type,
		description: parking.description,
		owner: getUserObj(owner),
	};
};

export const getParkingsObj = async parkings => {
	return await Promise.all(
		parkings.map(async parking => await getParkingObj(parking)),
	);
};

export const deleteParking = async id => {
	const parking = await Parking.findByIdAndDelete(id);
	const { parkings } = await User.findById(parking.owner);
	const newParkings = parkings.filter(parking => parking !== id);
	await User.findByIdAndUpdate(parking.owner, {parkings: newParkings});
	await Device.deleteMany({"_id": parking.devices})
	if(parking.statistics) {
		await Statistics.findByIdAndDelete(parking.statistics)
	}
	
	return await getParkingObj(parking)
};

