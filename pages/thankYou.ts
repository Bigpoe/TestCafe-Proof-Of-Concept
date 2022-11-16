import { Selector } from "testcafe";
import { webLocators } from "../utils/webLocators";

class ThankYou {
  thankYouMessage: Selector;

  constructor() {
    this.thankYouMessage = Selector(webLocators.thankYouMessage);
  }
}

export const thankYou = new ThankYou();
