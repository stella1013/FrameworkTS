import { DrugsEntity } from 'redux/types_other';
import { FilteredData } from 'redux/types_main';

export const sort = async (data: FilteredData) => {
	let newFilteredData: FilteredData = { drugs: [] };
	let newArr = data.drugs.map((item: any) => item);

	newFilteredData.drugs = newArr;
	return newFilteredData;
};
