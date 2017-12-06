package com.test;

import com.test.utils.DriverFactory;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, strict = true,
tags={"@test"},
features="src/test/resources/features",
format={"html:target/cucumber", "json:target/cucumber.json"},
glue={"com.test/stepdefs",
      "com.test/utils"  })

public class RunCucumberTest extends DriverFactory {

    protected static final Logger LOG = LoggerFactory.getLogger(RunCucumberTest.class);

    @BeforeClass
    public static void setup() throws Throwable {
        LOG.info(
            "Tests starting now with cucumber.options=[{}]",
            System.getProperty("cucumber.options"));
        driver = new DriverFactory().getdriver();
    }

    @AfterClass
    public static void teardown() {
        if (DriverFactory.driver != null) {
            DriverFactory.destroyDriver();
        }
    }
}


