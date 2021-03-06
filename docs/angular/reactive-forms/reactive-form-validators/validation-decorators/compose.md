---
title: compose
description: Compose validation {{validatorType}} is used to apply multiple validations on a particular formControl.
author: rxcontributortwo
category: form-validations
subcategory: Custom
type: tabs
linktitle: compose
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>compose validation {{validatorType}} is used to apply multiple validations on a particular formControl.</p></div>

# When to use
  <data-scope scope="['decorator','validator']">
Suppose you want to create UserInfo form, which contains fields like firstName, lastName, age, cityName, countryName and apply multiple validations on these fields. Here depending upon the requirement these scenarios may arise.

<ol class='showHideElement'>
    <li>Apply compose validation on firstName field.</li>
    <li>Apply compose validation on lastName field using message key.</li>
    <li>Apply compose validation on age field based on matched condition in the form, like if the firstName is 'Bharat', then only the age must be validated (Based on function).</li>
    <li>Apply compose validation based on matched condition in the form, like if the firstName is   'Bharat', then only the cityName must be validated ( Based on string datatype).</li>
     <li>Apply compose validation on countryName field.</li>
    <data-scope scope="['decorator','validator']">
    <li>Apply compose validation dynamically based on server rules.</li>
    </data-scope>
</ol>

Let’s see how compose {{validatorType}} fulfil the need.

# Basic Compose Validation
<data-scope scope="['decorator']">
First we need to create a User Model class and define property of firstName in the model to achieve the functional need of point 1.
<div component="app-code" key="compare-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operations. 

<div component="app-code" key="compose-add-component"></div> 

Next, we need to write html code.

<div component="app-code" key="compose-add-html"></div> 
<div component="app-example-runner" ref-component="app-compose-add"></div>

# ComposeConfig

<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@compose()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.compose()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `compose` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>Compose validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey option of compose validation is used to set the key based validation message.</td></tr>
<tr><td><a (click)='scrollTo("#validators")' title="validators">validators</a></td><td>It is an array of rxwebValidators. Validators are set according to the relative requirement based on which validation you want to apply. Here you have to specify the name of validator which you want to use.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

Compose validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object. 
<div component="app-code" key="compose-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object. 
<div component="app-code" key="compose-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-compose-conditionalExpression" title="compose {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="compose-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-compose-message" title="compose {{validatorType}} with message" key="message"></div>

## messageKey
Type :  `string`

messageKey option of compose validation is used to set the key based validation message.

<div component="app-code" key="compose-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-compose-messageKey" title="Compose {{validatorType}} with messageKey" key="messageKey"></div>

## validators
Type :  `ValidatorFn[]`

It is an array of rxwebValidators. Validators are set according to the relative requirement based on which validation you want to apply. Here you have to specify the name of validator which you want to use.

<data-scope scope="['decorator']">
You can create a custom validation function and mention that in the `@compose` decorator.
</data-scope>

<div component="app-code" key="compose-validatorsExample-model"></div> 
<div component="app-example-runner" ref-component="app-compose-validators" title="Compose {{validatorType}} with validators" key="validators"></div>

# Complete Compose Example

This Complete Compose example which includes all the ComposeConfig properties will fulfil the requirement of scenarios 1, 2, 3, 4 and 5.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-compose-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="compose-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="compose-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="compose-complete-html"></div> 
# [/Html]
***



