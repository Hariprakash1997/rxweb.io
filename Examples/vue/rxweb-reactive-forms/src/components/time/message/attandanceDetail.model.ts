import {  time, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@time({message:'You can enter only time format data' }) 
	exitTime: string;
	
	
}
