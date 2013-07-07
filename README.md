# ui-router Goto for AngularJS

**`ui-goto` is a directive for ui-router that lets you link to states instead of URLs.** In your WebApp, it's important to think in all the different states that the app can have first. Each state may or may not have an URL. This is the idea of ui-router. In the future version, I'll be adding the `href` property as well for bookmarkeability and ability to open any link on a new tab. 

**It also handles the Parameter inheritance.**

# How do I add this to my project?

You can download this by:

* Using bower and running `bower install mgo-ui-router-goto`
* [Downloading it manually by clicking here](https://raw.github.com/mgonto/mgo-ui-router-goto/master/uiGoto.js)

# Usage / Getting started

Using this directive is pretty easy. Is just depends on AngularJS and ui-router of course.

First step is to include this module to your app:

````javascript
angular.module('myApp', ['ui.router', 'mgo.ui.router.directives'];
````

Now you can use it, let's see some examples!

### Basic example
It can be used in anything you wat the user to be able to click and go to another state. Let's see a basic example

````html
<a ui-goto="alerts">Go to alerts</a>
````

In this case, you'll be able to navigate to the alerts state.

### Example With parameters

Now, let's call a state with a 3 parameter in alertId

````html
<a ui-goto="alerts" ui-goto-params="{alertId: 3}">Go to alerts</a>
````

Or, you can use variables from the scope to set the parameters:

````html
<a ui-goto="alerts" ui-goto-params="{alertId: alert.id}">Go to alerts</a>
````

### Parameters Inheritance

Now, let's suppose you have a base state called `account` which receives an `accountId` as a parameter because the URL is `/accounts/:accountId`. It has 2 child states: `account.users` and `account.profiles`.

If you're right now in the template for `account.users` and you want to move to `account.profiles` with current ui router's code, you need to specify again the `accountId` parameter to move to that state. This directive takes care of this. So, if you're at the `account.users` template, you could write the following and it'd transition to `account.profiles` with the URL `/accounts/:accountId/profiles`.

````html
<a ui-goto="accounts.profiles" >Go to Account's profiles</a>
````

With this, you'll be sending the accountId as well

# License

The MIT License

Copyright (c) 2013 Martin Gontovnikas http://www.gon.to/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




