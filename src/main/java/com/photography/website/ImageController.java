package com.photography.website;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.ArrayList;

//@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
public class ImageController {
    /**
     * Processes a request to specific url sub-directory
     *
     * @return a JSON string
     */
    @RequestMapping("/church_album")
    @ResponseBody
    String getImages() {

        // Set resource path and create Image list
        String imgDirectory = "/media/reclaimer/shared/software-development/photography-website/src/main/resources/images/church_album";
        ArrayList<Image> files = listImageFiles(imgDirectory);
        System.out.println(imgDirectory);

        JSONObject JsonObj = new JSONObject(); // Initialize and instantiate JSON object
        JsonObj.put("images", convertToJSON(files)); // Convert Image files to JSON object and add to JSON object as 'images'
        System.out.println(JsonObj);

        return JsonObj.toString();
    }

    // Private Methods -----------------------------------------------------------------------------------------------

    /**
     * Creates a list of Image files
     *
     * @param directoryName The location of the files to be processed
     * @return a list of Image objects
     */
    private static ArrayList<Image> listImageFiles(String directoryName){
        // Initialize and instantiate File and Array/List objects
        File directory = new File(directoryName);
        File[] fileList = directory.listFiles();
        ArrayList<Image> imageList = new ArrayList<Image>();

        // If the file list is not empty and the files the correct type,
        // create a new Image object with the file name and add it to an imageList
        if (fileList != null) {
            for (File file: fileList){
                if (file.isFile()){
                    imageList.add(new Image(file.getName()));
                }
            }
        }
        return imageList;
    }

    /**
     * Converts a list of objects to a JSON String object
     *
     * @param list The list object to be converted
     * @return a JSON String object
     */
    private static ArrayList convertToJSON(ArrayList list){
        // Initialize and instantiate Object Mapper and JSON object
        ObjectMapper mapper = new ObjectMapper();
        ArrayList<String> jsonString = new ArrayList<String>();

        // Iterate over each item in list and convert it to a String,
        // add it to jsonString list
        for (Object item: list){
            try {
                String innerString = mapper.writeValueAsString(item);
                jsonString.add(innerString);
            } catch (JsonProcessingException e) { //Handle possible invalid types
                e.printStackTrace();
            }
        }
        return jsonString;
    }
}