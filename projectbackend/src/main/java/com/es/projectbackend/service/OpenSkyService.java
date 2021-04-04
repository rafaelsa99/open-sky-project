package com.es.projectbackend.service;

import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.es.projectbackend.model.Flight;
import com.es.projectbackend.repository.FlightRepository;

@Service
public class OpenSkyService {
	@Autowired
	private FlightRepository flightRepository;

	@Scheduled(fixedRate = 5000)
    public void updateData(){
        long unixTime = Instant.now().getEpochSecond() - 86400;
        long hourBeforTime = unixTime - 3600;
        RestTemplate restTemplate = new RestTemplate();
        //ResponseEntity<List<FlightData>> response = restTemplate.exchange("https://opensky-network.org/api/flights/arrival?airport=EGLL&begin=1517227200&end=1517230800", HttpMethod.GET, null, new ParameterizedTypeReference<List<FlightData>>() {});
        String url = "https://opensky-network.org/api/flights/arrival?airport=KLAX&begin=" + hourBeforTime + "&end=" + unixTime;
        ResponseEntity<List<Flight>> response = restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<List<Flight>>() {});
        flightRepository.saveAll(response.getBody());
    }
	
	public List<Flight> getAllFlights(){
		return flightRepository.findAll();
	}

}
