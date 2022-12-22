package pluralsight.oop.aircraft;

@FunctionalInterface
 public interface AircraftFilter {
    boolean check(Aircraft a);
}
