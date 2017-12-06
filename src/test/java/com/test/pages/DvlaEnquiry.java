package com.test.pages;

import com.test.FileScanner;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

public class DvlaEnquiry {

    FileScanner fileScanner = new FileScanner();

    List<String> regNumbers = new ArrayList<>();

    DvlaHome dvlaHome = new DvlaHome();

    @FindBy(id="Vrm")
    private WebElement inputBox;

    @FindBy(name="Continue")
    private WebElement continueButton;

    public void enterRegNnumber(String regNumber){
            inputBox.sendKeys(regNumber);
    }

    public void clikOnContinueButton() {
        continueButton.click();
    }

    public List<String> getRegumbers(String fileName) throws IOException, URISyntaxException {
        File[] files = fileScanner.scanDirectory();

        for(File file: files){
            if(file.getName().equalsIgnoreCase(fileName)){
                regNumbers =fileScanner.getRegFromCsvFile(file.getName(),"registration Numbers");
            }
        }
        return regNumbers;
    }
}
