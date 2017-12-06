package com.test.utils;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static com.test.utils.DriverFactory.driver;

public class Hooks {

    private static final Logger LOG = LoggerFactory.getLogger(Hooks.class);


    @Before
    public void beforeScenario(Scenario scenario) {
        LOG.info("###### Starting Scenario : {} ######", scenario.getName());
    }

    @After
    public void afterScenario(Scenario scenario){
        LOG.info("###### Finished Scenario : {} ######", scenario.getName() + " -> Status: " + scenario.getStatus());
            embedScreenshot(scenario);
    }

    private void embedScreenshot(Scenario scenario) {
        if (scenario.getSourceTagNames().contains("@test")) {
            try {
                byte[] screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenShot, "image/png");
            } catch (WebDriverException e) {
                LOG.error(e.getMessage());
            }
        }
    }
}
