package com.namngo.javaproducer;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Produces;

public class NumberProducer {
    @Produces
    public String numberProducer = "7"
}
