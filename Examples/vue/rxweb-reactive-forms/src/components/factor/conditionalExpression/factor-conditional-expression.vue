
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>First Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.firstNumber" type="text" name="name" />
        <div v-if="userFormGroup.controls.firstNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.firstNumber.errors.factor.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Third Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.thirdNumber" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of factor on 'Third Number' field, then enter the value '25' in 'First Number' textbox<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'string'<br/></small>
       <div v-if="userFormGroup.controls.thirdNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.thirdNumber.errors.factor.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Second Number</label>
        <input id="name" class="form-control" v-model="userFormGroup.props.secondNumber" type="text" name="name" />
          <small class="form-text text-muted">To apply the validation of factor on 'Second Number' field, then enter the value '25' in 'First Number' textbox<br/></small>
         <small class="form-text text-muted">Conditional Expression with type 'function'<br/></small>
       <div v-if="userFormGroup.controls.secondNumber.errors">
         <small class="form-text text-danger">{{userFormGroup.controls.secondNumber.errors.factor.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { User } from './user.model';

@Component
export default class FactorConditionalExpressionComponent extends Vue {
 userFormGroup: IFormGroup<User>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.userFormGroup = this.formBuilder.formGroup(User) as IFormGroup<User>;
   }
}
</script> 
