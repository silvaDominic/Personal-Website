package com.personal.website;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.ServletContext;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

@RestController
public class ImageController {
    @Autowired
    ServletContext servletContext;

    // Request Mapping for albums ------------------------------------------------------------------------------------

    /**
     * Processes a request to specific url sub-directory
     *
     * @return a JSON string
     */
    @RequestMapping("/images/{path}")
    @ResponseBody
    String getAlbumImages(@PathVariable String path) {

        // Set resource path and create Image list
/*        String imgDirectory = "/media/reclaimer/shared/software-development/personal-website/src/main/webapp/resources/images/" + path + "/big";*/
        String imgDirectory = "/home/eeop-44/webapp/images/" + path + "/big";
        ArrayList<Image> files = listImageFiles(imgDirectory);
        //System.out.println(imgDirectory); <-- For debugging

        JSONObject JsonObj = new JSONObject(); // Initialize and instantiate JSON object
        JsonObj.put("images", convertToJSON(files)); // Convert Image files to JSON object and add to JSON object as 'images'
        //System.out.println(JsonObj); <-- For debugging

        return JsonObj.toString();
    }

    // Request Mapping for specific images ---------------------------------------------------------------------------

    /**
     * Handles particular image request for album
     *
     * @param id The requested image
     * @return byte code representation of Image object
     * @throws IOException if resource is of invalid type
     */
    @CrossOrigin(origins = "http://domsilva.com:8080/")
    @RequestMapping("/images/{path}/{id}")
    ResponseEntity<byte[]> getAlbumImageByID(@PathVariable String path, @PathVariable String id) throws IOException {
        // Set requested image as InputStream
        InputStream in = new FileInputStream("/home/eeop-44/webapp/images/" + path + "/big/" + id + ".jpg");

        // Initialize and instantiate HttpHeader object and set content type as JPEG
        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return new ResponseEntity<byte[]>(org.apache.commons.io.IOUtils.toByteArray(in), headers, HttpStatus.CREATED);
    }

    // Private Methods -----------------------------------------------------------------------------------------------

    /**
     * Creates a list of Image objects
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