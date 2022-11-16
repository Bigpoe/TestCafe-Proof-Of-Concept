import { testValues } from "../utils/testValues";
import { example } from "../pages/example";
import { thankYou } from "../pages/thankYou";

fixture`Login Test`.page(testValues.url).beforeEach(async (t) => {
  await t.setNativeDialogHandler((type) => {
    if (type === "confirm" || type === "alert") return true;
    return null;
  });
});

test(`Validate that Submit is not enabled without a value for name`, async (t) => {
  await example.checkSubmitButtonIsDisabled();
  await example.clickPopulateButton();
  await example.replaceWithYourNameInput();
  await example.clickFeaturesCheckbox(
    testValues.featuresImportantToYou.reusingJSCode
  );
  await example.clickFeaturesCheckbox(
    testValues.featuresImportantToYou.backgroundParallelTesting
  );
  await example.clickFeaturesCheckbox(
    testValues.featuresImportantToYou.continuousIntegrationEmbedding
  );
  await example.clickPrimaryOS(testValues.primaryOperativeSystem.macos);
  await example.pickTestCafeInteface(testValues.testcadeInterface.both);
  await example.clickiHaveTriedTestCafeCheckbox();
  await example.dragSlider(testValues.sliderScales.scale10);
  await example.populateCommentsInput(testValues.commnets);
  await example.clickSubmitButton();

  const thankYouUrl = await example.getURL();
  await t.expect(thankYouUrl).eql(testValues.thankYouUrl)
  await t.expect(thankYou.thankYouMessage.innerText).contains(testValues.myName)
});
