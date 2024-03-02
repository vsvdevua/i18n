# World


## Create application

ng new world --prefix sv --no-standalone

## Install localization

 ng add @angular/localize

## Configure locales


angular.json
```json
"projects" : {
-----------------------------add------------------------
"i18n-receipt-demo": {
"i18n": {
"sourceLocale": "en-US",
"locales": {
"es-PR": {
"translation": "src/locale/messages.es.xlf",
"baseHref": "es-PR/"
}
}
},
-----------------------------------------------------------
      "projectType": "application",
...
...
"build": {
"builder": "@angular-devkit/build-angular:browser",
"options": {
-------------------------add---------------------------
"localize": [
"es-PR"
],
--------------------------------------------------------
            "outputPath": "dist/world"
```



## Edit html code


html add i18n
```html

</h2>
<p i18n>
Thank you for shopping with us and your order
has been processed.
</p>
<table>
<tr>
<th i18n>Item</th>
<th i18n>Qty</th>
 <td>{{"05/01/2022" | date}}</td>
        <td>{{129 | currency}}</td>
```


## Edit ts code


in component.ts


```ts
export class AppComponent {
title = 'Your Receipt';

constructor(private titleService: Title) {
this.titleService.setTitle($localize`${this.title}`);
}

}
```


## Generate messages file and translate

ng extract-i18n --output-path src/locale

in locale folder appears file messages.xlf

we create file messages.es.xlf and copy there info from messages.xlf

under <source> we add <target> with translation

```xlf
<trans-unit id="3277059772153279197" datatype="html">
<source>hero image</source>
<target>imagen de héroe</target>
```


## Build versions

ng serve
ng build --localize

## Test on http-server


npm install http-server -g

http-server dist/world

serve dist/world

then you can append to url your locales /en-US or /es-PR

es-PR/
uk-UA/
de-DE/
en-US/
ru-RU/

