package com.es.projectbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flight")
public class Flight {

	@Id
	private String icao24; // Unique ICAO 24-bit address of the transponder in hex string representation.
	@Column(name = "firstSeen")
	private Double firstSeen; // Estimated time of departure for the flight as Unix time (seconds since epoch).
	@Column(name = "estDepartureAirport")
	private String estDepartureAirport; // ICAO code of the estimated departure airport. Can be null if the airport could not be identified.
	@Column(name = "lastSeen")
	private Double lastSeen; // Estimated time of arrival for the flight as Unix time (seconds since epoch)
	@Column(name = "estArrivalAirport")
	private String estArrivalAirport; // ICAO code of the estimated arrival airport. Can be null if the airport could not be identified.
	@Column(name = "callsign")
	private String callsign; //Callsign of the vehicle (8 chars). Can be null if no callsign has been received.
	@Column(name = "estDepartureAirportHorizDistance")
	private Double estDepartureAirportHorizDistance; // Horizontal distance of the last received airborne position to the estimated departure airport in meters
	@Column(name = "estDepartureAirportVertDistance")
	private Double estDepartureAirportVertDistance; // Vertical distance of the last received airborne position to the estimated departure airport in meters
	@Column(name = "estArrivalAirportHorizDistance")
	private Double estArrivalAirportHorizDistance; // Horizontal distance of the last received airborne position to the estimated arrival airport in meters
	@Column(name = "estArrivalAirportVertDistance")
	private Double estArrivalAirportVertDistance; // Vertical distance of the last received airborne position to the estimated arrival airport in meters
	@Column(name = "departureAirportCandidatesCount")
	private Double departureAirportCandidatesCount; // 	Number of other possible departure airports. These are airports in short distance to estDepartureAirport.
	@Column(name = "arrivalAirportCandidatesCount")
	private Double arrivalAirportCandidatesCount; // Number of other possible departure airports. These are airports in short distance to estArrivalAirport.

	public String getIcao24() {
		return icao24;
	}
	public void setIcao24(String icao24) {
		this.icao24 = icao24;
	}
	public Double getFirstSeen() {
		return firstSeen;
	}
	public void setFirstSeen(Double firstSeen) {
		this.firstSeen = firstSeen;
	}
	public String getEstDepartureAirport() {
		return estDepartureAirport;
	}
	public void setEstDepartureAirport(String estDepartureAirport) {
		this.estDepartureAirport = estDepartureAirport;
	}
	public Double getLastSeen() {
		return lastSeen;
	}
	public void setLastSeen(Double lastSeen) {
		this.lastSeen = lastSeen;
	}
	public String getEstArrivalAirport() {
		return estArrivalAirport;
	}
	public void setEstArrivalAirport(String estArrivalAirport) {
		this.estArrivalAirport = estArrivalAirport;
	}
	public String getCallsign() {
		return callsign;
	}
	public void setCallsign(String callsign) {
		this.callsign = callsign;
	}
	public Double getEstDepartureAirportHorizDistance() {
		return estDepartureAirportHorizDistance;
	}
	public void setEstDepartureAirportHorizDistance(Double estDepartureAirportHorizDistance) {
		this.estDepartureAirportHorizDistance = estDepartureAirportHorizDistance;
	}
	public Double getEstDepartureAirportVertDistance() {
		return estDepartureAirportVertDistance;
	}
	public void setEstDepartureAirportVertDistance(Double estDepartureAirportVertDistance) {
		this.estDepartureAirportVertDistance = estDepartureAirportVertDistance;
	}
	public Double getEstArrivalAirportHorizDistance() {
		return estArrivalAirportHorizDistance;
	}
	public void setEstArrivalAirportHorizDistance(Double estArrivalAirportHorizDistance) {
		this.estArrivalAirportHorizDistance = estArrivalAirportHorizDistance;
	}
	public Double getEstArrivalAirportVertDistance() {
		return estArrivalAirportVertDistance;
	}
	public void setEstArrivalAirportVertDistance(Double estArrivalAirportVertDistance) {
		this.estArrivalAirportVertDistance = estArrivalAirportVertDistance;
	}
	public Double getDepartureAirportCandidatesCount() {
		return departureAirportCandidatesCount;
	}
	public void setDepartureAirportCandidatesCount(Double departureAirportCandidatesCount) {
		this.departureAirportCandidatesCount = departureAirportCandidatesCount;
	}
	public Double getArrivalAirportCandidatesCount() {
		return arrivalAirportCandidatesCount;
	}
	public void setArrivalAirportCandidatesCount(Double arrivalAirportCandidatesCount) {
		this.arrivalAirportCandidatesCount = arrivalAirportCandidatesCount;
	}
	
	
}
