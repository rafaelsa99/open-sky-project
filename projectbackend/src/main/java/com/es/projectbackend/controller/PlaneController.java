package com.es.projectbackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.es.projectbackend.service.OpenSkyService;
import com.google.gson.Gson;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class PlaneController {
	@Autowired
	private OpenSkyService openSkyService;
	@GetMapping("/planes")
	public String getAllPlanes(){
		String planes = new Gson().toJson(openSkyService.getAllPlanes());
		return planes;
	}	
}
