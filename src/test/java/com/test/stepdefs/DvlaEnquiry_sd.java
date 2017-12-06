package com.test.stepdefs;

import com.test.pages.DvlaEnquiry;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;

import static com.test.utils.DriverFactory.driver;

public class DvlaEnquiry_sd {

    DvlaEnquiry dvlaEnquiry = PageFactory.initElements(driver,DvlaEnquiry.class);

    @Given("^I read all the registration number from the \"([^\"]*)\" file$")
    public void i_read_all_the_registration_number_from_the_input_file(String fileName) throws Throwable {
        dvlaEnquiry.getRegumbers(fileName);
    }

    @When("^I enter \"([^\"]*)\" number$")
    public void i_enter_regitration_number(String regnumber) throws Throwable {
        dvlaEnquiry.enterRegNnumber(regnumber);
    }

    @When("^I click on continue button$")
    public void i_click_on_continue_button(){
        dvlaEnquiry.clikOnContinueButton();
    }

}
