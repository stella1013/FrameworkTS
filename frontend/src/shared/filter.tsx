import { DrugsEntity } from 'redux/types_other';
import { FilteredData } from 'redux/types_main';


export const filterData = async (data: DrugsEntity[], id:any, value:any) => {
  let newFilteredData:FilteredData = {drugs:[]};
  let newArr = data.filter((value: DrugsEntity) => {
      //console.log('helooooo filter', value.drug.quantity === 30 && value);
      if(value.drug.quantity === 30){
        return value        
      }
      
  });
  newFilteredData.drugs = newArr;
  return newFilteredData;
}
