package com.test;

import com.opencsv.CSVReader;
import com.google.common.collect.Lists;
import org.apache.commons.io.FilenameUtils;

import javax.activation.MimetypesFileTypeMap;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class FileScanner {

    private String resourceDir = "./src/test/resources/";

    private List<String> mimeType = Lists.newArrayList("text/comma-separated-values",
                                                       "text/csv",
                                                       "application/csv",
                                                       "application/excel",
                                                       "application/vnd.ms-excel",
                                                       "application/vnd.msexcel");

    public File[] scanDirectory() throws IOException, URISyntaxException {
        File folder = new File(resourceDir);
        File[] listOfFiles = folder.listFiles();
        return listOfFiles;

    }

    public String getFileMimeType(final String fileName)
    {
        final MimetypesFileTypeMap fileTypeMap = new MimetypesFileTypeMap();
        return fileTypeMap.getContentType(fileName);
    }

    public String getFileExtension(final String fileName){
        return FilenameUtils.getExtension(fileName);
    }


    public long getFileSizeinKb(final File file){
        return file.length()/1024;
    }

    public String getFileName(final File file){
        return file.getName();
    }


    public File[] getSupportedMimeFiles() throws IOException, URISyntaxException {
        File[] listOfFiles = scanDirectory();
        File[] excelOrCsvFiles = new File[0];

        for(int i=0;i<listOfFiles.length;i++){
            String mimeType = getFileMimeType(listOfFiles[i].getName());
            if(mimeType.contains(mimeType)){
                excelOrCsvFiles[i]=listOfFiles[i];
            }
        }
        return excelOrCsvFiles;
    }


    public List<String> getRegFromCsvFile(String csvFile, String colName) throws IOException, URISyntaxException {
        CSVReader csvReader = new CSVReader(new FileReader(resourceDir+ File.separator +csvFile));
        String[] nextLine;
        List<String> regNames = new ArrayList<>();
        while ((nextLine = csvReader.readNext()) != null) {
            regNames.add(nextLine[0]);
        }
        csvReader.close();
        regNames.remove(colName);
        regNames.removeAll(Collections.singleton(""));
        return regNames;
    }

}
