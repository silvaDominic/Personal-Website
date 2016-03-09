package com.photography.website;

import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

/**
 * Created by reclaimer on 3/1/16.
 */
@Configuration
@EnableWebMvc
public class MvcConfig extends WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        registry
                .addResourceHandler("/**")
                .addResourceLocations("file:/media/reclaimer/shared/software-development/photography-website/src/main/webapp/");
        registry
                .addResourceHandler("/church_album/**")
                .addResourceLocations("file:/media/reclaimer/shared/software-development/photography-website/src/main/resources/images/church_album/");
    }

    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/church_album").allowedOrigins("http://localhost:9000");
            }
        };
    }
}