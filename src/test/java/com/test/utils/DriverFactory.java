package com.test.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

public class DriverFactory {

    public static WebDriver driver;

    private static final String workingDir = System.getProperty("user.dir");

    public DriverFactory(){
        intialize();
    }

    private void intialize() {
        if(driver==null){
            createNewDriverInstance();
        }
    }

    private void createNewDriverInstance() {
        DesiredCapabilities  capabilities= getFireFoxDesiredCapabilities();
        driver=new FirefoxDriver(capabilities);
        driver.manage().window().maximize();
    }

    public WebDriver getdriver(){
        return driver;
    }

    public static void destroyDriver(){
        if(driver != null){
            driver.quit();
            driver = null;
        }
    }

    private DesiredCapabilities getFireFoxDesiredCapabilities() {
        FirefoxProfile profile = new FirefoxProfile();
        profile.setPreference("browser.download.folderList", 2);
        profile.setPreference("browser.download.manager.showWhenStarting", false);
        profile.setPreference("browser.helperApps.neverAsk.saveToDisk",
                              "application/pdf, application/octet-stream,text/csv,application/csv,application/excel, text/comma-separated-values");
        profile.setPreference("browser.download.dir",workingDir+"/downloads");
        profile.setPreference("pdfjs.migrationVersion", 1);
        profile.setPreference("extensions.firebug.netexport.defaultLogDir", workingDir + "/target/har");

        DesiredCapabilities capabilities = new DesiredCapabilities().firefox();
        capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
        capabilities.setBrowserName("firefox");
        capabilities.setCapability("disable-restore-session-state", true);

        return capabilities;
    }
}
