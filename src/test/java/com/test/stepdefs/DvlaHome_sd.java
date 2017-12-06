package com.test.stepdefs;

import com.test.pages.DvlaHome;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;

import static com.test.utils.DriverFactory.driver;

public class DvlaHome_sd {

    DvlaHome dvlaHome = PageFactory.initElements(driver,DvlaHome.class);

    @Given("^I am on DVLA search page$")
    public void i_am_on_DVLA_search_page(){
        dvlaHome.getHomeURL();
    }

    @When("^I click on start button$")
    public void i_click_on_button(){
        dvlaHome.clickOnStartNow();
    }
}
