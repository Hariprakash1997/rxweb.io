
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>File Type</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.fileType" type="text" name="name" />
          <small class="form-text text-muted">Based on selection of file type conditional validation is applied<br/></small>
       <div v-if="userInfoFormGroup.controls.fileType.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.fileType.errors.extension.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Profile Picture</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.profilePicture" type="text" name="name" />
          <small class="form-text text-muted">This field only allow file extension as jpg or bmp only.<br/></small>
       <div v-if="userInfoFormGroup.controls.profilePicture.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.profilePicture.errors.extension.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Image File</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.imageFile" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Image File' then you need to add 'File Type' input as 'Picture'.<br/></small>
       <div v-if="userInfoFormGroup.controls.imageFile.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.imageFile.errors.extension.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Document File</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.documentFile" type="text" name="name" />
          <small class="form-text text-muted">If you want to apply conditional validation on 'Document File' then you need to add 'File Type' input as 'Document'.<br/></small>
         <small class="form-text text-muted">It allow only doc or docx<br/></small>
       <div v-if="userInfoFormGroup.controls.documentFile.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.documentFile.errors.extension.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Contact File</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.contactFile" type="text" name="name" />
          <small class="form-text text-muted">This field only allow file extension as .vcf files.<br/></small>
         <small class="form-text text-muted">It shows custom message<br/></small>
       <div v-if="userInfoFormGroup.controls.contactFile.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.contactFile.errors.extension.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Excel File</label>
        <input id="name" class="form-control" v-model="userInfoFormGroup.props.excelFile" type="text" name="name" />
          <small class="form-text text-muted">Shows custom message based on message key<br/></small>
       <div v-if="userInfoFormGroup.controls.excelFile.errors">
         <small class="form-text text-danger">{{userInfoFormGroup.controls.excelFile.errors.extension.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { UserInfo } from './userInfo.model';

@Component
export default class ExtensionCompleteComponent extends Vue {
 userInfoFormGroup: IFormGroup<UserInfo>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userInfoFormGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>;
   }
}
</script> 
