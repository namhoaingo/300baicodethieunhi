package chap2;

public class ExecutionSequence_error {
    {
        System.out.println(_name);
    }

    String _name = "1";
    public ExecutionSequence_error(String name) {
        _name = name;
    }

    public static void main(String[] args) {
        ExecutionSequence executionSequence = new ExecutionSequence("2");
        System.out.println(executionSequence._name);
    }   
    
   
}

// Run in squence, 
// It will throw error