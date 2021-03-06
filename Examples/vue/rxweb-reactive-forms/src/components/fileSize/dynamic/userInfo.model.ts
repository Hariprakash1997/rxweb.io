import {  fileSize,prop, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@prop()
	fileType: string;

	@prop()
	videoFile: string;

	@prop()
	audioFile: string;

	@prop()
	imageFile: string;

	@prop()
	contactFile: string;

	@prop()
	profilePicture: string;

	@prop()
	excelFile: string;

}
