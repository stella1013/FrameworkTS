import { PaginatedData, SortedData, FilteredData } from 'redux/types_main';
import { DrugsEntity } from 'redux/types_other';

export const createPages = async (e: any) => 
{
	let d = {...e};
	let main:PaginatedData = {pages:[]};
	if (d) {
		let counter = 0;
		let totalItems:number = d.drugs.length;
		let itemsPerPage:number = 4;
		let pagesCount:number = Math.ceil(totalItems / itemsPerPage);
		//console.log('pagesCounte', pagesCount);
		while (counter < pagesCount) {
			let tempdata:any = d.drugs.splice(0, itemsPerPage);
			main.pages.push(tempdata);
			counter++;
		}
	}
		return main;
}
