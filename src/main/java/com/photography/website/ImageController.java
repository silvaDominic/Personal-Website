package com.photography.website;

import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
public class ImageController {
    @RequestMapping("/church_album")
    @ResponseBody
    String getImages() {

        return "{\"images\":[{\"filename\":\"IMG_5036.JPG\"}, " +
                "{\"filename\":\"IMG_5040.JPG\"}, " +
                "{\"filename\":\"IMG_5055.JPG\"}," +
                "{\"filename\":\"IMG_5058.JPG\"}," +
                "{\"filename\":\"IMG_5060.JPG\"}]}";
    }
}