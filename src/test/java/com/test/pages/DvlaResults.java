package com.test.pages;

import com.test.FileScanner;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

public class DvlaResults {

    FileScanner fileScanner = new FileScanner();
    List<String> makeOfTheVehicle = new ArrayList<>();
    List<String> ColourOfTheVehicle = new ArrayList<>();

    @FindBy(css=".list-summary-item span strong")
    private List<WebElement> results;

    public String getMakeOftheVehicle(){
        return results.get(0).getText();
    }


    public String getColourOftheVehicle(){
        return results.get(1).getText();
    }

    public List<String> getMakeOfTheVehicle(String fileName) throws IOException, URISyntaxException {
        File[] files = fileScanner.scanDirectory();

        for(File file: files){
            if(file.getName().equalsIgnoreCase(fileName)){
                makeOfTheVehicle =fileScanner.getRegFromCsvFile(file.getName(),"Make");
            }
        }
        return makeOfTheVehicle;
    }

    public List<String> getColourOfTheVehicle(String fileName) throws IOException, URISyntaxException {
        File[] files = fileScanner.scanDirectory();

        for(File file: files){
            if(file.getName().equalsIgnoreCase(fileName)){
                makeOfTheVehicle =fileScanner.getRegFromCsvFile(file.getName(),"Colour");
            }
        }
        return ColourOfTheVehicle;
    }


}
