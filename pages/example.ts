import { t, Selector, ClientFunction } from "testcafe";
import { webLocators } from "../utils/webLocators";
import { testValues } from "../utils/testValues";

class Example {
  yourNameInput: Selector;
  populateButton: Selector;
  featureRemoteDevicesCheckbox: Selector;
  featureReusingCodeCheckbox: Selector;
  featureTestsInBackgroundCheckbox: Selector;
  featureContinuousIntegrationCheckbox: Selector;
  featureAdvancedTrafficCheckbox: Selector;
  primaryOSWindowsRadioButton: Selector;
  primaryOSMacOSRadioButton: Selector;
  primaryOSLinuxRadioButton: Selector;
  testCafeInterfaceDropdown: Selector;
  testCafeInterfaceOption: Selector;
  iHaveTriedTestCafeCheckbox: Selector;
  slider: Selector;
  commentsInput: Selector;
  submitButton: Selector;
  button: Selector;
  getURL = ClientFunction(() => window.location.href);

  constructor() {
    this.button = Selector("button")
      .with({ visibilityCheck: true })
      .withExactText("Submit");
    this.yourNameInput = Selector(webLocators.yourNmaeInput);
    this.populateButton = Selector(webLocators.populateButton);
    this.featureRemoteDevicesCheckbox = Selector(
      webLocators.featuresImportantToYouCheckbox.remoteDevices
    );
    this.featureReusingCodeCheckbox = Selector(
      webLocators.featuresImportantToYouCheckbox.reusingJSCode
    );
    this.featureTestsInBackgroundCheckbox = Selector(
      webLocators.featuresImportantToYouCheckbox.backgroundParallelTesting
    );
    this.featureContinuousIntegrationCheckbox = Selector(
      webLocators.featuresImportantToYouCheckbox.continuousIntegrationEmbedding
    );
    this.featureAdvancedTrafficCheckbox = Selector(
      webLocators.featuresImportantToYouCheckbox.trafficMarkupAnalysis
    );
    this.primaryOSWindowsRadioButton = Selector(
      webLocators.primaryOperativeSistemRadioButton.windows
    );
    this.primaryOSMacOSRadioButton = Selector(
      webLocators.primaryOperativeSistemRadioButton.macOs
    );
    this.primaryOSLinuxRadioButton = Selector(
      webLocators.primaryOperativeSistemRadioButton.linux
    );
    this.testCafeInterfaceDropdown = Selector(
      webLocators.testcafeInterfaceDropdown
    );
    this.testCafeInterfaceOption =
      this.testCafeInterfaceDropdown.find("option");
    this.iHaveTriedTestCafeCheckbox = Selector(
      webLocators.iHaveTriedTestcafeCheckbox
    );
    this.slider = Selector(webLocators.slider);
    this.commentsInput = Selector(webLocators.commentsInput);
    this.submitButton = Selector(webLocators.submitButton);
  }

  //   Action functions
  clickYourNameInput = async () => {
    await t.click(this.yourNameInput);
  };

  replaceWithYourNameInput = async () => {
    await t
      .typeText(this.yourNameInput, testValues.myName, { replace: true })
      .wait(1000);
  };

  clickPopulateButton = async () => {
    await t.click(this.populateButton).wait(1000);
  };

  clickFeaturesCheckbox = async (feature: string) => {
    switch (feature) {
      case testValues.featuresImportantToYou.remoteDevices:
        await t.click(this.featureRemoteDevicesCheckbox);
        break;
      case testValues.featuresImportantToYou.reusingJSCode:
        await t.click(this.featureReusingCodeCheckbox);
        break;
      case testValues.featuresImportantToYou.backgroundParallelTesting:
        await t.click(this.featureTestsInBackgroundCheckbox);
        break;
      case testValues.featuresImportantToYou.continuousIntegrationEmbedding:
        await t.click(this.featureContinuousIntegrationCheckbox);
        break;
      case testValues.featuresImportantToYou.trafficMarkupAnalysis:
        await t.click(this.featureAdvancedTrafficCheckbox);
        break;
      default:
        console.log(`No TestCafe feature provided`);
    }
  };

  clickPrimaryOS = async (primaryOS: string) => {
    switch (primaryOS) {
      case `Windows`:
        await t.click(this.primaryOSWindowsRadioButton);
        break;
      case `MacOS`:
        await t.click(this.primaryOSMacOSRadioButton);
        break;
      case `Linux`:
        await t.click(this.primaryOSLinuxRadioButton).wait(1000);
        break;
      default:
        console.log(`No OS provided`);
    }
  };

  pickTestCafeInteface = async (testcafeInterface: string) => {
    await t
      .click(this.testCafeInterfaceDropdown)
      .click(this.testCafeInterfaceOption.withText(testcafeInterface));
  };

  clickiHaveTriedTestCafeCheckbox = async () => {
    await t.click(this.iHaveTriedTestCafeCheckbox);
  };

  dragSlider = async (destinationValue: string) => {
    const destination: Selector =
      Selector(`.slider-value`).withText(destinationValue);
    await t.dragToElement(this.slider, destination);
  };

  populateCommentsInput = async (commnets: string) => {
    await t
      .click(this.commentsInput)
      .typeText(this.commentsInput, commnets)
      .wait(1000);
  };

  clickSubmitButton = async () => {
    await t.click(this.submitButton).wait(4000);
  };

  checkSubmitButtonIsDisabled = async () => {
    await t.expect(this.button.hasAttribute("disabled")).ok();
  };
}

export const example = new Example();
