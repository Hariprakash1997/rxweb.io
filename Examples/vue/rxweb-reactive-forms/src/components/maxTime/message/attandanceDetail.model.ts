import {  maxTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@maxTime({message:'You can enter only time format data'  ,fieldName:'closingTime' }) 
	exitTime: string;
	
	
}
