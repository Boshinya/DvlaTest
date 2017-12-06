package com.test;

import org.junit.Test;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

public class FileValidationTests {

    FileScanner fileScanner = new FileScanner();

    @Test
    public void testGetFileNames() throws IOException, URISyntaxException {
        File[] files =fileScanner.scanDirectory();
        for(File file: files){
            System.out.println(fileScanner.getFileName(file));
        }
    }

    @Test
    public void testGetFileExtensions() throws IOException, URISyntaxException {
        File[] files =fileScanner.scanDirectory();
        for(File file: files){
            System.out.println(fileScanner.getFileExtension(file.getName()));
        }
    }
    @Test
    public void testGetFileSize() throws IOException, URISyntaxException {
        File[] files =fileScanner.scanDirectory();
        for(File file: files){
            System.out.println(fileScanner.getFileSizeinKb(file));
        }
    }

    @Test
    public void testGetFileMimeTypes() throws IOException, URISyntaxException {
        File[] files =fileScanner.scanDirectory();
        for(File file: files){
            System.out.println(fileScanner.getFileMimeType(file.getName()));
        }
    }

    @Test
    public void testGetOnlySpecificMimeTypeFiles() throws IOException, URISyntaxException {
        File[] files =fileScanner.getSupportedMimeFiles();
        for(File file: files){
            System.out.println(fileScanner.getFileMimeType(file.getName()));
        }
    }
}
