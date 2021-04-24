package org.acme;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
@Consumes(MediaType.APPLICATION_JSON)

public class KafkaResource {

    @Inject
    KafkaConsumer consumer;
    
    @GET
    public List<Message> message(){
        return messages;
    }
   
}