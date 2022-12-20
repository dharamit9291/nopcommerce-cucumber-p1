$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shoppingcartpage.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping CartPage Test",
  "description": "\r\nAs a user I want to verify product added to shopping cart",
  "id": "shopping-cartpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14486859400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Product Added To Shopping Cart Successfully",
  "description": "",
  "id": "shopping-cartpage-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@test3"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on computerpage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computers and Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on sort computer and desktop \"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add To Cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Verify the Text Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select 2.2 GHz Intel Pentium Dual-Core E2200 using Select",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Select 8GB [+$60.00] using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select HDD radio 400 GB [+$100.00]",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select OS radio Vista Premium [+$60.00]",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I check Check Two Check boxes Microsoft Office [+$50.00] and Total Commander[+$5.00]",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify the price $1,475.00",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on ADD TO CARD Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify Verify the Message The product has been added to your shopping cart on Topgreen Bar",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I MouseHover on Shopping cart and Click on GO TO CART button.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify the message Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Change the Qty to 2 and Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Verify the Total$2,950.00",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Verify the Text Welcome, Please Sign In!",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I 1Click on CHECKOUT AS GUEST Tab",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#    ***********************************************************************************"
    }
  ],
  "line": 29,
  "name": "I Fill the all mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Click on Radio Button Next Day Air($0.00)",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select Radio Button Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Select Master card From Select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Fill all the details",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click Click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Verify Payment Method is Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I Verify Shipping Method is Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Verify Total is $2,950.00",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Click on CONFIRM",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Verify the Text Thank You",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify the message Your order has been successfully processed!",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Verify the text Welcome to our store",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verifyProductAddedToShoppingCartSuccessFully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnComputerpage()"
});
formatter.result({
  "duration": 1483782400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersAndDesktops()"
});
formatter.result({
  "duration": 1032607800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 38
    }
  ],
  "location": "ComputerPageSteps.iClickOnSortComputerAndDesktop(String)"
});
formatter.result({
  "duration": 301530700,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 5116007400,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyTheTextBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1597853400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "2200",
      "offset": 42
    }
  ],
  "location": "ShoppingCartSteps.iSelectGHzIntelPentiumDualCoreEUsingSelect()"
});
formatter.result({
  "duration": 919300,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommece.steps.ShoppingCartSteps.iSelectGHzIntelPentiumDualCoreEUsingSelect() in file:/C:/Users/kaush/Dropbox/SoftwaretestingCourse/PrimeTestingSep22/PrimeTesting/WEEK-1617.12.2022cucumber-jenkins/HomeWork-wk16/p1-wk16-nopcommerce/target/test-classes/\u0027 with pattern [^I Select (\\d+)\\.(\\d+) GHz Intel Pentium Dual-Core E(\\d+) using Select$] is declared with 0 parameters. However, the gherkin step has 3 arguments [2, 2, 2200]. \nStep: And I Select 2.2 GHz Intel Pentium Dual-Core E2200 using Select\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 9
    },
    {
      "val": "60",
      "offset": 16
    },
    {
      "val": "00",
      "offset": 19
    }
  ],
  "location": "ShoppingCartSteps.iSelectGB$UsingSelectClass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 19
    },
    {
      "val": "100",
      "offset": 29
    },
    {
      "val": "00",
      "offset": 33
    }
  ],
  "location": "ShoppingCartSteps.iSelectHDDRadioGB$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 35
    },
    {
      "val": "00",
      "offset": 38
    }
  ],
  "location": "ShoppingCartSteps.iSelectOSRadioVistaPremium$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 50
    },
    {
      "val": "00",
      "offset": 53
    },
    {
      "val": "5",
      "offset": 79
    },
    {
      "val": "00",
      "offset": 81
    }
  ],
  "location": "ShoppingCartSteps.iCheckCheckTwoCheckBoxesMicrosoftOffice$AndTotalCommander$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "475",
      "offset": 22
    },
    {
      "val": "00",
      "offset": 26
    }
  ],
  "location": "ShoppingCartSteps.iVerifyThePrice$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnADDTOCARDButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyVerifyTheMessageTheProductHasBeenAddedToYourShoppingCartOnTopgreenBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iMouseHoverOnShoppingCartAndClickOnGOTOCARTButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyTheMessageShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "ShoppingCartSteps.iChangeTheQtyToAndClickOnUpdateShoppingCart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "950",
      "offset": 21
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "ShoppingCartSteps.iVerifyTheTotal$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnCHECKOUT()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyTheTextWelcomePleaseSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 2
    }
  ],
  "location": "ShoppingCartSteps.iClickOnCHECKOUTASGUESTTab(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iFillTheAllMandatoryField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 38
    },
    {
      "val": "00",
      "offset": 40
    }
  ],
  "location": "ShoppingCartSteps.iClickOnRadioButtonNextDayAir$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iSelectRadioButtonCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iSelectMasterCardFromSelectCreditCardDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iFillAllTheDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickClickOnCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyPaymentMethodIsCreditCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyShippingMethodIsNextDayAir()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    },
    {
      "val": "950",
      "offset": 21
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "ShoppingCartSteps.iVerifyTotalIs$()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnCONFIRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyTheTextThankYou()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyTheMessageYourOrderHasBeenSuccessfullyProcessed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iClickOnCONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyTheTextWelcomeToOurStore()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartSteps.iVerifyProductAddedToShoppingCartSuccessFully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 489009300,
  "status": "passed"
});
});