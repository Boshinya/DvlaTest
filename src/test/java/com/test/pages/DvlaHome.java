package com.test.pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static com.test.utils.DriverFactory.driver;

public class DvlaHome {



    @FindBy(id = "get-started")
    private WebElement startNowButton;

    public void getHomeURL() {
        driver.get("https://www.gov.uk/get-vehicle-information-from-dvla#more-information");
    }

    public void clickOnStartNow() {
        startNowButton.findElement(By.tagName("a")).click();
    }

}
