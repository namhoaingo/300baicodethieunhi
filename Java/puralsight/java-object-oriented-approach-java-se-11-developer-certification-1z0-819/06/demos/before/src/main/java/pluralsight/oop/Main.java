package pluralsight.oop;

import pluralsight.oop.airspace.AirSector;
import pluralsight.oop.airspace.EnRouteSector;
import pluralsight.oop.airspace.TMASector;
import pluralsight.oop.geography.Circle;
import pluralsight.oop.geography.Coordinate;
import pluralsight.oop.geography.Rectangle;
import pluralsight.oop.radar.Aircraft;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        StoreInventory storeInventory = new StoreInventory();
        storeInventory.printStoreInventory();
    }
}

class StoreInventory {
    Set<String> superCycleSet = new TreeSet<>();
    List<String> myStoreList = new ArrayList<>();

    public StoreInventory() {
        myStoreList.add("Bicycle");
        myStoreList.add("Tricycle");
        myStoreList.add("Scooter");
    }


    public void collectCycleItems() {
        myStoreList.sort(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return 0;
            }
        });
    }
}