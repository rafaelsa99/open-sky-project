package com.es.projectbackend.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.es.projectbackend.model.Plane;
import com.es.projectbackend.model.States;
import com.es.projectbackend.repository.PlaneRepository;

@Service
public class OpenSkyService {
	@Autowired
	private PlaneRepository planeRepository;
	
	private Collection<Plane> planes;
	
	private static final Double LAT_MIN = 33.741204;
	private static final Double LAT_MAX = 34.171230;
	private static final Double LON_MIN = -118.716612;
	private static final Double LON_MAX = -118.099742;
			
	@Scheduled(fixedRate = 5000)
    public void updateData(){
		String url = "https://opensky-network.org/api/states/all?lamin=" + LAT_MIN + "&lomin=" + LON_MIN + "&lamax=" + LAT_MAX + "&lomax=" + LON_MAX;
		RestTemplate restTemplate = new RestTemplate();
        States openSkyStates = restTemplate.getForObject(url, States.class);
        planes = openSkyStates.getStates();
        planeRepository.saveAll(openSkyStates.getStates());
    }
	
	public List<Plane> getAllPlanes(){
		if(planes != null)
			return new ArrayList<>(planes);
		return new ArrayList<>();
	}

	public List<Plane> getHistory() {
		return planeRepository.findAll();
	}

}
