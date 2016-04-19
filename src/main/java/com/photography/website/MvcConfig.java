package com.photography.website;

import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

/**
 * Created by reclaimer on 3/1/16.
 */
@Configuration
@EnableWebMvc
public class MvcConfig extends WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter {}