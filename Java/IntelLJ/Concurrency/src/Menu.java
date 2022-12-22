public class Menu {
    enum Machine{
        AUTO("Trunk"), MEDICAL("Scanner");
        private String type;

        private Machine(String type){
            this.type = type;
        }

        private void setType(String type){
            this.type = type;
        }

        private String getType(){
            return type;
        }
    }

    public static void main(String[] args) {
        Machine.AUTO.setType("Sedan");
        for(Machine p: Machine.values()){
            System.out.println(p + ":" + p.getType());
        }
    }
}
