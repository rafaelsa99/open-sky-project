# OpenSky Project
Practical assignment of the Software Engineering course of the Masters in Informatics Engineering of the University of Aveiro.

## Scope
<b>Site:</b> https://opensky-network.org/ </br></br>
<b>Realtime:</b> 
It provides information of planes inside the area of metropolitan Los Angeles (LA). The information will be displayed in a map and in a table.

<b>Historic:</b> 
It provides in a table the altitude at which planes enter the LA metropolitan area.

<b>Alarm/Event: </b> 
Event when a new plane enters in the area of metropolitan LA.


## Implementation
The project merges all the main concepts and technological solutions address in the first part of the course. The project addresses:
- <b>REST</b> - consuming and deploying 
- <b>JPA</b> - persistence using JPA 
- Messaging - using broker based messaging bus using <b>kafka</b>
  - Convey the distributed application log, using <b>log4j</b>
  - Event alarms 

It is deployed using <b>docker</b> containers. <b>Springboot</b> is used for the backend and <b>React</b> for the frontend.
#### Build and Start
```
docker-compose build
docker-compose up
```
