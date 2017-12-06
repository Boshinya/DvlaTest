package com.test.stepdefs;

import com.test.pages.DvlaResults;
import cucumber.api.java.en.Then;
import org.openqa.selenium.support.PageFactory;

import static com.test.utils.DriverFactory.driver;
import static org.hamcrest.MatcherAssert.assertThat;

public class DvlaResults_sd {

    DvlaResults dvlaResults = PageFactory.initElements(driver,DvlaResults.class);

    @Then("^I verify the Make \"([^\"]*)\" of the vehicle$")
    public void i_verify_the_of_the_vehicle(String expectedMake){
        assertThat("Vehicle's Make is not matching",expectedMake.equalsIgnoreCase(dvlaResults.getMakeOftheVehicle()));
    }

    @Then("^I verify the Colour \"([^\"]*)\" of the vehicle$")
    public void i_verify_the_Colour_of_the_vehicle(String expectedColur){
        assertThat("Vehicle's Colour is not matching",expectedColur.equalsIgnoreCase(dvlaResults.getColourOftheVehicle()));
    }
}
