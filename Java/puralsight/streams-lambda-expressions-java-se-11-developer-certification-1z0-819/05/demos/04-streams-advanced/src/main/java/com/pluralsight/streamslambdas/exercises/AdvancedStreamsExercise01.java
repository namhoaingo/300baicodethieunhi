package com.pluralsight.streamslambdas.exercises;

import com.pluralsight.streamslambdas.Product;

import java.util.*;

public class AdvancedStreamsExercise01 {

    /**
     * Exercise 1: Collect product names into a sorted set.
     *
     * @param products A list of products.
     * @return A TreeSet containing the names of the products.
     */
    public Set<String> getSortedProductNames(List<Product> products) {
        // TODO: Collect the names of the products into a TreeSet.
        //
        // Hint: Use the collect() method that takes three functions parameters.
        // What is the purpose of each of these three functions and how do you implement them? (Consult the API documentation).
        // Use method references or lambda expressions to implement the three functions.


        Set<String> names =  products.stream()
                .collect(() -> new TreeSet<>((a,b) -> a.compareTo(b)), (TreeSet<String> strings, Product product ) -> strings.add(product.getName()), TreeSet<String>::addAll);
        System.out.println(names);
        return names;
//        throw new UnsupportedOperationException("Not yet implemented"); // Remove this line
    }
}
