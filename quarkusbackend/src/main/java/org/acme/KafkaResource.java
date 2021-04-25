package org.acme;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("")
public class KafkaResource {

    @Inject
    KafkaConsumer consumer;
    
    @Path("/events")
    @GET
    public String events(){
        return consumer.getEvents();
    }

    @Path("/logs")
    @GET
    public String logs(){
        return consumer.getLogs();
    }
   
}